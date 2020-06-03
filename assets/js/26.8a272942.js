(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{491:function(a,t,s){"use strict";s.r(t);var n=s(14),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"查看-linux-命令帮助信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看-linux-命令帮助信息"}},[a._v("#")]),a._v(" 查看 Linux 命令帮助信息")]),a._v(" "),s("blockquote",[s("p",[a._v("Linux 中有非常多的命令，想全部背下来是很困难的事。所以，我认为学习 Linux 的第一步，就是了解如何快速检索命令说明。")]),a._v(" "),s("p",[a._v("关键词："),s("code",[a._v("help")]),a._v(", "),s("code",[a._v("whatis")]),a._v(", "),s("code",[a._v("info")]),a._v(", "),s("code",[a._v("which")]),a._v(", "),s("code",[a._v("whereis")]),a._v(", "),s("code",[a._v("man")])])]),a._v(" "),s("h2",{attrs:{id:"_1-查看-linux-命令帮助信息的要点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看-linux-命令帮助信息的要点"}},[a._v("#")]),a._v(" 1. 查看 Linux 命令帮助信息的要点")]),a._v(" "),s("ul",[s("li",[a._v("查看 Shell 内部命令的帮助信息 - 使用 "),s("a",{attrs:{href:"#help"}},[a._v("help")])]),a._v(" "),s("li",[a._v("查看命令的简要说明 - 使用 "),s("a",{attrs:{href:"#whatis"}},[a._v("whatis")])]),a._v(" "),s("li",[a._v("查看命令的详细说明 - 使用 "),s("a",{attrs:{href:"#info"}},[a._v("info")])]),a._v(" "),s("li",[a._v("查看命令的位置 - 使用 "),s("a",{attrs:{href:"#which"}},[a._v("which")])]),a._v(" "),s("li",[a._v("定位指令的二进制程序、源代码文件和 man 手册页等相关文件的路径 - 使用 "),s("a",{attrs:{href:"#whereis"}},[a._v("whereis")])]),a._v(" "),s("li",[a._v("查看命令的帮助手册（包含说明、用法等信息） - 使用 "),s("a",{attrs:{href:"#man"}},[a._v("man")])]),a._v(" "),s("li",[a._v("只记得部分命令关键字 - 使用 man -k")])]),a._v(" "),s("blockquote",[s("p",[a._v("注：推荐一些 Linux 命令中文手册：")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://man.linuxde.net/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Linux 命令大全"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/jaywcjlove/linux-command",target:"_blank",rel:"noopener noreferrer"}},[a._v("linux-command"),s("OutboundLink")],1)])])]),a._v(" "),s("h2",{attrs:{id:"_2-命令常见用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令常见用法"}},[a._v("#")]),a._v(" 2. 命令常见用法")]),a._v(" "),s("h3",{attrs:{id:"_2-1-help"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-help"}},[a._v("#")]),a._v(" 2.1. help")]),a._v(" "),s("blockquote",[s("p",[a._v("help 命令用于查看 Shell 内部命令的帮助信息。而对于外部命令的帮助信息只能使用 man 或者 info 命令查看。")]),a._v(" "),s("p",[a._v("参考：http://man.linuxde.net/help")])]),a._v(" "),s("h3",{attrs:{id:"_2-2-whatis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-whatis"}},[a._v("#")]),a._v(" 2.2. whatis")]),a._v(" "),s("blockquote",[s("p",[a._v("whatis 用于查询一个命令执行什么功能。")]),a._v(" "),s("p",[a._v("参考：http://man.linuxde.net/whatis")])]),a._v(" "),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看 man 命令的简要说明")]),a._v("\n$ whatis "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("man")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看以 loca 开拓的命令的简要说明")]),a._v("\n$ whatis -w "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"loca*"')]),a._v("\n")])])]),s("h3",{attrs:{id:"_2-3-info"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-info"}},[a._v("#")]),a._v(" 2.3. info")]),a._v(" "),s("blockquote",[s("p",[a._v("info 是 Linux 下 info 格式的帮助指令。")]),a._v(" "),s("p",[a._v("参考：http://man.linuxde.net/info")])]),a._v(" "),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看 man 命令的详细说明")]),a._v("\n$ info "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("man")]),a._v("\n")])])]),s("h3",{attrs:{id:"_2-4-which"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-which"}},[a._v("#")]),a._v(" 2.4. which")]),a._v(" "),s("blockquote",[s("p",[a._v("which 命令用于查找并显示给定命令的绝对路径，环境变量 PATH 中保存了查找命令时需要遍历的目录。which 指令会在环境变量$PATH 设置的目录里查找符合条件的文件。也就是说，使用 which 命令，就可以看到某个系统命令是否存在，以及执行的到底是哪一个位置的命令。")]),a._v(" "),s("p",[a._v("参考：http://man.linuxde.net/which")])]),a._v(" "),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查找命令的路径")]),a._v("\n")])])]),s("p",[a._v("说明：which 是根据使用者所配置的 PATH 变量内的目录去搜寻可运行档的！所以，不同的 PATH 配置内容所找到的命令当然不一样的！")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# which cd")]),a._v("\ncd: shell built-in "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v("\n")])])]),s("p",[a._v("cd 这个常用的命令竟然找不到啊！为什么呢？这是因为 cd 是 bash 内建的命令！但是 which 默认是找 PATH 内所规范的目录，所以当然一定找不到的！")]),a._v(" "),s("h3",{attrs:{id:"_2-5-whereis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-whereis"}},[a._v("#")]),a._v(" 2.5. whereis")]),a._v(" "),s("blockquote",[s("p",[a._v("whereis 命令用来定位指令的二进制程序、源代码文件和 man 手册页等相关文件的路径。")]),a._v(" "),s("p",[a._v("whereis 命令只能用于程序名的搜索，而且只搜索二进制文件（参数-b）、man 说明文件（参数-m）和源代码文件（参数-s）。如果省略参数，则返回所有信息。")]),a._v(" "),s("p",[a._v("参考：http://man.linuxde.net/whereis")])]),a._v(" "),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("whereis")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将相关的文件都查找出来")]),a._v("\n")])])]),s("h3",{attrs:{id:"_2-6-man"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-man"}},[a._v("#")]),a._v(" 2.6. man")]),a._v(" "),s("blockquote",[s("p",[a._v("man 命令是 Linux 下的帮助指令，通过 man 指令可以查看 Linux 中的指令帮助、配置文件帮助和编程帮助等信息。")]),a._v(" "),s("p",[a._v("参考：http://man.linuxde.net/man")])]),a._v(" "),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("man")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看 date 命令的帮助手册")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("man")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("printf")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看 printf 命令的帮助手册中的第 3 类")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("man")]),a._v(" -k keyword "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 根据命令中部分关键字来查询命令")]),a._v("\n")])])]),s("h4",{attrs:{id:"_2-6-1-man-要点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-1-man-要点"}},[a._v("#")]),a._v(" 2.6.1. man 要点")]),a._v(" "),s("p",[a._v("在 man 的帮助手册中，可以使用 page up 和 page down 来上下翻页。")]),a._v(" "),s("p",[a._v("man 的帮助手册中，将帮助文档分为了 9 个类别，对于有的关键字可能存在多个类别中， 我们就需要指定特定的类别来查看；（一般我们查询 bash 命令，归类在 1 类中）。")]),a._v(" "),s("p",[a._v("man 页面的分类(常用的是分类 1 和分类 3)：")]),a._v(" "),s("ol",[s("li",[a._v("可执行程序或 shell 命令")]),a._v(" "),s("li",[a._v("系统调用(内核提供的函数)")]),a._v(" "),s("li",[a._v("库调用(程序库中的函数)")]),a._v(" "),s("li",[a._v("特殊文件(通常位于 /dev)")]),a._v(" "),s("li",[a._v("文件格式和规范，如 /etc/passwd")]),a._v(" "),s("li",[a._v("游戏")]),a._v(" "),s("li",[a._v("杂项(包括宏包和规范，如 man(7)，groff(7))")]),a._v(" "),s("li",[a._v("系统管理命令(通常只针对 root 用户)")]),a._v(" "),s("li",[a._v("内核例程 [非标准]")])]),a._v(" "),s("p",[a._v("前面说到使用 whatis 会显示命令所在的具体的文档类别，我们学习如何使用它")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ whatis "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("printf")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("printf")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" - "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("format")]),a._v(" and print data\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("printf")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("1p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" - "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("write")]),a._v(" formatted output\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("printf")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" - formatted output conversion\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("printf")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("3p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" - print formatted output\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("printf")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("builtins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" - "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" built-in commands, see bash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("我们看到 printf 在分类 1 和分类 3 中都有；分类 1 中的页面是命令操作及可执行文件的帮助；而 3 是常用函数库说明；如果我们想看的是 C 语言中 printf 的用法，可以指定查看分类 3 的帮助：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("man")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("printf")]),a._v("\n")])])]),s("h2",{attrs:{id:"_3-参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-参考资料"}},[a._v("#")]),a._v(" 3. 参考资料")]),a._v(" "),s("p",[a._v("https://linuxtools-rst.readthedocs.io/zh_CN/latest/base/01_use_man.html")])])}),[],!1,null,null,null);t.default=e.exports}}]);