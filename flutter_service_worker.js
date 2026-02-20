'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".dart_tool/dartpad/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/extension_discovery/devtools.json": "afcafc3d0feb52770dec8502c9637406",
".dart_tool/extension_discovery/vs_code.json": "afcafc3d0feb52770dec8502c9637406",
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
".git/index": "5ea60ff49a3a2b042407bff6e57bad83",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6e52271afb16e1dfac212d20dd7c679a",
".git/logs/refs/heads/main": "574ff87877c1e34ae767596dff349a86",
".git/logs/refs/remotes/origin/main": "308a99ee15c9867fda1b15c3ee4351f3",
".git/objects/00/2a11cb4ac555266ad8bbbbc0e3d74ca480e55c": "e0aab0852b296581fb54abe759706117",
".git/objects/01/3dde907970cf83496893620753c4d19f028e30": "eac7b6cf8d2d3702db7a49722ab55a39",
".git/objects/03/1b1d46817261c4bfd9594c07d9f3bd54fb83b0": "e29ee87523cb4878e033716d02d4f954",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/67bf12aa4d28f374bb26596605a46dcbb3e7c8": "49dba9cdefacac2602a7af98a656e661",
".git/objects/05/096efd8a518be0fa1c7d4dfbaf2c2e46e3ef12": "3450307284b309aaa1bea9412c700d67",
".git/objects/05/4723806a153c6c8894ea6021d9ec13150c7e3b": "6261ead23eff5e957c5b5fabc034802e",
".git/objects/06/952be745f9fa6fa75196e830d9578eb2ee631d": "cb6848767aab99a89a4ec04efbc00625",
".git/objects/07/5f8f8d56c329ca04ddd0ea7d0469ac0ddca7cb": "0f453d9f7f4beb876e98924fc8dab456",
".git/objects/09/88e65c4035c7d73815911264fe285cb0826be1": "54df0ae7375e4d9709064e358fc725e1",
".git/objects/09/d4391482be68e9e4a07fab769b5de337d16eb1": "a603712ac5534497bc4fd35ebd46b0b7",
".git/objects/0a/17b2d9bc975c730ee7a1c3562e0b2a2623f648": "685ae4ab86ae467420acdc45f549e13e",
".git/objects/0a/3f5fa40fb3d1e0710331a48de5d256da3f275d": "15924b1217c401aba33f13069f7d81d5",
".git/objects/0b/edcf2fd46788ae3a01a423467513ff59b5c120": "23a6b285e31cde5ab29a2fc1ebfdb935",
".git/objects/0d/2902135caece481a035652d88970c80e29cc7e": "dfc8c4c4b7d0a1b6dbadc04d9fa6e6f1",
".git/objects/0e/c303439225b78712f49115768196d8d76f6790": "383f775ddf0900dd9fe74e867c012ba4",
".git/objects/0f/6b0ae0c661b4c65c126beb81463fd867b403d6": "b9799a8b2e69e5cad37fedfbaa54a063",
".git/objects/11/607366585015d5c07675a19b0590fd6bd42281": "900eac32c8e2edce53405ea087014c4a",
".git/objects/13/b35eba55c6dabc3aac36f33d859266c18fa0d0": "ccb5b80ef3b4fb1030a8a4f520f3f5e8",
".git/objects/13/ff3eb160148ca308ac0d08e0212117c20dbea6": "05cc60f86b6368e9795e25669ae1416e",
".git/objects/14/409f9bbb084128fb938d01a5f1613f15a028b8": "b6b359d3892ceaa783203a6ddc6b586c",
".git/objects/14/8da3098986ea6c098d5a7b1f8e9cbf6b427b56": "9bfb32c54891d8b9226a37dddd010698",
".git/objects/15/3653e8d67f81b901d28257a65908f3278e058d": "753c81a6f016d29eb4605decbac41935",
".git/objects/15/cada4838e2f4cac66c351178305967e0887c1d": "f3eb4b5576cc4d5960d524b63c0c9a55",
".git/objects/17/987b79bb8a35cc66c3c1fd44f5a5526c1b78be": "f47de426b1d6c272d2659c734c9de80f",
".git/objects/17/e9516a74074fad22bac3e52e39131886697622": "2cccf0b2cd7b787a1f969f9552b76de3",
".git/objects/18/d981003d68d0546c4804ac2ff47dd97c6e7921": "318597cf2655c5770342bae4ab7b90a3",
".git/objects/1a/448b662122006c53610a74a634fc170526ca3d": "f09511f6a831df27e5a2173a805769f7",
".git/objects/1c/4cfdd96a89b0095dbd29a6ca194e41ad77b4fd": "941033f2f51333a5217c535046bbd8e2",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1d/526a16ed0f1cd0c2409d848bf489b93fefa3b2": "12bcdfd9683b55567627456d0773a4e5",
".git/objects/21/b1816bb825ed1c21049d79e6d1ef1019e7bbb5": "b9e57307ecda7f069badb96cd4ba4a0c",
".git/objects/22/c4462b79288fe10768cc571a36732ce5726025": "3e3cf5fc8864e978934ad77759390731",
".git/objects/24/d9eb95263c506714eae5907d46d3c1e2229c7e": "1fed1d6164eff58a1d5f809f9bd40ad5",
".git/objects/27/bc0a993ff6a023aed7a842776a6c5910005f8c": "a0d7e1d53225c8020be5d621380231f0",
".git/objects/2e/1de87a7eb61e17463f7406106f6c413533cecf": "f4970286a19c04f87217910d26430ddf",
".git/objects/2f/0dd84cb2fcd407ba40f92a0c66d478745626c6": "bcb8e04f92480d05e3cdd702fea9af57",
".git/objects/2f/1632cfddf3d9dade342351e627a0a75609fb46": "eebc09df6f2f2370e95a1eb0bc1fb2c5",
".git/objects/30/4732f8842013497e14bd02f67a55f2614fb8f7": "76eb293b5c9304707852ee681a90e8fc",
".git/objects/30/616e145cb2e2391b75960c60c462ac6b41a6b0": "8a3332c67d5d8ac50d1667b518472773",
".git/objects/30/8a2a560b42f17aaf3c36e4e9c8cd07182fbb7e": "bc183808cfc617fa9474743616eb4aee",
".git/objects/32/1773cd857a8a0f0c9c7d3dc3f5ff4fb298dc10": "aa6f1636c8ce237c3c416d222abf03da",
".git/objects/32/6c0e72c9d820600887813b3b98d0dd69c5d4e8": "3030e2c76fcd41356672eee54ca3bd94",
".git/objects/34/7139c48727d4f32a2b9bac862fb4793356cc63": "f12c4e44afc2ef65f4df0d401fdf25b5",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/b0fd9464f45b33f482e64bea579787e142affa": "9d308f3efbc512e2b01277fb7565acef",
".git/objects/36/cbce676bcfbddfa689b9d0abf23ac40fd2e60b": "8c963983d40f36e775abdac45c7810e0",
".git/objects/37/dc95db633586a14034f62ee016a1d034335103": "b30b3b9309e68d058450ad2ef171e305",
".git/objects/38/79d54755798567f0f318d63340508d5668eb96": "cfe50cd405acbf1c250baa58cfe6b9ed",
".git/objects/39/4917c053a04daa76d8b94f0a02db0bd99e1034": "bbdd537b090d83597a791f77deacff5c",
".git/objects/39/86501558466ad91c2e8583f31dbba29340bc7d": "f1b6a09dbbf1386cee28b26142349083",
".git/objects/39/9f6981d5d35475eb18e6068ae67cdd7c731978": "d78434eb583745d7bf880eb7c4b9f3e2",
".git/objects/3a/0b46511a71b464dac72d693faae6ea0f7e3b2e": "351d4fd0e3a9a4bc304d0a579290669b",
".git/objects/3a/d2b9332a8706632d0e88062ee838bb3987afb4": "2359fd1f2745143002f59829ee698541",
".git/objects/3a/f93b882364ddc13fefa4826038d2c851bf5ea1": "e87d124937e3bd3d761e6be5e6312868",
".git/objects/3b/babee7ca32a9f5b9e4bed6f1d2deb84f60001d": "84b463769423312098b354fd65f9d76b",
".git/objects/3c/c05eb23491684aae1c51ce94668a142bad5125": "d7b0579a2c9bbcd5f15d386f2b10ecbd",
".git/objects/3d/f3d1a91dec9f419bbf32c7dbd7ffe3049577b7": "2da7aed2720fec500109845fe6130ee3",
".git/objects/3f/496b1ed2031d44a1acb9ef951742d69c5164a7": "75f8ca94b18ba17a5f6fe0832e50dc85",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/dffd916c819ce639f0636e55bb4082214acca3": "34adfc33311d3bfdfe5547bb15f7b79f",
".git/objects/42/b4efb6050c2b01ad0dadf7771463d34429f7ad": "dd2254e11eab9ba3bd6cd361ae2112c8",
".git/objects/42/bcbf4780b187e80025b7917058bcb882012aa1": "d13c60a94845ee93e5124ec90980bb48",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/826429a48beb2e30ce0645b9c606d264b881f1": "25ee643b800dcb63105feefab65ab3fe",
".git/objects/46/b726bd53d47e61ba941eb355b9c8633ebbaa20": "480b1cf7af4c452e5722818c06aca052",
".git/objects/47/5a0a701918c55f4eb8d0292bdfd0ca6f1df93e": "ffa0b1a822b402057141fcb3d24d85b7",
".git/objects/47/89daa6a443eefa7f3f729164a18351e06e9800": "3c2dcd6a17cdfc0957293d41ef712d24",
".git/objects/49/142ddac27e6c76f029d29b8e1c26dbe73c8e5a": "1179bd5e66887af8d324a2e978e62a94",
".git/objects/4a/6109187ab6b32ab79f6a78f3a6144ea8f9881d": "8000db520fcc2d586796fac4e5d1df4c",
".git/objects/4b/500d7f6e6974afea917c6df2c04d6d10d13ecf": "aa96126efbec18dbc05801b8501d2f15",
".git/objects/4c/1f2e7ec4266c94655485ff70eb4a2959979428": "4bfc96932e5e8ec18b3721b4187ad556",
".git/objects/4c/d7b0099ca80c806f8fe495613e8d6c69460d76": "171b7f459d8f957102dab0e55cc51039",
".git/objects/4c/fcd01e672e8eb71cfb232254cdca108cad1d88": "4ceaeb5703f73fec167b38c1270ad83e",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/4f/b9f81d689a023a2a72a6274bd377be01a20ef6": "8c290366c455588de67dd5ce1dae10f5",
".git/objects/50/2f463a9bc882b461c96aadf492d1729e49e725": "b4ba046789856764dffa013b321284b3",
".git/objects/50/373f1da659f762bac0747dfc2e19bfbc9f5426": "3993dc2565ac0e1227db45d755689bc8",
".git/objects/51/2a320afe272d702093ee6325b76f91f3d0969a": "c591e9bb03c496d1dc404e8ea579c360",
".git/objects/51/58e5fd006b4bc8b6f7636e3cd1ef3d1411c2dc": "3396a01c4337162038dd957cad89473f",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/54/133621fa5bb2336e5a99d5f6c4a9a523eb18ef": "45b888c1872f1aa4fa011a5d5d1fab6a",
".git/objects/54/b2abd8e80d356d4bb8012980dccae316a41992": "facd6e3ead265ffe65bd1f062142f04c",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/c76e747e34d945b7ef9a86b60522fcc6188fdb": "f8c4bb7e8b2816c487e62173cfcd3ca3",
".git/objects/59/2ceee85b89bd111b779db6116b130509ab6d4b": "348329ef452b809389b6496387db6913",
".git/objects/5a/88276a7b36980d2efa2689a410aebb67aa65b8": "3f57df6a0c0d74a105194c1575657bd0",
".git/objects/5b/36c62403af16b1c003be87fe7afda221e0dcbc": "da33831dce4eb31da27163b1b4403689",
".git/objects/5d/353c243bea24fc20147c63afca39502d79db6d": "644660ab6551d1d63f7a308dba49a755",
".git/objects/5d/ef29de8d60d661fdbae09785786084bee26e4c": "34d3312cd00eeea10f66200b16a51f05",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/608d0fe5bff3a7a7e05d5a232944a1a8effe5f": "e213f83927c2a4c19aa1b864a19eb852",
".git/objects/60/e389d03df863eca70d57c680662ee3a046d9ed": "2acfeccd3960bc518d261434c66c169a",
".git/objects/61/dfe5d8dac23153056127a06d5a5b7a271732d2": "cea640a930459dc4acb90a2902b92b07",
".git/objects/61/f3bd1fc504c3b78271416d8cfd14faa1dae2b4": "dfaf637924edb3f7b2913e26f2a71152",
".git/objects/62/653e163359b34a8bd9228a7dcb12ce5a033cf5": "ca915d54be24cd7d8fe63bb7f9ccca3f",
".git/objects/62/6664468b8914efda0addf1322b12b8c0071710": "7a5c26b39c23a8312a631dd693b7dbdc",
".git/objects/65/ce3c267546993876c4958f3c8e0f09b62e5b4c": "be1b3c92e7c3394e46605a402408db5b",
".git/objects/66/8a825e18ed645db577af0f1667e7444bf8dd2f": "41daa83f7945ff3f2c247f059f6c0211",
".git/objects/66/a65d1e4a79f230031ec0e0959a721039e7282f": "2a87e723b46c44522c16c0968efa0152",
".git/objects/67/fe1d084f6b14224d9e5938a156990cd912d14a": "efb84e374c6d3e562fda3a9649f80e0d",
".git/objects/69/0dbba97f29a0d912cb5f24e1591c2883d489da": "efe79b3600ee5ddf8649e80f229a4f5a",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/8e736c9131cbed40246aad6c478f4be38fbd3f": "f2b1e79be5b3a72ec8b64640a7d3e089",
".git/objects/6d/a0652f05f28fc6950cec20ebdfbae89b665479": "fccd5f0f0fbfe5ead1a5622148fb8d74",
".git/objects/6e/7738df3c8bb12fd8284000b72acbded22e8b68": "940279bab1e49b9ca52c666b220c46a6",
".git/objects/6e/d2d933e1120817fe9182483a228007b18ab6ae": "e67768e46e6cb02c375dcbe6443df2e5",
".git/objects/6f/e4c243b4463622e535526bd4ebfcde52f9ecd4": "b338dc3c462b7e59b4a83f469a8a238d",
".git/objects/72/271d5e41701cfbffad74d38640bf9cc7c1f7be": "e07153a480d4e159b70f80851f6a553d",
".git/objects/72/2fc0d267d639eee0b1ae8ac763a4666cea19a9": "1aea5e98d428f3f7631885db6d0e43b1",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/72/7133068da79b383d833a2f207e4444ef0f46c3": "54d1dba6d57f8e95247beed955f0f05a",
".git/objects/72/7a26b99be6211cd33ec3fb701d9fbd33b23c5f": "d931e70e239eb18888ec237feaed4b93",
".git/objects/73/53c41ecf9ca08017312dc233d9830079b50717": "32c4c29220bb05d460a969e7df99412c",
".git/objects/74/6adbb6b9e14b7e685c91e280a4d37a672afbd8": "eba295c22165b01ec06a735e4dbb3a44",
".git/objects/74/b7de4244d66f3eddc76f5c7a7032d12a78623e": "a7705606bc5b8d3a27f1841843f81707",
".git/objects/76/e1789b06850f063df87b763f25be27996e1488": "c89d99a85cd4a01ccd99d8ccd5d82e85",
".git/objects/77/681f469c9b9a74f4b9c2acb5e4a76be617e44b": "76c325c24d397756430a0300e7d7077b",
".git/objects/77/a4ad5a8e9bd3681c49a0235d43c0a39133c356": "05335a5796225ce74e75c8f49f362be7",
".git/objects/78/b4af8f5736ad571fea6c981a176323e05e0de0": "998ded6b6ac283bef1455515780fe95e",
".git/objects/79/7d452e458972bab9d994556c8305db4c827017": "009f1a67118a52459bbc67f56c2ffd4a",
".git/objects/79/c113f9b50178eefaedb999950fa206eaf6d645": "0a062ce1fa85a99ed952de77de2c04ee",
".git/objects/7a/7f9873ad7dceb4dc17087fb06c800fa0191376": "91f6523d91623d19d122fea7b32a3db9",
".git/objects/7a/8b5ed120484bc256b854df5ff1c78ff9393655": "fd2e072b97640c359af0d122882d6c07",
".git/objects/7b/51bcb800961d55fdca11b238d934ec81f46506": "cafe289810829d958ff70f31c27206a3",
".git/objects/7b/7f5b6f36460d6a4055a66e380c8812997912bf": "741bc2dc70fc37594a406c2f6771aacf",
".git/objects/7c/56964006274498b0edaa77763cdd72c6d42b6a": "7cf18aae775e8f317b2bead42a68f097",
".git/objects/7e/dec45b5775a5b96c302fb6b5c7b8ddeb6d63ab": "75840b732c1796dac3b9bd0cd2422595",
".git/objects/7f/c7725e781a50f924e2cfb2bb511f2c887088c8": "c4fee7af09f6ae48a54e8546ed05c962",
".git/objects/80/e867a4e06b4dc26d0a2b327cbd54041addc50a": "a256672b7db051545b2b39eb821c1510",
".git/objects/82/b6f9d9a33e198f5747104729e1fcef999772a5": "32d0349a1626c50624f6aab0900c31d8",
".git/objects/83/14af42ed9f69a450e4e29bb04f42c6e879d3d6": "95a23c4b38e0f07fd205e835a2125213",
".git/objects/84/ac32ae7d989f82d5e46a60405adcc8279e8001": "a7755246641eb6f0ea897123c42e7eeb",
".git/objects/85/2fa1a4728ae4789e3bca55dd07caef3b41f2a5": "97bf964ac33d3f622d940921761e740c",
".git/objects/86/a7c3b1b6119f7dbdb8cec74f1b5b3e076bf949": "6a613891f55546675267dc93a78ff2c1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/176ef44e8c7931fa32322d576e7f3f54d225c9": "0c8389422cbfb67b7cdf8dd08cfed0ab",
".git/objects/89/46caae40d2aeabc9edcfa860613f76b08760f3": "727d87ebe91520ed0e3d1bb60689ac5f",
".git/objects/89/53cba09064923c5daf2d37e7c3c836ccdd794b": "41d25b277c37a913abe0083c22f1e1b2",
".git/objects/89/c2725b70f1882be97f5214fafe22d27a0ec01e": "99b17ebd650decc04c5de3b0893b27f7",
".git/objects/8a/3c44e229a99224b6a01029498d6b56d2bae5e1": "8ae89013da2210e3a55618df0deef0dd",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f96a2c8ade099adb3fca57791d512ff901fc4a": "d25ee2521973bcf7a4fc7ba6e7142677",
".git/objects/8b/0df65bd8b36e409e810bab5e9287d065a52f39": "aa6c4ed9b3e2756870569b9a4ddd5754",
".git/objects/8b/6d4680af388f28db8742ef7fb8246e2bb1fffb": "4e20d4660135ff8d41852fa5b986bfb5",
".git/objects/8b/d06bdf095c809f80d639847440b06b0199a88c": "58d6dcf8e95c016f9f2dd6468f1fcdf1",
".git/objects/8d/5f4bd66f87580f14ba480e307751130370229f": "5b314f82db9653e22556ef9f13aaebf8",
".git/objects/8f/80cede342cf135b0f990b448f25c1cf1c8fe81": "3216f3ea3f487949329d2b8212ae1ee7",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/3f4899d6fced0eb941e159f7322b21b320c40c": "83b7d85886d6c364db4cef0543e046ee",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/9434a6254f0e9651f402737811be6634a03e9c": "6da5342c04a33ac2131fdae2e4a84892",
".git/objects/93/265cfa47e862ccaf05a52d4812364d56a79113": "596da8f4b403331bfdcefe77fff6c06b",
".git/objects/95/5ee3038f988929fac2dedb6a307ebd45dfcfd7": "84f4c0c3560baa9920ae37a5e8144c5e",
".git/objects/95/967b77cd5ea8511d7bda0868f4cc36c080fb64": "8eec741873ec53f39b3280517fe87b3f",
".git/objects/96/4ba1d933963c15782bfb3414af05c4060933f6": "7dfb2867bf6a2296950bb0183173df94",
".git/objects/96/702cc968970fac5ac889954128f9faefc4ead4": "f1ee3e6aa56d115b7de98405a2281fb0",
".git/objects/97/33e14030c9bb7577d02dc79d62db8c821b5e82": "2de122f0a91998eeca4ff32e1230782e",
".git/objects/98/125de0c0c4964a93bbf6b7be36c9d1ac2deca4": "7e10c7465d94ffaf5cfa0e2dd7e84e0b",
".git/objects/99/cf25302dd7dde2ff851e5630b2b5e6b34bcfd4": "335c089056b31e98a6a3f03db8f60cc8",
".git/objects/9a/4180d22b5546da7b2fa5487d0b0b92d15df4f6": "5f4d66d8aec0b546b35a10df88e3ccd2",
".git/objects/9a/674c61375ea7426abe5abc837627aa451a8133": "ef1a77b8b842950e61691f82a30cefa3",
".git/objects/9b/867143fcc70b08e4fce50936a86511245b3aca": "d5c80e693a5f6bd6873629095e4ed29b",
".git/objects/9c/6635f1bf5447266e2477a45be300cf2b5f7493": "f3abc5151d41723d59d06b4efab822d1",
".git/objects/9c/d4bd67fe164b2e63a633cfaa460495c342286e": "13fa9ebc4770ae1d700d64d709912e00",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
".git/objects/9d/a6834009d81b55582051c89cdc99828ae2449f": "05d42f35337453fa10251cd3ee5e943c",
".git/objects/9f/0acea0b38f0f66d9931940f2feb8cb45b36ace": "d91d2899dcf8015707bfdc73afcf16af",
".git/objects/a1/153bb6a7f7e24e3a3902d4ceb10759c4c847dd": "cb7a1533d773af94fc5d2dcd43b300f6",
".git/objects/a2/ec33f19f110ebff51a23342d7bc29ec9a1aaa6": "48569d95657b1f4b8fad6b6e730d4334",
".git/objects/a4/39442c20990307318ed9ca06dcc7b0bc49f871": "1bc1a02b0140d28e586ed75c15150d24",
".git/objects/a5/74fb9e3907608e950927d928b60aed4a83795a": "7523ce0bb7bc23ef4659f02814cc43df",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/368af0ee7628fa194ef8fe3bbe4523113d6e05": "bafb07bb0e67f8a015ad7c670f7072fd",
".git/objects/a6/d32adeaabcd32d115e01b6c9fa33ba0cb9ac12": "05a7e07577eaa3208ebb86640d8ba69b",
".git/objects/a8/7eef84a5d29844f41176f808a797cea593616b": "bbe3fc3e1c5e6135804ae185063dc396",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/e64fdfeb26c1371bc1169043e31175cea36ef3": "ee36831733b04277c6a77d9ebfa7d16c",
".git/objects/a9/d07a1a571ace3338ccf57165c9f47ad5714a59": "bf7ae17517dd66fa340797996e521796",
".git/objects/ab/b062f304c4c72d73d3672707b4388f52b6b442": "656170ad14c2be1c93253b069055cb2e",
".git/objects/ac/6bb9861f5ea64e6c03a1dee8be2f4fc887f3c3": "75e7da15ae47fc2fae3fcd95d49c25e5",
".git/objects/ad/d421a65e9872b79d2435706c0bcd129ff08ad2": "dc61075bd9084f339b9e247167025663",
".git/objects/ae/d13a521a40225a89b4634b32607849757b689f": "742465b9b91349df56ee3b0b273fb888",
".git/objects/af/55ff988c5b9108e2f908614e578ce5cf8d6a0d": "92137e1a3773abf252271c54699cb086",
".git/objects/af/a1e8eb0a835ba6be2286d1b399c4e47b7a79a0": "4dab234139522b8ef06abed94f8bb405",
".git/objects/b0/17553a7141cdea75046f6032cf110d2c722fe4": "73abb4cc6b1e40ca4a7fe0b1549a295c",
".git/objects/b3/4bbbbb00ac52f661c8284d9cc2864581aa4504": "772c2f17ba96fec7b7fa86806c48544e",
".git/objects/b3/c176141221dbe2b40d3e36942b15068ba48677": "16f35ec3f336b484215d2ebbfaaad9fc",
".git/objects/b3/f1b354ddbaacaef8617fa4c2493e3f6a3c3a63": "23f6d7fbbf6ca65660541e5ac91c5b4a",
".git/objects/b5/53f2dec395ead80c2ff46855f77aef57417cdc": "3a6a90dba59bc8d9d5a736be4f3597d8",
".git/objects/b6/f2596ec64290c6c8504db1d959c0db6c38b820": "b0913bc17fd7e340daccfbe0de4fe63a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f6379de857531a7d2523ff85fb2cad8359de85": "7c0cca4878092ed00ab1d78739072090",
".git/objects/b8/00d99353bf6fb3667428a60dd38a7771b4631c": "ff06f2d82267aeec5e46ad83a37df2e3",
".git/objects/b8/a95af66d7612e6784e477a8c8b675515e24c6b": "1223009f1777d90c92803520aa84961e",
".git/objects/b9/1369cf4d1397362ba297293840d760867f33e2": "4761ebdcde753d4d68711bbec7978d26",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3c4c30c16703f640bc38523e56204ade09399e": "d81d171c0590dfeb78e8d6c404330bb1",
".git/objects/ba/f3d77f76706dbc82162dd6bc9a1365ac5be830": "3fdbb77ecc95ce55cfcedebbe781f150",
".git/objects/bb/ee3103167af66d03bb685f9083e4cd80b1a349": "2806e46066986ebb7de979a284a7ab79",
".git/objects/bd/3a6d2a85351e0e9a0418ec75e9364093550629": "66af428fd9cf32a38dfd54c48e78251a",
".git/objects/bd/4d738f82707030ab9936745dfcd26f50708383": "8ca9b0ff2f526f445e82dd863ac5b09a",
".git/objects/bd/b57226d5f2bd20f11934f4903f16459cf52379": "3289c6c0ee8813484d2b33d6c6e1df10",
".git/objects/be/3943c96d8eed92e2a329ce8327616d5e7dc440": "3914e5aa863cbfdf927ed3de8f9e8d42",
".git/objects/c0/4e20caf6370ebb9253ad831cc31de4a9c965f6": "5e216dece9f226a4ac045363fbbe142a",
".git/objects/c1/8d686c2278a5ebeecc23766fb5a107d90444e2": "0792a27dbd0dd33cc85f668069c3bf93",
".git/objects/c2/b74de888e78da7036546bc0e25b3a4bc28afb5": "138e003f4e7e4e5e5aeb8f07be483d55",
".git/objects/c2/c57f7fc6baffdc33550273801464509e1183bb": "afa7630b739c4447c2f140f9f73cbf0e",
".git/objects/c2/efd0b608ba84712fb3e1d01122468a50c7fba1": "5841aa09610800cbb88a643fdc9ede63",
".git/objects/c3/94c77b153009c5ebd61d399dabae662c6ad512": "a466caf1e00696c771f10f37a375fcf1",
".git/objects/c4/3cc9b8ba4e4ae5c6df5ed5e3f199668b7fead0": "e70044978ca80324fbe375a7e1547ad3",
".git/objects/c4/3db629b58f3d425dd071cdcfcce513ef0f6fa5": "f1bfd4353fe142b2cbe9311be770d071",
".git/objects/c9/20ceb11ef401d68309fafc053fe46e5c028f86": "c0952286ef7863f0aa47632907458acf",
".git/objects/cb/1ef88056edd1caf99a935e434e7ff6943a0ef6": "06da19129aec844c2a975f2175eb659b",
".git/objects/cc/8ec177c7a0305ab51fee0b9d79f9e95656f624": "e146249c5e02e7f7769c18efca3e0629",
".git/objects/cc/919b29855aa6af56365e5fb7ee9883692ee971": "1eb3b552f61565a32b5ca366ce47c397",
".git/objects/cc/95134fa6d6f66ac1287a75ac2cae654176d57d": "808a22f2ce556cbdfac0376d223836ea",
".git/objects/cc/cf817a52206e8a8eef501faed292993ff21a31": "1b4dd6ab7f4ca9073eac414dd6794fd6",
".git/objects/cf/c1d48dca0dd277fbdbfa7641139111e5592f9c": "5499480cb291f56b0e1ee452d4769590",
".git/objects/d0/388c66d51b4830e697363e0ece586f9278f75b": "4c132aa9f3fa8eac105a35ab5f267631",
".git/objects/d0/651fda5fbc1e0e728fe38d2abc65f7250c177d": "6bc02ac128f6ce47d177770d0a6103f8",
".git/objects/d0/cb59388bed82fa8cd3388e25e87755f709e068": "319d5e5def471c8c15e78c0a1c598562",
".git/objects/d3/366b9d6c6762f69bbbcb1aa1e11f6d236c763e": "6d60c61b3088746d5820faf0e5e8b05b",
".git/objects/d3/6b1fab2d9dea668a4f83df94d525897d9e68dd": "f19c13a91df6187b27767a0c81787173",
".git/objects/d3/896c98444fbe7288d434169a28c532258a4466": "65bd2275cf87203cd8cbaa19e4cce2fc",
".git/objects/d3/b9e0aafa70e7b518de6d7f36503def555e3867": "c4acea7ad0add3f7670f8bff8463c738",
".git/objects/d3/d1d3cef5128525a76b2762345fb7e0860d1b56": "d13346c4702c2b06a203e8eba32a7571",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/47c094ceab24ad7c7ca1bfb8bb30e92f630f83": "1ce2383c9d304a600695b6a339fb519b",
".git/objects/d4/92d0d98c8fdc9f93ad2543bb4f531803e9df72": "e3677ae8914304b8340d8db27e7db71a",
".git/objects/d5/2d867b1f35728cc3bc13e1bbc4c24e62871d71": "6d475e3f6fb069f28ac25766ff87abc7",
".git/objects/d5/bd01648a96d50136b2a97c8bb9aa5b711f6c39": "b52bbb3aa77140bdf2d47814158cba7d",
".git/objects/d5/f1c8d34e7a88e3f88bea192c3a370d44689c3c": "2e5a4148dc9ebc15b186574d9fb60432",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/61c53178cc135119f252e047fb2f6e08512ed0": "54c64d1a96d272170806761ec67134b6",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/afba413fc9b3b11f0ae229786339cca31e9612": "7c96ea6b2385c721bbbf103ea2454633",
".git/objects/d8/acc2e10c5bcd26b6e723ddf0a2c8ac9a0d8a3f": "1a28becf1aa494d3216067ca4ae9a1b0",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/150c6e3dc0f7eaaf0eba721a1efe272c2cf099": "12cf9194eee7191cb553ce2719f48818",
".git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "a2e10fc9c4f60ac00e2b9b1ed3a0b5ac",
".git/objects/db/fd452a3c490e73efd9fe02512f24b6d8369485": "0e97324b8bd3cf6d712e7e09a6fc601c",
".git/objects/dc/139d85a93101cc0f6e9db03a3e1a9f68e8dd7e": "c815b8cd55031858470b95979194ad21",
".git/objects/dc/696651a9e7ac17693062c51999eea7bec22a90": "abc609215a409db7cff81374f160f179",
".git/objects/dc/9ada4725e9b0ddb1deab583e5b5102493aa332": "e8022082c258e4c83e27519f77484618",
".git/objects/dc/d38025f67cb5d1ed1bc23c8cd0555d5e7f4a64": "e187a59845850d46d9d7b05cdd9aeb12",
".git/objects/dd/db8a30c851e7ef5b16a9108934bd1217b6b43f": "e943b985c0fbc94ad354f2ada89b854d",
".git/objects/df/f4f49561c816f70eaea557d889d31cf63447ac": "fccf1f0ce075ef8d3a1ae932cbc31552",
".git/objects/e0/f0a47bc08f30b550b47b01de4c9206b6824dd9": "5ef61d56b6220833037adc3dc3871ecb",
".git/objects/e1/be26e121a4f5b802f9128ccdf360e9f1d2fb10": "c1c6c2b43ad9d0459458b5251d9d826b",
".git/objects/e2/88e4f2f9e066d824501852e9e65d7b584aee82": "6a3156252ab530c53d774c991dca832a",
".git/objects/e3/3142e71bfc751ce1d7a7d46406235425786005": "71cc9d64983f89c56658f9ade44a4809",
".git/objects/e5/d133bf4f7a633e52494e457202327c78c4edd7": "b71b4cbef55af2db2e766125bfeec892",
".git/objects/e7/1a16d23d05881b554326e645083799ab9bfc5e": "35049fca5b8153e0c0cd520b5503c269",
".git/objects/e7/c5c54370372a4cdde7288a32733998d87bd767": "37c17914ddc243c1c81881069106b916",
".git/objects/e8/47121666305c42c4712df936e56b448acc9b97": "bbaa478b20fd06dd310faeefc48db786",
".git/objects/e9/01dde684ea8ba25c50ea5dc7d5900da31a30d4": "8688207d9bdc19977b061c06f0972db7",
".git/objects/e9/7dabc7028e16c6d9ec74f1e2fb677a93ba81b5": "8be55bc32212fcdfd3d8ad05b8e0488f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/f5fea27c705180eb716271f41b582e76dcbd90": "45a0061e76512ff597b88e29748f3ada",
".git/objects/eb/0326fcb3d42775e8df1cca357677ab6c1bf56f": "730ce22c12dfe556e5ca42247a68fb88",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/29a31c943129108511b07773cf3a9edc8e4201": "1ab6c95d714bc84d4912e796aad2419f",
".git/objects/ed/48dafd67f957b56cda8117701a97a2ba87e4c0": "9fdb74c66cb6d9f7827262aa0df10263",
".git/objects/ee/5ca31b901b3ec651f994ef30e73e213f76396a": "f9ea546a78f451995e91ec68bdeb92d4",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ee/d1616503d2063c823d77ddbd03ce3e3e936889": "779646964d80a093209a922425c1378b",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/18a61817f55e78bb92ce8df2dda423ec570a4a": "44e96829ee6f26cde6aaf8c2931e83ee",
".git/objects/f0/6182b2d70e6444f2023ee26ac1dfc2373b2c5e": "c1b2bdde2bdc930f45a35f7f82f47ba0",
".git/objects/f0/83318e09ca1b6b8484b1694a149f0c5d5cac1d": "541f4960a70ea9c895b2c21196ef40a7",
".git/objects/f0/b6b3135ac9583dc0ab57d2beac19f98be8a76e": "322d78340d7af929e7c80773e2e1a82b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/e259c7c9390ff69a6bbe1e0907e6dc366848e7": "094726a4a1cc307c0a019e65a323f850",
".git/objects/f3/46021e5e353f2f827b3a136a02d0f53631c785": "95dac5423c0c75a27b351527c71190cf",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/c28516fb38e64d88cfcf5fb1791175df078f2f": "bccf9d20d0adcc345fe8e5f4a745c4ae",
".git/objects/f4/f6dbdbfcfdc9ea12d45197049e9dabcf6850e3": "53e9b7a63d471fc2d8d4e6af3d43e8e0",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/8bb76100e82ec653e9b32a02d18d9232922d51": "e732ad2f094017daf1f16b50afd7c1d0",
".git/objects/f6/ef47d36080a8ca39b1e9becc57051e94a869a7": "925f062aa5d60f9162098c7fb6f414ac",
".git/objects/f7/4085f3f6a2b995f8ad1f9ff7b2c46dc118a9e0": "c04177ec14f012cb2c99851a5e1ca941",
".git/objects/f9/321fa8f974a7bf8df186ca439ec2caa7eedcf4": "875c393cabb60d976dd4f6a9d2812982",
".git/objects/f9/b0d7c5ea15f194be85eb6ee8e6721a87ff4644": "db1ee38473c66e5ffa9d28f6dfe66938",
".git/objects/fa/ae887ce1d99c347ae732de09e68c26530482fd": "d860a715b98df5a640e0b241fb885e5e",
".git/objects/fb/2fc3800b1fec9461cdd44af4349f36d5dd72ee": "76324ba10de72540e2c2194282dd3af0",
".git/objects/fb/8a26c593f0d32ac8cc5cc0566e2484f0d64d90": "8dc3ff2b6d54786e7b2797bb3cd48b33",
".git/objects/fc/5ba3d2c02a2dbe946bac4170e4815d8b8fdcda": "fe76df1fe32bf15866017f5c074599cc",
".git/objects/fc/6725ab01410586b5d7ca3978ce6e5b8a659e0f": "21cf8098ff0c3c48337395e26d1abb0d",
".git/objects/fe/730945a01f64a61e2235dbe3f45b08f7729182": "1dfc0ae4480d18f6ff6e8730ef3222d1",
".git/ORIG_HEAD": "56002f9642302f30402441e4bf72ad63",
".git/refs/heads/main": "80580449db2d084250d1e5a8f899482c",
".git/refs/remotes/origin/main": "80580449db2d084250d1e5a8f899482c",
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
"flutter_bootstrap.js": "2c1fc1dc16f42678be485c69ad655865",
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
"main.dart.js": "60eebdd8342fb5da38a95a725e7c8860",
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
