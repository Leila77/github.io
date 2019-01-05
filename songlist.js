/**
 * 歌单内容：歌名-歌手\
 * \backslash只是为了让string能分行显示，实际上要用.split('	');注意引号里是有东西的
 * 保险起见用console.log之后从console里复制那个看不到的字符出来~！
 */



	var originalList = "好久不见-陈奕迅\
	春风十里-鹿先森乐队\
	我总是一个人在练习一个人-林宥嘉\
	玫瑰-贰佰\
	爱的就是你-刘佳\
	第几个100天-林俊杰\
	这就是爱-张杰\
	龙战骑士-周杰伦\
	我落泪情绪零碎-周杰伦\
	来日方长-薛之谦&黄龄\
	鞋子特大号-周杰伦\
	违背的青春-薛之谦\
	火力全开-王力宏\
	时光机-五月天\
	暗号-周杰伦\
	十万毫升泪水-蔡健雅\
	路人甲-王北车\
	美错-王菲\
	言不由衷-徐佳莹\
	Mr.Man-满江\
	归来-满江\
	疤歌-胡彦斌\
	洋葱-杨宗纬\
	断了的弦-周杰伦\
	彩虹天堂-刘耕宏\
	爱情悬崖-周杰伦\
	爱一个人好难-苏永康\
	绝口不提爱你-郑中基\
	别回答-范逸臣\
	天高地厚-信乐团\
	你冷得像风-张学友\
	返老还童-胡彦斌 & Jony J\
	别-薛之谦\
	没离开过-林志炫\
	谢谢你-李代沫\
	一个人-张艺兴\
	蒙娜丽莎的眼泪-林志炫\
	失落沙洲-徐佳莹\
	痒-黄龄\
	安和桥-宋东野\
	烟火-光良\
	寂寞烟火-朱婧\
	自己-许钧\
	会不会突然想起我-曾一鸣\
	有多少爱可以重来-迪克牛仔\
	疑心病-任然\
	耳朵-李荣浩\
	我继续-林俊杰\
	我如此爱你-汪峰\
	明明就-周杰伦\
	三万英尺-迪克牛仔\
	末班车-萧煌奇\
	习惯-光泽\
	害怕-林俊杰\
	如果你爱我-曹轩宾\
	背影-林宥嘉\
	悲歌王-曹格\
	青柠-徐秉龙&桃十五\
	东西-林俊呈\
	拿走了什么-A-Lin\
	男人不该让女人流泪-Big Four\
	中毒-光泽\
	Lemon Tree-林俊杰\
	重来-黄小琥\
	偷走-萧煌奇\
	阍者-简弘亦\
	我知道你很难过-胡彦斌\
	不该-周杰伦&张惠妹\
	听听我说-曾一鸣\
	抛物线-蔡健雅\
	丑角-曹格\
	何必在一起-张杰\
	黑白-方大同\
	爱你等于爱自己-王力宏\
	眼泪-胡彦斌\
	喜欢寂寞-苏打绿\
	一个人去巴黎-董又霖\
	燃点-胡夏\
	焦糖玛奇朵-苟瀚中\
	淡出少年-周品\
	蒙面-梁栋江\
	对他说我愿意-虞雨舟\
	昨日青空-尤长靖\
	一念之间-陶喆\
	不染-毛不易\
	雪落下的声音-陆虎\
	当每颗星-五月天\
	一点点-周杰伦\
	高手-胡彦斌\
	莫妮卡-柳爽\
	我不确定-胡彦斌\
	红墙叹-胡夏\
	好像从前-王北车\
	宝藏男友-胡彦斌\
	你给我听好-陈奕迅\
	来自天堂的魔鬼-邓紫棋\
	听听我说-曾一鸣\
	寻-华晨宇\
	爱的飞行日记-周杰伦\
	半茶-曾一鸣\
	寂寞的夜-光泽\
	我对自己开了一枪-佛跳墙\
	沙漠骆驼-展展与罗罗\
	No Luv-ODDope\
	啷个哩个啷-鹏泊\
	盛夏光年-五月天\
	双截棍-华晨宇\
	很想很想说再见-侧田\
	小宇-张震岳\
	墙角-苟瀚中\
	童言无忌-王以太\
	步步-五月天\
	我等到花儿也谢了-张学友\
	左边-苏打绿\
	夜空中最亮的星-逃跑计划\
	可不可以-张紫豪\
	地球之盐-华晨宇\
	年少有为-李荣浩\
	诱-林宥嘉\
	寂寞寂寞就好-田馥甄\
	卡西莫多的礼物-华晨宇\
	哑巴-赵钶\
	漂向北方-黄明志/王力宏\
	如果没有你-莫文蔚\
	王牌冤家-李荣浩\
	模特-李荣浩\
	巨鹿-华晨宇\
	伟大的渺小-林俊杰\
	你不在-王力宏\
	Forever Love-王力宏\
	一生的爱-林俊杰\
	信仰-张信哲\
	我还能爱谁-许志安\
	Can You Feel My World-王力宏\
	大笨钟-周杰伦\
	致姗姗来迟的你-林宥嘉\
	转眼-五月天\
	寒鸦少年-华晨宇\
	目不转睛-王以太\
	花海-周杰伦\
	红尘客栈-周杰伦\
	情歌-梁静茹\
	余波荡漾-徐暐翔\
	如烟-五月天\
	我害怕-薛之谦\
	你还怕大雨吗-周柏豪\
	就让这首歌-张震岳\
	高贵与丑-刘凤瑶\
	寂寞先生-曹格\
	诺亚方舟-五月天\
	味道-胡彦斌\
	海阔天空-信乐团\
	秋意浓-张学友\
	忘词-五月天\
	你要的爱-戴佩妮\
	Let you go-牛奶咖啡\
	光年之外-邓紫棋\
	长镜头-杨宗纬\
	无问-毛不易\
	明月天涯-五音JW\
	以父之名-周杰伦\
	止战之殇-周杰伦\
	唐人-孙子涵\
	别回答-酷爱乐团\
	云烟成雨-房东的猫\
	那就这样吧-动力火车\
	凄美地-郭顶\
	我不愿让你一个人-五月天\
	我以为-品冠\
	握不住的他-林俊杰\
	残废-吴克群\
	临时演员-黄渤\
	以后别做朋友-周兴哲\
	天后-陈势安\
	意外-薛之谦\
	天黑-阿杜\
	拥有-李泉\
	美妙生活-林宥嘉\
	不屑纪念-吴克群\
	神通-曾一鸣\
	心酸-林宥嘉\
	星晴-周杰伦\
	I Like You-满舒克\
	差一点-阿杜\
	寄生-吴克群\
	好好-五月天\
	星空-五月天\
	拥抱-五月天\
	少年他的奇幻漂流-五月天\
	你不像她-南拳妈妈\
	王子的新衣-萧敬腾\
	离开地球表面-五月天\
	我很想爱她-林俊杰\
	剪云者-林俊杰\
	鱼仔-卢广仲\
	肆无忌惮-薛之谦\
	圣所-林俊杰\
	小瓶子-林俊杰\
	往后余生-马良\
	量身定做-张杰\
	火烧的寂寞-信\
	困兽之斗-周杰伦\
	兰花指-阿里郎\
	寄生离群-李祥祥\
	暗香-沙宝亮\
	疑心病-曾昱嘉\
	天梯-C AllStar\
	落叶归根-王力宏\
	爱就一个字-张信哲\
	安静-周杰伦\
	最美的期待-周笔畅\
	斑马斑马-宋冬野\
	幻听-许嵩\
	云长-赵钶\
	撒野-欸61\
	匆匆那年-王菲\
	夜夜夜夜-齐秦\
	Lemon-米津玄师\
	阿楚姑娘-袁娅维\
	背叛-曹格\
	横冲直撞-华晨宇\
	幸运大门-郭顶\
	你要的全拿走-胡彦斌\
	春泥-庾澄庆\
	让我留在你身边-陈奕迅\
	野子-苏运莹\
	我们的歌-王力宏\
	简简单单-林俊杰\
	答应不爱你-郑中基\
	她来听我的演唱会-张学友\
	病变-Cubi/Fi9/Younglif\
	我真的受伤了-张学友\
	一次就好-杨宗纬\
	无法克制-林俊杰\
	爱你没差-周杰伦\
	浪费-林宥嘉\
	从前慢-刘胡轶\
	我们的明天-鹿晗\
	复制人-萧敬腾\
	男孩-梁博\
	对不起我还爱你-回音哥\
	爱情废柴-周杰伦\
	阴天快乐-陈奕迅\
	残酷月光-林宥嘉\
	雨下一整晚-周杰伦\
	我又想你了-陈信喆\
	会长大的幸福-Tank\
	回到过去-周杰伦\
	爱很简单-陶喆\
	人质-杨宗纬\
	默-那英\
	说散就散-JC\
	灵魂的共鸣-林俊杰\
	海啸-庾澄庆\
	七里香-周杰伦\
	婚礼的祝福-陈奕迅\
	飞云之下-林俊杰&韩红\
	对不起谢谢-陈奕迅\
	像风一样-薛之谦\
	你就不要想起我-田馥甄\
	突然好想你-五月天\
	血腥爱情故事-张惠妹\
	如果不是-杨炅翰\
	黄昏-周传雄\
	仓颉-五月天\
	非你莫属-Tank\
	专属天使-Tank\
	黑色柳丁-陶喆\
	他夏了夏天-苏打绿\
	笑忘书-王菲\
	流着泪说分手-金志文\
	听-张杰\
	发如雪-周杰伦\
	我不配-周杰伦\
	眼鼻口-Taeyang太阳\
	Kiss goodbye-王力宏\
	黑色幽默-周杰伦\
	你要的不是我-林俊杰\
	有没有-薛之谦\
	门没锁-品冠\
	就是爱你-陶喆\
	手心的蔷薇-林俊杰&邓紫棋\
	假面-光泽\
	If You-Big Bang\
	不存在的情人-林俊杰\
	不要说话-陈奕迅\
	夜访吸血鬼-五月天\
	手写的从前-周杰伦\
	杀手-林俊杰\
	天真有邪-林宥嘉\
	后来的我们-五月天\
	我我-石常磊\
	我们-陈奕迅\
	圣诞结-陈奕迅\
	等一个人-林芯仪\
	异类-华晨宇\
	和你-余佳运\
	你的配角-回音哥\
	转动-林俊杰\
	翅膀-林俊杰\
	裂心-王力宏\
	还爱着你-郭采洁\
	新地球-林俊杰\
	浪漫手机-周杰伦\
	搁浅-周杰伦\
	爱你-陈芳语\
	国王与乞丐-华晨宇\
	陷阱-王北车\
	陪你度过漫长岁月-陈奕迅\
	很奇怪我爱你-张杰\
	思念是一种病-张震岳\
	三生三世-张杰\
	天下-张杰\
	趁早-张宇\
	菊花台-周杰伦\
	爱的鼓励-林俊杰\
	迷迭香-周杰伦\
	山海-华晨宇\
	全世界失眠-范玮琪\
	情歌两三首-郭顶\
	K歌之王-陈奕迅\
	到不了-李代沫\
	每个人都会-方大同\
	今天你要嫁给我-陶喆\
	找自己-陶喆\
	记得-林俊杰\
	我-张国荣\
	浪漫血液-林俊杰\
	最长的电影-周杰伦\
	泡沫-邓紫棋\
	心墙-林俊杰\
	成都-赵雷\
	学不会-林俊杰\
	背对背拥抱-林俊杰\
	关键词-林俊杰\
	曹操-林俊杰\
	黑暗骑士-林俊杰\
	小酒窝-林俊杰\
	因你而在-林俊杰\
	她说-林俊杰\
	爱笑的眼睛-林俊杰\
	黑夜问白天-林俊杰\
	可惜没如果-林俊杰\
	那些你很冒险的梦-林俊杰\
	醉赤壁-林俊杰\
	修炼爱情-林俊杰\
	输了你赢了世界又如何-林俊杰\
	Always online-林俊杰\
	普通朋友-陶喆\
	吻得太逼真-张敬轩\
	如果分开我也爱你-关喆\
	造物者-华晨宇\
	世界末日-周杰伦\
	玫瑰花的葬礼-许嵩\
	夜曲-周杰伦\
	依然爱你-王力宏\
	Love Song-方大同\
	I AM-林俊杰\
	死结-李玖哲\
	其实-薛之谦\
	When I was your man-Bruno Mars\
	偏爱-张芸京\
	吃泡面-曹寅\
	说谎-林宥嘉\
	全世界谁倾听你-林宥嘉\
	傻子-林宥嘉\
	江南-林俊杰\
	三天两夜-张学友\
	Love U U-林俊杰\
	生生-林俊杰\
	傻瓜-温岚\
	浮生-刘莱斯\
	成全-刘若英\
	国境四方-RaJor\
	讲真的-曾惜\
	晴天-周杰伦\
	梦一场-那英\
	百万个吻-陈明真\
	我是你的谁-黄立行\
	烟火里的尘埃-华晨宇\
	Here We Are-华晨宇\
	我的滑板鞋-华晨宇\
	我们都是孤独的-华晨宇\
	平凡之路-华晨宇\
	齐天大圣-华晨宇\
	我管你-华晨宇\
	微光-华晨宇\
	蜉蝣-华晨宇\
	无聊人-华晨宇\
	智商二五零-华晨宇\
	代号魂斗罗-华晨宇\
	爱情转移-陈奕迅\
	孤独患者-陈奕迅\
	不为谁而作的歌-林俊杰\
	不潮不用花钱-林俊杰\
	第一次-光良\
	当你-林俊杰\
	芊芊-回音哥\
	故梦-橙翼\
	大浪淘沙-玄觞\
	忘川-小曲儿\
	最美的太阳-张杰\
	知足-五月天\
	最近-李圣杰\
	海芋恋-萧敬腾\
	自由-张震岳\
	追梦赤子心-GALA乐队\
	一个人一座城-曹寅\
	演员-薛之谦\
	丑八怪-薛之谦\
	永不失联的爱-周兴哲\
	绅士-薛之谦\
	易燃易爆炸-陈粒\
	想自由-林宥嘉\
	喜剧之王-李荣浩\
	Talking to the moon-Bruno Mars\
	学猫叫-小峰峰\
	想你的夜-关喆\
	需要人陪-王力宏\
	想太多-李玖哲\
	夏洛特烦恼-金志文\
	我好想你-苏打绿\
	我喜欢上你时的内心活动-陈绮贞\
	悟空-戴荃\
	我想大声告诉你-樊凡\
	我们的爱-F.I.R\
	王妃-萧敬腾\
	我的歌声里-曲婉婷\
	停格-蔡健雅\
	特别的人-方大同\
	体面-于文文\
	告白气球-周杰伦\
	太早-刘允乐\
	说好的幸福呢-周杰伦\
	三人游-方大同\
	神秘嘉宾-林宥嘉\
	十年-陈奕迅\
	死了都要爱-信乐团\
	上瘾-光泽\
	水星记-郭顶\
	算什么男人-周杰伦\
	谁-廖俊涛\
	如果你能感同我的身受-BC221\
	其实都没有-杨宗纬\
	齐天-华晨宇\
	我好像在哪里见过你-薛之谦\
	男人KTV-胡彦斌\
	你好不好？-周兴哲\
	你不是真正的快乐-五月天\
	你的背包-陈奕迅\
	内疚-陈奕迅\
	你不知道的事-王力宏\
	摩天大楼-薛之谦\
	慢慢-张学友\
	慢慢喜欢你-莫文蔚\
	骆驼-薛之谦\
	恋爱ing-五月天\
	李白-李荣浩\
	离人愁-李袁杰\
	离人-林志炫\
	夸张-周品\
	可能否-小木雅\
	空白格-蔡健雅\
	离歌-信乐团\
	空心-光泽\
	空空如也-任然\
	开到荼蘼-王菲\
	骄傲的少年-南征北战\
	虎口脱险-老狼\
	会痛的石头-萧敬腾\
	动物世界-薛之谦\
	过火-张信哲\
	第三人称-HUSH\
	海绵宝宝-回音哥\
	出卖-那英\
	宠爱-TFBOYS\
	哑巴-薛之谦\
	不搭-李荣浩\
	飙高音-黄明志\
	不找了-郭旭\
	不将就-李荣浩\
	不等你-苟乃鹏\
	被驯服的象-蔡健雅\
	保留-郭顶\
	俘虏-光泽\
	阿飞的小蝴蝶-萧敬腾\
	天空之城-李志\
	戒烟-李荣浩\
	刚刚好-薛之谦\
	吻得太逼真-张敬轩\
	我怀念的-孙燕姿\
	稻香-周杰伦\
	不能说的秘密-周杰伦\
	关不掉的月光-庾澄庆\
	爱我还是他-陶喆\
	来不及-刘瑞琦\
	心中的日月-王力宏\
	茉莉雨-林俊杰\
	会说话的哑巴-李代沫\
	我可以-蔡旻佑\
	别怕我伤心-张信哲\
	爱如潮水-张信哲\
	西界-林俊杰\
	遗憾-李代沫\
	阳光宅男-周杰伦\
	说了再见-周杰伦\
	不见不念-回音哥\
	伤心的人别听慢歌-五月天\
	牛仔很忙-周杰伦";