const workflowStages = [
  {
    label: '数据标注 · 数据管理',
    title: '从原始图片建立可训练数据集',
    description:
      '在 Konva 画布中完成矩形框标注、类别维护、撤销重做与自动保存；导出 train / val、YOLO 标签和 data.yaml 后，通过本地目录或 YAML 注册数据集并校验路径与类别。',
    points: [
      '支持长期项目与无需建档的快速标注',
      '目录校验、类别推断与图片数量同步',
      '源数据保留在服务器本地，无需上传整包',
    ],
    output: '可复用的 YOLO 标准数据集',
    images: ['./assets/screenshots/annotation-workspace.jpg', './assets/screenshots/annotation-projects.jpg', './assets/screenshots/datasets.jpg'],
    alts: ['Liu Studio 数据标注工作台', 'Liu Studio 数据标注项目管理', 'Liu Studio 数据管理页面'],
    captions: ['标注工作台', '项目管理与快速标注', '数据集注册与校验'],
    url: 'Liu Studio / 数据标注',
  },
  {
    label: '新建训练 · GPU 调度',
    title: '把复杂训练参数变成可检查的配置',
    description:
      '选择数据集、预训练权重、Conda 环境和目标设备，配置 epochs、batch、输入尺寸、优化器、损失权重与数据增强。提交后，调度器根据 GPU 状态立即运行或加入 FIFO 队列。',
    points: [
      '支持指定单卡、多卡 DDP、任意空闲卡与 CPU',
      '显存占用较高的设备会提示不可选',
      '可开启 Agent 智能调参并设置最大迭代轮数',
    ],
    output: '可追踪、可复现的训练任务',
    images: ['./assets/screenshots/train-config.jpg', './assets/screenshots/train-agent.jpg'],
    alts: ['Liu Studio 新建训练基础配置页面', 'Liu Studio 新建训练高级参数与 Agent 调参页面'],
    captions: ['基础配置与设备选择', '高级参数与 Agent 调参'],
    url: 'Liu Studio / 新建训练',
  },
  {
    label: '任务监控 · WebSocket',
    title: '训练状态、曲线和日志同步更新',
    description:
      '任务详情页实时接收 Ultralytics 日志与结构化指标，持续刷新 Loss、Precision、Recall、mAP、epoch 进度和预计剩余时间；异常信息与 Agent 事件也在同一页面呈现。',
    points: [
      '训练列表按运行、等待、完成与失败状态筛选',
      'Agent 多轮任务按组展开，每轮可独立查看',
      '支持取消运行任务与移除等待任务',
    ],
    output: '实时、透明的训练过程记录',
    images: ['./assets/screenshots/task-monitor.jpg', './assets/screenshots/task-detail.jpg'],
    alts: ['Liu Studio 任务监控与 Agent 分组页面', 'Liu Studio 训练任务详情与实时曲线页面'],
    captions: ['任务列表与 Agent 分组', '实时曲线、进度与日志'],
    url: 'Liu Studio / 任务详情',
  },
  {
    label: '训练结果 · AI 分析',
    title: '让每轮实验留下完整证据',
    description:
      '最终指标、results 图、混淆矩阵、PR / F1 曲线、权重文件与训练事件统一归档。可导出结构化训练报告，也可调用多模态 LLM 流式生成分析建议并保存历史报告。',
    points: [
      '下载 best.pt、last.pt 与相关结果文件',
      '原始训练报告和 AI 分析报告均可导出 PDF',
      '多轮 Agent 实验可切换查看和横向比较',
    ],
    output: '可复盘的指标、报告与模型权重',
    images: ['./assets/screenshots/results-metrics.jpg', './assets/screenshots/results-charts.jpg', './assets/screenshots/ai-analysis.jpg'],
    alts: ['Liu Studio 训练指标、事件与模型文件页面', 'Liu Studio 训练结果图表与文件页面', 'Liu Studio 多模态 AI 分析报告'],
    captions: ['指标、事件与模型文件', '训练图表与可视化结果', '多模态 AI 分析报告'],
    url: 'Liu Studio / 训练结果',
  },
  {
    label: '模型测试 · 人工纠正',
    title: '在新数据上验证，再把问题修回来',
    description:
      '从已完成任务、自定义权重或预置模型中选择模型，对数据集、文件夹、上传文件或标注项目执行批量推理。结果可逐图调整检测框、补标、删除或标记为背景。',
    points: [
      '置信度、IoU、输入尺寸与运行设备可配置',
      '支持中止、单图重推和批量背景标记',
      '标签可导出为 YOLO、VOC、COCO 或 CSV',
    ],
    output: '经人工确认的检测结果与回流数据',
    images: ['./assets/screenshots/model-test-config.jpg', './assets/screenshots/model-test-results.jpg'],
    alts: ['Liu Studio 模型与测试数据选择页面', 'Liu Studio 模型测试与检测框纠正页面'],
    captions: ['模型与测试数据选择', '推理结果与人工纠正'],
    url: 'Liu Studio / 模型测试',
  },
  {
    label: '业务 Agent · 模型导出',
    title: '从实验权重继续走向业务验证',
    description:
      '在智能问答中开启 Agent「乐悠」，用自然语言查询可用模型与数据、执行图片或目录检测、导出 ONNX；若已配置昇腾环境，还可远程转换 OM、完成推理测试并取回结果图。',
    points: [
      '工具调用状态通过 SSE 实时展示',
      '故障标准 RAG 可提供条文依据与参考图例',
      '昇腾参数未配置时返回明确的可处理提示',
    ],
    output: 'ONNX / OM 模型与业务检测结果',
    images: ['./assets/screenshots/ai-agent-1.jpg', './assets/screenshots/ai-agent-2.jpg'],
    alts: ['Liu Studio 业务 Agent 查询与检测页面', 'Liu Studio 业务 Agent 转换与测试工具页面'],
    captions: ['Agent 查询与检测', 'Agent 转换与测试'],
    url: 'Liu Studio / Agent 乐悠',
  },
]

