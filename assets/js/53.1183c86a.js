(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{518:function(r,t,e){"use strict";e.r(t);var a=e(14),s=Object(a.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"fastdfs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fastdfs"}},[r._v("#")]),r._v(" FastDFS")]),r._v(" "),e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[r._v("#")]),r._v(" 简介")]),r._v(" "),e("p",[r._v("FastDFS 是一个开源的轻量级分布式文件系统，它对文件进行管理，功能包括：文件存储、文件同步、文件访问（文件上传、文件下载）等，解决了大容量存储和负载均衡的问题。特别适合以文件为载体的在线服务，如相册网站、视频网站等等。\nFastDFS 为互联网量身定制，充分考虑了冗余备份、负载均衡、线性扩容等机制，并注重高可用、高性能等指标，使用 FastDFS 很容易搭建一套高性能的文件服务器集群提供文件上传、下载等服务。")]),r._v(" "),e("h2",{attrs:{id:"概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[r._v("#")]),r._v(" 概念")]),r._v(" "),e("p",[r._v("FastDFS 服务端有三个角色：跟踪服务器（tracker server）、存储服务器（storage server）和客户端（client）。")]),r._v(" "),e("p",[e("strong",[r._v("tracker server")]),r._v("：跟踪服务器，主要做调度工作，起负载均衡的作用。在内存中记录集群中所有存储组和存储服务器的状态信息，是客户端和数据服务器交互的枢纽。相比 GFS 中的 master 更为精简，不记录文件索引信息，占用的内存量很少。")]),r._v(" "),e("p",[r._v("Tracker 是 FastDFS 的协调者，负责管理所有的 storage server 和 group，每个 storage 在启动后会连接 Tracker，告知自己所属的 group 等信息，并保持周期性的心跳，tracker 根据 storage 的心跳信息，建立 group==>[storage server list]的映射表。")]),r._v(" "),e("p",[r._v("Tracker 需要管理的元信息很少，会全部存储在内存中；另外 tracker 上的元信息都是由 storage 汇报的信息生成的，本身不需要持久化任何数据，这样使得 tracker 非常容易扩展，直接增加 tracker 机器即可扩展为 tracker cluster 来服务，cluster 里每个 tracker 之间是完全对等的，所有的 tracker 都接受 stroage 的心跳信息，生成元数据信息来提供读写服务。")]),r._v(" "),e("p",[e("strong",[r._v("storage server")]),r._v("：存储服务器（又称：存储节点或数据服务器），文件和文件属性（meta data）都保存到存储服务器上。Storage server 直接利用 OS 的文件系统调用管理文件。")]),r._v(" "),e("p",[r._v("Storage server（后简称 storage）以组（卷，group 或 volume）为单位组织，一个 group 内包含多台 storage 机器，数据互为备份，存储空间以 group 内容量最小的 storage 为准，所以建议 group 内的多个 storage 尽量配置相同，以免造成存储空间的浪费。")]),r._v(" "),e("p",[r._v("以 group 为单位组织存储能方便的进行应用隔离、负载均衡、副本数定制（group 内 storage server 数量即为该 group 的副本数），比如将不同应用数据存到不同的 group 就能隔离应用数据，同时还可根据应用的访问特性来将应用分配到不同的 group 来做负载均衡；缺点是 group 的容量受单机存储容量的限制，同时当 group 内有机器坏掉时，数据恢复只能依赖 group 内地其他机器，使得恢复时间会很长。")]),r._v(" "),e("p",[r._v("group 内每个 storage 的存储依赖于本地文件系统，storage 可配置多个数据存储目录，比如有 10 块磁盘，分别挂载在"),e("code",[r._v("/data/disk1-/data/disk10")]),r._v("，则可将这 10 个目录都配置为 storage 的数据存储目录。")]),r._v(" "),e("p",[r._v("storage 接受到写文件请求时，会根据配置好的规则（后面会介绍），选择其中一个存储目录来存储文件。为了避免单个目录下的文件数太多，在 storage 第一次启动时，会在每个数据存储目录里创建 2 级子目录，每级 256 个，总共 65536 个文件，新写的文件会以 hash 的方式被路由到其中某个子目录下，然后将文件数据直接作为一个本地文件存储到该目录中。")]),r._v(" "),e("p",[e("strong",[r._v("client")]),r._v("：客户端，作为业务请求的发起方，通过专有接口，使用 TCP/IP 协议与跟踪器服务器或存储节点进行数据交互。FastDFS 向使用者提供基本文件访问接口，比如 upload、download、append、delete 等，以客户端库的方式提供给用户使用。")]),r._v(" "),e("p",[r._v("另外两个概念：")]),r._v(" "),e("p",[e("strong",[r._v("group")]),r._v(" ：组， 也可称为卷。 同组内服务器上的文件是完全相同的 ，同一组内的 storage server 之间是对等的， 文件上传、 删除等操作可以在任意一台 storage server 上进行 。")]),r._v(" "),e("p",[e("strong",[r._v("meta data")]),r._v(" ：文件相关属性，键值对（ Key Value Pair） 方式，如：width=1024,heigth=768 。")]),r._v(" "),e("p",[e("img",{attrs:{src:"http://www.ityouknow.com/assets/images/2018/fastdfs/fastdfs_arch.png",alt:"img"}})]),r._v(" "),e("p",[r._v("Tracker 相当于 FastDFS 的大脑，不论是上传还是下载都是通过 tracker 来分配资源；客户端一般可以使用 ngnix 等静态服务器来调用或者做一部分的缓存；存储服务器内部分为卷（或者叫做组），卷于卷之间是平行的关系，可以根据资源的使用情况随时增加，卷内服务器文件相互同步备份，以达到容灾的目的。")]),r._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[r._v("#")]),r._v(" 参考资料")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/happyfish100/fastdfs",target:"_blank",rel:"noopener noreferrer"}},[r._v("FastDFS 官方 Github"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/happyfish100/fastdfs/wiki",target:"_blank",rel:"noopener noreferrer"}},[r._v("FastDFS 官方 wiki"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/ityouknow/p/8240976.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("分布式文件系统 FastDFS 详解"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);