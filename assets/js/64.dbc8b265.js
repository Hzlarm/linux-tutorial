(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{528:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"svn-运维"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#svn-运维"}},[s._v("#")]),s._v(" Svn 运维")]),s._v(" "),t("blockquote",[t("p",[s._v("Svn 是 Subversion 的简称，是一个开放源代码的版本控制系统，它采用了分支管理系统。")]),s._v(" "),t("p",[s._v("本文目的在于记录 svn 的安装、配置、使用。")])]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("h3",{attrs:{id:"安装-svn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-svn"}},[s._v("#")]),s._v(" 安装 svn")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y subversion\n")])])]),t("h3",{attrs:{id:"创建-svn-仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-svn-仓库"}},[s._v("#")]),s._v(" 创建 svn 仓库")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /share/svn\n$ svnadmin create /share/svn\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /share/svn\nconf  db  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v("  hooks  locks  README.txt\n")])])]),t("p",[s._v("在 conf 目录下有三个重要的配置文件")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("authz")]),s._v(" - 是权限控制文件")]),s._v(" "),t("li",[t("code",[s._v("passwd")]),s._v(" - 是帐号密码文件")]),s._v(" "),t("li",[t("code",[s._v("svnserve.conf")]),s._v(" - 是 SVN 服务配置文件")])]),s._v(" "),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("h3",{attrs:{id:"配置-svnserve-conf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-svnserve-conf"}},[s._v("#")]),s._v(" 配置 svnserve.conf")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /share/svn/conf/svnserve.conf\n")])])]),t("p",[s._v("打开下面的 5 个注释")]),s._v(" "),t("div",{staticClass:"language-ini extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("anon-access")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" read      #匿名用户可读")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("auth-access")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" write     #授权用户可写")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("password-db")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" passwd    #使用哪个文件作为账号文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("authz-db")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" authz        #使用哪个文件作为权限文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("realm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" /share/svn      # 认证空间名，版本库所在目录")]),s._v("\n")])])]),t("h3",{attrs:{id:"配置-passwd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-passwd"}},[s._v("#")]),s._v(" 配置 passwd")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /share/svn/conf/passwd\n")])])]),t("p",[s._v("添加新用户的用户名/密码如下：")]),s._v(" "),t("div",{staticClass:"language-ini extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("[users]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("user1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" 123456")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("user2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" 123456")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("user3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" 123456")]),s._v("\n")])])]),t("h3",{attrs:{id:"配置-authz"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-authz"}},[s._v("#")]),s._v(" 配置 authz")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /share/svn/conf/authz\n")])])]),t("p",[s._v("指定用户的访问权限（"),t("code",[s._v("r")]),s._v(" 为读权限；"),t("code",[s._v("w")]),s._v(" 为写权限）：")]),s._v(" "),t("div",{staticClass:"language-ini extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("[/]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("user1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" rw")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("user2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" rw")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("user3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" rw")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")])]),s._v("\n")])])]),t("h2",{attrs:{id:"服务器管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器管理"}},[s._v("#")]),s._v(" 服务器管理")]),s._v(" "),t("h3",{attrs:{id:"启动关闭-svn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动关闭-svn"}},[s._v("#")]),s._v(" 启动关闭 svn")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ svnserve -d -r /share/svn "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 svn")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("killall")]),s._v(" svnserve "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭 svn")]),s._v("\n")])])]),t("h3",{attrs:{id:"开机自启动-svn-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开机自启动-svn-方法"}},[s._v("#")]),s._v(" 开机自启动 svn 方法")]),s._v(" "),t("p",[s._v("安装好 svn 服务后，默认是没有随系统启动自动启动的，而一般我们有要求 svn 服务稳定持续的提供服务。所以，有必要配置开机自启动 svn 服务。")]),s._v(" "),t("h4",{attrs:{id:"centos7-以前"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos7-以前"}},[s._v("#")]),s._v(" Centos7 以前")]),s._v(" "),t("p",[s._v("编辑 "),t("code",[s._v("/etc/rc.d/rc.local")]),s._v(" 文件：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/rc.d/rc.local\n")])])]),t("p",[s._v("输入以下内容：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机自动启动 svn，默认端口是 3690")]),s._v("\n$ /usr/bin/svnserve -d -r /share/svn --listen-port "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3690")]),s._v("\n")])])]),t("p",[s._v("注意：")]),s._v(" "),t("p",[s._v("我们在用终端操作的时候，可以直接使用以下命令启动 SVN："),t("code",[s._v("svnserve -d -r /share/svn")]),s._v("，但是在 "),t("code",[s._v("/etc/rc.d/rc.local")]),s._v(" 文件中必须写上完整的路径！")]),s._v(" "),t("p",[s._v("如果不知道 svnserve 命令安装在哪儿，可以使用 whereis svnserve 查找。")]),s._v(" "),t("h4",{attrs:{id:"centos7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos7"}},[s._v("#")]),s._v(" Centos7")]),s._v(" "),t("p",[s._v("CentOS 7 中的 "),t("code",[s._v("/etc/rc.d/rc.local")]),s._v(" 是没有执行权限的，系统建议创建 "),t("code",[s._v("systemd service")]),s._v(" 启动服务。")]),s._v(" "),t("p",[s._v("找到 svn 的 service 配置文件 "),t("code",[s._v("/etc/sysconfig/svnserve")]),s._v(" 编辑配置文件")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysconfig/svnserve\n")])])]),t("p",[s._v("将 "),t("code",[s._v('OPTIONS="-r /var/svn"')]),s._v(" 改为 svn 版本库存放的目录，:wq 保存退出。")]),s._v(" "),t("p",[s._v("执行 "),t("code",[s._v("systemctl enable svnserve.service")])]),s._v(" "),t("p",[s._v("重启服务器后，执行 "),t("code",[s._v("ps -ef | grep svn")]),s._v(" 应该可以看到 svn 服务的进程已经启动。")]),s._v(" "),t("ul",[t("li",[s._v("启动一个服务 - systemctl start svnserve.service")]),s._v(" "),t("li",[s._v("关闭一个服务 - systemctl stop svnserve.service")]),s._v(" "),t("li",[s._v("重启一个服务 - systemctl restart svnserve.service")]),s._v(" "),t("li",[s._v("显示一个服务的状态 - systemctl status svnserve.service")]),s._v(" "),t("li",[s._v("在开机时启用一个服务 - systemctl enable svnserve.service")]),s._v(" "),t("li",[s._v("在开机时禁用一个服务 - systemctl disable svnserve.service")])]),s._v(" "),t("h2",{attrs:{id:"客户端使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端使用"}},[s._v("#")]),s._v(" 客户端使用")]),s._v(" "),t("p",[s._v("进入 "),t("a",{attrs:{href:"https://tortoisesvn.net/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("svn 官方下载地址"),t("OutboundLink")],1),s._v("，选择合适的版本，下载并安装。")]),s._v(" "),t("p",[s._v("新建一个目录，然后打开鼠标右键菜单，选择 "),t("strong",[s._v("SVN Checkout")]),s._v("。")]),s._v(" "),t("p",[s._v("在新的窗口，输入地址 "),t("code",[s._v("svn://<你的 IP>")]),s._v(" 即可，不出意外输入用户名和密码就能连接成功了（这里的用户、密码必须在 passwd 配置文件的清单中）。默认端口 3690，如果你修改了端口，那么要记得加上端口号。如下图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20190129175443.png",alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("ul",[t("li",[s._v("https://www.cnblogs.com/liuxianan/p/linux_install_svn_server.html")]),s._v(" "),t("li",[s._v("https://blog.csdn.net/testcs_dn/article/details/45395645")]),s._v(" "),t("li",[s._v("https://www.cnblogs.com/moxiaoan/p/5683743.html")]),s._v(" "),t("li",[s._v("https://blog.csdn.net/realghost/article/details/52396648")])])])}),[],!1,null,null,null);a.default=n.exports}}]);