const aiModes = [
  {
    badge: '对话辅助',
    title: '懂 YOLO，也懂你的实验上下文',
    description:
      '支持思考与专家模式，可上传图片及常见文档，适合解释训练参数、诊断指标、阅读材料和持续追问。',
    tags: ['流式响应', '图片输入', 'Office / PDF 附件', '会话历史'],
    image: './assets/screenshots/ai-chat.jpg',
    alt: 'Liu Studio 智能问答聊天模式',
    url: '智能问答 / 专家模式',
  },
  {
    badge: '检索增强',
    title: '两个知识库，按问题意图自动分流',
    description:
      '故障标准、编码与等级问题进入 TFDS 图文知识库；平台操作问题进入使用手册知识库。混合检索结合硬通道、BM25、向量与 Reranker，并可展示参考图例。',
    tags: ['TFDS 故障标准', '平台使用手册', '意图改写', '图例回传'],
    image: './assets/screenshots/ai-knowledge-1.jpg',
    alt: 'Liu Studio 通过知识库回答 TFDS 故障标准并展示图例',
    url: '智能问答 / 双知识库 RAG',
  },
  {
    badge: '执行任务',
    title: 'Agent「乐悠」把自然语言变成工具调用',
    description:
      'Agent 可查模型、查数据、执行检测、导出 ONNX，并在已配置环境中转换和测试昇腾 OM；每一步工具状态、结论与结果图都回到当前会话。',
    tags: ['查询模型 / 数据', '执行检测', '导出 ONNX', '转换 / 测试 OM'],
    image: './assets/screenshots/ai-agent-1.jpg',
    alt: 'Liu Studio Agent 乐悠执行模型查询、数据查询与检测',
    url: '智能问答 / Agent 乐悠',
  },
]

