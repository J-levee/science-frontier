// 科学边界 · 深度科普专题数据
// 40 个专题：沿用 6 分类框架。exists:true 为已有页（仅用于索引卡片，不重新生成文件）。
// 内容三审三校：规范性（双tab脚手架一致）/ 正确性（事实可溯源）/ 可读性（故事+图画+比喻）。
const TOPICS = [
  // ───────────────────────── 宇宙物理 ─────────────────────────
  { slug:'dark-energy', title:'暗能量与宇宙命运', icon:'🌌', category:'宇宙物理', exists:true,
    cardDesc:'宇宙学 · 是什么在加速宇宙膨胀？三种宇宙结局。' },
  { slug:'black-hole', title:'黑洞：连光都无法逃脱', icon:'🕳️', category:'宇宙物理', exists:false,
    eyebrow:'前沿问题 · 黑洞', tags:['宇宙物理','广义相对论'], cardDesc:'连光都逃不出的时空陷阱，藏着宇宙最极端的秘密。',
    story:`<div class="hook">💡 光跑得最快，却仍有东西能把它"关"在里面——那就是黑洞。它不黑，只是连光都逃不出来，所以我们看不到它，只能看见它"吃掉"东西时溅起的火花。</div>
<div class="section">
  <h2>一、为什么会有"逃不掉的"地方<span data-ai-q="黑洞到底是什么？为什么连光都逃不出来？"></span></h2>
  <p>引力的本质是"把东西往下拉"。地球用引力把你按在地面上，你跳起来还能落回地面，是因为你的速度不够快——只要达到"逃逸速度"（地球约每秒 11.2 公里），你就能永远离开。</p>
  <p>物体的质量越大、挤得越密，表面的逃逸速度就越高。当一颗足够大的恒星在生命尽头坍缩成一个极小的点，它表面的逃逸速度会超过光速。而宇宙中没有任何东西比光快，于是连光也被困住——这就是"黑洞"。它的边界叫<strong>事件视界</strong>，跨过这条线，就再没有回头路。</p>
</div>
<div class="section">
  <h2>二、怎么"看见"一个看不见的东西<span data-ai-q="既然黑洞不发光，科学家怎么知道它存在？"></span></h2>
  <p>黑洞自己不发光，但它周围的物质会"出卖"它。掉向黑洞的气体被剧烈压缩、升温到上百万度，发出强烈的 X 射线；物质还会绕着黑洞转成一圈发光的"吸积盘"。2019 年，事件视界望远镜用分布全球的射电望远镜联网，拍到了人类第一张黑洞照片——一个发光的甜甜圈，中间漆黑的圆洞就是视界。</p>
  <div class="analogy">
    <h3>🔍 打个比方：瀑布边的漩涡</h3>
    <p>想象河边一个越转越急的漩涡：离中心远的水还能游回来，但越过某条看不见的界线后，水流快过你游泳的速度，你就被卷进去了。黑洞的视界就是那条"再也回不来"的界线，而漩涡中心就是奇点。</p>
  </div>
</div>
<div class="section">
  <h2>三、它让我们重新思考时空<span data-ai-q="黑洞研究对我们理解宇宙有什么用？"></span></h2>
  <p>黑洞是检验爱因斯坦广义相对论的天然实验室。2015 年，引力波探测器第一次"听"到两个黑洞相撞的时空涟漪，直接证实了百年前的预言。黑洞还逼出了物理学最大的难题：在视界深处，描述大尺度的引力理论与描述微观的量子理论相互矛盾——我们至今没有一套能同时管住两者的理论。</p>
  <p>更神秘的是"黑洞信息悖论"：被黑洞吞掉的信息，是永远消失了，还是以某种方式保留了？这个问题悬而未决，正指引着下一代量子引力理论的探索。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>黑洞不是"洞"，而是引力强到连光都逃不出的时空区域。我们靠它周围发光的物质和撞出的引力波来认识它，而它正卡在引力与量子理论之间的裂缝上，是通往新物理的钥匙。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>黑洞（Black Hole）</b> 由广义相对论预言：质量 M 压缩到史瓦西半径 Rs = 2GM/c² 以内即形成事件视界。视界内逃逸速度超过光速。</p>
      <p>关键类型：恒星级黑洞（数倍至数十倍太阳质量）、超大质量黑洞（星系中心，10⁶–10⁹ M☉）、中等质量与微型黑洞（理论）。旋转黑洞由克尔度规描述。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>2019 年 EHT 发布 M87* 图像；2022 年发布人马座 A* 图像。引力波探测器 LIGO/Virgo 已多次探测到双黑洞并合。黑洞信息悖论、奇点物理仍是开放问题。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>爱因斯坦 · 史瓦西 · 彭罗斯（2020 诺奖）· 根策尔与盖兹（2020 诺奖，证实银心黑洞）· 霍金</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/Black_hole" target="_blank" rel="noopener">维基百科：黑洞</a> · <a href="https://eventhorizontelescope.org/" target="_blank" rel="noopener">事件视界望远镜 EHT</a> · <a href="https://www.nobelprize.org/prizes/physics/2020/summary/" target="_blank" rel="noopener">2020 诺贝尔物理学奖</a></p>
    </div>`,
    related:[{label:'暗能量与宇宙命运',href:'dark-energy.html'},{label:'引力波：时空的涟漪',href:'gravitational-waves.html'},{label:'宇宙微波背景',href:'cmb.html'},{label:'量子纠错',href:'quantum-error.html'}],
    ai:{ topic:'黑洞', icebreakers:['黑洞到底是怎么形成的？为什么光都逃不出来？','事件视界望远镜是怎么给黑洞拍照的？','掉进黑洞会怎样？什么是时空弯曲？','银河系中心真的有个超大黑洞吗？'] } },

  { slug:'gravitational-waves', title:'引力波：时空的涟漪', icon:'🌊', category:'宇宙物理', exists:false,
    eyebrow:'前沿问题 · 引力波', tags:['宇宙物理','相对论'], cardDesc:'爱因斯坦预言的时空涟漪，百年后终于被听见。',
    story:`<div class="hook">💡 宇宙里两个黑洞相撞，不会发出声音，却会让空间本身"抖"一下——这种时空的涟漪，就是引力波。人类等了整整一百年，才第一次"听"到它。</div>
<div class="section">
  <h2>一、空间也会"起波浪"<span data-ai-q="引力波到底是什么？为什么说空间会波动？"></span></h2>
  <p>爱因斯坦在 1915 年说：质量会弯曲它周围的时空，就像把保龄球放在蹦床上，中间会陷下去。行星就沿着这层"凹陷"滚动。他还预言：如果质量剧烈加速运动（比如两个黑洞互相绕转），时空的弯曲会像水波一样向外传开——这就是<strong>引力波</strong>。</p>
  <p>它传过时，会极其轻微地拉伸和挤压沿途的空间：一边长、一边短，交替进行。但这种变化微乎其微——连光都要走好久的距离，被拉伸的幅度比一个原子还小。所以预言提出后近百年，没人能测到。</p>
</div>
<div class="section">
  <h2>二、怎么测到"原子级"的抖动<span data-ai-q="引力波探测器是怎么工作的？"></span></h2>
  <p>2015 年，美国的 LIGO 探测器成功了。它用两条互相垂直、各长 4 公里的光路：激光在两端反射后汇合，正常情况下两束光刚好抵消。一旦引力波经过，一条臂被拉长、另一条被压短，两束光的汇合就出现细微偏差——就这么测到了。</p>
  <div class="analogy">
    <h3>🔍 打个比方：水面上的软木塞</h3>
    <p>想象池塘里漂着两颗软木塞。远处扔块石头激起水波，两颗塞子会随着波峰波谷一远一近地起伏。引力波探测器就像同时盯着两颗塞子的距离，从它们微小的"呼吸"里读出时空本身的波动。</p>
  </div>
</div>
<div class="section">
  <h2>三、我们多了"听"宇宙的方式<span data-ai-q="探测引力波有什么意义？"></span></h2>
  <p>过去看宇宙靠"看"光（可见光、X 射线等）。但黑洞不发光、宇宙早期被浓雾挡住，光都帮不上忙。引力波让我们多了一种"听觉"——直接听见黑洞相撞、中子星合并这种剧烈事件，甚至"听"到宇宙诞生最初的瞬间。</p>
  <p>2017 年，人类第一次同时用引力波和光"看"到两颗中子星合并，据此确认了宇宙中金、铂等重元素的一大来源。下一步，太空中的激光干涉仪将能听到更慢、更宏大的天体舞蹈，只是探测更微弱的信号、压住地球自身的震动，仍是工程与物理的双重难题。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>引力波是时空本身的涟漪，由大质量天体剧烈运动产生。测到它需要感知比原子还小的长度变化。它给了人类一双"耳朵"，去听见那些不发光、光也照不到的宇宙事件。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>引力波（Gravitational Waves）</b> 是时空度规的波动解，由加速质量辐射。振幅随距离衰减；地面探测器 LIGO/Virgo/KAGRA 用迈克尔逊干涉仪，臂长 3–4 km，灵敏度达 10⁻²¹ 量级。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>2015 年 LIGO 首次直接探测 GW150914（双黑洞并合）。2017 年 GW170817（双中子星）同时被电磁波观测到。空间探测器 LISA 已立项，预计 2035 年发射。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>爱因斯坦 · 韦斯 · 巴里什 · 索恩（2017 诺奖）· 赫尔斯与泰勒（1974 脉冲双星间接证据，1993 诺奖）</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://www.ligo.caltech.edu/" target="_blank" rel="noopener">LIGO 官网</a> · <a href="https://www.nobelprize.org/prizes/physics/2017/summary/" target="_blank" rel="noopener">2017 诺贝尔物理学奖</a> · <a href="https://en.wikipedia.org/wiki/Gravitational_wave" target="_blank" rel="noopener">维基百科：引力波</a></p>
    </div>`,
    related:[{label:'黑洞：连光都无法逃脱',href:'black-hole.html'},{label:'暗能量与宇宙命运',href:'dark-energy.html'},{label:'宇宙微波背景',href:'cmb.html'},{label:'量子纠错',href:'quantum-error.html'}],
    ai:{ topic:'引力波', icebreakers:['引力波到底是什么？为什么叫"时空的涟漪"？','LIGO 是怎么探测到这么微弱的信号？','为什么 2015 年的发现这么重要？','多信使天文学是什么意思？'] } },

  { slug:'cmb', title:'宇宙微波背景：138亿年前的余晖', icon:'📡', category:'宇宙物理', exists:false,
    eyebrow:'前沿问题 · 宇宙微波背景', tags:['宇宙物理','宇宙学'], cardDesc:'一张来自宇宙婴儿期的"照片"，藏着起源的秘密。',
    story:`<div class="hook">💡 调收音机时偶尔会有"沙沙"的雪花噪点，其中有一小部分，是宇宙诞生 38 万年后留下的"第一缕光"——宇宙微波背景辐射。</div>
<div class="section">
  <h2>一、宇宙也曾是一团"浓汤"<span data-ai-q="宇宙微波背景是什么？为什么叫背景辐射？"></span></h2>
  <p>今天的宇宙空旷又透亮，但刚诞生时完全不同：它曾是一锅极热、极密、不透明的"等离子体浓汤"，光子被带电粒子不断弹开，根本走不远，整个宇宙像一团浓雾。</p>
  <p>大约诞生后 38 万年，宇宙冷却到约 3000 度，电子和原子核结合成中性原子。没了自由电子的阻挡，光子终于能直线穿行——这一刻释放的光，一直飞到现在。因为宇宙膨胀，它的波长被拉长成微波，均匀洒满全天空，就是<strong>宇宙微波背景（CMB）</strong>。</p>
</div>
<div class="section">
  <h2>二、为什么它像"婴儿照片"<span data-ai-q="科学家能从这束光里读出什么？"></span></h2>
  <p>这束光携带了婴儿宇宙的温度信息。理论上它应当处处几乎一样热，但仔细测会发现极细微的温差（万分之一度）。这些温差不是瑕疵，而是"种子"：密度稍高的地方，引力后来把物质越聚越多，长成了星系和星系团。</p>
  <div class="analogy">
    <h3>🔍 打个比方：烤焦的面包</h3>
    <p>CMB 就像一张全天空的"热图"。表面看起来均匀微黄，但放大看有密密麻麻的小斑点——有的略深有的略浅。这些斑点的分布，正好告诉我们宇宙后来会在哪里"发面"长出星系。</p>
  </div>
</div>
<div class="section">
  <h2>三、它帮我们称量整个宇宙<span data-ai-q="研究 CMB 对现代宇宙学有什么用？"></span></h2>
  <p>通过精确测量这些斑点的统计特征，科学家推算出宇宙的成分：普通物质只占约 5%，其余是约 27% 的暗物质和约 68% 的暗能量。CMB 是现代"标准宇宙模型"最坚实的观测支柱。</p>
  <p>但它也留下未解之谜：背景图上某些异常的大尺度图案，标准模型解释得不够漂亮；早期宇宙为何如此均匀，也需要"暴胀"假说补位——而暴胀是否真发生过，仍在被数据和新理论反复检验。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>宇宙微波背景是 138 亿年前宇宙变透明时释放的第一缕光，被膨胀拉成了微波。它是一张婴儿宇宙的热图，既帮我们称量了宇宙的组成，也留下关于起源的未解谜题。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>宇宙微波背景（CMB）</b> 是红移后的黑体辐射，当前温度约 2.725 K。其涨落的角功率谱携带宇宙学参数（重子密度、暗物质密度、哈勃常数、暴胀参量）。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>COBE（1992，诺奖 2006）、WMAP、普朗克（2013 数据）逐步提升精度。当前焦点：原初引力波的 B 模偏振探测（如 CMB-S4、LiteBIRD）。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>彭齐亚斯与威尔逊（1978 诺奖）· 斯穆特与马瑟（2006 诺奖）· 伽莫夫（大爆炸预言）· 迪克与皮布尔斯</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/Cosmic_microwave_background" target="_blank" rel="noopener">维基百科：宇宙微波背景</a> · <a href="https://www.nobelprize.org/prizes/physics/2006/summary/" target="_blank" rel="noopener">2006 诺贝尔物理学奖</a> · <a href="https://en.wikipedia.org/wiki/Big_Bang" target="_blank" rel="noopener">维基百科：大爆炸</a></p>
    </div>`,
    related:[{label:'暗能量与宇宙命运',href:'dark-energy.html'},{label:'暗物质：看不见的宇宙主角',href:'dark-matter.html'},{label:'黑洞：连光都无法逃脱',href:'black-hole.html'},{label:'哈勃常数之谜',href:'hubble-tension.html'}],
    ai:{ topic:'宇宙微波背景', icebreakers:['宇宙微波背景到底是什么？为什么叫"余晖"？','为什么研究它就能知道宇宙的年龄和组成？','普朗克卫星测到了什么？','CMB 里的微小起伏和星系形成有什么关系？'] } },

  { slug:'dark-matter', title:'暗物质：看不见的宇宙主角', icon:'🌑', category:'宇宙物理', exists:false,
    eyebrow:'前沿问题 · 暗物质', tags:['宇宙物理','粒子物理'], cardDesc:'它不发光、不反光，却占了宇宙物质的八成。',
    story:`<div class="hook">💡 你看到的星星、行星、你我，加起来只占宇宙的 5%。剩下约 27% 是一种我们"看不见、摸不着"，却用引力牢牢拽着星系的神秘东西——暗物质。</div>
<div class="section">
  <h2>一、星系转得太快了<span data-ai-q="暗物质是什么？为什么科学家认为它存在？"></span></h2>
  <p>1930 年代，天文学家发现一个怪事：旋涡星系外围的恒星，转得比"看得见的物质"能拴住的速度还快。按牛顿引力，外圈恒星早该被甩飞出去，可它们稳稳待着。</p>
  <p>唯一的解释是：星系里藏着大量看不见的物质，用额外引力把外圈恒星"按"住。这种不发光、不与光互动、只通过引力现身的成分，就叫<strong>暗物质</strong>。后来的引力透镜、宇宙微波背景都一致指向：它的总量大约是普通物质的 5 倍。</p>
</div>
<div class="section">
  <h2>二、怎么"看"一个不看光的东西<span data-ai-q="既然暗物质不发光，我们怎么探测它？"></span></h2>
  <p>虽然暗物质不发光，但它的引力会让背后的光路弯曲，像透镜一样把远处星系扭曲放大——这叫引力透镜，是它存在的最直观证据之一。</p>
  <div class="analogy">
    <h3>🔍 打个比方：看不见的鱼缸</h3>
    <p>隔着一面毛玻璃看后面的台灯，你看不到玻璃后的鱼缸，却看见台灯的光被"折"歪了。你立刻知道：中间有某种透明、不发光的东西挡着。暗物质就像那个鱼缸——我们靠它对光的弯曲，才知道它在。</p>
  </div>
</div>
<div class="section">
  <h2>三、它到底是什么，至今没答案<span data-ai-q="暗物质可能是什么？为什么这么难找？"></span></h2>
  <p>暗物质几乎肯定不是普通原子。主流猜想认为它是一种全新的、极难互动的粒子（如"弱相互作用大质量粒子"或轴子）。全球地下实验室用极灵敏的探测器守株待兔，大型对撞机也试图造出它，但至今没有直接抓到一颗。</p>
  <p>也有人提出：也许我们的引力理论在大尺度上需要修正，根本不存在暗物质。两种思路都在硬碰硬的观测中较量。弄清暗物质，等于认领宇宙中最大宗、却最陌生的那块拼图。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>暗物质是不发光、只通过引力现身的神秘成分，约占宇宙 27%，是星系不被甩散的"隐形胶水"。它究竟是新粒子还是引力理论的修正，仍是当代物理学最大的悬案之一。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>暗物质（Dark Matter）</b> 通过引力效应被间接证实：星系自转曲线、星系团引力透镜、宇宙大尺度结构、CMB 功率谱均要求其存在。它不参与电磁相互作用。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>候选粒子包括 WIMP、轴子、惰性中微子等。直接探测（地下液氙实验 XENON、LZ）、间接探测（空间望远镜）、对撞机产生，目前均未见确凿信号。也可能需修改引力理论（如 MOND）。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>兹威基（1933）· 薇拉·鲁宾（自转曲线）· 爱因斯坦（引力透镜）· 普里马克与西尔克等</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/Dark_matter" target="_blank" rel="noopener">维基百科：暗物质</a> · <a href="https://en.wikipedia.org/wiki/Galaxy_rotation_curve" target="_blank" rel="noopener">维基百科：星系自转曲线</a> · <a href="https://en.wikipedia.org/wiki/Vera_Rubin" target="_blank" rel="noopener">薇拉·鲁宾</a></p>
    </div>`,
    related:[{label:'宇宙微波背景',href:'cmb.html'},{label:'暗能量与宇宙命运',href:'dark-energy.html'},{label:'哈勃常数之谜',href:'hubble-tension.html'},{label:'黑洞：连光都无法逃脱',href:'black-hole.html'}],
    ai:{ topic:'暗物质', icebreakers:['暗物质是怎么被发现的？为什么我们看不见它？','暗物质和暗能量是一回事吗？','科学家用什么方法寻找暗物质？','如果找到暗物质，会改变物理学的哪些认知？'] } },

  { slug:'hubble-tension', title:'哈勃常数之谜：宇宙在加速还是减速？', icon:'📏', category:'宇宙物理', exists:false,
    eyebrow:'前沿问题 · 哈勃常数张力', tags:['宇宙物理','宇宙学'], cardDesc:'两种测法给出两个不同的宇宙膨胀速度，谁错了？',
    story:`<div class="hook">💡 同一片宇宙，用两种方法量出来的"膨胀速度"却对不上——这个叫"哈勃张力"的裂缝，可能正暗示着标准宇宙模型哪里漏了。</div>
<div class="section">
  <h2>一、宇宙在"膨胀"是什么意思<span data-ai-q="宇宙膨胀是什么？哈勃常数又是什么？"></span></h2>
  <p>1929 年，哈勃发现远处的星系都在离我们远去，而且越远跑得越快。这说明空间本身在拉伸——宇宙像一个被吹大的气球。描述"每远离一段距离，退行速度快多少"的那个数，就叫<strong>哈勃常数</strong>。</p>
  <p>它有两个含义：既是今天的膨胀速度，也关系到宇宙的年龄和大小。所以精确测出它，是宇宙学的核心任务。</p>
</div>
<div class="section">
  <h2>二、两套测法，两个答案<span data-ai-q="为什么会出现'哈勃张力'？"></span></h2>
  <p>麻烦出在：两种独立的方法给出不一样的数值。一种是从"近处"出发——先用造父变星、超新星等"标准烛光"标定距离，再测速度，得出较大的数值。另一种是从"婴儿宇宙"出发——分析宇宙微波背景的斑点图案，用标准模型反推今天的膨胀率，得出较小的数值。</p>
  <div class="analogy">
    <h3>🔍 打个比方：两端量绳子</h3>
    <p>想象一根正在被拉长的绳子。你从一头量拉伸速度，又从另一头（结合中间的纹路）推算速度，结果却不一致。那要么是量错了，要么绳子本身有些性质你没算进去。</p>
  </div>
</div>
<div class="section">
  <h2>三、裂缝里可能藏着新物理<span data-ai-q="哈勃张力为什么重要？"></span></h2>
  <p>两边的测量都极其精密、互相独立，误差很小却依然对不上。这强烈暗示：不是谁量错了，而是我们对宇宙成分或演化的理解有缺口——比如是否存在标准模型外的"早期暗能量"，或中微子性质另有蹊跷。</p>
  <p>如果张力被坐实，沿用多年的"标准宇宙模型"就得修补甚至重写。正因它可能撬动整个宇宙学地基，哈勃张力成了当前最令人兴奋的未解难题之一。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>哈勃张力是"今天宇宙膨胀多快"这个数值，在近处测量和从婴儿宇宙反推之间对不上的矛盾。它可能不是误差，而是标准宇宙模型遗漏了某种新物理的信号。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>哈勃张力（Hubble Tension）</b> 指早期宇宙（CMB+ΛCDM 推演，H₀≈67 km/s/Mpc，普朗克）与晚期局域距离阶梯（SH0ES，H₀≈73 km/s/Mpc）的测量差异，显著性约 5σ。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>独立方法（引力透镜时间延迟、造父变星、 tip of the red giant branch）互相校验。张力持续存在，催生早期暗能量、额外中微子、修改引力等模型。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>哈勃（1929 膨胀）· 里斯（SH0ES 团队）· 普朗克卫星团队 · 里斯与弗里德曼（距离阶梯方法）</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/Hubble%27s_law" target="_blank" rel="noopener">维基百科：哈勃定律</a> · <a href="https://en.wikipedia.org/wiki/Lambda-CDM_model" target="_blank" rel="noopener">维基百科：ΛCDM 模型</a> · <a href="https://en.wikipedia.org/wiki/Edwin_Hubble" target="_blank" rel="noopener">埃德温·哈勃</a></p>
    </div>`,
    related:[{label:'暗能量与宇宙命运',href:'dark-energy.html'},{label:'宇宙微波背景',href:'cmb.html'},{label:'暗物质：看不见的宇宙主角',href:'dark-matter.html'},{label:'系外行星：我们在宇宙中是孤独的吗？',href:'exoplanets.html'}],
    ai:{ topic:'哈勃常数之谜', icebreakers:['哈勃常数到底是什么？为什么会有两个答案？','早期法和晚期法测的有什么区别？','哈勃张力意味着我们错了吗？','解开这个谜对宇宙学意味着什么？'] } },

  { slug:'exoplanets', title:'系外行星：我们在宇宙中是孤独的吗？', icon:'🪐', category:'宇宙物理', exists:false,
    eyebrow:'前沿问题 · 系外行星', tags:['宇宙物理','天文'], cardDesc:'太阳系外，还有别的"地球"吗？人类正在疯狂搜寻。',
    story:`<div class="hook">💡 小时候抬头数星星，你会想：别的星星旁也有"地球"吗？今天我们已经确认了五千多颗"系外行星"——太阳系之外的世界，而且种类比科幻还离奇。</div>
<div class="section">
  <h2>一、怎么找到"看不见的"行星<span data-ai-q="系外行星不发光，我们怎么发现它们？"></span></h2>
  <p>恒星亮、行星暗，直接拍照几乎不可能。科学家靠两种巧劲：一是"凌星法"——行星转到恒星正面时，会挡掉一点点光，让恒星规律的"眨一下眼"，亮度曲线的小缺口就暴露了它；二是"径向速度法"——行星绕转时，引力会轻微拖拽恒星来回晃动，从恒星光谱的微小红移蓝移能反推出行星的存在。</p>
  <p>美国开普勒望远镜用凌星法一口气发现了上千颗候选者，证明行星在银河系里普遍得超乎想象。</p>
</div>
<div class="section">
  <h2>二、五花八门的外面世界<span data-ai-q="系外行星都有哪些奇怪类型？"></span></h2>
  <p>它们远比太阳系丰富：有比地球大几倍、可能全是气体的"超级地球"；有紧贴恒星、表面能熔化金属的"热木星"；也有被双星共舞的"塔图因"式行星。2016 年，离我们最近的恒星比邻星旁找到了一颗位于宜居带的岩石行星，让"隔壁就有另一个地球"不再只是幻想。</p>
  <div class="analogy">
    <h3>🔍 打个比方：路灯下的飞蛾</h3>
    <p>恒星像一盏路灯，行星是绕灯飞的飞蛾。你不必看清飞蛾，只要看灯光被遮暗的瞬间，就知道"有东西飞过去了"。凌星法就是这样逮住系外行星的。</p>
  </div>
</div>
<div class="section">
  <h2>三、我们在宇宙中孤独吗<span data-ai-q="为什么要找系外行星？有宜居的吗？"></span></h2>
  <p>寻找系外行星，核心是找"类地"且位于宜居带（温度允许液态水存在）的世界，并分析其大气成分，看是否有氧气、甲烷等"生命信号"。近年空间望远镜已能粗略读取某些行星的大气光谱。</p>
  <p>真正的难题是：哪怕找到一颗大气异常的行星，我们也很难区分那是生命造成的，还是纯地质或光化学的结果。确认"另一个地球"是否存在生命，仍是几代人的长期探索。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>系外行星是太阳系之外的行星，靠"挡光"或"拖拽恒星"的巧劲被发现。它们种类惊人地多。寻找宜居世界、追问我们是否孤独，是这场探索最深的动力。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>系外行星（Exoplanet）</b> 即太阳系外绕恒星运行的行星。主流探测：凌星法（测光度周期下降）、径向速度法（测恒星谱线周期位移）、直接成像、微引力透镜。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>1992 年首证（脉冲星周围），1995 年首颗类太阳恒星行星（Mayor & Queloz，诺奖 2019）。Kepler 发现数千颗；TESS、JWST 分析大气成分；TRAPPIST-1 系统 7 颗岩质行星。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>梅厄与奎洛兹（1995，诺奖 2019）· 沃尔什赞（1992 首证）· 博鲁茨基（Kepler）· 吉隆（TRAPPIST-1）</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://exoplanets.nasa.gov/" target="_blank" rel="noopener">NASA 系外行星档案</a> · <a href="https://www.nobelprize.org/prizes/physics/2019/summary/" target="_blank" rel="noopener">2019 诺贝尔物理学奖</a> · <a href="https://en.wikipedia.org/wiki/Exoplanet" target="_blank" rel="noopener">维基百科：系外行星</a></p>
    </div>`,
    related:[{label:'宇宙微波背景',href:'cmb.html'},{label:'暗能量与宇宙命运',href:'dark-energy.html'},{label:'黑洞：连光都无法逃脱',href:'black-hole.html'},{label:'哈勃常数之谜',href:'hubble-tension.html'}],
    ai:{ topic:'系外行星', icebreakers:['系外行星那么远，科学家是怎么发现的？','什么是宜居带？地球是唯一宜居的行星吗？','TRAPPIST-1 系统有什么特别？','未来望远镜能找到外星生命吗？'] } },

  // ───────────────────────── 物质能源 ─────────────────────────
  { slug:'fusion', title:'可控核聚变：人造太阳', icon:'⚛️', category:'物质能源', exists:true,
    cardDesc:'材料与能源 · 人造太阳，无限清洁能源的关键路径。' },
  { slug:'high-temp-superconductor', title:'高温超导：零电阻的奇迹', icon:'❄️', category:'物质能源', exists:false,
    eyebrow:'前沿问题 · 高温超导', tags:['物质能源','凝聚态'], cardDesc:'电流零损耗地奔跑，曾被认为只能在极低温发生。',
    story:`<div class="hook">💡 普通电线输电会发热、会浪费电。有一种材料却能做到"零电阻"、电流毫无损耗地流——这就是超导，而人类一直在追一个梦：让它别那么冷。</div>
<div class="section">
  <h2>一、什么是"零电阻"<span data-ai-q="超导是什么？零电阻是什么意思？"></span></h2>
  <p>电流通过普通金属会被原子"绊脚"，产生电阻、发热、耗电。1911 年，科学家发现水银冷到约零下 269 度时，电阻突然彻底消失——电流可以永远绕圈流下去，不损耗一丝能量。这叫<strong>超导</strong>。</p>
  <p>超导还伴有"完全抗磁性"：它能把磁场推开，于是能稳稳悬浮在磁体上方。磁悬浮列车、核磁共振仪里的强磁体，都靠这个特性。</p>
</div>
<div class="section">
  <h2>二、为什么"高温"超导是突破<span data-ai-q="高温超导和普通超导有什么区别？"></span></h2>
  <p>早期超导体必须泡在近绝对零度的液氦里，又贵又难普及。1986 年，科学家发现一类陶瓷材料在"较高"温度（比如液氮能轻松达到的零点零下 196 度）就超导了——这就是<strong>高温超导</strong>。"高温"是相对说法，依然冰冷，但液氮便宜得多，工程上立刻亲民。</p>
  <div class="analogy">
    <h3>🔍 打个比方：结冰的湖面</h3>
    <p>普通金属像粗糙的泥地，小车（电子）一路颠簸耗能；超导体像光滑结冰的湖面，小车嗖嗖滑过不费劲。高温超导就是这块冰"没那么冷"也能结住，维护成本低了一大截。</p>
  </div>
</div>
<div class="section">
  <h2>三、为什么还卡在"室温"<span data-ai-q="室温超导为什么这么难？现在到哪一步了？"></span></h2>
  <p>真正的圣杯是"室温常压超导"——不用冷却、随手可用的无损输电，那将重塑电网、交通、计算。可惜已知的高温超导材料多脆、难加工，且机理仍没完全搞清，理论预测举步维艰。</p>
  <p>近年来时有"室温超导"的轰动宣称，却屡因数据无法复现而翻车，提醒我们：这类突破必须经得起全球重复验证。找到稳定、易造、真常温的超导材料，仍是最诱人也最棘手的未解难题之一。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>超导是电阻为零、可完全抗磁的材料，能让电流无损流动。高温超导把所需冷却降到液氮级别，已实用化；但稳定、常压、室温的超导材料，仍是尚未摘下的圣杯。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>超导（Superconductivity）</b> 指材料在临界温度以下电阻消失、呈现完全抗磁性（迈斯纳效应）。BCS 理论解释常规超导（库珀对）。铜氧化物（1986）与铁基（2008）属非常规高温超导，机制未完全统一。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>常压最高 Tc 约 133 K（汞系铜氧化物）。高压氢化物（如 H₃S、LaH₁₀）在百万大气压下 Tc 可达 200+ K，但需极端压力。室温常压超导尚无可靠、可重复的证实。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>昂内斯（1911 发现）· 贝德诺尔茨与缪勒（1986 高温超导，诺奖 1987）· 巴丁、库珀、施里弗（BCS，诺奖 1972）</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/High-temperature_superconductivity" target="_blank" rel="noopener">维基百科：高温超导</a> · <a href="https://www.nobelprize.org/prizes/physics/1987/summary/" target="_blank" rel="noopener">1987 诺贝尔物理学奖</a> · <a href="https://en.wikipedia.org/wiki/Superconductivity" target="_blank" rel="noopener">维基百科：超导</a></p>
    </div>`,
    related:[{label:'可控核聚变：人造太阳',href:'fusion.html'},{label:'拓扑绝缘体',href:'topological-insulator.html'},{label:'石墨烯',href:'graphene.html'},{label:'锂离子电池',href:'lithium-battery.html'}],
    ai:{ topic:'高温超导', icebreakers:['超导到底是什么？为什么叫"高温"超导？','高温超导和普通超导有什么区别？','室温超导实现了吗？为什么这么难？','超导能用来做什么？'] } },

  { slug:'topological-insulator', title:'拓扑绝缘体：表面导电的神奇材料', icon:'🧲', category:'物质能源', exists:false,
    eyebrow:'前沿问题 · 拓扑绝缘体', tags:['物质能源','凝聚态'], cardDesc:'体内是绝缘体，表面却能导电——靠的是拓扑。',
    story:`<div class="hook">💡 有一种奇怪的材料：内部是绝缘体，电流却只能贴着表面跑——像一栋外墙导电、屋里断电的房子。这就是拓扑绝缘体。</div>
<div class="section">
  <h2>一、"体内绝缘、表面导电"的反常<span data-ai-q="拓扑绝缘体是什么？为什么体内不导电表面却导电？"></span></h2>
  <p>通常材料要么整体导电（金属），要么整体不导电（绝缘体）。2000 年代，理论预言并随后证实了第三类：<strong>拓扑绝缘体</strong>——它的"体内"是绝缘的，电子过不去；可最外一层表面却是优良的导电通道，电子只能贴着表面流动。</p>
  <p>这不是偶然杂质造成的，而是材料整体对称性与电子量子性质的必然结果，由一种叫"拓扑"的数学性质保护着。</p>
</div>
<div class="section">
  <h2>二、为什么表面导电这么特别<span data-ai-q="拓扑绝缘体的表面导电有什么好处？"></span></h2>
  <p>普通导体里的电子容易被杂质、缺陷散射而乱撞、发热、损耗。拓扑绝缘体的表面态有个狠特性：杂质很难让它"掉头回不去"，电子能顺畅地沿表面前进，不容易被绊住。</p>
  <div class="analogy">
    <h3>🔍 打个比方：只能绕城墙走的卫兵</h3>
    <p>想象一座城，城里全是死胡同（绝缘），但城墙顶上是一条畅通的环道（表面导电）。卫兵（电子）只能沿城墙跑，绕开城里的一切障碍，反而最不容易迷路。</p>
  </div>
</div>
<div class="section">
  <h2>三、它为何牵动"量子科技"<span data-ai-q="拓扑绝缘体有什么应用前景？"></span></h2>
  <p>把拓扑绝缘体和超导体结合，理论上能造出"马约拉纳粒子"——一种自身就是自己反粒子的奇特激发。它被认为是最有希望的"拓扑量子比特"载体，能让量子计算机的抗错能力大幅提升。</p>
  <p>但要把这些想法做成可控制的器件，仍卡在材料纯度、界面质量和极低温环境等工程难题上。拓扑绝缘体因此既是凝聚态物理的明星，也是通向更稳量子计算的一条可能路径。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>拓扑绝缘体体内绝缘、表面却优良导电，这种表面态由拓扑性质保护、不易被杂质打乱。它与超导体结合，有望孕育出更抗错的拓扑量子比特。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>拓扑绝缘体（Topological Insulator）</b> 体相为绝缘体，边界受拓扑保护出现无能隙导电态（如二维量子自旋霍尔边缘态、三维狄拉克表面态）。理论由 Kane-Mele、Bernevig-Hughes-Zhang 等建立，实验由 Hasan、张首晟等验证。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>2005–2007 年理论突破，2008 年起 Bi₂Se₃ 等三维材料被实验确认。当前向拓扑半金属、高阶拓扑绝缘体、拓扑超导（马约拉纳模）延伸。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>凯恩与梅勒 · 哈桑与凯恩 · 张首晟 · 傅亮与基恩</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/Topological_insulator" target="_blank" rel="noopener">维基百科：拓扑绝缘体</a> · <a href="https://en.wikipedia.org/wiki/Topological_order" target="_blank" rel="noopener">维基百科：拓扑序</a> · <a href="https://en.wikipedia.org/wiki/Quantum_spin_Hall_effect" target="_blank" rel="noopener">量子自旋霍尔效应</a></p>
    </div>`,
    related:[{label:'高温超导',href:'high-temp-superconductor.html'},{label:'石墨烯',href:'graphene.html'},{label:'量子霍尔效应',href:'quantum-hall.html'},{label:'可控核聚变：人造太阳',href:'fusion.html'}],
    ai:{ topic:'拓扑绝缘体', icebreakers:['拓扑绝缘体为什么体内绝缘、表面却导电？','"拓扑"在这里是什么意思？','拓扑保护为什么让导电更抗干扰？','它和量子计算有什么关系？'] } },

  { slug:'lithium-battery', title:'锂离子电池：移动时代的心脏', icon:'🔋', category:'物质能源', exists:false,
    eyebrow:'诺贝尔奖成果 · 锂离子电池', tags:['物质能源','化学'], cardDesc:'没有它，手机、笔记本、电动车都寸步难行。',
    story:`<div class="hook">💡 你的手机、电动车、笔记本，肚子里大多是一块锂电池。它体积小却能量密，靠的是锂离子在两层之间"来回搬家"。</div>
<div class="section">
  <h2>一、电池就是在"搬"电荷<span data-ai-q="锂电池是怎么存电和放电的？"></span></h2>
  <p>电池本质上是个"电荷搬运工"：充电时把能量存进去，放电时把能量放出来。锂电池内部有正负两层材料，中间隔着电解液。<strong>锂离子</strong>是搬运电荷的主角。</p>
  <p>放电时，锂离子从负极穿过电解液，跑到正极，沿途推动电子在外电路流动，就有了电流；充电时，外接电源把锂离子"推"回负极，能量重新存好。锂离子本身不消失，只是来回跑。</p>
</div>
<div class="section">
  <h2>二、为什么是"锂"这么香<span data-ai-q="锂电池相比其他电池好在哪？"></span></h2>
  <p>锂是元素周期表最轻的金属之一，又容易失去电子，所以"每公斤能搬的电荷"特别多——也就是能量密度高。同样重量，它比老式铅酸、镍氢电池存得多得多，还不容易"记忆效应"失效。</p>
  <div class="analogy">
    <h3>🔍 打个比方：挑夫运粮</h3>
    <p>把电荷想象成粮食，锂离子是特别能干又轻巧的挑夫：个子小、力气大，一趟能背很多。所以锂电池这匹"小马"，驮着大量能量还能跑得快——手机才得以又轻又耐用。</p>
  </div>
</div>
<div class="section">
  <h2>三、卡在"安全"和"续航"上<span data-ai-q="锂电池还有什么问题和未解挑战？"></span></h2>
  <p>锂离子太活泼也有代价：过充、短路或刺穿时可能过热、起火。工程师用隔膜、温控芯片层层防护，但安全事故仍偶有发生。另外，电动车要跑更远，就得塞更多能量，而锂、钴等原料的开采与回收也带来环境和成本压力。</p>
  <p>下一步的方向很明确：更安全的固态电解质、用钠等更廉价元素替代部分锂、以及把废旧电池高效回收。让人人用得起的电池既安全又环保，是摆在材料和化工界的大课题。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>锂电池靠锂离子在正负极间往返来存放电，因锂轻而能量密度高，撑起了便携电子和电动车。它的挑战在安全、原料与回收——固态电池和替代元素正是攻向这些难点的方向。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>锂离子电池（Li-ion Battery）</b> 靠 Li⁺ 在嵌锂正极（如 LiCoO₂）与石墨负极间可逆嵌入/脱出实现充放电，电解质为含锂盐的有机溶液或聚合物。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>2019 年诺贝尔化学奖授予古迪纳夫、惠廷汉、吉野彰。当前方向：固态电池（更高安全/能量密度）、硅/锂金属负极、无钴正极、快充与寿命管理。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>古迪纳夫 · 惠廷汉 · 吉野彰（2019 诺奖）</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://www.nobelprize.org/prizes/chemistry/2019/summary/" target="_blank" rel="noopener">2019 诺贝尔化学奖</a> · <a href="https://en.wikipedia.org/wiki/Lithium-ion_battery" target="_blank" rel="noopener">维基百科：锂离子电池</a> · <a href="https://en.wikipedia.org/wiki/John_Bannister_Goodenough" target="_blank" rel="noopener">古迪纳夫</a></p>
    </div>`,
    related:[{label:'可控核聚变：人造太阳',href:'fusion.html'},{label:'高温超导',href:'high-temp-superconductor.html'},{label:'石墨烯',href:'graphene.html'},{label:'人工光合作用',href:'artificial-photosynthesis.html'}],
    ai:{ topic:'锂离子电池', icebreakers:['锂离子电池是怎么充电和放电的？','为什么它能做得又轻又耐用？','2019 诺贝尔化学奖为什么颁给电池？','固态电池比现在的锂电池好在哪？'] } },

  { slug:'quantum-hall', title:'量子霍尔效应：电阻的量子台阶', icon:'🔢', category:'物质能源', exists:false,
    eyebrow:'诺贝尔奖成果 · 量子霍尔效应', tags:['物质能源','量子'], cardDesc:'电阻不再连续变化，而是一级级"台阶"。',
    story:`<div class="hook">💡 把电子关在极薄的一层里、再加强磁场和超低温，电阻会突然"跳"到某些固定值，分毫不差——这就是量子霍尔效应，连计量标准都靠它。</div>
<div class="section">
  <h2>一、磁场让电阻"跳台阶"<span data-ai-q="量子霍尔效应是什么？为什么电阻会变成固定值？"></span></h2>
  <p>1879 年的霍尔效应说：通电的薄片放进磁场，电子被磁场推偏，薄片两侧会积累电压。1980 年，科学家在极低温、强磁场、近乎二维的电子气里发现：随着磁场变化，横向电阻不是平滑变，而是"跳"上一格格精确的台阶值。</p>
  <p>这些台阶值只由基本物理常数决定——电阻 = h 除以（某个整数乘 e 的平方）。无论材料、温度怎么变，它都分毫不差，是量子力学最干净的展示之一。</p>
</div>
<div class="section">
  <h2>二、电子为何"排队"成台阶<span data-ai-q="为什么会出现整数台阶？分数量子霍尔又是什么？"></span></h2>
  <p>在二维限域下，电子的能量被"量子化"成分立的层级。磁场把电子按能级一层层填满，每填满一层，整体电阻就稳定在一个台阶上，直到下一批电子另起炉灶。</p>
  <div class="analogy">
    <h3>🔍 打个比方：停车场分层</h3>
    <p>想象一座只有一层能停的立体停车场。车（电子）先停满一楼，再开二楼，每满一层，出口的"拥堵指数"（电阻）就跳到一个新定值。量子霍尔的台阶，就是这种分层填满的痕迹。</p>
  </div>
</div>
<div class="section">
  <h2>三、它既是标准，也是新物理入口<span data-ai-q="量子霍尔效应有什么用？"></span></h2>
  <p>因为台阶值极其精确，国际单位制把"电阻"的标准就建立在量子霍尔效应上——一"个"电阻，全世界都一样准。它还催生了拓扑绝缘体、分数量子霍尔（电子像分裂成"分数电荷"的奇特状态）等一连串新物理。</p>
  <p>更前沿的"拓扑量子计算"也借力于这类受拓扑保护的量子态。难点在于它通常需要极低温和强磁场，能否在更温和条件下复现这类受保护态，仍是凝聚态物理的热门战场。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>量子霍尔效应是二维电子在强磁场低温下，横向电阻精确跳成由基本常数决定的台阶。它既是全球电阻计量标准，也打开了拓扑物态与分数电荷等新奇物理的大门。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>量子霍尔效应（Quantum Hall Effect）</b> 在二维电子气、低温强磁场下，霍尔电阻 RH = h/(νe²)，ν 为整数（整数量子霍尔，1980）或分数（分数量子霍尔，1982）。源于朗道能级与边缘态，具拓扑本质。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>整数（冯·克利青，诺奖 1985）；分数（崔琦、施特默、劳克林，诺奖 1998）。衍生出量子反常霍尔效应（中国团队 2013 实验证实）等方向。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>冯·克利青（诺奖 1985）· 崔琦、施特默、劳克林（诺奖 1998）· 霍尔（1879）</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/Quantum_Hall_effect" target="_blank" rel="noopener">维基百科：量子霍尔效应</a> · <a href="https://www.nobelprize.org/prizes/physics/1985/summary/" target="_blank" rel="noopener">1985 诺贝尔物理学奖</a> · <a href="https://www.nobelprize.org/prizes/physics/1998/summary/" target="_blank" rel="noopener">1998 诺贝尔物理学奖</a></p>
    </div>`,
    related:[{label:'拓扑绝缘体',href:'topological-insulator.html'},{label:'高温超导',href:'high-temp-superconductor.html'},{label:'量子纠错',href:'quantum-error.html'},{label:'石墨烯',href:'graphene.html'}],
    ai:{ topic:'量子霍尔效应', icebreakers:['量子霍尔效应是怎么回事？为什么电阻是离散的？','为什么它能当电阻的"标准"？','分数量子霍尔效应又是什么？','它和拓扑有什么关系？'] } },

  { slug:'graphene', title:'石墨烯：只有一个原子厚的奇迹材料', icon:'🟩', category:'物质能源', exists:false,
    eyebrow:'诺贝尔奖成果 · 石墨烯', tags:['物质能源','材料'], cardDesc:'把石墨剥到只剩一层碳原子，会得到什么？',
    story:`<div class="hook">💡 用铅笔在纸上划一道，掉下来的黑色粉末里，可能就有只有一层原子厚的"神奇材料"——石墨烯，它是人类造出的最薄、却极强的二维晶体。</div>
<div class="section">
  <h2>一、一张"原子级的网"<span data-ai-q="石墨烯是什么？为什么叫二维材料？"></span></h2>
  <p>石墨就是铅笔芯里的层状碳，层与层之间很松。2004 年，科学家用透明胶带反复撕，得到了只有<strong>一个碳原子厚</strong>的薄片——石墨烯。碳原子排成蜂窝状的六角网，是真正的"二维"：长宽无限、厚度只有一个原子。</p>
  <p>它薄到透明，却出奇地强：同样重量下，强度远超钢铁；电子在网里跑得极快、阻力极小。</p>
</div>
<div class="section">
  <h2>二、为什么它这么"神"<span data-ai-q="石墨烯有哪些惊人特性？"></span></h2>
  <p>石墨烯导热、导电都顶级，还柔韧透明。理论上，它能做进可弯折的触摸屏、超快晶体管、高通透的加热膜。它的电子行为还逼出了"相对论式"的奇特物理（狄拉克费米子），是凝聚态里的"宇宙学实验室"。</p>
  <div class="analogy">
    <h3>🔍 打个比方：铁丝网与保龄球</h3>
    <p>普通材料像密织的棉布，球（电子）钻过去磕磕绊绊。石墨烯像一张规整的铁丝网，球恰好能从空格里顺畅滚过——所以电子在里面几乎不减速，导电快得反常。</p>
  </div>
</div>
<div class="section">
  <h2>三、神话与现实的落差<span data-ai-q="石墨烯现在用得怎么样？有什么难处？"></span></h2>
  <p>当年媒体把石墨烯捧成"万能材料"，但落地比想象慢：大面积做出无缺陷的石墨烯仍贵；它没有天然的"带隙"，做数字开关芯片不如传统硅顺手；许多炫目应用还停留在实验室。</p>
  <p>现实里，它先在涂料、散热、复合材料和传感器等"小切口"悄悄扎根。如何把单层石墨烯稳定、廉价地集成进日常产品，仍是材料工程要啃的硬骨头。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>石墨烯是只有一个原子厚的碳网，极薄却极强、导电导热顶级。它打开了二维材料的大门，但受成本与"无带隙"等限制，正从神话走向脚踏实地的逐步应用。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>石墨烯（Graphene）</b> 是单层 sp² 杂化碳原子组成的二维蜂窝晶格。载流子呈无质量狄拉克费米子行为，迁移率极高，杨氏模量极高，热导率出众。机械剥离法（胶带）由曼彻斯特团队首创。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>2010 年诺贝尔物理学奖授予盖姆与诺沃肖洛夫。研究向大面积 CVD 生长、石墨烯异质结、柔性电子、储能与复合材料推进；规模化低成本制备仍是产业瓶颈。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>盖姆与诺沃肖洛夫（2010 诺奖）· 华裔科学家张首晟等（输运理论）</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://www.nobelprize.org/prizes/physics/2010/summary/" target="_blank" rel="noopener">2010 诺贝尔物理学奖</a> · <a href="https://en.wikipedia.org/wiki/Graphene" target="_blank" rel="noopener">维基百科：石墨烯</a> · <a href="https://en.wikipedia.org/wiki/Andre_Geim" target="_blank" rel="noopener">安德烈·盖姆</a></p>
    </div>`,
    related:[{label:'拓扑绝缘体',href:'topological-insulator.html'},{label:'高温超导',href:'high-temp-superconductor.html'},{label:'锂离子电池',href:'lithium-battery.html'},{label:'量子霍尔效应',href:'quantum-hall.html'}],
    ai:{ topic:'石墨烯', icebreakers:['石墨烯是怎么被做出来的？为什么这么厉害？','它和石墨、钻石有什么关系？','石墨烯能用来做什么？为什么还没普及？','"二维材料"还有哪些？'] } },

  { slug:'artificial-photosynthesis', title:'人工光合作用：向植物学习发电', icon:'🌿', category:'物质能源', exists:false,
    eyebrow:'前沿问题 · 人工光合作用', tags:['物质能源','清洁能源'], cardDesc:'模仿叶子，把阳光、水、二氧化碳变成燃料。',
    story:`<div class="hook">💡 植物晒太阳就能把水和二氧化碳变成糖和氧气。人类想"偷师"这套手艺，造出人造光合作用——用阳光直接把二氧化碳变成燃料。</div>
<div class="section">
  <h2>一、植物给了灵感<span data-ai-q="人造光合作用是什么？为什么想模仿植物？"></span></h2>
  <p>真实光合作用里，叶子里的叶绿素吸光，把水拆开、抢出电子和质子，再用来把二氧化碳"还原"成糖。整个过程只用阳光、水和空气，零污染。</p>
  <p><strong>人造光合作用</strong>就是想用人工材料（特殊半导体、催化剂）替代叶子，直接把阳光、水和二氧化碳转成可储存的燃料，比如氢气、甲醇或一氧化碳。</p>
</div>
<div class="section">
  <h2>二、难点在"拆水"这一步<span data-ai-q="人造光合作用难在哪里？"></span></h2>
  <p>最核心也最难的是"水分解"：把稳定的水分子（H₂O）拆成氢气和氧气，需要不小的能量和高效的催化剂。自然界靠精密的酶慢慢做，人工系统得在光照下又稳又快地完成，还不能很快被自身腐蚀。</p>
  <div class="analogy">
    <h3>🔍 打个比方：用阳光撬开坚果</h3>
    <p>水和二氧化碳像一颗紧闭的坚果，里面藏着能量（燃料）。阳光是锤子，催化剂是撬棍。植物用了亿年把这套"撬坚果"的流水线磨得极巧，人类还在笨拙地打磨自己的撬棍。</p>
  </div>
</div>
<div class="section">
  <h2>三、它为何值得追<span data-ai-q="人造光合作用有什么意义？"></span></h2>
  <p>如果成功，它等于造出"液态阳光"：用取之不尽的阳光，把废气二氧化碳变成可储存、可运输的清洁燃料，既减碳又能补上太阳能"夜间不发电"的短板。</p>
  <p>卡在效率、成本和寿命：多数装置转化效率还低，催化剂易失活，离大规模替代化石燃料很远。把它从实验室小片做到便宜耐用的"人工树叶"，是能源化学的长期攻坚战。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>人造光合作用模仿叶子，用阳光、水和二氧化碳直接制造清洁燃料。最难的是高效且稳定地"拆水"取氢。它有望变成液态阳光、助力减碳，但效率与寿命仍是巨大鸿沟。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>人工光合作用（Artificial Photosynthesis）</b> 用半导体/分子催化剂模拟自然光合：光生电子-空穴对驱动水氧化（析氧）与质子/CO₂ 还原，产出 H₂ 或碳氢燃料。核心是高效、稳定、低成本的 photocatalyst 与串联电极。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>代表性路线：TiO₂ 光催化分解水（本多-藤岛效应，1972）、人工树叶器件、CO₂ 电/光还原。效率与寿命仍在快速提升，距离大规模实用尚有距离。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>本多健与藤岛昭（1972 光催化水分解）· 刘易斯（人工光合作用系统）· 多国太阳能燃料研究联盟</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/Artificial_photosynthesis" target="_blank" rel="noopener">维基百科：人工光合作用</a> · <a href="https://en.wikipedia.org/wiki/Photocatalysis" target="_blank" rel="noopener">维基百科：光催化</a> · <a href="https://en.wikipedia.org/wiki/Photosynthesis" target="_blank" rel="noopener">维基百科：光合作用</a></p>
    </div>`,
    related:[{label:'可控核聚变：人造太阳',href:'fusion.html'},{label:'锂离子电池',href:'lithium-battery.html'},{label:'温室效应：地球的温度调节器',href:'greenhouse-effect.html'},{label:'碳循环：地球的生命元素之旅',href:'carbon-cycle.html'}],
    ai:{ topic:'人工光合作用', icebreakers:['人工光合作用是怎么模仿植物的？','它和普通太阳能电池有什么不同？','为什么它能帮助碳中和？','现在做到什么程度了？离实用还有多远？'] } },

  // ───────────────────────── 生命医学 ─────────────────────────
  { slug:'sleep', title:'睡眠的奥秘', icon:'💤', category:'生命医学', exists:true,
    cardDesc:'生命科学 · 为什么我们要睡觉？青少年为什么需要 9 小时？' },
  { slug:'brain-computer', title:'脑机接口', icon:'🧬', category:'生命医学', exists:true,
    cardDesc:'Neuralink 等推动的全球热点方向。' },
  { slug:'crispr', title:'CRISPR：基因编辑的剪刀', icon:'✂️', category:'生命医学', exists:false,
    eyebrow:'诺贝尔奖成果 · CRISPR', tags:['生命医学','基因'], cardDesc:'一把可以精准剪开 DNA 的"分子剪刀"。',
    story:`<div class="hook">💡 过去改一段基因像在图书馆里手工找一页书、用剪刀改一个字，极难。CRISPR 的出现，等于给科学家发了一把"带导航的剪刀"，能精准找到并剪断任意基因。</div>
<div class="section">
  <h2>一、细菌留下的"免疫记忆"<span data-ai-q="CRISPR 是什么？它原本是干什么用的？"></span></h2>
  <p>CRISPR 原本是细菌对抗病毒的防御系统。当病毒入侵，细菌会把病毒的一小段序列"存档"进自己的 DNA，下次再遇同种病毒，就能凭这段记忆识别并剪碎它。</p>
  <p>科学家看懂这套机制后，把它改造成了通用工具：人为设计一段"向导 RNA"，让它带着剪切酶（Cas9）去匹配任意目标基因序列，像 GPS 一样精准定位，然后剪断。</p>
</div>
<div class="section">
  <h2>二、为什么是革命性的<span data-ai-q="CRISPR 相比以前的基因技术好在哪？"></span></h2>
  <p>早年的基因编辑又贵又慢，改一个基因要折腾很久。CRISPR 把门槛降到"写一段向导序列"就行，便宜、快、准，几乎能在任何生物里使用——从作物到人类细胞。</p>
  <div class="analogy">
    <h3>🔍 打个比方：带地址的剪刀</h3>
    <p>旧方法是蒙着眼睛在厚字典里找词；CRISPR 是"输入地址→导航→咔嚓"的剪刀。你告诉它去第几页第几行，它自己找到并剪下那一段，改起来又快又稳。</p>
  </div>
</div>
<div class="section">
  <h2>三、能改基因，就该改吗<span data-ai-q="CRISPR 有哪些应用和伦理争议？"></span></h2>
  <p>它已经展现出巨大价值：编辑作物抗病增产、在实验室校正导致镰刀型贫血的致病突变、加速医学研究。2020 年相关发现获诺贝尔化学奖。</p>
  <p>但争议同样尖锐：编辑生殖细胞会传给后代、改变人类基因库；脱靶（剪错位置）有未知风险；"定制婴儿"触及伦理红线。正因如此，临床应用被严格限制，如何既治病又不越界，是全人类要共同回答的难题。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>CRISPR 源自细菌的抗病毒机制，被改造成"带导航的剪刀"，能精准定位并剪断任意基因。它让基因编辑廉价普及，既能治病改良作物，也逼出尖锐的伦理与安全之问。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>CRISPR-Cas9</b> 是源自细菌获得性免疫的基因编辑系统：向导 RNA（sgRNA）通过碱基互补定位目标 DNA 序列，Cas9 蛋白在其邻近的 PAM 位点切割双链，细胞修复机制随后实现敲除或插入。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>2020 年诺贝尔化学奖授予杜德娜与夏彭蒂耶。已用于镰状细胞病、地中海贫血的体细胞外编辑临床试验；生殖系编辑因伦理被严格限制（2018 年"基因编辑婴儿"事件引发全球谴责与规范讨论）。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>杜德娜与夏彭蒂耶（2020 诺奖）· 张锋（真核细胞应用）· 石野良纯（早期发现）</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://www.nobelprize.org/prizes/chemistry/2020/summary/" target="_blank" rel="noopener">2020 诺贝尔化学奖</a> · <a href="https://en.wikipedia.org/wiki/CRISPR" target="_blank" rel="noopener">维基百科：CRISPR</a> · <a href="https://en.wikipedia.org/wiki/Cas9" target="_blank" rel="noopener">维基百科：Cas9</a></p>
    </div>`,
    related:[{label:'mRNA 疫苗',href:'mrna-vaccine.html'},{label:'DNA 双螺旋',href:'dna-double-helix.html'},{label:'癌症免疫疗法',href:'cancer-immunotherapy.html'},{label:'人体微生物组',href:'microbiome.html'}],
    ai:{ topic:'CRISPR', icebreakers:['CRISPR 到底是什么？它是怎么剪 DNA 的？','为什么它能得诺贝尔化学奖？','CRISPR 能用来治哪些病？','编辑人类胚胎基因为什么引发伦理争议？'] } },

  { slug:'mrna-vaccine', title:'mRNA 疫苗：一场突如其来的革命', icon:'💉', category:'生命医学', exists:false,
    eyebrow:'诺贝尔奖成果 · mRNA 疫苗', tags:['生命医学','疫苗'], cardDesc:'让身体自己学会造"通缉令"，新冠疫情中一战成名。',
    story:`<div class="hook">💡 传统疫苗常把"弱化病毒"打进去让身体记仇。mRNA 疫苗反其道而行——它不塞病毒，只塞一张"配方纸条"，教你的细胞自己造一小段病毒零件，让免疫系统先认个脸。</div>
<div class="section">
  <h2>一、它和传统疫苗有什么不同<span data-ai-q="mRNA 疫苗是怎么起作用的？和传统疫苗区别在哪？"></span></h2>
  <p>老式疫苗多用灭活或减毒的病原、或提纯的病毒蛋白，得在工厂里"养"出病原体再处理，又慢又娇贵。mRNA 疫苗给细胞一段信使 RNA 指令，细胞按图自己造出病毒的"刺突蛋白"一小段；免疫系统看到这陌生零件，便产生抗体和记忆细胞。</p>
  <p>因为递送的是"图纸"而非病原体，它从设计上就安全：打进去的 RNA 很快被降解，不会真的让你感染。</p>
</div>
<div class="section">
  <h2>二、为什么 2020 年它能"神速"出场<span data-ai-q="mRNA 疫苗为什么研发特别快？"></span></h2>
  <p>这套原理被卡里科、韦斯曼等科学家打磨了数十年（2023 年获诺贝尔奖）。它的平台化极强：只要换掉那段 RNA 序列，就能针对新病毒重新"打印"疫苗，工厂无需推倒重来。</p>
  <div class="analogy">
    <h3>🔍 打个比方：发短信 vs 寄包裹</h3>
    <p>传统疫苗像寄一个包装好的实物包裹，准备起来慢；mRNA 疫苗像发一条"照此生产"的短信，只需改几个字，对方（细胞）立刻照做。换病毒等于换一句话，所以快。</p>
  </div>
</div>
<div class="section">
  <h2>三、卡在储运、变异与公平<span data-ai-q="mRNA 疫苗还有什么挑战？"></span></h2>
  <p>脆弱的 RNA 需用脂质微粒包裹、且常要超低温储运，冷链成本极高；病毒变异会让保护力下滑，得不断更新配方；全球分配也不均，穷国往往最后拿到。</p>
  <p>下一步在攻：常温稳定技术、可覆盖多种变异株的"通用"疫苗、以及更便宜的产能。mRNA 平台也被拓展到癌症治疗、蛋白替代等领域——它打开的，是一扇"用身体当药厂"的大门。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>mRNA 疫苗给细胞一段"造病毒零件"的指令，让免疫系统提前认脸，从设计上不含活病毒。它快、平台化、获诺奖；但冷链、变异株与公平性，仍是落地要跨的坎。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>mRNA 疫苗</b> 将编码抗原的修饰 mRNA 包载于脂质纳米颗粒（LNP）递送，进入细胞后在核糖体翻译出抗原蛋白，激活体液与细胞免疫。核苷修饰（Ψ）降低先天免疫原性、提升表达。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>2023 年诺贝尔生理学或医学奖授予卡里科与韦斯曼。新冠 mRNA 疫苗（2020）大规模验证平台；肿瘤新抗原疫苗、RSV/流感等管线在研。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>卡里科与韦斯曼（2023 诺奖）· 罗西（早期 LNP-mRNA）· 众多疫苗工程团队</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://www.nobelprize.org/prizes/medicine/2023/summary/" target="_blank" rel="noopener">2023 诺贝尔生理学或医学奖</a> · <a href="https://en.wikipedia.org/wiki/MRNA_vaccine" target="_blank" rel="noopener">维基百科：mRNA 疫苗</a> · <a href="https://en.wikipedia.org/wiki/Katalin_Karik%C3%B3" target="_blank" rel="noopener">卡塔林·卡里科</a></p>
    </div>`,
    related:[{label:'CRISPR：基因编辑的剪刀',href:'crispr.html'},{label:'DNA 双螺旋',href:'dna-double-helix.html'},{label:'癌症免疫疗法',href:'cancer-immunotherapy.html'},{label:'人体微生物组',href:'microbiome.html'}],
    ai:{ topic:'mRNA 疫苗', icebreakers:['mRNA 疫苗到底是怎么起作用的？','为什么它比传统疫苗"快"？','假尿苷这个发现为什么重要？','mRNA 技术将来还能治什么病？'] } },

  { slug:'dna-double-helix', title:'DNA 双螺旋：生命的密码', icon:'🧬', category:'生命医学', exists:false,
    eyebrow:'诺贝尔奖成果 · DNA 双螺旋', tags:['生命医学','遗传学'], cardDesc:'两条链拧成螺旋，写满了生命的说明书。',
    story:`<div class="hook">💡 1953 年，两张皱巴巴的纸模型，揭示了生命最底层的"说明书"长什么样——DNA 双螺旋。它解释了遗传为何能精确传递。</div>
<div class="section">
  <h2>一、生命的"字母"怎么排<span data-ai-q="DNA 双螺旋是什么？为什么重要？"></span></h2>
  <p>每个细胞里都有一套 DNA，由 A、T、C、G 四种碱基像字母一样写成生命的说明书。沃森和克里克综合前人的数据——特别是富兰克林的 X 射线衍射图——提出：两股 DNA 反向平行，碱基两两配对（A 配 T，C 配 G），拧成一座旋转楼梯。</p>
  <p>这个结构一出来，立即暗示了遗传的机制：配对规则让复制有章可循。</p>
</div>
<div class="section">
  <h2>二、为什么是"双股"这么妙<span data-ai-q="DNA 为什么是双螺旋而不是单股？"></span></h2>
  <p>双股互补是关键：复制时两股分开，各自当模板，按配对规则合成新的一半，就得到两份一模一样的双螺旋——遗传信息因此能精准传代。</p>
  <div class="analogy">
    <h3>🔍 打个比方：拉链与复写</h3>
    <p>双螺旋像一条拉链，左右齿一一对应。拉开后，左边按右边的样子补全、右边按左边的样子补全，于是"一条变两条、每条都原样"。这就是遗传复制的绝妙之处。</p>
  </div>
</div>
<div class="section">
  <h2>三、开启的时代与未解<span data-ai-q="DNA 双螺旋发现后带来了什么？还有哪些谜？"></span></h2>
  <p>它直接催生了分子生物学：DNA 测序、基因工程、法医鉴定、进化研究都由此起飞。今天测一个人的全基因组已成日常。</p>
  <p>但谜团仍在：基因如何被精准"开关"（调控）、占基因组大头的"非编码 DNA"到底干啥用、环境如何通过"表观遗传"在不改序列的情况下留下记忆——这些才是理解生命运作的真正前沿。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>DNA 双螺旋是两股互补配对的旋转楼梯，既存遗传信息、又天然支持精准复制。它的发现开启了分子生物学时代，但基因调控与表观遗传仍是未竟的前沿。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>DNA 双螺旋</b> 由两条反向平行的多核苷酸链通过 A-T、G-C 碱基互补氢键配对，右手螺旋。半保留复制：每条链作模板合成新链，保证遗传信息准确传递。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>1953 年模型（沃森、克里克，1962 诺奖与威尔金斯共享）；富兰克林的 X 射线衍射是关键证据。后续：人类基因组计划（2003）、高通量测序、CRISPR 均奠基于此。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>沃森与克里克 · 威尔金斯 · 罗莎琳德·富兰克林（关键衍射数据）· 鲍林（结构化学先驱）</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://www.nobelprize.org/prizes/medicine/1962/summary/" target="_blank" rel="noopener">1962 诺贝尔生理学或医学奖</a> · <a href="https://en.wikipedia.org/wiki/DNA" target="_blank" rel="noopener">维基百科：DNA</a> · <a href="https://en.wikipedia.org/wiki/Rosalind_Franklin" target="_blank" rel="noopener">罗莎琳德·富兰克林</a></p>
    </div>`,
    related:[{label:'CRISPR：基因编辑的剪刀',href:'crispr.html'},{label:'mRNA 疫苗',href:'mrna-vaccine.html'},{label:'癌症免疫疗法',href:'cancer-immunotherapy.html'},{label:'人体微生物组',href:'microbiome.html'}],
    ai:{ topic:'DNA 双螺旋', icebreakers:['DNA 双螺旋是怎么被发现的？它为什么重要？','A-T、C-G 配对是什么意思？','富兰克林的贡献为什么被忽略？','DNA 结构和现代基因技术有什么关系？'] } },

  { slug:'cancer-immunotherapy', title:'癌症免疫疗法：唤醒身体的卫士', icon:'🛡️', category:'生命医学', exists:false,
    eyebrow:'诺贝尔奖成果 · 癌症免疫疗法', tags:['生命医学','免疫'], cardDesc:'不再只靠毒杀肿瘤，而是让身体自己出手。',
    story:`<div class="hook">💡 癌细胞是身体"自己人"叛变，免疫系统却常认不出或打不过。免疫疗法想做的，是把身体的警察重新武装起来。</div>
<div class="section">
  <h2>一、为什么癌症这么难对付<span data-ai-q="为什么免疫系统不容易清除癌细胞？"></span></h2>
  <p>癌细胞由正常细胞变来，和正常细胞太像，免疫系统容易把它当自己人放过；它还会释放"别杀我"的信号、营造抑制免疫的微环境。传统放化疗像无差别轰炸，伤敌一千自损八百，且易耐药。</p>
  <p>根本难点在于：要精准区分"叛徒"和"良民"，又不能误伤正常组织。</p>
</div>
<div class="section">
  <h2>二、免疫疗法怎么破局<span data-ai-q="免疫疗法（如 PD-1、CAR-T）是怎么起效的？"></span></h2>
  <p>一类叫"检查点抑制剂"（如 PD-1 抗体），相当于松开免疫细胞被癌细胞按住的"刹车"，让它重新攻击肿瘤；另一类 CAR-T，把患者的 T 细胞取出，改造成专门认肿瘤的小队再回输体内。2018 年诺奖（本庶佑、艾利森）表彰了检查点机制的发现。</p>
  <div class="analogy">
    <h3>🔍 打个比方：解开警犬的嘴套</h3>
    <p>癌细胞偷偷给警犬（T 细胞）套上嘴套说"别咬我"。检查点抑制剂就是把嘴套解开，警犬这才认出叛徒、扑上去。CAR-T 则是专门训练了一只只认坏人的警犬。</p>
  </div>
</div>
<div class="section">
  <h2>三、卡在哪、难在哪<span data-ai-q="免疫疗法还有什么局限和挑战？"></span></h2>
  <p>它只对部分人有效，且可能"用力过猛"引发自身免疫炎症；CAR-T 极其昂贵，对实体瘤尤其难渗透；肿瘤还会进化出耐药。如何预测谁有效、怎么组合疗法、怎么压住毒性，是临床攻坚。</p>
  <p>更长远的梦想是"癌症疫苗"——把肿瘤特有标记教给免疫系统，让它主动巡逻。这条路已在黑色素瘤等取得突破，但要普适仍遥远。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>免疫疗法松开或重训免疫系统去攻击癌细胞，带来 cure 的新希望并获诺奖。但它只对部分人有效、可能过激、且昂贵；预测疗效与组合疗法是当下重点。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>癌症免疫疗法</b> 含免疫检查点阻断（抗 CTLA-4、抗 PD-1/PD-L1 抗体）与 CAR-T 细胞疗法。前者解除肿瘤对 T 细胞的抑制信号，后者经基因改造使 T 细胞表达肿瘤特异性受体。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>2018 年诺贝尔生理学或医学奖授予艾利森与本庶佑。多款检查点抑制剂已获批；CAR-T 在白血病/淋巴瘤获批，实体瘤与通用化仍在攻关。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>艾利森与本庶佑（2018 诺奖）· 多位 CAR-T 先驱（如 June 团队）</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://www.nobelprize.org/prizes/medicine/2018/summary/" target="_blank" rel="noopener">2018 诺贝尔生理学或医学奖</a> · <a href="https://en.wikipedia.org/wiki/Immune_checkpoint" target="_blank" rel="noopener">维基百科：免疫检查点</a> · <a href="https://en.wikipedia.org/wiki/CAR_T_cell" target="_blank" rel="noopener">维基百科：CAR-T</a></p>
    </div>`,
    related:[{label:'mRNA 疫苗',href:'mrna-vaccine.html'},{label:'CRISPR：基因编辑的剪刀',href:'crispr.html'},{label:'DNA 双螺旋',href:'dna-double-helix.html'},{label:'人体微生物组',href:'microbiome.html'}],
    ai:{ topic:'癌症免疫疗法', icebreakers:['癌症免疫疗法是怎么让身体杀癌的？','什么是免疫检查点、PD-1？','CAR-T 和普通免疫疗法有什么不同？','为什么它能带来长期缓解？'] } },

  { slug:'microbiome', title:'人体微生物组：住在你身上的万亿邻居', icon:'🦠', category:'生命医学', exists:false,
    eyebrow:'前沿问题 · 人体微生物组', tags:['生命医学','微生物'], cardDesc:'肠道里住着数以万亿的"房客"，悄悄影响你的健康。',
    story:`<div class="hook">💡 你身上和体内住着数以万亿计的细菌、真菌，数量堪比甚至超过自身细胞。这个"微生物组"，其实是身体的隐形器官。</div>
<div class="section">
  <h2>一、它们住哪、在干嘛<span data-ai-q="微生物组是什么？对身体有什么用？"></span></h2>
  <p>肠道菌群帮消化纤维、合成某些维生素、训练免疫系统，甚至通过"肠脑轴"影响情绪。皮肤、口腔、阴道也各有群落。它们和宿主是共生关系：你供养它们，它们帮你干活。</p>
  <p>一个健康成年人的肠道里，微生物基因总数可能是人体自身基因的百倍以上。</p>
</div>
<div class="section">
  <h2>二、失衡会生病<span data-ai-q="微生物组失衡和哪些疾病有关？"></span></h2>
  <p>抗生素滥用、饮食单一会打乱群落结构。研究发现，菌群异常与肥胖、炎症性肠病、过敏、甚至抑郁风险上升相关联。</p>
  <div class="analogy">
    <h3>🔍 打个比方：身体里的花园</h3>
    <p>你的身体像一座花园，好细菌是花草、坏细菌是杂草。勤施肥（均衡饮食）花草繁茂；一味喷药（滥用抗生素）可能把好花草一起除掉，杂草趁机占领——花园就乱了。</p>
  </div>
</div>
<div class="section">
  <h2>三、因果难分，疗法难造<span data-ai-q="微生物组研究还有什么未解之谜？"></span></h2>
  <p>最大的难题是"因果"：是菌群导致疾病，还是疾病改变了菌群？两者常互为因果、纠缠不清。粪菌移植等对艰难梭菌感染已见效，但对多数慢病的可复用疗法仍模糊。</p>
  <p>如何把"好菌群"做成精准、稳定、个性化的干预，而不只是"吃点益生菌"的模糊口号，是这片新兴领域最硬的骨头。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>微生物组是寄居人体的海量微生物群落，参与消化、免疫乃至情绪。它失衡关联多种疾病，但因果难分；把菌群变成可复用的精准疗法，仍是开放难题。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>人体微生物组（Human Microbiome）</b> 指宿主体表/腔道共生微生物的集合，肠道最丰富。宏基因组测序揭示其组成；短链脂肪酸（SCFA）等代谢物介导宿主互作。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>人类微生物组计划（HMP）等推动分类与功能研究。粪菌移植（FMT）对复发性艰难梭菌感染获批；菌群-脑轴、个性化营养为热点。因果关系仍需严格验证。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>戈登（肥胖与菌群）· relman 与福克（HMP）· 多国微生物组计划团队</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/Gut_flora" target="_blank" rel="noopener">维基百科：肠道微生物</a> · <a href="https://en.wikipedia.org/wiki/Fecal_microbiota_transplant" target="_blank" rel="noopener">维基百科：粪菌移植</a> · <a href="https://en.wikipedia.org/wiki/Human_Microbiome_Project" target="_blank" rel="noopener">人类微生物组计划</a></p>
    </div>`,
    related:[{label:'DNA 双螺旋',href:'dna-double-helix.html'},{label:'CRISPR：基因编辑的剪刀',href:'crispr.html'},{label:'mRNA 疫苗',href:'mrna-vaccine.html'},{label:'癌症免疫疗法',href:'cancer-immunotherapy.html'}],
    ai:{ topic:'人体微生物组', icebreakers:['人体微生物组到底是什么？它有什么用？','肠道菌群和肥胖、情绪真的有关吗？','粪菌移植是怎么一回事？','日常饮食怎么影响肠道菌群？'] } },
  { slug:'kakeya', title:'挂谷猜想', icon:'📐', category:'数学计算', exists:true,
    cardDesc:'一根针旋转需要多大地方？2026 菲尔兹奖。' },
  { slug:'quantum-error', title:'量子纠错', icon:'🛡️', category:'数学计算', exists:true,
    cardDesc:'给脆弱的量子信息穿上铠甲——从不可能到可能。' },
  { slug:'p-vs-np', title:'P vs NP：计算机科学的圣杯', icon:'🧩', category:'数学计算', exists:false,
    eyebrow:'千禧年难题 · P vs NP', tags:['数学计算','计算机'], cardDesc:'难解的问题，是否也都能被快速验证？',
    story:`<div class="hook">💡 有些问题，验证一个答案很容易，却没人知道怎么快速"想出"答案——比如拼图。P vs NP 问的正是：这两件事，真的一样容易吗？</div>
<div class="section">
  <h2>一、P 和 NP 是什么<span data-ai-q="P 和 NP 分别指什么？"></span></h2>
  <p>P 类问题能快速（用"多项式时间"）求解，比如判断一个数是否为偶数。NP 类问题至少能快速"验证"一个答案对不对——比如数独、旅行商的最优路线：给你一份答案，你很快能核对它合不合规。</p>
  <p>显然 P 包含于 NP：能快速求解的，自然也能快速验证。问题是反过来——NP 里的难题，是否也能快速求解？</p>
</div>
<div class="section">
  <h2>二、为什么这个问题炸裂<span data-ai-q="证明 P=NP 或 P≠NP 会有什么后果？"></span></h2>
  <p>如果 P = NP，意味着大量"难验证却更易求解"的问题都能被快速破解——许多优化、调度、密码学难题将迎刃而解，同时也可能动摇现代密码体系的根基。</p>
  <div class="analogy">
    <h3>🔍 打个比方：拼图与验图</h3>
    <p>拼好一幅千块拼图极难（求解难），但有人递给你成品，你一眼就能看出对不对（验证易）。P=NP 相当于说：拼图其实和验图一样快——多数专家认为这不可能，但谁也没证明。</p>
  </div>
</div>
<div class="section">
  <h2>三、悬赏百万的未解<span data-ai-q="P vs NP 为什么是著名难题？"></span></h2>
  <p>它是克雷研究所"千禧年七大数学难题"之一，悬赏百万美元。绝大多数计算机科学家相信 P ≠ NP，可严谨证明至今缺席。</p>
  <p>这个判断不只是哲学：如果哪天意外证明 P = NP，从药物设计到物流调度都会被改写，而我们的加密通信也可能一夜失守。正因影响深远，它稳居理论计算机科学的皇冠。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>P vs NP 追问"快速求解"是否等于"快速验证"。它极可能 P≠NP 却无人证明，是千禧年难题之一；其答案将深刻影响优化、密码学与计算科学的边界。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>P vs NP</b>：P 为确定性图灵机多项式时间可解；NP 为多项式时间可验证。库克-列文定理证明 SAT 是 NP 完全——若 SAT ∈ P，则所有 NP 问题 ∈ P。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>七大千禧年难题之一（克莱数学所，100 万美元）。学界主流猜测 P ≠ NP，但严格证明仍缺。NP 完全理论（卡普）深刻影响算法设计与密码学。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>库克与列文（NP 完全）· 卡普（NP 完全归约）· 图灵（可计算性奠基）</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/P_versus_NP_problem" target="_blank" rel="noopener">维基百科：P 对 NP 问题</a> · <a href="https://www.claymath.org/millennium-problems/" target="_blank" rel="noopener">克莱数学研究所：千禧年难题</a> · <a href="https://en.wikipedia.org/wiki/NP-completeness" target="_blank" rel="noopener">维基百科：NP 完全</a></p>
    </div>`,
    related:[{label:'RSA 密码',href:'rsa-crypto.html'},{label:'傅里叶变换',href:'fourier-transform.html'},{label:'混沌理论',href:'chaos-theory.html'},{label:'量子纠错',href:'quantum-error.html'}],
    ai:{ topic:'P vs NP', icebreakers:['P 和 NP 到底是什么意思？','为什么大家都认为 P 不等于 NP？','如果 P=NP 被证明会怎样？','这个问题和日常有什么关联？'] } },

  { slug:'riemann-hypothesis', title:'黎曼猜想：素数分布的密码', icon:'🔢', category:'数学计算', exists:false,
    eyebrow:'世纪难题 · 黎曼猜想', tags:['数学计算','数论'], cardDesc:'素数看似随机，却藏着一条神秘的"临界线"。',
    story:`<div class="hook">💡 质数像随机数一样散布，却又藏着惊人的规律。黎曼假设想用一个公式，预测质数到底分布得有多"匀"。</div>
<div class="section">
  <h2>一、质数与 ζ 函数<span data-ai-q="黎曼假设说的是什么？"></span></h2>
  <p>质数（2、3、5、7…）没有简单公式，越大越稀疏，却看似随机。19 世纪，黎曼把质数的分布和一个叫 ζ(s) 的复变函数联系起来，并提出：ζ 的所有"非平凡零点"都落在复平面上一条竖线上（实部恰为 1/2）。</p>
  <p>这条看似抽象的线，竟牵动着质数排布的脉搏。</p>
</div>
<div class="section">
  <h2>二、为什么它如此要紧<span data-ai-q="黎曼假设为什么重要？"></span></h2>
  <p>若假设成立，质数分布的"误差"将受到极严的控制，大量数论定理（关于质数间隔、素数计数）都随之成立。它是整座解析数论大厦的基石。</p>
  <div class="analogy">
    <h3>🔍 打个比方：乐谱上的准星</h3>
    <p>质数像一段看似随性的鼓点，黎曼假设则说：这些鼓点其实严格落在乐谱某条基准线上。只要准星不偏，整首曲子的节奏规律就全掌握了。</p>
  </div>
</div>
<div class="section">
  <h2>三、160 年仍未解<span data-ai-q="黎曼假设为什么这么难证明？"></span></h2>
  <p>一个半世纪过去，无数数学分支建立在"假设为真"之上，却始终没人严格证明或推翻它。它是千禧年七大难题之首，悬赏百万美元。</p>
  <p>麻烦在于 ζ 函数的零点深埋在复平面的无限疆域里，缺乏能统摄全局的工具。一旦被否证，许多"暂假定成立"的结论都要重估——这也是它让人又爱又怕的原因。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>黎曼假设预言 ζ 函数的非平凡零点都落在实部 1/2 的线上，直接关乎质数分布的精度。它是数论基石、千禧年难题之首，160 余年悬而未决。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>黎曼猜想</b>：黎曼 ζ(s) 的非平凡零点全部位于临界线 Re(s)=1/2 上。零点分布直接决定素数计数函数 π(x) 的误差项（由显式公式联系）。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>1859 年提出，千禧年七大难题之一。已数值验证逾 10¹³ 个零点均在临界线上；严格证明仍缺。与广义黎曼猜想（GRH）共同影响素数测试与密码学。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>黎曼（1859）· 欧拉（ζ 函数先驱）· 哈代（无限多零点在临界线上）· 塞尔伯格（零点密度）</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/Riemann_hypothesis" target="_blank" rel="noopener">维基百科：黎曼猜想</a> · <a href="https://www.claymath.org/millennium-problems/" target="_blank" rel="noopener">克莱数学研究所：千禧年难题</a> · <a href="https://en.wikipedia.org/wiki/Prime_number_theorem" target="_blank" rel="noopener">维基百科：素数定理</a></p>
    </div>`,
    related:[{label:'P vs NP',href:'p-vs-np.html'},{label:'RSA 密码',href:'rsa-crypto.html'},{label:'傅里叶变换',href:'fourier-transform.html'},{label:'混沌理论',href:'chaos-theory.html'}],
    ai:{ topic:'黎曼猜想', icebreakers:['黎曼猜想到底在说什么？和素数有什么关系？','为什么它这么难证明？','已经验证那么多零点了，为什么还不算证明？','它和现代密码学有关吗？'] } },

  { slug:'fourier-transform', title:'傅里叶变换：把声音拆成音符', icon:'🎵', category:'数学计算', exists:false,
    eyebrow:'数学工具 · 傅里叶变换', tags:['数学计算','信号'], cardDesc:'一副能把任何信号拆成"频率音符"的魔法眼镜。',
    story:`<div class="hook">💡 同一段音乐，用钢琴弹是用一个个音"拼"出来的。傅里叶变换说的就是：任何复杂波形，都能拆成一堆不同频率的正弦波。</div>
<div class="section">
  <h2>一、核心思想：拆波成音<span data-ai-q="傅里叶变换是做什么的？"></span></h2>
  <p>法国数学家傅里叶发现，方波、语音、图像这类信号，都能表示为许多正弦/余弦波的叠加。变换把"随时间变化"的信号，翻成"含哪些频率、各占多少"的配方——就像把一段音乐译成它的"音轨清单"。</p>
  <p>反向变换则能从配方重建原信号。</p>
</div>
<div class="section">
  <h2>二、为什么无处不在<span data-ai-q="傅里叶变换有哪些实际应用？"></span></h2>
  <p>MP3、JPEG 靠它丢掉人耳不敏感的频率来省空间；医学 CT、MRI 靠反变换从一堆投影重建出断层图像；语音识别、通信调制、地震分析都依赖它。快速傅里叶变换（FFT）算法让它算得飞快，才真正普及。</p>
  <div class="analogy">
    <h3>🔍 打个比方：做菜配方</h3>
    <p>一道复杂菜肴，傅里叶变换就是它的"配料表"：不是告诉你菜长啥样，而是说清用了多少盐、糖、辣。想瘦身（压缩）就少放不关键的料；想还原（重建）就按表重做。</p>
  </div>
</div>
<div class="section">
  <h2>三、边界与延伸<span data-ai-q="傅里叶变换有什么局限？"></span></h2>
  <p>它默认信号"平稳"（规律恒定），对突变、瞬态（如心跳异常、爆炸）不够灵敏。于是有了小波变换等补充，专门捕捉"何时发生"的局部特征。</p>
  <p>但作为"把复杂拆成简单波"的范式，傅里叶变换仍是现代信号处理无可替代的脊梁，从Wi-Fi到天文无一例外。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>傅里叶变换把信号拆成不同频率正弦波的配方，是压缩、成像、通信的底层数学。它假设信号平稳，对非平稳信号有局限，却仍是信号处理的脊梁。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>傅里叶变换</b> 将时域/空域信号 f(t) 映射为频域 F(ω)=∫ f(t)e^{-iωt}dt。离散形式（DFT）及其快速算法 FFT 是数字信号处理核心。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>库利-图基 FFT（1965）把 DFT 从 O(N²) 降到 O(N log N)，奠定实时处理基础。衍生：小波变换、短时傅里叶、稀疏傅里叶变换。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>傅里叶（1807）· 库利与图基（FFT）· 图基（另多位先驱）</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/Fourier_transform" target="_blank" rel="noopener">维基百科：傅里叶变换</a> · <a href="https://en.wikipedia.org/wiki/Fast_Fourier_transform" target="_blank" rel="noopener">维基百科：快速傅里叶变换</a> · <a href="https://en.wikipedia.org/wiki/Joseph_Fourier" target="_blank" rel="noopener">约瑟夫·傅里叶</a></p>
    </div>`,
    related:[{label:'RSA 密码',href:'rsa-crypto.html'},{label:'P vs NP',href:'p-vs-np.html'},{label:'混沌理论',href:'chaos-theory.html'},{label:'卷积神经网络',href:'cnn.html'}],
    ai:{ topic:'傅里叶变换', icebreakers:['傅里叶变换到底在做什么？','为什么能把声音拆成频率？','它和 MP3、JPEG 压缩有什么关系？','FFT 算法为什么重要？'] } },

  { slug:'chaos-theory', title:'混沌理论：一只蝴蝶能掀起风暴吗？', icon:'🦋', category:'数学计算', exists:false,
    eyebrow:'前沿问题 · 混沌理论', tags:['数学计算','动力系统'], cardDesc:'确定性的系统，也会变得不可预测。',
    story:`<div class="hook">💡 蝴蝶扇一下翅膀，真能让远方刮起台风吗？混沌理论说的不是魔法，而是一个事实：有些系统对初始条件极其敏感，差之毫厘谬以千里。</div>
<div class="section">
  <h2>一、什么是混沌<span data-ai-q="混沌理论讲的是什么？"></span></h2>
  <p>混沌出现在"决定性的"系统里——规则明确、没有随机，长期行为却不可预测。气象学家洛伦兹发现，他的天气模型里初始值只差一丁点，结果却天差地别，这就是著名的"蝴蝶效应"。系统的轨迹会在一个叫"奇异吸引子"的形状上永不重复地打转。</p>
  <p>混沌不是乱，而是"有规律的不预报"。</p>
</div>
<div class="section">
  <h2>二、为什么不能长期预测<span data-ai-q="为什么混沌系统难以预测？"></span></h2>
  <p>因为微小误差会被指数级放大。你永远测不准初始状态的最后一丝偏差，预测就迟早失灵。这也是为什么天气预报通常只在十几天内可信，再往后就不准了。</p>
  <div class="analogy">
    <h3>🔍 打个比方：台球桌上的弹珠</h3>
    <p>轻推一颗弹珠，初始角度偏一毫厘，撞几次后落点就完全不同。混沌系统就像一张布满弹性边的台球桌，误差每弹一次就被放大一倍。</p>
  </div>
</div>
<div class="section">
  <h2>三、价值与未解<span data-ai-q="混沌理论有什么用？"></span></h2>
  <p>混沌不等于噪声，它有自己的结构：分形维数、吸引子形状都可量化。它被用于气候、心律不齐、湍流、经济波动的分析。</p>
  <p>开放问题包括：如何可靠区分"真混沌"与"纯随机噪音"？能否在短时内精准控制混沌（如让心律失常回归正常）？这些都是活跃前沿。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>混沌是决定性系统因敏感依赖初值而长期不可预测的现象（蝴蝶效应）。它有内在结构而非纯随机，广泛用于气候、生理与湍流，但预测与控制仍是难题。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>混沌（Chaos）</b> 指对初值敏感依赖、具确定性规则的动力学系统。量化指标为李雅普诺夫指数（正指数即敏感）；洛伦兹吸引子是典型奇异吸引子。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>洛伦兹（1963）开创；庞加莱早在三体问题中预见；费根鲍姆发现倍周期分岔普适常数。应用遍及气象、生态、心律、湍流与经济。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>洛伦兹 · 庞加莱 · 费根鲍姆 · 曼德博（分形几何）</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/Butterfly_effect" target="_blank" rel="noopener">维基百科：蝴蝶效应</a> · <a href="https://en.wikipedia.org/wiki/Lorenz_system" target="_blank" rel="noopener">维基百科：洛伦兹系统</a> · <a href="https://en.wikipedia.org/wiki/Chaos_theory" target="_blank" rel="noopener">维基百科：混沌理论</a></p>
    </div>`,
    related:[{label:'傅里叶变换',href:'fourier-transform.html'},{label:'P vs NP',href:'p-vs-np.html'},{label:'RSA 密码',href:'rsa-crypto.html'},{label:'大语言模型与 Transformer',href:'transformer-llm.html'}],
    ai:{ topic:'混沌理论', icebreakers:['混沌理论到底是什么？蝴蝶效应是怎么回事？','混沌和随机混乱有什么不同？','为什么天气预报有上限？','混沌理论能用在哪些地方？'] } },

  { slug:'rsa-crypto', title:'RSA 密码：大数分解守护互联网', icon:'🔐', category:'数学计算', exists:false,
    eyebrow:'信息安全 · RSA 密码', tags:['数学计算','密码学'], cardDesc:'互联网背后的"锁"：靠一个极难的数学题守门。',
    story:`<div class="hook">💡 你上网付款、发密信，背后常有一把"公开的锁"——谁都能用它加密，却只有持私钥的人能解开。RSA 就是这种锁的数学原理。</div>
<div class="section">
  <h2>一、原理：乘法的易与难<span data-ai-q="RSA 加密是怎么工作的？"></span></h2>
  <p>RSA 基于一个不对称：把两个巨大质数相乘很容易，反过来把乘积分解回这两个质数，却极难（这叫"质因数分解难"）。公钥是那个大乘积和加密指数，谁都能用来加密；私钥来自分解——只要质数够大，谁也算不动。</p>
  <p>这叫"非对称加密"：锁公开，钥匙私藏。</p>
</div>
<div class="section">
  <h2>二、为什么它可靠<span data-ai-q="RSA 为什么安全？"></span></h2>
  <p>现代 RSA 用的合数成百上千位，经典计算机分解它需要天文级时间。它撑起了 HTTPS、数字签名，让你和网站的通信不被中间人偷看。</p>
  <div class="analogy">
    <h3>🔍 打个比方：混色与还原</h3>
    <p>把红、黄两桶颜料混成一大桶橙，一眼看不出比例（公钥）；想还原成准确的红黄配比（私钥），除非你本来就知道——分解大数就像把橙颜料拆回红黄，极难。</p>
  </div>
</div>
<div class="section">
  <h2>三、卡在哪（量子威胁）<span data-ai-q="RSA 面临什么威胁？"></span></h2>
  <p>量子计算机上的 Shor 算法，能从原理上快速分解大数，将瓦解 RSA。于是全球正加紧研发"后量子密码"并标准化。</p>
  <p>此外，数学上安全不等于工程上安全：实现中的侧信道泄露、弱随机数、配置错误，常比破解算法更先得手。守护通信，是数学、软件与运维的共同战场。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>RSA 利用"大数易乘难分解"做非对称加密，是 HTTPS 的基石。但它面临量子计算（Shor 算法）的潜在威胁，后量子密码正加紧登场，工程实现也常被攻破。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>RSA</b> 是基于大整数分解困难性的公钥密码：公钥含 N=pq 与公钥指数 e，私钥为 φ(N) 下的 d。加密 c=m^e mod N。安全性依赖分解 N 的算力成本。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>1977 年提出（2002 图灵奖）。肖尔算法（1994）显示量子计算机可多项式时间分解，催生后量子密码标准化（NIST 2022–2024 遴选）。Diffie-Hellman 公钥思想同期奠基。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>里维斯特、萨莫尔、阿德曼（RSA）· 迪菲与赫尔曼（公钥密码）· 肖尔（量子算法）</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/RSA_(cryptosystem)" target="_blank" rel="noopener">维基百科：RSA 密码</a> · <a href="https://en.wikipedia.org/wiki/Shor%27s_algorithm" target="_blank" rel="noopener">维基百科：肖尔算法</a> · <a href="https://en.wikipedia.org/wiki/Public-key_cryptography" target="_blank" rel="noopener">维基百科：公钥密码学</a></p>
    </div>`,
    related:[{label:'P vs NP',href:'p-vs-np.html'},{label:'量子纠错',href:'quantum-error.html'},{label:'傅里叶变换',href:'fourier-transform.html'},{label:'大语言模型与 Transformer',href:'transformer-llm.html'}],
    ai:{ topic:'RSA 密码', icebreakers:['RSA 是怎么用大数分解来保护信息的？','为什么分解大数这么难？','量子计算机会让 RSA 失效吗？','后量子密码是什么？'] } },
  { slug:'greenhouse-effect', title:'温室效应：地球的温度调节器', icon:'🌡️', category:'地球气候', exists:false,
    eyebrow:'地球气候 · 温室效应', tags:['地球气候','大气'], cardDesc:'让地球不结冰、也让地球变热的双层"被子"。',
    story:`<div class="hook">💡 没它，地球会是零下 18 度的冰球；没管住它，地球又在发烧。温室效应，本是生命之福，也是今日之患。</div>
<div class="section">
  <h2>一、它是什么<span data-ai-q="温室效应是怎么回事？"></span></h2>
  <p>太阳的短波辐射能穿透大气加热地表，地表再以红外长波把热量往外散。二氧化碳、水汽等"温室气体"会吸收红外、把热量拦回地表，像给地球盖了层被子。正因这层被子，地表平均保持在约 15 度，适宜生命。</p>
  <p>没有它，地球平均温度会跌到零下 18 度，海洋全冻。</p>
</div>
<div class="section">
  <h2>二、福也是祸<span data-ai-q="温室效应为什么既是好事又是问题？"></span></h2>
  <p>自然浓度的温室气体是生命的护盾。但工业革命后，人类烧煤、石油、天然气，把封存在地下的碳猛灌回大气，CO₂ 浓度比工业化前高了约 50%，被子越盖越厚，全球持续变暖。</p>
  <div class="analogy">
    <h3>🔍 打个比方：玻璃温室与棉被</h3>
    <p>温室气体像温室玻璃：白天放阳光进来，夜里把热量兜住。适度是保暖，过度就像冬天盖了十床棉被——你开始冒汗、发烧。地球现在就是"被子太厚"。</p>
  </div>
</div>
<div class="section">
  <h2>三、难在精细预测与减排<span data-ai-q="研究温室效应还有什么难点？"></span></h2>
  <p>效应本身确定无疑，难在精细化预测：云怎样反馈、海洋吸收多少、冻土会不会释放甲烷放大变暖，都带不确定性。这直接关系能源转型与气候政策的力度。</p>
  <p>它既是科学问题，也是公平问题：排放主要来自发达国家历史积累，后果却常由最脆弱地区承受。如何一边搞清机理、一边全球协同减排，是世纪级难题。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>温室效应是气体拦回地表红外、维持宜居温度的天然机制；人类过量排放使其失控变暖。机理清楚，难在反馈预测与全球公平减排。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>温室效应</b> 指大气透过太阳短波辐射、吸收地表红外长波辐射并再辐射，抬升地表温度。主要温室气体：H₂O、CO₂、CH₄、N₂O、氟气体。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>傅里叶 1824 年最早提出，阿伦尼乌斯 1896 年量化 CO₂ 影响。当前焦点：辐射强迫、气候敏感度、IPCC 多情景预估。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>傅里叶 · 阿伦尼乌斯 · 卡伦德（现代全球变暖研究先驱）· 许多气候系统科学家</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/Greenhouse_effect" target="_blank" rel="noopener">维基百科：温室效应</a> · <a href="https://www.ipcc.ch/" target="_blank" rel="noopener">IPCC 政府间气候变化专门委员会</a> · <a href="https://en.wikipedia.org/wiki/Carbon_dioxide_in_Earth%27s_atmosphere" target="_blank" rel="noopener">大气中的二氧化碳</a></p>
    </div>`,
    related:[{label:'碳循环：地球的生命元素之旅',href:'carbon-cycle.html'},{label:'海洋酸化',href:'ocean-acidification.html'},{label:'臭氧层：地球的隐形盾牌',href:'ozone-layer.html'},{label:'人工光合作用',href:'artificial-photosynthesis.html'}],
    ai:{ topic:'温室效应', icebreakers:['温室效应到底是什么？它为什么重要？','温室气体是怎么留住热量的？','温室效应和全球变暖是一回事吗？','二氧化碳浓度现在是多少？'] } },

  { slug:'carbon-cycle', title:'碳循环：地球的生命元素之旅', icon:'♻️', category:'地球气候', exists:false,
    eyebrow:'地球气候 · 碳循环', tags:['地球气候','生物地球化学'], cardDesc:'碳在大气、海洋、岩石与生命间不停旅行。',
    story:`<div class="hook">💡 碳是生命的骨架元素，它在大气、海洋、岩石、生物间不停旅行。这个"碳循环"一旦被打乱，气候就跟着失衡。</div>
<div class="section">
  <h2>一、循环怎么转<span data-ai-q="碳循环是什么？碳在哪些圈层间流动？"></span></h2>
  <p>植物光合作用把大气里的 CO₂ 固定成有机物；动物呼吸、枯枝落叶腐烂、火山喷发、燃料燃烧，又把碳放回大气或海洋。海洋是最大的活跃碳库之一，能溶解大量 CO₂，海底沉积还把碳长期封存进岩石。</p>
  <p>自然状态下，排放与吸收大致平衡，大气 CO₂ 浓度长期稳定。</p>
</div>
<div class="section">
  <h2>二、人类打破了平衡<span data-ai-q="人类活动怎么扰乱了碳循环？"></span></h2>
  <p>亿万年封存在煤、石油、天然气里的"远古碳"，被我们短短两百年大量挖出烧掉，猛灌回大气。自然吸收速度跟不上，CO₂ 就在大气里累积，推动变暖。</p>
  <div class="analogy">
    <h3>🔍 打个比方：存钱与取钱</h3>
    <p>地球原本有个收支平衡的账户：植物存碳、呼吸取碳。人类凭空开了个"远古账户"，疯狂提款（烧化石碳）却从不存回，于是账面（大气 CO₂）一路飙红。</p>
  </div>
</div>
<div class="section">
  <h2>三、未解的关键<span data-ai-q="碳循环研究还有什么不确定？"></span></h2>
  <p>最大未知数在"碳汇"：陆地森林、土壤、海洋到底能吸收多少多余 CO₂？它们会随变暖而饱和甚至反转吗？冻土融化释放的甲烷，会不会成为加速变暖的"开关"？</p>
  <p>这些反馈决定了未来升温的上限，也是气候模型误差的最大来源。弄清碳循环的"容纳量"，是制定减排目标的核心依据。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>碳循环是碳在大气、生物、海洋、岩石间流动的自然平衡。人类燃烧化石碳打破了它，导致 CO₂ 累积。碳汇强度与冻土反馈，是预测气候的最大不确定。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>碳循环</b> 描述碳在大气、生物圈、海洋、岩石圈间的交换（通量）。快循环以年计，慢循环以百万年计。人为化石燃料与水泥排放打破长期平衡，导致大气 CO₂ 净增。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>全球碳计划（Global Carbon Project）逐年核算碳收支；焦点：陆地/海洋碳汇饱和、冻土碳释放、负排放技术（BECCS、直接空气捕集）。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>许多碳循环与生物地球化学研究者 · IPCC 工作组</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/Carbon_cycle" target="_blank" rel="noopener">维基百科：碳循环</a> · <a href="https://globalcarbonproject.org/" target="_blank" rel="noopener">全球碳计划</a> · <a href="https://en.wikipedia.org/wiki/Carbon_sink" target="_blank" rel="noopener">维基百科：碳汇</a></p>
    </div>`,
    related:[{label:'温室效应：地球的温度调节器',href:'greenhouse-effect.html'},{label:'海洋酸化',href:'ocean-acidification.html'},{label:'厄尔尼诺：太平洋的呼吸',href:'el-nino.html'},{label:'板块构造：漂移的大陆',href:'plate-tectonics.html'}],
    ai:{ topic:'碳循环', icebreakers:['碳循环是怎么运转的？为什么重要？','快循环和慢循环有什么区别？','人类是怎么打破碳平衡的？','"碳中和"的科学含义是什么？'] } },

  { slug:'plate-tectonics', title:'板块构造：漂移的大陆', icon:'🌋', category:'地球气候', exists:false,
    eyebrow:'地球科学 · 板块构造', tags:['地球气候','地质'], cardDesc:'大陆不是钉死的，而是在缓慢"漂移"。',
    story:`<div class="hook">💡 脚下的"大地"其实是一块块拼图，正以指甲生长的速度缓缓漂移。地震、火山、山脉，多半是它们互相推挤的副产品。</div>
<div class="section">
  <h2>一、大陆真的在漂<span data-ai-q="板块构造是什么？大陆为什么会移动？"></span></h2>
  <p>20 世纪确立：地壳分成若干"板块"，浮在下方炽热、可缓慢流动的地幔上。板块边界是地质活动最激烈处——张裂处冒出新生海洋（如大西洋），碰撞处挤起山脉（如喜马拉雅）、诱发强震和火山。</p>
  <p>驱动它的是地幔对流：深处热物质上升、冷物质下沉，像一锅慢炖的汤带动浮板。</p>
</div>
<div class="section">
  <h2>二、证据拼图<span data-ai-q="有什么证据支持板块构造？"></span></h2>
  <p>大陆轮廓能互相拼合；海底磁条带呈对称分布，记录板块张开的历史；同种古生物、同层岩石横跨大洋两岸；地震几乎全沿板块边界成带分布——这些独立证据严丝合缝。</p>
  <div class="analogy">
    <h3>🔍 打个比方：漂浮的拼图</h3>
    <p>地壳像几块浮在浓汤上的木筏。木筏彼此远离时，中间漫出新的汤面（新生海底）；彼此相撞时，边缘被挤压拱起（造山）。我们站在筏上，却几乎感觉不到它在动。</p>
  </div>
</div>
<div class="section">
  <h2>三、驱动细节与预测难<span data-ai-q="板块构造还有什么未解之谜？"></span></h2>
  <p>地幔对流如何与板块耦合、俯冲带为何有的快有的慢、超级大陆怎样聚了又散，仍需靠地震层析"给地球做 CT"和超级计算机模拟来逼近。</p>
  <p>最现实的难题是：我们能描述板块、却仍无法预测具体哪天哪地发生大地震——因为断层积累的应力何时突破临界点，目前没有可靠的前兆信号。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>板块构造说地壳分割成漂浮板块，由地幔对流驱动，是地震、火山、造山的根源。证据确凿，但驱动耦合细节与具体地震预测，仍是未竟之业。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>板块构造</b>：岩石圈分裂为板块，漂浮于软流圈之上，由地幔对流驱动。三类边界：离散（洋中脊新生成）、汇聚（俯冲/碰撞）、转换（走滑）。地震与火山集中于边界。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>魏格纳（1912 大陆漂移）、赫斯（1962 海底扩张）、勒皮雄（1968 板块构造命名）。现今以 GPS/InSAR 实时监测形变与地震机理。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>魏格纳 · 赫斯 · 勒皮雄 · 许多海洋地球物理学家</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/Plate_tectonics" target="_blank" rel="noopener">维基百科：板块构造</a> · <a href="https://en.wikipedia.org/wiki/Continental_drift" target="_blank" rel="noopener">维基百科：大陆漂移</a> · <a href="https://en.wikipedia.org/wiki/Seafloor_spreading" target="_blank" rel="noopener">维基百科：海底扩张</a></p>
    </div>`,
    related:[{label:'厄尔尼诺：太平洋的呼吸',href:'el-nino.html'},{label:'温室效应：地球的温度调节器',href:'greenhouse-effect.html'},{label:'臭氧层：地球的隐形盾牌',href:'ozone-layer.html'},{label:'碳循环：地球的生命元素之旅',href:'carbon-cycle.html'}],
    ai:{ topic:'板块构造', icebreakers:['板块构造是怎么回事？大陆真的在漂移吗？','海底扩张是怎么被发现的？','为什么地震多发生在板块边界？','喜马拉雅山是板块撞出来的吗？'] } },

  { slug:'el-nino', title:'厄尔尼诺：太平洋的呼吸', icon:'🌊', category:'地球气候', exists:false,
    eyebrow:'地球气候 · 厄尔尼诺', tags:['地球气候','海洋'], cardDesc:'太平洋每隔几年的一次"深呼吸"，搅动全球天气。',
    story:`<div class="hook">💡 太平洋每隔几年会"翻脸"：东边海水异常变暖，全球的雨带、旱涝、台风随之乱套。这就是厄尔尼诺。</div>
<div class="section">
  <h2>一、正常年 vs 异常年<span data-ai-q="厄尔尼诺是什么？和正常状态有何不同？"></span></h2>
  <p>正常年，信风把表层暖水吹向西太平洋，东岸涌升的冷海水带来养分，渔业兴旺。厄尔尼诺年，信风减弱，暖水向东倒灌，东西太平洋温差缩小，东岸上升流停止，养分断供。</p>
  <p>它是海洋—大气耦合的"钟摆"，与相反的"拉尼娜"交替出现。</p>
</div>
<div class="section">
  <h2>二、为何全球连锁<span data-ai-q="厄尔尼诺为什么能影响全球天气？"></span></h2>
  <p>海温异常会改变大气环流，把雨带和干旱区重新分配：一些地区暴雨成灾、另一些大旱；还影响渔业、农业、林火甚至飓风路径。它常发生在圣诞节前后，故名"圣婴"（El Niño）。</p>
  <div class="analogy">
    <h3>🔍 打个比方：浴缸里的挡板</h3>
    <p>正常时一块挡板把暖水推向西边。厄尔尼诺像挡板被抽掉，暖水漫回东边，整池水的"温度地图"重写，连带着上面的"天气盖子"也移位。</p>
  </div>
</div>
<div class="section">
  <h2>三、未解与预报<span data-ai-q="厄尔尼诺的研究还有什么难点？"></span></h2>
  <p>它究竟由什么触发、在变暖气候下会变强还是变频繁，模式仍难精确。能否提前半年以上报准其强度和走向，是气象界的硬功夫，直接关系到农业与防灾调度。</p>
  <p>更麻烦的是它和全球变暖相互纠缠：变暖本身就在改变海气背景，使得"自然振荡"与"长期趋势"越来越难拆开。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>厄尔尼诺是赤道太平洋信风减弱、暖水东移的气候振荡，通过海气耦合引发全球旱涝连锁。其触发机制与变暖下的变化仍难精确预报。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>ENSO（厄尔尼诺-南方涛动）</b> 是赤道中东太平洋海温与大气环流的耦合振荡。厄尔尼诺=海温异常偏暖，拉尼娜=偏冷，以南方涛动指数（海平面气压差）量化。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>现代通过赤道浮标阵列（TAO/TRITON）与卫星实时监测。研究焦点：与全球极端天气/季风的统计关联、年际预测技巧提升。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>多位气候与海洋学家（沃克、百叶等 ENSO 研究先驱）· 世界气象组织/NOAA</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/El_Ni%C3%B1o" target="_blank" rel="noopener">维基百科：厄尔尼诺</a> · <a href="https://www.noaa.gov/" target="_blank" rel="noopener">美国海洋大气管理局 NOAA</a> · <a href="https://en.wikipedia.org/wiki/La_Ni%C3%B1a" target="_blank" rel="noopener">维基百科：拉尼娜</a></p>
    </div>`,
    related:[{label:'温室效应：地球的温度调节器',href:'greenhouse-effect.html'},{label:'板块构造：漂移的大陆',href:'plate-tectonics.html'},{label:'碳循环：地球的生命元素之旅',href:'carbon-cycle.html'},{label:'海洋酸化',href:'ocean-acidification.html'}],
    ai:{ topic:'厄尔尼诺', icebreakers:['厄尔尼诺到底是什么？它怎么影响天气？','厄尔尼诺和拉尼娜有什么区别？','为什么太平洋变温会影响全球？','它能预报吗？'] } },

  { slug:'ozone-layer', title:'臭氧层：地球的隐形盾牌', icon:'🛡️', category:'地球气候', exists:false,
    eyebrow:'诺贝尔奖成果 · 臭氧层', tags:['地球气候','大气化学'], cardDesc:'高空的防晒盾，曾被人类自己戳出洞。',
    story:`<div class="hook">💡 离地面 20—30 公里有层薄薄的臭氧，它默默挡住了太阳光里最伤人的紫外线——是地球的"防晒霜"。</div>
<div class="section">
  <h2>一、它干嘛用<span data-ai-q="臭氧层有什么作用？"></span></h2>
  <p>臭氧（O₃）能吸收大部分有害的紫外波段（UV-B、UV-C）。没有它，地表生物会被晒伤、皮肤癌与白内障激增、浮游生物减产——而浮游生物是海洋食物链的底端，牵一发动全身。</p>
  <p>可以说，这层薄薄的臭氧，是陆地和海洋生命的一道隐形护盾。</p>
</div>
<div class="section">
  <h2>二、被人类戳破的洞<span data-ai-q="臭氧层空洞是怎么形成的？"></span></h2>
  <p>20 世纪，冰箱空调广泛使用的氟利昂等氯氟烃（CFC），飘到平流层后在紫外照射下释放氯原子，像催化剂一样疯狂分解臭氧，且自身不消耗。南极冬春极夜后，臭氧浓度骤降，出现"臭氧洞"。</p>
  <div class="analogy">
    <h3>🔍 打个比方：防晒霜被擦掉</h3>
    <p>臭氧层像一层防晒霜。CFC 像不断地往这层霜上撒"溶解剂"，一点氯就能毁掉成千上万个臭氧分子，防晒层被悄悄擦出破洞。</p>
  </div>
</div>
<div class="section">
  <h2>三、最成功的环境公约<span data-ai-q="臭氧层问题是怎么被解决的？"></span></h2>
  <p>1987 年《蒙特利尔议定书》全球禁用 CFC，此后臭氧层已缓慢恢复，被誉为最成功的环境合作案例。它证明：科学预警加全球协作，真能修复地球。</p>
  <p>但提醒仍在：一些替代气体虽不伤臭氧，却有强温室效应；监管一旦松懈，洞可能重现。它给气候治理上了一课——也更显珍贵。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>臭氧层吸收紫外线、护卫生命，曾被 CFC 撕出臭氧洞。靠《蒙特利尔议定书》全球禁用已缓慢恢复，是环境共治的典范，但替代气体的温室效应仍须警惕。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>臭氧层</b> 位于平流层，O₃ 吸收 200–320 nm 紫外。CFC 在紫外下降解为 Cl，经催化循环破坏 O₃（1 个 Cl 可破坏约 10⁵ 个 O₃）。蒙特利尔议定书管控消耗臭氧物质。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>莫利纳、罗兰、克鲁岑获 1995 年诺贝尔化学奖。臭氧洞面积已趋缩小；《基加利修正案》进一步管控强温室效应的 HFC。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>莫利纳与罗兰（1974）· 克鲁岑（氮氧化物与臭氧，诺奖 1995）· 法曼（1985 发现臭氧洞）</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://www.nobelprize.org/prizes/chemistry/1995/summary/" target="_blank" rel="noopener">1995 诺贝尔化学奖</a> · <a href="https://en.wikipedia.org/wiki/Ozone_depletion" target="_blank" rel="noopener">维基百科：臭氧层耗损</a> · <a href="https://en.wikipedia.org/wiki/Montreal_Protocol" target="_blank" rel="noopener">维基百科：蒙特利尔议定书</a></p>
    </div>`,
    related:[{label:'温室效应：地球的温度调节器',href:'greenhouse-effect.html'},{label:'碳循环：地球的生命元素之旅',href:'carbon-cycle.html'},{label:'厄尔尼诺：太平洋的呼吸',href:'el-nino.html'},{label:'海洋酸化',href:'ocean-acidification.html'}],
    ai:{ topic:'臭氧层', icebreakers:['臭氧层是什么？人类是怎么破坏它的？','氟利昂为什么能破坏臭氧？','蒙特利尔议定书为什么成功？','臭氧层现在恢复了吗？'] } },

  { slug:'ocean-acidification', title:'海洋酸化：被溶解的珊瑚家园', icon:'🐚', category:'地球气候', exists:false,
    eyebrow:'地球气候 · 海洋酸化', tags:['地球气候','海洋'], cardDesc:'海洋在悄悄变酸，珊瑚和贝类的家正在溶解。',
    story:`<div class="hook">💡 大气里多出的 CO₂，约四分之一被海洋吞下——可这对海洋不是好事：海水正悄悄变酸，珊瑚和贝壳最先遭殃。</div>
<div class="section">
  <h2>一、怎么变酸<span data-ai-q="海洋酸化是怎么发生的？"></span></h2>
  <p>CO₂ 溶入海水会生成碳酸，降低 pH、同时减少构成碳酸钙所需的碳酸根离子的浓度。对需要碳酸钙来造壳、造骨骼的生物（珊瑚、贝类、浮游有孔虫）来说，等于"建材"变少、壳越造越薄越脆。</p>
  <p>工业革命以来，海表 pH 已下降约 0.1——看似微小，但酸碱是对数尺度，意味着氢离子浓度上升了约 30%。</p>
</div>
<div class="section">
  <h2>二、连锁风险<span data-ai-q="海洋酸化有什么后果？"></span></h2>
  <p>珊瑚礁是海洋生物多样性热点，礁体退化会拖垮整条食物链；贝类幼苗在酸化水中存活率下降，影响渔业。浮游生物减产还会削弱海洋固碳能力，与变暖形成恶性循环。</p>
  <div class="analogy">
    <h3>🔍 打个比方：贝壳泡醋</h3>
    <p>把一颗钙壳放进醋里，它会慢慢变软、溶解。海洋酸化就像给全球贝壳类泡进一缸缓慢变酸的液体，造壳越来越费力。</p>
  </div>
</div>
<div class="section">
  <h2>三、被低估的"隐形"危机<span data-ai-q="海洋酸化研究还有什么难点？"></span></h2>
  <p>它与升温、缺氧、过度捕捞多重压力叠加，如何作用于整个生态系统很难分离。不同物种耐受差异极大，临界点难以确定。</p>
  <p>它常被全球变暖的光芒掩盖，却同样由同一根源（CO₂）驱动。要缓解它，唯一根本出路仍是大幅减排——这是和化学绑在一起的双线作战。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>海洋吸收 CO₂ 后变酸、碳酸钙减少，威胁珊瑚贝类等造壳生物，并削弱海洋固碳。它与变暖叠加、常被低估，根本解仍是减排。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>海洋酸化</b> 指海水因吸收大气 CO₂ 导致 pH 下降、碳酸根饱和度降低。缓冲体系（碳酸氢根/碳酸根）使其变化较缓，但工业革命以来表层 pH 已降约 0.1（酸度+26%）。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>焦点：文石饱和度（Ωarag）阈值、珊瑚礁与极地翼足类风险、CO₂ 高排放情景下的生态级联。现场与围隔实验并行。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>众多海洋化学与生态研究者 · IPCC/海洋酸化国际协调办公室</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/Ocean_acidification" target="_blank" rel="noopener">维基百科：海洋酸化</a> · <a href="https://en.wikipedia.org/wiki/Carbonate_compensation_depth" target="_blank" rel="noopener">维基百科：碳酸盐补偿深度</a> · <a href="https://en.wikipedia.org/wiki/Coral_reef" target="_blank" rel="noopener">维基百科：珊瑚礁</a></p>
    </div>`,
    related:[{label:'温室效应：地球的温度调节器',href:'greenhouse-effect.html'},{label:'碳循环：地球的生命元素之旅',href:'carbon-cycle.html'},{label:'臭氧层：地球的隐形盾牌',href:'ozone-layer.html'},{label:'厄尔尼诺：太平洋的呼吸',href:'el-nino.html'}],
    ai:{ topic:'海洋酸化', icebreakers:['海洋酸化是怎么回事？它和二氧化碳有什么关系？','酸化的海水为什么会溶解贝壳？','它和全球变暖是同一回事吗？','哪些生物最受威胁？'] } },

  { slug:'agi', title:'通用人工智能 AGI', icon:'🧠', category:'人工智能', exists:true,
    cardDesc:'信息与智能 · ChatGPT 之后，下一步会到哪里？' },
  { slug:'deep-learning', title:'深度学习：神经网络的复兴', icon:'🕸️', category:'人工智能', exists:false,
    eyebrow:'前沿问题 · 深度学习', tags:['人工智能','神经网络'], cardDesc:'让神经网络"深"起来，机器开始自己学特征。',
    story:`<div class="hook">💡 过去教电脑认猫，得先告诉它"猫有尖耳朵、胡须"；深度学习反过来——给它成千上万张猫图，它自己琢磨出"猫长什么样"。这股复兴，点燃了今天的 AI 时代。</div>
<div class="section">
  <h2>一、以前怎么教电脑认猫<span data-ai-q="深度学习到底是什么？和以前的机器学习有什么不同？"></span></h2>
  <p>早年的"机器学习"像个死记硬背却不懂原理的学生：工程师得先替它总结规则——"猫有尖耳朵、竖瞳、两条胡须"，再写程序去比对。一旦遇到侧面、背影、或花斑猫，这些手工规则就全乱了套。</p>
  <p>问题出在"特征"是人给的。人能说清的特征有限，遇到模糊、复杂的真实世界，手工规则很快不够用。我们想要的是：让机器自己从例子里提炼该看什么。</p>
</div>
<div class="section">
  <h2>二、让数据自己长出自特征<span data-ai-q="深度学习怎么自己学特征？反向传播干什么？"></span></h2>
  <p><strong>深度学习</strong>用很多层叠起来的"神经网络"。它的诀窍是<strong>逐层提炼</strong>：最底层看一个个像素点，往上一层把这些点拼成边缘和角，再往上是眼睛、耳朵等部件，最顶层才综合判断"这是只猫"。特征不是人写的，是网络从数据里自己长出来的。</p>
  <p>那网络怎么知道哪层该看什么？靠 1986 年提出的<strong>反向传播</strong>：先随便猜，再用答案对错反推"刚才哪一步猜错了、该往哪调"，一层层改权重。2010 年代 GPU 算力和互联网海量数据爆发，才让这种深层网络真正"跑得动、训得准"。</p>
  <div class="analogy">
    <h3>🔍 打个比方：剥洋葱</h3>
    <p>深度学习像一层层剥洋葱：最外层是生洋葱皮般的原始像素，往里剥是边缘、是形状、是部件，最中心才是"这是只猫"的判断。每一层都比上一层更抽象一点——人只剥最外面一层，深度学习替你把整颗洋葱剥完。</p>
  </div>
</div>
<div class="section">
  <h2>三、它能做什么，又卡在哪<span data-ai-q="深度学习有哪些应用？为什么还会犯错？"></span></h2>
  <p>今天你用的刷脸解锁、手机翻译、语音助手，背后都是深度学习。2018 年，它的三位奠基者辛顿、杨立昆、本吉奥共获图灵奖——相当于计算机界的诺贝尔奖。</p>
  <p>但它并不"理解"世界：给猫图贴几张几乎看不见的噪点，它可能瞬间认成公交车；它也说不清"为什么觉得这是猫"。这正是今天研究的硬骨头——让 AI 既准又可解释、还能举一反三，而不是只靠海量例子死记。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>深度学习把"人教特征"变成了"数据自己学特征"，让机器从例子中自动萃取层次化规律。它是图像、语音、翻译乃至大语言模型的共同底座——但它靠的是统计规律，而非真正的"懂"。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>深度学习</b> 指多层神经网络通过反向传播与梯度下降，从数据中自动学习层次化表示。算力（GPU）、大数据与架构创新（CNN/RNN/Transformer）共同促成突破。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>辛顿、杨立昆、本吉奥获 2018 年图灵奖。当前焦点：大模型缩放规律、高效训练、可解释性与多模态融合。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>辛顿 · 杨立昆 · 本吉奥 · 鲁梅尔哈特（反向传播）· 许多深度学习研究者</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/Deep_learning" target="_blank" rel="noopener">维基百科：深度学习</a> · <a href="https://amturing.acm.org/" target="_blank" rel="noopener">图灵奖官网</a> · <a href="https://en.wikipedia.org/wiki/Backpropagation" target="_blank" rel="noopener">维基百科：反向传播</a></p>
    </div>`,
    related:[{label:'大语言模型与 Transformer',href:'transformer-llm.html'},{label:'卷积神经网络',href:'cnn.html'},{label:'计算机视觉',href:'computer-vision.html'},{label:'强化学习与 AlphaGo',href:'rl-alphago.html'}],
    ai:{ topic:'深度学习', icebreakers:['深度学习到底是什么？和以前的机器学习有什么不同？','反向传播是干什么的？','为什么需要 GPU 和大数据？','深度学习有哪些典型应用？'] } },

  { slug:'transformer-llm', title:'大语言模型与 Transformer', icon:'🤖', category:'人工智能', exists:false,
    eyebrow:'前沿问题 · 大语言模型', tags:['人工智能','NLP'], cardDesc:'一句话的论文，改写了整个 AI 的走向。',
    story:`<div class="hook">💡 你正在和聊天机器人对话，它吐出的每个字都"像人"。背后撑起它的，是一个叫 Transformer 的结构——2017 年一篇论文，改写了整个 AI。</div>
<div class="section">
  <h2>一、以前的麻烦<span data-ai-q="Transformer 出现前，语言模型有什么问题？"></span></h2>
  <p>早期模型靠"循环神经网络（RNN）"一字一字读句子，像读长文时只能记住上一句。它又慢又容易忘掉开头，遇到长文章就力不从心，且难以并行加速。</p>
  <p>语言这种"前后都相关"的数据，被这种串行结构卡住了脖子。</p>
</div>
<div class="section">
  <h2>二、注意力机制为什么爆发<span data-ai-q="Transformer 的注意力机制是什么？为什么强？"></span></h2>
  <p>Transformer 甩掉循环，引入"注意力机制"：让每个词在理解时直接"看"句中所有其他词，并自动判断谁和谁最相关。于是"它"指代谁、"苹果"是水果还是公司，模型能靠上下文即时判断。</p>
  <p>注意力还能大规模并行计算，喂进海量文本就能预训练出懂语言的基座，再稍作微调就能聊天、写代码、翻译。参数量越大、数据越多，能力常"涌现"。ChatGPT 等皆基于此。</p>
  <div class="analogy">
    <h3>🔍 打个比方：全班传纸条 vs 大屏共享</h3>
    <p>老模型像传纸条：一句话从第一个人悄悄传到最后一个，信息层层损耗。Transformer 像所有人同时看一块共享大屏，谁和谁有关一眼就明，讨论（训练）也快得多。</p>
  </div>
</div>
<div class="section">
  <h2>三、卡在哪<span data-ai-q="大语言模型还有什么问题和风险？"></span></h2>
  <p>它最大的毛病是"幻觉"——一本正经地编出看似合理却错误的内容；训练耗电巨大、推理成本高；还可能带偏见、踩版权雷区。</p>
  <p>如何让大模型"知之为知之"、能溯源、可控、可审计，是研究与监管双线攻坚。对齐（让 AI 按人类真实意图行事）被视为比单纯扩大参数更关键的下一道坎。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>Transformer 用注意力机制让每个词直接关联全句，并行高效，催生了今天的大语言模型。它的挑战在幻觉、成本、偏见与可控对齐——能力越强，越要"懂事"。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>Transformer</b> 以自注意力（scaled dot-product attention）替代循环结构，支持并行与长程依赖。经大规模无监督预训练+指令微调/RLHF 得到大语言模型（LLM）。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>Vaswani 等 2017 提出；GPT/LLaMA/Claude 等持续缩放。焦点：推理效率、长上下文、多模态、对齐与安全（RLHF、宪法 AI）。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>瓦斯瓦尼等（2017 作者）· 诸多大模型实验室团队</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/Transformer_(deep_learning_model)" target="_blank" rel="noopener">维基百科：Transformer</a> · <a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener">Attention Is All You Need（论文）</a> · <a href="https://en.wikipedia.org/wiki/Large_language_model" target="_blank" rel="noopener">维基百科：大语言模型</a></p>
    </div>`,
    related:[{label:'深度学习：神经网络的复兴',href:'deep-learning.html'},{label:'卷积神经网络',href:'cnn.html'},{label:'计算机视觉',href:'computer-vision.html'},{label:'强化学习与 AlphaGo',href:'rl-alphago.html'}],
    ai:{ topic:'大语言模型与 Transformer', icebreakers:['Transformer 和大语言模型到底是什么？','自注意力机制是怎么工作的？','为什么它能催生 ChatGPT？','大语言模型有什么局限和风险？'] } },

  { slug:'rl-alphago', title:'强化学习与 AlphaGo', icon:'♟️', category:'人工智能', exists:false,
    eyebrow:'前沿问题 · 强化学习与 AlphaGo', tags:['人工智能','决策'], cardDesc:'从输到赢，机器自己"试"出来的智能。',
    story:`<div class="hook">💡 围棋曾被认为电脑一百年也下不过人。2016 年，AlphaGo 赢了世界冠军——靠的不是死算，而是"边试边学"的强化学习。</div>
<div class="section">
  <h2>一、强化学习是什么<span data-ai-q="强化学习是什么？和别的学习有什么不同？"></span></h2>
  <p>强化学习里，智能体在环境里行动，做对了给"奖励"、做错了给"惩罚"，自己摸索出能最大化长期回报的策略。下棋就是典型：赢棋是奖励，落子是行动，棋局是环境。</p>
  <p>它不像"监督学习"需要现成的标准答案，而是靠不断试错、从结果里学——更接近生物学习的样子。</p>
</div>
<div class="section">
  <h2>二、AlphaGo 怎么赢<span data-ai-q="AlphaGo 为什么能战胜人类围棋冠军？"></span></h2>
  <p>它用一个"价值网络"预判局面好坏，一个"策略网络"选出好棋，再靠海量"自我对弈"——自己和自己下几千万盘——从零练成高手。过程中它下出过人类从未见过的"神之一手"。</p>
  <div class="analogy">
    <h3>🔍 打个比方：迷宫里试错找糖</h3>
    <p>小猫在迷宫里乱走，走到糖就记"这条路甜"、撞墙就记"此路不通"。走多了，它摸出最优路线。AlphaGo 就像这只猫，靠海量试错把围棋迷宫走通了。</p>
  </div>
</div>
<div class="section">
  <h2>三、意义与边界<span data-ai-q="强化学习有哪些应用和局限？"></span></h2>
  <p>强化学习已用于机器人控制、游戏 AI、物流调度，乃至蛋白质结构预测（AlphaFold 与它有同源思路）。但它需要大量试错、样本效率低；奖励设计极难——奖励设错，智能体会"钻空子"作弊（如游戏里刷分却不真正取胜）。</p>
  <p>如何在真实、复杂、试错代价高的世界里，让它安全又少试错地学，是核心难题。把强化学习从"玩游戏"带到"真实控制"，仍路漫漫。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>强化学习靠"试错+奖励"自学策略，AlphaGo 借自我对弈战胜人类，彰显了它的威力。但它样本效率低、易钻奖励空子，落地的关键在安全与样本效率。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>强化学习（RL）</b> 智能体在环境中行动以最大化累积奖励，核心为策略/价值函数与探索-利用权衡。AlphaGo/Zero 结合深度神经网络与蒙特卡洛树搜索（MCTS）自我对弈。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>DeepMind AlphaGo（2016 胜李世石）、AlphaZero（通用自学）。应用：机器人控制、博弈、资源调度；与大模型结合（RLHF）成为对齐手段。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>哈萨比斯与西尔弗（DeepMind）· 萨顿与巴托（RL 奠基教材）· 诸多 RL 研究者</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/AlphaGo" target="_blank" rel="noopener">维基百科：AlphaGo</a> · <a href="https://en.wikipedia.org/wiki/Reinforcement_learning" target="_blank" rel="noopener">维基百科：强化学习</a> · <a href="https://en.wikipedia.org/wiki/Monte_Carlo_tree_search" target="_blank" rel="noopener">维基百科：蒙特卡洛树搜索</a></p>
    </div>`,
    related:[{label:'深度学习：神经网络的复兴',href:'deep-learning.html'},{label:'大语言模型与 Transformer',href:'transformer-llm.html'},{label:'计算机视觉',href:'computer-vision.html'},{label:'卷积神经网络',href:'cnn.html'}],
    ai:{ topic:'强化学习与 AlphaGo', icebreakers:['强化学习是什么？AlphaGo 为什么厉害？','它和普通监督学习有什么不同？','AlphaZero 不学人类棋谱怎么变强？','强化学习还能用在哪些地方？'] } },

  { slug:'computer-vision', title:'计算机视觉：让机器看见世界', icon:'👁️', category:'人工智能', exists:false,
    eyebrow:'前沿问题 · 计算机视觉', tags:['人工智能','视觉'], cardDesc:'从像素到理解，让机器真正"看见"。',
    story:`<div class="hook">💡 你手机扫二维码、相册自动人脸分组、工厂用摄像头挑次品——背后都是计算机视觉，让机器"看懂"图像。</div>
<div class="section">
  <h2>一、它要做什么<span data-ai-q="计算机视觉是做什么的？"></span></h2>
  <p>视觉任务让程序从像素里提取意义：分类（这是猫）、检测（框出猫在哪儿）、分割（逐像素标出猫的轮廓），还有追踪、三维重建、动作识别。本质是把"光信号"翻译成"可理解的结构"。</p>
  <p>对人类轻而易举的事，对机器曾是鸿沟——因为图像是海量像素，含义藏在结构与关系里。</p>
</div>
<div class="section">
  <h2>二、怎么做到"看懂"<span data-ai-q="计算机视觉是怎么实现的？"></span></h2>
  <p>早期靠人手工设计边缘、角点等特征，再交给分类器，效果有限。深度学习的卷积网络出现后，机器能直接从海量数据中自己学会"看"，准确率大幅跃升，在很多基准上超过人眼。</p>
  <div class="analogy">
    <h3>🔍 打个比方：拼图认物</h3>
    <p>看一张猫图，人一眼拼出"尖耳+胡须=猫"。卷积网络也是一层层拼：先认边、再认耳、最后组合成猫。区别是它靠千万次练习，而非天生直觉。</p>
  </div>
</div>
<div class="section">
  <h2>三、卡在哪<span data-ai-q="计算机视觉还有什么局限？"></span></h2>
  <p>它怕"对抗样本"——改几个像素就可能让它从猫认成卡车；遮挡、罕见视角、新场景容易翻车；某些群体的人脸识别偏差更大；医疗影像等高风险场景还要可解释、可信赖。</p>
  <p>让视觉系统既准又稳、还能说清"为什么这么判"，是从实验室走向关键决策场景的最大瓶颈。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>计算机视觉让机器从像素理解图像（分类/检测/分割），深度学习使其准确率飞跃。但它受对抗样本、偏差与不可解释性困扰，高风险落地仍难。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>计算机视觉</b> 涵盖图像分类、目标检测、语义/实例分割、姿态估计等任务。ImageNet 基准推动深度学习；CNN 长期主导，近年视觉 Transformer（ViT）兴起。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>李飞飞等构建 ImageNet（2009）；AlexNet（2012）引爆深度学习视觉。焦点：多模态（视觉-语言）、自监督预训练、高效边缘部署。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>李飞飞（ImageNet）· 克里热夫斯基与辛顿（AlexNet）· 杨立昆（早期 CNN）· 众多视觉研究者</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/Computer_vision" target="_blank" rel="noopener">维基百科：计算机视觉</a> · <a href="https://en.wikipedia.org/wiki/ImageNet" target="_blank" rel="noopener">维基百科：ImageNet</a> · <a href="https://en.wikipedia.org/wiki/AlexNet" target="_blank" rel="noopener">维基百科：AlexNet</a></p>
    </div>`,
    related:[{label:'卷积神经网络',href:'cnn.html'},{label:'深度学习：神经网络的复兴',href:'deep-learning.html'},{label:'大语言模型与 Transformer',href:'transformer-llm.html'},{label:'强化学习与 AlphaGo',href:'rl-alphago.html'}],
    ai:{ topic:'计算机视觉', icebreakers:['计算机视觉是什么？机器怎么认出图里的东西？','2012 年为什么是转折点？','它和卷积神经网络有什么关系？','现在机器视觉还有什么做不到的？'] } },

  { slug:'cnn', title:'卷积神经网络：图像识别的引擎', icon:'🔍', category:'人工智能', exists:false,
    eyebrow:'技术基石 · 卷积神经网络', tags:['人工智能','神经网络'], cardDesc:'模仿视觉皮层，一层层抽取图像特征。',
    story:`<div class="hook">💡 同是"看"图，为什么深度学习比老方法强那么多？关键角色常是卷积神经网络（CNN）——它模仿眼睛"局部感受、层层抽象"的方式。</div>
<div class="section">
  <h2>一、卷积是什么<span data-ai-q="卷积神经网络里的'卷积'是什么意思？"></span></h2>
  <p>卷积是拿一个小窗口（滤波器）在图像上滑动，提取局部模式：第一层找出边缘、纹理，往上组合出眼睛、车轮等部件，再往上是整只猫、整辆车。同一组参数在整张图共享，所以既省参数，又对"物体移到别处"不敏感。</p>
  <p>这正像视觉皮层：底层神经元只对局部小刺激反应，越往上越管"整体"。</p>
</div>
<div class="section">
  <h2>二、为什么特别适合图像<span data-ai-q="CNN 为什么适合处理图像？"></span></h2>
  <p>相比把整张图拉平成一长串喂给全连接网络，CNN 保留了"哪里有什么"的空间结构，让网络懂得局部组合成整体，层层堆叠出从像素到语义的金字塔。</p>
  <div class="analogy">
    <h3>🔍 打个比方：放大镜扫图</h3>
    <p>卷积像拿放大镜在画上慢慢扫：每停一处，只辨认"这一小块是边缘还是色块"，把所有小块的结论拼起来，就认出了全图。放大镜人人共用，所以学得又快又省力。</p>
  </div>
</div>
<div class="section">
  <h2>三、影响与演进<span data-ai-q="CNN 有什么贡献？现在发展到哪了？"></span></h2>
  <p>CNN 引爆了图像识别（2012 年 ImageNet 一役关键），撑起人脸识别、医学影像、自动驾驶感知，是计算机视觉的基石。如今它也常与 Transformer 结合，取长补短。</p>
  <p>挑战在于：需要大量标注数据、对小样本和分布外场景仍脆弱、内部决策不够透明。如何让 CNN 更省数据、更可解释，仍在演进。</p>
</div>
<div class="takeaway">
  <h3>🌟 记住这个</h3>
  <p>卷积神经网络用滑动窗口提取局部特征、层层抽象，且参数共享、保空间结构，是深度视觉的基石。它引爆了图像识别，如今常与 Transformer 融合，并在可解释性上持续改进。</p>
</div>`,
    tech:`
    <div class="section"><h2>技术摘要</h2>
      <p><b>卷积神经网络（CNN）</b> 由卷积层（局部感受野、权值共享）、池化层（降采样）、全连接层组成，自动学习空间层次特征。残差连接（ResNet）缓解深层退化。</p>
    </div>
    <div class="section"><h2>前沿状态</h2>
      <p>杨立昆 LeNet（1998）、AlexNet（2012）引爆；He 等 ResNet（2015）突破百层。焦点：高效 CNN、神经架构搜索、与视觉 Transformer 融合。</p>
    </div>
    <div class="section"><h2>相关科学家</h2>
      <p>杨立昆（CNN 奠基）· 克里热夫斯基与辛顿（AlexNet）· 何恺明（ResNet）</p>
    </div>
    <div class="section"><h2>📚 延伸阅读（可溯源）</h2>
      <p><a href="https://en.wikipedia.org/wiki/Convolutional_neural_network" target="_blank" rel="noopener">维基百科：卷积神经网络</a> · <a href="https://en.wikipedia.org/wiki/AlexNet" target="_blank" rel="noopener">维基百科：AlexNet</a> · <a href="https://en.wikipedia.org/wiki/Residual_neural_network" target="_blank" rel="noopener">维基百科：残差网络</a></p>
    </div>`,
    related:[{label:'计算机视觉：让机器看见世界',href:'computer-vision.html'},{label:'深度学习：神经网络的复兴',href:'deep-learning.html'},{label:'大语言模型与 Transformer',href:'transformer-llm.html'},{label:'强化学习与 AlphaGo',href:'rl-alphago.html'}],
    ai:{ topic:'卷积神经网络', icebreakers:['卷积神经网络到底是什么？为什么适合看图？','权值共享是什么意思？','它和全连接网络有什么区别？','ResNet 解决了什么问题？'] } }
];
module.exports = TOPICS;