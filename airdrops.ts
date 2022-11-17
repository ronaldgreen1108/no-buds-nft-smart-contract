const airdrops = [
  ["0x6c205540Dcd4c54952FE921c0A779780545530F3", 26],
  ["0xE9dF456F5319D9114872A625D2dF8604bD6DEF10", 24],
  ["0xBb10aC835448D2cE3D39D5844952f85F5859a604", 9],
  ["0x589DA7D6d83079F633B0ECcab45B3D09752f871A", 9],
  ["0x4fC73842B0509CE42d12cd0EDe8fF70C8E8a0954", 8],
  ["0x8Cc5c4e70404181e88F92499973320Cb539229d7", 7],
  ["0x42cB3B9eF1F30026d58c66De1D27Be5550BEf438", 6],
  ["0xF9d10A217753f2235F2F953CBC61eAeF81E72d3d", 6],
  ["0x767d957eA7f5d78b611EaEB84C3BF2443d26c9C5", 6],
  ["0x91D1a3e25009cCBA6640580D3000c80677fb3308", 5],
  ["0xA68a1324618dFb0D936D0dfD819cE16164b0f300", 5],
  ["0x495c7A4aAe13D9fb0e2BEac880302286De98E4b8", 4],
  ["0xeE506eC4b9636DD94E1F4A3952Aa7191EFFEd361", 4],
  ["0x984A837115A1100AbE77816c53e5A3Be61ca8E44", 4],
  ["0x4a03B5f79af795458170198a1FA4454B8Ca03622", 4],
  ["0x592E0F31233623a4f87339C342484Bf5BACfA377", 3],
  ["0x726B395FEd14DE76Ef72D2A3A3cDfb0c12080fEc", 3],
  ["0x04171a5b0a992134523290409f486364e60ddB43", 3],
  ["0x4f2C16552232c5D91D71B1224DA8e06cbCc5e2F7", 3],
  ["0x5909302d0b93C309B30196EB7E3124545Ed0De64", 3],
  ["0x8fdfB3091b31e29942F9257Ed9257b80042636aB", 2],
  ["0xbC7E59BCF3F1eb92961dd71c15FB584bB6AE3872", 2],
  ["0x9951ec20A0e0eE231cD79e07073B408476138713", 2],
  ["0x7F6A760bf795a5d181EE93b29E671e555cc50A09", 2],
  ["0x64262d872cd6f8Be20844109806363bb2d4bA2EC", 2],
  ["0x9cdfeF7755376E6a6e3c6D09f74Ea0AD05e90523", 2],
  ["0xbbC7Cf7795F207A75D9aA0041Ca6CAe892Db3e1F", 2],
  ["0x1B0e3e6B84FD526241AaFC8B0aaaC2665246DE98", 2],
  ["0xd156f87Ea9F25B7820582B460553EE621EDdc258", 2],
  ["0x316EEeDBA5484Fc53F11020883d45829F0971678", 2],
  ["0x034C1c84f068f69892BE5f8489080a836af9b006", 2],
  ["0x6D7Cc1045bB46e1C697f4d3DB88Df3E2453e8c5b", 2],
  ["0x2ee57B6B0152742C96483Aeaf1a6d9a158fB7DF5", 2],
  ["0x9B94F48372f5ED14f860B86f606ffb61D908E4dC", 2],
  ["0xFBe848147bE441B928eBaa7e921F01Ca2A5Cc493", 2],
  ["0x06600d12388eec68f0fe82Af1fCf75040F43386e", 2],
  ["0x61B18560Efaff05bA3F0FdeF7704f518027182bd", 2],
  ["0x5c5ddE2edf2a1e0a659b3f3418154676EA8d6B18", 1],
  ["0xDF28B626B23ff49f7bBa3AC69bf800Faf66BB8Eb", 1],
  ["0x905ac4374E2c6AF1f5343a5e37A4Ef59A6Bb5B45", 1],
  ["0x3722CB2dC7a1D6A778a3f476e162c30f00D6AeDf", 1],
  ["0x8524AE387744799F0a66aC06d313aF87D786bD2e", 1],
  ["0x849b1c48f369f8ED91302B6A0AbBD197e29BF618", 1],
  ["0xAF009429cb0c93bcBd6b7E55B4938188C8dc985c", 1],
  ["0xD40B39E4c1c39Bd9bd7B3Ac459c9B7354d025A09", 1],
  ["0xeC653734a89fe995Bce77DdB219C68146dD92215", 1],
  ["0x6Cac5Fc96B519634f46dFAe3DBD55a1Fb7D9a765", 1],
  ["0xCC3cDbB4B56239a89F509EAa507a39CA0f7d74B9", 1],
  ["0xf0da08D1915aDAF1A9Ab9bDa579AB065bA0D8084", 1],
  ["0x12c8223d4dA8464714e752A8191482dd00e7eEeD", 1],
  ["0x8a8176d8DC774847d8cb8Af34a66E4afe247217F", 1],
  ["0x40D1a2b94479FE938A83c8A8DDeCcBdf8C77A9A4", 1],
  ["0x4d285529281853361Df091Af975f12c31691b569", 1],
  ["0x6ae54a06C9cf2EB66299886812b862e0378d1F2e", 1],
  ["0x04441E49Fe33BaaBF259C40591C661BB76cF9AAF", 1],
  ["0xEe7Df5816Db6054D194614D1949531F72E1AD59C", 1],
  ["0xeA914Dac43f8c9b775C0d0c8734e34126fBFfB5f", 1],
  ["0x0B1322f4A88A87356FBb3b9c5ED82b30175aEb64", 1],
  ["0x2f26903c79E2bC5DA640e8074e1b30dE86Bb36A5", 1],
  ["0xC2a4A6D1d1707e8AF3d42d9565Fe54F85ac976Cf", 1],
  ["0x42e2114eCD1556a91019f97246321Ea13b09cA81", 1],
  ["0x05d6889ea1593b6e58B3366A95Ac923FC00A37AA", 1],
  ["0xDcc580A78F1C9Bba7EbE5BAEe4B598bCBC0625eD", 1],
  ["0x95D38B7fA4E7073df3c7ca14fC8F936E233aa451", 1],
  ["0xD75b0E211209CFEc05B75c508b37B943c005815C", 1],
  ["0x63e1cCA311BB70807aCc71E8766c908a3bcbb1E1", 1],
  ["0xf40BDB3596bAa36eB9885D8d6aF5b556Ab658180", 1],
  ["0xFF773C82CE3f199bcab3Fb90d1959Cba50d73DfE", 1],
  ["0x44aB4a38Ad88d651b8be7d2bB9B229B3cF6AE994", 1],
  ["0x056ed1c609cB7A1034A0c6e9e4Ff6461dD43A1B4", 1],
  ["0xaD42C7a276D562c3Ca4b70d51585635AeeFbC5E7", 1],
  ["0x19940865Abb414F29b28D3dff73F012B162Ab01d", 1],
  ["0x629D08De1fAb19842543DB8Be128f0593DF873a2", 1],
  ["0xB56529e204355368502fC79633Ea785710B5240F", 1],
  ["0x254E8C2607d673c43FfB97cE93aE45b61Cf604Ab", 1],
  ["0xB207BDAf5bD0C76B39024a76E1794496D47a25dD", 1],
  ["0xb75ec9ab2e0030f466FEABB7CAACc0f41C0EFf33", 1],
  ["0xBA872683394f64833436a9a5A4D799fEd8b50Df4", 1],
  ["0x94CB3159cc978FeF1ff0e426E6Eef16e330A512b", 1],
  ["0xcA0Db1A92a6a9f1A78a41ffdCbce9b8402948a14", 1],
  ["0x960EBe11745d323C0E79B161cc7c9fe37dDFd00A", 1],
  ["0xbb3367b563f5ACB0727dF3F31233210eFd3B8D11", 1],
  ["0xEa9C577c64965F8a25b65E9B31d73058CeAC82F3", 1],
  ["0xF6e27dB3D7d0aCe8382b49e6b2D9fe5A40626f95", 1],
  ["0x38eB9a99EA4D612F7C516368242FB7DABfFD1A75", 1],
  ["0xA89ED6C2b1e161Dd6aD2F6eB2C61AD0888A8c8A1", 1],
  ["0x6629A8Eb901c4B792913807871fd847C19B48D4C", 1],
  ["0x2a4Df42A83437476D03516416fF45B023517444f", 1],
  ["0x1107602d51193953cFe4cb8a4B01d846e7E426ab", 1],
  ["0xdAc26183CCe792E3BC9c067d36Ca0bCE6F269CaB", 1],
  ["0x6Ca5f52c848C2DaD7e57e138bDfB2bb359Db6038", 1],
  ["0x745D6E30D4e95B367E065d09AB3B3c34d994132D", 1],
  ["0x3E623989D5F5874FdA81A9a707EC155e22Db1868", 1],
  ["0x57059D4F4b726B5332BB3997122C1F32E1fed300", 1],
  ["0x24c1a40b90AF3cb6d46291Ddc6c627298af9b619", 1],
  ["0x897f707273Ce7924D1bF1483878BfB8A41382876", 1],
  ["0xa9B7530Fb064bc70bda14f5229A8725D6122C433", 1],
  ["0xe825590307Dd4F8cEA4513b22AF3B22dA55851cA", 1],
  ["0x574cEAC75090869c92fd5315D0e89a0294cA58Fc", 1],
  ["0x581F0492195a372516ac1965a552B24705Ce3D83", 1],
  ["0x8681e6117a063AC823401a9563cb6970bfe146E8", 1],
  ["0x84Dcd5A77eeecd52bd16cA0c75970E9b12Ce7d90", 1],
  ["0xF01C9A2212be752c5b85daC14A4B8A38fb3165DB", 1],
  ["0x2D2E3f66e0a3e7AAaaDee9dfC3d9cB250023efcA", 1],
  ["0xA59487891CB74aA473E14946471cA90781C14A9F", 1],
  ["0x5A58DD770cEEb1f858dC0aBdd5db025a6163356A", 1],
  ["0x3D7382733EA9d8796F41cC63d977fa844a434d0A", 1],
  ["0x7e69Beb381bFC4d2D78f4AA5Ec8213eab4FaC088", 1],
  ["0xfCafA1ED9daF2b620D3380acd59123c366944Ff4", 1],
  ["0xa4544bcd31077fd02E5012e405256657940DA4B0", 1],
  ["0xfe1718181D58BA8D6bEbABb7D3090Ea2F2662509", 1]
]

export default airdrops;