const workflowTabs = [...document.querySelectorAll('.workflow-tab')]
const stageFrame = document.querySelector('#stage-frame')
const stageLabel = document.querySelector('#stage-label')
const stageTitle = document.querySelector('#stage-title')
const stageDescription = document.querySelector('#stage-description')
const stagePoints = document.querySelector('#stage-points')
const stageOutput = document.querySelector('#stage-output')
const stageImage = document.querySelector('#stage-image')
const stageUrl = document.querySelector('#stage-url')
const stagePrevious = document.querySelector('#stage-prev')
const stageNext = document.querySelector('#stage-next')
const stageCaption = document.querySelector('#stage-caption')
const stageCurrent = document.querySelector('#stage-current')
const stageTotal = document.querySelector('#stage-total')
const workflowShell = document.querySelector('.workflow-shell')
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const preloadedScreenshots = new Map()

function preloadScreenshot(source) {
  if (!source || preloadedScreenshots.has(source)) return
  const preloader = new Image()
  preloader.decoding = 'async'
  preloader.src = source
  preloadedScreenshots.set(source, preloader)
}

function preloadScreenshots(sources) {
  sources.forEach(preloadScreenshot)
}

function preloadWhenNearby(element, sources) {
  const preload = () => preloadScreenshots(sources)
  if (!element || !('IntersectionObserver' in window)) {
    preload()
    return
  }

  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return
    preload()
    observer.disconnect()
  }, { rootMargin: '500px 0px' })
  observer.observe(element)
}

function finishImageTransition(element, animate) {
  if (!animate) return
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => element.classList.remove('is-switching'))
  })
}

const WORKFLOW_STAGE_DELAY = 7000
const WORKFLOW_SLIDE_DELAY = 4500
let activeWorkflowStage = 0
let activeWorkflowSlide = 0
let workflowStageTimer = null
let workflowSlideTimer = null
let workflowInView = false
let workflowHovered = false
let workflowFocused = false

function stopWorkflowAutoplay() {
  window.clearTimeout(workflowStageTimer)
  window.clearTimeout(workflowSlideTimer)
  workflowStageTimer = null
  workflowSlideTimer = null
}

function canAutoplayWorkflow() {
  return !prefersReducedMotion && workflowInView && !workflowHovered && !workflowFocused && !document.hidden
}

function scheduleWorkflowStage() {
  window.clearTimeout(workflowStageTimer)
  if (!canAutoplayWorkflow() || workflowTabs.length < 2) return
  workflowStageTimer = window.setTimeout(() => {
    setWorkflowStage((activeWorkflowStage + 1) % workflowTabs.length)
  }, WORKFLOW_STAGE_DELAY)
}

function scheduleWorkflowSlide() {
  window.clearTimeout(workflowSlideTimer)
  const stage = workflowStages[activeWorkflowStage]
  if (!canAutoplayWorkflow() || !stage || stage.images.length < 2) return
  workflowSlideTimer = window.setTimeout(() => {
    renderWorkflowSlide(activeWorkflowSlide + 1)
    scheduleWorkflowSlide()
  }, WORKFLOW_SLIDE_DELAY)
}

function refreshWorkflowAutoplay() {
  stopWorkflowAutoplay()
  scheduleWorkflowStage()
  scheduleWorkflowSlide()
}

function renderWorkflowSlide(nextIndex, animate = true) {
  const stage = workflowStages[activeWorkflowStage]
  if (!stage || !stageFrame || !stageImage) return

  const total = stage.images.length
  activeWorkflowSlide = (nextIndex + total) % total
  if (animate) stageFrame.classList.add('is-switching')
  const source = stage.images[activeWorkflowSlide]
  stageImage.src = source
  stageImage.alt = stage.alts[activeWorkflowSlide]
  stageFrame.dataset.image = source
  if (stageCaption) stageCaption.textContent = stage.captions[activeWorkflowSlide]
  if (stageCurrent) stageCurrent.textContent = String(activeWorkflowSlide + 1)
  if (stageTotal) stageTotal.textContent = String(total)
  preloadScreenshot(stage.images[(activeWorkflowSlide + 1) % total])
  finishImageTransition(stageFrame, animate)
}

