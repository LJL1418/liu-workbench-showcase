const stages = [
  {
    kicker: '数据标注',
    title: '先把训练样本整理清楚',
    desc: '图片管理、矩形框标注、类别维护和 YOLO 数据集导出放在同一个工作台里完成',
    image: './assets/screenshots/annotation.png',
    alt: '数据标注界面',
  },
  {
    kicker: '新建训练',
    title: '配置参数后进入训练队列',
    desc: '选择数据集、模型权重、训练轮次和设备策略，由平台完成 GPU 调度和实时监控',
    image: './assets/screenshots/train.png',
    alt: '新建训练界面',
  },
  {
    kicker: '训练结果',
    title: '复盘指标、图片和权重文件',
    desc: 'mAP、loss、混淆矩阵、PR 曲线和权重文件统一归档，方便比较每一轮表现',
    image: './assets/screenshots/results.png',
    alt: '训练结果界面',
  },
  {
    kicker: '智能问答',
    title: '最后用 Agent 继续追问和验证',
    desc: 'Agent 可查询模型与数据知识库，并调用 detect_image 等工具辅助判断样本效果',
    image: './assets/screenshots/ai-chat.png',
    alt: '智能问答 Agent 模式界面',
  },
]

const revealElements = document.querySelectorAll('.section-reveal')
const stageTabs = document.querySelectorAll('.stage-tab')
const stageKicker = document.querySelector('#stage-kicker')
const stageTitle = document.querySelector('#stage-title')
const stageDesc = document.querySelector('#stage-desc')
const stageImage = document.querySelector('#stage-image')
const stageDevice = document.querySelector('.device--stage')
const progressBar = document.querySelector('.scroll-progress')
let activeStage = 0
let carouselTimer = null

function setStage(index) {
  const nextStage = stages[index]
  if (!nextStage || !stageKicker || !stageTitle || !stageDesc || !stageImage) {
    return
  }

  activeStage = index
  stageDevice?.classList.add('is-switching')
  stageKicker.textContent = nextStage.kicker
  stageTitle.textContent = nextStage.title
  stageDesc.textContent = nextStage.desc
  window.setTimeout(() => {
    stageImage.src = nextStage.image
    stageImage.alt = nextStage.alt
    stageDevice?.classList.remove('is-switching')
  }, 120)

  stageTabs.forEach((tab, tabIndex) => {
    tab.classList.toggle('is-active', tabIndex === activeStage)
  })
}

function startCarousel() {
  window.clearInterval(carouselTimer)
  carouselTimer = window.setInterval(() => {
    setStage((activeStage + 1) % stages.length)
  }, 5200)
}

stageTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const index = Number(tab.dataset.stage)
    setStage(index)
    startCarousel()
  })
})

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.16 },
  )

  revealElements.forEach((element) => revealObserver.observe(element))
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'))
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href')
    const target = targetId ? document.querySelector(targetId) : null
    if (!target) return

    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})

function updateScrollProgress() {
  if (!progressBar) return

  const maxScroll =
    document.documentElement.scrollHeight - document.documentElement.clientHeight
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0
  progressBar.style.width = `${Math.min(progress, 1) * 100}%`
}

window.addEventListener('scroll', updateScrollProgress, { passive: true })
window.addEventListener('resize', updateScrollProgress)

setStage(0)
startCarousel()
updateScrollProgress()
