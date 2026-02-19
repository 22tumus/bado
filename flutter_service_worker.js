'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".dart_tool/dartpad/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/package_config.json": "dde01b6cc1653fe7415cbb7a7917c221",
".dart_tool/package_config_subset": "9d591de5e73a5f80320250ab3809c754",
".dart_tool/version": "7faad6620e2916d60da5c5c247db1615",
".git/COMMIT_EDITMSG": "ce2e65a73b3157429c6c81db051458a6",
".git/config": "d122331e9cfd96fe8d818e3284cf4c39",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4f81feb2038c21fab4b1be7f79c362d8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f9adf3021a6e4cacda70e195a249ff9f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dc7fd45b609f9783bf71cf745afeb3a9",
".git/logs/refs/heads/main": "67bc570bae789e1c6069570087c42221",
".git/logs/refs/remotes/origin/main": "28f610c7ecfc778ec3181d408d77585f",
".git/objects/01/3dde907970cf83496893620753c4d19f028e30": "eac7b6cf8d2d3702db7a49722ab55a39",
".git/objects/03/1b1d46817261c4bfd9594c07d9f3bd54fb83b0": "e29ee87523cb4878e033716d02d4f954",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0a/17b2d9bc975c730ee7a1c3562e0b2a2623f648": "685ae4ab86ae467420acdc45f549e13e",
".git/objects/14/409f9bbb084128fb938d01a5f1613f15a028b8": "b6b359d3892ceaa783203a6ddc6b586c",
".git/objects/1a/448b662122006c53610a74a634fc170526ca3d": "f09511f6a831df27e5a2173a805769f7",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/21/b1816bb825ed1c21049d79e6d1ef1019e7bbb5": "b9e57307ecda7f069badb96cd4ba4a0c",
".git/objects/24/d9eb95263c506714eae5907d46d3c1e2229c7e": "1fed1d6164eff58a1d5f809f9bd40ad5",
".git/objects/2f/0dd84cb2fcd407ba40f92a0c66d478745626c6": "bcb8e04f92480d05e3cdd702fea9af57",
".git/objects/30/616e145cb2e2391b75960c60c462ac6b41a6b0": "8a3332c67d5d8ac50d1667b518472773",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/dc95db633586a14034f62ee016a1d034335103": "b30b3b9309e68d058450ad2ef171e305",
".git/objects/39/86501558466ad91c2e8583f31dbba29340bc7d": "f1b6a09dbbf1386cee28b26142349083",
".git/objects/3b/babee7ca32a9f5b9e4bed6f1d2deb84f60001d": "84b463769423312098b354fd65f9d76b",
".git/objects/3f/496b1ed2031d44a1acb9ef951742d69c5164a7": "75f8ca94b18ba17a5f6fe0832e50dc85",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/826429a48beb2e30ce0645b9c606d264b881f1": "25ee643b800dcb63105feefab65ab3fe",
".git/objects/4a/6109187ab6b32ab79f6a78f3a6144ea8f9881d": "8000db520fcc2d586796fac4e5d1df4c",
".git/objects/50/373f1da659f762bac0747dfc2e19bfbc9f5426": "3993dc2565ac0e1227db45d755689bc8",
".git/objects/51/2a320afe272d702093ee6325b76f91f3d0969a": "c591e9bb03c496d1dc404e8ea579c360",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/54/133621fa5bb2336e5a99d5f6c4a9a523eb18ef": "45b888c1872f1aa4fa011a5d5d1fab6a",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/c76e747e34d945b7ef9a86b60522fcc6188fdb": "f8c4bb7e8b2816c487e62173cfcd3ca3",
".git/objects/5d/ef29de8d60d661fdbae09785786084bee26e4c": "34d3312cd00eeea10f66200b16a51f05",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/61/dfe5d8dac23153056127a06d5a5b7a271732d2": "cea640a930459dc4acb90a2902b92b07",
".git/objects/62/653e163359b34a8bd9228a7dcb12ce5a033cf5": "ca915d54be24cd7d8fe63bb7f9ccca3f",
".git/objects/65/ce3c267546993876c4958f3c8e0f09b62e5b4c": "be1b3c92e7c3394e46605a402408db5b",
".git/objects/66/8a825e18ed645db577af0f1667e7444bf8dd2f": "41daa83f7945ff3f2c247f059f6c0211",
".git/objects/67/fe1d084f6b14224d9e5938a156990cd912d14a": "efb84e374c6d3e562fda3a9649f80e0d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/72/2fc0d267d639eee0b1ae8ac763a4666cea19a9": "1aea5e98d428f3f7631885db6d0e43b1",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/72/7133068da79b383d833a2f207e4444ef0f46c3": "54d1dba6d57f8e95247beed955f0f05a",
".git/objects/72/7a26b99be6211cd33ec3fb701d9fbd33b23c5f": "d931e70e239eb18888ec237feaed4b93",
".git/objects/74/b7de4244d66f3eddc76f5c7a7032d12a78623e": "a7705606bc5b8d3a27f1841843f81707",
".git/objects/77/a4ad5a8e9bd3681c49a0235d43c0a39133c356": "05335a5796225ce74e75c8f49f362be7",
".git/objects/7a/8b5ed120484bc256b854df5ff1c78ff9393655": "fd2e072b97640c359af0d122882d6c07",
".git/objects/7e/dec45b5775a5b96c302fb6b5c7b8ddeb6d63ab": "75840b732c1796dac3b9bd0cd2422595",
".git/objects/83/14af42ed9f69a450e4e29bb04f42c6e879d3d6": "95a23c4b38e0f07fd205e835a2125213",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/3c44e229a99224b6a01029498d6b56d2bae5e1": "8ae89013da2210e3a55618df0deef0dd",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/0df65bd8b36e409e810bab5e9287d065a52f39": "aa6c4ed9b3e2756870569b9a4ddd5754",
".git/objects/8d/5f4bd66f87580f14ba480e307751130370229f": "5b314f82db9653e22556ef9f13aaebf8",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/265cfa47e862ccaf05a52d4812364d56a79113": "596da8f4b403331bfdcefe77fff6c06b",
".git/objects/96/4ba1d933963c15782bfb3414af05c4060933f6": "7dfb2867bf6a2296950bb0183173df94",
".git/objects/97/33e14030c9bb7577d02dc79d62db8c821b5e82": "2de122f0a91998eeca4ff32e1230782e",
".git/objects/99/cf25302dd7dde2ff851e5630b2b5e6b34bcfd4": "335c089056b31e98a6a3f03db8f60cc8",
".git/objects/9a/4180d22b5546da7b2fa5487d0b0b92d15df4f6": "5f4d66d8aec0b546b35a10df88e3ccd2",
".git/objects/9b/867143fcc70b08e4fce50936a86511245b3aca": "d5c80e693a5f6bd6873629095e4ed29b",
".git/objects/9c/d4bd67fe164b2e63a633cfaa460495c342286e": "13fa9ebc4770ae1d700d64d709912e00",
".git/objects/9d/a6834009d81b55582051c89cdc99828ae2449f": "05d42f35337453fa10251cd3ee5e943c",
".git/objects/9f/0acea0b38f0f66d9931940f2feb8cb45b36ace": "d91d2899dcf8015707bfdc73afcf16af",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/d07a1a571ace3338ccf57165c9f47ad5714a59": "bf7ae17517dd66fa340797996e521796",
".git/objects/ab/b062f304c4c72d73d3672707b4388f52b6b442": "656170ad14c2be1c93253b069055cb2e",
".git/objects/ac/6bb9861f5ea64e6c03a1dee8be2f4fc887f3c3": "75e7da15ae47fc2fae3fcd95d49c25e5",
".git/objects/ad/d421a65e9872b79d2435706c0bcd129ff08ad2": "dc61075bd9084f339b9e247167025663",
".git/objects/af/55ff988c5b9108e2f908614e578ce5cf8d6a0d": "92137e1a3773abf252271c54699cb086",
".git/objects/b0/17553a7141cdea75046f6032cf110d2c722fe4": "73abb4cc6b1e40ca4a7fe0b1549a295c",
".git/objects/b5/53f2dec395ead80c2ff46855f77aef57417cdc": "3a6a90dba59bc8d9d5a736be4f3597d8",
".git/objects/b6/f2596ec64290c6c8504db1d959c0db6c38b820": "b0913bc17fd7e340daccfbe0de4fe63a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f6379de857531a7d2523ff85fb2cad8359de85": "7c0cca4878092ed00ab1d78739072090",
".git/objects/b8/a95af66d7612e6784e477a8c8b675515e24c6b": "1223009f1777d90c92803520aa84961e",
".git/objects/b9/1369cf4d1397362ba297293840d760867f33e2": "4761ebdcde753d4d68711bbec7978d26",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ee3103167af66d03bb685f9083e4cd80b1a349": "2806e46066986ebb7de979a284a7ab79",
".git/objects/bd/3a6d2a85351e0e9a0418ec75e9364093550629": "66af428fd9cf32a38dfd54c48e78251a",
".git/objects/bd/4d738f82707030ab9936745dfcd26f50708383": "8ca9b0ff2f526f445e82dd863ac5b09a",
".git/objects/c2/b74de888e78da7036546bc0e25b3a4bc28afb5": "138e003f4e7e4e5e5aeb8f07be483d55",
".git/objects/c3/94c77b153009c5ebd61d399dabae662c6ad512": "a466caf1e00696c771f10f37a375fcf1",
".git/objects/cc/8ec177c7a0305ab51fee0b9d79f9e95656f624": "e146249c5e02e7f7769c18efca3e0629",
".git/objects/cc/919b29855aa6af56365e5fb7ee9883692ee971": "1eb3b552f61565a32b5ca366ce47c397",
".git/objects/cc/95134fa6d6f66ac1287a75ac2cae654176d57d": "808a22f2ce556cbdfac0376d223836ea",
".git/objects/d0/cb59388bed82fa8cd3388e25e87755f709e068": "319d5e5def471c8c15e78c0a1c598562",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/afba413fc9b3b11f0ae229786339cca31e9612": "7c96ea6b2385c721bbbf103ea2454633",
".git/objects/d8/acc2e10c5bcd26b6e723ddf0a2c8ac9a0d8a3f": "1a28becf1aa494d3216067ca4ae9a1b0",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dc/696651a9e7ac17693062c51999eea7bec22a90": "abc609215a409db7cff81374f160f179",
".git/objects/e1/be26e121a4f5b802f9128ccdf360e9f1d2fb10": "c1c6c2b43ad9d0459458b5251d9d826b",
".git/objects/e5/d133bf4f7a633e52494e457202327c78c4edd7": "b71b4cbef55af2db2e766125bfeec892",
".git/objects/e8/47121666305c42c4712df936e56b448acc9b97": "bbaa478b20fd06dd310faeefc48db786",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/0326fcb3d42775e8df1cca357677ab6c1bf56f": "730ce22c12dfe556e5ca42247a68fb88",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/29a31c943129108511b07773cf3a9edc8e4201": "1ab6c95d714bc84d4912e796aad2419f",
".git/objects/ed/48dafd67f957b56cda8117701a97a2ba87e4c0": "9fdb74c66cb6d9f7827262aa0df10263",
".git/objects/ee/5ca31b901b3ec651f994ef30e73e213f76396a": "f9ea546a78f451995e91ec68bdeb92d4",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/6182b2d70e6444f2023ee26ac1dfc2373b2c5e": "c1b2bdde2bdc930f45a35f7f82f47ba0",
".git/objects/f0/b6b3135ac9583dc0ab57d2beac19f98be8a76e": "322d78340d7af929e7c80773e2e1a82b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fa/ae887ce1d99c347ae732de09e68c26530482fd": "d860a715b98df5a640e0b241fb885e5e",
".git/objects/fb/2fc3800b1fec9461cdd44af4349f36d5dd72ee": "76324ba10de72540e2c2194282dd3af0",
".git/objects/fb/8a26c593f0d32ac8cc5cc0566e2484f0d64d90": "8dc3ff2b6d54786e7b2797bb3cd48b33",
".git/objects/fc/6725ab01410586b5d7ca3978ce6e5b8a659e0f": "21cf8098ff0c3c48337395e26d1abb0d",
".git/ORIG_HEAD": "56002f9642302f30402441e4bf72ad63",
".git/refs/heads/main": "8852a511df6b194c83ffdff2a74a8872",
".git/refs/remotes/origin/main": "8852a511df6b194c83ffdff2a74a8872",
".idea/libraries/Dart_SDK.xml": "a24f84aae984a5d09ff01c0d94750531",
".idea/libraries/KotlinJavaRuntime.xml": "de38cfadca3106f8aff5ab15dd81692f",
".idea/modules.xml": "3867275a5e85f3eb0ad5db7870554b38",
".idea/runConfigurations/main_dart.xml": "0ecf958af289efc3fc1927aa27a8442f",
".idea/workspace.xml": "25155dfb2368a7e35e1ebbecd505a418",
"analysis_options.yaml": "9e65f4b9beebb674c0dc252f70a5c177",
"android/app/build.gradle.kts": "5e02f883faeceb6b03e531e41f43d9db",
"android/app/src/debug/AndroidManifest.xml": "820c45a25b424dd5b7388330f7548d1f",
"android/app/src/main/AndroidManifest.xml": "5a546c174391d91cf3cdca6ef76032bc",
"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "5b3b418ce50367c33bded3c0df06d47f",
"android/app/src/main/kotlin/com/example/web/MainActivity.kt": "9df4af9a4fa3b2fe524f5efe80a18173",
"android/app/src/main/res/drawable/launch_background.xml": "12c379b886cbd7e72cfee6060a0947d4",
"android/app/src/main/res/drawable-v21/launch_background.xml": "bff4b9cd8e98754261159601bd94abd3",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/values/styles.xml": "f8b8cfbf977690d117f4dade5d27a789",
"android/app/src/main/res/values-night/styles.xml": "c22fb29c307f2a6ae4317b3a5e577688",
"android/app/src/profile/AndroidManifest.xml": "820c45a25b424dd5b7388330f7548d1f",
"android/build.gradle.kts": "0be80ea97a9d674e007d056c9b84ed4c",
"android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"android/gradle/wrapper/gradle-wrapper.properties": "d234953991000ffcae6bde4f826801f6",
"android/gradle.properties": "177a9eb502bc9c110a72ff0fdfd0c845",
"android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"android/local.properties": "46d740bf0d70112dad954cc8d33917cc",
"android/settings.gradle.kts": "956d4473f20d5d82ed78be4ced888df2",
"android/web_android.iml": "273d851cbe25579b8e6ee48886fa4d6a",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6b433293f210c169122e740c8d17972f",
"assets/NOTICES": "5e8802292fb2d2b139c35bff8c6b004e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"CNAME": "781e0eebffa11b2777510c2a971a79f7",
"favicon.png": "6d609f4a267c4fd258f028f3aee7eb27",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "5f0ded1606ce651e0a4a2f37b01fd775",
"icons/Icon-192.png": "0d3ccc61c194bdcfe0a968162a3a6981",
"icons/Icon-512.png": "ac881478b98c269d2ccab2aeb22bb61d",
"icons/Icon-maskable-192.png": "0d3ccc61c194bdcfe0a968162a3a6981",
"icons/Icon-maskable-512.png": "ac881478b98c269d2ccab2aeb22bb61d",
"index.html": "588ea97d07a5e5d2a682b5971de697bd",
"/": "588ea97d07a5e5d2a682b5971de697bd",
"ios/Flutter/AppFrameworkInfo.plist": "09ece6f06f706864eb9c343ad93b57c8",
"ios/Flutter/Debug.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Flutter/flutter_export_environment.sh": "4391c0eb42494eb3a113360feedaf916",
"ios/Flutter/Generated.xcconfig": "4fdc006a96e258359ab9c354dc1f9932",
"ios/Flutter/Release.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Runner/AppDelegate.swift": "e277c49e98c9f80e9e71c0524a5cb60f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "31a08e429403e265cabfb31b3d65f049",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "a2f8558fb1d42514111fbbb19fb67314",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "1b3b1538136316263c7092951e923e9d",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "be8887071dd7ec39cb754d236aa9584f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "043119ef4faa026ff82bd03f241e5338",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "2b1452c4c1bda6177b4fbbb832df217f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "8245359312aea1b0d2412f79a07b0ca5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "e419d22a37bc40ba185aca1acb6d4ac6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "36c0d7a7132bdde18898ffdfcfcdc4d2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "643842917530acf4c5159ae851b0baf2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "665cb5e3c5729da6d639d26eff47a503",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "b9e927ac17345f2d5f052fe68a3487f9",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "f7ee1b402881509d197f34963e569927",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "b428258a72232cdd2cc04136ec23e656",
"ios/Runner/Base.lproj/Main.storyboard": "2b4e6b099f6729340a5ecc272c06cff7",
"ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"ios/Runner/GeneratedPluginRegistrant.m": "f6079b630997f8fd4ae1ac639162419a",
"ios/Runner/Info.plist": "89fe97591c65fb6906af8ac5653fb487",
"ios/Runner/Runner-Bridging-Header.h": "7ad7b5cea096132de13ba526b2b9efbe",
"ios/Runner.xcodeproj/project.pbxproj": "6a51430d37beb2168d1880ad0a14ee40",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "77d69f353bbf342ad71a24f69ec331ff",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "d2a77de70d304fc1a7f8dd7a94a83aa3",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/RunnerTests/RunnerTests.swift": "24e5d095048eb86c30423f4e04b6e57b",
"lib/main.dart": "e6d34b783604845532fe6ac65931b479",
"linux/CMakeLists.txt": "9c4dbeef0f405b4ef17423014f98f724",
"linux/flutter/CMakeLists.txt": "2195470ce31675d31db5a37590d011f6",
"linux/flutter/generated_plugins.cmake": "e973b0a9c4bf1b7cba923da57b4fbf45",
"linux/flutter/generated_plugin_registrant.cc": "d07afe003d5837167bdd357d593f20a0",
"linux/flutter/generated_plugin_registrant.h": "d295462c9da9f7fef22dc86c34492318",
"linux/runner/CMakeLists.txt": "30cc1614b16214b66c014af09ba699eb",
"linux/runner/main.cc": "539395bcd63dba20afed0838d136189f",
"linux/runner/my_application.cc": "12bf34ce614aa44b2b924854dd07a041",
"linux/runner/my_application.h": "f6b37d58752c8671078b6f660e33e8c1",
"macos/Flutter/ephemeral/Flutter-Generated.xcconfig": "17b40332e82201498e018c4ad9d52965",
"macos/Flutter/ephemeral/flutter_export_environment.sh": "ff1cc5560ef588436e2a4f46b6c46789",
"macos/Flutter/Flutter-Debug.xcconfig": "f6991d7432e1664af118cc9531127016",
"macos/Flutter/Flutter-Release.xcconfig": "f6991d7432e1664af118cc9531127016",
"macos/Flutter/GeneratedPluginRegistrant.swift": "c840bc53b61279c2fb631741134c2ed7",
"macos/Runner/AppDelegate.swift": "4b52e0b89ebfef9baf45b04548c463d6",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "c9becc9105f8cabce934d20c7bfb6aac",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "3ded30823804caaa5ccc944067c54a36",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "8bf511604bc6ed0a6aeb380c5113fdcf",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "dfe2c93d1536ae02f085cc63faa3430e",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8e0ae58e362a6636bdfccbc04da2c58c",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "0ad44039155424738917502c69667699",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "04e7b6ef05346c70b663ca1d97de3ad5",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "1d48e925145d4b573a3b5d7960a1c585",
"macos/Runner/Base.lproj/MainMenu.xib": "85bdf02ea39336686f2e0ff5f52137cc",
"macos/Runner/Configs/AppInfo.xcconfig": "da469f7b869db09eecc690d426c8823c",
"macos/Runner/Configs/Debug.xcconfig": "783e2b0e2aa72d8bc215462bb8d1569d",
"macos/Runner/Configs/Release.xcconfig": "709485d8ea7b78479bf23eb64281287d",
"macos/Runner/Configs/Warnings.xcconfig": "bbde97fb62099b5b9879fb2ffeb1a0a0",
"macos/Runner/DebugProfile.entitlements": "4ad77e84621dc5735c16180a0934fcde",
"macos/Runner/Info.plist": "9ffcbec0a18fdad9d3d606656fd46f9a",
"macos/Runner/MainFlutterWindow.swift": "93c22dae2d93f3dc1402e121901f582b",
"macos/Runner/Release.entitlements": "fc4ad575c1efec3d097fb9d40a0f702f",
"macos/Runner.xcodeproj/project.pbxproj": "53b1329769afd4856d6873793d970a71",
"macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "7545cb7736f31b1b9e5ef91c87578d9c",
"macos/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"macos/RunnerTests/RunnerTests.swift": "8059f5d27a19c556eeafb49b3f9b7bdd",
"main.dart.js": "4229e310fbc5013990491db38a170e40",
"manifest.json": "e177dd956339f7b1b2682767fd46ae22",
"pubspec.lock": "fe4c1b17910bcf2738bc7d4ed110d086",
"pubspec.yaml": "6f0888be95da6507369054195835f043",
"README.md": "f62eeaa7616cee091b7df40146427806",
"test/widget_test.dart": "32cade57813a89c74d8d3a269232f36e",
"version.json": "7645a591835ae46efb051d17a6a40b12",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "478895dd9a65a777c656d2593ad5c7ef",
"web/manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"web.iml": "f9bf5c490675c84d098e6772a6f2a796",
"windows/CMakeLists.txt": "1ab2c7fa4021ddd68d915bb0085dd341",
"windows/flutter/CMakeLists.txt": "bbf66fed5180bd9ae8198b8d7c4a0001",
"windows/flutter/generated_plugins.cmake": "620906318e8c8297f3bc95b445ce4c47",
"windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
"windows/runner/CMakeLists.txt": "028602ab9754bffe716659ada7590d29",
"windows/runner/flutter_window.cpp": "2f463f9b7da67a2d692a012f9ea85e0c",
"windows/runner/flutter_window.h": "7defcc89d4a26d56e801241d624d48fb",
"windows/runner/main.cpp": "01bb7d9acfab1af72f17ad947706bf4f",
"windows/runner/resource.h": "1ade5dd15e613479a15e8832ed276f2b",
"windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"windows/runner/runner.exe.manifest": "298a0260a755c3959d2c3c8904298803",
"windows/runner/Runner.rc": "6cf567ee435c295755ac19b1294664f0",
"windows/runner/utils.cpp": "432461b09d862a2f8dadf380ff0e34e5",
"windows/runner/utils.h": "fd81e143f5614eb6fd75efe539002853",
"windows/runner/win32_window.cpp": "571eb8234dbc2661be03aa5f2a4d2fca",
"windows/runner/win32_window.h": "7569387d58711ab975940f4df3b4bcda"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