function setWorkflowStage(index) {
  const stage = workflowStages[index]
  if (!stage || !stageFrame || !stageLabel || !stageTitle || !stageDescription || !stagePoints || !stageOutput || !stageImage || !stageUrl) return

  stopWorkflowAutoplay()

  workflowTabs.forEach((tab, tabIndex) => {
    const isActive = tabIndex === index
    tab.classList.toggle('is-active', isActive)
    tab.setAttribute('aria-selected', String(isActive))
    tab.tabIndex = isActive ? 0 : -1
  })

  stageFrame.classList.add('is-switching')
  activeWorkflowStage = index
  activeWorkflowSlide = 0
  stageLabel.textContent = stage.label
  stageTitle.textContent = stage.title
  stageDescription.textContent = stage.description
  stagePoints.replaceChildren(...stage.points.map((point) => {
    const item = document.createElement('li')
    item.textContent = point
    return item
  }))
  stageOutput.textContent = stage.output
  stageUrl.textContent = stage.url
  preloadScreenshots(stage.images)
  renderWorkflowSlide(0, false)
  finishImageTransition(stageFrame, true)
  scheduleWorkflowStage()
  scheduleWorkflowSlide()
}

stagePrevious?.addEventListener('click', (event) => {
  event.stopPropagation()
  renderWorkflowSlide(activeWorkflowSlide - 1)
  scheduleWorkflowSlide()
})

stageNext?.addEventListener('click', (event) => {
  event.stopPropagation()
  renderWorkflowSlide(activeWorkflowSlide + 1)
  scheduleWorkflowSlide()
})

workflowTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => setWorkflowStage(index))
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    let nextIndex = index
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + workflowTabs.length) % workflowTabs.length
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % workflowTabs.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = workflowTabs.length - 1
    setWorkflowStage(nextIndex)
    workflowTabs[nextIndex].focus()
  })
})

workflowShell?.addEventListener('mouseenter', () => {
  workflowHovered = true
  stopWorkflowAutoplay()
})

workflowShell?.addEventListener('mouseleave', () => {
  workflowHovered = false
  refreshWorkflowAutoplay()
})

workflowShell?.addEventListener('focusin', () => {
  workflowFocused = true
  stopWorkflowAutoplay()
})

workflowShell?.addEventListener('focusout', (event) => {
  if (workflowShell.contains(event.relatedTarget)) return
  workflowFocused = false
  refreshWorkflowAutoplay()
})

if (workflowShell && 'IntersectionObserver' in window) {
  const workflowObserver = new IntersectionObserver(([entry]) => {
    workflowInView = entry.isIntersecting
    refreshWorkflowAutoplay()
  }, { threshold: 0.25 })
  workflowObserver.observe(workflowShell)
} else {
  workflowInView = true
  refreshWorkflowAutoplay()
}

preloadWhenNearby(workflowShell, workflowStages.flatMap((stage) => stage.images))

document.addEventListener('visibilitychange', refreshWorkflowAutoplay)

const aiTabs = [...document.querySelectorAll('.ai-tab')]
const aiFrame = document.querySelector('#ai-frame')
const aiImage = document.querySelector('#ai-image')
const aiUrl = document.querySelector('#ai-url')
const aiBadge = document.querySelector('#ai-badge')
const aiTitle = document.querySelector('#ai-title')
const aiDescription = document.querySelector('#ai-description')
const aiTags = document.querySelector('#ai-tags')
const aiLayout = document.querySelector('.ai-layout')
const AI_MODE_DELAY = 6500
let activeAiMode = 0
let aiModeTimer = null
let aiInView = false
let aiHovered = false
let aiFocused = false

function stopAiAutoplay() {
  window.clearTimeout(aiModeTimer)
  aiModeTimer = null
}

function scheduleAiAutoplay() {
  stopAiAutoplay()
  if (prefersReducedMotion || !aiInView || aiHovered || aiFocused || document.hidden || aiTabs.length < 2) return
  aiModeTimer = window.setTimeout(() => {
    setAiMode((activeAiMode + 1) % aiTabs.length)
  }, AI_MODE_DELAY)
}

