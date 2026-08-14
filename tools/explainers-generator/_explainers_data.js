// 科学边界 · 深度科普专题数据
// 40 个专题：沿用 6 分类框架。exists:true 为已有页（仅用于索引卡片，不重新生成文件）。
// 内容三审三校：规范性（双tab脚手架一致）/ 正确性（事实可溯源）/ 可读性（故事+图画+比喻）。
const TOPICS = [
  // ───────────────────────── 宇宙物理 ─────────────────────────
  { slug:'dark-energy', title:'暗能量与宇宙命运', icon:'🌌', category:'宇宙物理', exists:true,
    cardDesc:'宇宙学 · 是什么在加速宇宙膨胀？三种宇宙结局。' },
  { slug:'black-hole', title:'黑洞：连光都无法逃脱', icon:'🕳️', category:'宇宙物理', exists:false,
    eyebrow:'前沿问题 · 黑洞', tags:['宇宙物理','广义相对论'], cardDesc:'连光都逃不出的时空陷阱，藏着宇宙最极端的秘密。',
    story:`
    <div class="hook">💡 想象一个这样的地方：一旦掉进去，连跑得最快的光都永远回不来。它不是科幻，而是真实存在于我们银河系中心的"怪物"。</div>
    <div class="section">
      <h2>一、什么是黑洞<span data-ai-q="黑洞到底是怎么形成的？"></span></h2>
      <p>黑洞是时空被极端压缩后的区域。当一颗质量足够大的恒星（通常大于太阳约 20 倍）耗尽燃料，核心在自身引力下坍缩，所有物质被压进一个极小的点——<strong>奇点</strong>。围绕它的，是一圈看不见的边界，叫<strong>事件视界</strong>：跨过这条线，任何东西（包括光）都无法逃脱。</p>
      <p>1915 年，爱因斯坦用广义相对论把引力描述成"时空的弯曲"。仅仅一年后，德国天文学家卡尔·史瓦西就从方程中解出一个结果：如果质量被压缩到足够小，就会形成一个连光都逃不出的球。当时很多人以为这只是数学游戏，直到后来才发现它真实存在。</p>
    </div>
    <div class="section">
      <h2>二、我们怎么"看见"一个看不见的东西</h2>
      <p>黑洞本身不发光，但我们可以"看"到它吃东西时发出的信号。当气体和尘埃被黑洞吸引、在视界外高速旋转形成炽热的吸积盘时，会释放出强烈的 X 射线。2019 年，<strong>事件视界望远镜（EHT）</strong>联合全球 8 台射电望远镜，用"地球大小"的虚拟望远镜给银河系外的 M87 黑洞拍下了第一张照片——一个明亮的环，中间是黑色的"阴影"。</p>
      <div class="analogy">
        <h3>🔍 打个比方：宇宙里的"漩涡浴缸"</h3>
        <p>把黑洞想成浴缸底部的排水口。水越靠近洞口转得越快、越亮（摩擦生热发光），一旦越过那个看不见的"边缘"，就被永远卷走。你看到的不是洞本身，而是它周围疯狂旋转、发光的水流。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>黑洞不是"宇宙吸尘器"把远处东西都吸走，而是极端引力把时空压到极限的产物。银河系中心就有一个约 400 万倍太阳质量的超大黑洞<strong>人马座 A*</strong>。研究它，是在用最极端的环境检验爱因斯坦的理论对不对。</p>
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
    story:`
    <div class="hook">💡 如果把宇宙想成一张巨大的蹦床，那么两个黑洞相撞，就会让这张"蹦床"荡起波纹——并把波纹传向四面八方。2015 年，人类第一次"听"到了它。</div>
    <div class="section">
      <h2>一、时空也会"起波浪"<span data-ai-q="引力波到底是什么？为什么叫波的涟漪？"></span></h2>
      <p>在爱因斯坦的广义相对论里，引力不是一种"拉力"，而是质量把时空压弯后的几何效应。当极其巨大的质量剧烈运动——比如两个黑洞绕转着互相靠近——时空本身会被拉伸又压缩，像水面被搅动一样，向外发出一圈圈"涟漪"，这就是<strong>引力波</strong>。</p>
      <p>问题是，这种起伏实在太微弱了。两个黑洞在 13 亿光年外合并，传到地球时，引起的空间伸缩只有原子核直径的千分之一级别。爱因斯坦本人都怀疑：人类永远造不出能测到它的仪器。</p>
    </div>
    <div class="section">
      <h2>二、用"尺子"量宇宙的呼吸</h2>
      <p>2015 年，美国的 <strong>LIGO</strong>（激光干涉引力波天文台）做到了。它的原理像一把超级尺子：发射一束激光，让它沿两条互相垂直、各 4 公里长的真空管道往返，再汇合比较。当引力波经过，两条臂的长度会被极其微小地改变，激光干涉条纹随之移动——这就是信号。</p>
      <div class="analogy">
        <h3>🔍 打个比方：铁轨上的远雷</h3>
        <p>把时空想象成铁轨。远处打雷时，铁轨会传来细微的震动——你把耳朵贴上去就能"听"到远处发生了什么。LIGO 就是把耳朵贴在时空这张"铁轨"上，听到了 13 亿光年外黑洞合并的"雷声"。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>引力波让我们多了一只"耳朵"——过去天文几乎只靠光（电磁波）看宇宙，现在还能"听"到质量运动本身的震动。2017 年，人类更同时用光和引力波"看+听"到一次中子星合并，开启了<strong>多信使天文学</strong>的时代。</p>
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
    story:`
    <div class="hook">💡 如果你把收音机调到没有电台的空频道，听到的"沙沙"声里，有一小部分是宇宙诞生约 38 万年后留下的"噪音"——它是我们能看到的最早的光。</div>
    <div class="section">
      <h2>一、宇宙也曾是个"火球"<span data-ai-q="宇宙大爆炸之后发生了什么？为什么会有余晖？"></span></h2>
      <p>根据大爆炸理论，宇宙始于约 138 亿年前的一次极热极密的状态。最初，宇宙是一锅炽热、不透明的"等离子汤"——光子不断被自由电子撞来撞去，根本跑不远。</p>
      <p>大约 38 万年后，宇宙冷却到约 3000 K，电子和质子结合成中性原子（主要是氢），光子终于能自由飞行。这些光子一直飞到现在，因为宇宙膨胀被"拉伸"成了微波——这就是<strong>宇宙微波背景辐射（CMB）</strong>。</p>
    </div>
    <div class="section">
      <h2>二、一张"婴儿照片"里的惊天秘密</h2>
      <p>1964 年，彭齐亚斯和威尔逊意外发现了这种均匀来自各个方向的微波"噪音"，证实了大爆炸的预言。后来，COBE、WMAP、普朗克等卫星给它拍了高清"照片"：整张天幕几乎完全均匀，只有十万分之一量级的微小冷热起伏。</p>
      <div class="analogy">
        <h3>🔍 打个比方：宇宙出生证明上的指纹</h3>
        <p>这些微小的温度起伏，相当于宇宙婴儿期密度略有不均的地方——后来正是它们，在引力作用下"长大"成星系和星系团。研究 CMB 的细节，就像通过指纹辨认一个人的身世。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>CMB 不是普通的星光，而是宇宙最古老的光，是检验宇宙学模型的"金标准"。它告诉我们宇宙年龄约 138 亿年、由约 5% 普通物质、27% 暗物质、68% 暗能量组成——而普通物质，只是宇宙的"冰山一角"。</p>
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
    story:`
    <div class="hook">💡 你看到的满天繁星、整个银河系，其实只是宇宙舞台上的"配角"。真正的"主角"看不见、摸不着，却用引力牢牢拽着一切——它就是暗物质。</div>
    <div class="section">
      <h2>一、星系为什么没有"飞散"<span data-ai-q="暗物质是怎么被发现的？"></span></h2>
      <p>1933 年，天文学家兹威基发现：后发座星系团里，星系运动速度快得反常——按看得见的物质算，引力根本拉不住它们，星系团早该散架。他推测：一定有大量<strong>看不见的物质</strong>提供额外引力。</p>
      <p>1970 年代，鲁宾测量星系自转曲线，发现星系外围的恒星转得比理论预测快得多。唯一解释是：星系被一个巨大的、看不见的"晕"包裹着。这就是<strong>暗物质</strong>。</p>
    </div>
    <div class="section">
      <h2>二、它是什么？我们至今不知道</h2>
      <p>暗物质不发光、不吸收光、几乎不和普通物质发生作用——只通过引力"刷存在感"。它可能是一种尚未发现的基本粒子（如 WIMP 弱作用大质量粒子，或轴子），也可能比我们想象的更复杂。</p>
      <div class="analogy">
        <h3>🔍 打个比方：看不见的保龄球</h3>
        <p>把星系想成旋转木马，普通物质是上面发光的小灯。如果只靠这些灯的重量，转盘早该被甩飞。但转盘稳稳转着——说明底下压着一个看不见的大保龄球（暗物质）在提供配重。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>宇宙中约 85% 的物质是暗物质，普通物质（你、我、星星）只占约 15%。找到它的本质，是现代物理学的头号悬案之一——无数地下实验和太空探测器正在日夜"守株待兔"。</p>
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
    story:`
    <div class="hook">💡 宇宙正在膨胀，而且越胀越快——这一点科学家基本认同。但"膨胀得到底有多快"？两个方法给出两个不同的数字，差距大到无法用误差解释。这就是当今宇宙学最大的谜题之一。</div>
    <div class="section">
      <h2>一、膨胀速度，两种算法两种答案<span data-ai-q="哈勃常数到底是什么？为什么会有两个答案？"></span></h2>
      <p><strong>哈勃常数</strong>描述的是宇宙膨胀的速率：离我们越远的星系，退行越快。测量它有两种主流思路：</p>
      <p>方法一"早期法"：用宇宙微波背景（婴儿期宇宙）的数据，结合标准宇宙学模型，推算出今天的速度约 <strong>67 km/s/Mpc</strong>。</p>
      <p>方法二"晚期法"：用附近星系里一类亮度固定的"标准烛光"（如造父变星、超新星），直接一步步量距离，得出约 <strong>73 km/s/Mpc</strong>。</p>
      <p>两个数字差了约 10%，而且各自的误差都小到"不该差这么多"。</p>
    </div>
    <div class="section">
      <h2>二、是测量错了，还是模型错了？</h2>
      <p>如果测量都无误，那说明我们对宇宙的基本理解有缺口——也许是暗物质、暗能量，或某种未知成分在标准模型里被忽略了。</p>
      <div class="analogy">
        <h3>🔍 打个比方：用两种尺子量同一张桌子</h3>
        <p>你用卷尺量桌子是 2 米，用步测却是 2.2 米，且两种工具都很准。那问题可能不在尺子，而在"桌子本身"——宇宙这张"桌子"可能比我们以为的更陌生。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>哈勃张力不是小瑕疵，而是可能预示着新物理的"裂缝"。它告诉我们：即使有了暗能量和暗物质，宇宙的剧本仍没被完全读懂。解开它，也许会改写 21 世纪的宇宙学。</p>
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
    story:`
    <div class="hook">💡 几千年来，人类仰望星空总在想：那些星星周围，也有像地球一样的世界吗？直到 1992 年，我们才第一次确认——有。如今已知系外行星已超 5000 颗。</div>
    <div class="section">
      <h2>一、怎么"看"到一颗遥不可及的行星<span data-ai-q="系外行星那么远，科学家是怎么发现的？"></span></h2>
      <p>系外行星不发光，又被恒星强光淹没，直接拍照极难。科学家主要靠两种"影子戏法"：</p>
      <p><strong>凌星法</strong>：行星从恒星前方经过时，会让星光微微变暗一点点（像蚊子飞过路灯）。开普勒太空望远镜用这招发现了上千颗。</p>
      <p><strong>径向速度法</strong>：行星绕转时，恒星也会被"拽"得轻微摆动，让星光波长周期性红蓝移。1995 年人类发现的第一颗绕类太阳恒星的行星 51 Pegasi b，就是这么找到的。</p>
    </div>
    <div class="section">
      <h2>二、我们在找"另一个地球"吗？</h2>
      <p>真正令人激动的，是<strong>宜居带</strong>——恒星周围温度刚好、液态水能存在的区域。2017 年，天文学家在 40 光年外的 TRAPPIST-1 星系发现了 7 颗类地行星，其中几颗就在宜居带内。</p>
      <div class="analogy">
        <h3>🔍 打个比方：在探照灯旁找萤火虫</h3>
        <p>恒星就像探照灯，行星是旁边微弱闪烁的萤火虫。你肉眼看不见萤火虫，但记录探照灯亮度的细微"眨眼"，就能推断有只萤火虫正绕着它飞。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>系外行星的批量发现，把"宇宙中是否有其他生命"从哲学问题变成了可测量的科学问题。下一代巨型望远镜（如 JWST、宜居世界天文台）已经开始分析它们大气中的化学成分——也许某天会捕捉到生命的信号。</p>
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
    story:`
    <div class="hook">💡 普通电线输电总有损耗，全国每年因此浪费的电惊人。但有一种材料，电流流过它时几乎零损耗——这就是超导体。更神奇的是，它未必需要"绝对零度"才工作。</div>
    <div class="section">
      <h2>一、电阻消失的魔法<span data-ai-q="超导到底是什么？为什么叫高温超导？"></span></h2>
      <p>1911 年，昂内斯把水银冷却到约 -269°C（液氦温区）时，发现它的电阻突然完全消失——电流可以永远绕圈流动而不衰减，这就是<strong>超导</strong>。此后几十年，超导只在接近绝对零度才出现，实用成本极高。</p>
      <p>1986 年，贝德诺尔茨和缪勒发现一种陶瓷材料在约 -238°C（液氮温区，相对"高温"）就能超导。虽然仍是零下两百多度，但液氮便宜又好获取，一下子把应用门槛拉低了——这就是<strong>高温超导</strong>。</p>
    </div>
    <div class="section">
      <h2>二、为什么它这么难搞懂</h2>
      <p>常规超导的机制，1957 年的 BCS 理论解释得很漂亮：电子两两结成"库珀对"，顺畅穿过晶格。但高温超导为什么能在更高温度工作，至今没有完全统一的答案，是凝聚态物理最深刻的未解之谜之一。</p>
      <div class="analogy">
        <h3>🔍 打个比方：没有摩擦的滑梯</h3>
        <p>普通导线像粗糙的滑梯，小球（电子）一路磕碰掉速度（发热损耗）。超导体像涂了绝对润滑的滑梯，小球哗啦一下滑到底，一点不减速。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>超导意味着零损耗输电、强磁场磁悬浮、更紧凑的核磁共振仪。若有一天能在室温常压下稳定超导，能源与电子工业将被彻底改写。室温超导目前仍是全球竞逐、且需极度谨慎验证的"圣杯"。</p>
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
    story:`
    <div class="hook">💡 有一种材料像包了金属的橡皮：里面怎么都通不了电（绝缘），外皮却能顺滑导电。更妙的是，它的导电"通道"被一种叫"拓扑"的数学性质保护着，很难被杂质破坏。</div>
    <div class="section">
      <h2>一、体内是"墙"，表面是"路"<span data-ai-q="拓扑绝缘体为什么体内绝缘表面却导电？"></span></h2>
      <p><strong>拓扑绝缘体</strong>是一类特殊的材料：它的内部是绝缘体，电子过不去；但表面或边缘却存在导电的"高速路"。这种表面导电并不是偶然杂质造成的，而是由材料整体的对称性所决定的"必然"。</p>
      <p>关键在"拓扑"——这是数学里描述物体连续变形下不变性质的概念（比如甜甜圈和咖啡杯都有"一个洞"，拓扑相同）。在量子层面，电子的波函数具有某种拓扑不变量，强制表面必须出现导电态。</p>
    </div>
    <div class="section">
      <h2>二、为什么它很"皮实"</h2>
      <p>普通导体的导电能力很容易被杂质、缺陷打乱。但拓扑绝缘体的表面态由拓扑保护——除非把整个材料的拓扑性质彻底改变（比如破坏某种对称性），否则杂质奈何不了它。</p>
      <div class="analogy">
        <h3>🔍 打个比方：有护栏的高速公路</h3>
        <p>普通电线像没有护栏的路，一块石头（杂质）就能挡车。拓扑绝缘体的表面导电像两侧装了结实护栏的高速路，小石子掉进来也挡不住车流——护栏（拓扑）把路守住了。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>拓扑绝缘体把"拓扑"这个纯数学概念变成了真实材料的物理性质，开启了"拓扑物态"这个新领域。它有望用于超低损耗电子器件，也是实现拓扑量子计算、让量子比特更抗干扰的候选路径之一。</p>
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
    story:`
    <div class="hook">💡 你口袋里那台手机能反复充电、轻巧便携，全靠一块小小的电池。它的名字叫"锂离子"——2019 年诺贝尔化学奖的主角。</div>
    <div class="section">
      <h2>一、让锂离子来回"跑腿"<span data-ai-q="锂离子电池是怎么充电和放电的？"></span></h2>
      <p>锂离子电池的核心是<strong>锂离子（Li⁺）</strong>在正负极之间来回搬家。充电时，锂离子从正极"跑"到负极住下；放电时，它们又跑回正极，途中经过外部电路，就释放出了电能。</p>
      <p>关键材料突破来自三位科学家：古迪纳夫找到了能稳定嵌锂的钴酸锂正极；惠廷汉最早做出可充锂电池原型；吉野彰用碳材料做负极，做出了第一块实用、安全、可量产的锂离子电池。</p>
    </div>
    <div class="section">
      <h2>二、为什么它是"时代心脏"</h2>
      <p>相比老式电池，锂电能量密度高、自放电小、寿命长，而且没有记忆效应。正是它，让手机从"砖头"变成掌中宝，让电动车替代燃油车成为可能。</p>
      <div class="analogy">
        <h3>🔍 打个比方：两栋楼之间的摆渡船</h3>
        <p>锂离子像一艘艘小摆渡船，在"正楼"和"负楼"之间来回运"能量客人"。充电时客人去甲楼，放电时回乙楼——船一来回，电就送到了你的手机里。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>锂离子电池是过去 30 年便携电子与新能源革命的底层引擎。当下研究的重点，是让它能量更高、充电更快、更安全，并用更环保的材料（如无钴、固态电解质）替代今天的配方。</p>
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
    story:`
    <div class="hook">💡 通常你调大电压，电流就平滑变大，电阻可以连续变化。但在极低温、强磁场下，电阻会突然"卡"在一连串极其精确的数值上——像台阶一样，一级一级跳。这就是量子霍尔效应。</div>
    <div class="section">
      <h2>一、电阻变成了"整数台阶"<span data-ai-q="量子霍尔效应是怎么回事？为什么电阻是离散的？"></span></h2>
      <p>1879 年，霍尔发现：通电的薄片放在磁场里，会在垂直方向产生电压（霍尔电压）。1980 年，冯·克利青在极低温强磁场下测量时，惊讶地看到霍尔电阻不是连续变化，而是精确地等于 h/(ne²)——其中 h 是普朗克常数，e 是电子电荷，n 是正整数。</p>
      <p>这意味着电阻被"<strong>量子化</strong>"了：它只能取一列由基本常数决定的离散值，与材料、形状几乎无关。这种" universality（普适性）"让它可以当电阻的<strong>标准原器</strong>。</p>
    </div>
    <div class="section">
      <h2>二、背后是电子的"拓扑舞蹈"</h2>
      <p>为什么材料细节不影响结果？因为边缘导电通道的数量由拓扑不变量（陈数）决定。后来发现的<strong>分数量子霍尔效应</strong>（崔琦等，1982），更揭示电子会"抱团"成带分数电荷的准粒子，是拓扑与强关联物理的富矿。</p>
      <div class="analogy">
        <h3>🔍 打个比方：只能整层上的电梯</h3>
        <p>普通电阻像能停在任何楼层的电梯（连续）。量子霍尔像一部只肯停在 1、2、3…层的怪电梯——你按 1.5 层它不理你，电阻因此被"锁定"在精确整数级。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>量子霍尔效应把宏观可测的电阻，和普朗克常数这种宇宙基本常数直接挂钩，既提供了电阻的量子标准，也打开了拓扑物态研究的大门，是凝聚态物理的里程碑。</p>
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
    story:`
    <div class="hook">💡 铅笔芯里的石墨，一层层叠起来。如果把它剥到只剩"一层"——一个原子那么厚——你会得到一种薄到透明、却比钢还强、导电比铜还好的神奇材料：石墨烯。</div>
    <div class="section">
      <h2>一、用胶带"撕"出的诺贝尔奖<span data-ai-q="石墨烯是怎么被做出来的？为什么这么厉害？"></span></h2>
      <p>2004 年，盖姆和诺沃肖洛夫用一个出人意料的土办法：拿透明胶带反复粘石墨，再撕开，越撕越薄，最终得到只有单层碳原子的薄片——<strong>石墨烯</strong>。这层碳原子排成蜂窝状的六边形网格。</p>
      <p>它薄到几乎透明，却极其强韧（强度约为钢的 200 倍）；导电、导热都极好；电子在里面的运动速度接近光速的 1/300，像"无质量"粒子。</p>
    </div>
    <div class="section">
      <h2>二、为什么人人都想要它</h2>
      <p>石墨烯几乎是完美的"万能材料候选"：更快的晶体管、更灵敏的传感器、更轻的电池电极、更牢固的复合材料……当然，把它从实验室搬到工厂大规模应用，还要跨过成本和工艺的门槛。</p>
      <div class="analogy">
        <h3>🔍 打个比方：一张铺满全世界的网</h3>
        <p>把石墨烯想成用碳原子编成的、只有一个节点厚的网球网。网眼极小、线极结实又极导电——任何东西想"穿过去"或"贴上去"，都会被它独特的网格性质改变。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>石墨烯是"二维材料"研究的开端，启发了此后一大类原子级薄材料（如二硫化钼、氮化硼）的探索。它提醒我们：把熟悉的东西做到极致薄，可能涌现出完全陌生的神奇性质。</p>
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
    story:`
    <div class="hook">💡 叶子是个了不起的"工厂"：晒太阳、喝水、吸二氧化碳，就能造出养料。如果人类能造出"人工叶子"，不就能用阳光直接生产清洁燃料了吗？</div>
    <div class="section">
      <h2>一、植物在做什么，我们想模仿什么<span data-ai-q="人工光合作用是怎么模仿植物的？"></span></h2>
      <p>光合作用中，叶子里的叶绿素吸收阳光，把水分解成氢和氧，再用能量把二氧化碳"组装"成糖。整个过程清洁、靠阳光、原料是水和 CO₂。</p>
      <p><strong>人工光合作用</strong>想用便宜的材料（如特殊的催化剂、半导体）替代叶绿素，完成类似的分解水制氢、或把 CO₂ 还原成燃料（如甲醇）的反应。目标：把太阳能直接存进化学键里，得到可储存、可运输的"太阳能燃料"。</p>
    </div>
    <div class="section">
      <h2>二、难在哪</h2>
      <p>植物用了上亿年进化出精巧的酶系统，效率却不算高（约 1–2%）。人类要在实验室里用非生物材料稳定、高效地完成同样的步骤，涉及光吸收、电荷分离、催化反应的精密配合，工程难度很高。</p>
      <div class="analogy">
        <h3>🔍 打个比方：自己造一台"阳光酿酒机"</h3>
        <p>植物像一台天然的阳光酿酒机：进的是水+CO₂，出的是糖（能量）。人工光合作用就是要造一台人工版，进的是同样便宜的原料，出的是氢气或液体燃料，而且能 24 小时不"累"。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>人工光合作用如果成功，能把取之不尽的阳光变成可储存的燃料，同时消耗二氧化碳——是清洁能源与碳中和研究的"梦幻方向"之一。它仍是活跃的研究前沿，尚无单一诺奖，但潜力巨大。</p>
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
    story:`
    <div class="hook">💡 如果把 DNA 看作一本写满生命指令的厚书，过去人类很难精准修改其中的错字。直到出现一把叫 CRISPR 的"分子剪刀"——它能在几十亿个字母里，精确地找到并剪下那一个错字。</div>
    <div class="section">
      <h2>一、细菌的"免疫记忆"变成了我们的工具<span data-ai-q="CRISPR 到底是什么？它是怎么剪 DNA 的？"></span></h2>
      <p>CRISPR 本来是细菌对抗病毒的"记忆系统"：细菌会把入侵病毒的片段存进自己的基因里，下次再遇到，就造出对应的"向导 RNA"去识别病毒，再叫一种叫 Cas9 的蛋白把病毒 DNA 剪断。</p>
      <p>科学家看中了这套机制：只要换一段"向导 RNA"，就能让 Cas9 剪向任何我们指定的 DNA 位置。2020 年，杜德娜和夏彭蒂耶因把这个系统变成可编辑基因的通用工具，获得诺贝尔化学奖。</p>
    </div>
    <div class="section">
      <h2>二、它能做什么，又带来什么担忧</h2>
      <p>理论上，CRISPR 可以修正导致遗传病的基因突变、培育抗病的作物、加速药物研发。但"编辑生殖细胞（精子/卵子/胚胎）"会遗传给后代，引发巨大的伦理争论——科学界呼吁对它设限。</p>
      <div class="analogy">
        <h3>🔍 打个比方：带导航的剪刀</h3>
        <p>向导 RNA 像导航，告诉 Cas9"去第几页第几行"；Cas9 像剪刀，咔嚓剪断那一行。剪完，细胞自己的修复机制可以接上新内容——就像把错字删掉、填上正确的字。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>CRISPR 让基因编辑从"昂贵艰难"变成"便宜 routine"，是生命科学近十年最重大的技术突破之一。它既带来治愈遗传病的可能，也把"该不该改人类的基因"这个伦理难题，实实在在地摆到了人类面前。</p>
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
    story:`
    <div class="hook">💡 传统疫苗是把"弱化病毒"打进身体。而 mRNA 疫苗更巧妙：它不打病毒，只递给细胞一张"配方纸条"，让细胞自己造出一小段病毒零件，从而学会识别敌人。</div>
    <div class="section">
      <h2>一、一张会"自毁"的配方纸条<span data-ai-q="mRNA 疫苗到底是怎么起作用的？"></span></h2>
      <p>mRNA（信使 RNA）是细胞里原本就有的"工作指令"：DNA 的蓝图先抄成 mRNA，再被翻译成蛋白质。mRNA 疫苗就是把"制造某种病毒蛋白（如新冠的刺突蛋白）"的指令，装进一层脂肪微粒（脂质纳米颗粒）送进人体细胞。</p>
      <p>细胞照着指令造出一点病毒蛋白"亮出来"，免疫系统就记住了它的样子。指令用完很快被降解，不会留在身体里。</p>
    </div>
    <div class="section">
      <h2>二、为什么它"突然"就来了</h2>
      <p>这套技术其实酝酿了 30 年。关键突破是卡里科和韦斯曼发现：把 mRNA 里一种碱基换成"假尿苷"，能让身体不把它当敌人攻击，又能顺利产出蛋白。2023 年，两人因此获诺贝尔生理学或医学奖。</p>
      <div class="analogy">
        <h3>🔍 打个比方：给厨房的便条</h3>
        <p>疫苗不是把做好的菜（病毒）端给你，而是塞给你一张便条："照这个配方炒盘假菜（无害蛋白）"。你家的厨房（细胞）炒出来展览一下，全家（免疫系统）就都认得这道菜长啥样了。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>mRNA 平台的最大优点是"快"和"灵活"——换一段指令，就能针对新病毒快速重做疫苗。它不只对付新冠，癌症疫苗、流感通用疫苗等也都在路上。2023 年诺奖，是对基础研究长期价值的最好注脚。</p>
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
    story:`
    <div class="hook">💡 你身体里几乎每个细胞，都藏着一本"生命说明书"——长得像拧麻花的两股绳子。读懂它，是现代生物学的起点。</div>
    <div class="section">
      <h2>一、拧成麻花的"说明书"<span data-ai-q="DNA 双螺旋是怎么被发现的？它为什么重要？"></span></h2>
      <p>1953 年，沃森和克里克提出了 DNA 的<strong>双螺旋结构</strong>：两条长链像拧在一起的麻花，链上挂着四种"字母"（碱基 A、T、C、G）。A 只配 T，C 只配 G——这种配对规律，正是遗传信息能被精确复制的关键。</p>
      <p>这个模型能成立的背后，有罗莎琳德·富兰克林的关键贡献：她拍出的 X 射线衍射图（著名的"51 号照片"）清楚显示了螺旋的痕迹。可惜她 1958 年因病早逝，未能分享 1962 年的诺贝尔奖。</p>
    </div>
    <div class="section">
      <h2>二、为什么它改变了一切</h2>
      <p>双螺旋结构一公开，人类第一次看清：遗传信息是"写成字母序列"的，可以读取、可以复制、也可以出错（突变）。从亲子鉴定到基因测序，从 CRISPR 到 mRNA 疫苗，整个现代生命科学都建立在这条拧着的"绳子"上。</p>
      <div class="analogy">
        <h3>🔍 打个比方：可复制的拉链</h3>
        <p>DNA 像一条拉链，左右两排齿（碱基）严格配对。拉开时，每排都能照着对方补出新的一半——一条变两条，遗传信息就这样原样传给了下一代。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>DNA 双螺旋的发现，把"生命"从神秘现象变成了可以读取的"信息"。它也提醒我们：重大科学突破往往是多人合作的成果，而历史有时会对贡献者不够公平。</p>
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
    story:`
    <div class="hook">💡 过去治癌症，常像"地毯式轰炸"——化疗放疗在杀癌细胞的同时也伤正常细胞。而现在有一种新思路：不亲自上阵，而是卸下身体免疫系统的"刹车"，让它自己去消灭肿瘤。</div>
    <div class="section">
      <h2>一、免疫系统为什么"认不出"癌<span data-ai-q="癌症免疫疗法是怎么让身体杀癌的？"></span></h2>
      <p>我们的免疫系统本该清除异常细胞，但癌细胞很狡猾：它表面有一种"别杀我"的信号（如 PD-L1），结合免疫细胞上的"刹车"蛋白（PD-1），让卫士收手。</p>
      <p>免疫检查点抑制剂就是专门"松开刹车"的抗体药：艾利森发现 CTLA-4 这个刹车，本庶佑发现 PD-1。两人因此共获 2018 年诺贝尔生理学或医学奖。</p>
    </div>
    <div class="section">
      <h2>二、另一种思路：给细胞装"导航"</h2>
      <p>还有 CAR-T 疗法：从患者体内取出 T 细胞，在实验室给它装上识别癌细胞的"导航受体"，再回输体内，让这支"改装部队"精准猎杀肿瘤。它在某些血液癌里已显现奇效。</p>
      <div class="analogy">
        <h3>🔍 打个比方：松开警车的刹车</h3>
        <p>癌细胞悄悄踩住了免疫警车的刹车，让它停着不动。免疫疗法就是帮警车松开刹车、恢复追捕——一旦重启，身体自己的卫士就能去围剿肿瘤。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>免疫疗法把抗癌思路从"外部毒杀"扭转为"内部赋能"，对黑色素瘤、肺癌等带来了长期缓解的可能。它也让"治愈癌症"从奢望，变成了正在走近的现实之一。</p>
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
    story:`
    <div class="hook">💡 你并不只是"你"——在你肠道里，还住着数以万亿计的细菌、真菌，总数量可能和你自身细胞差不多。它们不是来捣乱的，很多时候是你的"房客兼室友"。</div>
    <div class="section">
      <h2>一、肠道里的"小社会"<span data-ai-q="人体微生物组到底是什么？它有什么用？"></span></h2>
      <p><strong>微生物组</strong>指生活在人体（尤其肠道）的全部微生物及其基因。它们帮我们分解某些食物、合成维生素（如维生素 K、B 族），还训练免疫系统"分清敌友"。</p>
      <p>研究发现，微生物组的组成和肥胖、糖尿病、肠炎、甚至情绪都有关联。但"相关"不等于"因果"——这是该领域最常被误读的地方。</p>
    </div>
    <div class="section">
      <h2>二、我们能怎么与它们相处</h2>
      <p>饮食（膳食纤维、发酵食品）会显著改变菌群；在某些难治的肠道感染（如艰难梭菌）中，医生甚至用"<strong>粪菌移植</strong>"——把健康人的菌群移入患者肠道——来重建生态，效果惊人。</p>
      <div class="analogy">
        <h3>🔍 打个比方：你体内的小花园</h3>
        <p>肠道像一座花园，不同的菌群是里面的花草。你施的"肥"（吃的东西）决定了哪些花草茂盛。花园健康，整座"房子"（身体）也更舒服。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>人体微生物组揭示了"我们"其实是人和微生物的共生体。它仍是飞速发展的前沿，没有单一诺奖，但正在重塑医学对营养、免疫和疾病的理解。</p>
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
    story:`
    <div class="hook">💡 有些问题，我们一眼就能判断答案对不对，却可能永远算不出答案。比如：给你一个拼好的魔方，很容易验证对不对；但要你从头复原，却要费好大劲。P vs NP 问的，就是这类"验证易、求解难"的问题到底有没有捷径。</div>
    <div class="section">
      <h2>一、求解容易，还是验证容易<span data-ai-q="P 和 NP 到底是什么意思？"></span></h2>
      <p>在算法里，<strong>P</strong> 类问题是"能用计算机在合理时间内求解"的（比如排序）。<strong>NP</strong> 类问题是"一旦给出答案，能在合理时间内验证它对不对"的（比如数独、旅行商路线）。</p>
      <p>显然，能快速求解的必能快速验证，所以 P 包含于 NP。但反过来呢？如果 P = NP，那所有"验证易"的问题都能被"快速求解"——很多今天看来极难的问题将迎刃而解。</p>
    </div>
    <div class="section">
      <h2>二、为什么人人都赌 P ≠ NP</h2>
      <p>绝大多数计算机科学家相信 P ≠ NP：求解就是比验证难得多。可惜这一点至今没被证明。它是克莱数学研究所列出的七大"千禧年难题"之一，悬赏 100 万美元。</p>
      <div class="analogy">
        <h3>🔍 打个比方：拼图与验图</h3>
        <p>拼好一幅万块拼图极费劲（求解难），但有人递给你一幅拼好的，你扫一眼就能发现少没少块（验证易）。P vs NP 问的就是：有没有一种"神方法"，让拼图也变得和验图一样快？</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>若 P = NP 被证实，密码学、优化、药物设计等将被颠覆；若 P ≠ NP 被证明，则给"有些难题天生难解"盖上定理的印章。无论哪边，都是计算机科学的地基级问题。</p>
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
    story:`
    <div class="hook">💡 素数（只能被 1 和自身整除的数）像夜空中的星星，看似乱撒一地。但 160 多年前，黎曼猜到：它们其实遵循一条隐藏的"乐谱"——只是这条乐谱至今没人能完整证明。</div>
    <div class="section">
      <h2>一、素数背后的"乐谱"<span data-ai-q="黎曼猜想到底在说什么？和素数有什么关系？"></span></h2>
      <p>素数越往后越稀疏，但总体上还算规律（比如第 n 个素数大约和 n·ln n 同阶）。黎曼在 1859 年研究一个叫<strong>ζ（zeta）函数</strong>的数学对象，发现：素数的分布规律，和这个函数的一串特殊"零点"的位置紧紧绑在一起。</p>
      <p><strong>黎曼猜想</strong>断言：这些非平凡零点的实部，全都精确地等于 1/2——即它们整齐地排在同一条竖线上。如果成立，素数分布的误差就能被牢牢控制。</p>
    </div>
    <div class="section">
      <h2>二、为什么它值百万美元</h2>
      <p>它是又一道千禧年难题，悬赏 100 万美元。无数数学家验证了前万亿个零点都"乖乖"落在那条线上，却始终没能从原理上证明"永远如此"。</p>
      <div class="analogy">
        <h3>🔍 打个比方：鼓的泛音</h3>
        <p>一面鼓的形状决定它发出的泛音频率。ζ 函数的零点就像这面"数学鼓"的泛音；黎曼猜想说这些泛音的频率全都符合某个特定模式——而素数，就是这面鼓敲出的"音色"。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>黎曼猜想把"素数为什么这样分布"这个最古老的数论问题，连接到复分析的深处。它若被证明或推翻，都将在密码学、数论乃至整个数学版图上引发连锁地震。</p>
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
    story:`
    <div class="hook">💡 同一段音乐，有人听到旋律，有人听到鼓点。傅里叶变换就像一副特殊眼镜：戴上它，你能看到任何声音、图像背后，是由哪些"频率"拼出来的。</div>
    <div class="section">
      <h2>一、复杂信号 = 简单波的叠加<span data-ai-q="傅里叶变换到底在做什么？"></span></h2>
      <p>1807 年，傅里叶提出一个惊人想法：任何周期信号（比如一段声音），都能拆成一串不同频率、不同音量正弦波的叠加——就像任何和弦都能分解成单个音符。</p>
      <p><strong>傅里叶变换</strong>就是把一个信号从"随时间变化"的视角，转换到"由哪些频率组成"的视角（频域）。原本看不清的规律，在频域里一目了然。</p>
    </div>
    <div class="section">
      <h2>二、它藏在你的每一天里</h2>
      <p>MP3 靠它丢掉人耳不敏感的频率来压缩；JPEG 靠它在图像里做类似处理；医院的 CT、MRI 靠它从扫描数据重建出身体断面；连 Wi-Fi、4G 信号调制都离不了它。</p>
      <div class="analogy">
        <h3>🔍 打个比方：乐谱解码器</h3>
        <p>一段嘈杂的合奏曲，你听不清每个乐器。傅里叶变换把整段录音"翻译"成乐谱——哪一行是哪个乐器、多响，清清楚楚。工程师据此该加强的加强、该去掉的去掉。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>傅里叶变换是现代数字世界的隐形基石：没有它，就没有高效的多媒体压缩、医学影像和无线通信。而让它真正跑得快的，是 1965 年的快速傅里叶变换（FFT）算法。</p>
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
    story:`
    <div class="hook">💡 "一只巴西的蝴蝶扇动翅膀，可能得克萨斯州下个月就有一场龙卷风。"这话虽夸张，却点出一个真发现：有些系统对一点点初始差别，会放大到天差地别。</div>
    <div class="section">
      <h2>一、确定的规则，却算不到远处<span data-ai-q="混沌理论到底是什么？蝴蝶效应是怎么回事？"></span></h2>
      <p>1963 年，气象学家洛伦兹在用计算机模拟天气时，把输入的小数点后几位四舍五入，结果演算出的天气竟与原来天差地别。他意识到：某些<strong>确定性</strong>系统（规则完全确定）对<strong>初值极其敏感</strong>——这就是"蝴蝶效应"。</p>
      <p>这类系统被称为<strong>混沌</strong>。它并不意味着"随机乱来"，而是说：长期预测会失效，因为极微小的误差会被指数级放大。</p>
    </div>
    <div class="section">
      <h2>二、混沌里也有秩序</h2>
      <p>混沌不是一团乱麻。洛伦兹发现的"蝴蝶形"吸引子，说明混沌系统的轨迹虽然不重复，却稳定地绕在一个固定形状附近——这种"有序中的无序"在生态、心律、经济里都看得见。</p>
      <div class="analogy">
        <h3>🔍 打个比方：台球桌上的毫厘之差</h3>
        <p>两棵台球初始只差一根头发丝的角度，前几杆看着差不多；可十几杆之后，一颗进了左袋、一颗进了右袋。混沌系统就是这样：起点差之毫厘，终点谬以千里。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>混沌理论告诉我们：即使世界由确定规则驱动，长期预测也可能天生受限——这正是天气预报有上限的根本原因。它也催生了分形几何等全新数学分支。</p>
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
    story:`
    <div class="hook">💡 你在网购、聊微信时，信息都被"锁"着。这把锁的设计很妙：它的钥匙可以公开给所有人，却几乎无法被逆向配出——靠的是"把两个大素数乘起来容易、拆回去极难"。</div>
    <div class="section">
      <h2>一、一把"倒着难开"的锁<span data-ai-q="RSA 是怎么用大数分解来保护信息的？"></span></h2>
      <p>1977 年，里维斯特、萨莫尔、阿德曼提出 <strong>RSA</strong>：取两个很大的素数，把它们相乘得到一个更大的数，作为"公钥"公开。加密就是基于这个数做运算。</p>
      <p>想破解，就得把这个大数"分解"回那两个素数——对足够大的数，这在经典计算机上需要的时间长得不现实。于是，公开钥匙不怕给人看，因为没人能快速反推私钥。</p>
    </div>
    <div class="section">
      <h2>二、量子计算机来了，锁还安全吗</h2>
      <p>1994 年，肖尔提出一个量子算法，理论上能高效分解大数——一旦大型量子计算机成熟，今天的 RSA 就会被攻破。这倒逼密码学界加紧研发"<strong>后量子密码</strong>"。</p>
      <div class="analogy">
        <h3>🔍 打个比方：把门焊死容易，撬开极难</h3>
        <p>造锁时把两块铁焊成一整块（乘两个素数）很容易；小偷要还原成两块铁（分解），得花上宇宙年龄那么久。RSA 靠的就是"焊"易、"拆"难的不对称。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>RSA 把数论变成了每天守护互联网的锁。它让我们明白：一个纯数学的"难问题"，竟能撑起整个数字社会的信任。而量子时代的逼近，正推动密码学新一轮大换血。</p>
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
    story:`
    <div class="hook">💡 没有温室效应，地球会是个平均 -18°C 的大冰球，生命难以存活。但被子太厚，又会热得难受——关键在"适度"。</div>
    <div class="section">
      <h2>一、地球的"棉被"怎么工作<span data-ai-q="温室效应到底是什么？它为什么重要？"></span></h2>
      <p>太阳送来的是短波可见光，能穿过大气照到地面；地面被加热后，以<strong>红外长波</strong>的形式向外散热。大气中的水汽、二氧化碳等"<strong>温室气体</strong>"恰好会吸收这些红外辐射，再把一部分热量"弹回"地面。</p>
      <p>结果就像盖了一层被子：进来的光多、出去的热被拦了点，地球才暖和到适宜生命。</p>
    </div>
    <div class="section">
      <h2>二、好东西，多了就坏事</h2>
      <p>温室效应本身不是敌人。问题是近两百年，人类大量燃烧煤、石油、天然气，把地下封存亿万年的碳快速搬回大气，二氧化碳浓度从约 280 ppm 升到逾 420 ppm。被子越盖越厚，地球才加速变暖。</p>
      <div class="analogy">
        <h3>🔍 打个比方：睡觉时盖被子</h3>
        <p>一床薄被让你舒服；可若半夜又压上三床厚被，你就会热得冒汗。地球现在的处境，正是"被子越加越厚"。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>温室效应是生命之友，过度增强才是危机。理解它，是把"全球变暖"从口号变成可定量讨论的科学问题的第一步。</p>
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
    story:`
    <div class="hook">💡 碳是构成生命的元素，也是化石燃料的本体。它在地球各处"旅游"：被植物吸进身体，被动物呼出，沉入海洋，埋进岩石——这场永不停歇的旅行，叫碳循环。</div>
    <div class="section">
      <h2>一、碳的两条旅游路线<span data-ai-q="碳循环是怎么运转的？为什么重要？"></span></h2>
      <p><strong>快路线</strong>：植物光合作用把空气中的 CO₂ 变成身体（糖），动物吃了、呼吸又把碳吐回空气；死后被微生物分解，碳回归大气。这趟循环几年到几百年走完一圈。</p>
      <p><strong>慢路线</strong>：一部分碳沉到海底变成石灰岩、被埋成煤和石油，要花上百万年。正是这些"慢仓库"，把远古的碳长期锁在地下。</p>
    </div>
    <div class="section">
      <h2>二、人类按下了"快进键"</h2>
      <p>我们烧煤、石油、天然气，等于把慢路线里封存亿年的碳，以几百倍的速度搬回大气。海洋和森林"吸碳"的能力跟不上，于是大气 CO₂ 越堆越多。</p>
      <div class="analogy">
        <h3>🔍 打个比方：地球的呼吸</h3>
        <p>碳循环像地球的一呼一吸：吸进（光合）与呼出（呼吸/分解）本来平衡。人类却往"呼气"这边猛加量，把平衡打破了。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>碳循环本来是地球自我调节的精密系统。理解它，才能明白"双碳"（碳达峰、碳中和）的本质：不是消灭碳排放，而是让排放与吸收重新回到平衡。</p>
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
    story:`
    <div class="hook">💡 你脚下的陆地，其实像漂浮在 soup 上的拼图块，正以指甲生长的速度缓缓移动。几亿年前，所有大陆曾拼成一块"超大陆"。</div>
    <div class="section">
      <h2>一、从"疯狂想法"到科学真理<span data-ai-q="板块构造是怎么回事？大陆真的在漂移吗？"></span></h2>
      <p>1912 年，魏格纳注意到南美洲和非洲的海岸线像能拼在一起，提出<strong>大陆漂移说</strong>，当时被嘲笑。直到 1960 年代，海底磁条带和洋中脊的发现证明：海洋地壳在裂谷处不断新生、向两侧推开（海底扩张），大陆才随之移动。</p>
      <p>最终形成<strong>板块构造理论</strong>：地球最外层（岩石圈）裂成若干巨型板块，漂浮在软流圈上，彼此推挤、分离、错动。</p>
    </div>
    <div class="section">
      <h2>二、板块的"相遇"塑造地表</h2>
      <p>板块分离的边界（如东非裂谷）会冒出新海洋；相互碰撞的边界（如喜马拉雅）会隆起高山；错动的边界（如加州圣安地列斯）则频发地震。火山、地震的分布，几乎都沿板块边界排布。</p>
      <div class="analogy">
        <h3>🔍 打个比方：汤面上的拼图</h3>
        <p>把地球表层想成漂浮在热汤上的几块拼图。汤（地幔）缓缓对流，推着拼图互相蹭、互相挤——蹭出的缝冒热气（火山），挤着的地方隆起（山脉）、偶尔咔嚓一滑（地震）。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>板块构造统一解释了地震、火山、山脉与海陆变迁，是 20 世纪地球科学的革命。今天我们用 GPS 能直接测出板块每年移动几厘米——大陆确实在"走路"。</p>
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
    story:`
    <div class="hook">💡 太平洋每隔两三年就会"翻个身"：原本该待在西边的暖水跑向东边，于是一连串天气连锁反应在全球上演——旱的更旱、涝的更涝。</div>
    <div class="section">
      <h2>一、太平洋的"正常呼吸"<span data-ai-q="厄尔尼诺到底是什么？它怎么影响天气？"></span></h2>
      <p>平常，赤道太平洋的东风把温暖海水推向西边（澳洲附近），东边（南美）则涌上冰冷的深水，带来丰盛渔获。这种"东冷西暖"是太平洋的常态。</p>
      <p>当东风偶尔减弱甚至反转，暖水向东蔓延、覆盖冷水区，就进入<strong>厄尔尼诺</strong>状态。它的反面——东风异常增强、暖水更聚西边——叫<strong>拉尼娜</strong>。两者合称 ENSO 循环。</p>
    </div>
    <div class="section">
      <h2>二、一次呼吸，搅动全球</h2>
      <p>厄尔尼诺年，南美西岸暴雨、澳洲和印尼易干旱、太平洋台风路径偏移，甚至影响远在非洲的降雨。它说明：海洋和大气是连体的，一处变温，全球天气都跟着"打喷嚏"。</p>
      <div class="analogy">
        <h3>🔍 打个比方：空调风向反转</h3>
        <p>太平洋像一台大空调，平时把暖风往西吹（西边热、东边凉）。厄尔尼诺就是空调风向突然反转——西边变凉、东边变暖，整屋子的"体感"都乱了套。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>厄尔尼诺提醒我们：地球气候是一个相互牵连的整体，没有哪个地方的天气是孤立的。看懂它，能帮我们提前预判旱涝与灾害，减少损失。</p>
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
    story:`
    <div class="hook">💡 在离地约 20–30 公里的高空，有一层薄薄的臭氧，默默挡住了大部分致命紫外线。可就在几十年前，人类差点亲手把它戳穿。</div>
    <div class="section">
      <h2>一、盾牌是怎么被戳穿的<span data-ai-q="臭氧层是什么？人类是怎么破坏它的？"></span></h2>
      <p>平流层的<strong>臭氧（O₃）</strong>能吸收紫外线，保护地表生命。1974 年，莫利纳和罗兰指出：冰箱、喷雾罐里广泛使用的<strong>氟利昂（CFC）</strong>，飘到高空后会释放氯原子，像催化剂一样疯狂撕碎臭氧分子。</p>
      <p>1985 年，科学家在南极上空真的发现了一个巨大的"<strong>臭氧空洞</strong>"。证据确凿，全球迅速行动。</p>
    </div>
    <div class="section">
      <h2>二、一次罕见成功的"全球救场"</h2>
      <p>1987 年，各国签署<strong>《蒙特利尔议定书》</strong>，逐步禁用 CFC。这是历史上少数真正管用、几乎全球一致的环境条约。如今臭氧层正在缓慢恢复，预计本世纪中叶回到健康水平。</p>
      <div class="analogy">
        <h3>🔍 打个比方：地球的防晒伞</h3>
        <p>臭氧层像一把高空防晒伞。CFC 是戳伞的小针，越戳洞越大、紫外线越能直射进来伤皮肤。人类及时把"针"收走，伞才慢慢补好。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>臭氧层的故事是环境合作的典范：当科学证据清晰、行动够快，人类确实能挽回对地球的伤害。它也为应对今天的气候变化提供了宝贵经验。</p>
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
    story:`
    <div class="hook">💡 海洋吸收了人类排放约三成的二氧化碳，本是件"帮忙"的事。可这份帮忙有代价：海水正在变酸，许多海洋生物的"骨头和房子"正变得难造。</div>
    <div class="section">
      <h2>一、二氧化碳钻进海里，发生了什么<span data-ai-q="海洋酸化是怎么回事？它和二氧化碳有什么关系？"></span></h2>
      <p>海水吸收 CO₂ 后，会生成碳酸，并释放出氢离子，使海水的 <strong>pH 值下降</strong>——也就是变酸。同时，碳酸根离子的浓度降低。</p>
      <p>问题在这里：珊瑚、贝类、浮游生物靠<strong>碳酸钙</strong>造外壳和骨骼。碳酸根变少，它们"盖房子"的材料就不够，壳体甚至会开始溶解。</p>
    </div>
    <div class="section">
      <h2>二、牵一发动全身</h2>
      <p>这些带壳的小生物处在食物链底层。它们若衰退，鱼群、乃至整个海洋生态都会受牵连；依赖渔业的沿海社区也会受影响。</p>
      <div class="analogy">
        <h3>🔍 打个比方：泡在醋里的贝壳</h3>
        <p>把贝壳丢进醋里，它会慢慢变软、溶解——因为酸会啃食碳酸钙。海洋酸化就是这样，只是速度慢得多，却持续而广泛。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>海洋酸化是温室气体排放的"另一张账单"，和全球变暖同源（都来自过多 CO₂）。它提醒我们：气候问题不只是"变热"，还有一连串看不见的化学连锁反应。</p>
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
    story:`
    <div class="hook">💡 过去教电脑认猫，得先告诉它"猫有尖耳朵、胡须"；深度学习反过来——给它成千上万张猫图，它自己琢磨出"猫长什么样"。这股复兴，点燃了今天的 AI 时代。</div>
    <div class="section">
      <h2>一、从"人教特征"到"自己学特征"<span data-ai-q="深度学习到底是什么？和以前的机器学习有什么不同？"></span></h2>
      <p>传统机器学习靠人先设计好"特征"（比如边缘、颜色直方图），再让算法分类。<strong>深度学习</strong>用很多层的神经网络，让数据<strong>自己逐层提炼特征</strong>：第一层看像素点，第二层看边缘，再往上组合成部件、最后认出整只猫。</p>
      <p>关键是 1986 年提出的<strong>反向传播</strong>算法，让网络能从错误中自动调参；再加上 2010 年代 GPU 算力和海量数据爆发，深层网络才真正"跑得动、训得准"。</p>
    </div>
    <div class="section">
      <h2>二、为什么是"深度"</h2>
      <p>网络越深（层数越多），能表达的规律越复杂。2018 年，深度学习的奠基者辛顿、杨立昆、本吉奥共获图灵奖——相当于计算机界的诺贝尔奖。</p>
      <div class="analogy">
        <h3>🔍 打个比方：剥洋葱</h3>
        <p>深度学习像一层层剥洋葱：最外层是原始像素（生洋葱皮），往里剥是边缘、是形状、是部件，最中心才是"这是只猫"的判断。每一层都比上一层更抽象一点。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>深度学习把"特征工程"变成了"特征学习"，让机器从数据中自动萃取规律。它是图像识别、语音、翻译乃至大语言模型的共同底座。</p>
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
    story:`
    <div class="hook">💡 2017 年，一篇论文的标题只有六个字——"Attention Is All You Need"（你只需注意力）。就是这六个字，催生了今天会聊天的 ChatGPT。</div>
    <div class="section">
      <h2>一、让模型"一眼看全"句子<span data-ai-q="Transformer 和大语言模型到底是什么？"></span></h2>
      <p>在 Transformer 之前，模型常一个词一个词地读句子（像阅读障碍），难捕捉远距离关系。Transformer 引入<strong>自注意力机制</strong>：处理每个词时，模型同时"看"句子中所有其他词，并判断谁和谁关系最紧。</p>
      <p>这种设计能高度并行计算，于是可以拿海量文本"预训练"出一个庞大的<strong>大语言模型（LLM）</strong>，它能续写、翻译、问答、写代码。</p>
    </div>
    <div class="section">
      <h2>二、从论文到全民 ChatGPT</h2>
      <p>基于 Transformer 的 GPT、BERT 等模型一路做大。2022 年底 ChatGPT 出现，让普通人第一次能和"会说话的 AI"对话，引爆生成式 AI 浪潮。</p>
      <div class="analogy">
        <h3>🔍 打个比方：开会时人人互看</h3>
        <p>老模型像排着队挨个发言，每人只记得上一个人的话；Transformer 像圆桌会议，每个人发言时都能同时参考在场所有人——所以更懂"上下文"。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>Transformer 用"注意力"统一了语言理解与生成，是大模型时代的技术基石。它也让"对齐"（让 AI 听话、有用、无害）成为新的核心课题。</p>
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
    story:`
    <div class="hook">💡 教电脑下围棋，你没法把每一步"正确答案"都列出来。但你可以告诉它："赢了有糖吃，输了没糖"——剩下的，让它自己下、自己悟。这就是强化学习。</div>
    <div class="section">
      <h2>一、用"奖励"代替"标准答案"<span data-ai-q="强化学习是什么？AlphaGo 为什么厉害？"></span></h2>
      <p><strong>强化学习</strong>不靠标注答案，而是让智能体在环境里行动，根据<strong>奖励</strong>（赢棋+、输棋−）调整策略。它像训练小狗：做对了给零食，慢慢就学会了。</p>
      <p>2016 年，DeepMind 的 <strong>AlphaGo</strong> 把深度学习（看棋盘）和强化学习（自我对弈提升）结合，击败了世界冠军李世石。后来 AlphaZero 甚至不借助人类棋谱，纯自学就碾压所有前辈。</p>
    </div>
    <div class="section">
      <h2>二、不止会下棋</h2>
      <p>同样的思路可用于机器人学走路、算法调网络、甚至帮助蛋白质折叠研究（AlphaFold）。它处理的是"一连串决策"类问题。</p>
      <div class="analogy">
        <h3>🔍 打个比方：自己练出的手感</h3>
        <p>你不看棋谱，只知道自己赢没赢。下几千盘后，你慢慢摸出"这步通常能赢"的直觉。AlphaGo 就是这么练出来的——而且它一天能下百万盘。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>强化学习证明了：在规则明确、反馈清晰的环境里，机器可以通过"试错+奖励"自己演化出超人策略。它是迈向自主决策智能的关键一环。</p>
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
    story:`
    <div class="hook">💡 一张照片对电脑来说，最初只是几百万个数字（像素值）。计算机视觉，就是教会它把这些数字"翻译"成"这是猫、那是红绿灯"的本事。</div>
    <div class="section">
      <h2>一、机器是怎么"看懂"图的<span data-ai-q="计算机视觉是什么？机器怎么认出图里的东西？"></span></h2>
      <p><strong>计算机视觉</strong>研究如何让程序从图像/视频中提取信息：分类（图里是什么）、检测（物体在哪）、分割（每个像素属于谁）。</p>
      <p>2012 年是转折点：一个叫 <strong>AlexNet</strong> 的深度网络在 ImageNet 海量图像竞赛中把错误率砍掉近一半，证明深度学习看图像比人设计的规则强得多。此后刷脸解锁、医学影像诊断、自动驾驶感知都随之起飞。</p>
    </div>
    <div class="section">
      <h2>二、看见，不等于理解</h2>
      <p>机器能标出"图里有一只猫"，却不一定懂"猫为什么可爱"。真正的"视觉理解"——把看到的和常识、语言连起来——仍是前沿目标。</p>
      <div class="analogy">
        <h3>🔍 打个比方：教小孩认图卡</h3>
        <p>你拿一叠图卡教小孩："这是狗、那是车。"看多了他一眼就认得。计算机视觉也是：喂它成千上万张标注图，它慢慢学会把像素模式对应到物体名字。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>计算机视觉是 AI 落地最广的方向之一，从手机美颜到工厂质检、从辅助诊断到无人车，背后都有它。它也是连接"像素世界"与"语义世界"的桥梁。</p>
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
    story:`
    <div class="hook">💡 你一眼就能认出照片里的猫，是因为大脑视觉皮层是分层处理画面的。卷积神经网络，正是照着这个思路设计出来的"机器的眼睛"。</div>
    <div class="section">
      <h2>一、让网络学会"看局部"<span data-ai-q="卷积神经网络到底是什么？为什么适合看图？"></span></h2>
      <p>普通神经网络把整张图拉成一条长向量，丢掉了空间结构。<strong>卷积神经网络（CNN）</strong>不一样：它用小"滤波器"在图上滑动，专门捕捉局部模式——先认边缘，再认纹理，再认部件，最后拼成整体。</p>
      <p>关键技巧是<strong>权值共享</strong>：同一个滤波器扫遍全图，参数少、不易过拟合，还能识别"不管猫在图里哪个位置"都一样。杨立昆 1989/1998 年提出 LeNet，2012 年 AlexNet 把它推向巅峰。</p>
    </div>
    <div class="section">
      <h2>二、为什么它成了视觉标配</h2>
      <p>从手机人脸解锁到医学影像、卫星图分析，CNN 几乎是"让机器看图像"的默认引擎。后来的 Transformer 视觉版，也站在它的肩膀上。</p>
      <div class="analogy">
        <h3>🔍 打个比方：层层叠加的滤镜</h3>
        <p>第一层滤镜只找横竖线条；第二层把线条拼成眼睛鼻子；第三层认出"这是脸"。每一层都比上一层更"高级"一点，像给图片套了一叠越来越聪明的滤镜。</p>
      </div>
    </div>
    <div class="takeaway">
      <h3>🌟 记住这个</h3>
      <p>CNN 用"局部感知 + 权值共享"巧妙利用了图像的空间结构，是现代视觉 AI 的基石。理解它，就理解了为什么深度学习能"看懂"世界。</p>
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