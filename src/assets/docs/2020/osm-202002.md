# 开源爱好者月刊：第 2 期（202002）

> 开源软件占所有软件的 80%-90%；二十年前一线程序员月薪 3000+，一台 32mb 内存电脑 8000+；如何吸引运营人员参与开源社区......开源的世界精彩万分，数不胜数；最后推荐一本书，介绍为什么“科学”曾是一种十分罕见的文化现象，根源于希腊人对于自由人性的追求。

# 序言

本刊从自身对开源的爱好出发，计划先以每月一刊的形式更新。同时，本刊站在众多巨人的肩上，离开这些或许现在会大不相同。

本杂志开源（GitHub: [ningowood/open-source-magazine](https://github.com/ningowood/open-source-magazine)），本月开始提供了各大平台信息源可以进行更多深入的阅读。更多动态，欢迎提交 issue，投稿或推荐你的开源内容。

根据第一期反馈，尝试写一次目录，摘要如下。

- 2020 年热门编程语言的发展方向
- 我们分析了GitHub上5.46 亿条日志，发现中国开源虽然贡献大但还有这些不足...
- 开源的两种局面
- Linux 基金会披露最常用的开源组件及其安全问题
- 企业开源软件正在创新型公司中成长
- 2019-2020 中国开发者调查报告完整版
- 推荐项目“Rome”、“Pytorch”和“Scalar”
- 推荐品牌“O'Reilly”、“InfoQ”和“开源社”
- 推荐书籍《什么是科学》

# 资讯

01、[2020 年热门编程语言的发展方向](https://www.oreilly.com/radar/where-programming-languages-are-headed-in-2020/)

![](https://upload-images.jianshu.io/upload_images/2558748-c12a23880820d2f0.png&originHeight=292&originWidth=518&size=244805&status=done&style=none&width=471?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 发布时间：2020-01-13
- 作者简介：Zan McQuade 和 Amanda Quinn 均是 O'Reilly 编程语言领域的高级编辑。Zan McQuade 专注 Java/JVM，Go 和 Android 内容，在加入 O'Reilly 之前，她在 Penguin Random House 从事外语教学内容工作了将近二十年；Amanda Quinn 关注 Python/C++ /C# 和 Rust 内容。

2020 开启了新的十年，O'Reilly 的两位编辑向多位编程语言专家征询了他们对当前热门编程语言的看法。

- **Python**。2019 年年底 Python 之父宣布退休，权利转移过程还算顺利，留下了一个健壮的社区。《Python 编程从入门到实践》作者 Matthes 表示，Python 在一个长期以来刻意构建其多样性的社区中，出现了各种有趣而关键的项目。
- **Java**。Java 13 版本已经发布，超过 80% 的开发人员仍然使用 Java 8。尽管开发人员采用新版本的速度很慢，但 Java 每六个月发布一次的节奏一直在不断延续。
- **Kotlin**。谷歌在 2019 年 5 月宣布，Kotlin 现在是 Android 应用程序开发人员的首选语言。不同 Kotlin 平台之间的屏障也正在被打破——“expect”/”actual” 限定符使开发人员可以更轻松地编写跨 Java/Native/JS 环境的兼容代码。现在，序列化支持意味着可以更容易地将 JSON 数据转换为 Kotlin 对象，反之亦然。KotlinConf 会议门票连续三年售罄，尤其表明人们对这门语言的兴趣和接受程度正在增长。
- **Go**。2019 年 6 月，针对 Go 的抱怨之一错误处理过于冗长，Go 的核心开发者提议添加一个新的内置函数 try 并开放讨论，最终在大多数人的意见下否决了本次提案。Go 的社区很友好活跃。同时，2020 年 Go 的契约规范（也就是众所周知的泛型提案）应该会更加清晰。
- **Rust**。《Programming Rust》的合著者 Jim Blandy 指出，Rust 长期以来一直以多样的形式支持异步编程，async/await 语法的支持依然进行中。Rust 社区对 WebAssembly 很感兴趣。
- **Swift**。2019 年 SwiftUI 和 Swift for TensorFlow 发布。SwiftUI 可用于在所有苹果设备上设计用户界面，凭借其声明式的特性在开发者中获得了很大的吸引力，并且已经被视为是未来 UIKit 的潜在继任者；Swift for TensorFlow 是一个将谷歌 TensorFlow 框架和 Swift 集成在一起的深度学习和可微分编程（differentiable programming ）平台，开启了 Swift 的全新方向。

02、[我们分析了GitHub上5.46 亿条日志，发现中国开源虽然贡献大但还有这些不足...](https://github.com/X-lab2017/github-analysis-report-2019/blob/master/REPORT.md)

![](https://upload-images.jianshu.io/upload_images/2558748-1f761c000ffd14aa.png&originHeight=480&originWidth=1080&size=70802&status=done&style=none&width=540?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 发布时间：2020-02-02
- 作者简介：InfoQ 是一家全球性社区网站，基于实践者驱动的社区模式建立，促进软件开发领域知识与创新的传播是 InfoQ 的使命；X-lab 开放实验室是上海同济大学跟华东师范大学联合办的一个创新实验室。

本文通过大量客观数据的罗列，肯定了中国开源对世界的贡献，但也指出了很多不足之处。本文分析的摘要如下。

1. **宏观统计结果。**大多数项目处于低活跃、参与人数少的状态。活跃度高和参与人数多的项目的占比都是万分之一级别的。
2. **世界 Top 10 开发者账号。**都是机器人，侧面反映出开源自动化流程的强大。
3. **世界 Top 10 项目。**大公司以及民间主动发起的项目都有，涵盖前端、容器编排、深度学习以及文档整理等多个领域。
4. **中国 Top 20 项目分析。**涵盖前端（几乎占据榜单一半，但缺少核心项目）、后端、教育、求职、人文关怀等诸多领域。
5. **Repo 协作关系。**我们可以使用 [Git2Net](https://github.com/gotec/git2net) 工具来分析 Commit 生成协作图。
6. **开发语言分析。**活跃度上，JS 第一（无需编译，浏览器直接运行），Py 第二（高可读性，应用范围广，人工智能优先语言），TS 第三（同属于 JS 生态圈）等，相继的是 Java、C++、Go......。
7. **国内技术公司开源项目一览。**阿里领衔，各大企业近年来均在不断加大开源社区生态建设。
8. **展望。**Github 一定程度上受美国法律制约，中国也需要自己的核心技术。

03、[开源的两种局面](https://www.technewsworld.com/story/86497.html)

![](https://upload-images.jianshu.io/upload_images/2558748-172ee6a150487db5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 发布时间：2020-02-06
- 作者简介：Mick Brady 是 ECT 新闻网总编辑。

在过去的二十年里，开源软件运动有了巨大的发展，许多曾经认为开源是一种威胁的企业现在意识到了它的价值；但另一方面，有人利用开源进行虚假的营销或宣传，也可能会给一个组织松散的社区带来问题，更大的公司利用这一点来突袭，殖民代码和/或资金基础，然后从内部控制项目。

04、[Linux 基金会披露最常用的开源组件及其安全问题](https://www.zdnet.com/article/the-linux-foundation-identifies-the-most-important-open-source-software-components-and-their-problems/)

![](https://upload-images.jianshu.io/upload_images/2558748-9b151ffbaff46ebc.png&originHeight=668&originWidth=1000&size=942940&status=done&style=none&width=500?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 发布时间：2020-02-18
- 作者简介：Steven J. Vaughan-Nichols 是自由作家，撰写有关技术和技术业务的文章，工作内容已经发表在从高科技出版物（IEEE Computer，ACM NetWorker，Byte）到商业出版物（eWEEK，InformationWeek，ZDNet）再到流行技术（Computer Shopper，PC Magazine，PC World）和 主流媒体（《华盛顿邮报》，《旧金山纪事》，《商业周刊》）上。

根据红帽最新的一份研究表明，开源软件在企业已经占据主导地位。另一份更早的研究发现，开源软件占所有软件的 80%-90%。今天，很多软件或程序是建立在开源组件上的。

Linux 基金会本次发布的 Census Program II 报告向前迈出重要一步，而且提出一种理解和解决开源软件结构和安全复杂性的方法。该方法不仅可以识别应用程序中最常用的自由和开源软件（FOSS）组件，而且能检查它们潜在的漏洞。报告也列出了使用最广泛的软件组件的排名，前三名分别如下。

- 使用最广泛的非 JavaScript 软件组件前三名：com.fasterxml.jackson.core:jackson-core、com.fasterxml.jackson.core:jackson-databind、com.google.guava:guava。
- 使用最广泛的 JavaScript 软件组件前三名：Async、Inherits、isArray。

报告的研究对象是一些在基础上很重要，使用最广泛的小型的基础构建块程序。这些程序有时不超过 100 行代码，但却非常重要。报告指出开源组件的几个常见问题包括“程序命名不规范”、“许多开源项目仍归属于单独的开发者账户下”以及“下游开发者对新版本的迁移意愿普遍不大”等。

05、[企业开源软件正在创新型公司中成长](https://jaxenter.com/open-source-red-hat2020-168467.html)

![](https://upload-images.jianshu.io/upload_images/2558748-4a43d0696dd14259.png&originHeight=400&originWidth=600&size=151435&status=done&style=none&width=412?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 发布时间：2020-02-19
- 作者简介：Sarah Schlothauer 是 JAXenter.com 的助理编辑，她也是 Conditio Humana 的编辑，这是一本关于道德、人工智能和技术的在线杂志。

以前人们通常认为开源只是编程爱好者的爱好，现在开源在企业中得到了广泛的应用。红帽进行了一项国际调查，采访了 950 位IT领导人，了解他们在业务中使用开源代码的情况。调查显示，开源在企业中正在崛起，而专有软件在衰落。到2020年，企业使用的软件只有42%是专有软件，而2019年这一比例为55%。IT主管预计，在两年内，这一数字将进一步下降。

- 开源软件的四大好处：高质量软件、降低成本、安全和使用云及云本地技术。
- 开源软件的四大使用领域：安全、云管理工具、数据库、大数据与分析。

06、[2019-2020 中国开发者调查报告完整版](https://download.csdn.net/download/xhwuli/12195346)

![](https://upload-images.jianshu.io/upload_images/2558748-3c39da489dd84029.png&originHeight=500&originWidth=960&size=802377&status=done&style=none&width=480?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 发布时间：2020-02-27
- 作者简介：CSDN 创立于1999年，致力于成为IT技术人交流和成长的家园，为中国IT技术人提供知识传播、在线学习、职业发展等全生命周期服务。

CSDN 通过平台优势，进行大数据分析和一定的问卷调查后推出了这份报告。报告中有关开源的概要如下。

1. 68% 的开发者接触开源的时间在 2-5 年。
1. 42% 的开发者首次接触的开源产品是开发工具及框架。
1. 77% 开发者每周在开源上投入时间不超过 5 小时。
1. 65% 开发者不曾在开源上获得收入。
1. 53% 开发者很少参与开源项目。
1. 开发者最喜欢的开源项目是 Apache。

07、一段话消息

> [Fintech 开源](https://www.finextra.com/pressarticle/81368/finos-welcomes-new-members/wholesale)基金会喜迎新成员。随着银行，资本市场机构和其他机构认识到开放源代码在提高效率、降低成本、减少监管压力等方面的价值，开源解决方案可以帮助金融服务公司加快产品上市时间，同时释放资源专注于提供独特业务价值的创新。[2020-02-04]

![](https://upload-images.jianshu.io/upload_images/2558748-4c82ce41c2bff87f.png&originHeight=200&originWidth=200&size=3752&status=done&style=none&width=122?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> [Linux 5.6 增加](https://www.phoronix.com/scan.php?page=article&item=linux-56-features&num=1)了许多令人惊艳的特性。WireGuard、USB4、开源 NVIDIA RTX 2000 系列支持、AMD Pollock 支持、许多新的硬件支持、许多文件系统/存储工作、多路径TCP位最终进入主线、2038 年开始为 32 位系统总结工作、新的 AMD TEE 驱动程序用于开发安全的处理器......[2020-02-09]

![](https://upload-images.jianshu.io/upload_images/2558748-49655ee74ac6cab3.png&originHeight=570&originWidth=1140&size=379546&status=done&style=none&width=570?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> [微软发布 DeepSpeed](https://www.microsoft.com/en-us/research/blog/zero-deepspeed-new-system-optimizations-enable-training-models-with-over-100-billion-parameters/) 开源库，它通过改善规模、速度、成本和可用性，能够极大地推进大型模型的训练，支持 1000 亿个参数模型的训练。[2020-02-13]

![](https://upload-images.jianshu.io/upload_images/2558748-64aeac54a2e27ad7.png&originHeight=732&originWidth=1398&size=440083&status=done&style=none&width=511?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> [Community Leadership Development 日常探讨](http://opensourceway.community/posts/community_leadership_development/discuss_of_how_to_attract_operators_to_participate_os_community_20200213/)之：如何吸引运营人员参与开源社区？这是个深刻的问题，开源开发者在维护和推广项目的过程中一定会遇到大量的运营需求，开源社区更是如此。然而“开源”二字只对开发者有极大的吸引力，如何跨界吸引单纯的运营人员参与社区，亦或者其实我们根本不需要单独的运营人员......？[2020-02-14]

![](https://upload-images.jianshu.io/upload_images/2558748-8cb41b6c9d9a333b.png&originHeight=274&originWidth=500&size=141160&status=done&style=none&width=299?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> [近日，有其他用户](https://www.pcgamer.com/someone-is-selling-the-free-open-source-playnite-launcher-on-steam-for-dollar100)将以 MIT 协议免费开源的 Playnite 发送至 Steam 上售卖 100 美元（国区 256 人民币），然而这并不侵权。Playnite 是一个一站式游戏启动器，支持多种第三方游戏库，如 Steam、GOG、Origin、Battle.net 和 Uplay。包括游戏仿真支持，为玩家的游戏提供一个统一的界面。Playnite 使用 C# 开发，目前只能在 Windows 中运行。[2020-02-18]

![](https://upload-images.jianshu.io/upload_images/2558748-438224d36fcf2cff.png&originHeight=960&originWidth=1707&size=2491589&status=done&style=none&width=549?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> [Oracle-Google](https://www.zdnet.com/article/trumps-doj-and-sun-founder-mcnealy-back-oracle-in-googles-android-java-fight/) 就 Java 是否应享有版权保护展开的斗争即将开庭 [2020-02-21]

![](https://upload-images.jianshu.io/upload_images/2558748-e8e513d36d4bcb89.png&originHeight=574&originWidth=1100&size=291060&status=done&style=none&width=478?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> [GitHub：除非真正](https://www.zdnet.com/article/github-we-wont-take-down-any-of-your-content-unless-we-really-have-to/)需要，否则我们不会删除您的任何内容。“在内容删除政策上保持透明，并尽可能狭隘地限制内容删除，这是联合国言论自由专家向平台提出的建议之一，旨在促进在线内容适度的自由表达，”沃尔默说。“在GitHub，我们两个都做。” [2020-02-21]

![](https://upload-images.jianshu.io/upload_images/2558748-0c88acff986f0993.png&originHeight=440&originWidth=660&size=179052&status=done&style=none&width=381?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> [左耳朵耗子：二十年前](https://www.infoq.cn/article/7RAd79tsNNqwsWeIs7Rj)编程环境和氛围与现在有什么不一样？大多数公司的办公电脑都无法访问互联网；在家上网需要拨号，56.6Kbps 的电话传输是你上网能得到的最大速度，一小时 15 元左右；电脑主流配置：32M 内存，2G 硬盘，价格 8000 元左右；程序员的月薪，大城市 3000-5000 元左右，小城市 1000 元左右；主要的编程语言是 C 语言，用 C 写所有端，包括前端；前端、后端、测试、运维，全都是程序员的事，那时应该叫软件工程师；最有技术含量的公司是银行......。[2020-02-21]

![](https://upload-images.jianshu.io/upload_images/2558748-01a9de8a9e1faf97.png&originHeight=1280&originWidth=1920&size=3572256&status=done&style=none&width=348?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> [一个使用开源固件](https://hackaday.com/2020/02/23/an-open-source-ebike/)的 Ebike 自行车。在电动自行车世界中，有两条道路。第一个是本土的套件摩托车，带有来自中国的电动机和控制器；第二个是来自捷安特（Giant）等制造商的预制自行车，带有来自中国的电动机和控制器，速度将是其一半，成本是其三倍。选择是显而易见的，并且走第一条路线还有其他好处，例如使用现在具有开源固件选件的设备。[2020-02-23]

![](https://upload-images.jianshu.io/upload_images/2558748-d85d85968af44965.png&originHeight=599&originWidth=800&size=1233956&status=done&style=none&width=400?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 项目

01、[Rome：一个实验性的 JavaScript 工具链](https://github.com/facebookexperimental/rome)

![](https://upload-images.jianshu.io/upload_images/2558748-26e1ad6652148776.png&originHeight=1320&originWidth=2048&size=664613&status=done&style=none&width=440?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Rome 包括编译器、linter、格式化程序、bundler、测试框架等等，旨在成为处理 JavaScript 源代码的综合工具。不是现有工具的集合体，并取代许多现有的 JavaScript 工具。所有组件都是自定义的，不使用第三方依赖项。目前是实验阶段。

02、[Pytorch：将 PyTorch 用于3D深度学习的函数库](https://github.com/facebookresearch/pytorch3d)

![](https://upload-images.jianshu.io/upload_images/2558748-088e89a270d78dd1.5?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Facebook 近日开源了将 PyTorch 用于 3D 深度学习的函数库 PyTorch3D。Facebook 将这些功能打包成工具包，并提供了运算符、异构批处理功能和模块化可微分的渲染API等，帮助研究人员进行复杂的 3D 神经网络应用研究。

03、[Scalar：提升操作巨型 Git 仓库速度](https://github.com/microsoft/scalar)

![](https://upload-images.jianshu.io/upload_images/2558748-ea6adc4e067548bb.png&originHeight=300&originWidth=600&size=21453&status=done&style=none&width=300?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
Git 作为版本控制系统的优势很明显，但当 Git 仓库的历史记录过多、跟踪的代码变动过为庞大时，Git 变得难以管理所有数据，导致其运行越来越不顺畅。使用 Git 开发庞大的 Windows 操作系统的微软显得颇有经验：早期使用虚拟文件系统开发 VFS for Git（简称 GVFS），回馈改进了 Git 客户端本身，现在开源了一个无需虚拟文件系统即可支持巨型 Git 仓库的项目，Scalar。

Scalar 是一个使用 C# 编写的 .NET Core 应用程序，通过设置所建议的配置值和运行后台维护来最大程度优化 Git 命令的性能。无论开发者使用什么服务来托管代码仓库，Scalar 都能有效地加速Git 指令。

# 品牌

01、[出版社] [O'Reilly](https://www.oreilly.com/)

![](https://upload-images.jianshu.io/upload_images/2558748-e15ad3febab6e593.png&originHeight=178&originWidth=556&size=10707&status=done&style=none&width=278?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

O'Reilly Media,Inc. 是世界上在 UNIX、X、Internet 和其他开放系统图书领域具有领导地位的出版公司，同时是联机出版的先锋。从最畅销的《The Whole Internet User's Guide and Catalog》（被纽约公共图书馆评为二十世纪最重要的50本书之一）到 GNN（最早的 Internet 门户和商业网站），再到 WebSite（第一个桌面 PC 的 Web 服务器软件），O'Reilly Meida,Inc. 一直处于 Internet 发展的最前沿。

02、[网站] [InfoQ](https://www.infoq.com/)

![](https://upload-images.jianshu.io/upload_images/2558748-cbefb91c04bf57e2.png&originHeight=66&originWidth=222&size=5224&status=done&style=none&width=153?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

InfoQ 是一家全球性社区网站，基于实践者驱动的社区模式建立。软件正在改变世界。促进软件开发领域知识与创新的传播是 InfoQ 的使命。为此，InfoQ 致力于提供中立的、由技术实践者主导的会议以及文章、视频演讲和采访等资讯服务，面向 5 至 8 年工作经验的研发团队领导者、CTO、架构师、项目经理、工程总监和高级软件开发者等中高端技术人群，提供中立的、由技术实践主导的技术资讯及技术会议，搭建连接中国技术高端社区与国际主流技术社区的桥梁。

03、[开源组织] [开源社](https://kaiyuanshe.cn/)

![](https://upload-images.jianshu.io/upload_images/2558748-1c0983667f4976b3.png&originHeight=218&originWidth=524&size=19387&status=done&style=none&width=262?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

开源社是由国内外支持开源的企业、社区及个人，依“贡献、共识、共治”原则，所组织的开源联盟，旨在共创健康可持续发展的开源生态体系，并推动中国开源社区成为全球开源软件的积极参与及贡献者。

2017 年，开源社转型成为由纯粹个人成员（类似 GNOME Foundation，Apache Software Foundation）的治理模式组成，并于 2017 年底由全体正式个人成员选举出 7 名理事，组成理事会及执行委员会（下设 9 个工作组：成员发展、基础设施、财务、法律事务、媒体、文案/翻译/设计、线下活动、社区合作、高校合作等），由企业及社区开源专家组成的顾问委员会，以及法律咨询委员会。

# 荐书

《什么是科学》

![](https://upload-images.jianshu.io/upload_images/2558748-249613190cd9c748.png&originHeight=1574&originWidth=1186&size=1965849&status=done&style=none&width=281?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 不能从根本上理解何为科学的民族，无法自信地面对未来。

科学成为推动历史发展的强大动力只是十九世纪以后的现象，科学根源于希腊人对于自由人性的追求，因而是一种十分罕见的文化现象。现代科学起源于希腊科学的复兴以及基督教内在的思想运动，对力量的追求、对自然的控制和征服成为现代科学的主导动机。在数理实验科学的意义上，中国古代并无科学。在博物学的意义上，中国古代有独特且强大的科学传统。

# 凝果

> 2020 年 01 月凝果屋动态汇总：
> 
> 本月新增博文：
> 1. [《开源爱好者月刊：第 1 期（202001）》](https://www.yuque.com/ningowood/beginning/a005)
> 
> 本月开源动态：
> 1. [开源爱好者月刊](https://github.com/ningowood/open-source-magazine)
>   1. 完善 README.md 新增“选刊指南”
>   1. 发布第二期月刊
> 
> 本月开源贡献者感谢：
> 1. [@hylerrix](https://github.com/hylerrix)
> 1. [@yangdajiang](https://github.com/yangdajiang)

本刊每月底择机发布，以 [Github](https://github.com/ningowood/open-source-magazine) 为中心、微信公众号（@ningowood）和[语雀](https://www.yuque.com/ningowood/beginning)为同步平台，任何想法和新内容的推荐欢迎以 [Github Issue](https://github.com/ningowood/open-source-magazine/issues) 的形式进行交流与知识共享。

![](https://upload-images.jianshu.io/upload_images/2558748-8cf888d7afaa08ba.png&originHeight=258&originWidth=258&size=46769&status=done&style=none&width=196?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