function setAiMode(index) {
  const mode = aiModes[index]
  if (!mode || !aiFrame || !aiImage || !aiUrl || !aiBadge || !aiTitle || !aiDescription || !aiTags) return

  stopAiAutoplay()

  aiTabs.forEach((tab, tabIndex) => {
    const isActive = tabIndex === index
    tab.classList.toggle('is-active', isActive)
    tab.setAttribute('aria-selected', String(isActive))
    tab.tabIndex = isActive ? 0 : -1
  })

  aiFrame.classList.add('is-switching')
  activeAiMode = index
  aiBadge.textContent = mode.badge
  aiTitle.textContent = mode.title
  aiDescription.textContent = mode.description
  aiTags.replaceChildren(...mode.tags.map((tag) => {
    const item = document.createElement('span')
    item.textContent = tag
    return item
  }))
  aiImage.src = mode.image
  aiImage.alt = mode.alt
  aiUrl.textContent = mode.url
  aiFrame.dataset.image = mode.image
  preloadScreenshots(aiModes.map((item) => item.image))
  finishImageTransition(aiFrame, true)
  scheduleAiAutoplay()
}

preloadWhenNearby(aiLayout, aiModes.map((mode) => mode.image))

aiTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => setAiMode(index))
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    let nextIndex = index
    if (['ArrowUp', 'ArrowLeft'].includes(event.key)) nextIndex = (index - 1 + aiTabs.length) % aiTabs.length
    if (['ArrowDown', 'ArrowRight'].includes(event.key)) nextIndex = (index + 1) % aiTabs.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = aiTabs.length - 1
    setAiMode(nextIndex)
    aiTabs[nextIndex].focus()
  })
})

aiLayout?.addEventListener('mouseenter', () => {
  aiHovered = true
  stopAiAutoplay()
})

aiLayout?.addEventListener('mouseleave', () => {
  aiHovered = false
  scheduleAiAutoplay()
})

aiLayout?.addEventListener('focusin', () => {
  aiFocused = true
  stopAiAutoplay()
})

aiLayout?.addEventListener('focusout', (event) => {
  if (aiLayout.contains(event.relatedTarget)) return
  aiFocused = false
  scheduleAiAutoplay()
})

if (aiLayout && 'IntersectionObserver' in window) {
  const aiObserver = new IntersectionObserver(([entry]) => {
    aiInView = entry.isIntersecting
    scheduleAiAutoplay()
  }, { threshold: 0.25 })
  aiObserver.observe(aiLayout)
} else {
  aiInView = true
  scheduleAiAutoplay()
}

document.addEventListener('visibilitychange', scheduleAiAutoplay)

const revealItems = document.querySelectorAll('.section-reveal')
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' })
  revealItems.forEach((item) => revealObserver.observe(item))
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'))
}

const progressBar = document.querySelector('.scroll-progress')
function updateProgress() {
  if (!progressBar) return
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0
  progressBar.style.width = `${Math.min(1, Math.max(0, progress)) * 100}%`
}

let scrollFrame = null
window.addEventListener('scroll', () => {
  if (scrollFrame) return
  scrollFrame = window.requestAnimationFrame(() => {
    updateProgress()
    scrollFrame = null
  })
}, { passive: true })
updateProgress()

document.querySelectorAll('.module-carousel').forEach((carousel) => {
  const slides = (carousel.dataset.slides || '').split('|').filter(Boolean)
  const alts = (carousel.dataset.alts || '').split('|')
  const captions = (carousel.dataset.captions || '').split('|')
  const image = carousel.querySelector('img')
  const previousButton = carousel.querySelector('.carousel-prev')
  const nextButton = carousel.querySelector('.carousel-next')
  const currentLabel = carousel.querySelector('.carousel-current')
  const totalLabel = carousel.querySelector('.carousel-total')
  const captionLabel = carousel.querySelector('.carousel-caption')
  const status = carousel.querySelector('.carousel-status')
  let activeIndex = 0
  let autoTimer = null
  let isInView = false
  let isHovered = false
  let isFocused = false

  if (!image || slides.length < 2) return
  if (totalLabel) totalLabel.textContent = String(slides.length)
  status?.setAttribute('aria-live', 'polite')
  preloadWhenNearby(carousel, slides)

  function showSlide(nextIndex) {
    activeIndex = (nextIndex + slides.length) % slides.length
    carousel.classList.add('is-switching')
    const source = slides[activeIndex]
    image.src = source
    image.alt = alts[activeIndex] || captions[activeIndex] || '平台功能截图'
    carousel.dataset.image = source
    if (currentLabel) currentLabel.textContent = String(activeIndex + 1)
    if (captionLabel) captionLabel.textContent = captions[activeIndex] || `第 ${activeIndex + 1} 张截图`
    preloadScreenshot(slides[(activeIndex + 1) % slides.length])
    finishImageTransition(carousel, true)
  }

  function stopAutoplay() {
    window.clearTimeout(autoTimer)
    autoTimer = null
  }

  function scheduleAutoplay() {
    stopAutoplay()
    if (prefersReducedMotion || !isInView || isHovered || isFocused || document.hidden) return
    autoTimer = window.setTimeout(() => {
      showSlide(activeIndex + 1)
      scheduleAutoplay()
    }, 4500)
  }

  previousButton?.addEventListener('click', (event) => {
    event.stopPropagation()
    showSlide(activeIndex - 1)
    scheduleAutoplay()
  })

  nextButton?.addEventListener('click', (event) => {
    event.stopPropagation()
    showSlide(activeIndex + 1)
    scheduleAutoplay()
  })

  carousel.addEventListener('mouseenter', () => {
    isHovered = true
    stopAutoplay()
  })

  carousel.addEventListener('mouseleave', () => {
    isHovered = false
    scheduleAutoplay()
  })

  carousel.addEventListener('focusin', () => {
    isFocused = true
    stopAutoplay()
  })

  carousel.addEventListener('focusout', (event) => {
    if (carousel.contains(event.relatedTarget)) return
    isFocused = false
    scheduleAutoplay()
  })

  if ('IntersectionObserver' in window) {
    const carouselObserver = new IntersectionObserver(([entry]) => {
      isInView = entry.isIntersecting
      scheduleAutoplay()
    }, { threshold: 0.35 })
    carouselObserver.observe(carousel)
  } else {
    isInView = true
    scheduleAutoplay()
  }

  document.addEventListener('visibilitychange', scheduleAutoplay)
})

const imageDialog = document.querySelector('.image-dialog')
const dialogImage = imageDialog?.querySelector('img')
const dialogClose = imageDialog?.querySelector('.dialog-close')

function openImageDialog(source, alt) {
  if (!imageDialog || !dialogImage || !source) return
  dialogImage.src = source
  dialogImage.alt = alt || '放大的平台界面截图'
  document.body.classList.add('is-dialog-open')
  if (typeof imageDialog.showModal === 'function') imageDialog.showModal()
}

document.querySelectorAll('.image-trigger').forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    if (event.target.closest('.carousel-controls')) return
    const shouldOpen = event.target.closest('.expand-button, .module-expand') || event.target.tagName === 'IMG'
    if (!shouldOpen) return
    const source = trigger.dataset.image
    const alt = trigger.querySelector('img')?.alt
    openImageDialog(source, alt)
  })
})

function closeImageDialog() {
  if (!imageDialog) return
  imageDialog.close()
  document.body.classList.remove('is-dialog-open')
}

dialogClose?.addEventListener('click', closeImageDialog)
imageDialog?.addEventListener('click', (event) => {
  if (event.target === imageDialog) closeImageDialog()
})
imageDialog?.addEventListener('close', () => {
  document.body.classList.remove('is-dialog-open')
  if (dialogImage) dialogImage.src = ''
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && imageDialog?.open) closeImageDialog()
})
