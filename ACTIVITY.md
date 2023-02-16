# migration-validator

## add-global-timeout


 1. [2f3..952] a | By - Alex Moshinsky | On - 2022-06-29T06:04:31Z
 2. [9ac..83d] fix | By - Alex Moshinsky | On - 2022-06-28T18:06:43Z
 3. [4d5..886] add global timeout for metadata and Consensus | By - Alex Moshinsky | On - 2022-06-28T15:54:32Z
 4. [ba5..242] events: transferUnique: withMetadataInfo: store to ipfs if required | By - rupansh | On - 2022-06-15T17:29:06Z
 5. [672..461] add gas workaround for fantom | By - rupansh | On - 2022-06-14T16:32:11Z
 6. [6e1..8f4] bridge: use nft origin to check mintWith | By - rupansh | On - 2022-06-13T16:43:30Z
 7. [d1c..95b] add more debug logs and minor fixes | By - rupansh | On - 2022-06-13T16:37:21Z
 8. [2c0..d44] update getting of defaultMintWith | By - rupansh | On - 2022-06-10T14:14:17Z
 9. [873..691] Revert "[TEMP] bridge: tron: add debug log for defaultMintWith" | By - rupansh | On - 2022-06-10T14:14:17Z
 10. [d30..d2d] sc-allowed: add token id ranges | By - imsk17 | On - 2022-06-07T14:17:53Z
 11. [c31..d7c] fixed issue tezos metadata | By - Ruby Edelstein | On - 2022-06-02T14:06:01Z
 12. [057..41c] a | By - Ruby Edelstein | On - 2022-06-02T14:05:16Z
 13. [e50..4cc] a | By - Ruby Edelstein | On - 2022-06-02T14:03:38Z
 14. [e6a..284] a | By - Ruby Edelstein | On - 2022-06-02T14:03:00Z
 15. [ad5..121] a | By - Ruby Edelstein | On - 2022-06-02T14:02:17Z
 16. [a95..c2b] a | By - Ruby Edelstein | On - 2022-06-02T13:59:26Z
 17. [a1a..13f] a | By - Ruby Edelstein | On - 2022-06-02T13:57:47Z
 18. [6b9..377] fixed ipfs | By - Ruby Edelstein | On - 2022-06-02T13:52:33Z
 19. [ee3..e05] added xp network ipfs gateway | By - Ruby Edelstein | On - 2022-06-02T13:03:04Z
 20. [037..2fb] remove xp.network wrapped nft from description | By - Ruby Edelstein | On - 2022-05-26T15:25:32Z
 21. [63b..145] bridge: use defaultMintWith instead of xpnft for checking unfreeze | By - rupansh | On - 2022-05-24T12:10:43Z
 22. [841..6f4] [TEMP] bridge: tron: add debug log for defaultMintWith | By - rupansh | On - 2022-05-24T11:58:02Z
 23. [b0c..c62] erc721_metadata: extractTokenId: allow any subdomains from xp.network | By - rupansh | On - 2022-05-23T15:19:35Z
 24. [7aa..72a] tron: defaultMintWith: fix derp | By - rupansh | On - 2022-05-23T14:56:06Z
 25. [0b0..0e2] .env.example: add whitelist event config | By - rupansh | On - 2022-05-19T15:22:30Z
 26. [fdf..a7a] initial whitelist impl | By - rupansh | On - 2022-05-19T15:16:42Z
 27. [dff..399] [TEMP] bridge: add mintWith workaround for harmony | By - rupansh | On - 2022-05-18T14:05:10Z
 28. [00d..983] signal: waitCommitment: increase timeout to 400 seconds | By - rupansh | On - 2022-05-17T15:45:02Z
 29. [40d..541] [TEMP] elrond: elrdMetadataWrap: add debugging logs | By - rupansh | On - 2022-05-17T14:37:14Z
 30. [32f..e30] bridge: ipfsMetadataFetch: use ipfs.io as fallback gateway | By - rupansh | On - 2022-05-16T14:54:22Z
 31. [c00..974] algorand: add listenOnly flag for validators not participating in sending transaction | By - rupansh | On - 2022-05-16T14:22:10Z
 32. [750..945] elrond: improve metadata wrapping | By - rupansh | On - 2022-05-11T10:24:48Z
 33. [d2b..2a8] handlers: ipfsMetadataFetch: increase timeout to 30s | By - rupansh | On - 2022-05-11T09:54:20Z
 34. [280..0aa] elrond: extractFrozenAttr: sanitize metadata url | By - rupansh | On - 2022-05-10T15:30:59Z
 35. [d57..4ad] deps: elrond: fix derp | By - rupansh | On - 2022-05-10T13:30:10Z
 36. [e3c..cb4] elrond: improve metadata detection | By - rupansh | On - 2022-05-10T13:22:50Z
 37. [457..8de] algorand: factories: use 443 for port | By - rupansh | On - 2022-05-09T12:42:33Z
 38. [230..82d] algorand: utils: fix constructors | By - rupansh | On - 2022-05-09T12:25:17Z
 39. [c6f..d3a] signAndSendWrap: only stringify if algorand | By - imsk17 | On - 2022-05-09T11:41:35Z
 40. [76d..081] [TEMP] bridge: update workaround for royaltyhack | By - rupansh | On - 2022-05-08T15:41:54Z
 41. [a63..302] [TEMP] bridge: add hacks for royalties derp | By - rupansh | On - 2022-05-08T15:31:31Z
 42. [2fc..f04] elrond: try decoding attributes for transfer | By - rupansh | On - 2022-05-08T14:29:10Z
 43. [d7b..a66] handlers: evm: add debug logs | By - rupansh | On - 2022-05-08T12:50:07Z
 44. [7eb..6ae] iotex: reduce gas limit | By - rupansh | On - 2022-05-06T12:03:37Z
 45. [b8d..161] config: remove duplicate gatechain entry | By - imsk17 | On - 2022-05-04T11:41:34Z
 46. [ff5..dce] Merge branch 'vech' into erc1155 | By - imsk17 | On - 2022-05-04T11:35:38Z
 47. [c6d..372] iotex: increase gas limit and gas price | By - imsk17 | On - 2022-05-02T19:37:39Z
 48. [219..03f] tezos: increase gas limit | By - imsk17 | On - 2022-05-01T16:07:58Z
 49. [ab6..481] bump web3-contracts dep | By - rupansh | On - 2022-04-26T14:20:08Z
 50. [230..637] tron: fix chainId | By - rupansh | On - 2022-04-25T15:37:53Z

## algorand-testing


 1. [0b4..82e] temp remove return in whitelist_nft | By - Irtisam | On - 2023-01-02T12:49:10Z
 2. [b49..e64] added early return for whitelist_nft if the contract is not whitelistable | By - Irtisam | On - 2023-01-02T12:16:32Z
 3. [051..212] test tokenId extraction | By - Irtisam | On - 2022-12-30T15:19:37Z
 4. [23b..c24] fixed the condition in tokenId | By - Irtisam | On - 2022-12-30T15:12:36Z
 5. [393..732] fixed the condition in tokenId | By - Irtisam | On - 2022-12-30T15:04:22Z
 6. [e0f..9b9] fixed the condition in tokenId | By - Irtisam | On - 2022-12-30T14:38:22Z
 7. [4e5..740] added tokenId extraction for auto deployed collection | By - Irtisam | On - 2022-12-30T14:32:37Z
 8. [db3..290] addded try catch in ton deployCollection when checking for already mintWith | By - Irtisam | On - 2022-12-30T13:38:46Z
 9. [c75..2c7] refactor: renable logs | By - zothix | On - 2022-12-30T06:45:57Z
 10. [a3b..dd3] refactor: enable logs only for whitelisting | By - zothix | On - 2022-12-30T06:32:24Z
 11. [4c0..ed6] fix: remove ternary condition | By - Fassih Haider | On - 2022-12-29T13:02:18Z
 12. [378..238] fix: increase scope of trycatch | By - Irtisam | On - 2022-12-29T12:10:26Z
 13. [1d6..070] refactor: add console statemtents | By - zothix | On - 2022-12-29T12:08:43Z
 14. [29f..4c6] fix: add ton whitelistsupported chains | By - zothix | On - 2022-12-29T10:11:46Z
 15. [4fc..6c5] refactor: add clg stmt | By - Irtisam | On - 2022-12-29T09:31:38Z
 16. [7b7..543] fix: replace bridge addr with collection addr | By - zothix | On - 2022-12-29T09:18:56Z
 17. [dcd..ade] refactor: add clg stmts | By - Irtisam | On - 2022-12-29T08:17:46Z
 18. [c67..79b] Merge branch 'feat/whitelist' into solana-whitelist-test | By - awkwardman.dev | On - 2022-12-29T07:30:39Z
 19. [c7d..712] fix: fix condition | By - Irtisam | On - 2022-12-29T07:23:58Z
 20. [e0f..6c9] refactor: add clg stmts | By - Irtisam | On - 2022-12-29T06:56:49Z
 21. [350..d18] refactor: add clg stmt | By - Irtisam | On - 2022-12-28T14:56:16Z
 22. [5ea..6ed] refactor: add clg stmts | By - zothix | On - 2022-12-28T14:10:30Z
 23. [791..21b] fix: add missing break stmt | By - Irtisam | On - 2022-12-28T13:55:35Z
 24. [fc6..05b] refactor: add clg stmt | By - Irtisam | On - 2022-12-28T13:43:05Z
 25. [e7c..d30] fix: replace promise with string | By - zothix | On - 2022-12-28T13:35:51Z
 26. [302..019] refactor: update clg stmt | By - Irtisam | On - 2022-12-28T13:01:05Z
 27. [e1b..41e] refactor: add clg stmt | By - Irtisam | On - 2022-12-28T12:59:00Z
 28. [7e7..b9a] refactor: change endpoint | By - Irtisam | On - 2022-12-28T12:44:39Z
 29. [078..349] refactor: update abi | By - Irtisam | On - 2022-12-28T12:44:15Z
 30. [e33..cfe] fix: add retry limit cond. | By - Irtisam | On - 2022-12-28T12:44:05Z
 31. [4a7..57c] refactor: :loud_sound: update err logs | By - Fassih Haider | On - 2022-12-28T12:17:20Z
 32. [058..b4d] feat: :construction: add impl. for ton nft whitelist | By - Fassih Haider | On - 2022-12-28T10:57:07Z
 33. [b14..2a6] refactoring | By - Debian | On - 2022-12-26T12:39:55Z
 34. [cd8..b99] added check for ton in getMintWith | By - Debian | On - 2022-12-22T09:53:07Z
 35. [255..5e0] added check for ton in getMintWith | By - Debian | On - 2022-12-22T09:44:40Z
 36. [256..a9d] Added check for new mintWith to work with only erc721 atm | By - Debian | On - 2022-12-21T17:45:01Z
 37. [840..989] Added check for new mintWith to work with only erc721 atm | By - Debian | On - 2022-12-21T17:43:24Z
 38. [d71..e1a] added logs to unfreeze ton | By - root | On - 2022-12-21T14:46:50Z
 39. [71a..daa] remove lowercase for ton | By - Debian | On - 2022-12-21T12:32:55Z
 40. [f9a..f15] added check for erc721 when transfering | By - Debian | On - 2022-12-21T12:15:57Z
 41. [84b..c3d] added check for erc721 when transfering | By - Debian | On - 2022-12-21T12:10:22Z
 42. [f5d..e55] added comments to ton freeze | By - root | On - 2022-12-21T11:54:33Z
 43. [393..6ff] added getMintWith when uploading metadata | By - Debian | On - 2022-12-21T11:04:31Z
 44. [68d..8fd] test uri update | By - Debian | On - 2022-12-21T04:25:43Z
 45. [30e..337] test uri update | By - Debian | On - 2022-12-21T03:44:22Z
 46. [ab1..1ea] test uri update | By - Debian | On - 2022-12-21T03:27:53Z
 47. [059..726] fix for uri | By - Debian | On - 2022-12-21T02:24:03Z
 48. [189..f23] sc verify fix | By - Debian | On - 2022-12-21T02:13:54Z
 49. [a2d..ac2] added condition for whitelisting | By - Debian | On - 2022-12-21T00:51:29Z
 50. [7dd..06c] added condition for whitelisting | By - Debian | On - 2022-12-21T00:32:22Z

## aptos-whitelist


 1. [598..ab6] aptos: whitelist small fix | By - irtisam24 | On - 2023-01-04T11:10:02Z
 2. [9d2..f36] aptos: whitelist fix | By - irtisam24 | On - 2023-01-04T11:03:35Z
 3. [b7b..01a] update whitelist | By - Irtisam | On - 2023-01-02T14:14:08Z
 4. [0b4..82e] temp remove return in whitelist_nft | By - Irtisam | On - 2023-01-02T12:49:10Z
 5. [b49..e64] added early return for whitelist_nft if the contract is not whitelistable | By - Irtisam | On - 2023-01-02T12:16:32Z
 6. [051..212] test tokenId extraction | By - Irtisam | On - 2022-12-30T15:19:37Z
 7. [23b..c24] fixed the condition in tokenId | By - Irtisam | On - 2022-12-30T15:12:36Z
 8. [393..732] fixed the condition in tokenId | By - Irtisam | On - 2022-12-30T15:04:22Z
 9. [e0f..9b9] fixed the condition in tokenId | By - Irtisam | On - 2022-12-30T14:38:22Z
 10. [4e5..740] added tokenId extraction for auto deployed collection | By - Irtisam | On - 2022-12-30T14:32:37Z
 11. [db3..290] addded try catch in ton deployCollection when checking for already mintWith | By - Irtisam | On - 2022-12-30T13:38:46Z
 12. [c75..2c7] refactor: renable logs | By - zothix | On - 2022-12-30T06:45:57Z
 13. [a3b..dd3] refactor: enable logs only for whitelisting | By - zothix | On - 2022-12-30T06:32:24Z
 14. [4c0..ed6] fix: remove ternary condition | By - Fassih Haider | On - 2022-12-29T13:02:18Z
 15. [378..238] fix: increase scope of trycatch | By - Irtisam | On - 2022-12-29T12:10:26Z
 16. [1d6..070] refactor: add console statemtents | By - zothix | On - 2022-12-29T12:08:43Z
 17. [29f..4c6] fix: add ton whitelistsupported chains | By - zothix | On - 2022-12-29T10:11:46Z
 18. [4fc..6c5] refactor: add clg stmt | By - Irtisam | On - 2022-12-29T09:31:38Z
 19. [7b7..543] fix: replace bridge addr with collection addr | By - zothix | On - 2022-12-29T09:18:56Z
 20. [dcd..ade] refactor: add clg stmts | By - Irtisam | On - 2022-12-29T08:17:46Z
 21. [c67..79b] Merge branch 'feat/whitelist' into solana-whitelist-test | By - awkwardman.dev | On - 2022-12-29T07:30:39Z
 22. [c7d..712] fix: fix condition | By - Irtisam | On - 2022-12-29T07:23:58Z
 23. [e0f..6c9] refactor: add clg stmts | By - Irtisam | On - 2022-12-29T06:56:49Z
 24. [350..d18] refactor: add clg stmt | By - Irtisam | On - 2022-12-28T14:56:16Z
 25. [5ea..6ed] refactor: add clg stmts | By - zothix | On - 2022-12-28T14:10:30Z
 26. [791..21b] fix: add missing break stmt | By - Irtisam | On - 2022-12-28T13:55:35Z
 27. [fc6..05b] refactor: add clg stmt | By - Irtisam | On - 2022-12-28T13:43:05Z
 28. [e7c..d30] fix: replace promise with string | By - zothix | On - 2022-12-28T13:35:51Z
 29. [302..019] refactor: update clg stmt | By - Irtisam | On - 2022-12-28T13:01:05Z
 30. [e1b..41e] refactor: add clg stmt | By - Irtisam | On - 2022-12-28T12:59:00Z
 31. [7e7..b9a] refactor: change endpoint | By - Irtisam | On - 2022-12-28T12:44:39Z
 32. [078..349] refactor: update abi | By - Irtisam | On - 2022-12-28T12:44:15Z
 33. [e33..cfe] fix: add retry limit cond. | By - Irtisam | On - 2022-12-28T12:44:05Z
 34. [4a7..57c] refactor: :loud_sound: update err logs | By - Fassih Haider | On - 2022-12-28T12:17:20Z
 35. [058..b4d] feat: :construction: add impl. for ton nft whitelist | By - Fassih Haider | On - 2022-12-28T10:57:07Z
 36. [b14..2a6] refactoring | By - Debian | On - 2022-12-26T12:39:55Z
 37. [cd8..b99] added check for ton in getMintWith | By - Debian | On - 2022-12-22T09:53:07Z
 38. [255..5e0] added check for ton in getMintWith | By - Debian | On - 2022-12-22T09:44:40Z
 39. [256..a9d] Added check for new mintWith to work with only erc721 atm | By - Debian | On - 2022-12-21T17:45:01Z
 40. [840..989] Added check for new mintWith to work with only erc721 atm | By - Debian | On - 2022-12-21T17:43:24Z
 41. [d71..e1a] added logs to unfreeze ton | By - root | On - 2022-12-21T14:46:50Z
 42. [71a..daa] remove lowercase for ton | By - Debian | On - 2022-12-21T12:32:55Z
 43. [f9a..f15] added check for erc721 when transfering | By - Debian | On - 2022-12-21T12:15:57Z
 44. [84b..c3d] added check for erc721 when transfering | By - Debian | On - 2022-12-21T12:10:22Z
 45. [f5d..e55] added comments to ton freeze | By - root | On - 2022-12-21T11:54:33Z
 46. [393..6ff] added getMintWith when uploading metadata | By - Debian | On - 2022-12-21T11:04:31Z
 47. [68d..8fd] test uri update | By - Debian | On - 2022-12-21T04:25:43Z
 48. [30e..337] test uri update | By - Debian | On - 2022-12-21T03:44:22Z
 49. [ab1..1ea] test uri update | By - Debian | On - 2022-12-21T03:27:53Z
 50. [059..726] fix for uri | By - Debian | On - 2022-12-21T02:24:03Z

## aptosAutoDeploy


 1. [286..6e6] APTOS: add auto-deploy | By - AlexeyAdoniev | On - 2023-02-14T14:32:57Z
 2. [5f5..ada] merge with production | By - AlexeyAdoniev | On - 2023-02-09T14:36:09Z
 3. [4ef..257] Update is_whitelistable.ts | By - VKint | On - 2023-02-08T18:00:27Z
 4. [6fa..d64] Merge pull request #16 from XP-NETWORK/zOthix-patch-1 | By - zOthix | On - 2023-02-08T16:39:22Z
 5. [ee0..9c9] Update is_whitelistable.ts | By - zOthix | On - 2023-02-08T16:36:00Z
 6. [845..59d] token id test | By - zothix | On - 2023-02-08T12:25:03Z
 7. [fa8..163] fix token id issue | By - Irtisam | On - 2023-02-08T12:17:23Z
 8. [15c..568] fix type | By - Irtisam | On - 2023-02-08T11:54:22Z
 9. [e45..233] Merge pull request #15 from XP-NETWORK/newErc1155Test | By - awkwardman.dev | On - 2023-02-08T11:35:21Z
 10. [907..7f5] changes for production | By - Irtisam | On - 2023-02-08T11:34:23Z
 11. [587..693] test tokenID | By - zothix | On - 2023-02-08T11:07:21Z
 12. [5bb..6ea] update token extraction | By - Irtisam | On - 2023-02-08T09:08:40Z
 13. [f31..6cb] test fetchmeta data | By - zothix | On - 2023-02-08T07:11:13Z
 14. [9dd..7d7] temp remove return | By - zothix | On - 2023-02-07T16:46:50Z
 15. [b93..0c7] changed number to bigint when extracting  token id | By - zothix | On - 2023-02-07T16:37:16Z
 16. [d9f..523] refactor: add console statement | By - Fassih Haider | On - 2023-02-07T14:19:47Z
 17. [97f..01d] Merge branch 'production' of https://github.com/XP-NETWORK/migration-validator into production | By - Fassih Haider | On - 2023-02-07T14:13:09Z
 18. [7a0..ce3] refactor: add console statements | By - Fassih Haider | On - 2023-02-07T14:13:04Z
 19. [ce8..64c] Update events.ts | By - awkwardman.dev | On - 2023-02-07T12:50:03Z
 20. [25d..319] updated erc1155 url | By - zothix | On - 2023-02-07T09:27:17Z
 21. [be6..6dd] remove some comments | By - zothix | On - 2023-02-07T06:22:16Z
 22. [899..3d1] updated example env | By - zothix | On - 2023-02-07T05:45:11Z
 23. [7da..722] test tokenID issue erc1155 | By - zothix | On - 2023-02-06T11:32:46Z
 24. [838..a35] fixed typescript errors | By - zothix | On - 2023-02-06T11:02:59Z
 25. [c3a..6c1] intital implementation of erc1155 | By - zothix | On - 2023-02-06T10:53:57Z
 26. [b9e..739] updated functions for whitelist allow | By - zothix | On - 2023-02-02T13:52:29Z
 27. [804..98a] fix recursive condition | By - zothix | On - 2023-02-01T13:35:32Z
 28. [209..5e6] fantom gas changes | By - Irtisam | On - 2023-02-01T12:24:35Z
 29. [fb2..680] update abi | By - zothix | On - 2023-02-01T11:24:57Z
 30. [d47..852] revert back changes for evm | By - zothix | On - 2023-02-01T11:08:20Z
 31. [82a..9d9] revert back changes for evm | By - zothix | On - 2023-02-01T11:07:18Z
 32. [c9b..31e] updated example env | By - zothix | On - 2023-02-01T07:21:34Z
 33. [87a..3e5] increment collection name get | By - zothix | On - 2023-02-01T06:58:42Z
 34. [e46..d6f] fix native currency transfer to temp account | By - Irtisam | On - 2023-01-31T12:28:10Z
 35. [822..ef9] added provider for newly created temp account | By - Irtisam | On - 2023-01-31T12:15:22Z
 36. [623..fec] fix estimate gas | By - Irtisam | On - 2023-01-31T11:53:05Z
 37. [a29..22b] update collection creation | By - Irtisam | On - 2023-01-31T11:33:26Z
 38. [ca4..9e0] added temp deployer | By - Irtisam | On - 2023-01-31T11:05:21Z
 39. [bdf..312] fix(tokenId): added condition in unfreeze event for wrapped tokenId | By - zothix | On - 2023-01-30T18:47:05Z
 40. [336..f26] added logs for checking target chain | By - zothix | On - 2023-01-30T18:22:39Z
 41. [7fc..0ca] add check for newly created mintwith in fetch metadata | By - Irtisam | On - 2023-01-30T17:46:47Z
 42. [7fc..8c8] added logs for testing in store | By - zothix | On - 2023-01-30T17:21:17Z
 43. [eba..5a4] feat: remove solana code for prod | By - Fassih Haider | On - 2023-01-30T15:03:28Z
 44. [386..425] removed collection creator from harmony | By - zothix | On - 2023-01-30T14:55:05Z
 45. [85f..2a5] added support for backward compatible wnft urls | By - zothix | On - 2023-01-30T14:51:17Z
 46. [246..c11] update to allow whitelist in checking already deployed | By - zothix | On - 2023-01-30T13:38:47Z
 47. [467..951] update to allow whitelist in checking already deployed | By - zothix | On - 2023-01-30T13:37:45Z
 48. [b4f..cbc] temp remove return from validators | By - zothix | On - 2023-01-30T12:49:29Z
 49. [bd2..893] added log back for tx | By - zothix | On - 2023-01-30T12:45:15Z
 50. [deb..ba8] whitelist modifications | By - zothix | On - 2023-01-30T12:41:43Z

## aurora


 1. [a8b..11f] signal: redosig: fix minor derp | By - rupansh | On - 2022-04-18T18:57:35Z
 2. [d45..ff6] signal: redosig: race condition workarounds | By - rupansh | On - 2022-04-18T18:52:34Z
 3. [693..b05] signal: redoAggregateSig: prefix redoid with 0x | By - rupansh | On - 2022-04-18T17:56:19Z
 4. [c48..5d9] signal: redosig: verify old signature before regenerating | By - rupansh | On - 2022-04-17T19:59:24Z
 5. [7fa..511] redo sig on verification failure | By - rupansh | On - 2022-04-17T19:53:33Z
 6. [5c2..e9b] Revert "bridge: redo aggregation if sending txn failed due to `failed to verify signature`" | By - rupansh | On - 2022-04-12T14:04:06Z
 7. [50a..8e3] bridge: redo aggregation if sending txn failed due to `failed to verify signature` | By - rupansh | On - 2022-04-12T13:49:51Z
 8. [146..9ae] tsconfig: enable skipLibCheck | By - rupansh | On - 2022-04-12T13:01:29Z
 9. [dc0..1f9] use custom block.chainid for aurora | By - rupansh | On - 2022-04-12T13:01:14Z
 10. [c1f..be9] package: bump elrond | By - rupansh | On - 2022-03-26T18:19:56Z
 11. [353..581] elrond: await sync before handling again | By - rupansh | On - 2022-03-26T18:18:32Z
 12. [d8a..def] elrond: increment nonce in advance | By - rupansh | On - 2022-03-26T17:37:00Z
 13. [d3e..a04] tezos: log on listenEvents call | By - rupansh | On - 2022-03-17T11:45:06Z
 14. [01c..23a] Revert "tezos: tweak fees for transfer instead" | By - rupansh | On - 2022-03-16T17:02:45Z
 15. [a15..01b] tezos: tweak fees for transfer instead | By - rupansh | On - 2022-03-16T16:49:07Z
 16. [f3e..2fb] tezos: tweak tx fee | By - rupansh | On - 2022-03-16T16:35:23Z
 17. [284..1ab] Merge remote-tracking branch 'origin/elrond-royalties' into erc1155 | By - imsk17 | On - 2022-03-16T13:21:47Z
 18. [f66..3b4] tron: helpers: fix the serialize event function for unfreeze txns | By - imsk17 | On - 2022-03-16T13:11:35Z
 19. [492..cda] tezos: getUriFA2: add a fallback for NFTs with no URI | By - imsk17 | On - 2022-03-16T13:10:59Z
 20. [2f8..eea] bridge: factory: tron: fix hexC production | By - imsk17 | On - 2022-03-15T17:21:59Z
 21. [96f..27e] Merge pull request #9 from XP-NETWORK/temp | By - Sumit Kumar | On - 2022-03-15T17:16:32Z
 22. [0f0..634] husky: add a pre commit hook for lint | By - imsk17 | On - 2022-03-15T17:15:10Z
 23. [d41..0cc] bridge: handlers: tron: adapt web3 serializers for tron | By - imsk17 | On - 2022-03-15T17:14:42Z
 24. [638..5f6] Merge pull request #8 from XP-NETWORK/features/tezos | By - Sumit Kumar | On - 2022-03-15T17:08:56Z
 25. [79f..bf8] bridge: factory: tron: fix hexC production | By - imsk17 | On - 2022-03-15T16:49:59Z
 26. [082..543] add documentation for optional fields | By - rupansh | On - 2022-03-13T19:26:44Z
 27. [faf..68f] elrond: initial royalties support | By - rupansh | On - 2022-03-13T19:21:04Z
 28. [28b..ab2] tezos: minor fixes | By - rupansh | On - 2022-03-13T18:55:03Z
 29. [304..8f6] tezos: update for contract changes | By - rupansh | On - 2022-03-13T14:08:40Z
 30. [8e6..fac] evm: fix import order | By - rupansh | On - 2022-03-13T13:14:38Z
 31. [1e7..6b9] fix compilation | By - rupansh | On - 2022-03-13T12:12:06Z
 32. [f44..770] add event listener | By - rocalex | On - 2022-03-13T07:23:47Z
 33. [b16..64b] transfer/unfreeze nft | By - rocalex | On - 2022-03-13T06:03:20Z
 34. [4e4..aff] config tezos handler | By - rocalex | On - 2022-03-13T05:29:35Z
 35. [126..5a5] initial | By - rocalex | On - 2022-03-10T15:25:22Z
 36. [6c9..bad] gas number to string | By - Ruby Edelstein | On - 2022-03-08T14:14:22Z
 37. [336..900] add polygon gasstation | By - Ruby Edelstein | On - 2022-03-08T14:10:31Z
 38. [660..d65] Update web3.ts | By - VKint | On - 2022-03-08T13:04:06Z
 39. [51d..8fa] set txfees for transfers | By - rupansh | On - 2022-03-03T18:21:34Z
 40. [2a6..058] handlers: elrond: fix gas limit | By - rupansh | On - 2022-03-03T18:13:51Z
 41. [69d..83f] use baseURL in erc721 metadata | By - rupansh | On - 2022-03-03T18:13:06Z
 42. [36a..e1a] elrond: put metadata on ipfs as well | By - rupansh | On - 2022-03-03T18:10:15Z
 43. [39e..b67] reset emitted action after adding offset | By - rupansh | On - 2022-03-03T16:46:16Z
 44. [a46..339] Add actionId offset env | By - rupansh | On - 2022-03-03T12:03:35Z
 45. [21d..a14] Merge pull request #6 from XP-NETWORK/aurora | By - VKint | On - 2022-03-03T10:32:42Z
 46. [f07..5cd] packages: exchange-rate: bump to latest | By - imsk17 | On - 2022-03-03T10:31:53Z
 47. [cd6..882] handlers: improve erc721MetadataWrap | By - rupansh | On - 2022-03-01T17:19:17Z
 48. [1f2..b6e] web3: use 60gwei as workawround for polygon | By - rupansh | On - 2022-03-01T12:54:24Z
 49. [c71..73a] fantom: disable block.chainid workaround | By - rupansh | On - 2022-03-01T10:43:07Z
 50. [43c..319] bridge: handlers: improve ipfs url detection | By - rupansh | On - 2022-02-27T10:35:13Z

## deployUpdate


 1. [5e2..94c] refactor: change whitelist collection transfer amt | By - Fassih Haider | On - 2023-01-12T12:35:21Z
 2. [2a8..f12] revert: "refactor: renable logs" | By - Fassih Haider | On - 2023-01-12T12:32:09Z
 3. [bb4..46e] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T18:42:21Z
 4. [782..893] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T18:23:02Z
 5. [dcd..740] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T18:09:15Z
 6. [d08..b08] refactor: remove clg stmts | By - Fassih Haider | On - 2023-01-11T17:45:42Z
 7. [88f..f1f] refactor: remove delete from cache | By - Fassih Haider | On - 2023-01-11T17:25:02Z
 8. [b2c..df2] refactor: remove clg stms | By - Fassih Haider | On - 2023-01-11T17:24:20Z
 9. [dda..f35] refactor: remove some clg | By - Fassih Haider | On - 2023-01-11T17:06:12Z
 10. [b17..ca2] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T16:57:14Z
 11. [870..489] revert: remove deleteCache call instance | By - Fassih Haider | On - 2023-01-11T16:53:32Z
 12. [02f..cc6] fix: clean cache | By - Fassih Haider | On - 2023-01-11T16:25:51Z
 13. [de2..77b] refactor: remove unsused variable | By - Fassih Haider | On - 2023-01-11T13:17:32Z
 14. [af1..9d4] feat: add waiting for evm whitelisting | By - Fassih Haider | On - 2023-01-11T13:13:19Z
 15. [d23..7c4] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T11:17:46Z
 16. [5e7..b3e] refactor: change wait time | By - Fassih Haider | On - 2023-01-11T10:55:36Z
 17. [e85..f6e] refactor: add waiting in transfer | By - Fassih Haider | On - 2023-01-11T10:39:44Z
 18. [c28..539] fix: wrap url in encodeURIComponent | By - Fassih Haider | On - 2023-01-11T09:26:14Z
 19. [f0f..db0] fix: remove undefined error | By - Fassih Haider | On - 2023-01-11T08:47:09Z
 20. [5dc..ec8] refactor: remove unused import | By - Fassih Haider | On - 2023-01-11T07:57:48Z
 21. [793..ad6] fix: wait for whitelist | By - Fassih Haider | On - 2023-01-11T07:53:58Z
 22. [2af..99f] fixed while | By - zothix | On - 2023-01-11T07:13:33Z
 23. [f0e..17d] changed while condition | By - zothix | On - 2023-01-11T06:15:34Z
 24. [937..983] while loop fix test | By - zothix | On - 2023-01-10T13:17:49Z
 25. [67f..778] while loop fix test | By - zothix | On - 2023-01-10T13:12:14Z
 26. [4f7..b22] while loop fix test | By - zothix | On - 2023-01-10T13:09:56Z
 27. [cc4..778] removed some logs | By - zothix | On - 2023-01-10T12:30:22Z
 28. [4d8..c5d] fixed the socket message | By - zothix | On - 2023-01-10T12:03:18Z
 29. [2ae..79a] added more logs for checking whitelist wait | By - zothix | On - 2023-01-10T11:47:48Z
 30. [1bd..a57] added more logs to for debuging whitelist | By - zothix | On - 2023-01-10T09:21:05Z
 31. [f72..06e] testing wait for whitelist before transaction for ton | By - zothix | On - 2023-01-10T08:41:35Z
 32. [169..27f] fix: return hash after whitelisting | By - Fassih Haider | On - 2023-01-10T07:55:05Z
 33. [2e2..242] refactor: remove redundant code | By - Fassih Haider | On - 2023-01-10T07:42:12Z
 34. [681..fe0] refactor: add clg stmts | By - zothix | On - 2023-01-10T07:10:59Z
 35. [bec..d98] revert: remove hardcoded values | By - zothix | On - 2023-01-10T06:43:03Z
 36. [61c..247] revert: pass hardcoded sig type | By - zothix | On - 2023-01-10T06:28:50Z
 37. [856..d7e] refactor: add clg stmt | By - zothix | On - 2023-01-10T06:14:56Z
 38. [cab..f0f] fix: add network type dynammically | By - Fassih Haider | On - 2023-01-09T18:02:26Z
 39. [fda..170] feat: fix whitelist | By - zothix | On - 2023-01-09T17:55:38Z
 40. [465..33d] fix: change sig type | By - Fassih Haider | On - 2023-01-09T17:27:49Z
 41. [694..05f] added logs for checking sig type | By - Fassih Haider | On - 2023-01-09T17:14:07Z
 42. [bf4..2c3] fix: add string in context | By - Fassih Haider | On - 2023-01-09T15:35:10Z
 43. [8eb..40f] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-09T15:24:29Z
 44. [bae..d59] refactor: update for console statement | By - Fassih Haider | On - 2023-01-09T13:30:38Z
 45. [6b1..ac1] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-09T13:14:55Z
 46. [89d..96e] fix: resolve linting errs | By - Fassih Haider | On - 2023-01-09T12:23:08Z
 47. [aa6..c3b] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-09T12:17:47Z
 48. [e08..6af] refactor: return from signAndSend, add clg stmt | By - Fassih Haider | On - 2023-01-09T11:48:40Z
 49. [781..418] fix: pass & use sig to signAndSend func | By - Fassih Haider | On - 2023-01-09T11:32:18Z
 50. [974..9b6] temp remove return from whitelist | By - zothix | On - 2023-01-09T11:09:44Z

## deployUpdate2


 1. [b4c..c57] Merge branch 'deployUpdate2' of https://github.com/XP-NETWORK/migration-validator into deployUpdate2 | By - Fassih Haider | On - 2023-01-12T01:49:15Z
 2. [8af..999] refactor: add clg stmt | By - Fassih Haider | On - 2023-01-12T01:48:43Z
 3. [0ef..5c4] changed fee for whitelist | By - zothix | On - 2023-01-12T01:47:55Z
 4. [520..da1] refactor: remove linting errors | By - Fassih Haider | On - 2023-01-12T01:20:26Z
 5. [cc6..569] change processMessage call | By - zothix | On - 2023-01-12T01:14:57Z
 6. [602..ddf] refactor: remove unused  import | By - Fassih Haider | On - 2023-01-12T00:41:07Z
 7. [74f..6d7] tessting whitelist | By - zothix | On - 2023-01-12T00:38:04Z
 8. [dac..daf] refactor: change whitelistEvmNotify location | By - Fassih Haider | On - 2023-01-11T23:38:34Z
 9. [090..c39] refactor: change culminative sleep time to 5 mins | By - Fassih Haider | On - 2023-01-11T22:51:47Z
 10. [bb4..46e] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T18:42:21Z
 11. [782..893] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T18:23:02Z
 12. [dcd..740] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T18:09:15Z
 13. [d08..b08] refactor: remove clg stmts | By - Fassih Haider | On - 2023-01-11T17:45:42Z
 14. [88f..f1f] refactor: remove delete from cache | By - Fassih Haider | On - 2023-01-11T17:25:02Z
 15. [b2c..df2] refactor: remove clg stms | By - Fassih Haider | On - 2023-01-11T17:24:20Z
 16. [dda..f35] refactor: remove some clg | By - Fassih Haider | On - 2023-01-11T17:06:12Z
 17. [b17..ca2] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T16:57:14Z
 18. [870..489] revert: remove deleteCache call instance | By - Fassih Haider | On - 2023-01-11T16:53:32Z
 19. [02f..cc6] fix: clean cache | By - Fassih Haider | On - 2023-01-11T16:25:51Z
 20. [de2..77b] refactor: remove unsused variable | By - Fassih Haider | On - 2023-01-11T13:17:32Z
 21. [af1..9d4] feat: add waiting for evm whitelisting | By - Fassih Haider | On - 2023-01-11T13:13:19Z
 22. [d23..7c4] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T11:17:46Z
 23. [5e7..b3e] refactor: change wait time | By - Fassih Haider | On - 2023-01-11T10:55:36Z
 24. [e85..f6e] refactor: add waiting in transfer | By - Fassih Haider | On - 2023-01-11T10:39:44Z
 25. [c28..539] fix: wrap url in encodeURIComponent | By - Fassih Haider | On - 2023-01-11T09:26:14Z
 26. [f0f..db0] fix: remove undefined error | By - Fassih Haider | On - 2023-01-11T08:47:09Z
 27. [5dc..ec8] refactor: remove unused import | By - Fassih Haider | On - 2023-01-11T07:57:48Z
 28. [793..ad6] fix: wait for whitelist | By - Fassih Haider | On - 2023-01-11T07:53:58Z
 29. [2af..99f] fixed while | By - zothix | On - 2023-01-11T07:13:33Z
 30. [f0e..17d] changed while condition | By - zothix | On - 2023-01-11T06:15:34Z
 31. [937..983] while loop fix test | By - zothix | On - 2023-01-10T13:17:49Z
 32. [67f..778] while loop fix test | By - zothix | On - 2023-01-10T13:12:14Z
 33. [4f7..b22] while loop fix test | By - zothix | On - 2023-01-10T13:09:56Z
 34. [cc4..778] removed some logs | By - zothix | On - 2023-01-10T12:30:22Z
 35. [4d8..c5d] fixed the socket message | By - zothix | On - 2023-01-10T12:03:18Z
 36. [2ae..79a] added more logs for checking whitelist wait | By - zothix | On - 2023-01-10T11:47:48Z
 37. [1bd..a57] added more logs to for debuging whitelist | By - zothix | On - 2023-01-10T09:21:05Z
 38. [f72..06e] testing wait for whitelist before transaction for ton | By - zothix | On - 2023-01-10T08:41:35Z
 39. [169..27f] fix: return hash after whitelisting | By - Fassih Haider | On - 2023-01-10T07:55:05Z
 40. [2e2..242] refactor: remove redundant code | By - Fassih Haider | On - 2023-01-10T07:42:12Z
 41. [681..fe0] refactor: add clg stmts | By - zothix | On - 2023-01-10T07:10:59Z
 42. [bec..d98] revert: remove hardcoded values | By - zothix | On - 2023-01-10T06:43:03Z
 43. [61c..247] revert: pass hardcoded sig type | By - zothix | On - 2023-01-10T06:28:50Z
 44. [856..d7e] refactor: add clg stmt | By - zothix | On - 2023-01-10T06:14:56Z
 45. [cab..f0f] fix: add network type dynammically | By - Fassih Haider | On - 2023-01-09T18:02:26Z
 46. [fda..170] feat: fix whitelist | By - zothix | On - 2023-01-09T17:55:38Z
 47. [465..33d] fix: change sig type | By - Fassih Haider | On - 2023-01-09T17:27:49Z
 48. [694..05f] added logs for checking sig type | By - Fassih Haider | On - 2023-01-09T17:14:07Z
 49. [bf4..2c3] fix: add string in context | By - Fassih Haider | On - 2023-01-09T15:35:10Z
 50. [8eb..40f] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-09T15:24:29Z

## deployUpdate-testing


 1. [54f..63a] first commit to 2 deployUpdate-testing | By - MuhammadFassihHaider | On - 2023-02-03T10:59:21Z
 2. [804..98a] fix recursive condition | By - zothix | On - 2023-02-01T13:35:32Z
 3. [209..5e6] fantom gas changes | By - Irtisam | On - 2023-02-01T12:24:35Z
 4. [fb2..680] update abi | By - zothix | On - 2023-02-01T11:24:57Z
 5. [d47..852] revert back changes for evm | By - zothix | On - 2023-02-01T11:08:20Z
 6. [82a..9d9] revert back changes for evm | By - zothix | On - 2023-02-01T11:07:18Z
 7. [c9b..31e] updated example env | By - zothix | On - 2023-02-01T07:21:34Z
 8. [87a..3e5] increment collection name get | By - zothix | On - 2023-02-01T06:58:42Z
 9. [e46..d6f] fix native currency transfer to temp account | By - Irtisam | On - 2023-01-31T12:28:10Z
 10. [822..ef9] added provider for newly created temp account | By - Irtisam | On - 2023-01-31T12:15:22Z
 11. [623..fec] fix estimate gas | By - Irtisam | On - 2023-01-31T11:53:05Z
 12. [a29..22b] update collection creation | By - Irtisam | On - 2023-01-31T11:33:26Z
 13. [ca4..9e0] added temp deployer | By - Irtisam | On - 2023-01-31T11:05:21Z
 14. [bdf..312] fix(tokenId): added condition in unfreeze event for wrapped tokenId | By - zothix | On - 2023-01-30T18:47:05Z
 15. [336..f26] added logs for checking target chain | By - zothix | On - 2023-01-30T18:22:39Z
 16. [7fc..0ca] add check for newly created mintwith in fetch metadata | By - Irtisam | On - 2023-01-30T17:46:47Z
 17. [7fc..8c8] added logs for testing in store | By - zothix | On - 2023-01-30T17:21:17Z
 18. [eba..5a4] feat: remove solana code for prod | By - Fassih Haider | On - 2023-01-30T15:03:28Z
 19. [386..425] removed collection creator from harmony | By - zothix | On - 2023-01-30T14:55:05Z
 20. [85f..2a5] added support for backward compatible wnft urls | By - zothix | On - 2023-01-30T14:51:17Z
 21. [246..c11] update to allow whitelist in checking already deployed | By - zothix | On - 2023-01-30T13:38:47Z
 22. [467..951] update to allow whitelist in checking already deployed | By - zothix | On - 2023-01-30T13:37:45Z
 23. [b4f..cbc] temp remove return from validators | By - zothix | On - 2023-01-30T12:49:29Z
 24. [bd2..893] added log back for tx | By - zothix | On - 2023-01-30T12:45:15Z
 25. [deb..ba8] whitelist modifications | By - zothix | On - 2023-01-30T12:41:43Z
 26. [918..492] added collection creator config to harmony | By - zothix | On - 2023-01-30T11:49:26Z
 27. [59a..78d] fix token id | By - zothix | On - 2023-01-30T10:43:55Z
 28. [896..ad3] added back id | By - zothix | On - 2023-01-30T09:35:28Z
 29. [241..c9f] add retries to collection name | By - zothix | On - 2023-01-30T08:44:05Z
 30. [6a1..f2e] add default name for collection creation on ton | By - zothix | On - 2023-01-30T08:39:20Z
 31. [875..989] ceheck ton tokenid | By - zothix | On - 2023-01-30T08:25:31Z
 32. [5c9..3d7] ceheck ton tokenid | By - zothix | On - 2023-01-30T08:23:57Z
 33. [a33..3a4] update ton configs | By - zothix | On - 2023-01-30T07:54:02Z
 34. [3c1..9a7] added try catch to ton deployCollection | By - zothix | On - 2023-01-30T07:25:10Z
 35. [0f1..750] refactor mintWith check whitelist | By - zothix | On - 2023-01-30T06:08:12Z
 36. [caf..1b5] fix: minor fix | By - Fassih Haider | On - 2023-01-29T14:36:07Z
 37. [4ae..044] refactor: remove unused import | By - Fassih Haider | On - 2023-01-29T14:34:49Z
 38. [0be..792] fix: remove invalid env loading of gk | By - Fassih Haider | On - 2023-01-29T14:33:45Z
 39. [c74..df5] fix: fix way of getting public key from env | By - Fassih Haider | On - 2023-01-29T13:39:53Z
 40. [dfd..cc8] fix: add group key for solana | By - Fassih Haider | On - 2023-01-29T13:37:35Z
 41. [323..8f7] refactor: add trycatch blocks to pinpoint error | By - Fassih Haider | On - 2023-01-29T13:04:53Z
 42. [677..5a1] refactor: remove err throw with clg | By - Fassih Haider | On - 2023-01-29T12:21:13Z
 43. [d63..56c] fix: remove duplicate creator | By - Fassih Haider | On - 2023-01-29T12:08:38Z
 44. [5c9..5f7] refactor: add clg stmt | By - Fassih Haider | On - 2023-01-29T12:03:13Z
 45. [79a..f12] Merge branch 'deployUpdateF' of https://github.com/XP-NETWORK/migration-validator into deployUpdateF | By - Fassih Haider | On - 2023-01-29T11:38:51Z
 46. [6ac..259] feat: enable solana impl for auto-deployment | By - Fassih Haider | On - 2023-01-29T11:38:47Z
 47. [68c..7ce] updated whitelistabler | By - Irtisam | On - 2023-01-29T06:58:14Z
 48. [890..b0b] build: add @metaplex-foundation/js dep | By - Fassih Haider | On - 2023-01-27T18:39:01Z
 49. [4f0..97b] feat: add rough impl. for solana auto deplyment | By - Fassih Haider | On - 2023-01-27T18:36:55Z
 50. [0ed..278] refactor: to add clg statement | By - Fassih Haider | On - 2023-01-27T17:27:56Z

## deployUpdateBkp


 1. [bb4..46e] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T18:42:21Z
 2. [782..893] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T18:23:02Z
 3. [dcd..740] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T18:09:15Z
 4. [d08..b08] refactor: remove clg stmts | By - Fassih Haider | On - 2023-01-11T17:45:42Z
 5. [88f..f1f] refactor: remove delete from cache | By - Fassih Haider | On - 2023-01-11T17:25:02Z
 6. [b2c..df2] refactor: remove clg stms | By - Fassih Haider | On - 2023-01-11T17:24:20Z
 7. [dda..f35] refactor: remove some clg | By - Fassih Haider | On - 2023-01-11T17:06:12Z
 8. [b17..ca2] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T16:57:14Z
 9. [870..489] revert: remove deleteCache call instance | By - Fassih Haider | On - 2023-01-11T16:53:32Z
 10. [02f..cc6] fix: clean cache | By - Fassih Haider | On - 2023-01-11T16:25:51Z
 11. [de2..77b] refactor: remove unsused variable | By - Fassih Haider | On - 2023-01-11T13:17:32Z
 12. [af1..9d4] feat: add waiting for evm whitelisting | By - Fassih Haider | On - 2023-01-11T13:13:19Z
 13. [d23..7c4] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T11:17:46Z
 14. [5e7..b3e] refactor: change wait time | By - Fassih Haider | On - 2023-01-11T10:55:36Z
 15. [e85..f6e] refactor: add waiting in transfer | By - Fassih Haider | On - 2023-01-11T10:39:44Z
 16. [c28..539] fix: wrap url in encodeURIComponent | By - Fassih Haider | On - 2023-01-11T09:26:14Z
 17. [f0f..db0] fix: remove undefined error | By - Fassih Haider | On - 2023-01-11T08:47:09Z
 18. [5dc..ec8] refactor: remove unused import | By - Fassih Haider | On - 2023-01-11T07:57:48Z
 19. [793..ad6] fix: wait for whitelist | By - Fassih Haider | On - 2023-01-11T07:53:58Z
 20. [2af..99f] fixed while | By - zothix | On - 2023-01-11T07:13:33Z
 21. [f0e..17d] changed while condition | By - zothix | On - 2023-01-11T06:15:34Z
 22. [937..983] while loop fix test | By - zothix | On - 2023-01-10T13:17:49Z
 23. [67f..778] while loop fix test | By - zothix | On - 2023-01-10T13:12:14Z
 24. [4f7..b22] while loop fix test | By - zothix | On - 2023-01-10T13:09:56Z
 25. [cc4..778] removed some logs | By - zothix | On - 2023-01-10T12:30:22Z
 26. [4d8..c5d] fixed the socket message | By - zothix | On - 2023-01-10T12:03:18Z
 27. [2ae..79a] added more logs for checking whitelist wait | By - zothix | On - 2023-01-10T11:47:48Z
 28. [1bd..a57] added more logs to for debuging whitelist | By - zothix | On - 2023-01-10T09:21:05Z
 29. [f72..06e] testing wait for whitelist before transaction for ton | By - zothix | On - 2023-01-10T08:41:35Z
 30. [169..27f] fix: return hash after whitelisting | By - Fassih Haider | On - 2023-01-10T07:55:05Z
 31. [2e2..242] refactor: remove redundant code | By - Fassih Haider | On - 2023-01-10T07:42:12Z
 32. [681..fe0] refactor: add clg stmts | By - zothix | On - 2023-01-10T07:10:59Z
 33. [bec..d98] revert: remove hardcoded values | By - zothix | On - 2023-01-10T06:43:03Z
 34. [61c..247] revert: pass hardcoded sig type | By - zothix | On - 2023-01-10T06:28:50Z
 35. [856..d7e] refactor: add clg stmt | By - zothix | On - 2023-01-10T06:14:56Z
 36. [cab..f0f] fix: add network type dynammically | By - Fassih Haider | On - 2023-01-09T18:02:26Z
 37. [fda..170] feat: fix whitelist | By - zothix | On - 2023-01-09T17:55:38Z
 38. [465..33d] fix: change sig type | By - Fassih Haider | On - 2023-01-09T17:27:49Z
 39. [694..05f] added logs for checking sig type | By - Fassih Haider | On - 2023-01-09T17:14:07Z
 40. [bf4..2c3] fix: add string in context | By - Fassih Haider | On - 2023-01-09T15:35:10Z
 41. [8eb..40f] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-09T15:24:29Z
 42. [bae..d59] refactor: update for console statement | By - Fassih Haider | On - 2023-01-09T13:30:38Z
 43. [6b1..ac1] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-09T13:14:55Z
 44. [89d..96e] fix: resolve linting errs | By - Fassih Haider | On - 2023-01-09T12:23:08Z
 45. [aa6..c3b] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-09T12:17:47Z
 46. [e08..6af] refactor: return from signAndSend, add clg stmt | By - Fassih Haider | On - 2023-01-09T11:48:40Z
 47. [781..418] fix: pass & use sig to signAndSend func | By - Fassih Haider | On - 2023-01-09T11:32:18Z
 48. [974..9b6] temp remove return from whitelist | By - zothix | On - 2023-01-09T11:09:44Z
 49. [0f0..664] temp remove return from whitelist | By - zothix | On - 2023-01-09T11:06:30Z
 50. [888..f30] added logs for testing | By - zothix | On - 2023-01-09T10:46:49Z

## deployUpdateEventEmit


 1. [326..739] replaced while with event emiiter | By - AlexSafepress | On - 2023-01-11T21:01:39Z
 2. [04c..a6d] replaced while with event emiiter | By - AlexSafepress | On - 2023-01-11T21:01:14Z
 3. [2c0..195] replaced while with event emiiter | By - AlexSafepress | On - 2023-01-11T21:00:12Z
 4. [1bb..254] replaced while with event emiiter | By - AlexSafepress | On - 2023-01-11T20:57:00Z
 5. [225..a8e] fix: make fix with loop | By - Fassih Haider | On - 2023-01-11T19:59:02Z
 6. [49a..19c] fix: resolve break & continue issue in asyncWhile | By - Fassih Haider | On - 2023-01-11T19:37:02Z
 7. [5d8..df0] fix: remove typescript error | By - Fassih Haider | On - 2023-01-11T19:26:04Z
 8. [696..98f] fix: convert while into async while | By - Fassih Haider | On - 2023-01-11T19:23:34Z
 9. [bb4..46e] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T18:42:21Z
 10. [782..893] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T18:23:02Z
 11. [dcd..740] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T18:09:15Z
 12. [d08..b08] refactor: remove clg stmts | By - Fassih Haider | On - 2023-01-11T17:45:42Z
 13. [88f..f1f] refactor: remove delete from cache | By - Fassih Haider | On - 2023-01-11T17:25:02Z
 14. [b2c..df2] refactor: remove clg stms | By - Fassih Haider | On - 2023-01-11T17:24:20Z
 15. [dda..f35] refactor: remove some clg | By - Fassih Haider | On - 2023-01-11T17:06:12Z
 16. [b17..ca2] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T16:57:14Z
 17. [870..489] revert: remove deleteCache call instance | By - Fassih Haider | On - 2023-01-11T16:53:32Z
 18. [02f..cc6] fix: clean cache | By - Fassih Haider | On - 2023-01-11T16:25:51Z
 19. [de2..77b] refactor: remove unsused variable | By - Fassih Haider | On - 2023-01-11T13:17:32Z
 20. [af1..9d4] feat: add waiting for evm whitelisting | By - Fassih Haider | On - 2023-01-11T13:13:19Z
 21. [d23..7c4] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T11:17:46Z
 22. [5e7..b3e] refactor: change wait time | By - Fassih Haider | On - 2023-01-11T10:55:36Z
 23. [e85..f6e] refactor: add waiting in transfer | By - Fassih Haider | On - 2023-01-11T10:39:44Z
 24. [c28..539] fix: wrap url in encodeURIComponent | By - Fassih Haider | On - 2023-01-11T09:26:14Z
 25. [f0f..db0] fix: remove undefined error | By - Fassih Haider | On - 2023-01-11T08:47:09Z
 26. [5dc..ec8] refactor: remove unused import | By - Fassih Haider | On - 2023-01-11T07:57:48Z
 27. [793..ad6] fix: wait for whitelist | By - Fassih Haider | On - 2023-01-11T07:53:58Z
 28. [2af..99f] fixed while | By - zothix | On - 2023-01-11T07:13:33Z
 29. [f0e..17d] changed while condition | By - zothix | On - 2023-01-11T06:15:34Z
 30. [937..983] while loop fix test | By - zothix | On - 2023-01-10T13:17:49Z
 31. [67f..778] while loop fix test | By - zothix | On - 2023-01-10T13:12:14Z
 32. [4f7..b22] while loop fix test | By - zothix | On - 2023-01-10T13:09:56Z
 33. [cc4..778] removed some logs | By - zothix | On - 2023-01-10T12:30:22Z
 34. [4d8..c5d] fixed the socket message | By - zothix | On - 2023-01-10T12:03:18Z
 35. [2ae..79a] added more logs for checking whitelist wait | By - zothix | On - 2023-01-10T11:47:48Z
 36. [1bd..a57] added more logs to for debuging whitelist | By - zothix | On - 2023-01-10T09:21:05Z
 37. [f72..06e] testing wait for whitelist before transaction for ton | By - zothix | On - 2023-01-10T08:41:35Z
 38. [169..27f] fix: return hash after whitelisting | By - Fassih Haider | On - 2023-01-10T07:55:05Z
 39. [2e2..242] refactor: remove redundant code | By - Fassih Haider | On - 2023-01-10T07:42:12Z
 40. [681..fe0] refactor: add clg stmts | By - zothix | On - 2023-01-10T07:10:59Z
 41. [bec..d98] revert: remove hardcoded values | By - zothix | On - 2023-01-10T06:43:03Z
 42. [61c..247] revert: pass hardcoded sig type | By - zothix | On - 2023-01-10T06:28:50Z
 43. [856..d7e] refactor: add clg stmt | By - zothix | On - 2023-01-10T06:14:56Z
 44. [cab..f0f] fix: add network type dynammically | By - Fassih Haider | On - 2023-01-09T18:02:26Z
 45. [fda..170] feat: fix whitelist | By - zothix | On - 2023-01-09T17:55:38Z
 46. [465..33d] fix: change sig type | By - Fassih Haider | On - 2023-01-09T17:27:49Z
 47. [694..05f] added logs for checking sig type | By - Fassih Haider | On - 2023-01-09T17:14:07Z
 48. [bf4..2c3] fix: add string in context | By - Fassih Haider | On - 2023-01-09T15:35:10Z
 49. [8eb..40f] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-09T15:24:29Z
 50. [bae..d59] refactor: update for console statement | By - Fassih Haider | On - 2023-01-09T13:30:38Z

## deployUpdateF


 1. [804..98a] fix recursive condition | By - zothix | On - 2023-02-01T13:35:32Z
 2. [209..5e6] fantom gas changes | By - Irtisam | On - 2023-02-01T12:24:35Z
 3. [fb2..680] update abi | By - zothix | On - 2023-02-01T11:24:57Z
 4. [d47..852] revert back changes for evm | By - zothix | On - 2023-02-01T11:08:20Z
 5. [82a..9d9] revert back changes for evm | By - zothix | On - 2023-02-01T11:07:18Z
 6. [c9b..31e] updated example env | By - zothix | On - 2023-02-01T07:21:34Z
 7. [87a..3e5] increment collection name get | By - zothix | On - 2023-02-01T06:58:42Z
 8. [e46..d6f] fix native currency transfer to temp account | By - Irtisam | On - 2023-01-31T12:28:10Z
 9. [822..ef9] added provider for newly created temp account | By - Irtisam | On - 2023-01-31T12:15:22Z
 10. [623..fec] fix estimate gas | By - Irtisam | On - 2023-01-31T11:53:05Z
 11. [a29..22b] update collection creation | By - Irtisam | On - 2023-01-31T11:33:26Z
 12. [ca4..9e0] added temp deployer | By - Irtisam | On - 2023-01-31T11:05:21Z
 13. [bdf..312] fix(tokenId): added condition in unfreeze event for wrapped tokenId | By - zothix | On - 2023-01-30T18:47:05Z
 14. [336..f26] added logs for checking target chain | By - zothix | On - 2023-01-30T18:22:39Z
 15. [7fc..0ca] add check for newly created mintwith in fetch metadata | By - Irtisam | On - 2023-01-30T17:46:47Z
 16. [7fc..8c8] added logs for testing in store | By - zothix | On - 2023-01-30T17:21:17Z
 17. [eba..5a4] feat: remove solana code for prod | By - Fassih Haider | On - 2023-01-30T15:03:28Z
 18. [386..425] removed collection creator from harmony | By - zothix | On - 2023-01-30T14:55:05Z
 19. [85f..2a5] added support for backward compatible wnft urls | By - zothix | On - 2023-01-30T14:51:17Z
 20. [246..c11] update to allow whitelist in checking already deployed | By - zothix | On - 2023-01-30T13:38:47Z
 21. [467..951] update to allow whitelist in checking already deployed | By - zothix | On - 2023-01-30T13:37:45Z
 22. [b4f..cbc] temp remove return from validators | By - zothix | On - 2023-01-30T12:49:29Z
 23. [bd2..893] added log back for tx | By - zothix | On - 2023-01-30T12:45:15Z
 24. [deb..ba8] whitelist modifications | By - zothix | On - 2023-01-30T12:41:43Z
 25. [918..492] added collection creator config to harmony | By - zothix | On - 2023-01-30T11:49:26Z
 26. [59a..78d] fix token id | By - zothix | On - 2023-01-30T10:43:55Z
 27. [896..ad3] added back id | By - zothix | On - 2023-01-30T09:35:28Z
 28. [241..c9f] add retries to collection name | By - zothix | On - 2023-01-30T08:44:05Z
 29. [6a1..f2e] add default name for collection creation on ton | By - zothix | On - 2023-01-30T08:39:20Z
 30. [875..989] ceheck ton tokenid | By - zothix | On - 2023-01-30T08:25:31Z
 31. [5c9..3d7] ceheck ton tokenid | By - zothix | On - 2023-01-30T08:23:57Z
 32. [a33..3a4] update ton configs | By - zothix | On - 2023-01-30T07:54:02Z
 33. [3c1..9a7] added try catch to ton deployCollection | By - zothix | On - 2023-01-30T07:25:10Z
 34. [0f1..750] refactor mintWith check whitelist | By - zothix | On - 2023-01-30T06:08:12Z
 35. [caf..1b5] fix: minor fix | By - Fassih Haider | On - 2023-01-29T14:36:07Z
 36. [4ae..044] refactor: remove unused import | By - Fassih Haider | On - 2023-01-29T14:34:49Z
 37. [0be..792] fix: remove invalid env loading of gk | By - Fassih Haider | On - 2023-01-29T14:33:45Z
 38. [c74..df5] fix: fix way of getting public key from env | By - Fassih Haider | On - 2023-01-29T13:39:53Z
 39. [dfd..cc8] fix: add group key for solana | By - Fassih Haider | On - 2023-01-29T13:37:35Z
 40. [323..8f7] refactor: add trycatch blocks to pinpoint error | By - Fassih Haider | On - 2023-01-29T13:04:53Z
 41. [677..5a1] refactor: remove err throw with clg | By - Fassih Haider | On - 2023-01-29T12:21:13Z
 42. [d63..56c] fix: remove duplicate creator | By - Fassih Haider | On - 2023-01-29T12:08:38Z
 43. [5c9..5f7] refactor: add clg stmt | By - Fassih Haider | On - 2023-01-29T12:03:13Z
 44. [79a..f12] Merge branch 'deployUpdateF' of https://github.com/XP-NETWORK/migration-validator into deployUpdateF | By - Fassih Haider | On - 2023-01-29T11:38:51Z
 45. [6ac..259] feat: enable solana impl for auto-deployment | By - Fassih Haider | On - 2023-01-29T11:38:47Z
 46. [68c..7ce] updated whitelistabler | By - Irtisam | On - 2023-01-29T06:58:14Z
 47. [890..b0b] build: add @metaplex-foundation/js dep | By - Fassih Haider | On - 2023-01-27T18:39:01Z
 48. [4f0..97b] feat: add rough impl. for solana auto deplyment | By - Fassih Haider | On - 2023-01-27T18:36:55Z
 49. [0ed..278] refactor: to add clg statement | By - Fassih Haider | On - 2023-01-27T17:27:56Z
 50. [a8b..1ca] refactor: to add clg stmt in evm | By - Fassih Haider | On - 2023-01-27T17:00:43Z

## ed25519


 1. [fce..1fa] web3: add hedera | By - imsk17 | On - 2022-06-30T13:00:10Z
 2. [75b..f25] initial dfinity bringup | By - rupansh | On - 2022-06-27T12:28:17Z
 3. [b7a..af6] TON: use proper currency | By - rupansh | On - 2022-06-25T11:39:16Z
 4. [427..605] update chain nonces for solana,ton | By - rupansh | On - 2022-06-25T09:54:33Z
 5. [22d..614] fix compilation | By - rupansh | On - 2022-06-25T09:32:34Z
 6. [2f6..9e0] ton: initial event deserialization | By - rupansh | On - 2022-06-23T17:21:13Z
 7. [454..fcf] ton: initial event handlers and minor fixes | By - rupansh | On - 2022-06-21T15:34:15Z
 8. [4b8..437] solana: fix decimals | By - rupansh | On - 2022-06-21T13:05:10Z
 9. [c8e..7ae] TON: fix event serialization | By - rupansh | On - 2022-06-21T13:03:02Z
 10. [315..30d] solana: event fixes | By - rupansh | On - 2022-06-20T19:01:00Z
 11. [080..ac0] solana: get action id from event | By - rupansh | On - 2022-06-20T18:42:00Z
 12. [319..0c2] TON: partially move serialization to the contract | By - rupansh | On - 2022-06-19T17:50:36Z
 13. [286..02c] initial TON boilerplate | By - rupansh | On - 2022-06-19T17:42:19Z
 14. [28a..25e] solana: initial event decoding | By - rupansh | On - 2022-06-19T16:39:08Z
 15. [8f8..48d] add support for SHA256 based FROST ED25519 signatures | By - rupansh | On - 2022-06-17T18:25:24Z
 16. [dc9..b25] solana: unfreeze updates | By - rupansh | On - 2022-06-17T17:52:33Z
 17. [116..99c] solana: initial unfreeze | By - rupansh | On - 2022-06-13T19:36:30Z
 18. [1ff..28a] initial partial solana implementation | By - rupansh | On - 2022-06-12T14:08:57Z
 19. [308..2d7] handlers: secret: fixes | By - imsk17 | On - 2022-06-09T11:51:40Z
 20. [fa1..857] secret: wrapping: use correct field for metadata | By - imsk17 | On - 2022-06-07T15:33:03Z
 21. [b22..7db] lint: fix eslint issues | By - imsk17 | On - 2022-06-03T11:00:06Z
 22. [c69..df0] LINT | By - imsk17 | On - 2022-05-31T13:16:12Z
 23. [990..414] [TEMP]: signal: remove sig verification | By - rupansh | On - 2022-05-25T14:44:09Z
 24. [9fa..747] frost: sr25519: use sr25519KeypairFromSeed for converting priv key | By - rupansh | On - 2022-05-24T19:54:30Z
 25. [8bd..6d6] polkadot-wasm: add peer dep | By - rupansh | On - 2022-05-24T15:58:27Z
 26. [432..9ea] frost: sr25519: convert private key to proper format for signing | By - rupansh | On - 2022-05-24T15:58:17Z
 27. [b33..2e1] scrt: add xpnft,xpnftContractHash to mintWith | By - rupansh | On - 2022-05-24T15:17:38Z
 28. [a75..27f] scrt: fix identToVerifiable | By - rupansh | On - 2022-05-24T15:06:50Z
 29. [aac..942] bridge: scrt: use correct currency | By - rupansh | On - 2022-05-24T12:25:13Z
 30. [379..538] deps: configSecretHelper: attach wallet to client | By - rupansh | On - 2022-05-24T12:24:32Z
 31. [7ab..d18] enable secret | By - rupansh | On - 2022-05-20T09:29:30Z
 32. [b42..e37] bump web3-contracts dep | By - rupansh | On - 2022-04-26T14:31:12Z
 33. [be0..cbc] scrt: update for contract changes | By - rupansh | On - 2022-04-20T18:49:50Z
 34. [5b8..b7d] initial ed25519 support | By - rupansh | On - 2022-04-15T17:39:02Z
 35. [824..3f5] initial secret network support | By - rupansh | On - 2022-04-15T17:08:00Z
 36. [5c2..e9b] Revert "bridge: redo aggregation if sending txn failed due to `failed to verify signature`" | By - rupansh | On - 2022-04-12T14:04:06Z
 37. [50a..8e3] bridge: redo aggregation if sending txn failed due to `failed to verify signature` | By - rupansh | On - 2022-04-12T13:49:51Z
 38. [146..9ae] tsconfig: enable skipLibCheck | By - rupansh | On - 2022-04-12T13:01:29Z
 39. [dc0..1f9] use custom block.chainid for aurora | By - rupansh | On - 2022-04-12T13:01:14Z
 40. [c1f..be9] package: bump elrond | By - rupansh | On - 2022-03-26T18:19:56Z
 41. [353..581] elrond: await sync before handling again | By - rupansh | On - 2022-03-26T18:18:32Z
 42. [d8a..def] elrond: increment nonce in advance | By - rupansh | On - 2022-03-26T17:37:00Z
 43. [d3e..a04] tezos: log on listenEvents call | By - rupansh | On - 2022-03-17T11:45:06Z
 44. [01c..23a] Revert "tezos: tweak fees for transfer instead" | By - rupansh | On - 2022-03-16T17:02:45Z
 45. [a15..01b] tezos: tweak fees for transfer instead | By - rupansh | On - 2022-03-16T16:49:07Z
 46. [f3e..2fb] tezos: tweak tx fee | By - rupansh | On - 2022-03-16T16:35:23Z
 47. [284..1ab] Merge remote-tracking branch 'origin/elrond-royalties' into erc1155 | By - imsk17 | On - 2022-03-16T13:21:47Z
 48. [f66..3b4] tron: helpers: fix the serialize event function for unfreeze txns | By - imsk17 | On - 2022-03-16T13:11:35Z
 49. [492..cda] tezos: getUriFA2: add a fallback for NFTs with no URI | By - imsk17 | On - 2022-03-16T13:10:59Z
 50. [2f8..eea] bridge: factory: tron: fix hexC production | By - imsk17 | On - 2022-03-15T17:21:59Z

## erc1155-staging


 1. [4c1..54d] fix secret | By - Alex Moshinsky | On - 2022-12-01T19:00:40Z
 2. [13e..453] Config: Env: Rename Solana Vars | By - imsk17 | On - 2022-11-29T11:44:01Z
 3. [3f2..b92] Config: Env: Rename Solana Vars | By - imsk17 | On - 2022-11-29T11:42:07Z
 4. [7d6..b8b] feat(chains): add caduceus | By - imsk17 | On - 2022-11-29T11:38:02Z
 5. [732..34b] SHandlers: Solana: Fix Event Decoding | By - imsk17 | On - 2022-11-28T12:08:23Z
 6. [f38..e05] add trim() | By - Alex Moshinsky | On - 2022-11-27T11:01:10Z
 7. [fee..2fb] Solana: Making It Work | By - imsk17 | On - 2022-11-25T13:55:54Z
 8. [e8d..c95] Packages: Solana: Match Contract Repo Versions | By - imsk17 | On - 2022-11-25T10:04:59Z
 9. [1d7..eee] Handler: Solana: Code from Tests | By - imsk17 | On - 2022-11-25T08:40:38Z
 10. [d16..2f1] Aptos: Add Staging ABIs | By - imsk17 | On - 2022-11-23T12:22:36Z
 11. [059..bac] IPFS: Fix IPFS Lock File Issue | By - imsk17 | On - 2022-11-23T10:11:08Z
 12. [cdf..02b] Handler: Secret: Find Events instead of using hardcoded indices | By - imsk17 | On - 2022-11-23T09:52:48Z
 13. [5f2..633] Config: Update for Aptos Testnet | By - imsk17 | On - 2022-11-23T08:41:52Z
 14. [48c..532] Aptos: Move to Testnet from Devnet | By - imsk17 | On - 2022-11-22T11:35:01Z
 15. [9f4..0b6] Handler: Solana: Changes as per new contract | By - imsk17 | On - 2022-11-22T08:49:16Z
 16. [475..e86] Encoding: Use Typed Constructors | By - imsk17 | On - 2022-11-21T19:57:16Z
 17. [284..631] Solana: Handler: Use Hardcoded IDL | By - imsk17 | On - 2022-11-20T08:51:02Z
 18. [27b..89e] Config: Solana: Build Bridge Contract Program in Handler | By - imsk17 | On - 2022-11-20T08:41:20Z
 19. [076..e2f] Config: Solana: Dont Need Bridge PK | By - imsk17 | On - 2022-11-20T08:01:08Z
 20. [8d6..e00] Solana: Configure Handler | By - imsk17 | On - 2022-11-18T12:42:46Z
 21. [94f..d77] test fix algorand wnft | By - Alex Moshinsky | On - 2022-11-14T08:55:05Z
 22. [529..0e8] Aptos: Wrap Collection Creator Address For Unfreeze | By - imsk17 | On - 2022-11-14T07:23:09Z
 23. [b14..6e0] disable fee | By - Alex Moshinsky | On - 2022-11-10T16:57:50Z
 24. [bd4..1bf] add handling for /dec/ unfreeze endpoint properly | By - rupansh | On - 2022-11-10T14:51:17Z
 25. [e29..25d] aptos: abi: new for testnet | By - imsk17 | On - 2022-11-10T11:06:52Z
 26. [69e..a77] aptos: serialization: cleanup of useless fields | By - imsk17 | On - 2022-11-09T17:13:26Z
 27. [d31..7f4] aptos: bump abis/2 | By - imsk17 | On - 2022-11-09T13:26:35Z
 28. [484..57b] Handlers: Aptos: Update Client Implementation | By - imsk17 | On - 2022-11-09T12:34:27Z
 29. [3c8..32b] ton: return txHash | By - rupansh | On - 2022-11-09T10:18:57Z
 30. [851..8f3] aptos: bump abis | By - imsk17 | On - 2022-11-09T08:33:13Z
 31. [ace..1aa] aptos fix2 | By - Alex Moshinsky | On - 2022-11-09T06:04:44Z
 32. [086..bcb] fix aptos | By - Alex Moshinsky | On - 2022-11-09T06:03:48Z
 33. [55a..17a] aptos: update for contract changes | By - rupansh | On - 2022-11-08T19:05:20Z
 34. [68c..c3d] aptos: improve data fetching | By - rupansh | On - 2022-11-08T19:05:20Z
 35. [128..8ec] aptos: support for testnet | By - Rupansh Sekar | On - 2022-11-08T14:17:40Z
 36. [3fb..95f] ton: force release lock upon timeout | By - rupansh | On - 2022-11-07T15:30:43Z
 37. [309..fc8] ton: increase txLock timeout | By - rupansh | On - 2022-11-07T15:29:33Z
 38. [b14..70b] aptos: fix minor derp | By - rupansh | On - 2022-11-07T15:09:25Z
 39. [49e..226] ton: fix improper usage of contentUri as baseUri | By - rupansh | On - 2022-11-07T14:59:18Z
 40. [c82..fa1] aptos: improve event decoding | By - rupansh | On - 2022-11-06T19:09:23Z
 41. [da4..eff] bridge: if aptos: append action id to meta name | By - Rupansh Sekar | On - 2022-11-03T14:34:39Z
 42. [36d..cb3] fixes: chains: all from testnet | By - imsk17 | On - 2022-11-03T12:00:04Z
 43. [ac2..9ef] web3: handler: estimate gas or use default | By - imsk17 | On - 2022-11-02T11:44:37Z
 44. [f30..f92] bridge: bump web3-contracts | By - imsk17 | On - 2022-11-01T13:33:17Z
 45. [c73..14b] bridge: bump web3-contracts | By - imsk17 | On - 2022-11-01T12:24:39Z
 46. [63d..7ea] add false to serializeVecWithFunc at aptos | By - Alex Moshinsky | On - 2022-10-31T16:26:54Z
 47. [119..cca] aptos: fix transfer serialization | By - rupansh | On - 2022-10-31T15:34:10Z
 48. [a40..926] handlers: web3: try to estimate gas if possible | By - imsk17 | On - 2022-10-31T06:21:01Z
 49. [c41..857] more fee ton | By - Alex Moshinsky | On - 2022-10-27T10:55:50Z
 50. [165..9ae] ton: createMintMsg: change amount to nft item | By - rupansh | On - 2022-10-27T10:07:56Z

## erc1155


 1. [e54..a0b] tezos: handler: get rid of array fill | By - imsk17 | On - 2023-02-10T08:58:07Z
 2. [340..b93] tezos: handler: batch-methods: increase gas | By - imsk17 | On - 2023-02-09T20:10:05Z
 3. [2c7..81f] tezos: handler: fix transfer batch | By - imsk17 | On - 2023-02-09T19:37:01Z
 4. [f18..932] tezos: handler: use methodsObject for more clarity | By - imsk17 | On - 2023-02-09T19:31:22Z
 5. [0a7..709] tezos: handler: adapt to the amount changes in transfer fns | By - imsk17 | On - 2023-02-09T17:23:23Z
 6. [660..d87] Helpers: Tezos: Implement Batch Methods | By - imsk17 | On - 2023-02-07T12:16:39Z
 7. [28e..5e8] Handlers: Near: Update for New Contract | By - imsk17 | On - 2023-02-04T13:05:38Z
 8. [285..910] add ARBITRUM chain to configs | By - AlexeyAdoniev | On - 2023-01-18T12:45:27Z
 9. [a03..561] solana: handler: use our own implementation of getOrCreateTokenAccount | By - imsk17 | On - 2022-12-20T11:46:32Z
 10. [18e..5c4] chains: web3: add okc | By - imsk17 | On - 2022-12-20T11:41:50Z
 11. [4ab..283] solana: getOrCreateTokenAccount: add finalized confirmation strategy | By - imsk17 | On - 2022-12-14T14:37:18Z
 12. [45e..a50] fix: secret: update xpnft to be consistent with the standard | By - imsk17 | On - 2022-12-01T19:13:31Z
 13. [c24..b2d] env: example: add caduceus | By - imsk17 | On - 2022-11-29T11:44:01Z
 14. [13e..453] Config: Env: Rename Solana Vars | By - imsk17 | On - 2022-11-29T11:44:01Z
 15. [3f2..b92] Config: Env: Rename Solana Vars | By - imsk17 | On - 2022-11-29T11:42:07Z
 16. [7d6..b8b] feat(chains): add caduceus | By - imsk17 | On - 2022-11-29T11:38:02Z
 17. [732..34b] SHandlers: Solana: Fix Event Decoding | By - imsk17 | On - 2022-11-28T12:08:23Z
 18. [f38..e05] add trim() | By - Alex Moshinsky | On - 2022-11-27T11:01:10Z
 19. [fee..2fb] Solana: Making It Work | By - imsk17 | On - 2022-11-25T13:55:54Z
 20. [e8d..c95] Packages: Solana: Match Contract Repo Versions | By - imsk17 | On - 2022-11-25T10:04:59Z
 21. [1d7..eee] Handler: Solana: Code from Tests | By - imsk17 | On - 2022-11-25T08:40:38Z
 22. [d16..2f1] Aptos: Add Staging ABIs | By - imsk17 | On - 2022-11-23T12:22:36Z
 23. [059..bac] IPFS: Fix IPFS Lock File Issue | By - imsk17 | On - 2022-11-23T10:11:08Z
 24. [cdf..02b] Handler: Secret: Find Events instead of using hardcoded indices | By - imsk17 | On - 2022-11-23T09:52:48Z
 25. [5f2..633] Config: Update for Aptos Testnet | By - imsk17 | On - 2022-11-23T08:41:52Z
 26. [48c..532] Aptos: Move to Testnet from Devnet | By - imsk17 | On - 2022-11-22T11:35:01Z
 27. [9f4..0b6] Handler: Solana: Changes as per new contract | By - imsk17 | On - 2022-11-22T08:49:16Z
 28. [475..e86] Encoding: Use Typed Constructors | By - imsk17 | On - 2022-11-21T19:57:16Z
 29. [284..631] Solana: Handler: Use Hardcoded IDL | By - imsk17 | On - 2022-11-20T08:51:02Z
 30. [27b..89e] Config: Solana: Build Bridge Contract Program in Handler | By - imsk17 | On - 2022-11-20T08:41:20Z
 31. [076..e2f] Config: Solana: Dont Need Bridge PK | By - imsk17 | On - 2022-11-20T08:01:08Z
 32. [8d6..e00] Solana: Configure Handler | By - imsk17 | On - 2022-11-18T12:42:46Z
 33. [94f..d77] test fix algorand wnft | By - Alex Moshinsky | On - 2022-11-14T08:55:05Z
 34. [529..0e8] Aptos: Wrap Collection Creator Address For Unfreeze | By - imsk17 | On - 2022-11-14T07:23:09Z
 35. [b14..6e0] disable fee | By - Alex Moshinsky | On - 2022-11-10T16:57:50Z
 36. [bd4..1bf] add handling for /dec/ unfreeze endpoint properly | By - rupansh | On - 2022-11-10T14:51:17Z
 37. [e29..25d] aptos: abi: new for testnet | By - imsk17 | On - 2022-11-10T11:06:52Z
 38. [69e..a77] aptos: serialization: cleanup of useless fields | By - imsk17 | On - 2022-11-09T17:13:26Z
 39. [d31..7f4] aptos: bump abis/2 | By - imsk17 | On - 2022-11-09T13:26:35Z
 40. [484..57b] Handlers: Aptos: Update Client Implementation | By - imsk17 | On - 2022-11-09T12:34:27Z
 41. [3c8..32b] ton: return txHash | By - rupansh | On - 2022-11-09T10:18:57Z
 42. [851..8f3] aptos: bump abis | By - imsk17 | On - 2022-11-09T08:33:13Z
 43. [ace..1aa] aptos fix2 | By - Alex Moshinsky | On - 2022-11-09T06:04:44Z
 44. [086..bcb] fix aptos | By - Alex Moshinsky | On - 2022-11-09T06:03:48Z
 45. [55a..17a] aptos: update for contract changes | By - rupansh | On - 2022-11-08T19:05:20Z
 46. [68c..c3d] aptos: improve data fetching | By - rupansh | On - 2022-11-08T19:05:20Z
 47. [128..8ec] aptos: support for testnet | By - Rupansh Sekar | On - 2022-11-08T14:17:40Z
 48. [3fb..95f] ton: force release lock upon timeout | By - rupansh | On - 2022-11-07T15:30:43Z
 49. [309..fc8] ton: increase txLock timeout | By - rupansh | On - 2022-11-07T15:29:33Z
 50. [b14..70b] aptos: fix minor derp | By - rupansh | On - 2022-11-07T15:09:25Z

## feat/evm-unique-collection


 1. [993..9a8] collection uniqueness for evm | By - shahmeerzaidi | On - 2023-02-15T13:59:04Z
 2. [1cb..911] refactor(auto-deployment): generalize auto-deplooyment | By - Fassih Haider | On - 2023-02-15T06:34:48Z
 3. [0f4..c68] fix(solana): add error handling in serializeTransferUnique | By - Fassih Haider | On - 2023-02-14T15:40:25Z
 4. [7c7..1ce] fix(solana): hotfix to stop solana from crashing | By - Fassih Haider | On - 2023-02-14T15:30:08Z
 5. [ab5..66a] fix(solana): add collection name | By - Fassih Haider | On - 2023-02-14T15:00:31Z
 6. [65b..6fd] fix(solana): remove return from catch for retrying | By - Fassih Haider | On - 2023-02-14T14:55:08Z
 7. [a8d..17a] fix(solana): add retries when creating new collection | By - Fassih Haider | On - 2023-02-14T10:03:38Z
 8. [525..a72] fix(solana): make bridge owner of collection, rm clg  stmts | By - Fassih Haider | On - 2023-02-14T09:33:09Z
 9. [ca2..d0d] Merge branch 'production' of https://github.com/XP-NETWORK/migration-validator into feat/solana-auto-deployment | By - Fassih Haider | On - 2023-02-13T15:19:05Z
 10. [24d..0a7] fix(solana): add retries when getting nft address | By - Fassih Haider | On - 2023-02-13T14:48:55Z
 11. [994..43a] fix(solana): update commitments in more places | By - Fassih Haider | On - 2023-02-13T14:30:48Z
 12. [ae1..a94] fix(solana): fix commitment for solana create nft | By - Fassih Haider | On - 2023-02-13T13:50:41Z
 13. [bae..7ea] Metadata: Erc721: Add image_data | By - imsk17 | On - 2023-02-13T13:48:52Z
 14. [da7..e1a] Helpers: Tezos: Add Functionality for batch transfers | By - imsk17 | On - 2023-02-13T13:31:19Z
 15. [0e1..554] fix(solana): change commitment for create collec | By - Fassih Haider | On - 2023-02-13T13:15:50Z
 16. [320..c2b] revert(solana): change back commitment type | By - Fassih Haider | On - 2023-02-13T12:39:37Z
 17. [da9..195] fix(solana): change commitment type for create collec | By - Fassih Haider | On - 2023-02-13T12:34:47Z
 18. [a81..263] debug(whitelist): remove return stmt for !_isWhitelistable | By - Fassih Haider | On - 2023-02-13T11:51:36Z
 19. [6af..a9f] refactor(solana): remove action id when calling addMintFor | By - Fassih Haider | On - 2023-02-13T11:30:04Z
 20. [40f..36e] Merge branch 'production' of https://github.com/XP-NETWORK/migration-validator into feat/solana-auto-deployment | By - Fassih Haider | On - 2023-02-13T11:29:11Z
 21. [bf3..7e9] refactor(Polygon): Update gas fees | By - Fassih Haider | On - 2023-02-13T09:36:45Z
 22. [df5..0c1] add whitelist back | By - Fassih Haider | On - 2023-02-13T09:14:51Z
 23. [291..b35] fix: add hardcoded gas | By - Fassih Haider | On - 2023-02-13T09:02:08Z
 24. [942..c92] fix imports | By - Fassih Haider | On - 2023-02-13T08:54:54Z
 25. [4ac..a91] remove unused imports | By - Fassih Haider | On - 2023-02-13T08:54:02Z
 26. [bd8..7bb] fix(Polygon): fix brackets | By - Fassih Haider | On - 2023-02-13T08:53:10Z
 27. [0d4..6de] debug(Polygon): remove return | By - Fassih Haider | On - 2023-02-13T08:48:19Z
 28. [f67..2cf] feat(Polygon): add constant gas values for Polygon | By - Fassih Haider | On - 2023-02-13T08:40:47Z
 29. [59f..e41] revert back the gas station changes | By - Irtisam | On - 2023-02-12T17:05:55Z
 30. [2bb..5b4] gas station update for avax | By - Irtisam | On - 2023-02-12T16:47:39Z
 31. [030..e5f] (fixed) fantom gas station and conflict in chain nonces of heco and avax | By - Irtisam | On - 2023-02-12T16:26:14Z
 32. [668..621] added return back to whutelist_notify event | By - Irtisam | On - 2023-02-12T15:02:45Z
 33. [c6d..969] filter based on chain nonce in getMintWith | By - Irtisam | On - 2023-02-12T14:53:40Z
 34. [bc2..b28] filter based on chain nonce in getMintWith | By - Irtisam | On - 2023-02-12T14:48:43Z
 35. [9a6..87e] remove cast to string for extracted hexed tokenid | By - Irtisam | On - 2023-02-12T13:42:19Z
 36. [b6f..c21] fixed arbitrum config object | By - Irtisam | On - 2023-02-12T13:33:49Z
 37. [2b7..2bf] fixed arbitrum config object | By - Irtisam | On - 2023-02-12T13:31:25Z
 38. [5e9..986] remove length check from heexString when we are extracting tokenid | By - zothix | On - 2023-02-12T13:28:23Z
 39. [785..c26] remove length check from heexString when we are extracting tokenid | By - zothix | On - 2023-02-12T13:28:07Z
 40. [1e0..25c] Add ARBITRUM CONFIG | By - AlexeyAdoniev | On - 2023-02-12T13:16:20Z
 41. [239..549] temp remove return from whitelist | By - Irtisam | On - 2023-02-12T12:41:40Z
 42. [d8d..564] refactor token id extraction | By - Irtisam | On - 2023-02-12T12:29:38Z
 43. [72c..dac] added slash in url for ton collection getting and uploading | By - Irtisam | On - 2023-02-12T09:30:07Z
 44. [acc..778] Merge branch 'feat/solana-auto-deployment' of https://github.com/XP-NETWORK/migration-validator into feat/solana-auto-deployment | By - Irtisam | On - 2023-02-12T09:28:59Z
 45. [e4e..47c] added slash in url for ton collection getting and uploading | By - Irtisam | On - 2023-02-12T09:28:36Z
 46. [5dc..7e1] Update index.ts | By - awkwardman.dev | On - 2023-02-11T16:34:08Z
 47. [d8d..150] Merge pull request #18 from XP-NETWORK/feat/solana-auto-deployment | By - awkwardman.dev | On - 2023-02-11T16:31:50Z
 48. [752..5a7] update(TonWallet): Changed from v4 to v3 | By - zothix | On - 2023-02-11T16:17:15Z
 49. [0e5..d44] refactor burner unlock | By - Irtisam | On - 2023-02-11T14:35:05Z
 50. [182..67a] modify sleep in burnerUnlock | By - zothix | On - 2023-02-11T14:21:20Z

## feat/rm-bkp-wrapped-nft


 1. [1cb..911] refactor(auto-deployment): generalize auto-deplooyment | By - Fassih Haider | On - 2023-02-15T06:34:48Z
 2. [0f4..c68] fix(solana): add error handling in serializeTransferUnique | By - Fassih Haider | On - 2023-02-14T15:40:25Z
 3. [7c7..1ce] fix(solana): hotfix to stop solana from crashing | By - Fassih Haider | On - 2023-02-14T15:30:08Z
 4. [ab5..66a] fix(solana): add collection name | By - Fassih Haider | On - 2023-02-14T15:00:31Z
 5. [65b..6fd] fix(solana): remove return from catch for retrying | By - Fassih Haider | On - 2023-02-14T14:55:08Z
 6. [a8d..17a] fix(solana): add retries when creating new collection | By - Fassih Haider | On - 2023-02-14T10:03:38Z
 7. [525..a72] fix(solana): make bridge owner of collection, rm clg  stmts | By - Fassih Haider | On - 2023-02-14T09:33:09Z
 8. [ca2..d0d] Merge branch 'production' of https://github.com/XP-NETWORK/migration-validator into feat/solana-auto-deployment | By - Fassih Haider | On - 2023-02-13T15:19:05Z
 9. [24d..0a7] fix(solana): add retries when getting nft address | By - Fassih Haider | On - 2023-02-13T14:48:55Z
 10. [994..43a] fix(solana): update commitments in more places | By - Fassih Haider | On - 2023-02-13T14:30:48Z
 11. [ae1..a94] fix(solana): fix commitment for solana create nft | By - Fassih Haider | On - 2023-02-13T13:50:41Z
 12. [bae..7ea] Metadata: Erc721: Add image_data | By - imsk17 | On - 2023-02-13T13:48:52Z
 13. [da7..e1a] Helpers: Tezos: Add Functionality for batch transfers | By - imsk17 | On - 2023-02-13T13:31:19Z
 14. [0e1..554] fix(solana): change commitment for create collec | By - Fassih Haider | On - 2023-02-13T13:15:50Z
 15. [320..c2b] revert(solana): change back commitment type | By - Fassih Haider | On - 2023-02-13T12:39:37Z
 16. [da9..195] fix(solana): change commitment type for create collec | By - Fassih Haider | On - 2023-02-13T12:34:47Z
 17. [a81..263] debug(whitelist): remove return stmt for !_isWhitelistable | By - Fassih Haider | On - 2023-02-13T11:51:36Z
 18. [6af..a9f] refactor(solana): remove action id when calling addMintFor | By - Fassih Haider | On - 2023-02-13T11:30:04Z
 19. [40f..36e] Merge branch 'production' of https://github.com/XP-NETWORK/migration-validator into feat/solana-auto-deployment | By - Fassih Haider | On - 2023-02-13T11:29:11Z
 20. [bf3..7e9] refactor(Polygon): Update gas fees | By - Fassih Haider | On - 2023-02-13T09:36:45Z
 21. [df5..0c1] add whitelist back | By - Fassih Haider | On - 2023-02-13T09:14:51Z
 22. [291..b35] fix: add hardcoded gas | By - Fassih Haider | On - 2023-02-13T09:02:08Z
 23. [942..c92] fix imports | By - Fassih Haider | On - 2023-02-13T08:54:54Z
 24. [4ac..a91] remove unused imports | By - Fassih Haider | On - 2023-02-13T08:54:02Z
 25. [bd8..7bb] fix(Polygon): fix brackets | By - Fassih Haider | On - 2023-02-13T08:53:10Z
 26. [0d4..6de] debug(Polygon): remove return | By - Fassih Haider | On - 2023-02-13T08:48:19Z
 27. [f67..2cf] feat(Polygon): add constant gas values for Polygon | By - Fassih Haider | On - 2023-02-13T08:40:47Z
 28. [59f..e41] revert back the gas station changes | By - Irtisam | On - 2023-02-12T17:05:55Z
 29. [2bb..5b4] gas station update for avax | By - Irtisam | On - 2023-02-12T16:47:39Z
 30. [030..e5f] (fixed) fantom gas station and conflict in chain nonces of heco and avax | By - Irtisam | On - 2023-02-12T16:26:14Z
 31. [668..621] added return back to whutelist_notify event | By - Irtisam | On - 2023-02-12T15:02:45Z
 32. [c6d..969] filter based on chain nonce in getMintWith | By - Irtisam | On - 2023-02-12T14:53:40Z
 33. [bc2..b28] filter based on chain nonce in getMintWith | By - Irtisam | On - 2023-02-12T14:48:43Z
 34. [9a6..87e] remove cast to string for extracted hexed tokenid | By - Irtisam | On - 2023-02-12T13:42:19Z
 35. [b6f..c21] fixed arbitrum config object | By - Irtisam | On - 2023-02-12T13:33:49Z
 36. [2b7..2bf] fixed arbitrum config object | By - Irtisam | On - 2023-02-12T13:31:25Z
 37. [5e9..986] remove length check from heexString when we are extracting tokenid | By - zothix | On - 2023-02-12T13:28:23Z
 38. [785..c26] remove length check from heexString when we are extracting tokenid | By - zothix | On - 2023-02-12T13:28:07Z
 39. [1e0..25c] Add ARBITRUM CONFIG | By - AlexeyAdoniev | On - 2023-02-12T13:16:20Z
 40. [239..549] temp remove return from whitelist | By - Irtisam | On - 2023-02-12T12:41:40Z
 41. [d8d..564] refactor token id extraction | By - Irtisam | On - 2023-02-12T12:29:38Z
 42. [72c..dac] added slash in url for ton collection getting and uploading | By - Irtisam | On - 2023-02-12T09:30:07Z
 43. [acc..778] Merge branch 'feat/solana-auto-deployment' of https://github.com/XP-NETWORK/migration-validator into feat/solana-auto-deployment | By - Irtisam | On - 2023-02-12T09:28:59Z
 44. [e4e..47c] added slash in url for ton collection getting and uploading | By - Irtisam | On - 2023-02-12T09:28:36Z
 45. [5dc..7e1] Update index.ts | By - awkwardman.dev | On - 2023-02-11T16:34:08Z
 46. [d8d..150] Merge pull request #18 from XP-NETWORK/feat/solana-auto-deployment | By - awkwardman.dev | On - 2023-02-11T16:31:50Z
 47. [752..5a7] update(TonWallet): Changed from v4 to v3 | By - zothix | On - 2023-02-11T16:17:15Z
 48. [0e5..d44] refactor burner unlock | By - Irtisam | On - 2023-02-11T14:35:05Z
 49. [182..67a] modify sleep in burnerUnlock | By - zothix | On - 2023-02-11T14:21:20Z
 50. [1a1..094] refactor burner unlock | By - Irtisam | On - 2023-02-11T14:10:03Z

## feat/solana-auto-deployment


 1. [492..22c] ton test | By - Irtisam | On - 2023-02-16T10:22:53Z
 2. [2ba..10c] build: fix build errors | By - Fassih Haider | On - 2023-02-16T10:22:23Z
 3. [2b7..b88] fix(solana): use correct key in serializeUnfreezeNft | By - Fassih Haider | On - 2023-02-16T10:15:12Z
 4. [127..809] Merge branch 'production' of https://github.com/XP-NETWORK/migration-validator into feat/solana-auto-deployment | By - Fassih Haider | On - 2023-02-16T10:00:23Z
 5. [505..592] feat(polygon): make getGasForPolygon loosly coupled | By - Fassih Haider | On - 2023-02-16T09:58:09Z
 6. [9c9..8fd] Merge branch 'feat/solana-auto-deployment' of https://github.com/XP-NETWORK/migration-validator into feat/solana-auto-deployment | By - Fassih Haider | On - 2023-02-16T09:16:39Z
 7. [7a3..acd] debug(solana): re-add logs, disable functionality to get royalty | By - Fassih Haider | On - 2023-02-16T09:16:35Z
 8. [216..603] Merge branch 'feat/solana-auto-deployment' of https://github.com/XP-NETWORK/migration-validator into feat/solana-auto-deployment | By - MuhammadFassihHaider | On - 2023-02-16T08:51:47Z
 9. [82d..588] aptos abi update. | By - MuhammadFassihHaider | On - 2023-02-16T08:51:37Z
 10. [dfc..f8c] debug(whitelist): disable _isWhitelistable check | By - Fassih Haider | On - 2023-02-16T08:21:36Z
 11. [14c..5ac] refactor(solana): use generalized checkOrAddMintWith function | By - Fassih Haider | On - 2023-02-16T08:13:23Z
 12. [acd..aa9] Merge branch 'feat/rm-bkp-wrapped-nft' of https://github.com/XP-NETWORK/migration-validator into feat/solana-auto-deployment | By - Fassih Haider | On - 2023-02-16T08:07:37Z
 13. [ee8..1d6] Merge branch 'production' of https://github.com/XP-NETWORK/migration-validator into feat/solana-auto-deployment | By - Fassih Haider | On - 2023-02-16T07:25:32Z
 14. [329..99a] revert back the changes for validators | By - Irtisam | On - 2023-02-15T19:20:53Z
 15. [857..ced] temp change v3R2 to v4R2 | By - Irtisam | On - 2023-02-15T18:56:25Z
 16. [cdd..e8f] fix bullshit condition | By - Irtisam | On - 2023-02-15T17:49:46Z
 17. [f19..d61] Merge branch 'production' of https://github.com/XP-NETWORK/migration-validator into production | By - Irtisam | On - 2023-02-15T17:40:08Z
 18. [a82..8a9] test ton tokenID | By - Irtisam | On - 2023-02-15T17:38:54Z
 19. [c53..0c6] Merge branch 'feat/solana-auto-deployment' of https://github.com/XP-NETWORK/migration-validator into feat/solana-auto-deployment | By - Fassih Haider | On - 2023-02-15T17:06:41Z
 20. [324..1ca] fix(solana): add collection royalty to nft | By - Fassih Haider | On - 2023-02-15T17:06:37Z
 21. [593..f10] refactor(solana): improve code, remove clg, make functions | By - Fassih Haider | On - 2023-02-15T17:01:15Z
 22. [8b1..a1c] debug(polygon): remove clg stmts | By - Fassih Haider | On - 2023-02-15T16:52:14Z
 23. [18a..aa1] Merge branch 'production' of https://github.com/XP-NETWORK/migration-validator into production | By - Fassih Haider | On - 2023-02-15T16:11:44Z
 24. [2cd..7e1] debug(whitelist): remove whitelist for testing | By - Fassih Haider | On - 2023-02-15T16:11:40Z
 25. [78a..71f] remove throw and add old originalMintWith back | By - zothix | On - 2023-02-15T16:02:10Z
 26. [58a..861] debug(polygon): add clg stmts | By - Fassih Haider | On - 2023-02-15T15:42:44Z
 27. [7e7..b84] feat(polygon): update env.example | By - Fassih Haider | On - 2023-02-15T15:14:34Z
 28. [09e..8d1] Merge branch 'production' of https://github.com/XP-NETWORK/migration-validator into production | By - Fassih Haider | On - 2023-02-15T15:11:12Z
 29. [94d..665] feat(polygon): create function to get gas for polygon | By - Fassih Haider | On - 2023-02-15T15:10:53Z
 30. [62c..395] update aptos sbi | By - Irtisam | On - 2023-02-15T14:10:09Z
 31. [9d9..7c2] fix(solana): update metadata field | By - Fassih Haider | On - 2023-02-15T13:25:24Z
 32. [325..b1c] debug(polygon): reduce gas price | By - Fassih Haider | On - 2023-02-15T13:03:41Z
 33. [948..42a] fix(solana): change mint_acc -> contract | By - Fassih Haider | On - 2023-02-15T12:54:22Z
 34. [302..527] debug(solana): add console statement | By - Fassih Haider | On - 2023-02-15T12:27:56Z
 35. [bf0..36a] fix(build): remove build errors | By - Fassih Haider | On - 2023-02-15T12:12:29Z
 36. [441..a73] fix(solana): add unique source_token_id | By - Fassih Haider | On - 2023-02-15T12:10:53Z
 37. [5a6..1cd] fix(solana): add new mintWith in metadata | By - Fassih Haider | On - 2023-02-15T11:48:45Z
 38. [361..e9c] fix(polygon): decrease gas | By - Fassih Haider | On - 2023-02-15T11:35:19Z
 39. [3a5..f96] fix(build): fix build errors | By - Fassih Haider | On - 2023-02-15T11:18:44Z
 40. [d0b..db8] fix(solana): add getMintWith for solana in Sol -> EVM | By - Fassih Haider | On - 2023-02-15T11:16:05Z
 41. [a0a..398] debug(solana): add clg stmts | By - Fassih Haider | On - 2023-02-15T08:50:18Z
 42. [77d..af6] debug(solana): add clg stmts | By - Fassih Haider | On - 2023-02-15T08:09:14Z
 43. [1cb..911] refactor(auto-deployment): generalize auto-deplooyment | By - Fassih Haider | On - 2023-02-15T06:34:48Z
 44. [0f4..c68] fix(solana): add error handling in serializeTransferUnique | By - Fassih Haider | On - 2023-02-14T15:40:25Z
 45. [7c7..1ce] fix(solana): hotfix to stop solana from crashing | By - Fassih Haider | On - 2023-02-14T15:30:08Z
 46. [ab5..66a] fix(solana): add collection name | By - Fassih Haider | On - 2023-02-14T15:00:31Z
 47. [65b..6fd] fix(solana): remove return from catch for retrying | By - Fassih Haider | On - 2023-02-14T14:55:08Z
 48. [9c2..95c] thrown instead of originalMintWith | By - shahmeerzaidi | On - 2023-02-14T11:28:11Z
 49. [a8d..17a] fix(solana): add retries when creating new collection | By - Fassih Haider | On - 2023-02-14T10:03:38Z
 50. [525..a72] fix(solana): make bridge owner of collection, rm clg  stmts | By - Fassih Haider | On - 2023-02-14T09:33:09Z

## feat/whitelist


 1. [bc0..497] Merge pull request #14 from XP-NETWORK/solana-whitelist-test | By - awkwardman.dev | On - 2022-12-29T07:30:57Z
 2. [c67..79b] Merge branch 'feat/whitelist' into solana-whitelist-test | By - awkwardman.dev | On - 2022-12-29T07:30:39Z
 3. [c7d..712] fix: fix condition | By - Irtisam | On - 2022-12-29T07:23:58Z
 4. [e0f..6c9] refactor: add clg stmts | By - Irtisam | On - 2022-12-29T06:56:49Z
 5. [350..d18] refactor: add clg stmt | By - Irtisam | On - 2022-12-28T14:56:16Z
 6. [5ea..6ed] refactor: add clg stmts | By - zothix | On - 2022-12-28T14:10:30Z
 7. [791..21b] fix: add missing break stmt | By - Irtisam | On - 2022-12-28T13:55:35Z
 8. [fc6..05b] refactor: add clg stmt | By - Irtisam | On - 2022-12-28T13:43:05Z
 9. [e7c..d30] fix: replace promise with string | By - zothix | On - 2022-12-28T13:35:51Z
 10. [302..019] refactor: update clg stmt | By - Irtisam | On - 2022-12-28T13:01:05Z
 11. [e1b..41e] refactor: add clg stmt | By - Irtisam | On - 2022-12-28T12:59:00Z
 12. [7e7..b9a] refactor: change endpoint | By - Irtisam | On - 2022-12-28T12:44:39Z
 13. [078..349] refactor: update abi | By - Irtisam | On - 2022-12-28T12:44:15Z
 14. [e33..cfe] fix: add retry limit cond. | By - Irtisam | On - 2022-12-28T12:44:05Z
 15. [4a7..57c] refactor: :loud_sound: update err logs | By - Fassih Haider | On - 2022-12-28T12:17:20Z
 16. [058..b4d] feat: :construction: add impl. for ton nft whitelist | By - Fassih Haider | On - 2022-12-28T10:57:07Z
 17. [b14..2a6] refactoring | By - Debian | On - 2022-12-26T12:39:55Z
 18. [cd8..b99] added check for ton in getMintWith | By - Debian | On - 2022-12-22T09:53:07Z
 19. [255..5e0] added check for ton in getMintWith | By - Debian | On - 2022-12-22T09:44:40Z
 20. [256..a9d] Added check for new mintWith to work with only erc721 atm | By - Debian | On - 2022-12-21T17:45:01Z
 21. [840..989] Added check for new mintWith to work with only erc721 atm | By - Debian | On - 2022-12-21T17:43:24Z
 22. [d71..e1a] added logs to unfreeze ton | By - root | On - 2022-12-21T14:46:50Z
 23. [71a..daa] remove lowercase for ton | By - Debian | On - 2022-12-21T12:32:55Z
 24. [f9a..f15] added check for erc721 when transfering | By - Debian | On - 2022-12-21T12:15:57Z
 25. [84b..c3d] added check for erc721 when transfering | By - Debian | On - 2022-12-21T12:10:22Z
 26. [f5d..e55] added comments to ton freeze | By - root | On - 2022-12-21T11:54:33Z
 27. [393..6ff] added getMintWith when uploading metadata | By - Debian | On - 2022-12-21T11:04:31Z
 28. [68d..8fd] test uri update | By - Debian | On - 2022-12-21T04:25:43Z
 29. [30e..337] test uri update | By - Debian | On - 2022-12-21T03:44:22Z
 30. [ab1..1ea] test uri update | By - Debian | On - 2022-12-21T03:27:53Z
 31. [059..726] fix for uri | By - Debian | On - 2022-12-21T02:24:03Z
 32. [189..f23] sc verify fix | By - Debian | On - 2022-12-21T02:13:54Z
 33. [a2d..ac2] added condition for whitelisting | By - Debian | On - 2022-12-21T00:51:29Z
 34. [7dd..06c] added condition for whitelisting | By - Debian | On - 2022-12-21T00:32:22Z
 35. [9be..63c] added checck for inverse chains in getMintWith | By - Debian | On - 2022-12-21T00:06:09Z
 36. [1e7..04e] added gas estimation on whitelist for polygon with extra 40 | By - Debian | On - 2022-12-20T23:22:53Z
 37. [b9b..80f] added gas estimation on whitelist for polygon | By - Debian | On - 2022-12-20T23:15:14Z
 38. [fff..ab5] added gas estimation on whitelist for polygon | By - Debian | On - 2022-12-20T23:07:48Z
 39. [63b..d40] added gas estimation on whitelist for polygon | By - Debian | On - 2022-12-20T23:06:34Z
 40. [d2b..1fe] added gas estimation on whitelist for polygon | By - Debian | On - 2022-12-20T22:47:43Z
 41. [cd3..ace] added gas estimation on whitelist for polygon | By - Debian | On - 2022-12-20T22:41:55Z
 42. [7e0..859] added polygon gas station gas estimation | By - Debian | On - 2022-12-20T22:38:09Z
 43. [20c..3ad] added polygon gas station gas estimation | By - Debian | On - 2022-12-20T22:33:43Z
 44. [11b..66c] added auto whitelist evm by notifying notifier | By - Debian | On - 2022-12-20T22:29:05Z
 45. [5fe..6c7] added auto whitelist evm by notifying notifier | By - Debian | On - 2022-12-20T21:38:01Z
 46. [26d..c73] added auto whitelist evm new collection | By - Debian | On - 2022-12-20T21:15:14Z
 47. [4b7..00f] added check for Eip1559 | By - Debian | On - 2022-12-20T20:35:05Z
 48. [992..76c] test without explicit gas | By - Debian | On - 2022-12-20T19:21:54Z
 49. [9e2..79e] added from in tx for getMintWith | By - Debian | On - 2022-12-20T18:51:01Z
 50. [e21..507] added chain iden | By - Debian | On - 2022-12-20T18:43:54Z

## features/algorand


 1. [825..b62] bridge: ipfsMetadataFetch: add timeout | By - rupansh | On - 2022-04-19T15:27:01Z
 2. [4bf..f4b] bridge: httpMetadataFetch: use setTimeout for timeout | By - rupansh | On - 2022-04-19T15:18:59Z
 3. [468..a8a] bridge: httpMetadataFetch: add 20sec timeout | By - rupansh | On - 2022-04-19T15:01:19Z
 4. [fa3..b87] pass actionId on handleUnfreezeUnique | By - rocalex | On - 2022-04-10T15:21:03Z
 5. [c7b..537] algorand: truncate nft name to 32 bytes | By - rupansh | On - 2022-04-10T14:35:50Z
 6. [2fa..55a] algorand: pass origin nonce to algoMetadataWrap properly | By - rupansh | On - 2022-04-10T14:12:50Z
 7. [0b6..a44] algorand: extract txn fee properly | By - rupansh | On - 2022-04-10T09:37:42Z
 8. [19c..b5b] algorand: update events | By - rupansh | On - 2022-04-08T15:51:04Z
 9. [a45..cf9] algorand: listenEvents: fix typo | By - rupansh | On - 2022-04-06T17:01:42Z
 10. [43c..ea8] algorand: listenEvents: use bigintFromBe for chain nonce | By - rupansh | On - 2022-04-06T16:57:35Z
 11. [df2..685] handlers: algorand: listenEvents: use proper txnInfo object | By - rupansh | On - 2022-04-06T16:33:24Z
 12. [67f..f37] bridge: chains: web3: add gatechain | By - imsk17 | On - 2022-04-06T14:34:53Z
 13. [98b..f75] handlers: use indexer for isOptIn | By - rupansh | On - 2022-04-05T11:24:11Z
 14. [8a1..7f0] bump packages | By - rupansh | On - 2022-04-05T11:23:57Z
 15. [63a..11c] bump typescript | By - rupansh | On - 2022-04-04T13:34:31Z
 16. [ba4..4da] fix teal program | By - rocalex | On - 2022-04-04T09:28:03Z
 17. [6fa..913] check if actionValidatorsLsig opt in to the app | By - rocalex | On - 2022-04-01T14:08:05Z
 18. [89e..91b] Merge branch 'features/algorand' of https://github.com/XP-NETWORK/migration-validator into features/algorand | By - rocalex | On - 2022-04-01T13:58:34Z
 19. [c74..df1] check if actionValidatorsLsig opt in to the app | By - rocalex | On - 2022-04-01T13:58:23Z
 20. [88d..8b5] getActionValidatorsProgram: prefix decodedAddr with 0x | By - rupansh | On - 2022-04-01T12:48:43Z
 21. [3be..b1d] bridge: handlers: web3: set up godwoken | By - imsk17 | On - 2022-04-01T12:08:27Z
 22. [e82..def] fix notifyServe to algorand | By - rocalex | On - 2022-03-31T16:24:29Z
 23. [696..40e] add notifyService to algorand | By - rocalex | On - 2022-03-31T16:24:00Z
 24. [3e1..36b] add notifyService to algorand handler | By - rocalex | On - 2022-03-31T15:56:21Z
 25. [6a5..59a] fix unfreeze nft | By - rocalex | On - 2022-03-31T09:43:00Z
 26. [a4f..91e] fix algorand for multisig | By - rocalex | On - 2022-03-28T09:18:26Z
 27. [6c7..2be] Merge branch 'features/algorand' of https://github.com/XP-NETWORK/migration-validator into features/algorand | By - rocalex | On - 2022-03-27T12:37:09Z
 28. [cb8..2f6] bridge: sign-and-send: not all errors are stringifyable | By - imsk17 | On - 2022-03-23T14:35:40Z
 29. [617..724] bridge: sign-and-send: not all errors are stringifyable | By - imsk17 | On - 2022-03-23T10:53:17Z
 30. [be9..a59] remove algorand port | By - rocalex | On - 2022-03-22T09:18:23Z
 31. [e02..2d0] fix getting algod/indexer | By - rocalex | On - 2022-03-22T08:43:48Z
 32. [3a2..269] fix compile program | By - rocalex | On - 2022-03-22T08:23:59Z
 33. [dde..ae6] bridge: helpers: algorand: enable algorand | By - imsk17 | On - 2022-03-21T14:07:08Z
 34. [188..424] config: bring back tezos | By - imsk17 | On - 2022-03-20T13:33:52Z
 35. [68c..410] initial algorand support | By - rupansh | On - 2022-03-20T12:50:26Z
 36. [d3e..a04] tezos: log on listenEvents call | By - rupansh | On - 2022-03-17T11:45:06Z
 37. [01c..23a] Revert "tezos: tweak fees for transfer instead" | By - rupansh | On - 2022-03-16T17:02:45Z
 38. [a15..01b] tezos: tweak fees for transfer instead | By - rupansh | On - 2022-03-16T16:49:07Z
 39. [f3e..2fb] tezos: tweak tx fee | By - rupansh | On - 2022-03-16T16:35:23Z
 40. [284..1ab] Merge remote-tracking branch 'origin/elrond-royalties' into erc1155 | By - imsk17 | On - 2022-03-16T13:21:47Z
 41. [f66..3b4] tron: helpers: fix the serialize event function for unfreeze txns | By - imsk17 | On - 2022-03-16T13:11:35Z
 42. [492..cda] tezos: getUriFA2: add a fallback for NFTs with no URI | By - imsk17 | On - 2022-03-16T13:10:59Z
 43. [2f8..eea] bridge: factory: tron: fix hexC production | By - imsk17 | On - 2022-03-15T17:21:59Z
 44. [96f..27e] Merge pull request #9 from XP-NETWORK/temp | By - Sumit Kumar | On - 2022-03-15T17:16:32Z
 45. [0f0..634] husky: add a pre commit hook for lint | By - imsk17 | On - 2022-03-15T17:15:10Z
 46. [d41..0cc] bridge: handlers: tron: adapt web3 serializers for tron | By - imsk17 | On - 2022-03-15T17:14:42Z
 47. [638..5f6] Merge pull request #8 from XP-NETWORK/features/tezos | By - Sumit Kumar | On - 2022-03-15T17:08:56Z
 48. [79f..bf8] bridge: factory: tron: fix hexC production | By - imsk17 | On - 2022-03-15T16:49:59Z
 49. [082..543] add documentation for optional fields | By - rupansh | On - 2022-03-13T19:26:44Z
 50. [faf..68f] elrond: initial royalties support | By - rupansh | On - 2022-03-13T19:21:04Z

## features/ton


 1. [121..d63] handlers for foreign -> ton | By - rocalex | On - 2022-04-28T13:27:18Z
 2. [82b..6f6] update ton bridge | By - rocalex | On - 2022-04-28T12:45:44Z
 3. [aa2..040] initial | By - rocalex | On - 2022-04-26T14:53:53Z
 4. [b42..e37] bump web3-contracts dep | By - rupansh | On - 2022-04-26T14:31:12Z
 5. [be0..cbc] scrt: update for contract changes | By - rupansh | On - 2022-04-20T18:49:50Z
 6. [5b8..b7d] initial ed25519 support | By - rupansh | On - 2022-04-15T17:39:02Z
 7. [824..3f5] initial secret network support | By - rupansh | On - 2022-04-15T17:08:00Z
 8. [5c2..e9b] Revert "bridge: redo aggregation if sending txn failed due to `failed to verify signature`" | By - rupansh | On - 2022-04-12T14:04:06Z
 9. [50a..8e3] bridge: redo aggregation if sending txn failed due to `failed to verify signature` | By - rupansh | On - 2022-04-12T13:49:51Z
 10. [146..9ae] tsconfig: enable skipLibCheck | By - rupansh | On - 2022-04-12T13:01:29Z
 11. [dc0..1f9] use custom block.chainid for aurora | By - rupansh | On - 2022-04-12T13:01:14Z
 12. [c1f..be9] package: bump elrond | By - rupansh | On - 2022-03-26T18:19:56Z
 13. [353..581] elrond: await sync before handling again | By - rupansh | On - 2022-03-26T18:18:32Z
 14. [d8a..def] elrond: increment nonce in advance | By - rupansh | On - 2022-03-26T17:37:00Z
 15. [d3e..a04] tezos: log on listenEvents call | By - rupansh | On - 2022-03-17T11:45:06Z
 16. [01c..23a] Revert "tezos: tweak fees for transfer instead" | By - rupansh | On - 2022-03-16T17:02:45Z
 17. [a15..01b] tezos: tweak fees for transfer instead | By - rupansh | On - 2022-03-16T16:49:07Z
 18. [f3e..2fb] tezos: tweak tx fee | By - rupansh | On - 2022-03-16T16:35:23Z
 19. [284..1ab] Merge remote-tracking branch 'origin/elrond-royalties' into erc1155 | By - imsk17 | On - 2022-03-16T13:21:47Z
 20. [f66..3b4] tron: helpers: fix the serialize event function for unfreeze txns | By - imsk17 | On - 2022-03-16T13:11:35Z
 21. [492..cda] tezos: getUriFA2: add a fallback for NFTs with no URI | By - imsk17 | On - 2022-03-16T13:10:59Z
 22. [2f8..eea] bridge: factory: tron: fix hexC production | By - imsk17 | On - 2022-03-15T17:21:59Z
 23. [96f..27e] Merge pull request #9 from XP-NETWORK/temp | By - Sumit Kumar | On - 2022-03-15T17:16:32Z
 24. [0f0..634] husky: add a pre commit hook for lint | By - imsk17 | On - 2022-03-15T17:15:10Z
 25. [d41..0cc] bridge: handlers: tron: adapt web3 serializers for tron | By - imsk17 | On - 2022-03-15T17:14:42Z
 26. [638..5f6] Merge pull request #8 from XP-NETWORK/features/tezos | By - Sumit Kumar | On - 2022-03-15T17:08:56Z
 27. [79f..bf8] bridge: factory: tron: fix hexC production | By - imsk17 | On - 2022-03-15T16:49:59Z
 28. [082..543] add documentation for optional fields | By - rupansh | On - 2022-03-13T19:26:44Z
 29. [faf..68f] elrond: initial royalties support | By - rupansh | On - 2022-03-13T19:21:04Z
 30. [28b..ab2] tezos: minor fixes | By - rupansh | On - 2022-03-13T18:55:03Z
 31. [304..8f6] tezos: update for contract changes | By - rupansh | On - 2022-03-13T14:08:40Z
 32. [8e6..fac] evm: fix import order | By - rupansh | On - 2022-03-13T13:14:38Z
 33. [1e7..6b9] fix compilation | By - rupansh | On - 2022-03-13T12:12:06Z
 34. [f44..770] add event listener | By - rocalex | On - 2022-03-13T07:23:47Z
 35. [b16..64b] transfer/unfreeze nft | By - rocalex | On - 2022-03-13T06:03:20Z
 36. [4e4..aff] config tezos handler | By - rocalex | On - 2022-03-13T05:29:35Z
 37. [126..5a5] initial | By - rocalex | On - 2022-03-10T15:25:22Z
 38. [6c9..bad] gas number to string | By - Ruby Edelstein | On - 2022-03-08T14:14:22Z
 39. [336..900] add polygon gasstation | By - Ruby Edelstein | On - 2022-03-08T14:10:31Z
 40. [660..d65] Update web3.ts | By - VKint | On - 2022-03-08T13:04:06Z
 41. [51d..8fa] set txfees for transfers | By - rupansh | On - 2022-03-03T18:21:34Z
 42. [2a6..058] handlers: elrond: fix gas limit | By - rupansh | On - 2022-03-03T18:13:51Z
 43. [69d..83f] use baseURL in erc721 metadata | By - rupansh | On - 2022-03-03T18:13:06Z
 44. [36a..e1a] elrond: put metadata on ipfs as well | By - rupansh | On - 2022-03-03T18:10:15Z
 45. [39e..b67] reset emitted action after adding offset | By - rupansh | On - 2022-03-03T16:46:16Z
 46. [a46..339] Add actionId offset env | By - rupansh | On - 2022-03-03T12:03:35Z
 47. [21d..a14] Merge pull request #6 from XP-NETWORK/aurora | By - VKint | On - 2022-03-03T10:32:42Z
 48. [f07..5cd] packages: exchange-rate: bump to latest | By - imsk17 | On - 2022-03-03T10:31:53Z
 49. [cd6..882] handlers: improve erc721MetadataWrap | By - rupansh | On - 2022-03-01T17:19:17Z
 50. [1f2..b6e] web3: use 60gwei as workawround for polygon | By - rupansh | On - 2022-03-01T12:54:24Z

## fix/whitelist-commitment


 1. [ea3..171] revert:  reverts to "refactor: add clg stmts" | By - Fassih Haider | On - 2023-01-16T06:37:11Z
 2. [bb4..46e] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T18:42:21Z
 3. [782..893] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T18:23:02Z
 4. [dcd..740] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T18:09:15Z
 5. [d08..b08] refactor: remove clg stmts | By - Fassih Haider | On - 2023-01-11T17:45:42Z
 6. [88f..f1f] refactor: remove delete from cache | By - Fassih Haider | On - 2023-01-11T17:25:02Z
 7. [b2c..df2] refactor: remove clg stms | By - Fassih Haider | On - 2023-01-11T17:24:20Z
 8. [dda..f35] refactor: remove some clg | By - Fassih Haider | On - 2023-01-11T17:06:12Z
 9. [b17..ca2] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T16:57:14Z
 10. [870..489] revert: remove deleteCache call instance | By - Fassih Haider | On - 2023-01-11T16:53:32Z
 11. [02f..cc6] fix: clean cache | By - Fassih Haider | On - 2023-01-11T16:25:51Z
 12. [de2..77b] refactor: remove unsused variable | By - Fassih Haider | On - 2023-01-11T13:17:32Z
 13. [af1..9d4] feat: add waiting for evm whitelisting | By - Fassih Haider | On - 2023-01-11T13:13:19Z
 14. [d23..7c4] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-11T11:17:46Z
 15. [5e7..b3e] refactor: change wait time | By - Fassih Haider | On - 2023-01-11T10:55:36Z
 16. [e85..f6e] refactor: add waiting in transfer | By - Fassih Haider | On - 2023-01-11T10:39:44Z
 17. [c28..539] fix: wrap url in encodeURIComponent | By - Fassih Haider | On - 2023-01-11T09:26:14Z
 18. [f0f..db0] fix: remove undefined error | By - Fassih Haider | On - 2023-01-11T08:47:09Z
 19. [5dc..ec8] refactor: remove unused import | By - Fassih Haider | On - 2023-01-11T07:57:48Z
 20. [793..ad6] fix: wait for whitelist | By - Fassih Haider | On - 2023-01-11T07:53:58Z
 21. [2af..99f] fixed while | By - zothix | On - 2023-01-11T07:13:33Z
 22. [f0e..17d] changed while condition | By - zothix | On - 2023-01-11T06:15:34Z
 23. [937..983] while loop fix test | By - zothix | On - 2023-01-10T13:17:49Z
 24. [67f..778] while loop fix test | By - zothix | On - 2023-01-10T13:12:14Z
 25. [4f7..b22] while loop fix test | By - zothix | On - 2023-01-10T13:09:56Z
 26. [cc4..778] removed some logs | By - zothix | On - 2023-01-10T12:30:22Z
 27. [4d8..c5d] fixed the socket message | By - zothix | On - 2023-01-10T12:03:18Z
 28. [2ae..79a] added more logs for checking whitelist wait | By - zothix | On - 2023-01-10T11:47:48Z
 29. [1bd..a57] added more logs to for debuging whitelist | By - zothix | On - 2023-01-10T09:21:05Z
 30. [f72..06e] testing wait for whitelist before transaction for ton | By - zothix | On - 2023-01-10T08:41:35Z
 31. [169..27f] fix: return hash after whitelisting | By - Fassih Haider | On - 2023-01-10T07:55:05Z
 32. [2e2..242] refactor: remove redundant code | By - Fassih Haider | On - 2023-01-10T07:42:12Z
 33. [681..fe0] refactor: add clg stmts | By - zothix | On - 2023-01-10T07:10:59Z
 34. [bec..d98] revert: remove hardcoded values | By - zothix | On - 2023-01-10T06:43:03Z
 35. [61c..247] revert: pass hardcoded sig type | By - zothix | On - 2023-01-10T06:28:50Z
 36. [856..d7e] refactor: add clg stmt | By - zothix | On - 2023-01-10T06:14:56Z
 37. [cab..f0f] fix: add network type dynammically | By - Fassih Haider | On - 2023-01-09T18:02:26Z
 38. [fda..170] feat: fix whitelist | By - zothix | On - 2023-01-09T17:55:38Z
 39. [465..33d] fix: change sig type | By - Fassih Haider | On - 2023-01-09T17:27:49Z
 40. [694..05f] added logs for checking sig type | By - Fassih Haider | On - 2023-01-09T17:14:07Z
 41. [bf4..2c3] fix: add string in context | By - Fassih Haider | On - 2023-01-09T15:35:10Z
 42. [8eb..40f] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-09T15:24:29Z
 43. [bae..d59] refactor: update for console statement | By - Fassih Haider | On - 2023-01-09T13:30:38Z
 44. [6b1..ac1] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-09T13:14:55Z
 45. [89d..96e] fix: resolve linting errs | By - Fassih Haider | On - 2023-01-09T12:23:08Z
 46. [aa6..c3b] refactor: add clg stmts | By - Fassih Haider | On - 2023-01-09T12:17:47Z
 47. [e08..6af] refactor: return from signAndSend, add clg stmt | By - Fassih Haider | On - 2023-01-09T11:48:40Z
 48. [781..418] fix: pass & use sig to signAndSend func | By - Fassih Haider | On - 2023-01-09T11:32:18Z
 49. [974..9b6] temp remove return from whitelist | By - zothix | On - 2023-01-09T11:09:44Z
 50. [0f0..664] temp remove return from whitelist | By - zothix | On - 2023-01-09T11:06:30Z

## godwoken


 1. [7be..8a8] bridge: handlers: web3: set up godwoken | By - imsk17 | On - 2022-03-29T12:34:16Z
 2. [a4f..91e] fix algorand for multisig | By - rocalex | On - 2022-03-28T09:18:26Z
 3. [6c7..2be] Merge branch 'features/algorand' of https://github.com/XP-NETWORK/migration-validator into features/algorand | By - rocalex | On - 2022-03-27T12:37:09Z
 4. [cb8..2f6] bridge: sign-and-send: not all errors are stringifyable | By - imsk17 | On - 2022-03-23T14:35:40Z
 5. [617..724] bridge: sign-and-send: not all errors are stringifyable | By - imsk17 | On - 2022-03-23T10:53:17Z
 6. [be9..a59] remove algorand port | By - rocalex | On - 2022-03-22T09:18:23Z
 7. [e02..2d0] fix getting algod/indexer | By - rocalex | On - 2022-03-22T08:43:48Z
 8. [3a2..269] fix compile program | By - rocalex | On - 2022-03-22T08:23:59Z
 9. [dde..ae6] bridge: helpers: algorand: enable algorand | By - imsk17 | On - 2022-03-21T14:07:08Z
 10. [188..424] config: bring back tezos | By - imsk17 | On - 2022-03-20T13:33:52Z
 11. [68c..410] initial algorand support | By - rupansh | On - 2022-03-20T12:50:26Z
 12. [d3e..a04] tezos: log on listenEvents call | By - rupansh | On - 2022-03-17T11:45:06Z
 13. [01c..23a] Revert "tezos: tweak fees for transfer instead" | By - rupansh | On - 2022-03-16T17:02:45Z
 14. [a15..01b] tezos: tweak fees for transfer instead | By - rupansh | On - 2022-03-16T16:49:07Z
 15. [f3e..2fb] tezos: tweak tx fee | By - rupansh | On - 2022-03-16T16:35:23Z
 16. [284..1ab] Merge remote-tracking branch 'origin/elrond-royalties' into erc1155 | By - imsk17 | On - 2022-03-16T13:21:47Z
 17. [f66..3b4] tron: helpers: fix the serialize event function for unfreeze txns | By - imsk17 | On - 2022-03-16T13:11:35Z
 18. [492..cda] tezos: getUriFA2: add a fallback for NFTs with no URI | By - imsk17 | On - 2022-03-16T13:10:59Z
 19. [2f8..eea] bridge: factory: tron: fix hexC production | By - imsk17 | On - 2022-03-15T17:21:59Z
 20. [96f..27e] Merge pull request #9 from XP-NETWORK/temp | By - Sumit Kumar | On - 2022-03-15T17:16:32Z
 21. [0f0..634] husky: add a pre commit hook for lint | By - imsk17 | On - 2022-03-15T17:15:10Z
 22. [d41..0cc] bridge: handlers: tron: adapt web3 serializers for tron | By - imsk17 | On - 2022-03-15T17:14:42Z
 23. [638..5f6] Merge pull request #8 from XP-NETWORK/features/tezos | By - Sumit Kumar | On - 2022-03-15T17:08:56Z
 24. [79f..bf8] bridge: factory: tron: fix hexC production | By - imsk17 | On - 2022-03-15T16:49:59Z
 25. [082..543] add documentation for optional fields | By - rupansh | On - 2022-03-13T19:26:44Z
 26. [faf..68f] elrond: initial royalties support | By - rupansh | On - 2022-03-13T19:21:04Z
 27. [28b..ab2] tezos: minor fixes | By - rupansh | On - 2022-03-13T18:55:03Z
 28. [304..8f6] tezos: update for contract changes | By - rupansh | On - 2022-03-13T14:08:40Z
 29. [8e6..fac] evm: fix import order | By - rupansh | On - 2022-03-13T13:14:38Z
 30. [1e7..6b9] fix compilation | By - rupansh | On - 2022-03-13T12:12:06Z
 31. [f44..770] add event listener | By - rocalex | On - 2022-03-13T07:23:47Z
 32. [b16..64b] transfer/unfreeze nft | By - rocalex | On - 2022-03-13T06:03:20Z
 33. [4e4..aff] config tezos handler | By - rocalex | On - 2022-03-13T05:29:35Z
 34. [126..5a5] initial | By - rocalex | On - 2022-03-10T15:25:22Z
 35. [6c9..bad] gas number to string | By - Ruby Edelstein | On - 2022-03-08T14:14:22Z
 36. [336..900] add polygon gasstation | By - Ruby Edelstein | On - 2022-03-08T14:10:31Z
 37. [660..d65] Update web3.ts | By - VKint | On - 2022-03-08T13:04:06Z
 38. [51d..8fa] set txfees for transfers | By - rupansh | On - 2022-03-03T18:21:34Z
 39. [2a6..058] handlers: elrond: fix gas limit | By - rupansh | On - 2022-03-03T18:13:51Z
 40. [69d..83f] use baseURL in erc721 metadata | By - rupansh | On - 2022-03-03T18:13:06Z
 41. [36a..e1a] elrond: put metadata on ipfs as well | By - rupansh | On - 2022-03-03T18:10:15Z
 42. [39e..b67] reset emitted action after adding offset | By - rupansh | On - 2022-03-03T16:46:16Z
 43. [a46..339] Add actionId offset env | By - rupansh | On - 2022-03-03T12:03:35Z
 44. [21d..a14] Merge pull request #6 from XP-NETWORK/aurora | By - VKint | On - 2022-03-03T10:32:42Z
 45. [f07..5cd] packages: exchange-rate: bump to latest | By - imsk17 | On - 2022-03-03T10:31:53Z
 46. [cd6..882] handlers: improve erc721MetadataWrap | By - rupansh | On - 2022-03-01T17:19:17Z
 47. [1f2..b6e] web3: use 60gwei as workawround for polygon | By - rupansh | On - 2022-03-01T12:54:24Z
 48. [c71..73a] fantom: disable block.chainid workaround | By - rupansh | On - 2022-03-01T10:43:07Z
 49. [43c..319] bridge: handlers: improve ipfs url detection | By - rupansh | On - 2022-02-27T10:35:13Z
 50. [af2..eff] added aurora | By - VKint | On - 2022-02-27T08:44:27Z

## idl


 1. [092..5e2] Dfinity: Use IDL For Event Extraction | By - imsk17 | On - 2022-08-09T13:06:00Z
 2. [b18..005] Handlers: Dfinity: Migrate Unfreeze to Use IDL | By - imsk17 | On - 2022-08-08T14:09:12Z
 3. [c45..801] Fix Hedera | By - imsk17 | On - 2022-08-08T12:36:17Z
 4. [724..05d] Dfinity Fixes | By - rupansh | On - 2022-08-08T08:56:10Z
 5. [ffe..75b] SignAndSend: Add Gas Limit For Hedera | By - imsk17 | On - 2022-08-08T08:47:41Z
 6. [9f0..3c9] handlers: dfinity: use idl | By - imsk17 | On - 2022-08-05T09:12:31Z
 7. [906..e4c] Fixes For Hedera | By - imsk17 | On - 2022-08-01T10:31:28Z
 8. [725..88c] Dfinity: Use Node-Fetch for HttpAgent | By - imsk17 | On - 2022-07-24T11:54:23Z
 9. [d5f..213] Dfinity: Use Secret Key To Derive Wallet | By - imsk17 | On - 2022-07-24T09:33:25Z
 10. [fff..bc9] Config: Hedera: Fix Import | By - imsk17 | On - 2022-07-21T13:14:11Z
 11. [951..bc0] Config: Hedera: Use Seprate PK For Hedera | By - imsk17 | On - 2022-07-21T13:06:17Z
 12. [6e0..48a] config: simplify logging | By - imsk17 | On - 2022-07-21T12:59:38Z
 13. [cc0..958] config: simplify the web3 handler logic | By - imsk17 | On - 2022-07-21T12:27:22Z
 14. [6aa..c53] config: add dfinity to handler | By - imsk17 | On - 2022-07-21T11:53:16Z
 15. [4ad..a98] Gas Price: Workaround for Hedera's Missing Gas Price Method | By - imsk17 | On - 2022-07-20T12:00:13Z
 16. [ff7..7ae] configs: chains: nonce collision fix for skale | By - imsk17 | On - 2022-07-08T12:32:30Z
 17. [ee4..db7] chains: add support for skale | By - imsk17 | On - 2022-07-08T11:34:41Z
 18. [2d3..e2d] initial whitelist impl | By - rupansh | On - 2022-07-04T13:52:59Z
 19. [001..85c] Merge branch 'ed25519' into merged | By - imsk17 | On - 2022-07-04T13:37:29Z
 20. [91a..e75] metadata-store: fix extractTokenId fn | By - imsk17 | On - 2022-07-04T08:31:16Z
 21. [071..330] bump algosdk | By - rupansh | On - 2022-06-30T15:38:33Z
 22. [a79..11d] gitignore: add .env.bak | By - rupansh | On - 2022-06-30T15:37:29Z
 23. [fce..1fa] web3: add hedera | By - imsk17 | On - 2022-06-30T13:00:10Z
 24. [75b..f25] initial dfinity bringup | By - rupansh | On - 2022-06-27T12:28:17Z
 25. [b7a..af6] TON: use proper currency | By - rupansh | On - 2022-06-25T11:39:16Z
 26. [427..605] update chain nonces for solana,ton | By - rupansh | On - 2022-06-25T09:54:33Z
 27. [22d..614] fix compilation | By - rupansh | On - 2022-06-25T09:32:34Z
 28. [2f6..9e0] ton: initial event deserialization | By - rupansh | On - 2022-06-23T17:21:13Z
 29. [454..fcf] ton: initial event handlers and minor fixes | By - rupansh | On - 2022-06-21T15:34:15Z
 30. [4b8..437] solana: fix decimals | By - rupansh | On - 2022-06-21T13:05:10Z
 31. [c8e..7ae] TON: fix event serialization | By - rupansh | On - 2022-06-21T13:03:02Z
 32. [315..30d] solana: event fixes | By - rupansh | On - 2022-06-20T19:01:00Z
 33. [080..ac0] solana: get action id from event | By - rupansh | On - 2022-06-20T18:42:00Z
 34. [319..0c2] TON: partially move serialization to the contract | By - rupansh | On - 2022-06-19T17:50:36Z
 35. [286..02c] initial TON boilerplate | By - rupansh | On - 2022-06-19T17:42:19Z
 36. [28a..25e] solana: initial event decoding | By - rupansh | On - 2022-06-19T16:39:08Z
 37. [8f8..48d] add support for SHA256 based FROST ED25519 signatures | By - rupansh | On - 2022-06-17T18:25:24Z
 38. [dc9..b25] solana: unfreeze updates | By - rupansh | On - 2022-06-17T17:52:33Z
 39. [ba5..242] events: transferUnique: withMetadataInfo: store to ipfs if required | By - rupansh | On - 2022-06-15T17:29:06Z
 40. [672..461] add gas workaround for fantom | By - rupansh | On - 2022-06-14T16:32:11Z
 41. [116..99c] solana: initial unfreeze | By - rupansh | On - 2022-06-13T19:36:30Z
 42. [6e1..8f4] bridge: use nft origin to check mintWith | By - rupansh | On - 2022-06-13T16:43:30Z
 43. [d1c..95b] add more debug logs and minor fixes | By - rupansh | On - 2022-06-13T16:37:21Z
 44. [1ff..28a] initial partial solana implementation | By - rupansh | On - 2022-06-12T14:08:57Z
 45. [2c0..d44] update getting of defaultMintWith | By - rupansh | On - 2022-06-10T14:14:17Z
 46. [873..691] Revert "[TEMP] bridge: tron: add debug log for defaultMintWith" | By - rupansh | On - 2022-06-10T14:14:17Z
 47. [308..2d7] handlers: secret: fixes | By - imsk17 | On - 2022-06-09T11:51:40Z
 48. [fa1..857] secret: wrapping: use correct field for metadata | By - imsk17 | On - 2022-06-07T15:33:03Z
 49. [d30..d2d] sc-allowed: add token id ranges | By - imsk17 | On - 2022-06-07T14:17:53Z
 50. [b22..7db] lint: fix eslint issues | By - imsk17 | On - 2022-06-03T11:00:06Z

## merged


 1. [107..01a] start documenting | By - Dima Brook | On - 2022-09-13T13:08:25Z
 2. [218..257] Royalties: Tezos: Add Tezos Royalties | By - imsk17 | On - 2022-08-25T15:12:54Z
 3. [c88..5e2] Dfinity: Cleanup | By - imsk17 | On - 2022-08-09T17:42:02Z
 4. [aa9..21e] delete redundant freezer abi | By - imsk17 | On - 2022-08-09T17:33:17Z
 5. [763..aaa] Prettier: Prettify | By - imsk17 | On - 2022-08-09T17:32:00Z
 6. [ff0..53a] tsconfig: turn on noUnusedLocals | By - imsk17 | On - 2022-08-09T17:30:53Z
 7. [15a..64a] Merge Dfinity Bringup | By - Sumit Kumar | On - 2022-08-09T16:31:18Z
 8. [092..5e2] Dfinity: Use IDL For Event Extraction | By - imsk17 | On - 2022-08-09T13:06:00Z
 9. [b18..005] Handlers: Dfinity: Migrate Unfreeze to Use IDL | By - imsk17 | On - 2022-08-08T14:09:12Z
 10. [c45..801] Fix Hedera | By - imsk17 | On - 2022-08-08T12:36:17Z
 11. [724..05d] Dfinity Fixes | By - rupansh | On - 2022-08-08T08:56:10Z
 12. [ffe..75b] SignAndSend: Add Gas Limit For Hedera | By - imsk17 | On - 2022-08-08T08:47:41Z
 13. [772..888] Merge pull request #12 from XP-NETWORK/erc1155 | By - Dima Brook | On - 2022-08-08T08:40:14Z
 14. [409..bb8] Merge branch 'merged' into erc1155 | By - Dima Brook | On - 2022-08-08T08:38:34Z
 15. [25a..6b1] bridge: add support for token id mapping | By - rupansh | On - 2022-08-05T18:01:36Z
 16. [9f0..3c9] handlers: dfinity: use idl | By - imsk17 | On - 2022-08-05T09:12:31Z
 17. [906..e4c] Fixes For Hedera | By - imsk17 | On - 2022-08-01T10:31:28Z
 18. [725..88c] Dfinity: Use Node-Fetch for HttpAgent | By - imsk17 | On - 2022-07-24T11:54:23Z
 19. [d5f..213] Dfinity: Use Secret Key To Derive Wallet | By - imsk17 | On - 2022-07-24T09:33:25Z
 20. [fff..bc9] Config: Hedera: Fix Import | By - imsk17 | On - 2022-07-21T13:14:11Z
 21. [951..bc0] Config: Hedera: Use Seprate PK For Hedera | By - imsk17 | On - 2022-07-21T13:06:17Z
 22. [6e0..48a] config: simplify logging | By - imsk17 | On - 2022-07-21T12:59:38Z
 23. [cc0..958] config: simplify the web3 handler logic | By - imsk17 | On - 2022-07-21T12:27:22Z
 24. [6aa..c53] config: add dfinity to handler | By - imsk17 | On - 2022-07-21T11:53:16Z
 25. [4ad..a98] Gas Price: Workaround for Hedera's Missing Gas Price Method | By - imsk17 | On - 2022-07-20T12:00:13Z
 26. [2a5..ac7] godwoken: update decimals | By - rupansh | On - 2022-07-17T13:19:43Z
 27. [372..894] Revert "metadata-store: fix extractTokenId fn" | By - rupansh | On - 2022-07-17T13:16:53Z
 28. [ff7..7ae] configs: chains: nonce collision fix for skale | By - imsk17 | On - 2022-07-08T12:32:30Z
 29. [ee4..db7] chains: add support for skale | By - imsk17 | On - 2022-07-08T11:34:41Z
 30. [2d3..e2d] initial whitelist impl | By - rupansh | On - 2022-07-04T13:52:59Z
 31. [001..85c] Merge branch 'ed25519' into merged | By - imsk17 | On - 2022-07-04T13:37:29Z
 32. [91a..e75] metadata-store: fix extractTokenId fn | By - imsk17 | On - 2022-07-04T08:31:16Z
 33. [071..330] bump algosdk | By - rupansh | On - 2022-06-30T15:38:33Z
 34. [a79..11d] gitignore: add .env.bak | By - rupansh | On - 2022-06-30T15:37:29Z
 35. [fce..1fa] web3: add hedera | By - imsk17 | On - 2022-06-30T13:00:10Z
 36. [75b..f25] initial dfinity bringup | By - rupansh | On - 2022-06-27T12:28:17Z
 37. [b7a..af6] TON: use proper currency | By - rupansh | On - 2022-06-25T11:39:16Z
 38. [427..605] update chain nonces for solana,ton | By - rupansh | On - 2022-06-25T09:54:33Z
 39. [22d..614] fix compilation | By - rupansh | On - 2022-06-25T09:32:34Z
 40. [2f6..9e0] ton: initial event deserialization | By - rupansh | On - 2022-06-23T17:21:13Z
 41. [454..fcf] ton: initial event handlers and minor fixes | By - rupansh | On - 2022-06-21T15:34:15Z
 42. [4b8..437] solana: fix decimals | By - rupansh | On - 2022-06-21T13:05:10Z
 43. [c8e..7ae] TON: fix event serialization | By - rupansh | On - 2022-06-21T13:03:02Z
 44. [315..30d] solana: event fixes | By - rupansh | On - 2022-06-20T19:01:00Z
 45. [080..ac0] solana: get action id from event | By - rupansh | On - 2022-06-20T18:42:00Z
 46. [319..0c2] TON: partially move serialization to the contract | By - rupansh | On - 2022-06-19T17:50:36Z
 47. [286..02c] initial TON boilerplate | By - rupansh | On - 2022-06-19T17:42:19Z
 48. [28a..25e] solana: initial event decoding | By - rupansh | On - 2022-06-19T16:39:08Z
 49. [8f8..48d] add support for SHA256 based FROST ED25519 signatures | By - rupansh | On - 2022-06-17T18:25:24Z
 50. [dc9..b25] solana: unfreeze updates | By - rupansh | On - 2022-06-17T17:52:33Z

## newErc1155Test


 1. [907..7f5] changes for production | By - Irtisam | On - 2023-02-08T11:34:23Z
 2. [587..693] test tokenID | By - zothix | On - 2023-02-08T11:07:21Z
 3. [5bb..6ea] update token extraction | By - Irtisam | On - 2023-02-08T09:08:40Z
 4. [f31..6cb] test fetchmeta data | By - zothix | On - 2023-02-08T07:11:13Z
 5. [9dd..7d7] temp remove return | By - zothix | On - 2023-02-07T16:46:50Z
 6. [b93..0c7] changed number to bigint when extracting  token id | By - zothix | On - 2023-02-07T16:37:16Z
 7. [d9f..523] refactor: add console statement | By - Fassih Haider | On - 2023-02-07T14:19:47Z
 8. [97f..01d] Merge branch 'production' of https://github.com/XP-NETWORK/migration-validator into production | By - Fassih Haider | On - 2023-02-07T14:13:09Z
 9. [7a0..ce3] refactor: add console statements | By - Fassih Haider | On - 2023-02-07T14:13:04Z
 10. [ce8..64c] Update events.ts | By - awkwardman.dev | On - 2023-02-07T12:50:03Z
 11. [25d..319] updated erc1155 url | By - zothix | On - 2023-02-07T09:27:17Z
 12. [be6..6dd] remove some comments | By - zothix | On - 2023-02-07T06:22:16Z
 13. [899..3d1] updated example env | By - zothix | On - 2023-02-07T05:45:11Z
 14. [7da..722] test tokenID issue erc1155 | By - zothix | On - 2023-02-06T11:32:46Z
 15. [838..a35] fixed typescript errors | By - zothix | On - 2023-02-06T11:02:59Z
 16. [c3a..6c1] intital implementation of erc1155 | By - zothix | On - 2023-02-06T10:53:57Z
 17. [b9e..739] updated functions for whitelist allow | By - zothix | On - 2023-02-02T13:52:29Z
 18. [804..98a] fix recursive condition | By - zothix | On - 2023-02-01T13:35:32Z
 19. [209..5e6] fantom gas changes | By - Irtisam | On - 2023-02-01T12:24:35Z
 20. [fb2..680] update abi | By - zothix | On - 2023-02-01T11:24:57Z
 21. [d47..852] revert back changes for evm | By - zothix | On - 2023-02-01T11:08:20Z
 22. [82a..9d9] revert back changes for evm | By - zothix | On - 2023-02-01T11:07:18Z
 23. [c9b..31e] updated example env | By - zothix | On - 2023-02-01T07:21:34Z
 24. [87a..3e5] increment collection name get | By - zothix | On - 2023-02-01T06:58:42Z
 25. [e46..d6f] fix native currency transfer to temp account | By - Irtisam | On - 2023-01-31T12:28:10Z
 26. [822..ef9] added provider for newly created temp account | By - Irtisam | On - 2023-01-31T12:15:22Z
 27. [623..fec] fix estimate gas | By - Irtisam | On - 2023-01-31T11:53:05Z
 28. [a29..22b] update collection creation | By - Irtisam | On - 2023-01-31T11:33:26Z
 29. [ca4..9e0] added temp deployer | By - Irtisam | On - 2023-01-31T11:05:21Z
 30. [bdf..312] fix(tokenId): added condition in unfreeze event for wrapped tokenId | By - zothix | On - 2023-01-30T18:47:05Z
 31. [336..f26] added logs for checking target chain | By - zothix | On - 2023-01-30T18:22:39Z
 32. [7fc..0ca] add check for newly created mintwith in fetch metadata | By - Irtisam | On - 2023-01-30T17:46:47Z
 33. [7fc..8c8] added logs for testing in store | By - zothix | On - 2023-01-30T17:21:17Z
 34. [eba..5a4] feat: remove solana code for prod | By - Fassih Haider | On - 2023-01-30T15:03:28Z
 35. [386..425] removed collection creator from harmony | By - zothix | On - 2023-01-30T14:55:05Z
 36. [85f..2a5] added support for backward compatible wnft urls | By - zothix | On - 2023-01-30T14:51:17Z
 37. [246..c11] update to allow whitelist in checking already deployed | By - zothix | On - 2023-01-30T13:38:47Z
 38. [467..951] update to allow whitelist in checking already deployed | By - zothix | On - 2023-01-30T13:37:45Z
 39. [b4f..cbc] temp remove return from validators | By - zothix | On - 2023-01-30T12:49:29Z
 40. [bd2..893] added log back for tx | By - zothix | On - 2023-01-30T12:45:15Z
 41. [deb..ba8] whitelist modifications | By - zothix | On - 2023-01-30T12:41:43Z
 42. [918..492] added collection creator config to harmony | By - zothix | On - 2023-01-30T11:49:26Z
 43. [59a..78d] fix token id | By - zothix | On - 2023-01-30T10:43:55Z
 44. [896..ad3] added back id | By - zothix | On - 2023-01-30T09:35:28Z
 45. [241..c9f] add retries to collection name | By - zothix | On - 2023-01-30T08:44:05Z
 46. [6a1..f2e] add default name for collection creation on ton | By - zothix | On - 2023-01-30T08:39:20Z
 47. [875..989] ceheck ton tokenid | By - zothix | On - 2023-01-30T08:25:31Z
 48. [5c9..3d7] ceheck ton tokenid | By - zothix | On - 2023-01-30T08:23:57Z
 49. [a33..3a4] update ton configs | By - zothix | On - 2023-01-30T07:54:02Z
 50. [3c1..9a7] added try catch to ton deployCollection | By - zothix | On - 2023-01-30T07:25:10Z

## polygon/gas


 1. [bf3..7e9] refactor(Polygon): Update gas fees | By - Fassih Haider | On - 2023-02-13T09:36:45Z
 2. [df5..0c1] add whitelist back | By - Fassih Haider | On - 2023-02-13T09:14:51Z
 3. [291..b35] fix: add hardcoded gas | By - Fassih Haider | On - 2023-02-13T09:02:08Z
 4. [942..c92] fix imports | By - Fassih Haider | On - 2023-02-13T08:54:54Z
 5. [4ac..a91] remove unused imports | By - Fassih Haider | On - 2023-02-13T08:54:02Z
 6. [bd8..7bb] fix(Polygon): fix brackets | By - Fassih Haider | On - 2023-02-13T08:53:10Z
 7. [0d4..6de] debug(Polygon): remove return | By - Fassih Haider | On - 2023-02-13T08:48:19Z
 8. [f67..2cf] feat(Polygon): add constant gas values for Polygon | By - Fassih Haider | On - 2023-02-13T08:40:47Z
 9. [59f..e41] revert back the gas station changes | By - Irtisam | On - 2023-02-12T17:05:55Z
 10. [2bb..5b4] gas station update for avax | By - Irtisam | On - 2023-02-12T16:47:39Z
 11. [030..e5f] (fixed) fantom gas station and conflict in chain nonces of heco and avax | By - Irtisam | On - 2023-02-12T16:26:14Z
 12. [668..621] added return back to whutelist_notify event | By - Irtisam | On - 2023-02-12T15:02:45Z
 13. [c6d..969] filter based on chain nonce in getMintWith | By - Irtisam | On - 2023-02-12T14:53:40Z
 14. [bc2..b28] filter based on chain nonce in getMintWith | By - Irtisam | On - 2023-02-12T14:48:43Z
 15. [9a6..87e] remove cast to string for extracted hexed tokenid | By - Irtisam | On - 2023-02-12T13:42:19Z
 16. [b6f..c21] fixed arbitrum config object | By - Irtisam | On - 2023-02-12T13:33:49Z
 17. [2b7..2bf] fixed arbitrum config object | By - Irtisam | On - 2023-02-12T13:31:25Z
 18. [5e9..986] remove length check from heexString when we are extracting tokenid | By - zothix | On - 2023-02-12T13:28:23Z
 19. [785..c26] remove length check from heexString when we are extracting tokenid | By - zothix | On - 2023-02-12T13:28:07Z
 20. [1e0..25c] Add ARBITRUM CONFIG | By - AlexeyAdoniev | On - 2023-02-12T13:16:20Z
 21. [239..549] temp remove return from whitelist | By - Irtisam | On - 2023-02-12T12:41:40Z
 22. [d8d..564] refactor token id extraction | By - Irtisam | On - 2023-02-12T12:29:38Z
 23. [72c..dac] added slash in url for ton collection getting and uploading | By - Irtisam | On - 2023-02-12T09:30:07Z
 24. [5dc..7e1] Update index.ts | By - awkwardman.dev | On - 2023-02-11T16:34:08Z
 25. [d8d..150] Merge pull request #18 from XP-NETWORK/feat/solana-auto-deployment | By - awkwardman.dev | On - 2023-02-11T16:31:50Z
 26. [752..5a7] update(TonWallet): Changed from v4 to v3 | By - zothix | On - 2023-02-11T16:17:15Z
 27. [0e5..d44] refactor burner unlock | By - Irtisam | On - 2023-02-11T14:35:05Z
 28. [182..67a] modify sleep in burnerUnlock | By - zothix | On - 2023-02-11T14:21:20Z
 29. [1a1..094] refactor burner unlock | By - Irtisam | On - 2023-02-11T14:10:03Z
 30. [7d5..802] update ton burner logic to include sender | By - zothix | On - 2023-02-11T13:34:00Z
 31. [3af..b28] temp fix ton cell import | By - Irtisam | On - 2023-02-11T05:48:51Z
 32. [baa..8ec] added signature for unlock from burner | By - Irtisam | On - 2023-02-11T05:40:30Z
 33. [095..984] refractor(TonBurner): refractor unlocking | By - Irtisam | On - 2023-02-11T00:07:39Z
 34. [176..e49] change console.table to console.log in ton transfer xD | By - Irtisam | On - 2023-02-10T23:57:35Z
 35. [64c..722] add debug logs | By - Irtisam | On - 2023-02-10T23:38:02Z
 36. [337..52f] added burner address for ton in handle transfer unique | By - Irtisam | On - 2023-02-10T23:03:06Z
 37. [08e..8b8] fix sc-verify burner records delete endpoint | By - zothix | On - 2023-02-10T22:38:39Z
 38. [060..caa] initial testing fot ton burner unlock | By - zothix | On - 2023-02-10T21:59:04Z
 39. [c33..07f] update whitelist | By - Alex Moshinsky | On - 2023-02-09T16:12:53Z
 40. [c45..6b5] debug: remove return from whitelistListener | By - Fassih Haider | On - 2023-02-09T05:59:27Z
 41. [eb0..29b] Merge branch 'production' of https://github.com/XP-NETWORK/migration-validator into feat/solana-auto-deployment | By - Fassih Haider | On - 2023-02-09T05:52:19Z
 42. [4ef..257] Update is_whitelistable.ts | By - VKint | On - 2023-02-08T18:00:27Z
 43. [6fa..d64] Merge pull request #16 from XP-NETWORK/zOthix-patch-1 | By - zOthix | On - 2023-02-08T16:39:22Z
 44. [ee0..9c9] Update is_whitelistable.ts | By - zOthix | On - 2023-02-08T16:36:00Z
 45. [845..59d] token id test | By - zothix | On - 2023-02-08T12:25:03Z
 46. [fa8..163] fix token id issue | By - Irtisam | On - 2023-02-08T12:17:23Z
 47. [15c..568] fix type | By - Irtisam | On - 2023-02-08T11:54:22Z
 48. [e45..233] Merge pull request #15 from XP-NETWORK/newErc1155Test | By - awkwardman.dev | On - 2023-02-08T11:35:21Z
 49. [907..7f5] changes for production | By - Irtisam | On - 2023-02-08T11:34:23Z
 50. [587..693] test tokenID | By - zothix | On - 2023-02-08T11:07:21Z

## production


 1. [505..592] feat(polygon): make getGasForPolygon loosly coupled | By - Fassih Haider | On - 2023-02-16T09:58:09Z
 2. [329..99a] revert back the changes for validators | By - Irtisam | On - 2023-02-15T19:20:53Z
 3. [857..ced] temp change v3R2 to v4R2 | By - Irtisam | On - 2023-02-15T18:56:25Z
 4. [cdd..e8f] fix bullshit condition | By - Irtisam | On - 2023-02-15T17:49:46Z
 5. [f19..d61] Merge branch 'production' of https://github.com/XP-NETWORK/migration-validator into production | By - Irtisam | On - 2023-02-15T17:40:08Z
 6. [a82..8a9] test ton tokenID | By - Irtisam | On - 2023-02-15T17:38:54Z
 7. [8b1..a1c] debug(polygon): remove clg stmts | By - Fassih Haider | On - 2023-02-15T16:52:14Z
 8. [18a..aa1] Merge branch 'production' of https://github.com/XP-NETWORK/migration-validator into production | By - Fassih Haider | On - 2023-02-15T16:11:44Z
 9. [2cd..7e1] debug(whitelist): remove whitelist for testing | By - Fassih Haider | On - 2023-02-15T16:11:40Z
 10. [78a..71f] remove throw and add old originalMintWith back | By - zothix | On - 2023-02-15T16:02:10Z
 11. [58a..861] debug(polygon): add clg stmts | By - Fassih Haider | On - 2023-02-15T15:42:44Z
 12. [7e7..b84] feat(polygon): update env.example | By - Fassih Haider | On - 2023-02-15T15:14:34Z
 13. [09e..8d1] Merge branch 'production' of https://github.com/XP-NETWORK/migration-validator into production | By - Fassih Haider | On - 2023-02-15T15:11:12Z
 14. [94d..665] feat(polygon): create function to get gas for polygon | By - Fassih Haider | On - 2023-02-15T15:10:53Z
 15. [9c2..95c] thrown instead of originalMintWith | By - shahmeerzaidi | On - 2023-02-14T11:28:11Z
 16. [9e6..4ca] debug: add _isWhitelistable check back | By - Fassih Haider | On - 2023-02-13T15:23:02Z
 17. [ca2..d0d] Merge branch 'production' of https://github.com/XP-NETWORK/migration-validator into feat/solana-auto-deployment | By - Fassih Haider | On - 2023-02-13T15:19:05Z
 18. [24d..0a7] fix(solana): add retries when getting nft address | By - Fassih Haider | On - 2023-02-13T14:48:55Z
 19. [994..43a] fix(solana): update commitments in more places | By - Fassih Haider | On - 2023-02-13T14:30:48Z
 20. [ae1..a94] fix(solana): fix commitment for solana create nft | By - Fassih Haider | On - 2023-02-13T13:50:41Z
 21. [bae..7ea] Metadata: Erc721: Add image_data | By - imsk17 | On - 2023-02-13T13:48:52Z
 22. [da7..e1a] Helpers: Tezos: Add Functionality for batch transfers | By - imsk17 | On - 2023-02-13T13:31:19Z
 23. [0e1..554] fix(solana): change commitment for create collec | By - Fassih Haider | On - 2023-02-13T13:15:50Z
 24. [320..c2b] revert(solana): change back commitment type | By - Fassih Haider | On - 2023-02-13T12:39:37Z
 25. [da9..195] fix(solana): change commitment type for create collec | By - Fassih Haider | On - 2023-02-13T12:34:47Z
 26. [a81..263] debug(whitelist): remove return stmt for !_isWhitelistable | By - Fassih Haider | On - 2023-02-13T11:51:36Z
 27. [6af..a9f] refactor(solana): remove action id when calling addMintFor | By - Fassih Haider | On - 2023-02-13T11:30:04Z
 28. [40f..36e] Merge branch 'production' of https://github.com/XP-NETWORK/migration-validator into feat/solana-auto-deployment | By - Fassih Haider | On - 2023-02-13T11:29:11Z
 29. [bf3..7e9] refactor(Polygon): Update gas fees | By - Fassih Haider | On - 2023-02-13T09:36:45Z
 30. [df5..0c1] add whitelist back | By - Fassih Haider | On - 2023-02-13T09:14:51Z
 31. [291..b35] fix: add hardcoded gas | By - Fassih Haider | On - 2023-02-13T09:02:08Z
 32. [942..c92] fix imports | By - Fassih Haider | On - 2023-02-13T08:54:54Z
 33. [4ac..a91] remove unused imports | By - Fassih Haider | On - 2023-02-13T08:54:02Z
 34. [bd8..7bb] fix(Polygon): fix brackets | By - Fassih Haider | On - 2023-02-13T08:53:10Z
 35. [0d4..6de] debug(Polygon): remove return | By - Fassih Haider | On - 2023-02-13T08:48:19Z
 36. [f67..2cf] feat(Polygon): add constant gas values for Polygon | By - Fassih Haider | On - 2023-02-13T08:40:47Z
 37. [59f..e41] revert back the gas station changes | By - Irtisam | On - 2023-02-12T17:05:55Z
 38. [2bb..5b4] gas station update for avax | By - Irtisam | On - 2023-02-12T16:47:39Z
 39. [030..e5f] (fixed) fantom gas station and conflict in chain nonces of heco and avax | By - Irtisam | On - 2023-02-12T16:26:14Z
 40. [668..621] added return back to whutelist_notify event | By - Irtisam | On - 2023-02-12T15:02:45Z
 41. [c6d..969] filter based on chain nonce in getMintWith | By - Irtisam | On - 2023-02-12T14:53:40Z
 42. [bc2..b28] filter based on chain nonce in getMintWith | By - Irtisam | On - 2023-02-12T14:48:43Z
 43. [9a6..87e] remove cast to string for extracted hexed tokenid | By - Irtisam | On - 2023-02-12T13:42:19Z
 44. [b6f..c21] fixed arbitrum config object | By - Irtisam | On - 2023-02-12T13:33:49Z
 45. [2b7..2bf] fixed arbitrum config object | By - Irtisam | On - 2023-02-12T13:31:25Z
 46. [5e9..986] remove length check from heexString when we are extracting tokenid | By - zothix | On - 2023-02-12T13:28:23Z
 47. [785..c26] remove length check from heexString when we are extracting tokenid | By - zothix | On - 2023-02-12T13:28:07Z
 48. [1e0..25c] Add ARBITRUM CONFIG | By - AlexeyAdoniev | On - 2023-02-12T13:16:20Z
 49. [239..549] temp remove return from whitelist | By - Irtisam | On - 2023-02-12T12:41:40Z
 50. [d8d..564] refactor token id extraction | By - Irtisam | On - 2023-02-12T12:29:38Z

## sol


 1. [e54..a0b] tezos: handler: get rid of array fill | By - imsk17 | On - 2023-02-10T08:58:07Z
 2. [340..b93] tezos: handler: batch-methods: increase gas | By - imsk17 | On - 2023-02-09T20:10:05Z
 3. [2c7..81f] tezos: handler: fix transfer batch | By - imsk17 | On - 2023-02-09T19:37:01Z
 4. [f18..932] tezos: handler: use methodsObject for more clarity | By - imsk17 | On - 2023-02-09T19:31:22Z
 5. [0a7..709] tezos: handler: adapt to the amount changes in transfer fns | By - imsk17 | On - 2023-02-09T17:23:23Z
 6. [660..d87] Helpers: Tezos: Implement Batch Methods | By - imsk17 | On - 2023-02-07T12:16:39Z
 7. [28e..5e8] Handlers: Near: Update for New Contract | By - imsk17 | On - 2023-02-04T13:05:38Z
 8. [285..910] add ARBITRUM chain to configs | By - AlexeyAdoniev | On - 2023-01-18T12:45:27Z
 9. [a03..561] solana: handler: use our own implementation of getOrCreateTokenAccount | By - imsk17 | On - 2022-12-20T11:46:32Z
 10. [18e..5c4] chains: web3: add okc | By - imsk17 | On - 2022-12-20T11:41:50Z
 11. [4ab..283] solana: getOrCreateTokenAccount: add finalized confirmation strategy | By - imsk17 | On - 2022-12-14T14:37:18Z
 12. [45e..a50] fix: secret: update xpnft to be consistent with the standard | By - imsk17 | On - 2022-12-01T19:13:31Z
 13. [c24..b2d] env: example: add caduceus | By - imsk17 | On - 2022-11-29T11:44:01Z
 14. [13e..453] Config: Env: Rename Solana Vars | By - imsk17 | On - 2022-11-29T11:44:01Z
 15. [3f2..b92] Config: Env: Rename Solana Vars | By - imsk17 | On - 2022-11-29T11:42:07Z
 16. [7d6..b8b] feat(chains): add caduceus | By - imsk17 | On - 2022-11-29T11:38:02Z
 17. [732..34b] SHandlers: Solana: Fix Event Decoding | By - imsk17 | On - 2022-11-28T12:08:23Z
 18. [f38..e05] add trim() | By - Alex Moshinsky | On - 2022-11-27T11:01:10Z
 19. [fee..2fb] Solana: Making It Work | By - imsk17 | On - 2022-11-25T13:55:54Z
 20. [e8d..c95] Packages: Solana: Match Contract Repo Versions | By - imsk17 | On - 2022-11-25T10:04:59Z
 21. [1d7..eee] Handler: Solana: Code from Tests | By - imsk17 | On - 2022-11-25T08:40:38Z
 22. [d16..2f1] Aptos: Add Staging ABIs | By - imsk17 | On - 2022-11-23T12:22:36Z
 23. [059..bac] IPFS: Fix IPFS Lock File Issue | By - imsk17 | On - 2022-11-23T10:11:08Z
 24. [cdf..02b] Handler: Secret: Find Events instead of using hardcoded indices | By - imsk17 | On - 2022-11-23T09:52:48Z
 25. [5f2..633] Config: Update for Aptos Testnet | By - imsk17 | On - 2022-11-23T08:41:52Z
 26. [48c..532] Aptos: Move to Testnet from Devnet | By - imsk17 | On - 2022-11-22T11:35:01Z
 27. [9f4..0b6] Handler: Solana: Changes as per new contract | By - imsk17 | On - 2022-11-22T08:49:16Z
 28. [475..e86] Encoding: Use Typed Constructors | By - imsk17 | On - 2022-11-21T19:57:16Z
 29. [284..631] Solana: Handler: Use Hardcoded IDL | By - imsk17 | On - 2022-11-20T08:51:02Z
 30. [27b..89e] Config: Solana: Build Bridge Contract Program in Handler | By - imsk17 | On - 2022-11-20T08:41:20Z
 31. [076..e2f] Config: Solana: Dont Need Bridge PK | By - imsk17 | On - 2022-11-20T08:01:08Z
 32. [8d6..e00] Solana: Configure Handler | By - imsk17 | On - 2022-11-18T12:42:46Z
 33. [94f..d77] test fix algorand wnft | By - Alex Moshinsky | On - 2022-11-14T08:55:05Z
 34. [529..0e8] Aptos: Wrap Collection Creator Address For Unfreeze | By - imsk17 | On - 2022-11-14T07:23:09Z
 35. [b14..6e0] disable fee | By - Alex Moshinsky | On - 2022-11-10T16:57:50Z
 36. [bd4..1bf] add handling for /dec/ unfreeze endpoint properly | By - rupansh | On - 2022-11-10T14:51:17Z
 37. [e29..25d] aptos: abi: new for testnet | By - imsk17 | On - 2022-11-10T11:06:52Z
 38. [69e..a77] aptos: serialization: cleanup of useless fields | By - imsk17 | On - 2022-11-09T17:13:26Z
 39. [d31..7f4] aptos: bump abis/2 | By - imsk17 | On - 2022-11-09T13:26:35Z
 40. [484..57b] Handlers: Aptos: Update Client Implementation | By - imsk17 | On - 2022-11-09T12:34:27Z
 41. [3c8..32b] ton: return txHash | By - rupansh | On - 2022-11-09T10:18:57Z
 42. [851..8f3] aptos: bump abis | By - imsk17 | On - 2022-11-09T08:33:13Z
 43. [ace..1aa] aptos fix2 | By - Alex Moshinsky | On - 2022-11-09T06:04:44Z
 44. [086..bcb] fix aptos | By - Alex Moshinsky | On - 2022-11-09T06:03:48Z
 45. [55a..17a] aptos: update for contract changes | By - rupansh | On - 2022-11-08T19:05:20Z
 46. [68c..c3d] aptos: improve data fetching | By - rupansh | On - 2022-11-08T19:05:20Z
 47. [128..8ec] aptos: support for testnet | By - Rupansh Sekar | On - 2022-11-08T14:17:40Z
 48. [3fb..95f] ton: force release lock upon timeout | By - rupansh | On - 2022-11-07T15:30:43Z
 49. [309..fc8] ton: increase txLock timeout | By - rupansh | On - 2022-11-07T15:29:33Z
 50. [b14..70b] aptos: fix minor derp | By - rupansh | On - 2022-11-07T15:09:25Z

## solana-whitelist-test


 1. [c75..2c7] refactor: renable logs | By - zothix | On - 2022-12-30T06:45:57Z
 2. [a3b..dd3] refactor: enable logs only for whitelisting | By - zothix | On - 2022-12-30T06:32:24Z
 3. [4c0..ed6] fix: remove ternary condition | By - Fassih Haider | On - 2022-12-29T13:02:18Z
 4. [378..238] fix: increase scope of trycatch | By - Irtisam | On - 2022-12-29T12:10:26Z
 5. [1d6..070] refactor: add console statemtents | By - zothix | On - 2022-12-29T12:08:43Z
 6. [29f..4c6] fix: add ton whitelistsupported chains | By - zothix | On - 2022-12-29T10:11:46Z
 7. [4fc..6c5] refactor: add clg stmt | By - Irtisam | On - 2022-12-29T09:31:38Z
 8. [7b7..543] fix: replace bridge addr with collection addr | By - zothix | On - 2022-12-29T09:18:56Z
 9. [dcd..ade] refactor: add clg stmts | By - Irtisam | On - 2022-12-29T08:17:46Z
 10. [c67..79b] Merge branch 'feat/whitelist' into solana-whitelist-test | By - awkwardman.dev | On - 2022-12-29T07:30:39Z
 11. [c7d..712] fix: fix condition | By - Irtisam | On - 2022-12-29T07:23:58Z
 12. [e0f..6c9] refactor: add clg stmts | By - Irtisam | On - 2022-12-29T06:56:49Z
 13. [350..d18] refactor: add clg stmt | By - Irtisam | On - 2022-12-28T14:56:16Z
 14. [5ea..6ed] refactor: add clg stmts | By - zothix | On - 2022-12-28T14:10:30Z
 15. [791..21b] fix: add missing break stmt | By - Irtisam | On - 2022-12-28T13:55:35Z
 16. [fc6..05b] refactor: add clg stmt | By - Irtisam | On - 2022-12-28T13:43:05Z
 17. [e7c..d30] fix: replace promise with string | By - zothix | On - 2022-12-28T13:35:51Z
 18. [302..019] refactor: update clg stmt | By - Irtisam | On - 2022-12-28T13:01:05Z
 19. [e1b..41e] refactor: add clg stmt | By - Irtisam | On - 2022-12-28T12:59:00Z
 20. [7e7..b9a] refactor: change endpoint | By - Irtisam | On - 2022-12-28T12:44:39Z
 21. [078..349] refactor: update abi | By - Irtisam | On - 2022-12-28T12:44:15Z
 22. [e33..cfe] fix: add retry limit cond. | By - Irtisam | On - 2022-12-28T12:44:05Z
 23. [4a7..57c] refactor: :loud_sound: update err logs | By - Fassih Haider | On - 2022-12-28T12:17:20Z
 24. [058..b4d] feat: :construction: add impl. for ton nft whitelist | By - Fassih Haider | On - 2022-12-28T10:57:07Z
 25. [b14..2a6] refactoring | By - Debian | On - 2022-12-26T12:39:55Z
 26. [cd8..b99] added check for ton in getMintWith | By - Debian | On - 2022-12-22T09:53:07Z
 27. [255..5e0] added check for ton in getMintWith | By - Debian | On - 2022-12-22T09:44:40Z
 28. [256..a9d] Added check for new mintWith to work with only erc721 atm | By - Debian | On - 2022-12-21T17:45:01Z
 29. [840..989] Added check for new mintWith to work with only erc721 atm | By - Debian | On - 2022-12-21T17:43:24Z
 30. [d71..e1a] added logs to unfreeze ton | By - root | On - 2022-12-21T14:46:50Z
 31. [71a..daa] remove lowercase for ton | By - Debian | On - 2022-12-21T12:32:55Z
 32. [f9a..f15] added check for erc721 when transfering | By - Debian | On - 2022-12-21T12:15:57Z
 33. [84b..c3d] added check for erc721 when transfering | By - Debian | On - 2022-12-21T12:10:22Z
 34. [f5d..e55] added comments to ton freeze | By - root | On - 2022-12-21T11:54:33Z
 35. [393..6ff] added getMintWith when uploading metadata | By - Debian | On - 2022-12-21T11:04:31Z
 36. [68d..8fd] test uri update | By - Debian | On - 2022-12-21T04:25:43Z
 37. [30e..337] test uri update | By - Debian | On - 2022-12-21T03:44:22Z
 38. [ab1..1ea] test uri update | By - Debian | On - 2022-12-21T03:27:53Z
 39. [059..726] fix for uri | By - Debian | On - 2022-12-21T02:24:03Z
 40. [189..f23] sc verify fix | By - Debian | On - 2022-12-21T02:13:54Z
 41. [a2d..ac2] added condition for whitelisting | By - Debian | On - 2022-12-21T00:51:29Z
 42. [7dd..06c] added condition for whitelisting | By - Debian | On - 2022-12-21T00:32:22Z
 43. [9be..63c] added checck for inverse chains in getMintWith | By - Debian | On - 2022-12-21T00:06:09Z
 44. [1e7..04e] added gas estimation on whitelist for polygon with extra 40 | By - Debian | On - 2022-12-20T23:22:53Z
 45. [b9b..80f] added gas estimation on whitelist for polygon | By - Debian | On - 2022-12-20T23:15:14Z
 46. [fff..ab5] added gas estimation on whitelist for polygon | By - Debian | On - 2022-12-20T23:07:48Z
 47. [63b..d40] added gas estimation on whitelist for polygon | By - Debian | On - 2022-12-20T23:06:34Z
 48. [d2b..1fe] added gas estimation on whitelist for polygon | By - Debian | On - 2022-12-20T22:47:43Z
 49. [cd3..ace] added gas estimation on whitelist for polygon | By - Debian | On - 2022-12-20T22:41:55Z
 50. [7e0..859] added polygon gas station gas estimation | By - Debian | On - 2022-12-20T22:38:09Z

## src1155-staging


 1. [fb0..582] test image algo | By - Alex Moshinsky | On - 2022-11-21T14:11:10Z
 2. [02a..770] remove | By - Alex Moshinsky | On - 2022-11-14T11:43:37Z
 3. [678..a4f] fix algo metadata 2 | By - Alex Moshinsky | On - 2022-11-14T11:02:05Z
 4. [4a7..791] test algo wnft | By - Alex Moshinsky | On - 2022-11-13T14:13:07Z
 5. [b14..6e0] disable fee | By - Alex Moshinsky | On - 2022-11-10T16:57:50Z
 6. [bd4..1bf] add handling for /dec/ unfreeze endpoint properly | By - rupansh | On - 2022-11-10T14:51:17Z
 7. [e29..25d] aptos: abi: new for testnet | By - imsk17 | On - 2022-11-10T11:06:52Z
 8. [69e..a77] aptos: serialization: cleanup of useless fields | By - imsk17 | On - 2022-11-09T17:13:26Z
 9. [d31..7f4] aptos: bump abis/2 | By - imsk17 | On - 2022-11-09T13:26:35Z
 10. [484..57b] Handlers: Aptos: Update Client Implementation | By - imsk17 | On - 2022-11-09T12:34:27Z
 11. [3c8..32b] ton: return txHash | By - rupansh | On - 2022-11-09T10:18:57Z
 12. [851..8f3] aptos: bump abis | By - imsk17 | On - 2022-11-09T08:33:13Z
 13. [ace..1aa] aptos fix2 | By - Alex Moshinsky | On - 2022-11-09T06:04:44Z
 14. [086..bcb] fix aptos | By - Alex Moshinsky | On - 2022-11-09T06:03:48Z
 15. [55a..17a] aptos: update for contract changes | By - rupansh | On - 2022-11-08T19:05:20Z
 16. [68c..c3d] aptos: improve data fetching | By - rupansh | On - 2022-11-08T19:05:20Z
 17. [128..8ec] aptos: support for testnet | By - Rupansh Sekar | On - 2022-11-08T14:17:40Z
 18. [3fb..95f] ton: force release lock upon timeout | By - rupansh | On - 2022-11-07T15:30:43Z
 19. [309..fc8] ton: increase txLock timeout | By - rupansh | On - 2022-11-07T15:29:33Z
 20. [b14..70b] aptos: fix minor derp | By - rupansh | On - 2022-11-07T15:09:25Z
 21. [49e..226] ton: fix improper usage of contentUri as baseUri | By - rupansh | On - 2022-11-07T14:59:18Z
 22. [c82..fa1] aptos: improve event decoding | By - rupansh | On - 2022-11-06T19:09:23Z
 23. [da4..eff] bridge: if aptos: append action id to meta name | By - Rupansh Sekar | On - 2022-11-03T14:34:39Z
 24. [36d..cb3] fixes: chains: all from testnet | By - imsk17 | On - 2022-11-03T12:00:04Z
 25. [ac2..9ef] web3: handler: estimate gas or use default | By - imsk17 | On - 2022-11-02T11:44:37Z
 26. [f30..f92] bridge: bump web3-contracts | By - imsk17 | On - 2022-11-01T13:33:17Z
 27. [c73..14b] bridge: bump web3-contracts | By - imsk17 | On - 2022-11-01T12:24:39Z
 28. [63d..7ea] add false to serializeVecWithFunc at aptos | By - Alex Moshinsky | On - 2022-10-31T16:26:54Z
 29. [119..cca] aptos: fix transfer serialization | By - rupansh | On - 2022-10-31T15:34:10Z
 30. [a40..926] handlers: web3: try to estimate gas if possible | By - imsk17 | On - 2022-10-31T06:21:01Z
 31. [c41..857] more fee ton | By - Alex Moshinsky | On - 2022-10-27T10:55:50Z
 32. [165..9ae] ton: createMintMsg: change amount to nft item | By - rupansh | On - 2022-10-27T10:07:56Z
 33. [4f9..abc] return mint msg to 0.05 | By - Alex Moshinsky | On - 2022-10-26T21:07:04Z
 34. [0f4..a27] handleUnfreezeUnique from 0.05 to 0.06 Nano | By - Alex Moshinsky | On - 2022-10-26T12:56:33Z
 35. [cff..e29] fix TonWeb.utils.toNano('0.06') | By - Alex Moshinsky | On - 2022-10-26T12:32:58Z
 36. [dc9..536] add ton timeout from get tx | By - Alex Moshinsky | On - 2022-10-25T18:29:00Z
 37. [68f..e99] bridge: fix wrong fee threshold being passed | By - rupansh | On - 2022-10-25T14:19:26Z
 38. [b29..16f] ignore fee error if fee error is max | By - rupansh | On - 2022-10-25T14:14:20Z
 39. [ba7..326] bridge: fix division by infinity bug | By - rupansh | On - 2022-10-25T13:25:48Z
 40. [bd2..944] Revert "chains: info: migrate from skl to sFUEL" | By - imsk17 | On - 2022-10-25T12:18:40Z
 41. [c84..60c] handlers: secret: bump gas fees for both methods | By - imsk17 | On - 2022-10-25T10:46:41Z
 42. [678..abd] chains: info: migrate from skl to sFUEL | By - imsk17 | On - 2022-10-25T09:07:21Z
 43. [d8a..388] ton: transfer decoding improvements | By - rupansh | On - 2022-10-23T16:02:34Z
 44. [bde..356] ton: remove unnecessary checks for transfer | By - rupansh | On - 2022-10-23T15:40:34Z
 45. [53a..36b] bump secret.js | By - rupansh | On - 2022-10-23T14:24:14Z
 46. [c6c..713] lint check | By - rupansh | On - 2022-10-22T18:20:05Z
 47. [3eb..7e8] ton fixes | By - rupansh | On - 2022-10-22T18:18:00Z
 48. [575..28a] aptos: fix actionId order | By - rupansh | On - 2022-10-22T14:08:07Z
 49. [dad..a79] aptos: remove ev.to override | By - rupansh | On - 2022-10-22T13:57:26Z
 50. [a8c..750] aptos: initial bringup | By - rupansh | On - 2022-10-22T13:56:24Z

## testing-erc1155


 1. [873..764] Update README.md | By - Dima Brook | On - 2022-02-15T19:34:03Z
 2. [157..165] prepare for deployment | By - Dima Brook | On - 2022-02-15T16:57:29Z
 3. [a45..312] add Procfile | By - Dima Brook | On - 2022-02-14T19:12:04Z
 4. [96f..b82] change script test -> start | By - Dima Brook | On - 2022-02-14T15:11:24Z
 5. [35c..802] fix testnet-validator | By - Dima Brook | On - 2022-02-14T15:09:47Z
 6. [a09..ebe] events: unfreeze: fallback to xpnft if defaultMintFor fails | By - rupansh | On - 2022-02-07T12:27:56Z
 7. [fbf..acc] config: remove unnecessary params | By - rupansh | On - 2022-02-05T13:52:49Z
 8. [aad..a8c] .env.example: update for off-chain multisig | By - rupansh | On - 2022-02-04T13:00:16Z
 9. [8a6..d32] refactor for off-chain multisig | By - rupansh | On - 2022-02-04T12:59:08Z
 10. [659..603] batch transfer & erc1155 fixes | By - rupansh | On - 2022-01-08T15:43:21Z
 11. [6a9..d45] elrond: improve gas fees estimation for elrond | By - rupansh | On - 2022-01-08T10:29:27Z
 12. [18d..dce] helpers: algorand: minor cleanup | By - rupansh | On - 2022-01-07T09:31:49Z
 13. [147..796] algorand: minor fixes for owner | By - rupansh | On - 2022-01-07T09:24:35Z
 14. [fc7..5d5] feat(algorand): prepare for txn persistence | By - imsk17 | On - 2022-01-07T09:23:44Z
 15. [729..7b7] handlers: algorand: pass token name for minting as well | By - rupansh | On - 2022-01-07T09:19:55Z
 16. [fa5..91a] make sending events to algorand backend optional | By - rupansh | On - 2022-01-07T09:18:55Z
 17. [753..08a] transferbatch fixes | By - rupansh | On - 2021-12-27T14:41:35Z
 18. [3f6..759] bug fixes | By - rupansh | On - 2021-12-27T13:49:49Z
 19. [027..018] initial integration with sc-verify | By - rupansh | On - 2021-12-26T12:37:18Z
 20. [837..45d] chain_handler: minor refactor | By - rupansh | On - 2021-12-26T10:45:18Z
 21. [c64..a32] elrond: initial batch txns impl | By - rupansh | On - 2021-12-23T15:27:47Z
 22. [761..7a3] tron: initial batch txns impl | By - rupansh | On - 2021-12-23T13:47:34Z
 23. [a07..7b5] web3: simplify batch unfreeze | By - rupansh | On - 2021-12-23T13:24:45Z
 24. [0a4..bea] web3: initial batch txns implementation | By - rupansh | On - 2021-12-23T11:49:14Z
 25. [c72..374] algorand: allow arbitrary unfreeze | By - rupansh | On - 2021-12-22T15:05:45Z
 26. [b9b..240] refactor unfreeze event | By - rupansh | On - 2021-12-22T15:03:45Z
 27. [ae2..a61] initial changes based on contract updates | By - rupansh | On - 2021-12-22T15:03:19Z
 28. [a8c..fdb] sanitize erc1155 uris | By - rupansh | On - 2021-12-03T12:19:25Z
 29. [306..e23] initial erc1155 support for evm chains | By - rupansh | On - 2021-12-03T10:23:53Z
 30. [84d..3fd] wrapped nft: add animation url support | By - rupansh | On - 2021-12-02T08:39:30Z
 31. [d67..b5c] add support for workaround sockets | By - rupansh | On - 2021-11-29T13:22:37Z
 32. [c92..eb0] fixes for algorand | By - rupansh | On - 2021-11-22T15:16:43Z
 33. [95e..eac] initial algorand support | By - rupansh | On - 2021-11-21T13:46:10Z
 34. [ee2..a79] add back heartbeat socket | By - rupansh | On - 2021-11-20T14:27:21Z
 35. [b8e..3d8] chain_handler: make notify infalliable | By - rupansh | On - 2021-11-20T14:17:07Z
 36. [76a..fb5] use external service for notifying about transactions | By - rupansh | On - 2021-11-20T14:16:21Z
 37. [23b..e1b] tron: fix api key | By - rupansh | On - 2021-11-11T12:12:56Z
 38. [ba0..650] chain_handler: retry on tx fees estimation failure | By - rupansh | On - 2021-11-11T11:09:37Z
 39. [8cb..87d] tron: skip event on err | By - rupansh | On - 2021-11-11T09:54:45Z
 40. [4ba..ae9] elrond: stringify attributes before sending | By - rupansh | On - 2021-11-10T15:12:37Z
 41. [20c..44c] web3: fix ipfs url | By - rupansh | On - 2021-11-10T13:50:15Z
 42. [849..cd8] web3: use ipfs for fetching metadata when required | By - rupansh | On - 2021-11-10T12:10:59Z
 43. [735..756] initial changes for elrond wrapped nft update | By - rupansh | On - 2021-11-10T09:28:18Z
 44. [95d..b34] erc721_metadata: minor fix | By - rupansh | On - 2021-11-09T12:17:30Z
 45. [33b..5aa] gitignore: remove dist | By - rupansh | On - 2021-11-09T12:17:16Z
 46. [320..554] test: update for web3 metadata changes | By - rupansh | On - 2021-11-09T11:36:47Z
 47. [35a..241] initial changes for web3 metadata | By - rupansh | On - 2021-11-09T11:00:04Z
 48. [6c1..f04] temp: disable elrond | By - rupansh | On - 2021-11-09T10:55:02Z
 49. [815..dfe] yarn: bump exchange-rate dep | By - rupansh | On - 2021-11-09T09:56:05Z
 50. [1ff..b00] add xDAI support | By - rupansh | On - 2021-11-08T09:32:34Z

## vech


 1. [9f2..536] sc-allowed: add token id ranges | By - imsk17 | On - 2022-06-07T14:15:19Z
 2. [15d..a1c] iotex: hardcode gas limit | By - imsk17 | On - 2022-04-20T11:05:07Z
 3. [1de..de1] iotex: use prevblock to get gas limit | By - imsk17 | On - 2022-04-20T09:22:15Z
 4. [9a4..25c] bridge: ipfsMetadataFetch: add timeout | By - rupansh | On - 2022-04-20T07:06:31Z
 5. [2fd..c15] bridge: httpMetadataFetch: use setTimeout for timeout | By - rupansh | On - 2022-04-20T07:06:31Z
 6. [115..d3a] bridge: httpMetadataFetch: add 20sec timeout | By - rupansh | On - 2022-04-20T07:06:31Z
 7. [11a..a9e] log when using block.chainid workaround | By - imsk17 | On - 2022-04-20T07:00:18Z
 8. [621..fd2] handlers: web3: disable fixed decimals for web3 | By - imsk17 | On - 2022-04-20T06:53:38Z
 9. [326..490] vechain: use dynamic node for vechain | By - imsk17 | On - 2022-04-13T14:01:49Z
 10. [0e7..15b] vechain: use custom logic for signer and remove noncemanager | By - imsk17 | On - 2022-04-13T11:57:03Z
 11. [743..721] vechain: move vech provider construction up | By - imsk17 | On - 2022-04-13T11:50:33Z
 12. [9d0..297] web3: chains: add support for vechain | By - imsk17 | On - 2022-04-12T11:08:59Z
 13. [fa3..b87] pass actionId on handleUnfreezeUnique | By - rocalex | On - 2022-04-10T15:21:03Z
 14. [c7b..537] algorand: truncate nft name to 32 bytes | By - rupansh | On - 2022-04-10T14:35:50Z
 15. [2fa..55a] algorand: pass origin nonce to algoMetadataWrap properly | By - rupansh | On - 2022-04-10T14:12:50Z
 16. [0b6..a44] algorand: extract txn fee properly | By - rupansh | On - 2022-04-10T09:37:42Z
 17. [19c..b5b] algorand: update events | By - rupansh | On - 2022-04-08T15:51:04Z
 18. [a45..cf9] algorand: listenEvents: fix typo | By - rupansh | On - 2022-04-06T17:01:42Z
 19. [43c..ea8] algorand: listenEvents: use bigintFromBe for chain nonce | By - rupansh | On - 2022-04-06T16:57:35Z
 20. [df2..685] handlers: algorand: listenEvents: use proper txnInfo object | By - rupansh | On - 2022-04-06T16:33:24Z
 21. [67f..f37] bridge: chains: web3: add gatechain | By - imsk17 | On - 2022-04-06T14:34:53Z
 22. [98b..f75] handlers: use indexer for isOptIn | By - rupansh | On - 2022-04-05T11:24:11Z
 23. [8a1..7f0] bump packages | By - rupansh | On - 2022-04-05T11:23:57Z
 24. [63a..11c] bump typescript | By - rupansh | On - 2022-04-04T13:34:31Z
 25. [ba4..4da] fix teal program | By - rocalex | On - 2022-04-04T09:28:03Z
 26. [6fa..913] check if actionValidatorsLsig opt in to the app | By - rocalex | On - 2022-04-01T14:08:05Z
 27. [89e..91b] Merge branch 'features/algorand' of https://github.com/XP-NETWORK/migration-validator into features/algorand | By - rocalex | On - 2022-04-01T13:58:34Z
 28. [c74..df1] check if actionValidatorsLsig opt in to the app | By - rocalex | On - 2022-04-01T13:58:23Z
 29. [88d..8b5] getActionValidatorsProgram: prefix decodedAddr with 0x | By - rupansh | On - 2022-04-01T12:48:43Z
 30. [3be..b1d] bridge: handlers: web3: set up godwoken | By - imsk17 | On - 2022-04-01T12:08:27Z
 31. [e82..def] fix notifyServe to algorand | By - rocalex | On - 2022-03-31T16:24:29Z
 32. [696..40e] add notifyService to algorand | By - rocalex | On - 2022-03-31T16:24:00Z
 33. [3e1..36b] add notifyService to algorand handler | By - rocalex | On - 2022-03-31T15:56:21Z
 34. [6a5..59a] fix unfreeze nft | By - rocalex | On - 2022-03-31T09:43:00Z
 35. [a4f..91e] fix algorand for multisig | By - rocalex | On - 2022-03-28T09:18:26Z
 36. [6c7..2be] Merge branch 'features/algorand' of https://github.com/XP-NETWORK/migration-validator into features/algorand | By - rocalex | On - 2022-03-27T12:37:09Z
 37. [cb8..2f6] bridge: sign-and-send: not all errors are stringifyable | By - imsk17 | On - 2022-03-23T14:35:40Z
 38. [617..724] bridge: sign-and-send: not all errors are stringifyable | By - imsk17 | On - 2022-03-23T10:53:17Z
 39. [be9..a59] remove algorand port | By - rocalex | On - 2022-03-22T09:18:23Z
 40. [e02..2d0] fix getting algod/indexer | By - rocalex | On - 2022-03-22T08:43:48Z
 41. [3a2..269] fix compile program | By - rocalex | On - 2022-03-22T08:23:59Z
 42. [dde..ae6] bridge: helpers: algorand: enable algorand | By - imsk17 | On - 2022-03-21T14:07:08Z
 43. [188..424] config: bring back tezos | By - imsk17 | On - 2022-03-20T13:33:52Z
 44. [68c..410] initial algorand support | By - rupansh | On - 2022-03-20T12:50:26Z
 45. [d3e..a04] tezos: log on listenEvents call | By - rupansh | On - 2022-03-17T11:45:06Z
 46. [01c..23a] Revert "tezos: tweak fees for transfer instead" | By - rupansh | On - 2022-03-16T17:02:45Z
 47. [a15..01b] tezos: tweak fees for transfer instead | By - rupansh | On - 2022-03-16T16:49:07Z
 48. [f3e..2fb] tezos: tweak tx fee | By - rupansh | On - 2022-03-16T16:35:23Z
 49. [284..1ab] Merge remote-tracking branch 'origin/elrond-royalties' into erc1155 | By - imsk17 | On - 2022-03-16T13:21:47Z
 50. [f66..3b4] tron: helpers: fix the serialize event function for unfreeze txns | By - imsk17 | On - 2022-03-16T13:11:35Z

## vechain


 1. [958..8cf] packages: exchange-rate: bump to latest | By - imsk17 | On - 2022-03-03T10:26:53Z
 2. [39a..181] Setup pre commit hook for prettier | By - imsk17 | On - 2022-03-02T15:24:45Z
 3. [1eb..4d1] Prettify and Setup a Script for Prettier | By - imsk17 | On - 2022-03-02T11:28:16Z
 4. [6b2..010] VEthers support | By - imsk17 | On - 2022-03-02T11:25:43Z
 5. [cd6..882] handlers: improve erc721MetadataWrap | By - rupansh | On - 2022-03-01T17:19:17Z
 6. [1f2..b6e] web3: use 60gwei as workawround for polygon | By - rupansh | On - 2022-03-01T12:54:24Z
 7. [c71..73a] fantom: disable block.chainid workaround | By - rupansh | On - 2022-03-01T10:43:07Z
 8. [43c..319] bridge: handlers: improve ipfs url detection | By - rupansh | On - 2022-02-27T10:35:13Z
 9. [af2..eff] added aurora | By - VKint | On - 2022-02-27T08:44:27Z
 10. [856..535] signal: switch to socket.io | By - rupansh | On - 2022-02-24T18:35:00Z
 11. [550..e91] elrond: use either notifier or native events | By - rupansh | On - 2022-02-24T18:27:20Z
 12. [180..8ac] Update config.ts | By - VKint | On - 2022-02-23T12:00:03Z
 13. [be9..320] Update config.ts | By - VKint | On - 2022-02-23T08:13:50Z
 14. [bb1..f29] elrond: re-enable native events | By - rupansh | On - 2022-02-22T15:40:04Z
 15. [005..7d0] elrond: add option to add events from notifier | By - rupansh | On - 2022-02-22T14:50:14Z
 16. [684..c0c] Revert "double extraGwei for polygon priority workaround" | By - rupansh | On - 2022-02-21T14:03:41Z
 17. [2dd..0ff] Revert "[TEMP][DNM] disable null address workaround" | By - rupansh | On - 2022-02-21T14:03:33Z
 18. [eea..eb3] [TEMP][DNM] disable null address workaround | By - rupansh | On - 2022-02-21T13:58:49Z
 19. [9ba..0f6] double extraGwei for polygon priority workaround | By - rupansh | On - 2022-02-21T13:49:39Z
 20. [d9e..96d] sanitize identifier before sending to sc-verify | By - rupansh | On - 2022-02-20T09:58:57Z
 21. [bbe..da5] update tx_notify.notify | By - rupansh | On - 2022-02-20T08:57:58Z
 22. [6da..5eb] tree-wide: reduce probability of nonce collisions | By - rupansh | On - 2022-02-18T16:54:40Z
 23. [318..6c0] signal: fix data races | By - rupansh | On - 2022-02-18T14:45:37Z
 24. [0b3..9a5] Merge pull request #4 from bigBangingCode/patch-3 | By - VKint | On - 2022-02-17T15:20:01Z
 25. [c51..b36] Update index.ts | By - bigBangingCode | On - 2022-02-17T15:19:35Z
 26. [671..615] deps: fix derp | By - rupansh | On - 2022-02-17T10:36:36Z
 27. [596..582] update fee calculation logic | By - rupansh | On - 2022-02-16T14:20:04Z
 28. [6e8..4f9] handlers: evm: increase gas fees for polygon | By - rupansh | On - 2022-02-16T13:34:41Z
 29. [93f..22d] remove block.chainid workaround for velas | By - rupansh | On - 2022-02-15T16:38:42Z
 30. [12f..045] update for sc-verify changes | By - rupansh | On - 2022-02-15T14:22:27Z
 31. [72b..421] deps: add log for block.chainid workaround | By - rupansh | On - 2022-02-14T22:09:36Z
 32. [ca7..3fc] update .env.example | By - rupansh | On - 2022-02-14T17:45:00Z
 33. [d80..b52] config: workarounds for improper block.chainid | By - rupansh | On - 2022-02-14T17:43:24Z
 34. [5b7..628] bump web3-contracts | By - rupansh | On - 2022-02-14T17:38:01Z
 35. [7d9..5b3] bridge: bugfixes | By - rupansh | On - 2022-02-14T17:38:01Z
 36. [525..669] signal: memstore: be lenient with store cleanup | By - rupansh | On - 2022-02-14T17:38:00Z
 37. [727..f8e] elrond: support mintWith | By - rupansh | On - 2022-02-14T17:38:00Z
 38. [6ee..85d] Merge pull request #3 from bigBangingCode/patch-1 | By - VKint | On - 2022-02-14T06:13:59Z
 39. [da8..f35] Update config.ts | By - bigBangingCode | On - 2022-02-14T06:13:27Z
 40. [8dd..0b1] Update yarn.lock | By - VKint | On - 2022-02-13T20:11:33Z
 41. [ef1..e82] Merge pull request #2 from bigBangingCode/erc1155 | By - VKint | On - 2022-02-13T20:04:02Z
 42. [a45..d04] Update config.ts | By - bigBangingCode | On - 2022-02-13T19:59:26Z
 43. [50f..dde] Revert "helpers: add null address workaround for polygon" | By - rupansh | On - 2022-02-13T19:55:10Z
 44. [fe5..f63] Revert "evm: force legacy transaction for polygon" | By - rupansh | On - 2022-02-13T19:54:49Z
 45. [c59..159] evm: force legacy transaction for polygon | By - rupansh | On - 2022-02-13T19:50:32Z
 46. [f24..fbd] helpers: add null address workaround for polygon | By - rupansh | On - 2022-02-13T18:50:16Z
 47. [1e0..d9f] signal: switch aggregator after more than 30 seconds | By - rupansh | On - 2022-02-13T17:20:02Z
 48. [1ef..a2a] web3: workarounds for harmony | By - rupansh | On - 2022-02-11T11:47:33Z
 49. [901..a53] elrond fixes | By - rupansh | On - 2022-02-11T11:47:25Z
 50. [76a..3fa] tree-wide: minor fixes | By - rupansh | On - 2022-02-10T13:12:05Z

## web3-new


 1. [e53..9c5] feat: chains: web3: add aurora chain | By - imsk17 | On - 2022-02-06T13:33:03Z
 2. [d5c..133] feat: web3: add conditional gasLimitPriority for polygon | By - imsk17 | On - 2022-01-27T13:15:34Z
 3. [fd2..d81] handlers: tezos: increase gasLimit | By - rupansh | On - 2022-01-25T09:02:51Z
 4. [9f9..88d] tezosMetadataWrap: update fields | By - rupansh | On - 2022-01-24T10:17:32Z
 5. [b39..fdc] tezos: add seperate method for wrapping metadata | By - rupansh | On - 2022-01-24T10:13:22Z
 6. [be5..70f] feat(chains): add support for iotex | By - imsk17 | On - 2022-01-23T14:30:16Z
 7. [fb7..652] handlers: tezos: increase action_id offset | By - rupansh | On - 2022-01-22T23:20:48Z
 8. [889..85e] handlers: tezos: add action workaround for fetch txns as well | By - rupansh | On - 2022-01-22T22:30:59Z
 9. [9e8..e39] handlers: tezos: add workaround for duplicate actions | By - rupansh | On - 2022-01-22T22:20:18Z
 10. [886..de6] helpers: web3: change action offset | By - rupansh | On - 2022-01-22T22:08:08Z
 11. [887..d87] tezos: hacks for gas fees | By - rupansh | On - 2022-01-21T15:18:35Z
 12. [297..7f4] .env.example: update for tezos | By - rupansh | On - 2022-01-21T14:02:45Z
 13. [bd2..60c] handlers: tezos: fix amount for manual event decoding | By - rupansh | On - 2022-01-21T11:41:54Z
 14. [2bd..740] config: rename heartbeat port variable | By - rupansh | On - 2022-01-19T10:13:04Z
 15. [30b..2f5] tezos: use notifier-rest for events | By - rupansh | On - 2022-01-19T10:11:39Z
 16. [041..798] algorand: handle ipfs | By - rupansh | On - 2022-01-18T15:35:53Z
 17. [02a..9a9] Merge branch 'tezos' into web3-new | By - rupansh | On - 2022-01-18T15:18:57Z
 18. [263..a7e] tezos fixes and improvements | By - rupansh | On - 2022-01-18T14:02:51Z
 19. [65a..40a] initial tezos changes | By - rupansh | On - 2022-01-14T14:23:00Z
 20. [d4f..964] Merge pull request #1 from QuigonCOM/pass-event-name-to-algorand | By - Rupansh | On - 2022-01-07T07:31:30Z
 21. [4d2..01d] pass event name | By - rocalex | On - 2022-01-06T12:27:02Z
 22. [8e4..c43] fix(nonce): heco's nonce is 0x3 | By - imsk17 | On - 2021-12-30T09:56:52Z
 23. [d2b..e6c] heroku: add procfile for deployment | By - imsk17 | On - 2021-12-30T09:40:11Z
 24. [1a6..0e8] feat(chains): add velas to validator | By - imsk17 | On - 2021-12-24T11:57:43Z
 25. [883..326] feat(chains): add unique | By - imsk17 | On - 2021-12-21T14:48:35Z
 26. [3d4..264] chore(packages): bump exchange-rate | By - imsk17 | On - 2021-12-21T14:35:28Z
 27. [891..76a] initial fuse support | By - rupansh | On - 2021-12-20T13:02:43Z
 28. [56c..535] algorand: minor fixes for owner | By - rupansh | On - 2021-12-09T09:54:24Z
 29. [829..2a8] feat(algorand): prepare for txn persistence | By - imsk17 | On - 2021-12-08T11:53:40Z
 30. [279..599] handlers: algorand: pass token name for minting as well | By - rupansh | On - 2021-12-07T15:19:14Z
 31. [d49..e8f] make sending events to algorand backend optional | By - rupansh | On - 2021-12-07T09:07:07Z
 32. [eb5..efb] chore(startup): skip chain if no reply in 5s | By - imsk17 | On - 2021-12-05T12:05:25Z
 33. [484..370] chore(startup): do no instantiate Web3Helper if node is down | By - imsk17 | On - 2021-12-05T10:37:56Z
 34. [ff8..b70] feat(startup): dont crash if a node is down | By - imsk17 | On - 2021-12-05T09:30:36Z
 35. [84d..3fd] wrapped nft: add animation url support | By - rupansh | On - 2021-12-02T08:39:30Z
 36. [d67..b5c] add support for workaround sockets | By - rupansh | On - 2021-11-29T13:22:37Z
 37. [c92..eb0] fixes for algorand | By - rupansh | On - 2021-11-22T15:16:43Z
 38. [95e..eac] initial algorand support | By - rupansh | On - 2021-11-21T13:46:10Z
 39. [ee2..a79] add back heartbeat socket | By - rupansh | On - 2021-11-20T14:27:21Z
 40. [b8e..3d8] chain_handler: make notify infalliable | By - rupansh | On - 2021-11-20T14:17:07Z
 41. [76a..fb5] use external service for notifying about transactions | By - rupansh | On - 2021-11-20T14:16:21Z
 42. [23b..e1b] tron: fix api key | By - rupansh | On - 2021-11-11T12:12:56Z
 43. [ba0..650] chain_handler: retry on tx fees estimation failure | By - rupansh | On - 2021-11-11T11:09:37Z
 44. [8cb..87d] tron: skip event on err | By - rupansh | On - 2021-11-11T09:54:45Z
 45. [4ba..ae9] elrond: stringify attributes before sending | By - rupansh | On - 2021-11-10T15:12:37Z
 46. [20c..44c] web3: fix ipfs url | By - rupansh | On - 2021-11-10T13:50:15Z
 47. [849..cd8] web3: use ipfs for fetching metadata when required | By - rupansh | On - 2021-11-10T12:10:59Z
 48. [735..756] initial changes for elrond wrapped nft update | By - rupansh | On - 2021-11-10T09:28:18Z
 49. [95d..b34] erc721_metadata: minor fix | By - rupansh | On - 2021-11-09T12:17:30Z
 50. [33b..5aa] gitignore: remove dist | By - rupansh | On - 2021-11-09T12:17:16Z

## zOthix-patch-1


 1. [ee0..9c9] Update is_whitelistable.ts | By - zOthix | On - 2023-02-08T16:36:00Z
 2. [845..59d] token id test | By - zothix | On - 2023-02-08T12:25:03Z
 3. [fa8..163] fix token id issue | By - Irtisam | On - 2023-02-08T12:17:23Z
 4. [15c..568] fix type | By - Irtisam | On - 2023-02-08T11:54:22Z
 5. [e45..233] Merge pull request #15 from XP-NETWORK/newErc1155Test | By - awkwardman.dev | On - 2023-02-08T11:35:21Z
 6. [907..7f5] changes for production | By - Irtisam | On - 2023-02-08T11:34:23Z
 7. [587..693] test tokenID | By - zothix | On - 2023-02-08T11:07:21Z
 8. [5bb..6ea] update token extraction | By - Irtisam | On - 2023-02-08T09:08:40Z
 9. [f31..6cb] test fetchmeta data | By - zothix | On - 2023-02-08T07:11:13Z
 10. [9dd..7d7] temp remove return | By - zothix | On - 2023-02-07T16:46:50Z
 11. [b93..0c7] changed number to bigint when extracting  token id | By - zothix | On - 2023-02-07T16:37:16Z
 12. [d9f..523] refactor: add console statement | By - Fassih Haider | On - 2023-02-07T14:19:47Z
 13. [97f..01d] Merge branch 'production' of https://github.com/XP-NETWORK/migration-validator into production | By - Fassih Haider | On - 2023-02-07T14:13:09Z
 14. [7a0..ce3] refactor: add console statements | By - Fassih Haider | On - 2023-02-07T14:13:04Z
 15. [ce8..64c] Update events.ts | By - awkwardman.dev | On - 2023-02-07T12:50:03Z
 16. [25d..319] updated erc1155 url | By - zothix | On - 2023-02-07T09:27:17Z
 17. [be6..6dd] remove some comments | By - zothix | On - 2023-02-07T06:22:16Z
 18. [899..3d1] updated example env | By - zothix | On - 2023-02-07T05:45:11Z
 19. [7da..722] test tokenID issue erc1155 | By - zothix | On - 2023-02-06T11:32:46Z
 20. [838..a35] fixed typescript errors | By - zothix | On - 2023-02-06T11:02:59Z
 21. [c3a..6c1] intital implementation of erc1155 | By - zothix | On - 2023-02-06T10:53:57Z
 22. [b9e..739] updated functions for whitelist allow | By - zothix | On - 2023-02-02T13:52:29Z
 23. [804..98a] fix recursive condition | By - zothix | On - 2023-02-01T13:35:32Z
 24. [209..5e6] fantom gas changes | By - Irtisam | On - 2023-02-01T12:24:35Z
 25. [fb2..680] update abi | By - zothix | On - 2023-02-01T11:24:57Z
 26. [d47..852] revert back changes for evm | By - zothix | On - 2023-02-01T11:08:20Z
 27. [82a..9d9] revert back changes for evm | By - zothix | On - 2023-02-01T11:07:18Z
 28. [c9b..31e] updated example env | By - zothix | On - 2023-02-01T07:21:34Z
 29. [87a..3e5] increment collection name get | By - zothix | On - 2023-02-01T06:58:42Z
 30. [e46..d6f] fix native currency transfer to temp account | By - Irtisam | On - 2023-01-31T12:28:10Z
 31. [822..ef9] added provider for newly created temp account | By - Irtisam | On - 2023-01-31T12:15:22Z
 32. [623..fec] fix estimate gas | By - Irtisam | On - 2023-01-31T11:53:05Z
 33. [a29..22b] update collection creation | By - Irtisam | On - 2023-01-31T11:33:26Z
 34. [ca4..9e0] added temp deployer | By - Irtisam | On - 2023-01-31T11:05:21Z
 35. [bdf..312] fix(tokenId): added condition in unfreeze event for wrapped tokenId | By - zothix | On - 2023-01-30T18:47:05Z
 36. [336..f26] added logs for checking target chain | By - zothix | On - 2023-01-30T18:22:39Z
 37. [7fc..0ca] add check for newly created mintwith in fetch metadata | By - Irtisam | On - 2023-01-30T17:46:47Z
 38. [7fc..8c8] added logs for testing in store | By - zothix | On - 2023-01-30T17:21:17Z
 39. [eba..5a4] feat: remove solana code for prod | By - Fassih Haider | On - 2023-01-30T15:03:28Z
 40. [386..425] removed collection creator from harmony | By - zothix | On - 2023-01-30T14:55:05Z
 41. [85f..2a5] added support for backward compatible wnft urls | By - zothix | On - 2023-01-30T14:51:17Z
 42. [246..c11] update to allow whitelist in checking already deployed | By - zothix | On - 2023-01-30T13:38:47Z
 43. [467..951] update to allow whitelist in checking already deployed | By - zothix | On - 2023-01-30T13:37:45Z
 44. [b4f..cbc] temp remove return from validators | By - zothix | On - 2023-01-30T12:49:29Z
 45. [bd2..893] added log back for tx | By - zothix | On - 2023-01-30T12:45:15Z
 46. [deb..ba8] whitelist modifications | By - zothix | On - 2023-01-30T12:41:43Z
 47. [918..492] added collection creator config to harmony | By - zothix | On - 2023-01-30T11:49:26Z
 48. [59a..78d] fix token id | By - zothix | On - 2023-01-30T10:43:55Z
 49. [896..ad3] added back id | By - zothix | On - 2023-01-30T09:35:28Z
 50. [241..c9f] add retries to collection name | By - zothix | On - 2023-01-30T08:44:05Z

# Xp-Mobile-App

## android


 1. [b76..ad6] Update logs.md | By - Affan Ali Khan | On - 2023-02-16T09:31:14Z
 2. [392..01c] Update logs.md | By - Affan Ali Khan | On - 2023-02-16T09:29:46Z
 3. [c04..57b] Update logs.md | By - Affan Ali Khan | On - 2023-02-16T09:26:48Z
 4. [457..0c2] Update logs.md | By - Affan Ali Khan | On - 2023-02-16T09:25:42Z
 5. [dcc..38d] Update logs.md | By - Affan Ali Khan | On - 2023-02-16T09:25:01Z
 6. [77b..899] Update logs.md | By - Affan Ali Khan | On - 2023-02-16T09:24:34Z
 7. [18d..313] Update logs.md | By - Affan Ali Khan | On - 2023-02-16T09:22:43Z
 8. [50c..d83] Create logs.md | By - Affan Ali Khan | On - 2023-02-16T09:02:36Z
 9. [fd9..54e] first commit | By - Affan Ali Khan | On - 2023-02-15T15:11:33Z
 10. [c6c..b4b] first commit | By - Affan Ali Khan | On - 2023-02-06T10:29:50Z
 11. [cb4..50f] Initial commit | By - Affan Ali Khan | On - 2023-02-06T10:02:46Z
 12. [f23..39f] first commit | By - Affan Ali Khan | On - 2023-02-06T07:46:34Z
 13. [b7d..45e] first commit | By - Affan Ali Khan | On - 2023-02-06T07:43:35Z
 14. [879..925] initial commit | By - Affan Ali Khan | On - 2023-01-24T09:12:13Z

# Xp-Nft-Marketplace

# xp-challenge

## demoProject


 1. [67b..db6] !username | By - rony derra | On - 2023-02-16T07:59:37Z
 2. [cdb..73a] REGESTRATION_BOT | By - rony derra | On - 2023-02-15T17:24:24Z
 3. [676..e53] IUSERModel | By - rony derra | On - 2023-02-14T16:54:43Z
 4. [5aa..3c0] scanForTransactions | By - rony derra | On - 2023-02-13T13:34:50Z
 5. [5ac..5a0] demoProjects | By - rony derra | On - 2023-02-13T13:01:43Z
 6. [a1f..669] USER | By - rony derra | On - 2023-02-13T12:45:51Z
 7. [4ee..bbe] demoProjects | By - rony derra | On - 2023-02-13T12:13:04Z
 8. [c7c..564] user_id | By - rony derra | On - 2023-02-08T10:57:09Z
 9. [3e7..206] retweet | By - rony derra | On - 2023-02-08T10:51:44Z
 10. [995..cdf] retweet | By - rony derra | On - 2023-02-08T10:12:14Z
 11. [0ec..0d9] RETWEET | By - rony derra | On - 2023-02-08T10:08:42Z
 12. [024..041] RETWEET | By - rony derra | On - 2023-02-08T10:06:47Z
 13. [10a..aaa] retweetService | By - rony derra | On - 2023-02-08T10:05:22Z
 14. [b92..4b3] getLastTweet | By - rony derra | On - 2023-02-02T17:23:32Z
 15. [bf3..8e6] retweet partner | By - rony derra | On - 2023-02-02T17:15:38Z
 16. [0af..8b3] follow partner | By - rony derra | On - 2023-02-02T17:10:57Z
 17. [778..5b6] numbers | By - rony derra | On - 2023-02-02T16:31:02Z
 18. [d7b..462] telegramMessageAchievments | By - rony derra | On - 2023-02-02T16:20:51Z
 19. [7bb..15d] update | By - rony derra | On - 2023-02-02T16:17:45Z
 20. [954..bd0] update | By - rony derra | On - 2023-02-02T16:04:54Z
 21. [f72..745] log | By - rony derra | On - 2023-02-02T10:30:03Z
 22. [753..c91] mappedRetweets | By - rony derra | On - 2023-02-02T10:29:05Z
 23. [cf1..0c2] as | By - rony derra | On - 2023-02-01T16:01:37Z
 24. [4a0..be7] getLastTweet | By - rony derra | On - 2023-02-01T15:45:35Z
 25. [b7c..79c] getLastTweet | By - rony derra | On - 2023-02-01T15:16:15Z
 26. [307..02a] lastTweet | By - rony derra | On - 2023-02-01T15:08:11Z
 27. [568..c4d] retweetService | By - rony derra | On - 2023-02-01T15:03:04Z
 28. [c97..5ce] IACHIEVMENT | By - rony derra | On - 2023-02-01T12:36:35Z
 29. [bfe..af2] save images | By - rony derra | On - 2023-01-31T12:58:47Z
 30. [c33..c00] register | By - rony derra | On - 2023-01-31T12:54:00Z
 31. [8e5..1bb] register | By - rony derra | On - 2023-01-31T11:51:48Z
 32. [a12..1e3] scanForTransactions | By - rony derra | On - 2023-01-30T14:33:43Z
 33. [5bc..883] getUsersByAchiv | By - rony derra | On - 2023-01-30T14:25:51Z
 34. [3d8..5c2] createdAt | By - rony derra | On - 2023-01-30T14:20:22Z
 35. [b52..229] address | By - rony derra | On - 2023-01-30T14:11:54Z
 36. [9ea..925] sdf | By - rony derra | On - 2023-01-30T14:09:15Z
 37. [e6f..7df] scanForTransactions | By - rony derra | On - 2023-01-30T14:02:04Z
 38. [68e..ba5] scanForTransactions | By - rony derra | On - 2023-01-30T13:55:28Z
 39. [80f..4f3] Dear | By - rony derra | On - 2023-01-30T09:08:37Z
 40. [596..f73] getBridgeServiceUsers | By - rony derra | On - 2023-01-29T10:32:09Z
 41. [406..643] formatting | By - rony derra | On - 2023-01-29T08:15:03Z
 42. [759..a39] switch | By - rony derra | On - 2023-01-26T16:02:43Z
 43. [76b..f20] map error | By - rony derra | On - 2023-01-26T14:50:45Z
 44. [1a9..7c7] PROJECT | By - rony derra | On - 2023-01-26T14:48:35Z
 45. [416..0a0] connectWallet | By - rony derra | On - 2023-01-26T14:25:25Z
 46. [a72..240] telegramUsername | By - rony derra | On - 2023-01-26T14:21:10Z
 47. [5bb..aba] emailAchievment | By - rony derra | On - 2023-01-26T14:05:30Z
 48. [f3e..a16] reply | By - rony derra | On - 2023-01-26T10:17:16Z
 49. [d7f..679] addRegisterId | By - rony derra | On - 2023-01-26T10:15:10Z
 50. [ad4..a55] email | By - rony derra | On - 2023-01-26T08:29:34Z

## main


 1. [331..7a0] retweet | By - rony derra | On - 2023-02-16T08:34:38Z
 2. [995..cdf] retweet | By - rony derra | On - 2023-02-08T10:12:14Z
 3. [0ec..0d9] RETWEET | By - rony derra | On - 2023-02-08T10:08:42Z
 4. [024..041] RETWEET | By - rony derra | On - 2023-02-08T10:06:47Z
 5. [10a..aaa] retweetService | By - rony derra | On - 2023-02-08T10:05:22Z
 6. [b92..4b3] getLastTweet | By - rony derra | On - 2023-02-02T17:23:32Z
 7. [bf3..8e6] retweet partner | By - rony derra | On - 2023-02-02T17:15:38Z
 8. [0af..8b3] follow partner | By - rony derra | On - 2023-02-02T17:10:57Z
 9. [778..5b6] numbers | By - rony derra | On - 2023-02-02T16:31:02Z
 10. [d7b..462] telegramMessageAchievments | By - rony derra | On - 2023-02-02T16:20:51Z
 11. [7bb..15d] update | By - rony derra | On - 2023-02-02T16:17:45Z
 12. [954..bd0] update | By - rony derra | On - 2023-02-02T16:04:54Z
 13. [f72..745] log | By - rony derra | On - 2023-02-02T10:30:03Z
 14. [753..c91] mappedRetweets | By - rony derra | On - 2023-02-02T10:29:05Z
 15. [cf1..0c2] as | By - rony derra | On - 2023-02-01T16:01:37Z
 16. [4a0..be7] getLastTweet | By - rony derra | On - 2023-02-01T15:45:35Z
 17. [b7c..79c] getLastTweet | By - rony derra | On - 2023-02-01T15:16:15Z
 18. [307..02a] lastTweet | By - rony derra | On - 2023-02-01T15:08:11Z
 19. [568..c4d] retweetService | By - rony derra | On - 2023-02-01T15:03:04Z
 20. [c97..5ce] IACHIEVMENT | By - rony derra | On - 2023-02-01T12:36:35Z
 21. [bfe..af2] save images | By - rony derra | On - 2023-01-31T12:58:47Z
 22. [c33..c00] register | By - rony derra | On - 2023-01-31T12:54:00Z
 23. [8e5..1bb] register | By - rony derra | On - 2023-01-31T11:51:48Z
 24. [a12..1e3] scanForTransactions | By - rony derra | On - 2023-01-30T14:33:43Z
 25. [5bc..883] getUsersByAchiv | By - rony derra | On - 2023-01-30T14:25:51Z
 26. [3d8..5c2] createdAt | By - rony derra | On - 2023-01-30T14:20:22Z
 27. [b52..229] address | By - rony derra | On - 2023-01-30T14:11:54Z
 28. [9ea..925] sdf | By - rony derra | On - 2023-01-30T14:09:15Z
 29. [e6f..7df] scanForTransactions | By - rony derra | On - 2023-01-30T14:02:04Z
 30. [68e..ba5] scanForTransactions | By - rony derra | On - 2023-01-30T13:55:28Z
 31. [80f..4f3] Dear | By - rony derra | On - 2023-01-30T09:08:37Z
 32. [596..f73] getBridgeServiceUsers | By - rony derra | On - 2023-01-29T10:32:09Z
 33. [406..643] formatting | By - rony derra | On - 2023-01-29T08:15:03Z
 34. [759..a39] switch | By - rony derra | On - 2023-01-26T16:02:43Z
 35. [76b..f20] map error | By - rony derra | On - 2023-01-26T14:50:45Z
 36. [1a9..7c7] PROJECT | By - rony derra | On - 2023-01-26T14:48:35Z
 37. [416..0a0] connectWallet | By - rony derra | On - 2023-01-26T14:25:25Z
 38. [a72..240] telegramUsername | By - rony derra | On - 2023-01-26T14:21:10Z
 39. [5bb..aba] emailAchievment | By - rony derra | On - 2023-01-26T14:05:30Z
 40. [f3e..a16] reply | By - rony derra | On - 2023-01-26T10:17:16Z
 41. [d7f..679] addRegisterId | By - rony derra | On - 2023-01-26T10:15:10Z
 42. [ad4..a55] email | By - rony derra | On - 2023-01-26T08:29:34Z
 43. [345..af1] Mailer | By - rony derra | On - 2023-01-26T08:22:37Z
 44. [645..af3] findOneAndUpdate | By - rony derra | On - 2023-01-18T12:39:44Z
 45. [58a..3a2] nfts | By - rony derra | On - 2023-01-18T10:23:30Z
 46. [6af..eac] partnerTrxs | By - rony derra | On - 2023-01-18T09:49:34Z
 47. [d97..d55] log | By - rony derra | On - 2023-01-18T09:48:07Z
 48. [84d..76d] log | By - rony derra | On - 2023-01-18T09:46:06Z
 49. [5df..cef] telegramUsername | By - rony derra | On - 2023-01-18T09:44:49Z
 50. [71b..e7f] getBetweenDates | By - rony derra | On - 2023-01-18T09:42:30Z

# sc-verify

## deployUpdate


 1. [85a..789] collection name added | By - AlexSafepress | On - 2022-12-28T12:56:31Z
 2. [184..7f8] added new routes for checkking | By - Debian | On - 2022-12-21T17:50:31Z
 3. [63f..d38] mappings: verify: copy list logic | By - imsk17 | On - 2022-10-31T10:36:04Z
 4. [f58..ecb] mappings: list: take token ID into consideration | By - imsk17 | On - 2022-10-31T09:33:31Z
 5. [e6e..690] null token ids | By - AlexeyAdoniev | On - 2022-09-18T10:25:34Z
 6. [db4..ea6] cors allow all, fix error with undefined findOne result | By - AlexeyAdoniev | On - 2022-09-14T12:34:46Z
 7. [3f2..2c4] switch back to yarn | By - rupansh | On - 2022-09-06T14:28:33Z
 8. [a9b..72f] Allow Number or String | By - imsk17 | On - 2022-08-30T18:03:08Z
 9. [f4c..c55] SC Verify: Fix useOriginToken derp | By - imsk17 | On - 2022-08-28T09:13:54Z
 10. [e94..16b] Tezos Royalties: Lowercase the SC | By - imsk17 | On - 2022-08-28T09:09:47Z
 11. [499..84d] Pop sc from royalties | By - imsk17 | On - 2022-08-26T13:48:33Z
 12. [62b..c6c] Pop _id from royalties | By - imsk17 | On - 2022-08-26T13:28:47Z
 13. [bf6..2df] Add Tezos Royalties to mikro-orm conf | By - imsk17 | On - 2022-08-26T13:04:38Z
 14. [975..f35] Pin TS Version | By - imsk17 | On - 2022-08-26T10:17:56Z
 15. [9de..972] Add Tezos Royalties Repo | By - imsk17 | On - 2022-08-26T10:17:11Z
 16. [db5..6b1] Migrate to pnpm | By - imsk17 | On - 2022-08-25T13:22:41Z
 17. [e85..efd] sc-allowed: isWrapped: fix searching | By - rupansh | On - 2022-08-18T17:25:49Z
 18. [d3b..6e0] fix length token | By - Alex Moshinsky | On - 2022-08-17T09:07:38Z
 19. [5a5..e31] repos: sc-allowed: use case insensitive search for `useOriginToken` | By - rupansh | On - 2022-08-05T18:08:04Z
 20. [7a9..4ba] sc-allowed: add param to check usage of origin | By - rupansh | On - 2022-08-05T18:08:04Z
 21. [6d1..27a] ScAllowedDto: Handle Undefined TokenIDs | By - imsk17 | On - 2022-07-26T17:52:20Z
 22. [326..8ba] removed auth | By - Ruby Edelstein | On - 2022-07-19T12:14:34Z
 23. [132..cf8] default-sc: fix minor derp | By - rupansh | On - 2022-07-18T15:06:22Z
 24. [873..a07] routes: default: remove read requirement | By - rupansh | On - 2022-07-18T12:46:20Z
 25. [65e..c9e] routes: verify: remove auth requirement for checking mintWith | By - rupansh | On - 2022-07-18T12:28:47Z
 26. [8ff..769] Revert "fix .toLowerCase() issue" | By - rupansh | On - 2022-07-17T14:22:33Z
 27. [969..5df] Merge pull request #1 from XP-NETWORK/lowercase-list | By - VKint | On - 2022-07-04T14:15:58Z
 28. [ee7..8cc] list remove duplicated | By - Alex Moshinsky | On - 2022-07-04T13:21:10Z
 29. [c6d..32a] add regex to list request | By - Alex Moshinsky | On - 2022-07-04T12:25:16Z
 30. [610..7c5] to lower case list request from | By - Alex Moshinsky | On - 2022-07-04T12:05:16Z
 31. [914..256] fix .toLowerCase() issue | By - Dima Brook | On - 2022-07-04T09:24:47Z
 32. [218..1a1] sc-allowed: db: fix minor derps | By - rupansh | On - 2022-06-17T18:26:21Z
 33. [1c0..b47] repos: sc-allowed: minor fixes | By - rupansh | On - 2022-06-13T16:07:58Z
 34. [920..623] Revert "remove .toLowerCase()" | By - rupansh | On - 2022-06-13T15:55:54Z
 35. [88c..99a] remove .toLowerCase() | By - Dima Brook | On - 2022-06-12T15:00:08Z
 36. [588..c73] req: DefaultReq: mark tokenId as optional | By - rupansh | On - 2022-06-10T14:11:54Z
 37. [a24..bbb] repos: default-sc: use ScAllowedDto to get defaultMintWith | By - rupansh | On - 2022-06-10T14:09:48Z
 38. [3c7..f2a] routes: default: add debug log for default sc | By - rupansh | On - 2022-06-10T13:24:06Z
 39. [b18..140] add dirty hacks to ignore case | By - rupansh | On - 2022-06-10T12:53:38Z
 40. [5c9..efe] sc-allowed: store token id list instead of range | By - rupansh | On - 2022-06-09T16:00:37Z
 41. [879..254] fix - misplaced .toLowerCase() | By - Dima Brook | On - 2022-06-08T14:14:57Z
 42. [c53..212] transform all the contracts to lower case | By - Dima Brook | On - 2022-06-08T14:12:05Z
 43. [9d9..753] sc-allowed: add token id ranges | By - imsk17 | On - 2022-06-07T12:22:15Z
 44. [fdb..1e1] sc-allowed: overwrite if exists | By - imsk17 | On - 2022-05-26T12:10:54Z
 45. [570..34f] helpers: scReq: fix validator | By - rupansh | On - 2022-03-16T16:20:05Z
 46. [e28..000] reqValidator: re-assign prop after decoding | By - rupansh | On - 2022-03-16T16:03:01Z
 47. [7f4..ac5] helpers: royalties: use IntFromString validator for chain | By - rupansh | On - 2022-03-16T15:26:06Z
 48. [207..133] enable royalties route | By - rupansh | On - 2022-03-16T13:13:17Z
 49. [120..e4e] switch to io-ts & fp-ts | By - rupansh | On - 2022-03-13T18:54:18Z
 50. [692..ac0] add royalties endpoint | By - rupansh | On - 2022-03-13T18:54:18Z

## feat/solana-auto-deployment


 1. [1a3..e73] build: remove build error | By - Irtisam | On - 2023-02-16T08:01:12Z
 2. [ad9..339] Merge branch 'master' of https://github.com/XP-NETWORK/sc-verify into feat/solana-auto-deployment | By - Fassih Haider | On - 2023-02-16T07:59:23Z
 3. [18b..5e5] separate endpoint for unique collections | By - irtisam24 | On - 2023-02-14T11:00:38Z
 4. [6c7..035] body validator update | By - Irtisam | On - 2023-02-11T15:56:23Z
 5. [e7e..c38] add type for single id sc verify put | By - Irtisam | On - 2023-02-11T15:19:04Z
 6. [8e3..cd5] put back the validator for sc verify put | By - Irtisam | On - 2023-02-11T15:15:06Z
 7. [0db..944] temp remove body validator fron verify put request | By - Irtisam | On - 2023-02-11T15:07:16Z
 8. [a0a..2dd] added routes for ton burner | By - Irtisam | On - 2023-02-11T14:58:48Z
 9. [fa2..077] added ton burner recrods reepo and stuff XD | By - Irtisam | On - 2023-02-10T23:01:44Z
 10. [afe..f0d] added middleware | By - Irtisam | On - 2023-02-08T15:22:26Z
 11. [154..39f] Merge branch 'production' of https://github.com/XP-NETWORK/sc-verify | By - Irtisam | On - 2023-02-08T14:56:27Z
 12. [39c..79a] Merge branch 'master' of https://github.com/XP-NETWORK/sc-verify | By - Irtisam | On - 2023-02-08T14:56:14Z
 13. [58a..6c9] fix: add actionId for uniqueness | By - Fassih Haider | On - 2023-02-03T14:05:21Z
 14. [338..ff8] revert: go back to old solution | By - Fassih Haider | On - 2023-02-03T13:13:17Z
 15. [06b..40d] refactor: add debugging code | By - Fassih Haider | On - 2023-02-03T13:09:50Z
 16. [818..3e9] refactor: add dummy query for debug | By - Fassih Haider | On - 2023-02-03T13:03:15Z
 17. [c8e..2bf] fix: make fixes to finding query in PUT /verify | By - Fassih Haider | On - 2023-02-03T12:57:13Z
 18. [bdd..630] fix: make fixes in PUT /verify | By - Fassih Haider | On - 2023-02-03T12:49:24Z
 19. [5f0..568] refactor: add clg stmts | By - Fassih Haider | On - 2023-02-03T12:12:36Z
 20. [16e..e4c] feat: update create endpoint in verify | By - Fassih Haider | On - 2023-02-03T12:09:59Z
 21. [837..5fa] Merge branch 'master' of https://github.com/XP-NETWORK/sc-verify into deployUpdate | By - Debian | On - 2023-01-10T10:21:46Z
 22. [7f4..925] add error 404 | By - Alex Moshinsky | On - 2023-01-10T10:19:56Z
 23. [184..7f8] added new routes for checkking | By - Debian | On - 2022-12-21T17:50:31Z
 24. [63f..d38] mappings: verify: copy list logic | By - imsk17 | On - 2022-10-31T10:36:04Z
 25. [f58..ecb] mappings: list: take token ID into consideration | By - imsk17 | On - 2022-10-31T09:33:31Z
 26. [e6e..690] null token ids | By - AlexeyAdoniev | On - 2022-09-18T10:25:34Z
 27. [db4..ea6] cors allow all, fix error with undefined findOne result | By - AlexeyAdoniev | On - 2022-09-14T12:34:46Z
 28. [3f2..2c4] switch back to yarn | By - rupansh | On - 2022-09-06T14:28:33Z
 29. [a9b..72f] Allow Number or String | By - imsk17 | On - 2022-08-30T18:03:08Z
 30. [f4c..c55] SC Verify: Fix useOriginToken derp | By - imsk17 | On - 2022-08-28T09:13:54Z
 31. [e94..16b] Tezos Royalties: Lowercase the SC | By - imsk17 | On - 2022-08-28T09:09:47Z
 32. [499..84d] Pop sc from royalties | By - imsk17 | On - 2022-08-26T13:48:33Z
 33. [62b..c6c] Pop _id from royalties | By - imsk17 | On - 2022-08-26T13:28:47Z
 34. [bf6..2df] Add Tezos Royalties to mikro-orm conf | By - imsk17 | On - 2022-08-26T13:04:38Z
 35. [975..f35] Pin TS Version | By - imsk17 | On - 2022-08-26T10:17:56Z
 36. [9de..972] Add Tezos Royalties Repo | By - imsk17 | On - 2022-08-26T10:17:11Z
 37. [db5..6b1] Migrate to pnpm | By - imsk17 | On - 2022-08-25T13:22:41Z
 38. [e85..efd] sc-allowed: isWrapped: fix searching | By - rupansh | On - 2022-08-18T17:25:49Z
 39. [d3b..6e0] fix length token | By - Alex Moshinsky | On - 2022-08-17T09:07:38Z
 40. [5a5..e31] repos: sc-allowed: use case insensitive search for `useOriginToken` | By - rupansh | On - 2022-08-05T18:08:04Z
 41. [7a9..4ba] sc-allowed: add param to check usage of origin | By - rupansh | On - 2022-08-05T18:08:04Z
 42. [6d1..27a] ScAllowedDto: Handle Undefined TokenIDs | By - imsk17 | On - 2022-07-26T17:52:20Z
 43. [326..8ba] removed auth | By - Ruby Edelstein | On - 2022-07-19T12:14:34Z
 44. [132..cf8] default-sc: fix minor derp | By - rupansh | On - 2022-07-18T15:06:22Z
 45. [873..a07] routes: default: remove read requirement | By - rupansh | On - 2022-07-18T12:46:20Z
 46. [65e..c9e] routes: verify: remove auth requirement for checking mintWith | By - rupansh | On - 2022-07-18T12:28:47Z
 47. [8ff..769] Revert "fix .toLowerCase() issue" | By - rupansh | On - 2022-07-17T14:22:33Z
 48. [969..5df] Merge pull request #1 from XP-NETWORK/lowercase-list | By - VKint | On - 2022-07-04T14:15:58Z
 49. [ee7..8cc] list remove duplicated | By - Alex Moshinsky | On - 2022-07-04T13:21:10Z
 50. [c6d..32a] add regex to list request | By - Alex Moshinsky | On - 2022-07-04T12:25:16Z

## lowercase-list


 1. [ee7..8cc] list remove duplicated | By - Alex Moshinsky | On - 2022-07-04T13:21:10Z
 2. [c6d..32a] add regex to list request | By - Alex Moshinsky | On - 2022-07-04T12:25:16Z
 3. [610..7c5] to lower case list request from | By - Alex Moshinsky | On - 2022-07-04T12:05:16Z
 4. [914..256] fix .toLowerCase() issue | By - Dima Brook | On - 2022-07-04T09:24:47Z
 5. [218..1a1] sc-allowed: db: fix minor derps | By - rupansh | On - 2022-06-17T18:26:21Z
 6. [1c0..b47] repos: sc-allowed: minor fixes | By - rupansh | On - 2022-06-13T16:07:58Z
 7. [920..623] Revert "remove .toLowerCase()" | By - rupansh | On - 2022-06-13T15:55:54Z
 8. [88c..99a] remove .toLowerCase() | By - Dima Brook | On - 2022-06-12T15:00:08Z
 9. [588..c73] req: DefaultReq: mark tokenId as optional | By - rupansh | On - 2022-06-10T14:11:54Z
 10. [a24..bbb] repos: default-sc: use ScAllowedDto to get defaultMintWith | By - rupansh | On - 2022-06-10T14:09:48Z
 11. [3c7..f2a] routes: default: add debug log for default sc | By - rupansh | On - 2022-06-10T13:24:06Z
 12. [b18..140] add dirty hacks to ignore case | By - rupansh | On - 2022-06-10T12:53:38Z
 13. [5c9..efe] sc-allowed: store token id list instead of range | By - rupansh | On - 2022-06-09T16:00:37Z
 14. [879..254] fix - misplaced .toLowerCase() | By - Dima Brook | On - 2022-06-08T14:14:57Z
 15. [c53..212] transform all the contracts to lower case | By - Dima Brook | On - 2022-06-08T14:12:05Z
 16. [9d9..753] sc-allowed: add token id ranges | By - imsk17 | On - 2022-06-07T12:22:15Z
 17. [fdb..1e1] sc-allowed: overwrite if exists | By - imsk17 | On - 2022-05-26T12:10:54Z
 18. [570..34f] helpers: scReq: fix validator | By - rupansh | On - 2022-03-16T16:20:05Z
 19. [e28..000] reqValidator: re-assign prop after decoding | By - rupansh | On - 2022-03-16T16:03:01Z
 20. [7f4..ac5] helpers: royalties: use IntFromString validator for chain | By - rupansh | On - 2022-03-16T15:26:06Z
 21. [207..133] enable royalties route | By - rupansh | On - 2022-03-16T13:13:17Z
 22. [120..e4e] switch to io-ts & fp-ts | By - rupansh | On - 2022-03-13T18:54:18Z
 23. [692..ac0] add royalties endpoint | By - rupansh | On - 2022-03-13T18:54:18Z
 24. [6d1..721] a | By - Ruby Edelstein | On - 2022-02-17T16:25:04Z
 25. [94f..080] added lower case to scs | By - Ruby Edelstein | On - 2022-02-17T15:34:43Z
 26. [e7c..4c2] a | By - Ruby Edelstein | On - 2022-02-17T15:33:03Z
 27. [6b0..47f] a | By - Ruby Edelstein | On - 2022-02-17T15:30:50Z
 28. [681..801] a | By - Ruby Edelstein | On - 2022-02-17T15:29:16Z
 29. [db0..7ed] add regex operator | By - Ruby Edelstein | On - 2022-02-17T15:27:24Z
 30. [262..43b] a | By - Ruby Edelstein | On - 2022-02-17T15:25:55Z
 31. [44b..05c] verify: isWrapped: add :to to request params | By - rupansh | On - 2022-02-15T13:04:12Z
 32. [71d..c1c] isWrapped requires targetChain | By - imsk17 | On - 2022-02-15T12:56:56Z
 33. [47c..c40] isWrapped: add fromchain param to it | By - imsk17 | On - 2022-02-15T12:52:00Z
 34. [563..0ee] body-parser: fix field names | By - imsk17 | On - 2022-02-14T21:16:12Z
 35. [833..699] entity: DefaultScDto: add fromChain field | By - imsk17 | On - 2022-02-14T21:00:05Z
 36. [ce7..16e] entity: ScAllowedDto: add fromChain field | By - imsk17 | On - 2022-02-14T20:54:54Z
 37. [429..c39] routes: verify: add targetChain to verify | By - imsk17 | On - 2022-02-14T20:39:07Z
 38. [ba2..9ad] app: enable cors | By - imsk17 | On - 2022-02-14T18:03:17Z
 39. [dfd..525] routes: fix listing | By - imsk17 | On - 2022-02-14T15:19:05Z
 40. [21d..546] routes: move /list above /:anything | By - imsk17 | On - 2022-02-14T15:13:32Z
 41. [136..7a5] routes: list: look for params in req.params | By - imsk17 | On - 2022-02-14T14:58:35Z
 42. [b11..d85] routes: sc-allowed: add route to list allowed SCs | By - imsk17 | On - 2022-02-14T14:56:22Z
 43. [1e4..7d5] entity: ScAllowedDto: add targetChain field | By - imsk17 | On - 2022-02-14T14:35:50Z
 44. [d01..f01] add endpoint for checking wrapped contracts | By - rupansh | On - 2022-02-14T11:03:04Z
 45. [1e4..513] minor fixes | By - rupansh | On - 2021-12-27T14:41:55Z
 46. [1dc..703] add route for default smart contract | By - rupansh | On - 2021-12-26T12:02:53Z
 47. [04c..f53] lint check | By - rupansh | On - 2021-12-26T09:41:35Z
 48. [8bb..f2e] add generator utility for tokens | By - rupansh | On - 2021-12-26T09:40:49Z
 49. [c20..b15] add .env.example | By - rupansh | On - 2021-12-26T09:31:03Z
 50. [118..6c8] initial import | By - rupansh | On - 2021-12-26T09:18:47Z

## master


 1. [6c7..035] body validator update | By - Irtisam | On - 2023-02-11T15:56:23Z
 2. [e7e..c38] add type for single id sc verify put | By - Irtisam | On - 2023-02-11T15:19:04Z
 3. [8e3..cd5] put back the validator for sc verify put | By - Irtisam | On - 2023-02-11T15:15:06Z
 4. [0db..944] temp remove body validator fron verify put request | By - Irtisam | On - 2023-02-11T15:07:16Z
 5. [a0a..2dd] added routes for ton burner | By - Irtisam | On - 2023-02-11T14:58:48Z
 6. [fa2..077] added ton burner recrods reepo and stuff XD | By - Irtisam | On - 2023-02-10T23:01:44Z
 7. [afe..f0d] added middleware | By - Irtisam | On - 2023-02-08T15:22:26Z
 8. [154..39f] Merge branch 'production' of https://github.com/XP-NETWORK/sc-verify | By - Irtisam | On - 2023-02-08T14:56:27Z
 9. [39c..79a] Merge branch 'master' of https://github.com/XP-NETWORK/sc-verify | By - Irtisam | On - 2023-02-08T14:56:14Z
 10. [837..5fa] Merge branch 'master' of https://github.com/XP-NETWORK/sc-verify into deployUpdate | By - Debian | On - 2023-01-10T10:21:46Z
 11. [7f4..925] add error 404 | By - Alex Moshinsky | On - 2023-01-10T10:19:56Z
 12. [184..7f8] added new routes for checkking | By - Debian | On - 2022-12-21T17:50:31Z
 13. [63f..d38] mappings: verify: copy list logic | By - imsk17 | On - 2022-10-31T10:36:04Z
 14. [f58..ecb] mappings: list: take token ID into consideration | By - imsk17 | On - 2022-10-31T09:33:31Z
 15. [e6e..690] null token ids | By - AlexeyAdoniev | On - 2022-09-18T10:25:34Z
 16. [db4..ea6] cors allow all, fix error with undefined findOne result | By - AlexeyAdoniev | On - 2022-09-14T12:34:46Z
 17. [3f2..2c4] switch back to yarn | By - rupansh | On - 2022-09-06T14:28:33Z
 18. [a9b..72f] Allow Number or String | By - imsk17 | On - 2022-08-30T18:03:08Z
 19. [f4c..c55] SC Verify: Fix useOriginToken derp | By - imsk17 | On - 2022-08-28T09:13:54Z
 20. [e94..16b] Tezos Royalties: Lowercase the SC | By - imsk17 | On - 2022-08-28T09:09:47Z
 21. [499..84d] Pop sc from royalties | By - imsk17 | On - 2022-08-26T13:48:33Z
 22. [62b..c6c] Pop _id from royalties | By - imsk17 | On - 2022-08-26T13:28:47Z
 23. [bf6..2df] Add Tezos Royalties to mikro-orm conf | By - imsk17 | On - 2022-08-26T13:04:38Z
 24. [975..f35] Pin TS Version | By - imsk17 | On - 2022-08-26T10:17:56Z
 25. [9de..972] Add Tezos Royalties Repo | By - imsk17 | On - 2022-08-26T10:17:11Z
 26. [db5..6b1] Migrate to pnpm | By - imsk17 | On - 2022-08-25T13:22:41Z
 27. [e85..efd] sc-allowed: isWrapped: fix searching | By - rupansh | On - 2022-08-18T17:25:49Z
 28. [d3b..6e0] fix length token | By - Alex Moshinsky | On - 2022-08-17T09:07:38Z
 29. [5a5..e31] repos: sc-allowed: use case insensitive search for `useOriginToken` | By - rupansh | On - 2022-08-05T18:08:04Z
 30. [7a9..4ba] sc-allowed: add param to check usage of origin | By - rupansh | On - 2022-08-05T18:08:04Z
 31. [6d1..27a] ScAllowedDto: Handle Undefined TokenIDs | By - imsk17 | On - 2022-07-26T17:52:20Z
 32. [326..8ba] removed auth | By - Ruby Edelstein | On - 2022-07-19T12:14:34Z
 33. [132..cf8] default-sc: fix minor derp | By - rupansh | On - 2022-07-18T15:06:22Z
 34. [873..a07] routes: default: remove read requirement | By - rupansh | On - 2022-07-18T12:46:20Z
 35. [65e..c9e] routes: verify: remove auth requirement for checking mintWith | By - rupansh | On - 2022-07-18T12:28:47Z
 36. [8ff..769] Revert "fix .toLowerCase() issue" | By - rupansh | On - 2022-07-17T14:22:33Z
 37. [969..5df] Merge pull request #1 from XP-NETWORK/lowercase-list | By - VKint | On - 2022-07-04T14:15:58Z
 38. [ee7..8cc] list remove duplicated | By - Alex Moshinsky | On - 2022-07-04T13:21:10Z
 39. [c6d..32a] add regex to list request | By - Alex Moshinsky | On - 2022-07-04T12:25:16Z
 40. [610..7c5] to lower case list request from | By - Alex Moshinsky | On - 2022-07-04T12:05:16Z
 41. [914..256] fix .toLowerCase() issue | By - Dima Brook | On - 2022-07-04T09:24:47Z
 42. [218..1a1] sc-allowed: db: fix minor derps | By - rupansh | On - 2022-06-17T18:26:21Z
 43. [1c0..b47] repos: sc-allowed: minor fixes | By - rupansh | On - 2022-06-13T16:07:58Z
 44. [920..623] Revert "remove .toLowerCase()" | By - rupansh | On - 2022-06-13T15:55:54Z
 45. [88c..99a] remove .toLowerCase() | By - Dima Brook | On - 2022-06-12T15:00:08Z
 46. [588..c73] req: DefaultReq: mark tokenId as optional | By - rupansh | On - 2022-06-10T14:11:54Z
 47. [a24..bbb] repos: default-sc: use ScAllowedDto to get defaultMintWith | By - rupansh | On - 2022-06-10T14:09:48Z
 48. [3c7..f2a] routes: default: add debug log for default sc | By - rupansh | On - 2022-06-10T13:24:06Z
 49. [b18..140] add dirty hacks to ignore case | By - rupansh | On - 2022-06-10T12:53:38Z
 50. [5c9..efe] sc-allowed: store token id list instead of range | By - rupansh | On - 2022-06-09T16:00:37Z

## produ


 1. [837..5fa] Merge branch 'master' of https://github.com/XP-NETWORK/sc-verify into deployUpdate | By - Debian | On - 2023-01-10T10:21:46Z
 2. [7f4..925] add error 404 | By - Alex Moshinsky | On - 2023-01-10T10:19:56Z
 3. [184..7f8] added new routes for checkking | By - Debian | On - 2022-12-21T17:50:31Z
 4. [63f..d38] mappings: verify: copy list logic | By - imsk17 | On - 2022-10-31T10:36:04Z
 5. [f58..ecb] mappings: list: take token ID into consideration | By - imsk17 | On - 2022-10-31T09:33:31Z
 6. [e6e..690] null token ids | By - AlexeyAdoniev | On - 2022-09-18T10:25:34Z
 7. [db4..ea6] cors allow all, fix error with undefined findOne result | By - AlexeyAdoniev | On - 2022-09-14T12:34:46Z
 8. [3f2..2c4] switch back to yarn | By - rupansh | On - 2022-09-06T14:28:33Z
 9. [a9b..72f] Allow Number or String | By - imsk17 | On - 2022-08-30T18:03:08Z
 10. [f4c..c55] SC Verify: Fix useOriginToken derp | By - imsk17 | On - 2022-08-28T09:13:54Z
 11. [e94..16b] Tezos Royalties: Lowercase the SC | By - imsk17 | On - 2022-08-28T09:09:47Z
 12. [499..84d] Pop sc from royalties | By - imsk17 | On - 2022-08-26T13:48:33Z
 13. [62b..c6c] Pop _id from royalties | By - imsk17 | On - 2022-08-26T13:28:47Z
 14. [bf6..2df] Add Tezos Royalties to mikro-orm conf | By - imsk17 | On - 2022-08-26T13:04:38Z
 15. [975..f35] Pin TS Version | By - imsk17 | On - 2022-08-26T10:17:56Z
 16. [9de..972] Add Tezos Royalties Repo | By - imsk17 | On - 2022-08-26T10:17:11Z
 17. [db5..6b1] Migrate to pnpm | By - imsk17 | On - 2022-08-25T13:22:41Z
 18. [e85..efd] sc-allowed: isWrapped: fix searching | By - rupansh | On - 2022-08-18T17:25:49Z
 19. [d3b..6e0] fix length token | By - Alex Moshinsky | On - 2022-08-17T09:07:38Z
 20. [5a5..e31] repos: sc-allowed: use case insensitive search for `useOriginToken` | By - rupansh | On - 2022-08-05T18:08:04Z
 21. [7a9..4ba] sc-allowed: add param to check usage of origin | By - rupansh | On - 2022-08-05T18:08:04Z
 22. [6d1..27a] ScAllowedDto: Handle Undefined TokenIDs | By - imsk17 | On - 2022-07-26T17:52:20Z
 23. [326..8ba] removed auth | By - Ruby Edelstein | On - 2022-07-19T12:14:34Z
 24. [132..cf8] default-sc: fix minor derp | By - rupansh | On - 2022-07-18T15:06:22Z
 25. [873..a07] routes: default: remove read requirement | By - rupansh | On - 2022-07-18T12:46:20Z
 26. [65e..c9e] routes: verify: remove auth requirement for checking mintWith | By - rupansh | On - 2022-07-18T12:28:47Z
 27. [8ff..769] Revert "fix .toLowerCase() issue" | By - rupansh | On - 2022-07-17T14:22:33Z
 28. [969..5df] Merge pull request #1 from XP-NETWORK/lowercase-list | By - VKint | On - 2022-07-04T14:15:58Z
 29. [ee7..8cc] list remove duplicated | By - Alex Moshinsky | On - 2022-07-04T13:21:10Z
 30. [c6d..32a] add regex to list request | By - Alex Moshinsky | On - 2022-07-04T12:25:16Z
 31. [610..7c5] to lower case list request from | By - Alex Moshinsky | On - 2022-07-04T12:05:16Z
 32. [914..256] fix .toLowerCase() issue | By - Dima Brook | On - 2022-07-04T09:24:47Z
 33. [218..1a1] sc-allowed: db: fix minor derps | By - rupansh | On - 2022-06-17T18:26:21Z
 34. [1c0..b47] repos: sc-allowed: minor fixes | By - rupansh | On - 2022-06-13T16:07:58Z
 35. [920..623] Revert "remove .toLowerCase()" | By - rupansh | On - 2022-06-13T15:55:54Z
 36. [88c..99a] remove .toLowerCase() | By - Dima Brook | On - 2022-06-12T15:00:08Z
 37. [588..c73] req: DefaultReq: mark tokenId as optional | By - rupansh | On - 2022-06-10T14:11:54Z
 38. [a24..bbb] repos: default-sc: use ScAllowedDto to get defaultMintWith | By - rupansh | On - 2022-06-10T14:09:48Z
 39. [3c7..f2a] routes: default: add debug log for default sc | By - rupansh | On - 2022-06-10T13:24:06Z
 40. [b18..140] add dirty hacks to ignore case | By - rupansh | On - 2022-06-10T12:53:38Z
 41. [5c9..efe] sc-allowed: store token id list instead of range | By - rupansh | On - 2022-06-09T16:00:37Z
 42. [879..254] fix - misplaced .toLowerCase() | By - Dima Brook | On - 2022-06-08T14:14:57Z
 43. [c53..212] transform all the contracts to lower case | By - Dima Brook | On - 2022-06-08T14:12:05Z
 44. [9d9..753] sc-allowed: add token id ranges | By - imsk17 | On - 2022-06-07T12:22:15Z
 45. [fdb..1e1] sc-allowed: overwrite if exists | By - imsk17 | On - 2022-05-26T12:10:54Z
 46. [570..34f] helpers: scReq: fix validator | By - rupansh | On - 2022-03-16T16:20:05Z
 47. [e28..000] reqValidator: re-assign prop after decoding | By - rupansh | On - 2022-03-16T16:03:01Z
 48. [7f4..ac5] helpers: royalties: use IntFromString validator for chain | By - rupansh | On - 2022-03-16T15:26:06Z
 49. [207..133] enable royalties route | By - rupansh | On - 2022-03-16T13:13:17Z
 50. [120..e4e] switch to io-ts & fp-ts | By - rupansh | On - 2022-03-13T18:54:18Z

## production


 1. [837..5fa] Merge branch 'master' of https://github.com/XP-NETWORK/sc-verify into deployUpdate | By - Debian | On - 2023-01-10T10:21:46Z
 2. [7f4..925] add error 404 | By - Alex Moshinsky | On - 2023-01-10T10:19:56Z
 3. [184..7f8] added new routes for checkking | By - Debian | On - 2022-12-21T17:50:31Z
 4. [63f..d38] mappings: verify: copy list logic | By - imsk17 | On - 2022-10-31T10:36:04Z
 5. [f58..ecb] mappings: list: take token ID into consideration | By - imsk17 | On - 2022-10-31T09:33:31Z
 6. [e6e..690] null token ids | By - AlexeyAdoniev | On - 2022-09-18T10:25:34Z
 7. [db4..ea6] cors allow all, fix error with undefined findOne result | By - AlexeyAdoniev | On - 2022-09-14T12:34:46Z
 8. [3f2..2c4] switch back to yarn | By - rupansh | On - 2022-09-06T14:28:33Z
 9. [a9b..72f] Allow Number or String | By - imsk17 | On - 2022-08-30T18:03:08Z
 10. [f4c..c55] SC Verify: Fix useOriginToken derp | By - imsk17 | On - 2022-08-28T09:13:54Z
 11. [e94..16b] Tezos Royalties: Lowercase the SC | By - imsk17 | On - 2022-08-28T09:09:47Z
 12. [499..84d] Pop sc from royalties | By - imsk17 | On - 2022-08-26T13:48:33Z
 13. [62b..c6c] Pop _id from royalties | By - imsk17 | On - 2022-08-26T13:28:47Z
 14. [bf6..2df] Add Tezos Royalties to mikro-orm conf | By - imsk17 | On - 2022-08-26T13:04:38Z
 15. [975..f35] Pin TS Version | By - imsk17 | On - 2022-08-26T10:17:56Z
 16. [9de..972] Add Tezos Royalties Repo | By - imsk17 | On - 2022-08-26T10:17:11Z
 17. [db5..6b1] Migrate to pnpm | By - imsk17 | On - 2022-08-25T13:22:41Z
 18. [e85..efd] sc-allowed: isWrapped: fix searching | By - rupansh | On - 2022-08-18T17:25:49Z
 19. [d3b..6e0] fix length token | By - Alex Moshinsky | On - 2022-08-17T09:07:38Z
 20. [5a5..e31] repos: sc-allowed: use case insensitive search for `useOriginToken` | By - rupansh | On - 2022-08-05T18:08:04Z
 21. [7a9..4ba] sc-allowed: add param to check usage of origin | By - rupansh | On - 2022-08-05T18:08:04Z
 22. [6d1..27a] ScAllowedDto: Handle Undefined TokenIDs | By - imsk17 | On - 2022-07-26T17:52:20Z
 23. [326..8ba] removed auth | By - Ruby Edelstein | On - 2022-07-19T12:14:34Z
 24. [132..cf8] default-sc: fix minor derp | By - rupansh | On - 2022-07-18T15:06:22Z
 25. [873..a07] routes: default: remove read requirement | By - rupansh | On - 2022-07-18T12:46:20Z
 26. [65e..c9e] routes: verify: remove auth requirement for checking mintWith | By - rupansh | On - 2022-07-18T12:28:47Z
 27. [8ff..769] Revert "fix .toLowerCase() issue" | By - rupansh | On - 2022-07-17T14:22:33Z
 28. [969..5df] Merge pull request #1 from XP-NETWORK/lowercase-list | By - VKint | On - 2022-07-04T14:15:58Z
 29. [ee7..8cc] list remove duplicated | By - Alex Moshinsky | On - 2022-07-04T13:21:10Z
 30. [c6d..32a] add regex to list request | By - Alex Moshinsky | On - 2022-07-04T12:25:16Z
 31. [610..7c5] to lower case list request from | By - Alex Moshinsky | On - 2022-07-04T12:05:16Z
 32. [914..256] fix .toLowerCase() issue | By - Dima Brook | On - 2022-07-04T09:24:47Z
 33. [218..1a1] sc-allowed: db: fix minor derps | By - rupansh | On - 2022-06-17T18:26:21Z
 34. [1c0..b47] repos: sc-allowed: minor fixes | By - rupansh | On - 2022-06-13T16:07:58Z
 35. [920..623] Revert "remove .toLowerCase()" | By - rupansh | On - 2022-06-13T15:55:54Z
 36. [88c..99a] remove .toLowerCase() | By - Dima Brook | On - 2022-06-12T15:00:08Z
 37. [588..c73] req: DefaultReq: mark tokenId as optional | By - rupansh | On - 2022-06-10T14:11:54Z
 38. [a24..bbb] repos: default-sc: use ScAllowedDto to get defaultMintWith | By - rupansh | On - 2022-06-10T14:09:48Z
 39. [3c7..f2a] routes: default: add debug log for default sc | By - rupansh | On - 2022-06-10T13:24:06Z
 40. [b18..140] add dirty hacks to ignore case | By - rupansh | On - 2022-06-10T12:53:38Z
 41. [5c9..efe] sc-allowed: store token id list instead of range | By - rupansh | On - 2022-06-09T16:00:37Z
 42. [879..254] fix - misplaced .toLowerCase() | By - Dima Brook | On - 2022-06-08T14:14:57Z
 43. [c53..212] transform all the contracts to lower case | By - Dima Brook | On - 2022-06-08T14:12:05Z
 44. [9d9..753] sc-allowed: add token id ranges | By - imsk17 | On - 2022-06-07T12:22:15Z
 45. [fdb..1e1] sc-allowed: overwrite if exists | By - imsk17 | On - 2022-05-26T12:10:54Z
 46. [570..34f] helpers: scReq: fix validator | By - rupansh | On - 2022-03-16T16:20:05Z
 47. [e28..000] reqValidator: re-assign prop after decoding | By - rupansh | On - 2022-03-16T16:03:01Z
 48. [7f4..ac5] helpers: royalties: use IntFromString validator for chain | By - rupansh | On - 2022-03-16T15:26:06Z
 49. [207..133] enable royalties route | By - rupansh | On - 2022-03-16T13:13:17Z
 50. [120..e4e] switch to io-ts & fp-ts | By - rupansh | On - 2022-03-13T18:54:18Z

## tests-sc-verify


 1. [1ef..06f] add tests for royalties | By - Alex Moshinsky | On - 2022-09-06T13:44:37Z
 2. [a84..5c3] add tests and fix royalties | By - Alex Moshinsky | On - 2022-09-06T11:19:08Z
 3. [788..cf2] add tests for  /verify/:to/:sc route | By - Alex Moshinsky | On - 2022-09-06T08:36:52Z
 4. [7ac..799] start work on /verify/list tests | By - Alex Moshinsky | On - 2022-09-05T07:47:41Z
 5. [68d..df4] change base url to global | By - Alex Moshinsky | On - 2022-09-05T06:40:38Z
 6. [c91..330] fix letters | By - Alex Moshinsky | On - 2022-09-04T15:51:22Z
 7. [db4..a9b] add tests to default route | By - Alex Moshinsky | On - 2022-09-04T15:38:35Z
 8. [a9b..72f] Allow Number or String | By - imsk17 | On - 2022-08-30T18:03:08Z
 9. [f4c..c55] SC Verify: Fix useOriginToken derp | By - imsk17 | On - 2022-08-28T09:13:54Z
 10. [e94..16b] Tezos Royalties: Lowercase the SC | By - imsk17 | On - 2022-08-28T09:09:47Z
 11. [499..84d] Pop sc from royalties | By - imsk17 | On - 2022-08-26T13:48:33Z
 12. [62b..c6c] Pop _id from royalties | By - imsk17 | On - 2022-08-26T13:28:47Z
 13. [bf6..2df] Add Tezos Royalties to mikro-orm conf | By - imsk17 | On - 2022-08-26T13:04:38Z
 14. [975..f35] Pin TS Version | By - imsk17 | On - 2022-08-26T10:17:56Z
 15. [9de..972] Add Tezos Royalties Repo | By - imsk17 | On - 2022-08-26T10:17:11Z
 16. [db5..6b1] Migrate to pnpm | By - imsk17 | On - 2022-08-25T13:22:41Z
 17. [e85..efd] sc-allowed: isWrapped: fix searching | By - rupansh | On - 2022-08-18T17:25:49Z
 18. [d3b..6e0] fix length token | By - Alex Moshinsky | On - 2022-08-17T09:07:38Z
 19. [5a5..e31] repos: sc-allowed: use case insensitive search for `useOriginToken` | By - rupansh | On - 2022-08-05T18:08:04Z
 20. [7a9..4ba] sc-allowed: add param to check usage of origin | By - rupansh | On - 2022-08-05T18:08:04Z
 21. [6d1..27a] ScAllowedDto: Handle Undefined TokenIDs | By - imsk17 | On - 2022-07-26T17:52:20Z
 22. [326..8ba] removed auth | By - Ruby Edelstein | On - 2022-07-19T12:14:34Z
 23. [132..cf8] default-sc: fix minor derp | By - rupansh | On - 2022-07-18T15:06:22Z
 24. [873..a07] routes: default: remove read requirement | By - rupansh | On - 2022-07-18T12:46:20Z
 25. [65e..c9e] routes: verify: remove auth requirement for checking mintWith | By - rupansh | On - 2022-07-18T12:28:47Z
 26. [8ff..769] Revert "fix .toLowerCase() issue" | By - rupansh | On - 2022-07-17T14:22:33Z
 27. [969..5df] Merge pull request #1 from XP-NETWORK/lowercase-list | By - VKint | On - 2022-07-04T14:15:58Z
 28. [ee7..8cc] list remove duplicated | By - Alex Moshinsky | On - 2022-07-04T13:21:10Z
 29. [c6d..32a] add regex to list request | By - Alex Moshinsky | On - 2022-07-04T12:25:16Z
 30. [610..7c5] to lower case list request from | By - Alex Moshinsky | On - 2022-07-04T12:05:16Z
 31. [914..256] fix .toLowerCase() issue | By - Dima Brook | On - 2022-07-04T09:24:47Z
 32. [218..1a1] sc-allowed: db: fix minor derps | By - rupansh | On - 2022-06-17T18:26:21Z
 33. [1c0..b47] repos: sc-allowed: minor fixes | By - rupansh | On - 2022-06-13T16:07:58Z
 34. [920..623] Revert "remove .toLowerCase()" | By - rupansh | On - 2022-06-13T15:55:54Z
 35. [88c..99a] remove .toLowerCase() | By - Dima Brook | On - 2022-06-12T15:00:08Z
 36. [588..c73] req: DefaultReq: mark tokenId as optional | By - rupansh | On - 2022-06-10T14:11:54Z
 37. [a24..bbb] repos: default-sc: use ScAllowedDto to get defaultMintWith | By - rupansh | On - 2022-06-10T14:09:48Z
 38. [3c7..f2a] routes: default: add debug log for default sc | By - rupansh | On - 2022-06-10T13:24:06Z
 39. [b18..140] add dirty hacks to ignore case | By - rupansh | On - 2022-06-10T12:53:38Z
 40. [5c9..efe] sc-allowed: store token id list instead of range | By - rupansh | On - 2022-06-09T16:00:37Z
 41. [879..254] fix - misplaced .toLowerCase() | By - Dima Brook | On - 2022-06-08T14:14:57Z
 42. [c53..212] transform all the contracts to lower case | By - Dima Brook | On - 2022-06-08T14:12:05Z
 43. [9d9..753] sc-allowed: add token id ranges | By - imsk17 | On - 2022-06-07T12:22:15Z
 44. [fdb..1e1] sc-allowed: overwrite if exists | By - imsk17 | On - 2022-05-26T12:10:54Z
 45. [570..34f] helpers: scReq: fix validator | By - rupansh | On - 2022-03-16T16:20:05Z
 46. [e28..000] reqValidator: re-assign prop after decoding | By - rupansh | On - 2022-03-16T16:03:01Z
 47. [7f4..ac5] helpers: royalties: use IntFromString validator for chain | By - rupansh | On - 2022-03-16T15:26:06Z
 48. [207..133] enable royalties route | By - rupansh | On - 2022-03-16T13:13:17Z
 49. [120..e4e] switch to io-ts & fp-ts | By - rupansh | On - 2022-03-13T18:54:18Z
 50. [692..ac0] add royalties endpoint | By - rupansh | On - 2022-03-13T18:54:18Z

## tezos


 1. [9de..972] Add Tezos Royalties Repo | By - imsk17 | On - 2022-08-26T10:17:11Z
 2. [db5..6b1] Migrate to pnpm | By - imsk17 | On - 2022-08-25T13:22:41Z
 3. [e85..efd] sc-allowed: isWrapped: fix searching | By - rupansh | On - 2022-08-18T17:25:49Z
 4. [d3b..6e0] fix length token | By - Alex Moshinsky | On - 2022-08-17T09:07:38Z
 5. [5a5..e31] repos: sc-allowed: use case insensitive search for `useOriginToken` | By - rupansh | On - 2022-08-05T18:08:04Z
 6. [7a9..4ba] sc-allowed: add param to check usage of origin | By - rupansh | On - 2022-08-05T18:08:04Z
 7. [6d1..27a] ScAllowedDto: Handle Undefined TokenIDs | By - imsk17 | On - 2022-07-26T17:52:20Z
 8. [326..8ba] removed auth | By - Ruby Edelstein | On - 2022-07-19T12:14:34Z
 9. [132..cf8] default-sc: fix minor derp | By - rupansh | On - 2022-07-18T15:06:22Z
 10. [873..a07] routes: default: remove read requirement | By - rupansh | On - 2022-07-18T12:46:20Z
 11. [65e..c9e] routes: verify: remove auth requirement for checking mintWith | By - rupansh | On - 2022-07-18T12:28:47Z
 12. [8ff..769] Revert "fix .toLowerCase() issue" | By - rupansh | On - 2022-07-17T14:22:33Z
 13. [969..5df] Merge pull request #1 from XP-NETWORK/lowercase-list | By - VKint | On - 2022-07-04T14:15:58Z
 14. [ee7..8cc] list remove duplicated | By - Alex Moshinsky | On - 2022-07-04T13:21:10Z
 15. [c6d..32a] add regex to list request | By - Alex Moshinsky | On - 2022-07-04T12:25:16Z
 16. [610..7c5] to lower case list request from | By - Alex Moshinsky | On - 2022-07-04T12:05:16Z
 17. [914..256] fix .toLowerCase() issue | By - Dima Brook | On - 2022-07-04T09:24:47Z
 18. [218..1a1] sc-allowed: db: fix minor derps | By - rupansh | On - 2022-06-17T18:26:21Z
 19. [1c0..b47] repos: sc-allowed: minor fixes | By - rupansh | On - 2022-06-13T16:07:58Z
 20. [920..623] Revert "remove .toLowerCase()" | By - rupansh | On - 2022-06-13T15:55:54Z
 21. [88c..99a] remove .toLowerCase() | By - Dima Brook | On - 2022-06-12T15:00:08Z
 22. [588..c73] req: DefaultReq: mark tokenId as optional | By - rupansh | On - 2022-06-10T14:11:54Z
 23. [a24..bbb] repos: default-sc: use ScAllowedDto to get defaultMintWith | By - rupansh | On - 2022-06-10T14:09:48Z
 24. [3c7..f2a] routes: default: add debug log for default sc | By - rupansh | On - 2022-06-10T13:24:06Z
 25. [b18..140] add dirty hacks to ignore case | By - rupansh | On - 2022-06-10T12:53:38Z
 26. [5c9..efe] sc-allowed: store token id list instead of range | By - rupansh | On - 2022-06-09T16:00:37Z
 27. [879..254] fix - misplaced .toLowerCase() | By - Dima Brook | On - 2022-06-08T14:14:57Z
 28. [c53..212] transform all the contracts to lower case | By - Dima Brook | On - 2022-06-08T14:12:05Z
 29. [9d9..753] sc-allowed: add token id ranges | By - imsk17 | On - 2022-06-07T12:22:15Z
 30. [fdb..1e1] sc-allowed: overwrite if exists | By - imsk17 | On - 2022-05-26T12:10:54Z
 31. [570..34f] helpers: scReq: fix validator | By - rupansh | On - 2022-03-16T16:20:05Z
 32. [e28..000] reqValidator: re-assign prop after decoding | By - rupansh | On - 2022-03-16T16:03:01Z
 33. [7f4..ac5] helpers: royalties: use IntFromString validator for chain | By - rupansh | On - 2022-03-16T15:26:06Z
 34. [207..133] enable royalties route | By - rupansh | On - 2022-03-16T13:13:17Z
 35. [120..e4e] switch to io-ts & fp-ts | By - rupansh | On - 2022-03-13T18:54:18Z
 36. [692..ac0] add royalties endpoint | By - rupansh | On - 2022-03-13T18:54:18Z
 37. [6d1..721] a | By - Ruby Edelstein | On - 2022-02-17T16:25:04Z
 38. [94f..080] added lower case to scs | By - Ruby Edelstein | On - 2022-02-17T15:34:43Z
 39. [e7c..4c2] a | By - Ruby Edelstein | On - 2022-02-17T15:33:03Z
 40. [6b0..47f] a | By - Ruby Edelstein | On - 2022-02-17T15:30:50Z
 41. [681..801] a | By - Ruby Edelstein | On - 2022-02-17T15:29:16Z
 42. [db0..7ed] add regex operator | By - Ruby Edelstein | On - 2022-02-17T15:27:24Z
 43. [262..43b] a | By - Ruby Edelstein | On - 2022-02-17T15:25:55Z
 44. [44b..05c] verify: isWrapped: add :to to request params | By - rupansh | On - 2022-02-15T13:04:12Z
 45. [71d..c1c] isWrapped requires targetChain | By - imsk17 | On - 2022-02-15T12:56:56Z
 46. [47c..c40] isWrapped: add fromchain param to it | By - imsk17 | On - 2022-02-15T12:52:00Z
 47. [563..0ee] body-parser: fix field names | By - imsk17 | On - 2022-02-14T21:16:12Z
 48. [833..699] entity: DefaultScDto: add fromChain field | By - imsk17 | On - 2022-02-14T21:00:05Z
 49. [ce7..16e] entity: ScAllowedDto: add fromChain field | By - imsk17 | On - 2022-02-14T20:54:54Z
 50. [429..c39] routes: verify: add targetChain to verify | By - imsk17 | On - 2022-02-14T20:39:07Z

# xp_challenges

## demo


 1. [634..7c6] telegramUser | By - rony derra | On - 2023-02-16T07:58:14Z
 2. [cea..938] media | By - rony derra | On - 2023-02-16T07:40:35Z
 3. [dc4..e0d] responsive | By - rony derra | On - 2023-02-15T17:18:49Z
 4. [971..a9b] IModal | By - rony derra | On - 2023-02-15T16:37:59Z
 5. [9ee..f89] Menu | By - rony derra | On - 2023-02-15T16:25:18Z
 6. [10c..582] progressBar | By - rony derra | On - 2023-02-15T15:54:08Z
 7. [bed..e27] Dummyx | By - rony derra | On - 2023-02-15T15:09:40Z
 8. [6f0..425] Remove the background strips across all achievements | By - rony derra | On - 2023-02-15T14:09:48Z
 9. [ed0..126] WalletListProps | By - rony derra | On - 2023-02-14T16:59:44Z
 10. [c04..320] links | By - rony derra | On - 2023-02-14T16:46:04Z
 11. [bb1..39c] Subscribe | By - rony derra | On - 2023-02-14T16:44:38Z
 12. [af3..f69] description1 | By - rony derra | On - 2023-02-14T13:26:10Z
 13. [c27..89f] image | By - rony derra | On - 2023-02-14T12:36:58Z
 14. [a74..d91] AchievementIcon | By - rony derra | On - 2023-02-13T17:53:01Z
 15. [e7f..e61] okc | By - rony derra | On - 2023-02-13T17:44:19Z
 16. [8bb..002] heroCollectionStyle | By - rony derra | On - 2023-02-13T17:32:32Z
 17. [d7e..0aa] _DEFAULT_TELEGRAM_LINK | By - rony derra | On - 2023-02-13T13:38:05Z
 18. [ad0..fff] TelegramButtonV2 | By - rony derra | On - 2023-02-13T13:21:54Z
 19. [f50..ec9] Achievment | By - rony derra | On - 2023-02-13T13:10:30Z
 20. [f13..a2a] demo | By - rony derra | On - 2023-02-13T12:23:28Z
 21. [3aa..a05] profileNameStyle | By - rony derra | On - 2023-02-08T09:52:48Z
 22. [467..5b1] profileNameStyle | By - rony derra | On - 2023-02-08T09:51:31Z
 23. [01d..541] profileNameStyle | By - rony derra | On - 2023-02-08T09:41:54Z
 24. [472..c27] telegramUsername | By - rony derra | On - 2023-02-08T09:39:29Z
 25. [f07..da0] achievmentNumber | By - rony derra | On - 2023-02-08T09:35:05Z
 26. [d51..11d] Achievements | By - rony derra | On - 2023-02-02T17:28:26Z
 27. [de3..6e4] noIcons | By - rony derra | On - 2023-02-02T15:45:28Z
 28. [661..137] images | By - rony derra | On - 2023-02-02T15:40:10Z
 29. [d33..419] updateWallet | By - rony derra | On - 2023-02-02T11:38:34Z
 30. [630..6c2] trxHandler | By - rony derra | On - 2023-02-02T11:30:29Z
 31. [4db..614] AchievementIcon | By - rony derra | On - 2023-02-02T11:24:03Z
 32. [d51..188] _DEFAULT_TELEGRAM_LINK | By - rony derra | On - 2023-02-02T09:30:37Z
 33. [c9d..1b6] config | By - rony derra | On - 2023-02-02T09:20:44Z
 34. [632..18f] Success | By - rony derra | On - 2023-02-01T17:45:04Z
 35. [d6b..edc] twitter.includes | By - rony derra | On - 2023-02-01T17:08:57Z
 36. [08c..d46] TwitterAuth | By - rony derra | On - 2023-02-01T16:56:49Z
 37. [013..61c] Rifled | By - rony derra | On - 2023-02-01T16:49:39Z
 38. [ae1..f66] hover | By - rony derra | On - 2023-02-01T16:44:18Z
 39. [6fc..0d9] mini | By - rony derra | On - 2023-02-01T16:12:55Z
 40. [635..417] Achievment | By - rony derra | On - 2023-02-01T16:07:15Z
 41. [920..2fd] Step1 | By - rony derra | On - 2023-02-01T14:39:48Z
 42. [a97..1ac] className="AchievementIcon" | By - rony derra | On - 2023-02-01T13:26:37Z
 43. [be7..f12] noIcons | By - rony derra | On - 2023-02-01T12:58:06Z
 44. [867..088] cont | By - rony derra | On - 2023-02-01T12:55:24Z
 45. [31f..46e] image | By - rony derra | On - 2023-02-01T12:38:19Z
 46. [e42..bd1] userFrameCi | By - rony derra | On - 2023-02-01T11:47:26Z
 47. [7ad..bb3] media | By - rony derra | On - 2023-02-01T11:20:45Z
 48. [5bd..52c] frame image | By - rony derra | On - 2023-02-01T10:55:33Z
 49. [eaa..156] AchievementIcon | By - rony derra | On - 2023-02-01T10:32:36Z
 50. [2b2..7ce] progress bar | By - rony derra | On - 2023-02-01T09:31:37Z

## finnishes


 1. [3aa..a05] profileNameStyle | By - rony derra | On - 2023-02-08T09:52:48Z
 2. [467..5b1] profileNameStyle | By - rony derra | On - 2023-02-08T09:51:31Z
 3. [01d..541] profileNameStyle | By - rony derra | On - 2023-02-08T09:41:54Z
 4. [472..c27] telegramUsername | By - rony derra | On - 2023-02-08T09:39:29Z
 5. [f07..da0] achievmentNumber | By - rony derra | On - 2023-02-08T09:35:05Z
 6. [d51..11d] Achievements | By - rony derra | On - 2023-02-02T17:28:26Z
 7. [de3..6e4] noIcons | By - rony derra | On - 2023-02-02T15:45:28Z
 8. [661..137] images | By - rony derra | On - 2023-02-02T15:40:10Z
 9. [d33..419] updateWallet | By - rony derra | On - 2023-02-02T11:38:34Z
 10. [630..6c2] trxHandler | By - rony derra | On - 2023-02-02T11:30:29Z
 11. [4db..614] AchievementIcon | By - rony derra | On - 2023-02-02T11:24:03Z
 12. [d51..188] _DEFAULT_TELEGRAM_LINK | By - rony derra | On - 2023-02-02T09:30:37Z
 13. [c9d..1b6] config | By - rony derra | On - 2023-02-02T09:20:44Z
 14. [632..18f] Success | By - rony derra | On - 2023-02-01T17:45:04Z
 15. [d6b..edc] twitter.includes | By - rony derra | On - 2023-02-01T17:08:57Z
 16. [08c..d46] TwitterAuth | By - rony derra | On - 2023-02-01T16:56:49Z
 17. [013..61c] Rifled | By - rony derra | On - 2023-02-01T16:49:39Z
 18. [ae1..f66] hover | By - rony derra | On - 2023-02-01T16:44:18Z
 19. [6fc..0d9] mini | By - rony derra | On - 2023-02-01T16:12:55Z
 20. [635..417] Achievment | By - rony derra | On - 2023-02-01T16:07:15Z
 21. [920..2fd] Step1 | By - rony derra | On - 2023-02-01T14:39:48Z
 22. [a97..1ac] className="AchievementIcon" | By - rony derra | On - 2023-02-01T13:26:37Z
 23. [be7..f12] noIcons | By - rony derra | On - 2023-02-01T12:58:06Z
 24. [867..088] cont | By - rony derra | On - 2023-02-01T12:55:24Z
 25. [31f..46e] image | By - rony derra | On - 2023-02-01T12:38:19Z
 26. [e42..bd1] userFrameCi | By - rony derra | On - 2023-02-01T11:47:26Z
 27. [7ad..bb3] media | By - rony derra | On - 2023-02-01T11:20:45Z
 28. [5bd..52c] frame image | By - rony derra | On - 2023-02-01T10:55:33Z
 29. [eaa..156] AchievementIcon | By - rony derra | On - 2023-02-01T10:32:36Z
 30. [2b2..7ce] progress bar | By - rony derra | On - 2023-02-01T09:31:37Z
 31. [90d..edb] line | By - rony derra | On - 2023-02-01T09:02:07Z
 32. [e9f..2d2] new design | By - rony derra | On - 2023-02-01T08:19:02Z
 33. [69a..0cd] css | By - rony derra | On - 2023-02-01T07:37:27Z
 34. [509..6ea] listen | By - rony derra | On - 2023-01-31T13:57:27Z
 35. [872..1b7] preserveAspectRatio | By - rony derra | On - 2023-01-31T13:50:12Z
 36. [002..9af] React | By - rony derra | On - 2023-01-31T13:47:54Z
 37. [e93..0d0] widget | By - rony derra | On - 2023-01-30T12:56:09Z
 38. [e9b..0a8] TwitterAuth | By - rony derra | On - 2023-01-30T09:50:26Z
 39. [601..b80] TrxAchivModal | By - rony derra | On - 2023-01-30T09:03:14Z
 40. [9c6..27e] Wallet Connected Successfully | By - rony derra | On - 2023-01-29T17:31:38Z
 41. [0fc..f5a] useEffect | By - rony derra | On - 2023-01-29T17:27:55Z
 42. [16c..b03] leaderBoard | By - rony derra | On - 2023-01-29T16:37:33Z
 43. [8bd..e00] setTrxModal | By - rony derra | On - 2023-01-29T16:28:37Z
 44. [43f..4fa] formatting | By - rony derra | On - 2023-01-29T15:42:32Z
 45. [3f2..19d] homePage ghostBg | By - rony derra | On - 2023-01-29T14:33:15Z
 46. [ba0..aa3] oneUser | By - rony derra | On - 2023-01-29T13:52:26Z
 47. [2fd..ecf] React | By - rony derra | On - 2023-01-29T13:31:09Z
 48. [4b7..65f] className | By - rony derra | On - 2023-01-29T13:16:50Z
 49. [2c7..f7c] React | By - rony derra | On - 2023-01-29T10:41:07Z
 50. [c63..c22] useEffect | By - rony derra | On - 2023-01-29T10:16:14Z

## main


 1. [022..6fd] fix colors | By - AlexeyAdoniev | On - 2022-12-29T09:30:06Z
 2. [6d1..af2] remove glow | By - AlexeyAdoniev | On - 2022-12-29T09:05:45Z
 3. [9e3..b08] fdsf | By - AlexeyAdoniev | On - 2022-12-29T00:53:05Z
 4. [ff1..19a] Merge branch 'main' of https://github.com/XP-NETWORK/xp_challenges into main | By - AlexeyAdoniev | On - 2022-12-29T00:48:09Z
 5. [af7..404] fix glow effect | By - AlexeyAdoniev | On - 2022-12-29T00:47:55Z
 6. [19b..d12] fixes reg button desktop | By - Alex Moshinsky | On - 2022-12-29T00:47:18Z
 7. [25f..707] fixes | By - Alex Moshinsky | On - 2022-12-29T00:41:13Z
 8. [661..01a] change reg button on mobile | By - Alex Moshinsky | On - 2022-12-29T00:38:31Z
 9. [acc..827] bg | By - AlexeyAdoniev | On - 2022-12-29T00:37:13Z
 10. [d0d..87c] favicon | By - AlexeyAdoniev | On - 2022-12-29T00:15:43Z
 11. [0a6..586] fix buttons | By - AlexeyAdoniev | On - 2022-12-29T00:13:52Z
 12. [f49..516] Merge branch 'main' of https://github.com/XP-NETWORK/xp_challenges into main | By - AlexeyAdoniev | On - 2022-12-29T00:03:55Z
 13. [55c..50a] blur | By - AlexeyAdoniev | On - 2022-12-29T00:03:43Z
 14. [8b1..039] home page fixes | By - Alex Moshinsky | On - 2022-12-28T23:58:27Z
 15. [2c3..f40] buttons fix | By - AlexeyAdoniev | On - 2022-12-28T23:54:12Z
 16. [09e..88d] links on first page | By - AlexeyAdoniev | On - 2022-12-28T23:50:58Z
 17. [2ab..4a2] add color to button on home page | By - Alex Moshinsky | On - 2022-12-28T23:43:59Z
 18. [abf..f7e] Merge branch 'main' of https://github.com/XP-NETWORK/xp_challenges into main | By - AlexeyAdoniev | On - 2022-12-28T23:41:24Z
 19. [872..2d3] random color avatar | By - AlexeyAdoniev | On - 2022-12-28T23:41:05Z
 20. [cc6..788] add red close button | By - Alex Moshinsky | On - 2022-12-28T23:07:23Z
 21. [43c..a03] Merge branch 'main' of https://github.com/XP-NETWORK/xp_challenges into main | By - AlexeyAdoniev | On - 2022-12-28T23:05:33Z
 22. [d48..534] completed cards design | By - AlexeyAdoniev | On - 2022-12-28T23:05:20Z
 23. [55b..7a9] fix Collection header | By - Alex Moshinsky | On - 2022-12-28T22:58:33Z
 24. [dff..df1] fix collection page | By - Alex Moshinsky | On - 2022-12-28T22:54:34Z
 25. [c66..be4] Merge branch 'main' of https://github.com/XP-NETWORK/xp_challenges into main | By - AlexeyAdoniev | On - 2022-12-28T22:26:16Z
 26. [3aa..84c] cards reworked | By - AlexeyAdoniev | On - 2022-12-28T22:26:08Z
 27. [f3f..824] footer fix | By - Alex Moshinsky | On - 2022-12-28T22:25:51Z
 28. [6c3..a20] a | By - Alex Moshinsky | On - 2022-12-28T20:11:05Z
 29. [5ba..d00] loeaderboad search input fix | By - Alex Moshinsky | On - 2022-12-28T19:44:45Z
 30. [0bf..3e5] redesign leaderboard | By - Alex Moshinsky | On - 2022-12-28T19:42:36Z
 31. [9c1..2cf] remove console.log | By - Alex Moshinsky | On - 2022-12-28T19:12:17Z
 32. [b1d..a39] fixes | By - Alex Moshinsky | On - 2022-12-28T17:23:30Z
 33. [4c9..686] a | By - Alex Moshinsky | On - 2022-12-28T16:33:34Z
 34. [abd..f73] fix | By - Alex Moshinsky | On - 2022-12-28T15:22:46Z
 35. [649..a75] alot fixes | By - Alex Moshinsky | On - 2022-12-28T14:51:12Z
 36. [5bd..f9e] new chackbox | By - Alex Moshinsky | On - 2022-12-27T15:47:23Z
 37. [b09..6d7] add instance to axios | By - Alex Moshinsky | On - 2022-12-27T15:12:02Z
 38. [635..510] medias | By - AlexeyAdoniev | On - 2022-12-27T12:52:28Z
 39. [ec6..765] mobile | By - AlexeyAdoniev | On - 2022-12-27T08:50:23Z
 40. [57c..fa9] collection page, signup form bug fix, some medias | By - AlexeyAdoniev | On - 2022-12-26T21:12:11Z
 41. [659..bc8] fix menu | By - AlexeyAdoniev | On - 2022-12-26T19:38:08Z
 42. [322..6f4] add wallet | By - AlexeyAdoniev | On - 2022-12-26T15:25:27Z
 43. [a7b..90d] add elrond wallet | By - AlexeyAdoniev | On - 2022-12-25T17:37:44Z
 44. [cc9..38c] add modals | By - AlexeyAdoniev | On - 2022-12-25T09:56:09Z
 45. [b6a..80e] wallet service | By - AlexeyAdoniev | On - 2022-12-24T19:05:39Z
 46. [0c1..6cd] dsa | By - AlexeyAdoniev | On - 2022-12-22T18:19:09Z
 47. [a7d..79a] twitter auth | By - AlexeyAdoniev | On - 2022-12-22T18:17:54Z
 48. [dfb..205] socket events dispatch | By - AlexeyAdoniev | On - 2022-12-22T10:59:22Z
 49. [85c..588] achievements | By - AlexeyAdoniev | On - 2022-12-21T18:45:58Z
 50. [350..336] SignUp | By - AlexeyAdoniev | On - 2022-12-20T17:05:43Z

## new-design


 1. [ed3..729] Finnishes (#1) | By - rony derra | On - 2023-01-18T10:55:14Z
 2. [29a..e43] fix ProjectTimer | By - AlexeyAdoniev | On - 2023-01-12T10:58:12Z
 3. [b8f..2d5] Mobile - footer got hidden | By - AlexeyAdoniev | On - 2023-01-12T09:52:22Z
 4. [918..252] add tg connect  modal design | By - AlexeyAdoniev | On - 2023-01-12T09:08:06Z
 5. [2d6..8ea] input-enter | By - AlexeyAdoniev | On - 2023-01-11T19:11:56Z
 6. [92a..347] bugs | By - AlexeyAdoniev | On - 2023-01-11T12:43:10Z
 7. [98c..a74] fix iframe bug | By - AlexeyAdoniev | On - 2023-01-11T09:34:42Z
 8. [579..737] new bg, greyout opacity | By - AlexeyAdoniev | On - 2023-01-11T08:46:58Z
 9. [fa9..ae8] dynamic load script | By - AlexeyAdoniev | On - 2023-01-10T23:15:01Z
 10. [d89..ad8] avatars | By - AlexeyAdoniev | On - 2023-01-10T22:25:26Z
 11. [7d1..c67] avatar ph | By - AlexeyAdoniev | On - 2023-01-10T22:10:32Z
 12. [8fa..7b6] add user Wallet | By - AlexeyAdoniev | On - 2023-01-10T21:21:35Z
 13. [382..101] fix hero image | By - Alex Moshinsky | On - 2023-01-10T18:07:05Z
 14. [f80..705] fix loader mobile | By - Alex Moshinsky | On - 2023-01-10T17:41:10Z
 15. [d1a..e1f] add time loader | By - Alex Moshinsky | On - 2023-01-10T17:39:49Z
 16. [8e5..12e] bug fixes | By - AlexeyAdoniev | On - 2023-01-10T17:01:52Z
 17. [bd3..c80] twitter fix | By - AlexeyAdoniev | On - 2023-01-10T15:36:11Z
 18. [316..34b] iframe fix | By - AlexeyAdoniev | On - 2023-01-10T14:37:56Z
 19. [2e6..276] add loader | By - AlexeyAdoniev | On - 2023-01-10T13:06:17Z
 20. [660..083] fix mobile menu | By - Alex Moshinsky | On - 2023-01-09T22:25:30Z
 21. [3c7..0c0] add goToLeaderboard button | By - Alex Moshinsky | On - 2023-01-09T19:29:43Z
 22. [551..6f3] add widget iframe | By - AlexeyAdoniev | On - 2023-01-09T18:13:10Z
 23. [a40..7c6] return old twitter | By - Alex Moshinsky | On - 2023-01-09T14:44:21Z
 24. [3ce..d65] add widget | By - Alex Moshinsky | On - 2023-01-09T14:28:43Z
 25. [366..f62] wallet success modal, progress bard style fix | By - AlexeyAdoniev | On - 2023-01-09T09:11:21Z
 26. [dd8..3ef] Merge branch 'new-design' of https://github.com/XP-NETWORK/xp_challenges into new-design | By - AlexeyAdoniev | On - 2023-01-09T01:02:11Z
 27. [305..093] success modaL | By - AlexeyAdoniev | On - 2023-01-09T01:02:01Z
 28. [1e4..054] fixes of hero | By - Alex Moshinsky | On - 2023-01-09T00:51:59Z
 29. [f68..42c] fix background on iphone | By - Alex Moshinsky | On - 2023-01-09T00:43:11Z
 30. [e46..a6d] mobile fix timer | By - Alex Moshinsky | On - 2023-01-09T00:36:14Z
 31. [ccf..32d] fix user profile | By - Alex Moshinsky | On - 2023-01-09T00:33:00Z
 32. [9a8..e43] mobile profile wip | By - Alex Moshinsky | On - 2023-01-09T00:29:01Z
 33. [62b..c80] Merge branch 'new-design' of https://github.com/XP-NETWORK/xp_challenges into new-design | By - AlexeyAdoniev | On - 2023-01-08T23:44:03Z
 34. [cf3..6ab] sa | By - AlexeyAdoniev | On - 2023-01-08T23:43:52Z
 35. [09e..bfe] remove log | By - Alex Moshinsky | On - 2023-01-08T23:41:39Z
 36. [562..950] update user profile | By - Alex Moshinsky | On - 2023-01-08T23:41:15Z
 37. [5b4..c56] Merge branch 'new-design' of https://github.com/XP-NETWORK/xp_challenges into new-design | By - AlexeyAdoniev | On - 2023-01-08T23:23:41Z
 38. [b13..574] email Subscription | By - AlexeyAdoniev | On - 2023-01-08T23:23:15Z
 39. [462..7cb] fix leaderboard | By - Alex Moshinsky | On - 2023-01-08T23:21:39Z
 40. [afc..662] fix more | By - Alex Moshinsky | On - 2023-01-08T23:12:41Z
 41. [fd0..487] fixes | By - Alex Moshinsky | On - 2023-01-08T23:10:46Z
 42. [ca2..7e1] a | By - Alex Moshinsky | On - 2023-01-08T22:59:28Z
 43. [46f..51f] modal | By - AlexeyAdoniev | On - 2023-01-08T21:42:50Z
 44. [f38..7f7] fix | By - Alex Moshinsky | On - 2023-01-08T21:39:13Z
 45. [fd0..212] remove all signup | By - Alex Moshinsky | On - 2023-01-08T21:36:12Z
 46. [c6b..1c8] add user page | By - Alex Moshinsky | On - 2023-01-08T21:29:00Z
 47. [66d..b1a] add email popup | By - AlexeyAdoniev | On - 2023-01-08T21:26:15Z
 48. [e55..35c] login with uniqueId | By - Alex Moshinsky | On - 2023-01-08T19:35:44Z
 49. [270..b5f] add frame to user profile | By - Alex Moshinsky | On - 2023-01-08T14:34:46Z
 50. [27d..6c0] redesign user profile | By - Alex Moshinsky | On - 2023-01-08T11:11:27Z

# Xp-Layer-2-Research

## hamza


 1. [59a..b0a] [L2-gasless-transaction-modification] | By - Genesis671230 | On - 2023-02-15T12:16:26Z

## irfanullah


 1. [b8a..4cd] Update README.md | By - Irfan Ullah | On - 2023-02-15T13:02:42Z
 2. [3c6..8ef] 15 feb 2023 work | By - irfanullahatozi | On - 2023-02-15T13:02:00Z
 3. [491..222] 15 feb 2023 work | By - irfanullahatozi | On - 2023-02-15T13:01:09Z
 4. [b1b..bd3] first commit | By - irfanullahatozi | On - 2023-02-15T12:57:43Z

## main


 1. [b1b..bd3] first commit | By - irfanullahatozi | On - 2023-02-15T12:57:43Z

# Xp-Coin-Cap-Market

## master


 1. [d74..5dc] first commit | By - mominhyatkhan | On - 2023-02-14T08:54:42Z
 2. [0dd..a67] first commit | By - mominhyatkhan | On - 2023-02-14T08:54:31Z

## research


 1. [162..b69] Research in progress to fetch the required details for NFT collection. | By - mominhyatkhan | On - 2023-02-15T12:54:14Z
 2. [d74..5dc] first commit | By - mominhyatkhan | On - 2023-02-14T08:54:42Z
 3. [0dd..a67] first commit | By - mominhyatkhan | On - 2023-02-14T08:54:31Z

# nft-index

## bleeding-edge


 1. [4c8..e78] Build: (f686d5e) v0.2.12 | By - rupansh | On - 2021-11-22T11:41:26Z
 2. [28c..d68] Build: (1d322a5) v0.2.11 | By - rupansh | On - 2021-11-22T11:40:28Z
 3. [490..01c] Build: (09d4850) fix(chainid): merge all networks | By - imsk17 | On - 2021-11-22T11:38:07Z
 4. [dab..22c] Build: (d9522fd) feat(networks): add testnet networks | By - imsk17 | On - 2021-11-22T11:06:00Z
 5. [7e4..759] Build: (7cd4d02) v0.2.9 | By - rupansh | On - 2021-11-21T16:14:31Z
 6. [4da..635] Build: (3db15dd) nft-list: properly export AlgoNft | By - rupansh | On - 2021-11-21T16:04:18Z
 7. [f19..340] Build: (e75e4c3) v0.2.7 | By - rupansh | On - 2021-11-20T10:09:08Z
 8. [537..5f8] Build: (2ae2fce) initial algorand support | By - rupansh | On - 2021-11-20T10:08:36Z
 9. [d63..3ef] Build: (e416ba5) initial algorand support | By - rupansh | On - 2021-11-20T10:07:10Z
 10. [c1c..a62] Build: (9e9f309) initial algorand support | By - rupansh | On - 2021-11-20T10:05:14Z
 11. [aec..65a] Build: (7ed49cd) TrxNftListService: explicitly search for wrapped nft | By - imsk17 | On - 2021-11-18T11:54:07Z
 12. [94b..2f8] Build: (adcbe2e) chore(env): change moralis environment to node | By - imsk17 | On - 2021-11-18T11:48:14Z
 13. [ff9..d51] Build: (7ed49cd) TrxNftListService: explicitly search for wrapped nft | By - rupansh | On - 2021-11-16T09:26:33Z
 14. [8bf..b8c] Build: (c17fcd6) v0.2.3 | By - rupansh | On - 2021-11-15T12:22:21Z
 15. [707..96f] Build: (8a8fac8) v0.2.2 | By - rupansh | On - 2021-11-15T11:49:13Z
 16. [253..773] Build: (2c9c77e) chore(packages): bump moralis | By - imsk17 | On - 2021-11-15T11:45:32Z
 17. [bf5..d75] Build: (b5038f3) nft-list: tron: pass tokenAbbr, tokenLogo and tokenName as well | By - rupansh | On - 2021-11-14T12:12:09Z
 18. [04c..65a] Build: (e3f9418) v0.1.5 | By - rupansh | On - 2021-11-11T14:37:25Z
 19. [dcc..e36] Build: (0d5dc23) v0.1.4 | By - rupansh | On - 2021-11-10T13:19:04Z
 20. [9d2..434] Build: (b35c382) add npmignore | By - rupansh | On - 2021-11-10T13:18:11Z
 21. [6f8..499] Build: (45f7ffe) package: bump version | By - rupansh | On - 2021-11-10T12:45:58Z
 22. [306..f8f] Build: (4204a39) nft-list: elrond: prefer second uri over first | By - rupansh | On - 2021-11-10T12:35:15Z
 23. [039..98c] Build: (c3e0ca1) nft-list: tron: fix erc721Enumerate | By - rupansh | On - 2021-11-08T14:01:38Z
 24. [91f..d27] Build: (a58ebae) export from tron | By - rupansh | On - 2021-11-08T13:35:39Z
 25. [9cb..41c] Build: (d387f74) initial nft list for tron | By - rupansh | On - 2021-11-08T13:33:01Z
 26. [4f2..4f0] Build: (82d5263) moralis: initialize lazily | By - rupansh | On - 2021-11-08T11:19:27Z
 27. [2d2..8a1] Build: (8b31de8) nft-list: moralis: filter out non-erc721 nfts | By - rupansh | On - 2021-11-02T14:10:26Z
 28. [089..4b4] Build: (12bbf3a) moralis: mapper: convert contract address to checksum address | By - rupansh | On - 2021-11-02T13:42:48Z
 29. [5f7..eeb] Build: (ec35ecd) package: rename | By - rupansh | On - 2021-11-02T12:39:58Z
 30. [9f1..8a4] Build: (c5b30a5) restore yarn.lock | By - rupansh | On - 2021-11-02T12:23:17Z

## block-listener


 1. [9c0..867] tron: enable worker for listener | By - imsk17 | On - 2022-05-17T12:22:49Z
 2. [755..7fb] Listen for each block | By - imsk17 | On - 2022-05-13T08:52:15Z
 3. [f5c..518] nft-list: evm: properly commit changes to db for vechain | By - rupansh | On - 2022-05-12T09:23:45Z
 4. [cbc..3a1] listener: adapt for vechain | By - imsk17 | On - 2022-05-11T12:36:10Z
 5. [ebc..564] tron: add a check to live listener to avoid unfinalized blocks | By - imsk17 | On - 2022-05-08T10:32:52Z
 6. [a9b..6e5] iotex: add a contract to the list | By - imsk17 | On - 2022-05-08T10:32:51Z
 7. [30b..986] fix hardcoded testnet VeChain | By - Dima Brook | On - 2022-05-03T18:06:13Z
 8. [270..ace] fix type error | By - Dima Brook | On - 2022-05-03T16:14:58Z
 9. [f96..2f5] Merge pull request #3 from XP-NETWORK/vechain | By - Dima Brook | On - 2022-05-03T10:20:30Z
 10. [c16..1bb] Merge branch 'master' into vechain | By - Dima Brook | On - 2022-05-03T10:19:31Z
 11. [4ec..1d2] algorand: nft-list-service: gracefully handle 404 error | By - rupansh | On - 2022-05-03T09:49:09Z
 12. [95e..86f] velas: use web3 repo instead of velas api | By - imsk17 | On - 2022-05-01T12:23:37Z
 13. [19c..01c] Merge vech to master | By - Sumit Kumar | On - 2022-04-18T11:59:48Z
 14. [a97..139] Use Moralis for Some EVM Chains | By - imsk17 | On - 2022-04-18T11:58:56Z
 15. [2cd..3ab] Merge Vechain | By - Sumit Kumar | On - 2022-04-14T12:12:41Z
 16. [387..5b2] web3: chains: add support for vechain | By - imsk17 | On - 2022-04-12T12:44:35Z
 17. [951..2f3] web3: providers: use WebsocketProvider if provided node is ws | By - imsk17 | On - 2022-04-11T11:19:58Z
 18. [1cb..990] web3: activate index only for chains that are provided | By - imsk17 | On - 2022-04-11T11:05:22Z
 19. [7d8..9ab] gatechain added to nft-index | By - YuraDXPNetwork | On - 2022-04-05T14:20:54Z
 20. [4b2..a20] fix nft listing for algorand | By - rupansh | On - 2022-04-05T13:12:36Z
 21. [28b..935] update yarn lock | By - imsk17 | On - 2022-03-30T11:46:40Z
 22. [cba..c64] indexer: add godwoken to web3 chains | By - imsk17 | On - 2022-03-29T12:43:38Z
 23. [82f..546] vechain: setup listener | By - imsk17 | On - 2022-03-24T18:06:02Z
 24. [0fb..8e1] eth-catchup: adapt for @vechain/ethers | By - imsk17 | On - 2022-03-24T12:26:07Z
 25. [9f4..9e0] formatting: add pre commit hook | By - imsk17 | On - 2022-03-20T09:47:28Z
 26. [40c..5be] tezos: mapper: fix mapper | By - imsk17 | On - 2022-03-16T19:01:26Z
 27. [6b2..230] chains: Vethers Setup | By - imsk17 | On - 2022-03-03T12:58:44Z
 28. [ddf..5d3] helpers: nftList: fix setting of Retry-After header | By - rupansh | On - 2022-03-01T13:54:18Z
 29. [70b..5a8] added harmony to consts | By - VKint | On - 2022-02-27T10:34:07Z
 30. [27d..45c] use subgraph for eth | By - rupansh | On - 2022-02-24T23:47:48Z
 31. [675..75b] nft-list: eth: add subgraph for eth nft | By - rupansh | On - 2022-02-24T23:47:48Z
 32. [a45..bee] chains: include harmony | By - imsk17 | On - 2022-02-16T12:17:30Z
 33. [88b..a93] nft-list: evm: ignore ERC1155_URI support | By - rupansh | On - 2022-02-16T11:21:07Z
 34. [1ec..133] nft-list: add collectionIdent to NftInfo | By - imsk17 | On - 2022-02-15T12:28:00Z
 35. [752..951] chains: web3: add aurora chain | By - imsk17 | On - 2022-02-10T13:39:49Z
 36. [a2b..e05] nft-listening: move from pool to dedicated workers | By - imsk17 | On - 2022-02-02T09:54:03Z
 37. [5fe..539] chains: iotex: use catchup and listening | By - imsk17 | On - 2022-02-01T11:31:45Z
 38. [17a..0dd] chains: add support for iotex | By - imsk17 | On - 2022-01-31T14:16:34Z
 39. [2a4..e28] project: lint: fix eslint | By - imsk17 | On - 2022-01-27T11:03:44Z
 40. [308..798] tezos: AssetMapper: add exception for wrapped nft | By - rupansh | On - 2022-01-25T10:19:51Z
 41. [6fb..a25] tezos: AssetMapper: use formats if decimals are not available | By - rupansh | On - 2022-01-25T09:43:39Z
 42. [21f..c1f] velas: properly serialize nft | By - rupansh | On - 2022-01-24T08:15:14Z
 43. [ca1..538] velas: use explorer api to fetch nfts | By - rupansh | On - 2022-01-24T08:09:12Z
 44. [3d4..bdd] tezos: AssetMapper: use decimals instead of format to check for nft | By - rupansh | On - 2022-01-24T08:08:58Z
 45. [89f..06f] nft-list: tezos: assetMapper: check balance | By - rupansh | On - 2022-01-21T12:09:11Z
 46. [a7c..1d2] nft-list: sanitize addresses before comitting | By - rupansh | On - 2022-01-21T10:11:02Z
 47. [8cb..2cb] nft-list: preacache: parameterize cache expiry | By - rupansh | On - 2022-01-20T13:04:59Z
 48. [64d..93f] nft-list: preacache: invalidate cache after a day | By - rupansh | On - 2022-01-20T13:03:33Z
 49. [9d5..d8b] nft-list: fix insane usage of Sets and Maps | By - rupansh | On - 2022-01-20T12:06:27Z
 50. [aa6..4a4] nft-list: velas-explorer: ignore token if not owned | By - rupansh | On - 2022-01-20T11:15:17Z

## external


 1. [f68..5df] v0.2.12 | By - rupansh | On - 2021-11-22T11:40:07Z
 2. [1d3..738] v0.2.11 | By - rupansh | On - 2021-11-22T11:39:30Z
 3. [2d2..ab0] v0.2.10 | By - rupansh | On - 2021-11-22T11:39:30Z
 4. [7a7..d24] nft-list: algorand: pass nft id | By - rupansh | On - 2021-11-22T11:39:30Z
 5. [09d..820] fix(chainid): merge all networks | By - imsk17 | On - 2021-11-22T11:37:33Z
 6. [d95..5fd] feat(networks): add testnet networks | By - imsk17 | On - 2021-11-22T11:05:00Z
 7. [2bc..4ed] chore(packages): bump moralis | By - imsk17 | On - 2021-11-22T10:36:41Z
 8. [7cd..dd9] v0.2.9 | By - rupansh | On - 2021-11-21T16:13:47Z
 9. [ed5..1a2] nft-list: algorand: pass creator as well | By - rupansh | On - 2021-11-21T16:13:30Z
 10. [c03..e90] v0.2.8 | By - rupansh | On - 2021-11-21T16:13:14Z
 11. [3db..85c] nft-list: properly export AlgoNft | By - rupansh | On - 2021-11-21T16:02:39Z
 12. [e75..5aa] v0.2.7 | By - rupansh | On - 2021-11-20T10:08:34Z
 13. [2ae..b24] initial algorand support | By - rupansh | On - 2021-11-20T10:08:01Z
 14. [a4e..a93] v0.2.5 | By - rupansh | On - 2021-11-16T09:50:40Z
 15. [b1b..400] TrxNftListService: xpnft enumerate: fix balance | By - rupansh | On - 2021-11-16T09:49:03Z
 16. [3cc..cd1] v0.2.4 | By - rupansh | On - 2021-11-16T09:26:24Z
 17. [7ed..7a0] TrxNftListService: explicitly search for wrapped nft | By - rupansh | On - 2021-11-16T09:25:50Z
 18. [c17..e90] v0.2.3 | By - rupansh | On - 2021-11-15T12:20:34Z
 19. [3c2..9bf] nft-list: tron: convert tokenId properly | By - rupansh | On - 2021-11-15T12:20:14Z
 20. [8a8..100] v0.2.2 | By - rupansh | On - 2021-11-15T11:48:04Z
 21. [b04..a68] update moralis dep | By - rupansh | On - 2021-11-15T11:48:04Z
 22. [2c9..23a] chore(packages): bump moralis | By - imsk17 | On - 2021-11-15T11:39:24Z
 23. [b50..190] nft-list: tron: pass tokenAbbr, tokenLogo and tokenName as well | By - rupansh | On - 2021-11-14T12:11:04Z
 24. [b0c..53a] v0.2.0 | By - rupansh | On - 2021-11-14T12:10:32Z
 25. [e3f..1ef] v0.1.5 | By - rupansh | On - 2021-11-11T14:36:28Z
 26. [60d..3d5] nft-list: tron: pass owner_address to api | By - rupansh | On - 2021-11-11T14:35:56Z
 27. [0d5..0fe] v0.1.4 | By - rupansh | On - 2021-11-10T13:18:03Z
 28. [b35..a6e] add npmignore | By - rupansh | On - 2021-11-10T13:17:27Z
 29. [86f..17f] v0.1.2 | By - rupansh | On - 2021-11-10T13:06:59Z
 30. [555..77a] minor changes for publishing types | By - rupansh | On - 2021-11-10T13:04:49Z
 31. [45f..7c6] package: bump version | By - rupansh | On - 2021-11-10T12:45:11Z
 32. [420..5f2] nft-list: elrond: prefer second uri over first | By - rupansh | On - 2021-11-10T12:34:26Z
 33. [c3e..2b8] nft-list: tron: fix erc721Enumerate | By - rupansh | On - 2021-11-08T14:01:03Z
 34. [a58..770] export from tron | By - rupansh | On - 2021-11-08T13:35:03Z
 35. [d38..d11] initial nft list for tron | By - rupansh | On - 2021-11-08T13:32:10Z
 36. [82d..aff] moralis: initialize lazily | By - rupansh | On - 2021-11-08T11:18:52Z
 37. [8b3..939] nft-list: moralis: filter out non-erc721 nfts | By - rupansh | On - 2021-11-02T14:09:51Z
 38. [12b..773] moralis: mapper: convert contract address to checksum address | By - rupansh | On - 2021-11-02T13:42:14Z
 39. [ec3..a07] package: rename | By - rupansh | On - 2021-11-02T12:39:25Z
 40. [c5b..e5f] restore yarn.lock | By - rupansh | On - 2021-11-02T12:21:27Z
 41. [778..a41] nft-list: moralis: use browser variant | By - rupansh | On - 2021-11-02T12:18:56Z
 42. [574..5a2] add autobuild workflow | By - rupansh | On - 2021-11-02T12:17:45Z
 43. [d60..113] refactor to library | By - rupansh | On - 2021-11-02T12:14:04Z
 44. [ac4..d90] treewide: remove mongodb caching | By - rupansh | On - 2021-11-02T12:03:46Z
 45. [88a..6bd] .config: web3 cleanup | By - rupansh | On - 2021-11-02T11:49:43Z
 46. [891..508] initial moralis import | By - rupansh | On - 2021-11-02T11:48:50Z
 47. [033..b66] db: add batchUpdateOrInsert | By - rupansh | On - 2021-11-02T10:03:23Z
 48. [1f2..1a1] disable listening | By - rupansh | On - 2021-11-01T14:15:45Z
 49. [e03..847] elrond: listService: fix error catching | By - rupansh | On - 2021-11-01T13:36:48Z
 50. [c26..25c] elrond: ListNft: fix derp | By - rupansh | On - 2021-11-01T12:15:34Z

## fix-iotex


 1. [6f3..2a0] add error to trx | By - Alex Moshinsky | On - 2022-06-19T15:55:11Z
 2. [45e..d3e] add error to trx | By - Alex Moshinsky | On - 2022-06-19T15:54:28Z
 3. [439..816] fixes testnet | By - Alex Moshinsky | On - 2022-06-12T09:58:41Z
 4. [ec3..bb0] fix tazoz | By - Alex Moshinsky | On - 2022-06-08T15:01:53Z
 5. [2c1..79e] tezos: increase nft limit to maximum | By - rupansh | On - 2022-06-07T13:27:54Z
 6. [7ed..33f] add yarn.lock to .gitignore | By - Dima Brook | On - 2022-06-07T08:46:06Z
 7. [557..0e9] check if displayUrl is broken and replace with artifactUri | By - rocalex | On - 2022-06-06T09:03:57Z
 8. [802..30f] disable sft | By - Alex Moshinsky | On - 2022-06-01T17:09:01Z
 9. [0f7..bb0] a | By - Alex Moshinsky | On - 2022-06-01T17:07:23Z
 10. [cba..a1b] a | By - Alex Moshinsky | On - 2022-06-01T17:00:58Z
 11. [51e..b24] remove console log and add check number | By - Alex Moshinsky | On - 2022-06-01T16:54:12Z
 12. [08b..eb9] balance big them 0 | By - Alex Moshinsky | On - 2022-06-01T16:48:10Z
 13. [21b..3b7] diable filter sft | By - Alex Moshinsky | On - 2022-06-01T16:46:48Z
 14. [341..d1f] update moralis to to version 1.8 | By - Alex Moshinsky | On - 2022-06-01T15:15:51Z
 15. [246..6d2] fix vales fetch lowercase address | By - Alex Moshinsky | On - 2022-06-01T09:41:18Z
 16. [75e..86d] chnage from web to ethers and combine vales + iotex with DB and blockChain | By - Alex Moshinsky | On - 2022-05-31T18:18:54Z
 17. [b5c..3b2] fix velas | By - Alex Moshinsky | On - 2022-05-31T10:43:38Z
 18. [e9f..7cd] lowercase | By - Alex Moshinsky | On - 2022-05-30T16:25:56Z
 19. [790..f0d] get nfts from db | By - Alex Moshinsky | On - 2022-05-30T16:09:48Z
 20. [155..982] disable TokenAuthority | By - Alex Moshinsky | On - 2022-05-30T10:11:06Z
 21. [81b..01b] check if nft emepty | By - Alex Moshinsky | On - 2022-05-30T09:40:28Z
 22. [a77..326] console.log | By - Alex Moshinsky | On - 2022-05-30T09:09:49Z
 23. [ed8..667] change to persist and flush | By - Alex Moshinsky | On - 2022-05-30T08:57:08Z
 24. [912..a44] check nft | By - Alex Moshinsky | On - 2022-05-30T08:52:33Z
 25. [3d5..112] fix create to db | By - Alex Moshinsky | On - 2022-05-30T08:50:11Z
 26. [185..ea0] check error | By - Alex Moshinsky | On - 2022-05-30T08:37:12Z
 27. [60d..42c] if nft no exsit it will add | By - Alex Moshinsky | On - 2022-05-30T08:26:51Z
 28. [feb..41b] ready for testing | By - Alex Moshinsky | On - 2022-05-29T21:49:11Z
 29. [3b5..aac] check nft work | By - Alex Moshinsky | On - 2022-05-29T21:14:56Z
 30. [62b..327] add post request route | By - Alex Moshinsky | On - 2022-05-29T09:30:13Z
 31. [af0..c9e] nft-check wip | By - Alex Moshinsky | On - 2022-05-29T08:26:12Z
 32. [feb..db4] tron: enable worker for listener | By - imsk17 | On - 2022-05-17T12:23:56Z
 33. [f5c..518] nft-list: evm: properly commit changes to db for vechain | By - rupansh | On - 2022-05-12T09:23:45Z
 34. [cbc..3a1] listener: adapt for vechain | By - imsk17 | On - 2022-05-11T12:36:10Z
 35. [ebc..564] tron: add a check to live listener to avoid unfinalized blocks | By - imsk17 | On - 2022-05-08T10:32:52Z
 36. [a9b..6e5] iotex: add a contract to the list | By - imsk17 | On - 2022-05-08T10:32:51Z
 37. [30b..986] fix hardcoded testnet VeChain | By - Dima Brook | On - 2022-05-03T18:06:13Z
 38. [270..ace] fix type error | By - Dima Brook | On - 2022-05-03T16:14:58Z
 39. [f96..2f5] Merge pull request #3 from XP-NETWORK/vechain | By - Dima Brook | On - 2022-05-03T10:20:30Z
 40. [c16..1bb] Merge branch 'master' into vechain | By - Dima Brook | On - 2022-05-03T10:19:31Z
 41. [4ec..1d2] algorand: nft-list-service: gracefully handle 404 error | By - rupansh | On - 2022-05-03T09:49:09Z
 42. [95e..86f] velas: use web3 repo instead of velas api | By - imsk17 | On - 2022-05-01T12:23:37Z
 43. [19c..01c] Merge vech to master | By - Sumit Kumar | On - 2022-04-18T11:59:48Z
 44. [a97..139] Use Moralis for Some EVM Chains | By - imsk17 | On - 2022-04-18T11:58:56Z
 45. [2cd..3ab] Merge Vechain | By - Sumit Kumar | On - 2022-04-14T12:12:41Z
 46. [387..5b2] web3: chains: add support for vechain | By - imsk17 | On - 2022-04-12T12:44:35Z
 47. [951..2f3] web3: providers: use WebsocketProvider if provided node is ws | By - imsk17 | On - 2022-04-11T11:19:58Z
 48. [1cb..990] web3: activate index only for chains that are provided | By - imsk17 | On - 2022-04-11T11:05:22Z
 49. [7d8..9ab] gatechain added to nft-index | By - YuraDXPNetwork | On - 2022-04-05T14:20:54Z
 50. [4b2..a20] fix nft listing for algorand | By - rupansh | On - 2022-04-05T13:12:36Z

## listenerHacks


 1. [406..91d] config: add xDAI | By - rupansh | On - 2021-11-08T09:34:10Z
 2. [03e..f3d] package: cleanup | By - rupansh | On - 2021-11-08T09:22:32Z
 3. [ab1..f2c] cleanup unused files | By - rupansh | On - 2021-11-08T09:21:12Z
 4. [0be..486] config: remove tron | By - rupansh | On - 2021-11-08T09:20:04Z
 5. [137..4f0] config: web3: disable all chains except fantom | By - rupansh | On - 2021-11-08T09:18:42Z
 6. [057..d00] enable tron listener | By - rupansh | On - 2021-11-07T16:19:17Z
 7. [33e..acc] use constant contracts | By - rupansh | On - 2021-11-01T14:47:54Z
 8. [c98..02a] do listening only | By - rupansh | On - 2021-11-01T14:14:48Z
 9. [e03..847] elrond: listService: fix error catching | By - rupansh | On - 2021-11-01T13:36:48Z
 10. [c26..25c] elrond: ListNft: fix derp | By - rupansh | On - 2021-11-01T12:15:34Z
 11. [8b7..e2f] remove anyscript | By - rupansh | On - 2021-11-01T12:04:49Z
 12. [6da..717] DbNftStore: stop updating uri in updateOwner | By - rupansh | On - 2021-11-01T10:40:30Z
 13. [065..e26] a | By - xp-network | On - 2021-11-01T00:42:49Z
 14. [c06..a47] a | By - xp-network | On - 2021-11-01T00:41:10Z
 15. [693..c63] a | By - xp-network | On - 2021-11-01T00:37:23Z
 16. [51d..369] a | By - xp-network | On - 2021-11-01T00:37:06Z
 17. [c30..4d8] a | By - xp-network | On - 2021-11-01T00:34:31Z
 18. [93f..9c3] a | By - xp-network | On - 2021-11-01T00:30:51Z
 19. [6c8..1cf] a | By - xp-network | On - 2021-11-01T00:28:29Z
 20. [2d2..2d2] a | By - xp-network | On - 2021-11-01T00:23:40Z
 21. [d07..d6c] a | By - xp-network | On - 2021-10-31T18:58:07Z
 22. [757..5f9] a | By - xp-network | On - 2021-10-31T18:54:45Z
 23. [a15..ca5] a | By - xp-network | On - 2021-10-31T18:54:33Z
 24. [d25..605] Merge branch 'master' of https://github.com/xp-network/nft-list-backend | By - xp-network | On - 2021-10-31T14:58:51Z
 25. [240..f35] config: strip erc721 contracts | By - rupansh | On - 2021-10-31T14:58:30Z
 26. [1da..098] Merge branch 'master' of https://github.com/xp-network/nft-list-backend | By - xp-network | On - 2021-10-31T14:51:46Z
 27. [bef..b33] skip adding nft if tokenUri is not available | By - rupansh | On - 2021-10-31T14:51:23Z
 28. [ae9..eb9] Merge branch 'master' of https://github.com/xp-network/nft-list-backend | By - xp-network | On - 2021-10-31T14:36:57Z
 29. [649..550] GET /web3/:id/:address: don't check address validitiy | By - rupansh | On - 2021-10-31T14:36:25Z
 30. [f64..a89] Merge branch 'master' of https://github.com/xp-network/nft-list-backend | By - xp-network | On - 2021-10-31T10:57:58Z
 31. [6f0..e8d] config: enable avax | By - rupansh | On - 2021-10-31T10:57:08Z
 32. [ac0..452] isolateContext for tron | By - rupansh | On - 2021-10-31T09:47:21Z
 33. [ea9..d31] Merge branch 'master' of https://github.com/xp-network/nft-list-backend | By - xp-network | On - 2021-10-31T09:45:15Z
 34. [536..a06] nft-list: liveEthNftListener: isolate context properly | By - rupansh | On - 2021-10-31T09:44:35Z
 35. [b61..fd5] Merge branch 'master' of https://github.com/xp-network/nft-list-backend | By - xp-network | On - 2021-10-31T09:29:43Z
 36. [983..8a2] nft-list: catchupSerivce: minor fixes | By - rupansh | On - 2021-10-31T09:28:55Z
 37. [ebe..e56] a | By - xp-network | On - 2021-10-30T19:15:33Z
 38. [9f4..423] a | By - xp-network | On - 2021-10-30T19:11:58Z
 39. [6a7..347] a | By - xp-network | On - 2021-10-30T09:53:36Z
 40. [e0b..e2b] config: add more chains | By - rupansh | On - 2021-10-30T09:52:01Z
 41. [3ef..a62] Merge branch 'master' of https://github.com/xp-network/nft-list-backend | By - xp-network | On - 2021-10-28T11:50:31Z
 42. [a50..e9d] [DNM] disable tron | By - rupansh | On - 2021-10-28T11:49:40Z
 43. [c43..03f] a | By - xp-network | On - 2021-10-28T11:17:31Z
 44. [48e..ce1] nft-list: elrond: add nonce to ElrondTokenData | By - rupansh | On - 2021-10-28T07:53:00Z
 45. [b17..410] nft-list: model: add tron nft listener | By - rupansh | On - 2021-10-28T06:57:16Z
 46. [28c..d23] refactor EthNFtCatchupService to repo pattern | By - rupansh | On - 2021-10-27T12:40:14Z
 47. [de3..21c] nft-list: CacthupEthNftListner fixes | By - rupansh | On - 2021-10-26T11:59:04Z
 48. [742..7ec] catchupListener: allow toBlock to be latest | By - rupansh | On - 2021-10-26T11:10:51Z
 49. [4cf..1b2] nft-list: eth: LiveEthNftListener: allow abstract provider | By - rupansh | On - 2021-10-26T11:03:37Z
 50. [512..f83] change web3 catchup route | By - rupansh | On - 2021-10-26T11:01:59Z

## master


 1. [45a..235] chains: add support for skale | By - imsk17 | On - 2022-07-11T09:12:34Z
 2. [059..bd2] Revert "add yarn.lock to .gitignore" | By - rupansh | On - 2022-06-07T13:03:50Z
 3. [e99..17d] tezos: increase nft limit to maximum | By - rupansh | On - 2022-06-07T13:03:22Z
 4. [100..1db] add yarn.lock to .gitignore | By - Dima Brook | On - 2022-06-07T08:06:52Z
 5. [5e5..158] change expiration to 90 days | By - Dima Brook | On - 2022-06-07T08:05:32Z
 6. [f81..0ef] add block store service for tracking synced blocks | By - rupansh | On - 2022-05-20T08:28:41Z
 7. [98a..46d] Merge branch 'block-listener' | By - imsk17 | On - 2022-05-19T11:36:13Z
 8. [feb..db4] tron: enable worker for listener | By - imsk17 | On - 2022-05-17T12:23:56Z
 9. [9c0..867] tron: enable worker for listener | By - imsk17 | On - 2022-05-17T12:22:49Z
 10. [755..7fb] Listen for each block | By - imsk17 | On - 2022-05-13T08:52:15Z
 11. [f5c..518] nft-list: evm: properly commit changes to db for vechain | By - rupansh | On - 2022-05-12T09:23:45Z
 12. [cbc..3a1] listener: adapt for vechain | By - imsk17 | On - 2022-05-11T12:36:10Z
 13. [ebc..564] tron: add a check to live listener to avoid unfinalized blocks | By - imsk17 | On - 2022-05-08T10:32:52Z
 14. [a9b..6e5] iotex: add a contract to the list | By - imsk17 | On - 2022-05-08T10:32:51Z
 15. [30b..986] fix hardcoded testnet VeChain | By - Dima Brook | On - 2022-05-03T18:06:13Z
 16. [270..ace] fix type error | By - Dima Brook | On - 2022-05-03T16:14:58Z
 17. [f96..2f5] Merge pull request #3 from XP-NETWORK/vechain | By - Dima Brook | On - 2022-05-03T10:20:30Z
 18. [c16..1bb] Merge branch 'master' into vechain | By - Dima Brook | On - 2022-05-03T10:19:31Z
 19. [4ec..1d2] algorand: nft-list-service: gracefully handle 404 error | By - rupansh | On - 2022-05-03T09:49:09Z
 20. [95e..86f] velas: use web3 repo instead of velas api | By - imsk17 | On - 2022-05-01T12:23:37Z
 21. [19c..01c] Merge vech to master | By - Sumit Kumar | On - 2022-04-18T11:59:48Z
 22. [a97..139] Use Moralis for Some EVM Chains | By - imsk17 | On - 2022-04-18T11:58:56Z
 23. [2cd..3ab] Merge Vechain | By - Sumit Kumar | On - 2022-04-14T12:12:41Z
 24. [387..5b2] web3: chains: add support for vechain | By - imsk17 | On - 2022-04-12T12:44:35Z
 25. [951..2f3] web3: providers: use WebsocketProvider if provided node is ws | By - imsk17 | On - 2022-04-11T11:19:58Z
 26. [1cb..990] web3: activate index only for chains that are provided | By - imsk17 | On - 2022-04-11T11:05:22Z
 27. [7d8..9ab] gatechain added to nft-index | By - YuraDXPNetwork | On - 2022-04-05T14:20:54Z
 28. [4b2..a20] fix nft listing for algorand | By - rupansh | On - 2022-04-05T13:12:36Z
 29. [28b..935] update yarn lock | By - imsk17 | On - 2022-03-30T11:46:40Z
 30. [cba..c64] indexer: add godwoken to web3 chains | By - imsk17 | On - 2022-03-29T12:43:38Z
 31. [82f..546] vechain: setup listener | By - imsk17 | On - 2022-03-24T18:06:02Z
 32. [0fb..8e1] eth-catchup: adapt for @vechain/ethers | By - imsk17 | On - 2022-03-24T12:26:07Z
 33. [9f4..9e0] formatting: add pre commit hook | By - imsk17 | On - 2022-03-20T09:47:28Z
 34. [40c..5be] tezos: mapper: fix mapper | By - imsk17 | On - 2022-03-16T19:01:26Z
 35. [6b2..230] chains: Vethers Setup | By - imsk17 | On - 2022-03-03T12:58:44Z
 36. [ddf..5d3] helpers: nftList: fix setting of Retry-After header | By - rupansh | On - 2022-03-01T13:54:18Z
 37. [70b..5a8] added harmony to consts | By - VKint | On - 2022-02-27T10:34:07Z
 38. [27d..45c] use subgraph for eth | By - rupansh | On - 2022-02-24T23:47:48Z
 39. [675..75b] nft-list: eth: add subgraph for eth nft | By - rupansh | On - 2022-02-24T23:47:48Z
 40. [a45..bee] chains: include harmony | By - imsk17 | On - 2022-02-16T12:17:30Z
 41. [88b..a93] nft-list: evm: ignore ERC1155_URI support | By - rupansh | On - 2022-02-16T11:21:07Z
 42. [1ec..133] nft-list: add collectionIdent to NftInfo | By - imsk17 | On - 2022-02-15T12:28:00Z
 43. [752..951] chains: web3: add aurora chain | By - imsk17 | On - 2022-02-10T13:39:49Z
 44. [a2b..e05] nft-listening: move from pool to dedicated workers | By - imsk17 | On - 2022-02-02T09:54:03Z
 45. [5fe..539] chains: iotex: use catchup and listening | By - imsk17 | On - 2022-02-01T11:31:45Z
 46. [17a..0dd] chains: add support for iotex | By - imsk17 | On - 2022-01-31T14:16:34Z
 47. [2a4..e28] project: lint: fix eslint | By - imsk17 | On - 2022-01-27T11:03:44Z
 48. [308..798] tezos: AssetMapper: add exception for wrapped nft | By - rupansh | On - 2022-01-25T10:19:51Z
 49. [6fb..a25] tezos: AssetMapper: use formats if decimals are not available | By - rupansh | On - 2022-01-25T09:43:39Z
 50. [21f..c1f] velas: properly serialize nft | By - rupansh | On - 2022-01-24T08:15:14Z

## moonbean-uri


 1. [085..7bc] add any to errors tsc 4.8 | By - Alex Moshinsky | On - 2022-08-31T07:45:19Z
 2. [b47..f98] add 30gb ram use | By - Alex Moshinsky | On - 2022-08-31T07:18:22Z
 3. [028..925] add moonbaen and fixes | By - Alex Moshinsky | On - 2022-08-31T06:28:06Z
 4. [c4a..eb7] reduce moralis request from 20 to 15 | By - Alex Moshinsky | On - 2022-08-02T11:12:39Z
 5. [f54..aac] moralis increase  20 reqests from 5 | By - Alex Moshinsky | On - 2022-08-02T09:29:07Z
 6. [fc8..103] fix | By - Alex Moshinsky | On - 2022-07-05T11:04:17Z
 7. [a96..a8b] fix | By - Alex Moshinsky | On - 2022-07-05T11:00:31Z
 8. [fd3..257] fix checksam adress | By - Alex Moshinsky | On - 2022-06-19T16:42:16Z
 9. [566..a40] add check balance algo | By - Alex Moshinsky | On - 2022-06-12T16:01:01Z
 10. [951..8bc] a | By - Alex Moshinsky | On - 2022-06-12T15:19:02Z
 11. [557..259] chage promise all to for await | By - Alex Moshinsky | On - 2022-06-12T15:18:16Z
 12. [961..a1a] algo upcase address | By - Alex Moshinsky | On - 2022-06-12T14:14:40Z
 13. [826..f08] show algo errors | By - Alex Moshinsky | On - 2022-06-12T14:00:11Z
 14. [10e..6a6] chane timeout to 3 sec algo | By - Alex Moshinsky | On - 2022-06-12T13:28:26Z
 15. [909..f33] add rate limit to algo | By - Alex Moshinsky | On - 2022-06-12T13:10:53Z
 16. [00f..fb0] fix algoNftList | By - Alex Moshinsky | On - 2022-06-12T10:12:03Z
 17. [ec3..bb0] fix tazoz | By - Alex Moshinsky | On - 2022-06-08T15:01:53Z
 18. [2c1..79e] tezos: increase nft limit to maximum | By - rupansh | On - 2022-06-07T13:27:54Z
 19. [7ed..33f] add yarn.lock to .gitignore | By - Dima Brook | On - 2022-06-07T08:46:06Z
 20. [557..0e9] check if displayUrl is broken and replace with artifactUri | By - rocalex | On - 2022-06-06T09:03:57Z
 21. [802..30f] disable sft | By - Alex Moshinsky | On - 2022-06-01T17:09:01Z
 22. [0f7..bb0] a | By - Alex Moshinsky | On - 2022-06-01T17:07:23Z
 23. [cba..a1b] a | By - Alex Moshinsky | On - 2022-06-01T17:00:58Z
 24. [51e..b24] remove console log and add check number | By - Alex Moshinsky | On - 2022-06-01T16:54:12Z
 25. [08b..eb9] balance big them 0 | By - Alex Moshinsky | On - 2022-06-01T16:48:10Z
 26. [21b..3b7] diable filter sft | By - Alex Moshinsky | On - 2022-06-01T16:46:48Z
 27. [341..d1f] update moralis to to version 1.8 | By - Alex Moshinsky | On - 2022-06-01T15:15:51Z
 28. [246..6d2] fix vales fetch lowercase address | By - Alex Moshinsky | On - 2022-06-01T09:41:18Z
 29. [75e..86d] chnage from web to ethers and combine vales + iotex with DB and blockChain | By - Alex Moshinsky | On - 2022-05-31T18:18:54Z
 30. [b5c..3b2] fix velas | By - Alex Moshinsky | On - 2022-05-31T10:43:38Z
 31. [e9f..7cd] lowercase | By - Alex Moshinsky | On - 2022-05-30T16:25:56Z
 32. [790..f0d] get nfts from db | By - Alex Moshinsky | On - 2022-05-30T16:09:48Z
 33. [155..982] disable TokenAuthority | By - Alex Moshinsky | On - 2022-05-30T10:11:06Z
 34. [81b..01b] check if nft emepty | By - Alex Moshinsky | On - 2022-05-30T09:40:28Z
 35. [a77..326] console.log | By - Alex Moshinsky | On - 2022-05-30T09:09:49Z
 36. [ed8..667] change to persist and flush | By - Alex Moshinsky | On - 2022-05-30T08:57:08Z
 37. [912..a44] check nft | By - Alex Moshinsky | On - 2022-05-30T08:52:33Z
 38. [3d5..112] fix create to db | By - Alex Moshinsky | On - 2022-05-30T08:50:11Z
 39. [185..ea0] check error | By - Alex Moshinsky | On - 2022-05-30T08:37:12Z
 40. [60d..42c] if nft no exsit it will add | By - Alex Moshinsky | On - 2022-05-30T08:26:51Z
 41. [feb..41b] ready for testing | By - Alex Moshinsky | On - 2022-05-29T21:49:11Z
 42. [3b5..aac] check nft work | By - Alex Moshinsky | On - 2022-05-29T21:14:56Z
 43. [62b..327] add post request route | By - Alex Moshinsky | On - 2022-05-29T09:30:13Z
 44. [af0..c9e] nft-check wip | By - Alex Moshinsky | On - 2022-05-29T08:26:12Z
 45. [feb..db4] tron: enable worker for listener | By - imsk17 | On - 2022-05-17T12:23:56Z
 46. [f5c..518] nft-list: evm: properly commit changes to db for vechain | By - rupansh | On - 2022-05-12T09:23:45Z
 47. [cbc..3a1] listener: adapt for vechain | By - imsk17 | On - 2022-05-11T12:36:10Z
 48. [ebc..564] tron: add a check to live listener to avoid unfinalized blocks | By - imsk17 | On - 2022-05-08T10:32:52Z
 49. [a9b..6e5] iotex: add a contract to the list | By - imsk17 | On - 2022-05-08T10:32:51Z
 50. [30b..986] fix hardcoded testnet VeChain | By - Dima Brook | On - 2022-05-03T18:06:13Z

## nft-check


 1. [bcb..c7e] remove await | By - Alex Moshinsky | On - 2022-08-18T11:01:07Z
 2. [ea0..3e6] add await | By - Alex Moshinsky | On - 2022-08-18T09:39:47Z
 3. [de6..6e9] fix | By - Alex Moshinsky | On - 2022-08-18T08:13:39Z
 4. [448..b5f] update dependencies | By - Alex Moshinsky | On - 2022-08-18T06:58:56Z
 5. [959..b78] block wallet | By - Alex Moshinsky | On - 2022-08-17T18:13:01Z
 6. [921..903] block wallet | By - Alex Moshinsky | On - 2022-08-17T18:11:37Z
 7. [2ed..39a] block wallet | By - Alex Moshinsky | On - 2022-08-17T18:08:59Z
 8. [b52..bbf] fix | By - Alex Moshinsky | On - 2022-08-17T09:35:44Z
 9. [c4a..eb7] reduce moralis request from 20 to 15 | By - Alex Moshinsky | On - 2022-08-02T11:12:39Z
 10. [f54..aac] moralis increase  20 reqests from 5 | By - Alex Moshinsky | On - 2022-08-02T09:29:07Z
 11. [fc8..103] fix | By - Alex Moshinsky | On - 2022-07-05T11:04:17Z
 12. [a96..a8b] fix | By - Alex Moshinsky | On - 2022-07-05T11:00:31Z
 13. [fd3..257] fix checksam adress | By - Alex Moshinsky | On - 2022-06-19T16:42:16Z
 14. [566..a40] add check balance algo | By - Alex Moshinsky | On - 2022-06-12T16:01:01Z
 15. [951..8bc] a | By - Alex Moshinsky | On - 2022-06-12T15:19:02Z
 16. [557..259] chage promise all to for await | By - Alex Moshinsky | On - 2022-06-12T15:18:16Z
 17. [961..a1a] algo upcase address | By - Alex Moshinsky | On - 2022-06-12T14:14:40Z
 18. [826..f08] show algo errors | By - Alex Moshinsky | On - 2022-06-12T14:00:11Z
 19. [10e..6a6] chane timeout to 3 sec algo | By - Alex Moshinsky | On - 2022-06-12T13:28:26Z
 20. [909..f33] add rate limit to algo | By - Alex Moshinsky | On - 2022-06-12T13:10:53Z
 21. [00f..fb0] fix algoNftList | By - Alex Moshinsky | On - 2022-06-12T10:12:03Z
 22. [ec3..bb0] fix tazoz | By - Alex Moshinsky | On - 2022-06-08T15:01:53Z
 23. [2c1..79e] tezos: increase nft limit to maximum | By - rupansh | On - 2022-06-07T13:27:54Z
 24. [7ed..33f] add yarn.lock to .gitignore | By - Dima Brook | On - 2022-06-07T08:46:06Z
 25. [557..0e9] check if displayUrl is broken and replace with artifactUri | By - rocalex | On - 2022-06-06T09:03:57Z
 26. [802..30f] disable sft | By - Alex Moshinsky | On - 2022-06-01T17:09:01Z
 27. [0f7..bb0] a | By - Alex Moshinsky | On - 2022-06-01T17:07:23Z
 28. [cba..a1b] a | By - Alex Moshinsky | On - 2022-06-01T17:00:58Z
 29. [51e..b24] remove console log and add check number | By - Alex Moshinsky | On - 2022-06-01T16:54:12Z
 30. [08b..eb9] balance big them 0 | By - Alex Moshinsky | On - 2022-06-01T16:48:10Z
 31. [21b..3b7] diable filter sft | By - Alex Moshinsky | On - 2022-06-01T16:46:48Z
 32. [341..d1f] update moralis to to version 1.8 | By - Alex Moshinsky | On - 2022-06-01T15:15:51Z
 33. [246..6d2] fix vales fetch lowercase address | By - Alex Moshinsky | On - 2022-06-01T09:41:18Z
 34. [75e..86d] chnage from web to ethers and combine vales + iotex with DB and blockChain | By - Alex Moshinsky | On - 2022-05-31T18:18:54Z
 35. [b5c..3b2] fix velas | By - Alex Moshinsky | On - 2022-05-31T10:43:38Z
 36. [e9f..7cd] lowercase | By - Alex Moshinsky | On - 2022-05-30T16:25:56Z
 37. [790..f0d] get nfts from db | By - Alex Moshinsky | On - 2022-05-30T16:09:48Z
 38. [155..982] disable TokenAuthority | By - Alex Moshinsky | On - 2022-05-30T10:11:06Z
 39. [81b..01b] check if nft emepty | By - Alex Moshinsky | On - 2022-05-30T09:40:28Z
 40. [a77..326] console.log | By - Alex Moshinsky | On - 2022-05-30T09:09:49Z
 41. [ed8..667] change to persist and flush | By - Alex Moshinsky | On - 2022-05-30T08:57:08Z
 42. [912..a44] check nft | By - Alex Moshinsky | On - 2022-05-30T08:52:33Z
 43. [3d5..112] fix create to db | By - Alex Moshinsky | On - 2022-05-30T08:50:11Z
 44. [185..ea0] check error | By - Alex Moshinsky | On - 2022-05-30T08:37:12Z
 45. [60d..42c] if nft no exsit it will add | By - Alex Moshinsky | On - 2022-05-30T08:26:51Z
 46. [feb..41b] ready for testing | By - Alex Moshinsky | On - 2022-05-29T21:49:11Z
 47. [3b5..aac] check nft work | By - Alex Moshinsky | On - 2022-05-29T21:14:56Z
 48. [62b..327] add post request route | By - Alex Moshinsky | On - 2022-05-29T09:30:13Z
 49. [af0..c9e] nft-check wip | By - Alex Moshinsky | On - 2022-05-29T08:26:12Z
 50. [feb..db4] tron: enable worker for listener | By - imsk17 | On - 2022-05-17T12:23:56Z

## nft-index-full-catchup


 1. [d28..846] full catchup wip | By - Alex Moshinsky | On - 2022-06-16T08:27:17Z
 2. [566..a40] add check balance algo | By - Alex Moshinsky | On - 2022-06-12T16:01:01Z
 3. [951..8bc] a | By - Alex Moshinsky | On - 2022-06-12T15:19:02Z
 4. [557..259] chage promise all to for await | By - Alex Moshinsky | On - 2022-06-12T15:18:16Z
 5. [961..a1a] algo upcase address | By - Alex Moshinsky | On - 2022-06-12T14:14:40Z
 6. [826..f08] show algo errors | By - Alex Moshinsky | On - 2022-06-12T14:00:11Z
 7. [10e..6a6] chane timeout to 3 sec algo | By - Alex Moshinsky | On - 2022-06-12T13:28:26Z
 8. [909..f33] add rate limit to algo | By - Alex Moshinsky | On - 2022-06-12T13:10:53Z
 9. [00f..fb0] fix algoNftList | By - Alex Moshinsky | On - 2022-06-12T10:12:03Z
 10. [ec3..bb0] fix tazoz | By - Alex Moshinsky | On - 2022-06-08T15:01:53Z
 11. [2c1..79e] tezos: increase nft limit to maximum | By - rupansh | On - 2022-06-07T13:27:54Z
 12. [7ed..33f] add yarn.lock to .gitignore | By - Dima Brook | On - 2022-06-07T08:46:06Z
 13. [557..0e9] check if displayUrl is broken and replace with artifactUri | By - rocalex | On - 2022-06-06T09:03:57Z
 14. [802..30f] disable sft | By - Alex Moshinsky | On - 2022-06-01T17:09:01Z
 15. [0f7..bb0] a | By - Alex Moshinsky | On - 2022-06-01T17:07:23Z
 16. [cba..a1b] a | By - Alex Moshinsky | On - 2022-06-01T17:00:58Z
 17. [51e..b24] remove console log and add check number | By - Alex Moshinsky | On - 2022-06-01T16:54:12Z
 18. [08b..eb9] balance big them 0 | By - Alex Moshinsky | On - 2022-06-01T16:48:10Z
 19. [21b..3b7] diable filter sft | By - Alex Moshinsky | On - 2022-06-01T16:46:48Z
 20. [341..d1f] update moralis to to version 1.8 | By - Alex Moshinsky | On - 2022-06-01T15:15:51Z
 21. [246..6d2] fix vales fetch lowercase address | By - Alex Moshinsky | On - 2022-06-01T09:41:18Z
 22. [75e..86d] chnage from web to ethers and combine vales + iotex with DB and blockChain | By - Alex Moshinsky | On - 2022-05-31T18:18:54Z
 23. [b5c..3b2] fix velas | By - Alex Moshinsky | On - 2022-05-31T10:43:38Z
 24. [e9f..7cd] lowercase | By - Alex Moshinsky | On - 2022-05-30T16:25:56Z
 25. [790..f0d] get nfts from db | By - Alex Moshinsky | On - 2022-05-30T16:09:48Z
 26. [155..982] disable TokenAuthority | By - Alex Moshinsky | On - 2022-05-30T10:11:06Z
 27. [81b..01b] check if nft emepty | By - Alex Moshinsky | On - 2022-05-30T09:40:28Z
 28. [a77..326] console.log | By - Alex Moshinsky | On - 2022-05-30T09:09:49Z
 29. [ed8..667] change to persist and flush | By - Alex Moshinsky | On - 2022-05-30T08:57:08Z
 30. [912..a44] check nft | By - Alex Moshinsky | On - 2022-05-30T08:52:33Z
 31. [3d5..112] fix create to db | By - Alex Moshinsky | On - 2022-05-30T08:50:11Z
 32. [185..ea0] check error | By - Alex Moshinsky | On - 2022-05-30T08:37:12Z
 33. [60d..42c] if nft no exsit it will add | By - Alex Moshinsky | On - 2022-05-30T08:26:51Z
 34. [feb..41b] ready for testing | By - Alex Moshinsky | On - 2022-05-29T21:49:11Z
 35. [3b5..aac] check nft work | By - Alex Moshinsky | On - 2022-05-29T21:14:56Z
 36. [62b..327] add post request route | By - Alex Moshinsky | On - 2022-05-29T09:30:13Z
 37. [af0..c9e] nft-check wip | By - Alex Moshinsky | On - 2022-05-29T08:26:12Z
 38. [feb..db4] tron: enable worker for listener | By - imsk17 | On - 2022-05-17T12:23:56Z
 39. [f5c..518] nft-list: evm: properly commit changes to db for vechain | By - rupansh | On - 2022-05-12T09:23:45Z
 40. [cbc..3a1] listener: adapt for vechain | By - imsk17 | On - 2022-05-11T12:36:10Z
 41. [ebc..564] tron: add a check to live listener to avoid unfinalized blocks | By - imsk17 | On - 2022-05-08T10:32:52Z
 42. [a9b..6e5] iotex: add a contract to the list | By - imsk17 | On - 2022-05-08T10:32:51Z
 43. [30b..986] fix hardcoded testnet VeChain | By - Dima Brook | On - 2022-05-03T18:06:13Z
 44. [270..ace] fix type error | By - Dima Brook | On - 2022-05-03T16:14:58Z
 45. [f96..2f5] Merge pull request #3 from XP-NETWORK/vechain | By - Dima Brook | On - 2022-05-03T10:20:30Z
 46. [c16..1bb] Merge branch 'master' into vechain | By - Dima Brook | On - 2022-05-03T10:19:31Z
 47. [4ec..1d2] algorand: nft-list-service: gracefully handle 404 error | By - rupansh | On - 2022-05-03T09:49:09Z
 48. [95e..86f] velas: use web3 repo instead of velas api | By - imsk17 | On - 2022-05-01T12:23:37Z
 49. [19c..01c] Merge vech to master | By - Sumit Kumar | On - 2022-04-18T11:59:48Z
 50. [a97..139] Use Moralis for Some EVM Chains | By - imsk17 | On - 2022-04-18T11:58:56Z

## nft-index-main


 1. [086..0ab] add okc | By - Alex Moshinsky | On - 2023-01-09T12:26:14Z
 2. [bc6..d39] add CADUCEUS | By - Alex Moshinsky | On - 2022-12-07T11:29:01Z
 3. [256..298] return listenNftsThread | By - Alex Moshinsky | On - 2022-12-04T16:25:21Z
 4. [95b..3fa] filter address | By - Alex Moshinsky | On - 2022-12-04T16:24:12Z
 5. [154..f60] fix ton | By - Alex Moshinsky | On - 2022-11-14T17:38:40Z
 6. [96f..df5] update axios | By - Alex Moshinsky | On - 2022-11-09T10:13:35Z
 7. [b19..696] add ton | By - Alex Moshinsky | On - 2022-11-08T15:44:40Z
 8. [475..92b] add 32gb ram to node | By - Alex Moshinsky | On - 2022-09-12T11:58:48Z
 9. [3c2..91b] add MOONBEAM SKALE ABEYCHAIN | By - Alex Moshinsky | On - 2022-09-12T11:52:47Z
 10. [b41..361] update tron 10 blocks behind | By - Alex Moshinsky | On - 2022-09-08T15:09:47Z
 11. [c4a..eb7] reduce moralis request from 20 to 15 | By - Alex Moshinsky | On - 2022-08-02T11:12:39Z
 12. [f54..aac] moralis increase  20 reqests from 5 | By - Alex Moshinsky | On - 2022-08-02T09:29:07Z
 13. [fc8..103] fix | By - Alex Moshinsky | On - 2022-07-05T11:04:17Z
 14. [a96..a8b] fix | By - Alex Moshinsky | On - 2022-07-05T11:00:31Z
 15. [fd3..257] fix checksam adress | By - Alex Moshinsky | On - 2022-06-19T16:42:16Z
 16. [566..a40] add check balance algo | By - Alex Moshinsky | On - 2022-06-12T16:01:01Z
 17. [951..8bc] a | By - Alex Moshinsky | On - 2022-06-12T15:19:02Z
 18. [557..259] chage promise all to for await | By - Alex Moshinsky | On - 2022-06-12T15:18:16Z
 19. [961..a1a] algo upcase address | By - Alex Moshinsky | On - 2022-06-12T14:14:40Z
 20. [826..f08] show algo errors | By - Alex Moshinsky | On - 2022-06-12T14:00:11Z
 21. [10e..6a6] chane timeout to 3 sec algo | By - Alex Moshinsky | On - 2022-06-12T13:28:26Z
 22. [909..f33] add rate limit to algo | By - Alex Moshinsky | On - 2022-06-12T13:10:53Z
 23. [00f..fb0] fix algoNftList | By - Alex Moshinsky | On - 2022-06-12T10:12:03Z
 24. [ec3..bb0] fix tazoz | By - Alex Moshinsky | On - 2022-06-08T15:01:53Z
 25. [2c1..79e] tezos: increase nft limit to maximum | By - rupansh | On - 2022-06-07T13:27:54Z
 26. [7ed..33f] add yarn.lock to .gitignore | By - Dima Brook | On - 2022-06-07T08:46:06Z
 27. [557..0e9] check if displayUrl is broken and replace with artifactUri | By - rocalex | On - 2022-06-06T09:03:57Z
 28. [802..30f] disable sft | By - Alex Moshinsky | On - 2022-06-01T17:09:01Z
 29. [0f7..bb0] a | By - Alex Moshinsky | On - 2022-06-01T17:07:23Z
 30. [cba..a1b] a | By - Alex Moshinsky | On - 2022-06-01T17:00:58Z
 31. [51e..b24] remove console log and add check number | By - Alex Moshinsky | On - 2022-06-01T16:54:12Z
 32. [08b..eb9] balance big them 0 | By - Alex Moshinsky | On - 2022-06-01T16:48:10Z
 33. [21b..3b7] diable filter sft | By - Alex Moshinsky | On - 2022-06-01T16:46:48Z
 34. [341..d1f] update moralis to to version 1.8 | By - Alex Moshinsky | On - 2022-06-01T15:15:51Z
 35. [246..6d2] fix vales fetch lowercase address | By - Alex Moshinsky | On - 2022-06-01T09:41:18Z
 36. [75e..86d] chnage from web to ethers and combine vales + iotex with DB and blockChain | By - Alex Moshinsky | On - 2022-05-31T18:18:54Z
 37. [b5c..3b2] fix velas | By - Alex Moshinsky | On - 2022-05-31T10:43:38Z
 38. [e9f..7cd] lowercase | By - Alex Moshinsky | On - 2022-05-30T16:25:56Z
 39. [790..f0d] get nfts from db | By - Alex Moshinsky | On - 2022-05-30T16:09:48Z
 40. [155..982] disable TokenAuthority | By - Alex Moshinsky | On - 2022-05-30T10:11:06Z
 41. [81b..01b] check if nft emepty | By - Alex Moshinsky | On - 2022-05-30T09:40:28Z
 42. [a77..326] console.log | By - Alex Moshinsky | On - 2022-05-30T09:09:49Z
 43. [ed8..667] change to persist and flush | By - Alex Moshinsky | On - 2022-05-30T08:57:08Z
 44. [912..a44] check nft | By - Alex Moshinsky | On - 2022-05-30T08:52:33Z
 45. [3d5..112] fix create to db | By - Alex Moshinsky | On - 2022-05-30T08:50:11Z
 46. [185..ea0] check error | By - Alex Moshinsky | On - 2022-05-30T08:37:12Z
 47. [60d..42c] if nft no exsit it will add | By - Alex Moshinsky | On - 2022-05-30T08:26:51Z
 48. [feb..41b] ready for testing | By - Alex Moshinsky | On - 2022-05-29T21:49:11Z
 49. [3b5..aac] check nft work | By - Alex Moshinsky | On - 2022-05-29T21:14:56Z
 50. [62b..327] add post request route | By - Alex Moshinsky | On - 2022-05-29T09:30:13Z

## nft-index-mainnet


 1. [efd..686]  fix | By - Alex Moshinsky | On - 2022-07-04T08:58:08Z
 2. [156..196] moralis limit to 600 | By - Alex Moshinsky | On - 2022-07-03T12:53:01Z
 3. [beb..a61] fix | By - Alex Moshinsky | On - 2022-06-29T11:29:36Z
 4. [f5e..81f] fix | By - Alex Moshinsky | On - 2022-06-29T11:00:32Z
 5. [371..c71] fix moralis | By - Alex Moshinsky | On - 2022-06-29T09:30:54Z
 6. [efc..f18] Merge pull request #5 from XP-NETWORK/fix-iotex | By - Dima Brook | On - 2022-06-19T15:57:59Z
 7. [6f3..2a0] add error to trx | By - Alex Moshinsky | On - 2022-06-19T15:55:11Z
 8. [45e..d3e] add error to trx | By - Alex Moshinsky | On - 2022-06-19T15:54:28Z
 9. [639..aa2] add moralis testnets | By - Alex Moshinsky | On - 2022-06-15T09:33:46Z
 10. [566..a40] add check balance algo | By - Alex Moshinsky | On - 2022-06-12T16:01:01Z
 11. [951..8bc] a | By - Alex Moshinsky | On - 2022-06-12T15:19:02Z
 12. [557..259] chage promise all to for await | By - Alex Moshinsky | On - 2022-06-12T15:18:16Z
 13. [961..a1a] algo upcase address | By - Alex Moshinsky | On - 2022-06-12T14:14:40Z
 14. [826..f08] show algo errors | By - Alex Moshinsky | On - 2022-06-12T14:00:11Z
 15. [10e..6a6] chane timeout to 3 sec algo | By - Alex Moshinsky | On - 2022-06-12T13:28:26Z
 16. [909..f33] add rate limit to algo | By - Alex Moshinsky | On - 2022-06-12T13:10:53Z
 17. [00f..fb0] fix algoNftList | By - Alex Moshinsky | On - 2022-06-12T10:12:03Z
 18. [439..816] fixes testnet | By - Alex Moshinsky | On - 2022-06-12T09:58:41Z
 19. [ec3..bb0] fix tazoz | By - Alex Moshinsky | On - 2022-06-08T15:01:53Z
 20. [2c1..79e] tezos: increase nft limit to maximum | By - rupansh | On - 2022-06-07T13:27:54Z
 21. [7ed..33f] add yarn.lock to .gitignore | By - Dima Brook | On - 2022-06-07T08:46:06Z
 22. [557..0e9] check if displayUrl is broken and replace with artifactUri | By - rocalex | On - 2022-06-06T09:03:57Z
 23. [802..30f] disable sft | By - Alex Moshinsky | On - 2022-06-01T17:09:01Z
 24. [0f7..bb0] a | By - Alex Moshinsky | On - 2022-06-01T17:07:23Z
 25. [cba..a1b] a | By - Alex Moshinsky | On - 2022-06-01T17:00:58Z
 26. [51e..b24] remove console log and add check number | By - Alex Moshinsky | On - 2022-06-01T16:54:12Z
 27. [08b..eb9] balance big them 0 | By - Alex Moshinsky | On - 2022-06-01T16:48:10Z
 28. [21b..3b7] diable filter sft | By - Alex Moshinsky | On - 2022-06-01T16:46:48Z
 29. [341..d1f] update moralis to to version 1.8 | By - Alex Moshinsky | On - 2022-06-01T15:15:51Z
 30. [246..6d2] fix vales fetch lowercase address | By - Alex Moshinsky | On - 2022-06-01T09:41:18Z
 31. [75e..86d] chnage from web to ethers and combine vales + iotex with DB and blockChain | By - Alex Moshinsky | On - 2022-05-31T18:18:54Z
 32. [b5c..3b2] fix velas | By - Alex Moshinsky | On - 2022-05-31T10:43:38Z
 33. [e9f..7cd] lowercase | By - Alex Moshinsky | On - 2022-05-30T16:25:56Z
 34. [790..f0d] get nfts from db | By - Alex Moshinsky | On - 2022-05-30T16:09:48Z
 35. [155..982] disable TokenAuthority | By - Alex Moshinsky | On - 2022-05-30T10:11:06Z
 36. [81b..01b] check if nft emepty | By - Alex Moshinsky | On - 2022-05-30T09:40:28Z
 37. [a77..326] console.log | By - Alex Moshinsky | On - 2022-05-30T09:09:49Z
 38. [ed8..667] change to persist and flush | By - Alex Moshinsky | On - 2022-05-30T08:57:08Z
 39. [912..a44] check nft | By - Alex Moshinsky | On - 2022-05-30T08:52:33Z
 40. [3d5..112] fix create to db | By - Alex Moshinsky | On - 2022-05-30T08:50:11Z
 41. [185..ea0] check error | By - Alex Moshinsky | On - 2022-05-30T08:37:12Z
 42. [60d..42c] if nft no exsit it will add | By - Alex Moshinsky | On - 2022-05-30T08:26:51Z
 43. [feb..41b] ready for testing | By - Alex Moshinsky | On - 2022-05-29T21:49:11Z
 44. [3b5..aac] check nft work | By - Alex Moshinsky | On - 2022-05-29T21:14:56Z
 45. [62b..327] add post request route | By - Alex Moshinsky | On - 2022-05-29T09:30:13Z
 46. [af0..c9e] nft-check wip | By - Alex Moshinsky | On - 2022-05-29T08:26:12Z
 47. [feb..db4] tron: enable worker for listener | By - imsk17 | On - 2022-05-17T12:23:56Z
 48. [f5c..518] nft-list: evm: properly commit changes to db for vechain | By - rupansh | On - 2022-05-12T09:23:45Z
 49. [cbc..3a1] listener: adapt for vechain | By - imsk17 | On - 2022-05-11T12:36:10Z
 50. [ebc..564] tron: add a check to live listener to avoid unfinalized blocks | By - imsk17 | On - 2022-05-08T10:32:52Z

## nft-index-staging


 1. [331..dfa] fix ton | By - Alex Moshinsky | On - 2023-02-15T09:24:02Z
 2. [e77..518] udpate solana package | By - Alex Moshinsky | On - 2023-02-14T17:24:11Z
 3. [5bf..207] add try catch for solana | By - Alex Moshinsky | On - 2023-02-14T17:05:28Z
 4. [4b2..b23] add uri solana inner native | By - Alex Moshinsky | On - 2023-02-14T16:52:28Z
 5. [e17..5d5] tron blocks polling method change to chunks instead of one by one | By - AlexeyAdoniev | On - 2023-02-08T16:19:50Z
 6. [390..197] fix bitgert hex number | By - Alex Moshinsky | On - 2023-01-31T16:25:33Z
 7. [9d1..fe8] fix skale erc1155 | By - Alex Moshinsky | On - 2023-01-31T16:24:25Z
 8. [9d4..b98] BITGERT and ARBITRUM: add to config | By - AlexeyAdoniev | On - 2023-01-22T12:58:47Z
 9. [af2..56a] moralis error handler | By - Alex Moshinsky | On - 2023-01-14T11:18:20Z
 10. [6ba..38c] fix elrond emepty uri | By - Alex Moshinsky | On - 2023-01-12T17:43:57Z
 11. [8e2..372] fix elrond emepty uri | By - Alex Moshinsky | On - 2023-01-12T17:42:35Z
 12. [384..348] fix torn | By - Alex Moshinsky | On - 2023-01-12T17:17:57Z
 13. [280..651] elrond return nfts up to 10k | By - Alex Moshinsky | On - 2023-01-12T17:15:55Z
 14. [ce2..ece] update nft-index | By - Alex Moshinsky | On - 2023-01-12T14:59:35Z
 15. [2ac..d3f] fix elrond amount | By - Alex Moshinsky | On - 2023-01-12T14:50:18Z
 16. [4cd..590] fix elrond new api | By - Alex Moshinsky | On - 2023-01-12T14:11:43Z
 17. [f63..a96] fix cmp and okc and elrond | By - Alex Moshinsky | On - 2023-01-11T18:44:45Z
 18. [4e8..db4] add error 404 | By - Alex Moshinsky | On - 2023-01-10T09:03:48Z
 19. [a12..b07] change error 404 text | By - Alex Moshinsky | On - 2023-01-10T09:02:49Z
 20. [182..854] change error 404 text | By - Alex Moshinsky | On - 2023-01-10T09:01:27Z
 21. [66d..aab] change error 404 text | By - Alex Moshinsky | On - 2023-01-10T09:00:37Z
 22. [dab..ccb] fix 2 error 404 | By - Alex Moshinsky | On - 2023-01-10T08:54:22Z
 23. [c8e..078] fix error 404 | By - Alex Moshinsky | On - 2023-01-10T08:52:52Z
 24. [432..761] add 404 error | By - Alex Moshinsky | On - 2023-01-10T08:44:05Z
 25. [8dd..53d] fix okc | By - Alex Moshinsky | On - 2023-01-09T15:51:32Z
 26. [36a..e14] add okc | By - Alex Moshinsky | On - 2023-01-09T12:50:42Z
 27. [0d5..0e3] chains: web3: add okc | By - imsk17 | On - 2022-12-20T11:51:33Z
 28. [f4e..4a6] fix moralis and aptos | By - Alex Moshinsky | On - 2022-12-19T14:10:17Z
 29. [5ed..230] udpate packges | By - Alex Moshinsky | On - 2022-12-08T08:16:14Z
 30. [edc..b87] update axios | By - Alex Moshinsky | On - 2022-12-07T16:00:11Z
 31. [0cd..ece] fixing axios on ton | By - Alex Moshinsky | On - 2022-12-02T07:17:10Z
 32. [529..b23] fix json elrond | By - Alex Moshinsky | On - 2022-11-30T14:22:04Z
 33. [06a..503] update moralis to mainnet and packges | By - Alex Moshinsky | On - 2022-11-29T13:33:49Z
 34. [b05..811] chains: web3: add caduceus | By - imsk17 | On - 2022-11-29T12:31:55Z
 35. [1c1..c94] Solana: Implement NFT Listing | By - imsk17 | On - 2022-11-28T11:26:47Z
 36. [113..fcc] fix near address validater | By - Alex Moshinsky | On - 2022-11-25T21:31:10Z
 37. [02f..8af] fix new axios | By - Alex Moshinsky | On - 2022-11-25T21:00:39Z
 38. [dfe..bbf] near address check | By - Alex Moshinsky | On - 2022-11-25T20:45:05Z
 39. [75d..cad] fix near | By - Alex Moshinsky | On - 2022-11-25T20:24:05Z
 40. [7cb..624] update moralis to v2 | By - Alex Moshinsky | On - 2022-11-08T21:42:28Z
 41. [fc8..760] update packge | By - Alex Moshinsky | On - 2022-11-08T17:16:03Z
 42. [c5b..332] update aptos assets | By - Alex Moshinsky | On - 2022-11-06T14:53:50Z
 43. [f59..d0b] fix aptos interfaces | By - Alex Moshinsky | On - 2022-11-06T14:31:25Z
 44. [c8c..465] remove console.logs | By - Alex Moshinsky | On - 2022-11-06T13:57:00Z
 45. [722..b7c] add aptos | By - Alex Moshinsky | On - 2022-11-06T13:53:12Z
 46. [abd..229] fix chane nonce from 29 to 27 | By - Alex Moshinsky | On - 2022-11-03T13:43:32Z
 47. [6e2..ea4] nfts: ton: add chainId and tokenId | By - imsk17 | On - 2022-11-03T13:34:33Z
 48. [bfa..f9a] nfts: ton: get original URI | By - imsk17 | On - 2022-11-03T12:24:28Z
 49. [f2d..872] hedera: nft: dont convert to nft identifier | By - imsk17 | On - 2022-11-02T09:33:46Z
 50. [a59..ba3] hedera: nft: adapt to web3 interface | By - imsk17 | On - 2022-11-02T08:49:56Z

## nft-index-stf


 1. [e22..1dc] Merge branch 'nft-index-testnet' into nft-index-stf | By - Alex Moshinsky | On - 2022-08-15T11:14:10Z
 2. [e4e..7bb] catch up erc115 with amout work | By - Alex Moshinsky | On - 2022-08-15T10:58:46Z
 3. [f60..de2] fix nfts route | By - Alex Moshinsky | On - 2022-08-14T16:11:45Z
 4. [5e0..123] remove unecessary code | By - Alex Moshinsky | On - 2022-08-14T07:14:21Z
 5. [16f..465] improve sft | By - Alex Moshinsky | On - 2022-08-14T07:03:05Z
 6. [9b2..193] change calc amount to rpc calc amount | By - Alex Moshinsky | On - 2022-08-11T21:45:30Z
 7. [ade..b13] fixes | By - Alex Moshinsky | On - 2022-08-11T12:38:23Z
 8. [0c6..bb8] fix torn crash | By - Alex Moshinsky | On - 2022-08-10T08:44:50Z
 9. [dbe..a8a] add amount sft to moralis response | By - Alex Moshinsky | On - 2022-08-10T07:16:07Z
 10. [688..dcc] add to response amount | By - Alex Moshinsky | On - 2022-08-09T17:54:49Z
 11. [978..a56] Dfinity: Use Dab.js | By - imsk17 | On - 2022-08-09T14:49:23Z
 12. [146..55e] sft transfer between accounts works | By - Alex Moshinsky | On - 2022-08-08T14:49:21Z
 13. [f82..75b] from side work sft | By - Alex Moshinsky | On - 2022-08-07T13:05:00Z
 14. [988..a10] hedera: relay cant handle much load so reduce concurrent reqs | By - imsk17 | On - 2022-08-02T14:19:09Z
 15. [8d9..ad2] Add Hedera | By - imsk17 | On - 2022-08-02T10:53:27Z
 16. [322..30a] start work on sft | By - Alex Moshinsky | On - 2022-08-02T09:24:03Z
 17. [397..2a8] catchup: filter: use specific filter for chains | By - imsk17 | On - 2022-07-11T10:05:36Z
 18. [66a..3c1] chains: add support for skale | By - imsk17 | On - 2022-07-11T09:20:14Z
 19. [fc8..103] fix | By - Alex Moshinsky | On - 2022-07-05T11:04:17Z
 20. [a96..a8b] fix | By - Alex Moshinsky | On - 2022-07-05T11:00:31Z
 21. [156..196] moralis limit to 600 | By - Alex Moshinsky | On - 2022-07-03T12:53:01Z
 22. [beb..a61] fix | By - Alex Moshinsky | On - 2022-06-29T11:29:36Z
 23. [f5e..81f] fix | By - Alex Moshinsky | On - 2022-06-29T11:00:32Z
 24. [371..c71] fix moralis | By - Alex Moshinsky | On - 2022-06-29T09:30:54Z
 25. [fd3..257] fix checksam adress | By - Alex Moshinsky | On - 2022-06-19T16:42:16Z
 26. [efc..f18] Merge pull request #5 from XP-NETWORK/fix-iotex | By - Dima Brook | On - 2022-06-19T15:57:59Z
 27. [6f3..2a0] add error to trx | By - Alex Moshinsky | On - 2022-06-19T15:55:11Z
 28. [45e..d3e] add error to trx | By - Alex Moshinsky | On - 2022-06-19T15:54:28Z
 29. [639..aa2] add moralis testnets | By - Alex Moshinsky | On - 2022-06-15T09:33:46Z
 30. [566..a40] add check balance algo | By - Alex Moshinsky | On - 2022-06-12T16:01:01Z
 31. [951..8bc] a | By - Alex Moshinsky | On - 2022-06-12T15:19:02Z
 32. [557..259] chage promise all to for await | By - Alex Moshinsky | On - 2022-06-12T15:18:16Z
 33. [961..a1a] algo upcase address | By - Alex Moshinsky | On - 2022-06-12T14:14:40Z
 34. [826..f08] show algo errors | By - Alex Moshinsky | On - 2022-06-12T14:00:11Z
 35. [10e..6a6] chane timeout to 3 sec algo | By - Alex Moshinsky | On - 2022-06-12T13:28:26Z
 36. [909..f33] add rate limit to algo | By - Alex Moshinsky | On - 2022-06-12T13:10:53Z
 37. [00f..fb0] fix algoNftList | By - Alex Moshinsky | On - 2022-06-12T10:12:03Z
 38. [439..816] fixes testnet | By - Alex Moshinsky | On - 2022-06-12T09:58:41Z
 39. [ec3..bb0] fix tazoz | By - Alex Moshinsky | On - 2022-06-08T15:01:53Z
 40. [2c1..79e] tezos: increase nft limit to maximum | By - rupansh | On - 2022-06-07T13:27:54Z
 41. [7ed..33f] add yarn.lock to .gitignore | By - Dima Brook | On - 2022-06-07T08:46:06Z
 42. [557..0e9] check if displayUrl is broken and replace with artifactUri | By - rocalex | On - 2022-06-06T09:03:57Z
 43. [802..30f] disable sft | By - Alex Moshinsky | On - 2022-06-01T17:09:01Z
 44. [0f7..bb0] a | By - Alex Moshinsky | On - 2022-06-01T17:07:23Z
 45. [cba..a1b] a | By - Alex Moshinsky | On - 2022-06-01T17:00:58Z
 46. [51e..b24] remove console log and add check number | By - Alex Moshinsky | On - 2022-06-01T16:54:12Z
 47. [08b..eb9] balance big them 0 | By - Alex Moshinsky | On - 2022-06-01T16:48:10Z
 48. [21b..3b7] diable filter sft | By - Alex Moshinsky | On - 2022-06-01T16:46:48Z
 49. [341..d1f] update moralis to to version 1.8 | By - Alex Moshinsky | On - 2022-06-01T15:15:51Z
 50. [246..6d2] fix vales fetch lowercase address | By - Alex Moshinsky | On - 2022-06-01T09:41:18Z

## nft-index-testnet


 1. [f79..9ec] Add arbitrum evm | By - Alex Moshinsky | On - 2023-01-12T16:01:49Z
 2. [2ac..d3f] fix elrond amount | By - Alex Moshinsky | On - 2023-01-12T14:50:18Z
 3. [4cd..590] fix elrond new api | By - Alex Moshinsky | On - 2023-01-12T14:11:43Z
 4. [f63..a96] fix cmp and okc and elrond | By - Alex Moshinsky | On - 2023-01-11T18:44:45Z
 5. [4e8..db4] add error 404 | By - Alex Moshinsky | On - 2023-01-10T09:03:48Z
 6. [8dd..53d] fix okc | By - Alex Moshinsky | On - 2023-01-09T15:51:32Z
 7. [0d5..0e3] chains: web3: add okc | By - imsk17 | On - 2022-12-20T11:51:33Z
 8. [f4e..4a6] fix moralis and aptos | By - Alex Moshinsky | On - 2022-12-19T14:10:17Z
 9. [b05..811] chains: web3: add caduceus | By - imsk17 | On - 2022-11-29T12:31:55Z
 10. [1c1..c94] Solana: Implement NFT Listing | By - imsk17 | On - 2022-11-28T11:26:47Z
 11. [113..fcc] fix near address validater | By - Alex Moshinsky | On - 2022-11-25T21:31:10Z
 12. [02f..8af] fix new axios | By - Alex Moshinsky | On - 2022-11-25T21:00:39Z
 13. [dfe..bbf] near address check | By - Alex Moshinsky | On - 2022-11-25T20:45:05Z
 14. [75d..cad] fix near | By - Alex Moshinsky | On - 2022-11-25T20:24:05Z
 15. [7cb..624] update moralis to v2 | By - Alex Moshinsky | On - 2022-11-08T21:42:28Z
 16. [fc8..760] update packge | By - Alex Moshinsky | On - 2022-11-08T17:16:03Z
 17. [c5b..332] update aptos assets | By - Alex Moshinsky | On - 2022-11-06T14:53:50Z
 18. [f59..d0b] fix aptos interfaces | By - Alex Moshinsky | On - 2022-11-06T14:31:25Z
 19. [c8c..465] remove console.logs | By - Alex Moshinsky | On - 2022-11-06T13:57:00Z
 20. [722..b7c] add aptos | By - Alex Moshinsky | On - 2022-11-06T13:53:12Z
 21. [abd..229] fix chane nonce from 29 to 27 | By - Alex Moshinsky | On - 2022-11-03T13:43:32Z
 22. [6e2..ea4] nfts: ton: add chainId and tokenId | By - imsk17 | On - 2022-11-03T13:34:33Z
 23. [bfa..f9a] nfts: ton: get original URI | By - imsk17 | On - 2022-11-03T12:24:28Z
 24. [f2d..872] hedera: nft: dont convert to nft identifier | By - imsk17 | On - 2022-11-02T09:33:46Z
 25. [a59..ba3] hedera: nft: adapt to web3 interface | By - imsk17 | On - 2022-11-02T08:49:56Z
 26. [4f2..88b] chains: hedera: get nfts from HTS | By - imsk17 | On - 2022-11-02T08:34:29Z
 27. [865..d0b] remove elrd logs request | By - Alex Moshinsky | On - 2022-10-30T09:41:03Z
 28. [c92..184] update packges | By - Alex Moshinsky | On - 2022-10-30T09:38:25Z
 29. [7df..3da] add to elrond stfs | By - Alex Moshinsky | On - 2022-10-30T09:35:51Z
 30. [741..38f] chains: ton: update request headers | By - imsk17 | On - 2022-10-27T15:11:35Z
 31. [4bd..51c] chains: ton: update listing service import | By - imsk17 | On - 2022-10-27T14:54:43Z
 32. [719..daf] chains: ton: move from ton diamonds to ton tools | By - imsk17 | On - 2022-10-27T14:51:54Z
 33. [55f..404] Skale mainnet fixed | By - Alex Moshinsky | On - 2022-10-20T21:01:54Z
 34. [d8f..b79] update packges | By - Alex Moshinsky | On - 2022-10-19T15:44:55Z
 35. [d2a..1b0] update packages | By - Alex Moshinsky | On - 2022-10-13T13:13:39Z
 36. [17b..ea3] skale: catchup: fix chainid for skale | By - imsk17 | On - 2022-10-12T07:13:11Z
 37. [def..439] pollingIntervalMs tron back to 50 blocks behind | By - Alex Moshinsky | On - 2022-10-06T08:56:53Z
 38. [151..785] pollingIntervalMs tron back from 5000 to 3000 | By - Alex Moshinsky | On - 2022-10-04T10:40:44Z
 39. [e97..50b] tron read block from 50 to 30 behind | By - Alex Moshinsky | On - 2022-10-04T09:34:04Z
 40. [7f8..009] fix tron | By - Alex Moshinsky | On - 2022-10-04T08:37:03Z
 41. [b4e..30f] update packges | By - Alex Moshinsky | On - 2022-10-03T07:22:16Z
 42. [90b..85e] update 15 blocks behind trx | By - Alex Moshinsky | On - 2022-09-15T12:27:22Z
 43. [042..975] update ethers dep | By - Alex Moshinsky | On - 2022-09-15T11:55:12Z
 44. [23b..501] update mikro orm to 5.4.2 | By - Alex Moshinsky | On - 2022-09-15T11:54:07Z
 45. [731..8e2] add SKALE ABEYCHAIN HEDERA to consts | By - Alex Moshinsky | On - 2022-09-12T12:10:33Z
 46. [660..029] chnage string | By - Alex Moshinsky | On - 2022-09-12T08:03:58Z
 47. [f6d..cee] clear commends | By - Alex Moshinsky | On - 2022-09-12T05:17:07Z
 48. [094..54f] clear commends | By - Alex Moshinsky | On - 2022-09-12T05:16:46Z
 49. [821..5ba] check if SFT have more then 0 | By - Alex Moshinsky | On - 2022-09-12T05:04:49Z
 50. [3d6..dcd] change amount from Number to String | By - Alex Moshinsky | On - 2022-09-11T17:06:30Z

## rem/erc1155


 1. [821..4c9] erc165: handle failed erc165 fetches | By - imsk17 | On - 2022-03-13T16:57:24Z
 2. [ddf..5d3] helpers: nftList: fix setting of Retry-After header | By - rupansh | On - 2022-03-01T13:54:18Z
 3. [70b..5a8] added harmony to consts | By - VKint | On - 2022-02-27T10:34:07Z
 4. [27d..45c] use subgraph for eth | By - rupansh | On - 2022-02-24T23:47:48Z
 5. [675..75b] nft-list: eth: add subgraph for eth nft | By - rupansh | On - 2022-02-24T23:47:48Z
 6. [a45..bee] chains: include harmony | By - imsk17 | On - 2022-02-16T12:17:30Z
 7. [88b..a93] nft-list: evm: ignore ERC1155_URI support | By - rupansh | On - 2022-02-16T11:21:07Z
 8. [1ec..133] nft-list: add collectionIdent to NftInfo | By - imsk17 | On - 2022-02-15T12:28:00Z
 9. [752..951] chains: web3: add aurora chain | By - imsk17 | On - 2022-02-10T13:39:49Z
 10. [a2b..e05] nft-listening: move from pool to dedicated workers | By - imsk17 | On - 2022-02-02T09:54:03Z
 11. [5fe..539] chains: iotex: use catchup and listening | By - imsk17 | On - 2022-02-01T11:31:45Z
 12. [17a..0dd] chains: add support for iotex | By - imsk17 | On - 2022-01-31T14:16:34Z
 13. [2a4..e28] project: lint: fix eslint | By - imsk17 | On - 2022-01-27T11:03:44Z
 14. [308..798] tezos: AssetMapper: add exception for wrapped nft | By - rupansh | On - 2022-01-25T10:19:51Z
 15. [6fb..a25] tezos: AssetMapper: use formats if decimals are not available | By - rupansh | On - 2022-01-25T09:43:39Z
 16. [21f..c1f] velas: properly serialize nft | By - rupansh | On - 2022-01-24T08:15:14Z
 17. [ca1..538] velas: use explorer api to fetch nfts | By - rupansh | On - 2022-01-24T08:09:12Z
 18. [3d4..bdd] tezos: AssetMapper: use decimals instead of format to check for nft | By - rupansh | On - 2022-01-24T08:08:58Z
 19. [89f..06f] nft-list: tezos: assetMapper: check balance | By - rupansh | On - 2022-01-21T12:09:11Z
 20. [a7c..1d2] nft-list: sanitize addresses before comitting | By - rupansh | On - 2022-01-21T10:11:02Z
 21. [8cb..2cb] nft-list: preacache: parameterize cache expiry | By - rupansh | On - 2022-01-20T13:04:59Z
 22. [64d..93f] nft-list: preacache: invalidate cache after a day | By - rupansh | On - 2022-01-20T13:03:33Z
 23. [9d5..d8b] nft-list: fix insane usage of Sets and Maps | By - rupansh | On - 2022-01-20T12:06:27Z
 24. [aa6..4a4] nft-list: velas-explorer: ignore token if not owned | By - rupansh | On - 2022-01-20T11:15:17Z
 25. [46f..d00] update .env.example | By - rupansh | On - 2022-01-20T10:52:32Z
 26. [554..1cd] lint check | By - rupansh | On - 2022-01-20T10:51:35Z
 27. [b0f..c25] nft-list: velas-explorer: use token transfers to fetch data | By - rupansh | On - 2022-01-20T10:50:03Z
 28. [d13..ae6] tezos: TezosAssetMapper: fix derp | By - rupansh | On - 2022-01-19T19:31:55Z
 29. [67e..398] add eth hacks to tezos | By - rupansh | On - 2022-01-19T19:27:33Z
 30. [03b..e9b] feat(tezos): refactor to use tzkt api instead of kalamint | By - imsk17 | On - 2022-01-19T14:52:30Z
 31. [ebc..abb] helpers: addressValidator: fix for tezos | By - rupansh | On - 2022-01-18T16:10:58Z
 32. [9cf..2dc] helpers: apiResp: remove header from response body | By - rupansh | On - 2022-01-18T08:31:27Z
 33. [7bd..f4d] helpers: nftList: fix setting of Retry-After header | By - rupansh | On - 2022-01-18T08:31:11Z
 34. [db8..155] enable tron | By - rupansh | On - 2022-01-17T14:34:31Z
 35. [1d6..584] update .env.example | By - rupansh | On - 2022-01-17T14:30:37Z
 36. [8cb..e61] nft-list: use velas-explorer for precache | By - rupansh | On - 2022-01-17T14:30:00Z
 37. [eb0..a0a] nft-list: add velas-explorer | By - rupansh | On - 2022-01-17T13:27:12Z
 38. [8c3..a29] src: erc165-ints: add ERC721Enumerable | By - rupansh | On - 2022-01-17T13:26:51Z
 39. [d17..6fc] model: eth: fix erc1155ParseLog | By - rupansh | On - 2022-01-07T18:17:11Z
 40. [64e..212] deploy(heroku): add a procfile | By - imsk17 | On - 2021-12-30T14:00:54Z
 41. [48f..a33] helpers: addressValidator: move tezos to seperate namespace | By - rupansh | On - 2021-12-28T08:19:36Z
 42. [8df..5d6] routes: nft: add Retry-After header for caching | By - rupansh | On - 2021-12-28T08:19:00Z
 43. [c6b..16e] feat(cache): add a method to check cache | By - imsk17 | On - 2021-12-28T07:50:05Z
 44. [3fa..d59] config(env): add a field for velas node uri | By - imsk17 | On - 2021-12-26T09:18:24Z
 45. [499..ec2] catchup: fix checking of NaN in the validator | By - imsk17 | On - 2021-12-26T09:15:58Z
 46. [33d..a88] feat(chains): add velas to lister | By - imsk17 | On - 2021-12-26T09:11:59Z
 47. [7ec..0df] chore(config): fix chain id for tezos | By - imsk17 | On - 2021-12-24T10:11:16Z
 48. [300..070] feat(listings): complete tezos implementation | By - imsk17 | On - 2021-12-23T16:48:43Z
 49. [1ee..759] feat(listings): prepare tezos nft listings | By - imsk17 | On - 2021-12-23T16:32:35Z
 50. [c8c..f9d] Revert "[DNM] disable pre-cache for fuse" | By - rupansh | On - 2021-12-20T12:27:24Z

## secretNetwork


 1. [559..166] wip | By - Alex Moshinsky | On - 2022-06-14T10:00:54Z
 2. [eb5..aca] add secret network address validate | By - Alex Moshinsky | On - 2022-06-14T09:11:10Z
 3. [618..d23] secret network works | By - Alex Moshinsky | On - 2022-06-14T07:13:02Z
 4. [566..a40] add check balance algo | By - Alex Moshinsky | On - 2022-06-12T16:01:01Z
 5. [951..8bc] a | By - Alex Moshinsky | On - 2022-06-12T15:19:02Z
 6. [557..259] chage promise all to for await | By - Alex Moshinsky | On - 2022-06-12T15:18:16Z
 7. [961..a1a] algo upcase address | By - Alex Moshinsky | On - 2022-06-12T14:14:40Z
 8. [826..f08] show algo errors | By - Alex Moshinsky | On - 2022-06-12T14:00:11Z
 9. [10e..6a6] chane timeout to 3 sec algo | By - Alex Moshinsky | On - 2022-06-12T13:28:26Z
 10. [909..f33] add rate limit to algo | By - Alex Moshinsky | On - 2022-06-12T13:10:53Z
 11. [00f..fb0] fix algoNftList | By - Alex Moshinsky | On - 2022-06-12T10:12:03Z
 12. [ec3..bb0] fix tazoz | By - Alex Moshinsky | On - 2022-06-08T15:01:53Z
 13. [2c1..79e] tezos: increase nft limit to maximum | By - rupansh | On - 2022-06-07T13:27:54Z
 14. [7ed..33f] add yarn.lock to .gitignore | By - Dima Brook | On - 2022-06-07T08:46:06Z
 15. [557..0e9] check if displayUrl is broken and replace with artifactUri | By - rocalex | On - 2022-06-06T09:03:57Z
 16. [802..30f] disable sft | By - Alex Moshinsky | On - 2022-06-01T17:09:01Z
 17. [0f7..bb0] a | By - Alex Moshinsky | On - 2022-06-01T17:07:23Z
 18. [cba..a1b] a | By - Alex Moshinsky | On - 2022-06-01T17:00:58Z
 19. [51e..b24] remove console log and add check number | By - Alex Moshinsky | On - 2022-06-01T16:54:12Z
 20. [08b..eb9] balance big them 0 | By - Alex Moshinsky | On - 2022-06-01T16:48:10Z
 21. [21b..3b7] diable filter sft | By - Alex Moshinsky | On - 2022-06-01T16:46:48Z
 22. [341..d1f] update moralis to to version 1.8 | By - Alex Moshinsky | On - 2022-06-01T15:15:51Z
 23. [246..6d2] fix vales fetch lowercase address | By - Alex Moshinsky | On - 2022-06-01T09:41:18Z
 24. [75e..86d] chnage from web to ethers and combine vales + iotex with DB and blockChain | By - Alex Moshinsky | On - 2022-05-31T18:18:54Z
 25. [b5c..3b2] fix velas | By - Alex Moshinsky | On - 2022-05-31T10:43:38Z
 26. [e9f..7cd] lowercase | By - Alex Moshinsky | On - 2022-05-30T16:25:56Z
 27. [790..f0d] get nfts from db | By - Alex Moshinsky | On - 2022-05-30T16:09:48Z
 28. [155..982] disable TokenAuthority | By - Alex Moshinsky | On - 2022-05-30T10:11:06Z
 29. [81b..01b] check if nft emepty | By - Alex Moshinsky | On - 2022-05-30T09:40:28Z
 30. [a77..326] console.log | By - Alex Moshinsky | On - 2022-05-30T09:09:49Z
 31. [ed8..667] change to persist and flush | By - Alex Moshinsky | On - 2022-05-30T08:57:08Z
 32. [912..a44] check nft | By - Alex Moshinsky | On - 2022-05-30T08:52:33Z
 33. [3d5..112] fix create to db | By - Alex Moshinsky | On - 2022-05-30T08:50:11Z
 34. [185..ea0] check error | By - Alex Moshinsky | On - 2022-05-30T08:37:12Z
 35. [60d..42c] if nft no exsit it will add | By - Alex Moshinsky | On - 2022-05-30T08:26:51Z
 36. [feb..41b] ready for testing | By - Alex Moshinsky | On - 2022-05-29T21:49:11Z
 37. [3b5..aac] check nft work | By - Alex Moshinsky | On - 2022-05-29T21:14:56Z
 38. [62b..327] add post request route | By - Alex Moshinsky | On - 2022-05-29T09:30:13Z
 39. [af0..c9e] nft-check wip | By - Alex Moshinsky | On - 2022-05-29T08:26:12Z
 40. [feb..db4] tron: enable worker for listener | By - imsk17 | On - 2022-05-17T12:23:56Z
 41. [f5c..518] nft-list: evm: properly commit changes to db for vechain | By - rupansh | On - 2022-05-12T09:23:45Z
 42. [cbc..3a1] listener: adapt for vechain | By - imsk17 | On - 2022-05-11T12:36:10Z
 43. [ebc..564] tron: add a check to live listener to avoid unfinalized blocks | By - imsk17 | On - 2022-05-08T10:32:52Z
 44. [a9b..6e5] iotex: add a contract to the list | By - imsk17 | On - 2022-05-08T10:32:51Z
 45. [30b..986] fix hardcoded testnet VeChain | By - Dima Brook | On - 2022-05-03T18:06:13Z
 46. [270..ace] fix type error | By - Dima Brook | On - 2022-05-03T16:14:58Z
 47. [f96..2f5] Merge pull request #3 from XP-NETWORK/vechain | By - Dima Brook | On - 2022-05-03T10:20:30Z
 48. [c16..1bb] Merge branch 'master' into vechain | By - Dima Brook | On - 2022-05-03T10:19:31Z
 49. [4ec..1d2] algorand: nft-list-service: gracefully handle 404 error | By - rupansh | On - 2022-05-03T09:49:09Z
 50. [95e..86f] velas: use web3 repo instead of velas api | By - imsk17 | On - 2022-05-01T12:23:37Z

## sft


 1. [5e0..45d] adapt other repos for erc1155 changes | By - imsk17 | On - 2022-05-20T12:46:08Z
 2. [8fe..46b] erc1155: support for SFTs | By - imsk17 | On - 2022-05-19T14:57:16Z
 3. [ccf..3f5] erc1155: do not ignore balance values | By - imsk17 | On - 2022-05-19T11:54:28Z
 4. [4a3..cd1] get rid of redundant try-catch | By - imsk17 | On - 2022-05-19T11:42:20Z
 5. [98a..46d] Merge branch 'block-listener' | By - imsk17 | On - 2022-05-19T11:36:13Z
 6. [feb..db4] tron: enable worker for listener | By - imsk17 | On - 2022-05-17T12:23:56Z
 7. [9c0..867] tron: enable worker for listener | By - imsk17 | On - 2022-05-17T12:22:49Z
 8. [755..7fb] Listen for each block | By - imsk17 | On - 2022-05-13T08:52:15Z
 9. [f5c..518] nft-list: evm: properly commit changes to db for vechain | By - rupansh | On - 2022-05-12T09:23:45Z
 10. [cbc..3a1] listener: adapt for vechain | By - imsk17 | On - 2022-05-11T12:36:10Z
 11. [ebc..564] tron: add a check to live listener to avoid unfinalized blocks | By - imsk17 | On - 2022-05-08T10:32:52Z
 12. [a9b..6e5] iotex: add a contract to the list | By - imsk17 | On - 2022-05-08T10:32:51Z
 13. [30b..986] fix hardcoded testnet VeChain | By - Dima Brook | On - 2022-05-03T18:06:13Z
 14. [270..ace] fix type error | By - Dima Brook | On - 2022-05-03T16:14:58Z
 15. [f96..2f5] Merge pull request #3 from XP-NETWORK/vechain | By - Dima Brook | On - 2022-05-03T10:20:30Z
 16. [c16..1bb] Merge branch 'master' into vechain | By - Dima Brook | On - 2022-05-03T10:19:31Z
 17. [4ec..1d2] algorand: nft-list-service: gracefully handle 404 error | By - rupansh | On - 2022-05-03T09:49:09Z
 18. [95e..86f] velas: use web3 repo instead of velas api | By - imsk17 | On - 2022-05-01T12:23:37Z
 19. [19c..01c] Merge vech to master | By - Sumit Kumar | On - 2022-04-18T11:59:48Z
 20. [a97..139] Use Moralis for Some EVM Chains | By - imsk17 | On - 2022-04-18T11:58:56Z
 21. [2cd..3ab] Merge Vechain | By - Sumit Kumar | On - 2022-04-14T12:12:41Z
 22. [387..5b2] web3: chains: add support for vechain | By - imsk17 | On - 2022-04-12T12:44:35Z
 23. [951..2f3] web3: providers: use WebsocketProvider if provided node is ws | By - imsk17 | On - 2022-04-11T11:19:58Z
 24. [1cb..990] web3: activate index only for chains that are provided | By - imsk17 | On - 2022-04-11T11:05:22Z
 25. [7d8..9ab] gatechain added to nft-index | By - YuraDXPNetwork | On - 2022-04-05T14:20:54Z
 26. [4b2..a20] fix nft listing for algorand | By - rupansh | On - 2022-04-05T13:12:36Z
 27. [28b..935] update yarn lock | By - imsk17 | On - 2022-03-30T11:46:40Z
 28. [cba..c64] indexer: add godwoken to web3 chains | By - imsk17 | On - 2022-03-29T12:43:38Z
 29. [82f..546] vechain: setup listener | By - imsk17 | On - 2022-03-24T18:06:02Z
 30. [0fb..8e1] eth-catchup: adapt for @vechain/ethers | By - imsk17 | On - 2022-03-24T12:26:07Z
 31. [9f4..9e0] formatting: add pre commit hook | By - imsk17 | On - 2022-03-20T09:47:28Z
 32. [40c..5be] tezos: mapper: fix mapper | By - imsk17 | On - 2022-03-16T19:01:26Z
 33. [6b2..230] chains: Vethers Setup | By - imsk17 | On - 2022-03-03T12:58:44Z
 34. [ddf..5d3] helpers: nftList: fix setting of Retry-After header | By - rupansh | On - 2022-03-01T13:54:18Z
 35. [70b..5a8] added harmony to consts | By - VKint | On - 2022-02-27T10:34:07Z
 36. [27d..45c] use subgraph for eth | By - rupansh | On - 2022-02-24T23:47:48Z
 37. [675..75b] nft-list: eth: add subgraph for eth nft | By - rupansh | On - 2022-02-24T23:47:48Z
 38. [a45..bee] chains: include harmony | By - imsk17 | On - 2022-02-16T12:17:30Z
 39. [88b..a93] nft-list: evm: ignore ERC1155_URI support | By - rupansh | On - 2022-02-16T11:21:07Z
 40. [1ec..133] nft-list: add collectionIdent to NftInfo | By - imsk17 | On - 2022-02-15T12:28:00Z
 41. [752..951] chains: web3: add aurora chain | By - imsk17 | On - 2022-02-10T13:39:49Z
 42. [a2b..e05] nft-listening: move from pool to dedicated workers | By - imsk17 | On - 2022-02-02T09:54:03Z
 43. [5fe..539] chains: iotex: use catchup and listening | By - imsk17 | On - 2022-02-01T11:31:45Z
 44. [17a..0dd] chains: add support for iotex | By - imsk17 | On - 2022-01-31T14:16:34Z
 45. [2a4..e28] project: lint: fix eslint | By - imsk17 | On - 2022-01-27T11:03:44Z
 46. [308..798] tezos: AssetMapper: add exception for wrapped nft | By - rupansh | On - 2022-01-25T10:19:51Z
 47. [6fb..a25] tezos: AssetMapper: use formats if decimals are not available | By - rupansh | On - 2022-01-25T09:43:39Z
 48. [21f..c1f] velas: properly serialize nft | By - rupansh | On - 2022-01-24T08:15:14Z
 49. [ca1..538] velas: use explorer api to fetch nfts | By - rupansh | On - 2022-01-24T08:09:12Z
 50. [3d4..bdd] tezos: AssetMapper: use decimals instead of format to check for nft | By - rupansh | On - 2022-01-24T08:08:58Z

## test


 1. [154..f60] fix ton | By - Alex Moshinsky | On - 2022-11-14T17:38:40Z
 2. [96f..df5] update axios | By - Alex Moshinsky | On - 2022-11-09T10:13:35Z
 3. [b19..696] add ton | By - Alex Moshinsky | On - 2022-11-08T15:44:40Z
 4. [475..92b] add 32gb ram to node | By - Alex Moshinsky | On - 2022-09-12T11:58:48Z
 5. [3c2..91b] add MOONBEAM SKALE ABEYCHAIN | By - Alex Moshinsky | On - 2022-09-12T11:52:47Z
 6. [b41..361] update tron 10 blocks behind | By - Alex Moshinsky | On - 2022-09-08T15:09:47Z
 7. [c4a..eb7] reduce moralis request from 20 to 15 | By - Alex Moshinsky | On - 2022-08-02T11:12:39Z
 8. [f54..aac] moralis increase  20 reqests from 5 | By - Alex Moshinsky | On - 2022-08-02T09:29:07Z
 9. [fc8..103] fix | By - Alex Moshinsky | On - 2022-07-05T11:04:17Z
 10. [a96..a8b] fix | By - Alex Moshinsky | On - 2022-07-05T11:00:31Z
 11. [fd3..257] fix checksam adress | By - Alex Moshinsky | On - 2022-06-19T16:42:16Z
 12. [566..a40] add check balance algo | By - Alex Moshinsky | On - 2022-06-12T16:01:01Z
 13. [951..8bc] a | By - Alex Moshinsky | On - 2022-06-12T15:19:02Z
 14. [557..259] chage promise all to for await | By - Alex Moshinsky | On - 2022-06-12T15:18:16Z
 15. [961..a1a] algo upcase address | By - Alex Moshinsky | On - 2022-06-12T14:14:40Z
 16. [826..f08] show algo errors | By - Alex Moshinsky | On - 2022-06-12T14:00:11Z
 17. [10e..6a6] chane timeout to 3 sec algo | By - Alex Moshinsky | On - 2022-06-12T13:28:26Z
 18. [909..f33] add rate limit to algo | By - Alex Moshinsky | On - 2022-06-12T13:10:53Z
 19. [00f..fb0] fix algoNftList | By - Alex Moshinsky | On - 2022-06-12T10:12:03Z
 20. [ec3..bb0] fix tazoz | By - Alex Moshinsky | On - 2022-06-08T15:01:53Z
 21. [2c1..79e] tezos: increase nft limit to maximum | By - rupansh | On - 2022-06-07T13:27:54Z
 22. [7ed..33f] add yarn.lock to .gitignore | By - Dima Brook | On - 2022-06-07T08:46:06Z
 23. [557..0e9] check if displayUrl is broken and replace with artifactUri | By - rocalex | On - 2022-06-06T09:03:57Z
 24. [802..30f] disable sft | By - Alex Moshinsky | On - 2022-06-01T17:09:01Z
 25. [0f7..bb0] a | By - Alex Moshinsky | On - 2022-06-01T17:07:23Z
 26. [cba..a1b] a | By - Alex Moshinsky | On - 2022-06-01T17:00:58Z
 27. [51e..b24] remove console log and add check number | By - Alex Moshinsky | On - 2022-06-01T16:54:12Z
 28. [08b..eb9] balance big them 0 | By - Alex Moshinsky | On - 2022-06-01T16:48:10Z
 29. [21b..3b7] diable filter sft | By - Alex Moshinsky | On - 2022-06-01T16:46:48Z
 30. [341..d1f] update moralis to to version 1.8 | By - Alex Moshinsky | On - 2022-06-01T15:15:51Z
 31. [246..6d2] fix vales fetch lowercase address | By - Alex Moshinsky | On - 2022-06-01T09:41:18Z
 32. [75e..86d] chnage from web to ethers and combine vales + iotex with DB and blockChain | By - Alex Moshinsky | On - 2022-05-31T18:18:54Z
 33. [b5c..3b2] fix velas | By - Alex Moshinsky | On - 2022-05-31T10:43:38Z
 34. [e9f..7cd] lowercase | By - Alex Moshinsky | On - 2022-05-30T16:25:56Z
 35. [790..f0d] get nfts from db | By - Alex Moshinsky | On - 2022-05-30T16:09:48Z
 36. [155..982] disable TokenAuthority | By - Alex Moshinsky | On - 2022-05-30T10:11:06Z
 37. [81b..01b] check if nft emepty | By - Alex Moshinsky | On - 2022-05-30T09:40:28Z
 38. [a77..326] console.log | By - Alex Moshinsky | On - 2022-05-30T09:09:49Z
 39. [ed8..667] change to persist and flush | By - Alex Moshinsky | On - 2022-05-30T08:57:08Z
 40. [912..a44] check nft | By - Alex Moshinsky | On - 2022-05-30T08:52:33Z
 41. [3d5..112] fix create to db | By - Alex Moshinsky | On - 2022-05-30T08:50:11Z
 42. [185..ea0] check error | By - Alex Moshinsky | On - 2022-05-30T08:37:12Z
 43. [60d..42c] if nft no exsit it will add | By - Alex Moshinsky | On - 2022-05-30T08:26:51Z
 44. [feb..41b] ready for testing | By - Alex Moshinsky | On - 2022-05-29T21:49:11Z
 45. [3b5..aac] check nft work | By - Alex Moshinsky | On - 2022-05-29T21:14:56Z
 46. [62b..327] add post request route | By - Alex Moshinsky | On - 2022-05-29T09:30:13Z
 47. [af0..c9e] nft-check wip | By - Alex Moshinsky | On - 2022-05-29T08:26:12Z
 48. [feb..db4] tron: enable worker for listener | By - imsk17 | On - 2022-05-17T12:23:56Z
 49. [f5c..518] nft-list: evm: properly commit changes to db for vechain | By - rupansh | On - 2022-05-12T09:23:45Z
 50. [cbc..3a1] listener: adapt for vechain | By - imsk17 | On - 2022-05-11T12:36:10Z

## vechain


 1. [c16..1bb] Merge branch 'master' into vechain | By - Dima Brook | On - 2022-05-03T10:19:31Z
 2. [4ec..1d2] algorand: nft-list-service: gracefully handle 404 error | By - rupansh | On - 2022-05-03T09:49:09Z
 3. [95e..86f] velas: use web3 repo instead of velas api | By - imsk17 | On - 2022-05-01T12:23:37Z
 4. [19c..01c] Merge vech to master | By - Sumit Kumar | On - 2022-04-18T11:59:48Z
 5. [a97..139] Use Moralis for Some EVM Chains | By - imsk17 | On - 2022-04-18T11:58:56Z
 6. [2cd..3ab] Merge Vechain | By - Sumit Kumar | On - 2022-04-14T12:12:41Z
 7. [387..5b2] web3: chains: add support for vechain | By - imsk17 | On - 2022-04-12T12:44:35Z
 8. [951..2f3] web3: providers: use WebsocketProvider if provided node is ws | By - imsk17 | On - 2022-04-11T11:19:58Z
 9. [1cb..990] web3: activate index only for chains that are provided | By - imsk17 | On - 2022-04-11T11:05:22Z
 10. [7d8..9ab] gatechain added to nft-index | By - YuraDXPNetwork | On - 2022-04-05T14:20:54Z
 11. [4b2..a20] fix nft listing for algorand | By - rupansh | On - 2022-04-05T13:12:36Z
 12. [28b..935] update yarn lock | By - imsk17 | On - 2022-03-30T11:46:40Z
 13. [cba..c64] indexer: add godwoken to web3 chains | By - imsk17 | On - 2022-03-29T12:43:38Z
 14. [82f..546] vechain: setup listener | By - imsk17 | On - 2022-03-24T18:06:02Z
 15. [0fb..8e1] eth-catchup: adapt for @vechain/ethers | By - imsk17 | On - 2022-03-24T12:26:07Z
 16. [9f4..9e0] formatting: add pre commit hook | By - imsk17 | On - 2022-03-20T09:47:28Z
 17. [40c..5be] tezos: mapper: fix mapper | By - imsk17 | On - 2022-03-16T19:01:26Z
 18. [6b2..230] chains: Vethers Setup | By - imsk17 | On - 2022-03-03T12:58:44Z
 19. [ddf..5d3] helpers: nftList: fix setting of Retry-After header | By - rupansh | On - 2022-03-01T13:54:18Z
 20. [70b..5a8] added harmony to consts | By - VKint | On - 2022-02-27T10:34:07Z
 21. [27d..45c] use subgraph for eth | By - rupansh | On - 2022-02-24T23:47:48Z
 22. [675..75b] nft-list: eth: add subgraph for eth nft | By - rupansh | On - 2022-02-24T23:47:48Z
 23. [a45..bee] chains: include harmony | By - imsk17 | On - 2022-02-16T12:17:30Z
 24. [88b..a93] nft-list: evm: ignore ERC1155_URI support | By - rupansh | On - 2022-02-16T11:21:07Z
 25. [1ec..133] nft-list: add collectionIdent to NftInfo | By - imsk17 | On - 2022-02-15T12:28:00Z
 26. [752..951] chains: web3: add aurora chain | By - imsk17 | On - 2022-02-10T13:39:49Z
 27. [a2b..e05] nft-listening: move from pool to dedicated workers | By - imsk17 | On - 2022-02-02T09:54:03Z
 28. [5fe..539] chains: iotex: use catchup and listening | By - imsk17 | On - 2022-02-01T11:31:45Z
 29. [17a..0dd] chains: add support for iotex | By - imsk17 | On - 2022-01-31T14:16:34Z
 30. [2a4..e28] project: lint: fix eslint | By - imsk17 | On - 2022-01-27T11:03:44Z
 31. [308..798] tezos: AssetMapper: add exception for wrapped nft | By - rupansh | On - 2022-01-25T10:19:51Z
 32. [6fb..a25] tezos: AssetMapper: use formats if decimals are not available | By - rupansh | On - 2022-01-25T09:43:39Z
 33. [21f..c1f] velas: properly serialize nft | By - rupansh | On - 2022-01-24T08:15:14Z
 34. [ca1..538] velas: use explorer api to fetch nfts | By - rupansh | On - 2022-01-24T08:09:12Z
 35. [3d4..bdd] tezos: AssetMapper: use decimals instead of format to check for nft | By - rupansh | On - 2022-01-24T08:08:58Z
 36. [89f..06f] nft-list: tezos: assetMapper: check balance | By - rupansh | On - 2022-01-21T12:09:11Z
 37. [a7c..1d2] nft-list: sanitize addresses before comitting | By - rupansh | On - 2022-01-21T10:11:02Z
 38. [8cb..2cb] nft-list: preacache: parameterize cache expiry | By - rupansh | On - 2022-01-20T13:04:59Z
 39. [64d..93f] nft-list: preacache: invalidate cache after a day | By - rupansh | On - 2022-01-20T13:03:33Z
 40. [9d5..d8b] nft-list: fix insane usage of Sets and Maps | By - rupansh | On - 2022-01-20T12:06:27Z
 41. [aa6..4a4] nft-list: velas-explorer: ignore token if not owned | By - rupansh | On - 2022-01-20T11:15:17Z
 42. [46f..d00] update .env.example | By - rupansh | On - 2022-01-20T10:52:32Z
 43. [554..1cd] lint check | By - rupansh | On - 2022-01-20T10:51:35Z
 44. [b0f..c25] nft-list: velas-explorer: use token transfers to fetch data | By - rupansh | On - 2022-01-20T10:50:03Z
 45. [d13..ae6] tezos: TezosAssetMapper: fix derp | By - rupansh | On - 2022-01-19T19:31:55Z
 46. [67e..398] add eth hacks to tezos | By - rupansh | On - 2022-01-19T19:27:33Z
 47. [03b..e9b] feat(tezos): refactor to use tzkt api instead of kalamint | By - imsk17 | On - 2022-01-19T14:52:30Z
 48. [ebc..abb] helpers: addressValidator: fix for tezos | By - rupansh | On - 2022-01-18T16:10:58Z
 49. [9cf..2dc] helpers: apiResp: remove header from response body | By - rupansh | On - 2022-01-18T08:31:27Z
 50. [7bd..f4d] helpers: nftList: fix setting of Retry-After header | By - rupansh | On - 2022-01-18T08:31:11Z

# aptos-integration-move

## main


 1. [55a..cf1] Delete deployer.move | By - AlexeyAdoniev | On - 2023-02-14T15:08:04Z
 2. [31c..1d9] Delete test.ts | By - AlexeyAdoniev | On - 2023-02-14T15:07:38Z
 3. [e17..76e] Merge pull request #1 from XP-NETWORK/master | By - AlexeyAdoniev | On - 2023-02-14T14:49:41Z
 4. [4c2..29b] BRIDGE: add option to create collections with resource account | By - AlexeyAdoniev | On - 2023-02-14T14:48:04Z
 5. [f4b..986] add collections creation capabilities to bridge contract | By - AlexeyAdoniev | On - 2023-02-09T10:28:34Z
 6. [09b..4f6] update bridge_client.ts | By - rocalex | On - 2022-11-09T08:56:46Z
 7. [a0e..986] update abi | By - rocalex | On - 2022-11-08T18:19:22Z
 8. [986..a66] fix validate_transfer_nft | By - rocalex | On - 2022-11-08T18:16:51Z
 9. [d23..b9b] fix withdraw_nft | By - rocalex | On - 2022-11-08T17:56:44Z
 10. [73b..244] direct token transfer and emit uri | By - rocalex | On - 2022-11-08T15:10:45Z
 11. [822..e7b] Update README.md | By - Xueming Zheng | On - 2022-11-08T12:27:33Z
 12. [388..a0f] Update README.md | By - Xueming Zheng | On - 2022-11-08T11:00:55Z
 13. [bd1..450] unit tests for transfer nft | By - rocalex | On - 2022-10-24T08:15:11Z
 14. [1e2..a9f] sha2_256 hash | By - rocalex | On - 2022-10-24T04:21:39Z
 15. [304..db6] Update README.md | By - Xueming Zheng | On - 2022-10-18T04:10:48Z
 16. [3b1..a1c] Update README.md | By - Xueming Zheng | On - 2022-10-17T17:29:25Z
 17. [a64..865] fix validate_transfer_nft | By - rocalex | On - 2022-10-16T09:01:02Z
 18. [d65..954] update unit tests | By - rocalex | On - 2022-10-13T15:12:38Z
 19. [5b8..81e] require paused/unpaused | By - rocalex | On - 2022-10-11T13:46:24Z
 20. [f20..ed6] remove mut | By - rocalex | On - 2022-10-11T13:43:26Z
 21. [b78..144] consuming actions into require_sig_valid | By - rocalex | On - 2022-10-11T13:37:45Z
 22. [5e3..870] check if admin is xp_network when initialize | By - rocalex | On - 2022-10-11T13:09:24Z
 23. [e2d..cfc] remove default value of property version | By - rocalex | On - 2022-09-14T12:56:04Z
 24. [732..1b0] update abi and bridge client | By - rocalex | On - 2022-09-14T04:49:44Z
 25. [48e..3d9] withdraw fees | By - rocalex | On - 2022-09-12T03:39:46Z
 26. [a40..da6] add whitelist | By - rocalex | On - 2022-09-08T11:11:57Z
 27. [6ad..258] finish SC | By - rocalex | On - 2022-09-08T05:52:20Z
 28. [c0e..0a2] consuming actions | By - rocalex | On - 2022-08-29T18:02:01Z
 29. [98a..c1e] ed25519 signature verification | By - rocalex | On - 2022-08-29T17:26:28Z
 30. [240..a49] update client part | By - rocalex | On - 2022-08-29T04:46:13Z
 31. [d2b..999] add simple get method | By - rocalex | On - 2022-08-15T19:39:13Z
 32. [4f2..6c2] add bridge client | By - rocalex | On - 2022-08-12T02:49:56Z
 33. [2c3..e56] add deploy script | By - rocalex | On - 2022-08-11T17:45:51Z
 34. [0d7..810] deploying wrapped nft | By - rocalex | On - 2022-08-11T16:26:10Z
 35. [105..f36] initial move module | By - rocalex | On - 2022-08-10T03:21:39Z
 36. [2bc..df4] fix timeout error | By - rocalex | On - 2022-08-10T02:33:05Z
 37. [415..4e5] test local node | By - rocalex | On - 2022-08-08T20:38:26Z
 38. [dbc..8c7] add readme | By - rocalex | On - 2022-08-08T18:36:31Z

## master


 1. [4c2..29b] BRIDGE: add option to create collections with resource account | By - AlexeyAdoniev | On - 2023-02-14T14:48:04Z
 2. [f4b..986] add collections creation capabilities to bridge contract | By - AlexeyAdoniev | On - 2023-02-09T10:28:34Z
 3. [09b..4f6] update bridge_client.ts | By - rocalex | On - 2022-11-09T08:56:46Z
 4. [a0e..986] update abi | By - rocalex | On - 2022-11-08T18:19:22Z
 5. [986..a66] fix validate_transfer_nft | By - rocalex | On - 2022-11-08T18:16:51Z
 6. [d23..b9b] fix withdraw_nft | By - rocalex | On - 2022-11-08T17:56:44Z
 7. [73b..244] direct token transfer and emit uri | By - rocalex | On - 2022-11-08T15:10:45Z
 8. [822..e7b] Update README.md | By - Xueming Zheng | On - 2022-11-08T12:27:33Z
 9. [388..a0f] Update README.md | By - Xueming Zheng | On - 2022-11-08T11:00:55Z
 10. [bd1..450] unit tests for transfer nft | By - rocalex | On - 2022-10-24T08:15:11Z
 11. [1e2..a9f] sha2_256 hash | By - rocalex | On - 2022-10-24T04:21:39Z
 12. [304..db6] Update README.md | By - Xueming Zheng | On - 2022-10-18T04:10:48Z
 13. [3b1..a1c] Update README.md | By - Xueming Zheng | On - 2022-10-17T17:29:25Z
 14. [a64..865] fix validate_transfer_nft | By - rocalex | On - 2022-10-16T09:01:02Z
 15. [d65..954] update unit tests | By - rocalex | On - 2022-10-13T15:12:38Z
 16. [5b8..81e] require paused/unpaused | By - rocalex | On - 2022-10-11T13:46:24Z
 17. [f20..ed6] remove mut | By - rocalex | On - 2022-10-11T13:43:26Z
 18. [b78..144] consuming actions into require_sig_valid | By - rocalex | On - 2022-10-11T13:37:45Z
 19. [5e3..870] check if admin is xp_network when initialize | By - rocalex | On - 2022-10-11T13:09:24Z
 20. [e2d..cfc] remove default value of property version | By - rocalex | On - 2022-09-14T12:56:04Z
 21. [732..1b0] update abi and bridge client | By - rocalex | On - 2022-09-14T04:49:44Z
 22. [48e..3d9] withdraw fees | By - rocalex | On - 2022-09-12T03:39:46Z
 23. [a40..da6] add whitelist | By - rocalex | On - 2022-09-08T11:11:57Z
 24. [6ad..258] finish SC | By - rocalex | On - 2022-09-08T05:52:20Z
 25. [c0e..0a2] consuming actions | By - rocalex | On - 2022-08-29T18:02:01Z
 26. [98a..c1e] ed25519 signature verification | By - rocalex | On - 2022-08-29T17:26:28Z
 27. [240..a49] update client part | By - rocalex | On - 2022-08-29T04:46:13Z
 28. [d2b..999] add simple get method | By - rocalex | On - 2022-08-15T19:39:13Z
 29. [4f2..6c2] add bridge client | By - rocalex | On - 2022-08-12T02:49:56Z
 30. [2c3..e56] add deploy script | By - rocalex | On - 2022-08-11T17:45:51Z
 31. [0d7..810] deploying wrapped nft | By - rocalex | On - 2022-08-11T16:26:10Z
 32. [105..f36] initial move module | By - rocalex | On - 2022-08-10T03:21:39Z
 33. [2bc..df4] fix timeout error | By - rocalex | On - 2022-08-10T02:33:05Z
 34. [415..4e5] test local node | By - rocalex | On - 2022-08-08T20:38:26Z
 35. [dbc..8c7] add readme | By - rocalex | On - 2022-08-08T18:36:31Z

## testnet


 1. [1ee..140] remove whitelist | By - rocalex | On - 2022-11-10T09:15:46Z
 2. [09b..4f6] update bridge_client.ts | By - rocalex | On - 2022-11-09T08:56:46Z
 3. [a0e..986] update abi | By - rocalex | On - 2022-11-08T18:19:22Z
 4. [986..a66] fix validate_transfer_nft | By - rocalex | On - 2022-11-08T18:16:51Z
 5. [d23..b9b] fix withdraw_nft | By - rocalex | On - 2022-11-08T17:56:44Z
 6. [73b..244] direct token transfer and emit uri | By - rocalex | On - 2022-11-08T15:10:45Z
 7. [822..e7b] Update README.md | By - Xueming Zheng | On - 2022-11-08T12:27:33Z
 8. [388..a0f] Update README.md | By - Xueming Zheng | On - 2022-11-08T11:00:55Z
 9. [bd1..450] unit tests for transfer nft | By - rocalex | On - 2022-10-24T08:15:11Z
 10. [1e2..a9f] sha2_256 hash | By - rocalex | On - 2022-10-24T04:21:39Z
 11. [304..db6] Update README.md | By - Xueming Zheng | On - 2022-10-18T04:10:48Z
 12. [3b1..a1c] Update README.md | By - Xueming Zheng | On - 2022-10-17T17:29:25Z
 13. [a64..865] fix validate_transfer_nft | By - rocalex | On - 2022-10-16T09:01:02Z
 14. [d65..954] update unit tests | By - rocalex | On - 2022-10-13T15:12:38Z
 15. [5b8..81e] require paused/unpaused | By - rocalex | On - 2022-10-11T13:46:24Z
 16. [f20..ed6] remove mut | By - rocalex | On - 2022-10-11T13:43:26Z
 17. [b78..144] consuming actions into require_sig_valid | By - rocalex | On - 2022-10-11T13:37:45Z
 18. [5e3..870] check if admin is xp_network when initialize | By - rocalex | On - 2022-10-11T13:09:24Z
 19. [e2d..cfc] remove default value of property version | By - rocalex | On - 2022-09-14T12:56:04Z
 20. [732..1b0] update abi and bridge client | By - rocalex | On - 2022-09-14T04:49:44Z
 21. [48e..3d9] withdraw fees | By - rocalex | On - 2022-09-12T03:39:46Z
 22. [a40..da6] add whitelist | By - rocalex | On - 2022-09-08T11:11:57Z
 23. [6ad..258] finish SC | By - rocalex | On - 2022-09-08T05:52:20Z
 24. [c0e..0a2] consuming actions | By - rocalex | On - 2022-08-29T18:02:01Z
 25. [98a..c1e] ed25519 signature verification | By - rocalex | On - 2022-08-29T17:26:28Z
 26. [240..a49] update client part | By - rocalex | On - 2022-08-29T04:46:13Z
 27. [d2b..999] add simple get method | By - rocalex | On - 2022-08-15T19:39:13Z
 28. [4f2..6c2] add bridge client | By - rocalex | On - 2022-08-12T02:49:56Z
 29. [2c3..e56] add deploy script | By - rocalex | On - 2022-08-11T17:45:51Z
 30. [0d7..810] deploying wrapped nft | By - rocalex | On - 2022-08-11T16:26:10Z
 31. [105..f36] initial move module | By - rocalex | On - 2022-08-10T03:21:39Z
 32. [2bc..df4] fix timeout error | By - rocalex | On - 2022-08-10T02:33:05Z
 33. [415..4e5] test local node | By - rocalex | On - 2022-08-08T20:38:26Z
 34. [dbc..8c7] add readme | By - rocalex | On - 2022-08-08T18:36:31Z

# backend-game-team-updated

## master


 1. [a0c..d5d] no double rewards for chest | By - TABISH AYUB RAZA | On - 2023-02-14T12:39:22Z
 2. [0cf..a94] popup rewards | By - TABISH AYUB RAZA | On - 2023-02-14T09:21:03Z
 3. [e40..35a] user chests and level up | By - TABISH AYUB RAZA | On - 2023-02-10T12:10:39Z
 4. [20d..184] wrappedcontractscheck | By - TABISH AYUB RAZA | On - 2023-02-06T10:39:30Z
 5. [d4b..0d7] add quest for new minted character | By - TABISH AYUB RAZA | On - 2023-02-02T14:01:06Z
 6. [887..3d0] equip/unequip multiple items on any character | By - TABISH AYUB RAZA | On - 2023-02-01T13:44:50Z
 7. [d47..b31] changes to feat/whitelist and multiple equip | By - TABISH AYUB RAZA | On - 2023-02-01T07:54:32Z
 8. [e18..a25] attack and defense to quest according to level | By - TABISH AYUB RAZA | On - 2023-01-27T15:27:45Z
 9. [038..700] updated | By - TABISH AYUB RAZA | On - 2023-01-26T14:35:48Z
 10. [968..1c5] new | By - tabisharaza@gmail.com | On - 2023-01-24T12:21:39Z
 11. [5ec..f57] newchanges | By - tabisharaza@gmail.com | On - 2023-01-20T07:50:05Z
 12. [0db..da7] NEW | By - tabisharaza@gmail.com | On - 2023-01-19T12:48:11Z
 13. [c52..f86] Merge branch 'master' of https://github.com/Tabisharaza/https---github.com-Tabisharaza-backend-game-team | By - tabisharaza@gmail.com | On - 2023-01-19T07:25:09Z
 14. [39f..afd] new | By - tabisharaza@gmail.com | On - 2023-01-19T07:25:03Z
 15. [1ce..3a3] updatedrarities | By - Tabish | On - 2023-01-19T05:25:32Z
 16. [9dc..d5d] newupdates | By - tabisharaza@gmail.com | On - 2023-01-16T05:33:56Z
 17. [167..bd0] updated | By - Tabish | On - 2023-01-11T12:17:46Z
 18. [3c5..f4c] new | By - tabisharaza@gmail.com | On - 2023-01-11T06:32:30Z
 19. [ecc..fa9] nolocal | By - tabisharaza@gmail.com | On - 2023-01-07T20:21:17Z
 20. [298..4aa] no host | By - tabisharaza@gmail.com | On - 2023-01-07T20:11:12Z
 21. [be6..d50] any | By - tabisharaza@gmail.com | On - 2023-01-07T20:06:35Z
 22. [2a3..07c] final | By - tabisharaza@gmail.com | On - 2023-01-07T20:02:35Z
 23. [74e..07e] new | By - tabisharaza@gmail.com | On - 2023-01-07T20:01:16Z
 24. [c99..b8c] build | By - tabisharaza@gmail.com | On - 2023-01-07T18:49:26Z
 25. [61a..c0c] gh | By - tabisharaza@gmail.com | On - 2023-01-07T18:48:34Z
 26. [680..192] new | By - tabisharaza@gmail.com | On - 2023-01-07T18:45:54Z
 27. [28e..c34] new changes | By - tabisharaza@gmail.com | On - 2023-01-05T11:07:57Z
 28. [3e7..ba1] new | By - tabisharaza@gmail.com | On - 2023-01-02T04:56:52Z
 29. [2f7..41b] my first commit good luck | By - tabisharaza@gmail.com | On - 2022-12-29T10:10:25Z
 30. [a49..5d3] first commit | By - tabisharaza@gmail.com | On - 2022-12-29T06:41:15Z

# frontend-game-team

## main


 1. [eed..36e] no twice rewards for chest | By - TABISH AYUB RAZA | On - 2023-02-14T12:37:11Z
 2. [a1d..0ee] popup rewards | By - TABISH AYUB RAZA | On - 2023-02-14T09:19:00Z
 3. [a85..15d] user chests and level up | By - TABISH AYUB RAZA | On - 2023-02-10T12:14:05Z
 4. [3dc..1c5] api.ts added to store all APIs in one place | By - TABISH AYUB RAZA | On - 2023-02-07T08:20:51Z
 5. [8e2..e27] added debounce avoid multiple click button rapidly | By - TABISH AYUB RAZA | On - 2023-02-06T15:17:10Z
 6. [fc5..1a8] new | By - TABISH AYUB RAZA | On - 2023-02-06T13:35:56Z
 7. [ded..900] filestructure update and redux | By - TABISH AYUB RAZA | On - 2023-02-06T10:34:59Z
 8. [1fa..b03] add quest for new minted character | By - TABISH AYUB RAZA | On - 2023-02-02T13:59:47Z
 9. [980..220] updated speed for fetching characters | By - TABISH AYUB RAZA | On - 2023-02-02T13:22:36Z
 10. [f36..f9a] unequip multiple items & limit 1 equip each type | By - TABISH AYUB RAZA | On - 2023-02-01T13:49:22Z
 11. [39e..441] updated multiple equip | By - TABISH AYUB RAZA | On - 2023-02-01T07:58:58Z
 12. [9a7..ee4] added character attack and item check for quest | By - TABISH AYUB RAZA | On - 2023-01-27T15:26:48Z
 13. [b4e..6f1] updated | By - TABISH AYUB RAZA | On - 2023-01-26T14:45:17Z
 14. [8ee..0bf] new | By - tabisharaza@gmail.com | On - 2023-01-24T12:43:20Z
 15. [365..797] new | By - tabisharaza@gmail.com | On - 2023-01-24T12:28:35Z
 16. [cd3..4f8] walletconnect | By - tabisharaza@gmail.com | On - 2023-01-24T05:50:48Z
 17. [2fd..b21] all good for new server https | By - tabisharaza@gmail.com | On - 2023-01-20T15:18:33Z
 18. [7c9..93d] new | By - tabisharaza@gmail.com | On - 2023-01-20T05:31:22Z
 19. [fe6..b9a] noComments | By - tabisharaza@gmail.com | On - 2023-01-19T14:52:24Z
 20. [8c7..8e5] new | By - tabisharaza@gmail.com | On - 2023-01-19T12:45:39Z
 21. [939..84a] updated | By - tabisharaza@gmail.com | On - 2023-01-19T12:44:03Z
 22. [313..e5f] new | By - tabisharaza@gmail.com | On - 2023-01-19T12:42:42Z
 23. [325..556] Merge pull request #4 from Tabisharaza/osamawork2023 | By - TABISH AYUB RAZA | On - 2023-01-19T12:39:52Z
 24. [72a..121] new | By - tabisharaza@gmail.com | On - 2023-01-19T12:37:20Z
 25. [78d..806] updated | By - Muhammad Osama | On - 2023-01-19T12:36:19Z
 26. [1d6..bcb] axiosfix | By - Tabish | On - 2023-01-19T07:19:23Z
 27. [2d2..f00] Merge pull request #3 from Tabisharaza/osamawork2023 | By - TABISH AYUB RAZA | On - 2023-01-19T06:02:27Z
 28. [83d..40f] new | By - Tabish | On - 2023-01-19T05:58:23Z
 29. [8bf..819] updated the work | By - Muhammad Osama | On - 2023-01-19T00:54:02Z
 30. [7f9..771] Merge pull request #2 from Tabisharaza/osamawork2023 | By - TABISH AYUB RAZA | On - 2023-01-17T13:03:29Z
 31. [630..93d] Updated the Ui according to demand | By - Muhammad Osama | On - 2023-01-17T12:43:36Z
 32. [c25..a76] final | By - tabisharaza@gmail.com | On - 2023-01-16T18:38:17Z
 33. [b3f..0e0] gh-pages | By - tabisharaza@gmail.com | On - 2023-01-16T18:27:10Z
 34. [0c7..7a5] updated | By - tabisharaza@gmail.com | On - 2023-01-16T15:29:04Z
 35. [4d5..874] newupdates | By - tabisharaza@gmail.com | On - 2023-01-16T05:33:41Z
 36. [223..243] updated | By - Tabish | On - 2023-01-11T12:17:26Z
 37. [ee4..0ba] RemovedStaticLocalHostfrom All Files | By - Tabish | On - 2023-01-11T08:46:59Z
 38. [344..1ef] new | By - tabisharaza@gmail.com | On - 2023-01-11T06:32:22Z
 39. [35b..54e] newchanges | By - tabisharaza@gmail.com | On - 2023-01-10T06:08:32Z
 40. [679..a79] working-good | By - tabisharaza@gmail.com | On - 2023-01-09T08:26:46Z
 41. [a7d..0af] gh-pages | By - tabisharaza@gmail.com | On - 2023-01-07T18:45:04Z
 42. [e6c..d72] forlive | By - tabisharaza@gmail.com | On - 2023-01-07T18:15:26Z
 43. [aa1..967] changes | By - tabisharaza@gmail.com | On - 2023-01-07T18:12:51Z
 44. [71b..05a] somechangesfortime | By - tabisharaza@gmail.com | On - 2023-01-05T10:57:51Z
 45. [9d0..1af] eslint done | By - tabisharaza@gmail.com | On - 2023-01-04T13:05:26Z
 46. [d68..b5f] ESLINT DONE | By - tabisharaza@gmail.com | On - 2023-01-04T12:13:37Z
 47. [c2f..7b9] quest-start-stop-working | By - tabisharaza@gmail.com | On - 2023-01-04T12:00:33Z
 48. [b94..412] someCHanges | By - tabisharaza@gmail.com | On - 2023-01-02T04:54:33Z
 49. [1cd..422] mychanges | By - tabisharaza@gmail.com | On - 2022-12-30T12:37:18Z
 50. [ea6..1d5] finalize todays work | By - Usamahafiz8 | On - 2022-12-30T12:36:28Z

# deployed-mapped-contracts

## master


 1. [26e..d9a] deploy: ChainGuardians - Elrond | By - Dima Brook | On - 2023-02-14T10:53:24Z
 2. [b32..5db] NFT Moon Metaverse - Caduceus | By - Dima Brook | On - 2023-02-12T12:54:20Z
 3. [f73..1db] add CryptoSpaceClub - Caduceus | By - Dima Brook | On - 2023-02-12T12:46:25Z
 4. [5db..89e] deploy: W3DNA - Avalanche | By - Dima Brook | On - 2023-02-07T13:15:04Z
 5. [ff3..f07] Merge branch 'master' of https://github.com/XP-NETWORK/deployed-mapped-contracts | By - Dima Brook | On - 2023-02-07T12:47:05Z
 6. [4a4..ddb] update | By - Dima Brook | On - 2023-02-07T12:46:45Z
 7. [3ef..23a] CRYPTOPUNKS - Moonbeam | By - Alex Moshinsky | On - 2023-02-06T09:19:11Z
 8. [cd4..55d] Redeploy: 02.02.2023 - Non Fungible Apes on Polygon | By - Dima Brook | On - 2023-02-02T12:31:05Z
 9. [f73..834] NFT Moon Metaverse (Cards) - Skale | By - Dima Brook | On - 2023-02-01T10:46:27Z
 10. [578..feb] deploy NFT Moon Metaverse - Skale | By - Dima Brook | On - 2023-02-01T09:47:49Z
 11. [4c7..f5e] redeploy: NFT MOON METAVERSE - Secret Network | By - Dima Brook | On - 2023-01-24T12:46:54Z
 12. [f32..0e9] 29.09.2022 - Pontic Land Chest - Polygon pass ownership | By - Dima Brook | On - 2023-01-24T12:29:54Z
 13. [cff..75c] deploy NFT MOON METAVERSE - Secret Network | By - Dima Brook | On - 2023-01-23T13:23:41Z
 14. [4f6..9ff] redeploy: Tegro Dogs - BSC | By - Dima Brook | On - 2023-01-17T17:12:03Z
 15. [ea3..b8f] redeploy: Meta Panthers - BSC | By - Dima Brook | On - 2023-01-17T17:05:59Z
 16. [b2b..f1e] redeploy: Tegro Cats - BSC | By - Dima Brook | On - 2023-01-17T16:48:07Z
 17. [fe4..e62] redeploy: Volted Dragons Sailors Club - BSC | By - Dima Brook | On - 2023-01-17T14:42:54Z
 18. [357..b01] BSC - Volted Dragons Sailors Club | By - Alex Moshinsky | On - 2023-01-16T18:36:42Z
 19. [c84..66e] deploy Caduceus Punks - Polygon | By - Dima Brook | On - 2023-01-16T12:37:44Z
 20. [69e..31e] Billiard Crypto NFT - polygon | By - Alex Moshinsky | On - 2023-01-15T18:10:09Z
 21. [7c5..534] redeployed: ElrondArt - Polygon | By - Dima Brook | On - 2023-01-11T11:14:51Z
 22. [cf4..4fc] redeploy Cosmos Apes - Polygon | By - Dima Brook | On - 2023-01-11T10:56:12Z
 23. [840..da3] redeploy CryptoSpaceClub - VeChain | By - Dima Brook | On - 2023-01-11T08:04:16Z
 24. [46a..980] add 721OpenSeaPlus.sol | By - Dima Brook | On - 2023-01-10T09:32:51Z
 25. [2cb..72c] redeploy 138->139 Bithoven (BitWhiteGold) - BSC | By - Dima Brook | On - 2023-01-10T09:00:37Z
 26. [4d2..0cf] deploy: 138 Bithoven (BitWhiteGold) - BSC | By - Dima Brook | On - 2023-01-09T10:46:18Z
 27. [863..1d7] deploy: 137 Bithoven (Gold) - BSC | By - Dima Brook | On - 2023-01-09T10:38:26Z
 28. [5e3..05a] deploy: 136 Bithoven - BSC | By - Dima Brook | On - 2023-01-09T09:42:57Z
 29. [2fa..d28] deploy: NFT Moon Metaverse (ID Card) - BSC | By - Dima Brook | On - 2023-01-05T08:28:02Z
 30. [7b9..bbc] redeploy: NFT Moon Metaverse (Land) - BSC | By - Dima Brook | On - 2023-01-05T08:04:25Z
 31. [5d8..26f] add: BartersERC1155 - Polygon | By - Dima Brook | On - 2023-01-04T15:36:08Z
 32. [924..1f6] redeploy 'Powerful Dragons' Fantom-Polygon | By - Dima Brook | On - 2023-01-04T15:06:01Z
 33. [a3e..cc4] redeploy Barters Velas-Polygon | By - Dima Brook | On - 2023-01-04T14:41:33Z
 34. [484..56a] Add: TON Frogs - BSC | By - Dima Brook | On - 2023-01-03T13:38:01Z
 35. [dcc..5e4] add: Redeployed Awokensages | By - Dima Brook | On - 2023-01-03T13:16:46Z
 36. [476..749] Powerful Dragons - Polygon | By - Alex Moshinsky | On - 2023-01-02T17:23:26Z
 37. [0ee..edf] add: 02.01.2022 - Technomaniacs Polygon | By - Dima Brook | On - 2023-01-02T15:06:38Z
 38. [05d..618] add: 02.01.2022 - Technomaniacs Polygon | By - Dima Brook | On - 2023-01-02T15:05:36Z
 39. [d42..054] velas - BartersERC115512:2 | By - Alex Moshinsky | On - 2022-12-26T12:46:16Z
 40. [ba2..bf1] Velas - Barters | By - Alex Moshinsky | On - 2022-12-26T12:32:36Z
 41. [292..d33] a | By - Alex Moshinsky | On - 2022-12-24T12:02:09Z
 42. [abc..0a5] BSC - NFT Moon Metaverse (Land) | By - Alex Moshinsky | On - 2022-12-24T12:01:44Z
 43. [67f..a05] add: target NFT staking | By - Dima Brook | On - 2022-12-21T12:50:10Z
 44. [d46..9c2] fix XP.NETWORK Staking NFTs | By - Dima Brook | On - 2022-12-19T15:27:05Z
 45. [da3..7ae] add: XP.NETWORK Staking NFTs | By - Dima Brook | On - 2022-12-12T19:01:14Z
 46. [b23..983] add: MoonbuilderNFT - Avalanche | By - Dima Brook | On - 2022-12-07T13:52:06Z
 47. [305..8ee] Caduceus - NFT Moon Metaverse | By - Alex Moshinsky | On - 2022-12-07T09:57:19Z
 48. [497..554] Update XPNFT1155OpenSea.sol | By - Dima Brook | On - 2022-12-07T08:06:27Z
 49. [44c..dba] Update XPNFT1155OpenSea.sol | By - Dima Brook | On - 2022-12-06T17:24:40Z
 50. [ff1..fce] add: mainnet Cheerslaned - Polygon | By - Dima Brook | On - 2022-12-05T17:55:18Z

# explorer-scraper

## addDest


 1. [313..ed4] Delete mainnetEnv | By - rony derra | On - 2023-01-01T18:25:59Z
 2. [dd0..a08] Delete testnetEnv | By - rony derra | On - 2023-01-01T18:25:52Z
 3. [443..370] mainnetEnv | By - rony derra | On - 2023-01-01T18:25:17Z
 4. [bb0..10b] MainNetRpcUri | By - rony derra | On - 2023-01-01T18:24:41Z
 5. [47b..bda] destinationScraper | By - rony derra | On - 2022-12-29T09:56:11Z
 6. [0f1..785] destinationScraper | By - rony derra | On - 2022-12-27T14:33:35Z
 7. [30f..94c] destinationScraper | By - rony derra | On - 2022-12-27T14:23:55Z
 8. [abb..bc0] elrondDest | By - rony derra | On - 2022-12-26T09:11:59Z
 9. [78b..801] updateLastBlock | By - rony derra | On - 2022-12-26T09:07:52Z
 10. [58e..092] listen | By - rony derra | On - 2022-12-26T08:52:35Z
 11. [83f..af8] setMaxListeners | By - rony derra | On - 2022-12-25T16:29:36Z
 12. [d24..f6e] log | By - rony derra | On - 2022-12-25T14:36:53Z
 13. [0bd..c31] elrondDest | By - rony derra | On - 2022-12-25T14:21:41Z
 14. [c94..6f5] vechain | By - rony derra | On - 2022-12-24T11:58:51Z
 15. [b13..a32] cron | By - rony derra | On - 2022-12-23T18:39:46Z
 16. [56c..198] sdf | By - rony derra | On - 2022-12-22T16:19:59Z
 17. [328..83e] elrond dest | By - rony derra | On - 2022-12-22T15:38:54Z
 18. [318..de7] VELAS | By - rony derra | On - 2022-12-20T10:44:39Z
 19. [4fa..ad0] GNOSIS | By - rony derra | On - 2022-12-20T10:25:15Z
 20. [cbc..b70] console.log("setTimeout!!!", update?.value); | By - rony derra | On - 2022-12-20T10:15:35Z
 21. [bb9..db8] setTimeout | By - rony derra | On - 2022-12-20T10:13:59Z
 22. [c38..05c] logAndTelegram | By - rony derra | On - 2022-12-20T09:29:32Z
 23. [79f..5f9] found | By - rony derra | On - 2022-12-20T09:11:08Z
 24. [836..84e] setTimeout | By - rony derra | On - 2022-12-20T08:44:42Z
 25. [08b..670] asdf | By - rony derra | On - 2022-12-19T13:55:46Z
 26. [ad0..a7a] asdf | By - rony derra | On - 2022-12-19T13:54:20Z
 27. [0c4..0de] cron | By - rony derra | On - 2022-12-19T13:52:45Z
 28. [9a5..756] cron | By - rony derra | On - 2022-12-19T13:46:45Z
 29. [a23..ee2] cron | By - rony derra | On - 2022-12-19T13:31:47Z
 30. [6b6..eca] updateDestBlock | By - rony derra | On - 2022-12-19T13:20:43Z
 31. [bff..e2b] updateDestBlock | By - rony derra | On - 2022-12-19T13:07:35Z
 32. [e61..8b2] telegram | By - rony derra | On - 2022-12-19T11:51:19Z
 33. [a1e..b00] parse_Data | By - rony derra | On - 2022-12-19T11:49:30Z
 34. [4f1..91c] getBlock | By - rony derra | On - 2022-12-19T10:55:06Z
 35. [579..6e6] console | By - rony derra | On - 2022-12-19T10:22:15Z
 36. [7f0..aea] sendTelegramFailedTrx | By - rony derra | On - 2022-12-19T09:55:53Z
 37. [7f4..fec] string | By - rony derra | On - 2022-12-19T09:53:55Z
 38. [f12..bc3] getWeb3Provider | By - rony derra | On - 2022-12-19T09:48:35Z
 39. [35b..cd8] logAndTelegram | By - rony derra | On - 2022-12-19T09:47:07Z
 40. [8db..1dc] asdf | By - rony derra | On - 2022-12-19T09:15:02Z
 41. [a57..4e0] logAndTelegram | By - rony derra | On - 2022-12-19T08:13:57Z
 42. [8fb..821] asdf | By - rony derra | On - 2022-12-19T08:03:11Z
 43. [44b..b0f] updateDestBlock | By - rony derra | On - 2022-12-19T07:43:45Z
 44. [582..f1f] vechain | By - rony derra | On - 2022-12-18T08:35:01Z
 45. [740..262] telegram | By - rony derra | On - 2022-12-18T07:36:52Z
 46. [03a..46f] BSC | By - rony derra | On - 2022-12-18T07:28:12Z
 47. [659..644] asdf | By - rony derra | On - 2022-12-15T16:17:57Z
 48. [24b..fa0] sdfg | By - rony derra | On - 2022-12-15T15:41:20Z
 49. [a03..a71] ghkj | By - rony derra | On - 2022-12-15T15:38:16Z
 50. [0ea..08c] asdf | By - rony derra | On - 2022-12-15T15:36:14Z

## addTrx


 1. [b67..4e9] chain | By - rony derra | On - 2023-01-18T14:26:08Z
 2. [3ae..976] server | By - rony derra | On - 2023-01-02T08:30:46Z
 3. [0f9..c7c] vechian | By - rony derra | On - 2023-01-02T08:06:58Z
 4. [92d..158] asdf | By - rony derra | On - 2023-01-02T07:36:38Z
 5. [935..d04] git ignore | By - rony derra | On - 2023-01-01T14:15:45Z
 6. [414..2d3] add trx | By - rony derra | On - 2023-01-01T14:15:14Z
 7. [08a..61c] ass | By - rony derra | On - 2022-12-15T11:51:13Z
 8. [087..830] asd | By - rony derra | On - 2022-12-15T08:03:00Z
 9. [8ee..f26] a | By - rony derra | On - 2022-12-11T07:36:55Z
 10. [684..ed5] fromBlock | By - rony derra | On - 2022-12-08T16:14:34Z
 11. [2a5..ad6] sft amount | By - rony derra | On - 2022-12-08T16:12:09Z
 12. [ac4..7ad] listen | By - rony derra | On - 2022-12-08T15:36:12Z
 13. [d09..ae4] includes | By - rony derra | On - 2022-12-08T15:35:05Z
 14. [7bf..64a] not to update block | By - rony derra | On - 2022-12-08T15:18:55Z
 15. [d97..351] Merge branch 'master' into addTrx | By - rony derra | On - 2022-12-08T14:57:54Z
 16. [ec9..710] CMP | By - rony derra | On - 2022-12-08T13:13:53Z
 17. [960..915] getDestHashes | By - rony derra | On - 2022-12-08T11:27:18Z
 18. [c9c..9ec] getDestHashes | By - rony derra | On - 2022-12-08T11:26:31Z
 19. [b28..6c8] enterd | By - rony derra | On - 2022-11-30T08:53:32Z
 20. [d30..1c3] sendValidatorMessage | By - rony derra | On - 2022-11-28T12:19:23Z
 21. [0b0..98c] validatorScraper | By - rony derra | On - 2022-11-28T12:19:16Z
 22. [6b2..b15] validatorScraper | By - rony derra | On - 2022-11-28T12:19:08Z
 23. [b62..393] EVM_VALIDATORS | By - rony derra | On - 2022-11-28T12:19:00Z
 24. [d55..bbf] formatting | By - rony derra | On - 2022-11-27T15:21:12Z
 25. [377..d6c] abeychain coll data | By - rony derra | On - 2022-11-27T14:55:09Z
 26. [0ac..6d8] bsc error | By - rony derra | On - 2022-11-27T07:54:24Z
 27. [a74..32a] cron | By - rony derra | On - 2022-11-27T07:42:15Z
 28. [5df..7f1] cron to 1 minut | By - rony derra | On - 2022-11-24T15:19:09Z
 29. [4bb..43e] getCollectionFees | By - rony derra | On - 2022-11-23T17:22:54Z
 30. [bc6..a41] getCollectionFees | By - rony derra | On - 2022-11-23T16:06:24Z
 31. [337..8a0] vechain | By - rony derra | On - 2022-11-17T14:37:46Z
 32. [618..55f] original uri | By - rony derra | On - 2022-11-17T08:05:43Z
 33. [181..61f] ton chain nonce | By - rony derra | On - 2022-11-17T08:01:40Z
 34. [cbf..79e] ton | By - rony derra | On - 2022-11-13T13:54:44Z
 35. [598..c23] abeychain | By - rony derra | On - 2022-11-13T09:33:05Z
 36. [e7c..4b3] add trx branch | By - rony derra | On - 2022-11-13T09:21:28Z
 37. [19c..e21] timing | By - rony derra | On - 2022-11-13T08:37:27Z
 38. [748..534] abeychain | By - rony derra | On - 2022-11-13T08:30:53Z
 39. [48f..6ae] ton | By - rony derra | On - 2022-11-07T11:56:19Z
 40. [b47..da6] . | By - rony derra | On - 2022-10-25T12:17:13Z
 41. [588..b12] last moment validation | By - rony derra | On - 2022-10-24T20:05:15Z
 42. [b6d..e1e] algorand coll name | By - ronyderra | On - 2022-10-03T11:40:21Z
 43. [e4b..850] . | By - ronyderra | On - 2022-10-02T14:30:43Z
 44. [235..d68] algorand router | By - ronyderra | On - 2022-09-28T07:45:19Z
 45. [e66..07f] new | By - ronyderra | On - 2022-09-20T14:27:19Z
 46. [8aa..0b3] telegram | By - ronyderra | On - 2022-09-20T11:48:42Z
 47. [011..796] scraper | By - ronyderra | On - 2022-09-20T11:45:51Z
 48. [220..4d6] godwoken | By - ronyderra | On - 2022-09-20T11:18:22Z
 49. [e0e..1e1] cron | By - ronyderra | On - 2022-09-19T07:36:17Z
 50. [7d7..dc1] TezosCollectionData rout | By - ronyderra | On - 2022-09-19T07:30:58Z

## depTestnet


 1. [185..f5f] testnet telegram | By - rony derra | On - 2023-01-04T13:56:08Z
 2. [bea..60d] abeychain | By - rony derra | On - 2023-01-04T08:32:08Z
 3. [50b..a89] caduceus | By - rony derra | On - 2023-01-04T08:26:36Z
 4. [0c0..96a] getWeb3Provider | By - rony derra | On - 2023-01-04T08:21:03Z
 5. [3e3..10c] logs | By - rony derra | On - 2023-01-04T08:17:41Z
 6. [599..d0b] skale | By - rony derra | On - 2023-01-04T08:03:05Z
 7. [57d..ec7] getWeb3Provider | By - rony derra | On - 2023-01-03T14:12:46Z
 8. [8e2..596] handleCatch | By - rony derra | On - 2023-01-03T14:02:12Z
 9. [7fb..5ba] Web3 | By - rony derra | On - 2023-01-03T13:56:43Z
 10. [7b3..6e7] Minter__factory | By - rony derra | On - 2023-01-03T13:40:27Z
 11. [051..afb] getWeb3Provider | By - rony derra | On - 2023-01-03T13:34:36Z
 12. [40f..c13] log | By - rony derra | On - 2023-01-03T12:55:21Z
 13. [e0f..0ad] vechain | By - rony derra | On - 2023-01-03T12:33:21Z
 14. [f53..7fd] VECHAIN | By - rony derra | On - 2023-01-02T12:28:14Z
 15. [be3..bac] FUSE | By - rony derra | On - 2023-01-02T12:18:16Z
 16. [fc9..82e] express | By - rony derra | On - 2023-01-02T11:54:43Z
 17. [773..2b5] listen | By - rony derra | On - 2023-01-02T11:54:08Z
 18. [6e1..6fc] listen | By - rony derra | On - 2023-01-02T11:53:08Z
 19. [a39..ba1] VECHAIN | By - rony derra | On - 2023-01-02T11:52:39Z
 20. [f25..6a7] Merge remote-tracking branch 'origin' into depTestnet | By - rony derra | On - 2023-01-02T11:49:48Z
 21. [b81..f79] cron | By - rony derra | On - 2023-01-02T11:09:30Z
 22. [e72..ef9] evmScraper | By - rony derra | On - 2023-01-02T11:02:43Z
 23. [e53..bb9] parse_Data | By - rony derra | On - 2023-01-02T10:58:55Z
 24. [7bf..7a5] evmScraper | By - rony derra | On - 2023-01-02T10:52:47Z
 25. [ea2..f7f] asdf | By - rony derra | On - 2023-01-02T10:45:29Z
 26. [1a1..658] getPastLogs | By - rony derra | On - 2023-01-02T10:43:21Z
 27. [0a3..93e] getPastLogs | By - rony derra | On - 2023-01-02T10:43:02Z
 28. [624..6a6] parse_Data | By - rony derra | On - 2023-01-02T10:29:56Z
 29. [4e8..212] parse_Data | By - rony derra | On - 2023-01-02T10:21:56Z
 30. [66f..32f] updateBlock | By - rony derra | On - 2023-01-02T10:12:49Z
 31. [c3c..da0] updateBlock | By - rony derra | On - 2023-01-01T17:08:14Z
 32. [e22..c37] updateLastBlock | By - rony derra | On - 2023-01-01T15:43:51Z
 33. [056..78f] v | By - rony derra | On - 2023-01-01T15:11:47Z
 34. [b03..04d] calcDollarFees | By - rony derra | On - 2023-01-01T14:16:17Z
 35. [18c..f15] port | By - rony derra | On - 2023-01-01T13:49:35Z
 36. [669..4b9] PORT | By - rony derra | On - 2023-01-01T13:48:03Z
 37. [5b5..2b7] VECHAIN | By - rony derra | On - 2023-01-01T13:38:44Z
 38. [002..140] elrond | By - rony derra | On - 2023-01-01T13:27:46Z
 39. [fed..e80] connect | By - rony derra | On - 2023-01-01T13:24:19Z
 40. [a80..7d1] config | By - rony derra | On - 2023-01-01T12:56:07Z
 41. [f70..64a] cron | By - rony derra | On - 2023-01-01T12:48:11Z
 42. [d88..deb] connect | By - rony derra | On - 2023-01-01T12:44:49Z
 43. [9a2..49d] connect | By - rony derra | On - 2023-01-01T12:32:59Z
 44. [c7d..587] cron | By - rony derra | On - 2022-12-29T10:57:04Z
 45. [6fe..3e5] cron | By - rony derra | On - 2022-12-29T10:03:03Z
 46. [fd5..724] elrondDepNotifier | By - rony derra | On - 2022-12-25T18:01:01Z
 47. [de2..495] elrondDep | By - rony derra | On - 2022-12-25T16:47:22Z
 48. [6f5..59b] CADUCEUS | By - rony derra | On - 2022-12-25T16:47:12Z
 49. [6da..a11] evmScraper | By - rony derra | On - 2022-12-25T16:46:55Z
 50. [c66..6d0] setMaxListeners | By - rony derra | On - 2022-12-25T16:30:32Z

## destScraper


 1. [e34..1d2] await | By - rony derra | On - 2023-02-14T08:53:13Z
 2. [27c..05f] update | By - rony derra | On - 2023-02-14T08:50:21Z
 3. [7eb..519] targetAddress | By - rony derra | On - 2023-02-14T07:51:24Z
 4. [2ce..bde] clientAppSocket | By - rony derra | On - 2023-02-13T18:51:07Z
 5. [b59..54d] tron | By - rony derra | On - 2023-02-13T18:42:15Z
 6. [b12..6aa] blockSubscribe | By - rony derra | On - 2023-02-13T18:28:46Z
 7. [258..08e] tron | By - rony derra | On - 2023-02-13T18:26:34Z
 8. [48b..525] tron | By - rony derra | On - 2023-02-13T18:24:58Z
 9. [005..af6] OKC | By - rony derra | On - 2023-01-09T13:50:30Z
 10. [52e..60b] gnosis | By - rony derra | On - 2023-01-02T16:14:04Z
 11. [6ee..19c] GNOSIS | By - rony derra | On - 2023-01-02T16:04:14Z
 12. [039..976] cron | By - rony derra | On - 2023-01-02T15:37:05Z
 13. [ec6..a89] a | By - rony derra | On - 2023-01-02T15:33:52Z
 14. [395..2f9] log | By - rony derra | On - 2023-01-02T15:22:17Z
 15. [276..558] originalData | By - rony derra | On - 2023-01-02T15:16:10Z
 16. [793..a90] setTimeout | By - rony derra | On - 2023-01-02T15:13:36Z
 17. [c13..e0a] getTrx | By - rony derra | On - 2023-01-02T14:55:55Z
 18. [1f7..0b6] exsit | By - rony derra | On - 2023-01-02T14:51:09Z
 19. [dfe..6b0] destinationScraper | By - rony derra | On - 2023-01-02T14:42:48Z
 20. [5b5..f74] destinationScraper | By - rony derra | On - 2023-01-02T14:22:20Z
 21. [2b1..94b] asdf | By - rony derra | On - 2023-01-02T14:12:34Z
 22. [90e..234] destinationScraper | By - rony derra | On - 2023-01-02T14:11:50Z
 23. [454..ee9] asdf | By - rony derra | On - 2023-01-02T13:49:44Z
 24. [65b..96b] releventTrxs | By - rony derra | On - 2023-01-02T13:41:25Z
 25. [33a..9f5] destinationScraper | By - rony derra | On - 2023-01-01T17:46:02Z
 26. [6aa..cb3] destinationScraper | By - rony derra | On - 2023-01-01T17:37:10Z
 27. [970..a2a] connect | By - rony derra | On - 2023-01-01T17:28:10Z
 28. [5f9..edd] connect | By - rony derra | On - 2023-01-01T17:27:33Z
 29. [5ea..58c] server | By - rony derra | On - 2023-01-01T17:24:01Z
 30. [34a..6e0] connect | By - rony derra | On - 2023-01-01T17:23:07Z
 31. [9ac..d4b] ignore | By - rony derra | On - 2023-01-01T17:13:41Z
 32. [c34..102] getOrThrow | By - rony derra | On - 2023-01-01T17:13:12Z
 33. [b79..b3e] destinationScraper | By - rony derra | On - 2022-12-29T13:06:28Z
 34. [d03..973] caduceus | By - rony derra | On - 2022-12-29T13:04:53Z
 35. [545..690] VECHAIN | By - rony derra | On - 2022-12-29T10:09:26Z
 36. [abb..bc0] elrondDest | By - rony derra | On - 2022-12-26T09:11:59Z
 37. [78b..801] updateLastBlock | By - rony derra | On - 2022-12-26T09:07:52Z
 38. [58e..092] listen | By - rony derra | On - 2022-12-26T08:52:35Z
 39. [83f..af8] setMaxListeners | By - rony derra | On - 2022-12-25T16:29:36Z
 40. [d24..f6e] log | By - rony derra | On - 2022-12-25T14:36:53Z
 41. [0bd..c31] elrondDest | By - rony derra | On - 2022-12-25T14:21:41Z
 42. [c94..6f5] vechain | By - rony derra | On - 2022-12-24T11:58:51Z
 43. [b13..a32] cron | By - rony derra | On - 2022-12-23T18:39:46Z
 44. [56c..198] sdf | By - rony derra | On - 2022-12-22T16:19:59Z
 45. [328..83e] elrond dest | By - rony derra | On - 2022-12-22T15:38:54Z
 46. [318..de7] VELAS | By - rony derra | On - 2022-12-20T10:44:39Z
 47. [4fa..ad0] GNOSIS | By - rony derra | On - 2022-12-20T10:25:15Z
 48. [cbc..b70] console.log("setTimeout!!!", update?.value); | By - rony derra | On - 2022-12-20T10:15:35Z
 49. [bb9..db8] setTimeout | By - rony derra | On - 2022-12-20T10:13:59Z
 50. [c38..05c] logAndTelegram | By - rony derra | On - 2022-12-20T09:29:32Z

## destScreaperImprove


 1. [890..111] asd | By - rony derra | On - 2023-01-02T08:31:41Z
 2. [768..14e] formatting | By - rony derra | On - 2023-01-01T11:55:22Z
 3. [d41..ada] destinationScraper | By - rony derra | On - 2023-01-01T11:53:45Z
 4. [9a4..f6f] improve | By - Alex Moshinsky | On - 2023-01-01T11:45:30Z
 5. [b79..b3e] destinationScraper | By - rony derra | On - 2022-12-29T13:06:28Z
 6. [d03..973] caduceus | By - rony derra | On - 2022-12-29T13:04:53Z
 7. [545..690] VECHAIN | By - rony derra | On - 2022-12-29T10:09:26Z
 8. [abb..bc0] elrondDest | By - rony derra | On - 2022-12-26T09:11:59Z
 9. [78b..801] updateLastBlock | By - rony derra | On - 2022-12-26T09:07:52Z
 10. [58e..092] listen | By - rony derra | On - 2022-12-26T08:52:35Z
 11. [83f..af8] setMaxListeners | By - rony derra | On - 2022-12-25T16:29:36Z
 12. [d24..f6e] log | By - rony derra | On - 2022-12-25T14:36:53Z
 13. [0bd..c31] elrondDest | By - rony derra | On - 2022-12-25T14:21:41Z
 14. [c94..6f5] vechain | By - rony derra | On - 2022-12-24T11:58:51Z
 15. [b13..a32] cron | By - rony derra | On - 2022-12-23T18:39:46Z
 16. [56c..198] sdf | By - rony derra | On - 2022-12-22T16:19:59Z
 17. [328..83e] elrond dest | By - rony derra | On - 2022-12-22T15:38:54Z
 18. [318..de7] VELAS | By - rony derra | On - 2022-12-20T10:44:39Z
 19. [4fa..ad0] GNOSIS | By - rony derra | On - 2022-12-20T10:25:15Z
 20. [cbc..b70] console.log("setTimeout!!!", update?.value); | By - rony derra | On - 2022-12-20T10:15:35Z
 21. [bb9..db8] setTimeout | By - rony derra | On - 2022-12-20T10:13:59Z
 22. [c38..05c] logAndTelegram | By - rony derra | On - 2022-12-20T09:29:32Z
 23. [79f..5f9] found | By - rony derra | On - 2022-12-20T09:11:08Z
 24. [836..84e] setTimeout | By - rony derra | On - 2022-12-20T08:44:42Z
 25. [08b..670] asdf | By - rony derra | On - 2022-12-19T13:55:46Z
 26. [ad0..a7a] asdf | By - rony derra | On - 2022-12-19T13:54:20Z
 27. [0c4..0de] cron | By - rony derra | On - 2022-12-19T13:52:45Z
 28. [9a5..756] cron | By - rony derra | On - 2022-12-19T13:46:45Z
 29. [a23..ee2] cron | By - rony derra | On - 2022-12-19T13:31:47Z
 30. [6b6..eca] updateDestBlock | By - rony derra | On - 2022-12-19T13:20:43Z
 31. [bff..e2b] updateDestBlock | By - rony derra | On - 2022-12-19T13:07:35Z
 32. [e61..8b2] telegram | By - rony derra | On - 2022-12-19T11:51:19Z
 33. [a1e..b00] parse_Data | By - rony derra | On - 2022-12-19T11:49:30Z
 34. [4f1..91c] getBlock | By - rony derra | On - 2022-12-19T10:55:06Z
 35. [579..6e6] console | By - rony derra | On - 2022-12-19T10:22:15Z
 36. [7f0..aea] sendTelegramFailedTrx | By - rony derra | On - 2022-12-19T09:55:53Z
 37. [7f4..fec] string | By - rony derra | On - 2022-12-19T09:53:55Z
 38. [f12..bc3] getWeb3Provider | By - rony derra | On - 2022-12-19T09:48:35Z
 39. [35b..cd8] logAndTelegram | By - rony derra | On - 2022-12-19T09:47:07Z
 40. [8db..1dc] asdf | By - rony derra | On - 2022-12-19T09:15:02Z
 41. [a57..4e0] logAndTelegram | By - rony derra | On - 2022-12-19T08:13:57Z
 42. [8fb..821] asdf | By - rony derra | On - 2022-12-19T08:03:11Z
 43. [44b..b0f] updateDestBlock | By - rony derra | On - 2022-12-19T07:43:45Z
 44. [582..f1f] vechain | By - rony derra | On - 2022-12-18T08:35:01Z
 45. [740..262] telegram | By - rony derra | On - 2022-12-18T07:36:52Z
 46. [03a..46f] BSC | By - rony derra | On - 2022-12-18T07:28:12Z
 47. [659..644] asdf | By - rony derra | On - 2022-12-15T16:17:57Z
 48. [24b..fa0] sdfg | By - rony derra | On - 2022-12-15T15:41:20Z
 49. [a03..a71] ghkj | By - rony derra | On - 2022-12-15T15:38:16Z
 50. [0ea..08c] asdf | By - rony derra | On - 2022-12-15T15:36:14Z

## master


 1. [9a3..c49] getWeb3Provider | By - rony derra | On - 2023-02-06T12:45:19Z
 2. [b89..fd2] caduceus | By - rony derra | On - 2023-01-20T11:53:36Z
 3. [456..47b] no logs | By - rony derra | On - 2023-01-18T15:07:20Z
 4. [d95..c73] eventDocument | By - rony derra | On - 2023-01-18T15:03:05Z
 5. [ebc..35f] do | By - rony derra | On - 2023-01-17T08:34:03Z
 6. [0a5..b8b] getPastLogs | By - rony derra | On - 2023-01-16T09:30:41Z
 7. [aba..827] amount | By - rony derra | On - 2023-01-16T09:07:16Z
 8. [53e..e68] minToBlock | By - rony derra | On - 2023-01-16T09:02:01Z
 9. [e45..bca] caduceus | By - rony derra | On - 2023-01-16T08:58:34Z
 10. [e84..c00] caduceus | By - rony derra | On - 2023-01-15T17:15:35Z
 11. [dba..16d] caduceus | By - rony derra | On - 2023-01-15T14:50:02Z
 12. [db1..f53] OKC | By - rony derra | On - 2023-01-09T13:15:49Z
 13. [239..e63] sftAmount | By - rony derra | On - 2023-01-04T15:56:55Z
 14. [465..e0f] Merge branch 'depTestnet' | By - rony derra | On - 2023-01-04T08:35:55Z
 15. [bea..60d] abeychain | By - rony derra | On - 2023-01-04T08:32:08Z
 16. [50b..a89] caduceus | By - rony derra | On - 2023-01-04T08:26:36Z
 17. [0c0..96a] getWeb3Provider | By - rony derra | On - 2023-01-04T08:21:03Z
 18. [3e3..10c] logs | By - rony derra | On - 2023-01-04T08:17:41Z
 19. [599..d0b] skale | By - rony derra | On - 2023-01-04T08:03:05Z
 20. [fce..919] Merge branch 'depTestnet' | By - rony derra | On - 2023-01-03T14:23:23Z
 21. [57d..ec7] getWeb3Provider | By - rony derra | On - 2023-01-03T14:12:46Z
 22. [8e2..596] handleCatch | By - rony derra | On - 2023-01-03T14:02:12Z
 23. [7fb..5ba] Web3 | By - rony derra | On - 2023-01-03T13:56:43Z
 24. [7b3..6e7] Minter__factory | By - rony derra | On - 2023-01-03T13:40:27Z
 25. [051..afb] getWeb3Provider | By - rony derra | On - 2023-01-03T13:34:36Z
 26. [934..dd3] evmScraper | By - rony derra | On - 2023-01-03T13:15:18Z
 27. [7e3..e88] VECHAIN | By - rony derra | On - 2023-01-03T13:07:06Z
 28. [302..c4a] Merge branch 'depTestnet' | By - rony derra | On - 2023-01-03T13:06:46Z
 29. [40f..c13] log | By - rony derra | On - 2023-01-03T12:55:21Z
 30. [d37..334] FUSE | By - rony derra | On - 2023-01-03T12:38:04Z
 31. [e0f..0ad] vechain | By - rony derra | On - 2023-01-03T12:33:21Z
 32. [f53..7fd] VECHAIN | By - rony derra | On - 2023-01-02T12:28:14Z
 33. [be3..bac] FUSE | By - rony derra | On - 2023-01-02T12:18:16Z
 34. [fc9..82e] express | By - rony derra | On - 2023-01-02T11:54:43Z
 35. [773..2b5] listen | By - rony derra | On - 2023-01-02T11:54:08Z
 36. [6e1..6fc] listen | By - rony derra | On - 2023-01-02T11:53:08Z
 37. [a39..ba1] VECHAIN | By - rony derra | On - 2023-01-02T11:52:39Z
 38. [f25..6a7] Merge remote-tracking branch 'origin' into depTestnet | By - rony derra | On - 2023-01-02T11:49:48Z
 39. [b81..f79] cron | By - rony derra | On - 2023-01-02T11:09:30Z
 40. [e72..ef9] evmScraper | By - rony derra | On - 2023-01-02T11:02:43Z
 41. [e53..bb9] parse_Data | By - rony derra | On - 2023-01-02T10:58:55Z
 42. [7bf..7a5] evmScraper | By - rony derra | On - 2023-01-02T10:52:47Z
 43. [ea2..f7f] asdf | By - rony derra | On - 2023-01-02T10:45:29Z
 44. [1a1..658] getPastLogs | By - rony derra | On - 2023-01-02T10:43:21Z
 45. [0a3..93e] getPastLogs | By - rony derra | On - 2023-01-02T10:43:02Z
 46. [624..6a6] parse_Data | By - rony derra | On - 2023-01-02T10:29:56Z
 47. [4e8..212] parse_Data | By - rony derra | On - 2023-01-02T10:21:56Z
 48. [66f..32f] updateBlock | By - rony derra | On - 2023-01-02T10:12:49Z
 49. [c3c..da0] updateBlock | By - rony derra | On - 2023-01-01T17:08:14Z
 50. [e22..c37] updateLastBlock | By - rony derra | On - 2023-01-01T15:43:51Z

## testnet


 1. [a2a..65b] contractData | By - rony derra | On - 2022-12-04T14:41:07Z
 2. [b28..6c8] enterd | By - rony derra | On - 2022-11-30T08:53:32Z
 3. [d30..1c3] sendValidatorMessage | By - rony derra | On - 2022-11-28T12:19:23Z
 4. [0b0..98c] validatorScraper | By - rony derra | On - 2022-11-28T12:19:16Z
 5. [6b2..b15] validatorScraper | By - rony derra | On - 2022-11-28T12:19:08Z
 6. [b62..393] EVM_VALIDATORS | By - rony derra | On - 2022-11-28T12:19:00Z
 7. [d55..bbf] formatting | By - rony derra | On - 2022-11-27T15:21:12Z
 8. [377..d6c] abeychain coll data | By - rony derra | On - 2022-11-27T14:55:09Z
 9. [0ac..6d8] bsc error | By - rony derra | On - 2022-11-27T07:54:24Z
 10. [a74..32a] cron | By - rony derra | On - 2022-11-27T07:42:15Z
 11. [5df..7f1] cron to 1 minut | By - rony derra | On - 2022-11-24T15:19:09Z
 12. [4bb..43e] getCollectionFees | By - rony derra | On - 2022-11-23T17:22:54Z
 13. [bc6..a41] getCollectionFees | By - rony derra | On - 2022-11-23T16:06:24Z
 14. [337..8a0] vechain | By - rony derra | On - 2022-11-17T14:37:46Z
 15. [618..55f] original uri | By - rony derra | On - 2022-11-17T08:05:43Z
 16. [181..61f] ton chain nonce | By - rony derra | On - 2022-11-17T08:01:40Z
 17. [cbf..79e] ton | By - rony derra | On - 2022-11-13T13:54:44Z
 18. [598..c23] abeychain | By - rony derra | On - 2022-11-13T09:33:05Z
 19. [19c..e21] timing | By - rony derra | On - 2022-11-13T08:37:27Z
 20. [748..534] abeychain | By - rony derra | On - 2022-11-13T08:30:53Z
 21. [48f..6ae] ton | By - rony derra | On - 2022-11-07T11:56:19Z
 22. [b47..da6] . | By - rony derra | On - 2022-10-25T12:17:13Z
 23. [588..b12] last moment validation | By - rony derra | On - 2022-10-24T20:05:15Z
 24. [b6d..e1e] algorand coll name | By - ronyderra | On - 2022-10-03T11:40:21Z
 25. [e4b..850] . | By - ronyderra | On - 2022-10-02T14:30:43Z
 26. [235..d68] algorand router | By - ronyderra | On - 2022-09-28T07:45:19Z
 27. [e66..07f] new | By - ronyderra | On - 2022-09-20T14:27:19Z
 28. [8aa..0b3] telegram | By - ronyderra | On - 2022-09-20T11:48:42Z
 29. [011..796] scraper | By - ronyderra | On - 2022-09-20T11:45:51Z
 30. [220..4d6] godwoken | By - ronyderra | On - 2022-09-20T11:18:22Z
 31. [e0e..1e1] cron | By - ronyderra | On - 2022-09-19T07:36:17Z
 32. [7d7..dc1] TezosCollectionData rout | By - ronyderra | On - 2022-09-19T07:30:58Z
 33. [c48..a8f] . | By - ronyderra | On - 2022-09-18T13:20:15Z
 34. [d98..9ef] . | By - ronyderra | On - 2022-09-18T13:19:13Z
 35. [21f..8fe] catch | By - ronyderra | On - 2022-09-18T12:41:35Z
 36. [b25..9fb] getEvmCollectionName | By - ronyderra | On - 2022-09-18T12:40:19Z
 37. [0aa..a95] router | By - ronyderra | On - 2022-09-18T12:40:13Z
 38. [0e9..cea] controller index | By - ronyderra | On - 2022-09-18T12:40:04Z
 39. [3e2..ad5] getEvmDestActionId | By - ronyderra | On - 2022-09-18T12:06:53Z
 40. [6dd..e3a] import router | By - ronyderra | On - 2022-09-18T11:21:39Z
 41. [e19..3f2] mport { elegantUnpair, elegantPair } from "./actionId.js" | By - ronyderra | On - 2022-09-18T11:21:03Z
 42. [160..0b6] elegantUnpair ,elegantPair | By - ronyderra | On - 2022-09-18T11:20:49Z
 43. [615..bb8] getEvmDestActionId | By - ronyderra | On - 2022-09-18T11:20:38Z
 44. [db7..c69] minter abi | By - ronyderra | On - 2022-09-18T11:20:24Z
 45. [732..344] router | By - ronyderra | On - 2022-09-18T11:20:14Z
 46. [d84..ef4] . | By - ronyderra | On - 2022-09-18T08:26:15Z
 47. [c40..0ba] algorand scraper | By - ronyderra | On - 2022-09-18T08:25:52Z
 48. [e8f..bfd] + | By - ronyderra | On - 2022-09-15T15:03:14Z
 49. [190..0b6] algorand | By - ronyderra | On - 2022-09-15T14:48:42Z
 50. [9ac..07a] cron and algorand | By - ronyderra | On - 2022-09-15T08:44:02Z

## testnet-dest


 1. [f15..cec] telegram | By - rony derra | On - 2023-01-04T13:57:07Z
 2. [395..2f9] log | By - rony derra | On - 2023-01-02T15:22:17Z
 3. [276..558] originalData | By - rony derra | On - 2023-01-02T15:16:10Z
 4. [793..a90] setTimeout | By - rony derra | On - 2023-01-02T15:13:36Z
 5. [c13..e0a] getTrx | By - rony derra | On - 2023-01-02T14:55:55Z
 6. [1f7..0b6] exsit | By - rony derra | On - 2023-01-02T14:51:09Z
 7. [dfe..6b0] destinationScraper | By - rony derra | On - 2023-01-02T14:42:48Z
 8. [5b5..f74] destinationScraper | By - rony derra | On - 2023-01-02T14:22:20Z
 9. [2b1..94b] asdf | By - rony derra | On - 2023-01-02T14:12:34Z
 10. [90e..234] destinationScraper | By - rony derra | On - 2023-01-02T14:11:50Z
 11. [454..ee9] asdf | By - rony derra | On - 2023-01-02T13:49:44Z
 12. [65b..96b] releventTrxs | By - rony derra | On - 2023-01-02T13:41:25Z
 13. [33a..9f5] destinationScraper | By - rony derra | On - 2023-01-01T17:46:02Z
 14. [6aa..cb3] destinationScraper | By - rony derra | On - 2023-01-01T17:37:10Z
 15. [970..a2a] connect | By - rony derra | On - 2023-01-01T17:28:10Z
 16. [5f9..edd] connect | By - rony derra | On - 2023-01-01T17:27:33Z
 17. [5ea..58c] server | By - rony derra | On - 2023-01-01T17:24:01Z
 18. [34a..6e0] connect | By - rony derra | On - 2023-01-01T17:23:07Z
 19. [9ac..d4b] ignore | By - rony derra | On - 2023-01-01T17:13:41Z
 20. [c34..102] getOrThrow | By - rony derra | On - 2023-01-01T17:13:12Z
 21. [b79..b3e] destinationScraper | By - rony derra | On - 2022-12-29T13:06:28Z
 22. [d03..973] caduceus | By - rony derra | On - 2022-12-29T13:04:53Z
 23. [545..690] VECHAIN | By - rony derra | On - 2022-12-29T10:09:26Z
 24. [abb..bc0] elrondDest | By - rony derra | On - 2022-12-26T09:11:59Z
 25. [78b..801] updateLastBlock | By - rony derra | On - 2022-12-26T09:07:52Z
 26. [58e..092] listen | By - rony derra | On - 2022-12-26T08:52:35Z
 27. [83f..af8] setMaxListeners | By - rony derra | On - 2022-12-25T16:29:36Z
 28. [d24..f6e] log | By - rony derra | On - 2022-12-25T14:36:53Z
 29. [0bd..c31] elrondDest | By - rony derra | On - 2022-12-25T14:21:41Z
 30. [c94..6f5] vechain | By - rony derra | On - 2022-12-24T11:58:51Z
 31. [b13..a32] cron | By - rony derra | On - 2022-12-23T18:39:46Z
 32. [56c..198] sdf | By - rony derra | On - 2022-12-22T16:19:59Z
 33. [328..83e] elrond dest | By - rony derra | On - 2022-12-22T15:38:54Z
 34. [318..de7] VELAS | By - rony derra | On - 2022-12-20T10:44:39Z
 35. [4fa..ad0] GNOSIS | By - rony derra | On - 2022-12-20T10:25:15Z
 36. [cbc..b70] console.log("setTimeout!!!", update?.value); | By - rony derra | On - 2022-12-20T10:15:35Z
 37. [bb9..db8] setTimeout | By - rony derra | On - 2022-12-20T10:13:59Z
 38. [c38..05c] logAndTelegram | By - rony derra | On - 2022-12-20T09:29:32Z
 39. [79f..5f9] found | By - rony derra | On - 2022-12-20T09:11:08Z
 40. [836..84e] setTimeout | By - rony derra | On - 2022-12-20T08:44:42Z
 41. [08b..670] asdf | By - rony derra | On - 2022-12-19T13:55:46Z
 42. [ad0..a7a] asdf | By - rony derra | On - 2022-12-19T13:54:20Z
 43. [0c4..0de] cron | By - rony derra | On - 2022-12-19T13:52:45Z
 44. [9a5..756] cron | By - rony derra | On - 2022-12-19T13:46:45Z
 45. [a23..ee2] cron | By - rony derra | On - 2022-12-19T13:31:47Z
 46. [6b6..eca] updateDestBlock | By - rony derra | On - 2022-12-19T13:20:43Z
 47. [bff..e2b] updateDestBlock | By - rony derra | On - 2022-12-19T13:07:35Z
 48. [e61..8b2] telegram | By - rony derra | On - 2022-12-19T11:51:19Z
 49. [a1e..b00] parse_Data | By - rony derra | On - 2022-12-19T11:49:30Z
 50. [4f1..91c] getBlock | By - rony derra | On - 2022-12-19T10:55:06Z

## ton


 1. [51d..174] scraper | By - rony derra | On - 2022-11-21T09:15:33Z
 2. [26f..d95] encode | By - rony derra | On - 2022-11-21T09:04:47Z
 3. [408..dfd] ton | By - rony derra | On - 2022-11-17T08:00:13Z
 4. [430..9a9] original cahin nonce | By - rony derra | On - 2022-11-17T07:59:36Z
 5. [fec..d94] Merge remote-tracking branch 'origin/master' into ton | By - rony derra | On - 2022-11-14T13:07:08Z
 6. [de7..614] ton | By - rony derra | On - 2022-11-14T13:03:41Z
 7. [cbf..79e] ton | By - rony derra | On - 2022-11-13T13:54:44Z
 8. [598..c23] abeychain | By - rony derra | On - 2022-11-13T09:33:05Z
 9. [e7c..4b3] add trx branch | By - rony derra | On - 2022-11-13T09:21:28Z
 10. [19c..e21] timing | By - rony derra | On - 2022-11-13T08:37:27Z
 11. [748..534] abeychain | By - rony derra | On - 2022-11-13T08:30:53Z
 12. [48f..6ae] ton | By - rony derra | On - 2022-11-07T11:56:19Z
 13. [b47..da6] . | By - rony derra | On - 2022-10-25T12:17:13Z
 14. [588..b12] last moment validation | By - rony derra | On - 2022-10-24T20:05:15Z
 15. [b6d..e1e] algorand coll name | By - ronyderra | On - 2022-10-03T11:40:21Z
 16. [e4b..850] . | By - ronyderra | On - 2022-10-02T14:30:43Z
 17. [235..d68] algorand router | By - ronyderra | On - 2022-09-28T07:45:19Z
 18. [e66..07f] new | By - ronyderra | On - 2022-09-20T14:27:19Z
 19. [8aa..0b3] telegram | By - ronyderra | On - 2022-09-20T11:48:42Z
 20. [011..796] scraper | By - ronyderra | On - 2022-09-20T11:45:51Z
 21. [220..4d6] godwoken | By - ronyderra | On - 2022-09-20T11:18:22Z
 22. [e0e..1e1] cron | By - ronyderra | On - 2022-09-19T07:36:17Z
 23. [7d7..dc1] TezosCollectionData rout | By - ronyderra | On - 2022-09-19T07:30:58Z
 24. [c48..a8f] . | By - ronyderra | On - 2022-09-18T13:20:15Z
 25. [d98..9ef] . | By - ronyderra | On - 2022-09-18T13:19:13Z
 26. [21f..8fe] catch | By - ronyderra | On - 2022-09-18T12:41:35Z
 27. [b25..9fb] getEvmCollectionName | By - ronyderra | On - 2022-09-18T12:40:19Z
 28. [0aa..a95] router | By - ronyderra | On - 2022-09-18T12:40:13Z
 29. [0e9..cea] controller index | By - ronyderra | On - 2022-09-18T12:40:04Z
 30. [3e2..ad5] getEvmDestActionId | By - ronyderra | On - 2022-09-18T12:06:53Z
 31. [6dd..e3a] import router | By - ronyderra | On - 2022-09-18T11:21:39Z
 32. [e19..3f2] mport { elegantUnpair, elegantPair } from "./actionId.js" | By - ronyderra | On - 2022-09-18T11:21:03Z
 33. [160..0b6] elegantUnpair ,elegantPair | By - ronyderra | On - 2022-09-18T11:20:49Z
 34. [615..bb8] getEvmDestActionId | By - ronyderra | On - 2022-09-18T11:20:38Z
 35. [db7..c69] minter abi | By - ronyderra | On - 2022-09-18T11:20:24Z
 36. [732..344] router | By - ronyderra | On - 2022-09-18T11:20:14Z
 37. [d84..ef4] . | By - ronyderra | On - 2022-09-18T08:26:15Z
 38. [c40..0ba] algorand scraper | By - ronyderra | On - 2022-09-18T08:25:52Z
 39. [e8f..bfd] + | By - ronyderra | On - 2022-09-15T15:03:14Z
 40. [190..0b6] algorand | By - ronyderra | On - 2022-09-15T14:48:42Z
 41. [9ac..07a] cron and algorand | By - ronyderra | On - 2022-09-15T08:44:02Z
 42. [a4b..3ac] algorand | By - ronyderra | On - 2022-09-14T10:14:44Z
 43. [65e..73d] algorand to scraping | By - ronyderra | On - 2022-09-14T10:09:01Z
 44. [164..4d6] algorand socket | By - ronyderra | On - 2022-09-14T10:08:12Z
 45. [aa5..0ba] . | By - ronyderra | On - 2022-09-14T10:07:00Z
 46. [f0f..992] . | By - ronyderra | On - 2022-09-14T10:06:18Z
 47. [126..fb6] algorand | By - ronyderra | On - 2022-09-14T09:55:33Z
 48. [146..9a2] algorand and mongo | By - ronyderra | On - 2022-09-14T07:11:54Z
 49. [375..9f3] comment out | By - ronyderra | On - 2022-09-13T14:03:11Z
 50. [76e..606] . | By - ronyderra | On - 2022-09-12T14:20:52Z

# bridge-explorer

## concurrency


 1. [180..d18] forking and mapping child proccesses | By - AlexeyAdoniev | On - 2022-05-01T17:24:37Z
 2. [730..b18] add child proccesess | By - AlexeyAdoniev | On - 2022-04-30T22:06:27Z
 3. [c9c..a04] testnet: add algorand, polygon, bsc. Add helpers for algo | By - AlexeyAdoniev | On - 2022-04-28T09:03:09Z
 4. [6b1..dfa] merge with main | By - AlexeyAdoniev | On - 2022-04-27T11:09:00Z
 5. [e60..3dc] algorant listener for departure trx | By - AlexeyAdoniev | On - 2022-04-27T11:06:19Z
 6. [f63..354] cleanup2 | By - AlexeyAdoniev | On - 2022-04-26T13:15:48Z
 7. [fdc..84d] cleanup | By - AlexeyAdoniev | On - 2022-04-26T12:07:45Z
 8. [c13..05f] different nftMinter afferss based on trx type | By - AlexeyAdoniev | On - 2022-04-26T11:40:46Z
 9. [8c7..7e9] fix bug with provider | By - AlexeyAdoniev | On - 2022-04-26T10:57:52Z
 10. [727..a24] refactor indexerUpdater | By - AlexeyAdoniev | On - 2022-04-26T10:44:28Z
 11. [662..a86] config fix and log | By - AlexeyAdoniev | On - 2022-04-25T15:03:15Z
 12. [6e7..8d0] add gatechain | By - AlexeyAdoniev | On - 2022-04-25T10:25:27Z
 13. [8bf..240] try search for 0x0000000000000000000000000000000000000000 | By - AlexeyAdoniev | On - 2022-04-14T14:59:53Z
 14. [6c5..518] change bug with xpnftMinter address | By - AlexeyAdoniev | On - 2022-04-14T14:14:34Z
 15. [acd..161] different contaqcts addresses for trx type | By - AlexeyAdoniev | On - 2022-04-14T14:03:48Z
 16. [a5e..0c1] change contract to xpNftMinter | By - AlexeyAdoniev | On - 2022-04-14T12:53:55Z
 17. [9d7..795] put delay | By - AlexeyAdoniev | On - 2022-04-14T12:18:34Z
 18. [524..6a0] fix setTimeout | By - AlexeyAdoniev | On - 2022-04-14T12:01:20Z
 19. [d34..fe9] change find nft | By - AlexeyAdoniev | On - 2022-04-14T10:16:54Z
 20. [54b..d21] logs | By - AlexeyAdoniev | On - 2022-04-14T09:24:34Z
 21. [c4d..06f] creating new doc in indexer for new nfts | By - AlexeyAdoniev | On - 2022-04-14T08:41:38Z
 22. [cb4..1b5] fix bug with wrong key2 | By - AlexeyAdoniev | On - 2022-04-13T17:43:39Z
 23. [b9c..f35] wait for trx | By - AlexeyAdoniev | On - 2022-04-13T17:23:44Z
 24. [755..93e] fix both with ket name | By - AlexeyAdoniev | On - 2022-04-13T17:04:13Z
 25. [569..842] change names | By - AlexeyAdoniev | On - 2022-04-13T16:56:11Z
 26. [485..915] refactor updater | By - AlexeyAdoniev | On - 2022-04-13T16:54:00Z
 27. [76c..be3] console.log | By - AlexeyAdoniev | On - 2022-04-13T14:14:06Z
 28. [71d..b32] create indexer doc for transfer | By - AlexeyAdoniev | On - 2022-04-13T14:12:02Z
 29. [82e..d37] unfreeze fix | By - AlexeyAdoniev | On - 2022-04-13T13:24:29Z
 30. [450..5ee] UnfreezeNft option | By - AlexeyAdoniev | On - 2022-04-13T08:00:08Z
 31. [d9e..77a] try to get token ID different ways | By - AlexeyAdoniev | On - 2022-04-13T07:34:15Z
 32. [a74..3ae] consoloe log | By - AlexeyAdoniev | On - 2022-04-12T16:52:22Z
 33. [17b..9e4] get tokenID and contract address from Trx | By - AlexeyAdoniev | On - 2022-04-12T15:19:19Z
 34. [c09..162] fix bug with listen | By - AlexeyAdoniev | On - 2022-04-12T14:48:21Z
 35. [b31..ced] nft indexer update | By - AlexeyAdoniev | On - 2022-04-12T14:37:40Z
 36. [a61..13e] dasdsa | By - AlexeyAdoniev | On - 2022-04-10T11:37:42Z
 37. [aa1..645] gnosis config | By - AlexeyAdoniev | On - 2022-04-06T16:43:41Z
 38. [ae5..1bc] Merge branch 'main' of github.com:XP-NETWORK/bridge-explorer | By - Rishabh Kumar | On - 2022-04-06T16:04:59Z
 39. [7e3..000] add socket | By - Rishabh Kumar | On - 2022-04-06T16:04:43Z
 40. [eec..4f1] add socket | By - Rishabh Kumar | On - 2022-04-06T15:48:39Z
 41. [e46..ec3] Merge branch 'main' of https://github.com/XP-NETWORK/bridge-explorer | By - AlexeyAdoniev | On - 2022-03-28T16:00:50Z
 42. [1c6..4ea] elrond and web3 listeners | By - AlexeyAdoniev | On - 2022-03-28T16:00:43Z
 43. [b90..81f] change wait for event time to 15 mins | By - Rishabh Kumar | On - 2022-03-27T12:12:51Z
 44. [32a..777] fix update time | By - Rishabh Kumar | On - 2022-03-27T12:02:56Z
 45. [a34..c10] event listeners refactor | By - AlexeyAdoniev | On - 2022-03-22T15:34:05Z
 46. [a95..076] nftUri and dollarInput in parallel for tezos | By - AlexeyAdoniev | On - 2022-03-22T14:53:33Z
 47. [824..b36] if status completed do not update any further | By - AlexeyAdoniev | On - 2022-03-22T12:55:20Z
 48. [f7c..397] refactor index.ts and routes | By - AlexeyAdoniev | On - 2022-03-22T12:42:48Z
 49. [0a3..832] dollarValue save to db, multiple tx_executed_event for singe trx workaround | By - AlexeyAdoniev | On - 2022-03-22T12:38:29Z
 50. [59f..e87] format value of transaxtion | By - AlexeyAdoniev | On - 2022-03-21T09:21:09Z

## dev


 1. [5d6..987] update | By - lihishrem | On - 2022-10-23T09:00:24Z
 2. [464..721] NEW GRAPH | By - lihishrem | On - 2022-10-12T10:31:32Z
 3. [edb..ea5] uui bugs | By - lihishrem | On - 2022-10-11T10:41:12Z
 4. [c2d..078] uui bugs | By - lihishrem | On - 2022-10-09T09:58:46Z
 5. [6e1..91e] uui bugs | By - lihishrem | On - 2022-10-09T09:12:40Z
 6. [419..0f2] uui bugs | By - lihishrem | On - 2022-10-09T08:55:17Z
 7. [32c..899] ui bugs copy icon | By - lihishrem | On - 2022-09-22T10:22:42Z
 8. [201..f10] ui bugs copy icon | By - lihishrem | On - 2022-09-22T09:28:38Z
 9. [b89..c71] ui bugs clear filters | By - lihishrem | On - 2022-09-22T09:26:05Z
 10. [37a..024] ui bugs | By - lihishrem | On - 2022-09-22T09:01:41Z
 11. [be6..074] ui bugs | By - lihishrem | On - 2022-09-22T08:44:50Z
 12. [33f..791] ui bugs | By - lihishrem | On - 2022-09-21T16:46:00Z
 13. [95a..2dd] ui bugs | By - lihishrem | On - 2022-09-21T15:54:10Z
 14. [fce..4b8] ui bugs | By - lihishrem | On - 2022-09-21T15:47:01Z
 15. [ec6..c2a] ui bugs | By - lihishrem | On - 2022-09-21T15:39:57Z
 16. [d4d..c3b] ui bugs | By - lihishrem | On - 2022-09-21T15:11:02Z
 17. [ce0..5e4] ui bugs | By - lihishrem | On - 2022-09-21T14:57:02Z
 18. [e6e..6a1] ui bugs | By - lihishrem | On - 2022-09-21T14:20:46Z
 19. [ee5..b1b] ui bugs | By - lihishrem | On - 2022-09-21T13:24:05Z
 20. [3c5..d7f] ui bugs | By - lihishrem | On - 2022-09-21T11:03:06Z
 21. [b8d..68e] ui bugs | By - lihishrem | On - 2022-09-21T10:44:23Z
 22. [8bb..f7c] ui bugs | By - lihishrem | On - 2022-09-21T09:07:44Z
 23. [78a..ef8] ui bugs | By - lihishrem | On - 2022-09-21T08:52:10Z
 24. [0ba..92b] ui bugs | By - lihishrem | On - 2022-09-20T16:55:36Z
 25. [9a2..ffe] ui bugs | By - lihishrem | On - 2022-09-20T16:16:53Z
 26. [51c..4c1] ui bugs | By - lihishrem | On - 2022-09-20T15:39:59Z
 27. [6e4..491] ui bugs | By - lihishrem | On - 2022-09-20T13:24:50Z
 28. [e94..f50] sticky row fix | By - lihishrem | On - 2022-09-20T11:50:36Z
 29. [28f..b10] updates | By - lihishrem | On - 2022-09-20T11:29:21Z
 30. [461..b6d] moonbeam | By - ronyderra | On - 2022-09-18T09:58:47Z
 31. [d99..9c2] monnbeam | By - ronyderra | On - 2022-09-18T09:43:46Z
 32. [210..904] connect search with filters | By - lihishrem | On - 2022-09-14T17:01:43Z
 33. [05e..c84] updates switch all chains,details card,show all statuss... | By - lihishrem | On - 2022-09-14T14:47:23Z
 34. [b60..062] updates clear all,STATUS | By - lihishrem | On - 2022-09-14T12:20:35Z
 35. [704..a76] updates hovers,chains,clear all... | By - lihishrem | On - 2022-09-14T12:15:04Z
 36. [9b3..7de] updates hovers,chains,clear all... | By - lihishrem | On - 2022-09-14T11:44:17Z
 37. [49a..0f2] mobile filters, pagination | By - lihishrem | On - 2022-09-13T12:27:29Z
 38. [dc7..f10] mobile filters | By - lihishrem | On - 2022-09-13T11:28:06Z
 39. [037..5cf] chains search | By - lihishrem | On - 2022-09-12T14:58:30Z
 40. [a9c..a36] Merge branch 'dev' of https://github.com/XP-NETWORK/bridge-explorer-ui into socket | By - ronyderra | On - 2022-09-12T14:31:46Z
 41. [ad7..387] merge | By - lihishrem | On - 2022-09-12T14:29:50Z
 42. [0e2..00b] new socket | By - ronyderra | On - 2022-09-12T14:29:48Z
 43. [951..6ce] chains search start | By - lihishrem | On - 2022-09-12T14:28:35Z
 44. [3e4..44a] vechain image bug | By - ronyderra | On - 2022-09-12T12:31:15Z
 45. [e81..1f4] Merge branch 'dev' of https://github.com/XP-NETWORK/bridge-explorer-ui into dev | By - ronyderra | On - 2022-09-12T12:22:21Z
 46. [4e0..1ae] filters desktop | By - lihishrem | On - 2022-09-12T10:16:09Z
 47. [c20..b83] filters desktop | By - lihishrem | On - 2022-09-12T09:15:58Z
 48. [c40..4c5] filter bug | By - ronyderra | On - 2022-09-11T16:40:29Z
 49. [533..635] filters api | By - lihishrem | On - 2022-09-11T15:20:07Z
 50. [d65..488] filters before changes | By - lihishrem | On - 2022-09-11T11:22:43Z

## getDataService


 1. [f91..8b4] last | By - ronyXnes | On - 2022-05-26T17:00:04Z
 2. [1fa..bf6] for loop - in case of more than one transaction in a block | By - ronyXnes | On - 2022-05-25T09:52:21Z
 3. [371..678] changed function name | By - ronyXnes | On - 2022-05-25T08:37:27Z
 4. [c1b..0c0] dollar fees | By - ronyXnes | On - 2022-05-25T08:26:28Z
 5. [ec1..2f6] removed auther | By - ronyXnes | On - 2022-05-25T07:50:01Z
 6. [e64..c29] implemitation of middleware | By - ronyXnes | On - 2022-05-25T07:47:39Z
 7. [2cf..4de] ts strike mode to false | By - ronyXnes | On - 2022-05-25T07:45:16Z
 8. [46d..e4f] mongo impletation | By - ronyXnes | On - 2022-05-25T07:44:42Z
 9. [7ab..2f4] converted data to object from array | By - ronyXnes | On - 2022-05-24T16:30:03Z
 10. [fea..6a0] getting basic data | By - ronyXnes | On - 2022-05-24T16:05:34Z
 11. [fdb..a7f] to chain data | By - ronyXnes | On - 2022-05-24T07:02:06Z
 12. [0f8..f5d] from chain data | By - ronyXnes | On - 2022-05-24T07:01:35Z
 13. [ffd..23f] reusable get data from evm blockchain | By - ronyXnes | On - 2022-05-24T07:00:47Z
 14. [635..033] rpc , name, addresses data | By - ronyXnes | On - 2022-05-24T06:58:42Z
 15. [9a3..e86] libraries | By - ronyXnes | On - 2022-05-24T06:47:55Z
 16. [887..669] listeners refactor, allow multiple update events if hash === N/A | By - AlexeyAdoniev | On - 2022-05-17T07:54:20Z
 17. [2e8..7b4] add algorand listener | By - AlexeyAdoniev | On - 2022-05-16T16:37:35Z
 18. [3f1..83f] elrond bridge trx | By - AlexeyAdoniev | On - 2022-05-15T10:09:20Z
 19. [970..f93] elrond event | By - AlexeyAdoniev | On - 2022-05-12T12:29:31Z
 20. [191..6a7] daily data update method | By - AlexeyAdoniev | On - 2022-05-11T06:54:20Z
 21. [08b..404] delete json.lock | By - AlexeyAdoniev | On - 2022-05-10T10:54:44Z
 22. [5fb..b3c] add vechain | By - AlexeyAdoniev | On - 2022-05-10T10:50:48Z
 23. [339..c71] ds | By - AlexeyAdoniev | On - 2022-05-08T04:10:08Z
 24. [e60..3dc] algorant listener for departure trx | By - AlexeyAdoniev | On - 2022-04-27T11:06:19Z
 25. [f63..354] cleanup2 | By - AlexeyAdoniev | On - 2022-04-26T13:15:48Z
 26. [fdc..84d] cleanup | By - AlexeyAdoniev | On - 2022-04-26T12:07:45Z
 27. [c13..05f] different nftMinter afferss based on trx type | By - AlexeyAdoniev | On - 2022-04-26T11:40:46Z
 28. [8c7..7e9] fix bug with provider | By - AlexeyAdoniev | On - 2022-04-26T10:57:52Z
 29. [727..a24] refactor indexerUpdater | By - AlexeyAdoniev | On - 2022-04-26T10:44:28Z
 30. [662..a86] config fix and log | By - AlexeyAdoniev | On - 2022-04-25T15:03:15Z
 31. [6e7..8d0] add gatechain | By - AlexeyAdoniev | On - 2022-04-25T10:25:27Z
 32. [8bf..240] try search for 0x0000000000000000000000000000000000000000 | By - AlexeyAdoniev | On - 2022-04-14T14:59:53Z
 33. [6c5..518] change bug with xpnftMinter address | By - AlexeyAdoniev | On - 2022-04-14T14:14:34Z
 34. [acd..161] different contaqcts addresses for trx type | By - AlexeyAdoniev | On - 2022-04-14T14:03:48Z
 35. [a5e..0c1] change contract to xpNftMinter | By - AlexeyAdoniev | On - 2022-04-14T12:53:55Z
 36. [9d7..795] put delay | By - AlexeyAdoniev | On - 2022-04-14T12:18:34Z
 37. [524..6a0] fix setTimeout | By - AlexeyAdoniev | On - 2022-04-14T12:01:20Z
 38. [d34..fe9] change find nft | By - AlexeyAdoniev | On - 2022-04-14T10:16:54Z
 39. [54b..d21] logs | By - AlexeyAdoniev | On - 2022-04-14T09:24:34Z
 40. [c4d..06f] creating new doc in indexer for new nfts | By - AlexeyAdoniev | On - 2022-04-14T08:41:38Z
 41. [cb4..1b5] fix bug with wrong key2 | By - AlexeyAdoniev | On - 2022-04-13T17:43:39Z
 42. [b9c..f35] wait for trx | By - AlexeyAdoniev | On - 2022-04-13T17:23:44Z
 43. [755..93e] fix both with ket name | By - AlexeyAdoniev | On - 2022-04-13T17:04:13Z
 44. [569..842] change names | By - AlexeyAdoniev | On - 2022-04-13T16:56:11Z
 45. [485..915] refactor updater | By - AlexeyAdoniev | On - 2022-04-13T16:54:00Z
 46. [76c..be3] console.log | By - AlexeyAdoniev | On - 2022-04-13T14:14:06Z
 47. [71d..b32] create indexer doc for transfer | By - AlexeyAdoniev | On - 2022-04-13T14:12:02Z
 48. [82e..d37] unfreeze fix | By - AlexeyAdoniev | On - 2022-04-13T13:24:29Z
 49. [450..5ee] UnfreezeNft option | By - AlexeyAdoniev | On - 2022-04-13T08:00:08Z
 50. [d9e..77a] try to get token ID different ways | By - AlexeyAdoniev | On - 2022-04-13T07:34:15Z

## main


 1. [fc0..88d] chainNonce | By - rony derra | On - 2023-02-14T08:30:16Z
 2. [4db..4bb] chainNonce | By - rony derra | On - 2023-02-14T08:19:37Z
 3. [e5c..f9e] chainNonce | By - rony derra | On - 2023-02-14T08:04:47Z
 4. [f11..c96] tonAddress | By - rony derra | On - 2023-02-14T07:50:53Z
 5. [304..3a9] ton logs | By - rony derra | On - 2023-02-12T10:26:55Z
 6. [2a7..0c9] event | By - rony derra | On - 2023-02-12T09:37:20Z
 7. [992..f0b] ton | By - rony derra | On - 2023-02-12T09:04:35Z
 8. [9d6..50e] tonEventListener2 | By - rony derra | On - 2023-02-12T07:50:30Z
 9. [0b0..e28] elrondValidation | By - rony derra | On - 2023-02-08T12:21:13Z
 10. [78d..27a] hash | By - rony derra | On - 2023-02-08T09:18:53Z
 11. [c26..fd9] saveDailyData | By - rony derra | On - 2023-02-08T08:58:17Z
 12. [d79..823] emit | By - rony derra | On - 2023-02-07T12:33:40Z
 13. [59f..ba0] emit | By - rony derra | On - 2023-02-07T12:32:18Z
 14. [f46..c0f] trx | By - rony derra | On - 2023-02-07T11:45:29Z
 15. [3a6..7b9] a | By - rony derra | On - 2023-02-07T11:40:08Z
 16. [322..fe2] getTransaction | By - rony derra | On - 2023-02-07T11:39:50Z
 17. [e02..236] setInterval | By - rony derra | On - 2023-02-07T11:22:18Z
 18. [8f3..67f] EvmEventService | By - rony derra | On - 2023-02-07T11:19:48Z
 19. [77d..045] setInterval | By - rony derra | On - 2023-02-07T11:18:58Z
 20. [8f7..851] handleBridgeEvent | By - rony derra | On - 2023-02-07T11:10:10Z
 21. [32a..952] incomingEvent | By - rony derra | On - 2023-02-07T11:07:53Z
 22. [a14..71b] handleVechainEvent | By - rony derra | On - 2023-02-06T15:38:24Z
 23. [da4..fb2] handleVechainEvent | By - rony derra | On - 2023-02-06T13:28:53Z
 24. [1b1..8db] handleVechainEvent | By - rony derra | On - 2023-02-06T13:21:04Z
 25. [25d..e54] a | By - rony derra | On - 2023-02-06T13:10:04Z
 26. [e01..cbc] times | By - rony derra | On - 2023-02-06T12:51:37Z
 27. [f89..3e1] NETWORK | By - rony derra | On - 2023-02-06T12:27:42Z
 28. [393..218] img | By - rony derra | On - 2023-02-06T12:26:48Z
 29. [6a3..348] moment | By - rony derra | On - 2023-02-06T12:26:15Z
 30. [613..728] reducer2 | By - rony derra | On - 2023-02-06T10:52:41Z
 31. [204..61e] sftArr | By - rony derra | On - 2023-02-06T10:47:59Z
 32. [d87..38a] toString | By - rony derra | On - 2023-02-06T10:34:55Z
 33. [aae..a55] sftNumber | By - rony derra | On - 2023-02-06T10:27:20Z
 34. [f6f..c36] sftNumber | By - rony derra | On - 2023-02-06T09:45:12Z
 35. [9bf..a2d] toChain | By - rony derra | On - 2023-02-04T20:30:06Z
 36. [63b..ebd] handleBridgeEvent | By - rony derra | On - 2023-02-02T13:21:15Z
 37. [2ea..af9] getTransaction | By - rony derra | On - 2023-02-02T13:18:31Z
 38. [bee..7df] handleBridgeEvent | By - rony derra | On - 2023-02-01T08:47:07Z
 39. [938..813] skale | By - rony derra | On - 2023-01-31T13:12:50Z
 40. [c9c..408] SKALE | By - rony derra | On - 2023-01-31T13:07:19Z
 41. [4e5..583] handleEvent | By - rony derra | On - 2023-01-18T14:48:14Z
 42. [1ec..a40] executedSocket | By - rony derra | On - 2023-01-18T14:40:39Z
 43. [b66..eee] executedSocket | By - rony derra | On - 2023-01-18T14:39:59Z
 44. [56d..880] getTransaction | By - rony derra | On - 2023-01-18T11:25:01Z
 45. [b5d..26c] name | By - rony derra | On - 2023-01-18T11:20:41Z
 46. [dda..3e5] clientAppSocket | By - rony derra | On - 2023-01-17T12:02:16Z
 47. [c49..c10] data | By - rony derra | On - 2023-01-17T11:33:33Z
 48. [1b5..939] log | By - rony derra | On - 2023-01-17T08:45:47Z
 49. [d69..f60] sftAmount | By - rony derra | On - 2023-01-15T17:13:17Z
 50. [740..399] dailyDataFormat | By - rony derra | On - 2023-01-09T15:43:07Z

## refactor-test


 1. [402..103] eslint | By - AlexeyAdoniev | On - 2022-05-23T16:41:46Z
 2. [0d8..1b9] dollar fees to evm | By - AlexeyAdoniev | On - 2022-05-23T13:56:25Z
 3. [7ca..615] refactor evm handlers | By - AlexeyAdoniev | On - 2022-05-23T13:34:31Z
 4. [5ab..850] utils | By - AlexeyAdoniev | On - 2022-05-14T21:48:07Z
 5. [8c7..f12] rollback | By - AlexeyAdoniev | On - 2022-05-10T10:57:20Z
 6. [e79..184] bson types bug fix | By - AlexeyAdoniev | On - 2022-04-28T09:23:22Z
 7. [18e..0e8] delete npm lock | By - AlexeyAdoniev | On - 2022-04-28T09:16:08Z
 8. [c9c..a04] testnet: add algorand, polygon, bsc. Add helpers for algo | By - AlexeyAdoniev | On - 2022-04-28T09:03:09Z
 9. [6b1..dfa] merge with main | By - AlexeyAdoniev | On - 2022-04-27T11:09:00Z
 10. [e60..3dc] algorant listener for departure trx | By - AlexeyAdoniev | On - 2022-04-27T11:06:19Z
 11. [f63..354] cleanup2 | By - AlexeyAdoniev | On - 2022-04-26T13:15:48Z
 12. [fdc..84d] cleanup | By - AlexeyAdoniev | On - 2022-04-26T12:07:45Z
 13. [c13..05f] different nftMinter afferss based on trx type | By - AlexeyAdoniev | On - 2022-04-26T11:40:46Z
 14. [8c7..7e9] fix bug with provider | By - AlexeyAdoniev | On - 2022-04-26T10:57:52Z
 15. [727..a24] refactor indexerUpdater | By - AlexeyAdoniev | On - 2022-04-26T10:44:28Z
 16. [662..a86] config fix and log | By - AlexeyAdoniev | On - 2022-04-25T15:03:15Z
 17. [6e7..8d0] add gatechain | By - AlexeyAdoniev | On - 2022-04-25T10:25:27Z
 18. [8bf..240] try search for 0x0000000000000000000000000000000000000000 | By - AlexeyAdoniev | On - 2022-04-14T14:59:53Z
 19. [6c5..518] change bug with xpnftMinter address | By - AlexeyAdoniev | On - 2022-04-14T14:14:34Z
 20. [acd..161] different contaqcts addresses for trx type | By - AlexeyAdoniev | On - 2022-04-14T14:03:48Z
 21. [a5e..0c1] change contract to xpNftMinter | By - AlexeyAdoniev | On - 2022-04-14T12:53:55Z
 22. [9d7..795] put delay | By - AlexeyAdoniev | On - 2022-04-14T12:18:34Z
 23. [524..6a0] fix setTimeout | By - AlexeyAdoniev | On - 2022-04-14T12:01:20Z
 24. [d34..fe9] change find nft | By - AlexeyAdoniev | On - 2022-04-14T10:16:54Z
 25. [54b..d21] logs | By - AlexeyAdoniev | On - 2022-04-14T09:24:34Z
 26. [c4d..06f] creating new doc in indexer for new nfts | By - AlexeyAdoniev | On - 2022-04-14T08:41:38Z
 27. [cb4..1b5] fix bug with wrong key2 | By - AlexeyAdoniev | On - 2022-04-13T17:43:39Z
 28. [b9c..f35] wait for trx | By - AlexeyAdoniev | On - 2022-04-13T17:23:44Z
 29. [755..93e] fix both with ket name | By - AlexeyAdoniev | On - 2022-04-13T17:04:13Z
 30. [569..842] change names | By - AlexeyAdoniev | On - 2022-04-13T16:56:11Z
 31. [485..915] refactor updater | By - AlexeyAdoniev | On - 2022-04-13T16:54:00Z
 32. [76c..be3] console.log | By - AlexeyAdoniev | On - 2022-04-13T14:14:06Z
 33. [71d..b32] create indexer doc for transfer | By - AlexeyAdoniev | On - 2022-04-13T14:12:02Z
 34. [82e..d37] unfreeze fix | By - AlexeyAdoniev | On - 2022-04-13T13:24:29Z
 35. [450..5ee] UnfreezeNft option | By - AlexeyAdoniev | On - 2022-04-13T08:00:08Z
 36. [d9e..77a] try to get token ID different ways | By - AlexeyAdoniev | On - 2022-04-13T07:34:15Z
 37. [a74..3ae] consoloe log | By - AlexeyAdoniev | On - 2022-04-12T16:52:22Z
 38. [17b..9e4] get tokenID and contract address from Trx | By - AlexeyAdoniev | On - 2022-04-12T15:19:19Z
 39. [c09..162] fix bug with listen | By - AlexeyAdoniev | On - 2022-04-12T14:48:21Z
 40. [b31..ced] nft indexer update | By - AlexeyAdoniev | On - 2022-04-12T14:37:40Z
 41. [a61..13e] dasdsa | By - AlexeyAdoniev | On - 2022-04-10T11:37:42Z
 42. [aa1..645] gnosis config | By - AlexeyAdoniev | On - 2022-04-06T16:43:41Z
 43. [ae5..1bc] Merge branch 'main' of github.com:XP-NETWORK/bridge-explorer | By - Rishabh Kumar | On - 2022-04-06T16:04:59Z
 44. [7e3..000] add socket | By - Rishabh Kumar | On - 2022-04-06T16:04:43Z
 45. [eec..4f1] add socket | By - Rishabh Kumar | On - 2022-04-06T15:48:39Z
 46. [e46..ec3] Merge branch 'main' of https://github.com/XP-NETWORK/bridge-explorer | By - AlexeyAdoniev | On - 2022-03-28T16:00:50Z
 47. [1c6..4ea] elrond and web3 listeners | By - AlexeyAdoniev | On - 2022-03-28T16:00:43Z
 48. [b90..81f] change wait for event time to 15 mins | By - Rishabh Kumar | On - 2022-03-27T12:12:51Z
 49. [32a..777] fix update time | By - Rishabh Kumar | On - 2022-03-27T12:02:56Z
 50. [a34..c10] event listeners refactor | By - AlexeyAdoniev | On - 2022-03-22T15:34:05Z

## socket


 1. [da9..e9f] main push | By - AlexeyAdoniev | On - 2022-02-27T08:11:45Z
 2. [0d3..f95] wait for blockchain event in update fncion | By - AlexeyAdoniev | On - 2022-02-24T18:09:36Z
 3. [19f..3b5] setInterval implement | By - AlexeyAdoniev | On - 2022-02-24T11:50:20Z
 4. [a5c..515] web3 listener | By - AlexeyAdoniev | On - 2022-02-23T18:36:57Z
 5. [5f9..cd4] --ammend | By - AlexeyAdoniev | On - 2022-02-23T13:22:25Z
 6. [8db..b7f] tx_executed_event in seperate function | By - AlexeyAdoniev | On - 2022-02-23T13:21:13Z
 7. [265..6fb] socket settings | By - AlexeyAdoniev | On - 2022-02-22T22:56:57Z
 8. [cfb..849] first | By - AlexeyAdoniev | On - 2022-02-22T18:27:53Z
 9. [e90..a9c] fix | By - Rishabh Kumar | On - 2022-02-21T18:07:30Z
 10. [6ca..3fa] update xpnet-web3-contracts | By - Rishabh Kumar | On - 2022-02-21T16:34:02Z
 11. [03b..f43] update config | By - Rishabh Kumar | On - 2022-02-21T12:37:20Z
 12. [818..25a] fix: order of events | By - Rishabh Kumar | On - 2022-02-21T09:19:18Z
 13. [c8e..d7f] fix: multiple req to db | By - Rishabh Kumar | On - 2022-02-21T09:16:22Z
 14. [376..cd8] fix: add lowercase search aswell | By - Rishabh Kumar | On - 2022-02-21T09:07:49Z
 15. [0b8..d00] add chainName search | By - Rishabh Kumar | On - 2022-02-21T09:02:01Z
 16. [1fc..969] add note to socket event listner | By - Rishabh Kumar | On - 2022-02-20T13:05:23Z
 17. [fb5..fc7] add console.log to socket | By - Rishabh Kumar | On - 2022-02-20T11:54:53Z
 18. [e24..65f] add web sopcket update | By - Rishabh Kumar | On - 2022-02-20T09:01:11Z
 19. [930..5d3] add fromChainName and toChainName | By - Rishabh Kumar | On - 2022-02-19T11:12:08Z
 20. [c5e..4ce] replace chain  nonce to chain name in db | By - Rishabh Kumar | On - 2022-02-14T13:24:47Z
 21. [ad0..74b] fix: error + refactor | By - Rishabh Kumar | On - 2022-02-14T13:20:50Z
 22. [5c4..024] add chainNonceToName function | By - Rishabh Kumar | On - 2022-02-14T13:15:13Z
 23. [dbe..6d4] fix: web3 erc721 addresses are not required | By - Rishabh Kumar | On - 2022-02-13T15:39:46Z
 24. [4b0..2c6] web3: fix whole implementation | By - Rishabh Kumar | On - 2022-02-13T15:35:47Z
 25. [bfc..586] tx-event: change http request method to POST | By - Rishabh Kumar | On - 2022-02-13T15:03:28Z
 26. [dba..a7d] entity: event: add nftUri to entity | By - Rishabh Kumar | On - 2022-02-13T15:01:30Z
 27. [d31..003] success to Complted | By - Rishabh Kumar | On - 2022-02-13T12:37:03Z
 28. [b92..c48] fix: nftUri | By - Rishabh Kumar | On - 2022-02-13T10:17:12Z
 29. [593..edf] fix: nftUri | By - Rishabh Kumar | On - 2022-02-10T15:08:29Z
 30. [ace..220] add from chain query search | By - Rishabh Kumar | On - 2022-02-10T11:49:22Z
 31. [83a..0df] fix: / route | By - Rishabh Kumar | On - 2022-02-10T10:18:58Z
 32. [973..2ee] remove action | By - Rishabh Kumar | On - 2022-02-08T07:13:58Z
 33. [5aa..e57] add github action | By - Rishabh Kumar | On - 2022-02-08T07:04:49Z
 34. [af7..cb2] add nftUri to events | By - Rishabh Kumar | On - 2022-02-07T13:01:21Z
 35. [14e..6f6] fix: event entity | By - Rishabh Kumar | On - 2022-02-07T12:47:39Z
 36. [a77..cae] add createdAt to event | By - Rishabh Kumar | On - 2022-02-07T12:38:17Z
 37. [8c3..02b] fix: start script | By - Rishabh Kumar | On - 2022-02-06T09:11:05Z
 38. [2d3..507] fix: config port | By - Rishabh Kumar | On - 2022-02-06T09:08:52Z
 39. [866..68c] remove prestart script | By - Rishabh Kumar | On - 2022-02-06T09:05:37Z
 40. [753..21b] fix: config port | By - Rishabh Kumar | On - 2022-02-06T08:56:52Z
 41. [ad2..d6c] fix: start script | By - Rishabh Kumar | On - 2022-02-06T08:51:30Z
 42. [397..af1] typescript to deps | By - Rishabh Kumar | On - 2022-02-06T08:41:58Z
 43. [d77..dd3] fix: await db query | By - Rishabh Kumar | On - 2022-02-06T08:27:53Z
 44. [645..3e8] fix: ELROND_NODE_URL to ELROND_RPC_URL | By - Rishabh Kumar | On - 2022-02-06T08:22:24Z
 45. [7f9..ee3] _CONTRACT_ to _MINTER_ | By - Rishabh Kumar | On - 2022-02-06T08:21:13Z
 46. [7ea..581] comment out undeployed minter chain | By - Rishabh Kumar | On - 2022-02-06T08:19:21Z
 47. [1e5..714] fix: update event | By - Rishabh Kumar | On - 2022-02-03T13:34:33Z
 48. [965..ba2] db: use mikro-orm instead of prisma | By - rsbkme | On - 2022-02-03T12:16:32Z
 49. [70b..b4d] package-management: use yarn instead of npm | By - rsbkme | On - 2022-02-03T11:40:47Z
 50. [25b..46a] remove ui from api | By - Rishabh Kumar | On - 2022-02-03T10:52:29Z

## telegram


 1. [f25..85d] telegram | By - ronyXnes | On - 2022-06-01T09:09:32Z
 2. [f01..b88] bot | By - ronyXnes | On - 2022-05-29T18:21:35Z
 3. [d85..e03] config update | By - ronyXnes | On - 2022-05-29T18:20:57Z
 4. [603..a5d] use exchange rate, saveEvent function | By - AlexeyAdoniev | On - 2022-05-28T22:22:21Z
 5. [07c..ebc] event handler fix | By - AlexeyAdoniev | On - 2022-05-26T18:13:56Z
 6. [be8..bcb] fix bug with csv file generation | By - AlexeyAdoniev | On - 2022-05-26T15:52:28Z
 7. [8a7..998] fork eventHandler entityManager | By - AlexeyAdoniev | On - 2022-05-26T12:20:27Z
 8. [400..104] scrap for all chain, saveWallet fix | By - AlexeyAdoniev | On - 2022-05-26T12:10:34Z
 9. [4df..58b] polyfgon add | By - AlexeyAdoniev | On - 2022-05-26T11:04:30Z
 10. [8c6..45e] last block +1 in order to not check same log | By - AlexeyAdoniev | On - 2022-05-26T09:19:54Z
 11. [4c7..48c] typoo | By - AlexeyAdoniev | On - 2022-05-26T08:43:50Z
 12. [033..1ab] add bsc to block scrap | By - AlexeyAdoniev | On - 2022-05-26T08:43:16Z
 13. [0ea..c7e] save results | By - AlexeyAdoniev | On - 2022-05-25T18:01:39Z
 14. [c5b..dc1] blocks scraping implemented | By - AlexeyAdoniev | On - 2022-05-25T17:58:18Z
 15. [7e2..d33] merge with tron branch | By - AlexeyAdoniev | On - 2022-05-24T16:04:33Z
 16. [f0b..069] Merge branch 'tron' | By - AlexeyAdoniev | On - 2022-05-24T16:02:23Z
 17. [ab2..6cc] tron event handling | By - AlexeyAdoniev | On - 2022-05-24T16:00:44Z
 18. [0c2..435] actionIdOffset, more pending time | By - AlexeyAdoniev | On - 2022-05-24T15:08:30Z
 19. [b4f..bf5] tron prepare | By - AlexeyAdoniev | On - 2022-05-24T14:45:30Z
 20. [0ee..274] refactor listeners | By - AlexeyAdoniev | On - 2022-05-24T08:36:20Z
 21. [e44..014] tezos nftUri fix | By - AlexeyAdoniev | On - 2022-05-23T07:05:47Z
 22. [ecc..7e3] algo compaund hash | By - AlexeyAdoniev | On - 2022-05-18T13:52:53Z
 23. [847..531] algo bug fix, dublicate event prevention | By - AlexeyAdoniev | On - 2022-05-18T08:55:39Z
 24. [532..dfe] elrond fix switch, algorand 3 trx case handle | By - AlexeyAdoniev | On - 2022-05-18T07:43:49Z
 25. [e9a..d9b] elrond and sender from trx | By - AlexeyAdoniev | On - 2022-05-17T15:00:17Z
 26. [114..730] elrond try catch when try to get tokenId | By - AlexeyAdoniev | On - 2022-05-17T14:33:51Z
 27. [79c..bb3] only try to update indexer on evm chains | By - AlexeyAdoniev | On - 2022-05-17T13:54:19Z
 28. [a69..4ac] event client socket send | By - AlexeyAdoniev | On - 2022-05-17T10:16:20Z
 29. [a30..fd6] elrond data log | By - AlexeyAdoniev | On - 2022-05-17T10:05:29Z
 30. [887..669] listeners refactor, allow multiple update events if hash === N/A | By - AlexeyAdoniev | On - 2022-05-17T07:54:20Z
 31. [2e8..7b4] add algorand listener | By - AlexeyAdoniev | On - 2022-05-16T16:37:35Z
 32. [3f1..83f] elrond bridge trx | By - AlexeyAdoniev | On - 2022-05-15T10:09:20Z
 33. [970..f93] elrond event | By - AlexeyAdoniev | On - 2022-05-12T12:29:31Z
 34. [191..6a7] daily data update method | By - AlexeyAdoniev | On - 2022-05-11T06:54:20Z
 35. [08b..404] delete json.lock | By - AlexeyAdoniev | On - 2022-05-10T10:54:44Z
 36. [5fb..b3c] add vechain | By - AlexeyAdoniev | On - 2022-05-10T10:50:48Z
 37. [339..c71] ds | By - AlexeyAdoniev | On - 2022-05-08T04:10:08Z
 38. [e60..3dc] algorant listener for departure trx | By - AlexeyAdoniev | On - 2022-04-27T11:06:19Z
 39. [f63..354] cleanup2 | By - AlexeyAdoniev | On - 2022-04-26T13:15:48Z
 40. [fdc..84d] cleanup | By - AlexeyAdoniev | On - 2022-04-26T12:07:45Z
 41. [c13..05f] different nftMinter afferss based on trx type | By - AlexeyAdoniev | On - 2022-04-26T11:40:46Z
 42. [8c7..7e9] fix bug with provider | By - AlexeyAdoniev | On - 2022-04-26T10:57:52Z
 43. [727..a24] refactor indexerUpdater | By - AlexeyAdoniev | On - 2022-04-26T10:44:28Z
 44. [662..a86] config fix and log | By - AlexeyAdoniev | On - 2022-04-25T15:03:15Z
 45. [6e7..8d0] add gatechain | By - AlexeyAdoniev | On - 2022-04-25T10:25:27Z
 46. [8bf..240] try search for 0x0000000000000000000000000000000000000000 | By - AlexeyAdoniev | On - 2022-04-14T14:59:53Z
 47. [6c5..518] change bug with xpnftMinter address | By - AlexeyAdoniev | On - 2022-04-14T14:14:34Z
 48. [acd..161] different contaqcts addresses for trx type | By - AlexeyAdoniev | On - 2022-04-14T14:03:48Z
 49. [a5e..0c1] change contract to xpNftMinter | By - AlexeyAdoniev | On - 2022-04-14T12:53:55Z
 50. [9d7..795] put delay | By - AlexeyAdoniev | On - 2022-04-14T12:18:34Z

## testnet


 1. [5ab..850] utils | By - AlexeyAdoniev | On - 2022-05-14T21:48:07Z
 2. [8c7..f12] rollback | By - AlexeyAdoniev | On - 2022-05-10T10:57:20Z
 3. [e79..184] bson types bug fix | By - AlexeyAdoniev | On - 2022-04-28T09:23:22Z
 4. [18e..0e8] delete npm lock | By - AlexeyAdoniev | On - 2022-04-28T09:16:08Z
 5. [c9c..a04] testnet: add algorand, polygon, bsc. Add helpers for algo | By - AlexeyAdoniev | On - 2022-04-28T09:03:09Z
 6. [6b1..dfa] merge with main | By - AlexeyAdoniev | On - 2022-04-27T11:09:00Z
 7. [e60..3dc] algorant listener for departure trx | By - AlexeyAdoniev | On - 2022-04-27T11:06:19Z
 8. [f63..354] cleanup2 | By - AlexeyAdoniev | On - 2022-04-26T13:15:48Z
 9. [fdc..84d] cleanup | By - AlexeyAdoniev | On - 2022-04-26T12:07:45Z
 10. [c13..05f] different nftMinter afferss based on trx type | By - AlexeyAdoniev | On - 2022-04-26T11:40:46Z
 11. [8c7..7e9] fix bug with provider | By - AlexeyAdoniev | On - 2022-04-26T10:57:52Z
 12. [727..a24] refactor indexerUpdater | By - AlexeyAdoniev | On - 2022-04-26T10:44:28Z
 13. [662..a86] config fix and log | By - AlexeyAdoniev | On - 2022-04-25T15:03:15Z
 14. [6e7..8d0] add gatechain | By - AlexeyAdoniev | On - 2022-04-25T10:25:27Z
 15. [8bf..240] try search for 0x0000000000000000000000000000000000000000 | By - AlexeyAdoniev | On - 2022-04-14T14:59:53Z
 16. [6c5..518] change bug with xpnftMinter address | By - AlexeyAdoniev | On - 2022-04-14T14:14:34Z
 17. [acd..161] different contaqcts addresses for trx type | By - AlexeyAdoniev | On - 2022-04-14T14:03:48Z
 18. [a5e..0c1] change contract to xpNftMinter | By - AlexeyAdoniev | On - 2022-04-14T12:53:55Z
 19. [9d7..795] put delay | By - AlexeyAdoniev | On - 2022-04-14T12:18:34Z
 20. [524..6a0] fix setTimeout | By - AlexeyAdoniev | On - 2022-04-14T12:01:20Z
 21. [d34..fe9] change find nft | By - AlexeyAdoniev | On - 2022-04-14T10:16:54Z
 22. [54b..d21] logs | By - AlexeyAdoniev | On - 2022-04-14T09:24:34Z
 23. [c4d..06f] creating new doc in indexer for new nfts | By - AlexeyAdoniev | On - 2022-04-14T08:41:38Z
 24. [cb4..1b5] fix bug with wrong key2 | By - AlexeyAdoniev | On - 2022-04-13T17:43:39Z
 25. [b9c..f35] wait for trx | By - AlexeyAdoniev | On - 2022-04-13T17:23:44Z
 26. [755..93e] fix both with ket name | By - AlexeyAdoniev | On - 2022-04-13T17:04:13Z
 27. [569..842] change names | By - AlexeyAdoniev | On - 2022-04-13T16:56:11Z
 28. [485..915] refactor updater | By - AlexeyAdoniev | On - 2022-04-13T16:54:00Z
 29. [76c..be3] console.log | By - AlexeyAdoniev | On - 2022-04-13T14:14:06Z
 30. [71d..b32] create indexer doc for transfer | By - AlexeyAdoniev | On - 2022-04-13T14:12:02Z
 31. [82e..d37] unfreeze fix | By - AlexeyAdoniev | On - 2022-04-13T13:24:29Z
 32. [450..5ee] UnfreezeNft option | By - AlexeyAdoniev | On - 2022-04-13T08:00:08Z
 33. [d9e..77a] try to get token ID different ways | By - AlexeyAdoniev | On - 2022-04-13T07:34:15Z
 34. [a74..3ae] consoloe log | By - AlexeyAdoniev | On - 2022-04-12T16:52:22Z
 35. [17b..9e4] get tokenID and contract address from Trx | By - AlexeyAdoniev | On - 2022-04-12T15:19:19Z
 36. [c09..162] fix bug with listen | By - AlexeyAdoniev | On - 2022-04-12T14:48:21Z
 37. [b31..ced] nft indexer update | By - AlexeyAdoniev | On - 2022-04-12T14:37:40Z
 38. [a61..13e] dasdsa | By - AlexeyAdoniev | On - 2022-04-10T11:37:42Z
 39. [aa1..645] gnosis config | By - AlexeyAdoniev | On - 2022-04-06T16:43:41Z
 40. [ae5..1bc] Merge branch 'main' of github.com:XP-NETWORK/bridge-explorer | By - Rishabh Kumar | On - 2022-04-06T16:04:59Z
 41. [7e3..000] add socket | By - Rishabh Kumar | On - 2022-04-06T16:04:43Z
 42. [eec..4f1] add socket | By - Rishabh Kumar | On - 2022-04-06T15:48:39Z
 43. [e46..ec3] Merge branch 'main' of https://github.com/XP-NETWORK/bridge-explorer | By - AlexeyAdoniev | On - 2022-03-28T16:00:50Z
 44. [1c6..4ea] elrond and web3 listeners | By - AlexeyAdoniev | On - 2022-03-28T16:00:43Z
 45. [b90..81f] change wait for event time to 15 mins | By - Rishabh Kumar | On - 2022-03-27T12:12:51Z
 46. [32a..777] fix update time | By - Rishabh Kumar | On - 2022-03-27T12:02:56Z
 47. [a34..c10] event listeners refactor | By - AlexeyAdoniev | On - 2022-03-22T15:34:05Z
 48. [a95..076] nftUri and dollarInput in parallel for tezos | By - AlexeyAdoniev | On - 2022-03-22T14:53:33Z
 49. [824..b36] if status completed do not update any further | By - AlexeyAdoniev | On - 2022-03-22T12:55:20Z
 50. [f7c..397] refactor index.ts and routes | By - AlexeyAdoniev | On - 2022-03-22T12:42:48Z

## tezos


 1. [e10..46a] tezos file init | By - ronyXnes | On - 2022-06-01T14:35:00Z
 2. [613..496] npm i @microsoft/signalr | By - ronyXnes | On - 2022-06-01T14:32:07Z
 3. [4d1..960] telegram msg on error event | By - AlexeyAdoniev | On - 2022-06-01T09:46:57Z
 4. [cee..515] Merge branch 'telegram' of https://github.com/XP-NETWORK/bridge-explorer | By - AlexeyAdoniev | On - 2022-06-01T09:39:06Z
 5. [848..b22] Merge remote-tracking branch 'origin/telegram' | By - AlexeyAdoniev | On - 2022-06-01T09:12:07Z
 6. [f25..85d] telegram | By - ronyXnes | On - 2022-06-01T09:09:32Z
 7. [6fb..42b] d | By - AlexeyAdoniev | On - 2022-06-01T07:15:16Z
 8. [2a3..611] tezis time fix | By - AlexeyAdoniev | On - 2022-05-31T16:39:15Z
 9. [f01..b88] bot | By - ronyXnes | On - 2022-05-29T18:21:35Z
 10. [d85..e03] config update | By - ronyXnes | On - 2022-05-29T18:20:57Z
 11. [3a9..5ee] daily data more often | By - AlexeyAdoniev | On - 2022-05-29T11:31:06Z
 12. [435..84d] elrond api base url, createdAt default | By - AlexeyAdoniev | On - 2022-05-29T09:47:00Z
 13. [209..1f5] algorand, tron fees count, exchangeRate gather | By - AlexeyAdoniev | On - 2022-05-29T07:46:28Z
 14. [603..a5d] use exchange rate, saveEvent function | By - AlexeyAdoniev | On - 2022-05-28T22:22:21Z
 15. [07c..ebc] event handler fix | By - AlexeyAdoniev | On - 2022-05-26T18:13:56Z
 16. [be8..bcb] fix bug with csv file generation | By - AlexeyAdoniev | On - 2022-05-26T15:52:28Z
 17. [8a7..998] fork eventHandler entityManager | By - AlexeyAdoniev | On - 2022-05-26T12:20:27Z
 18. [400..104] scrap for all chain, saveWallet fix | By - AlexeyAdoniev | On - 2022-05-26T12:10:34Z
 19. [4df..58b] polyfgon add | By - AlexeyAdoniev | On - 2022-05-26T11:04:30Z
 20. [8c6..45e] last block +1 in order to not check same log | By - AlexeyAdoniev | On - 2022-05-26T09:19:54Z
 21. [4c7..48c] typoo | By - AlexeyAdoniev | On - 2022-05-26T08:43:50Z
 22. [033..1ab] add bsc to block scrap | By - AlexeyAdoniev | On - 2022-05-26T08:43:16Z
 23. [0ea..c7e] save results | By - AlexeyAdoniev | On - 2022-05-25T18:01:39Z
 24. [c5b..dc1] blocks scraping implemented | By - AlexeyAdoniev | On - 2022-05-25T17:58:18Z
 25. [7e2..d33] merge with tron branch | By - AlexeyAdoniev | On - 2022-05-24T16:04:33Z
 26. [f0b..069] Merge branch 'tron' | By - AlexeyAdoniev | On - 2022-05-24T16:02:23Z
 27. [ab2..6cc] tron event handling | By - AlexeyAdoniev | On - 2022-05-24T16:00:44Z
 28. [0c2..435] actionIdOffset, more pending time | By - AlexeyAdoniev | On - 2022-05-24T15:08:30Z
 29. [b4f..bf5] tron prepare | By - AlexeyAdoniev | On - 2022-05-24T14:45:30Z
 30. [0ee..274] refactor listeners | By - AlexeyAdoniev | On - 2022-05-24T08:36:20Z
 31. [e44..014] tezos nftUri fix | By - AlexeyAdoniev | On - 2022-05-23T07:05:47Z
 32. [ecc..7e3] algo compaund hash | By - AlexeyAdoniev | On - 2022-05-18T13:52:53Z
 33. [847..531] algo bug fix, dublicate event prevention | By - AlexeyAdoniev | On - 2022-05-18T08:55:39Z
 34. [532..dfe] elrond fix switch, algorand 3 trx case handle | By - AlexeyAdoniev | On - 2022-05-18T07:43:49Z
 35. [e9a..d9b] elrond and sender from trx | By - AlexeyAdoniev | On - 2022-05-17T15:00:17Z
 36. [114..730] elrond try catch when try to get tokenId | By - AlexeyAdoniev | On - 2022-05-17T14:33:51Z
 37. [79c..bb3] only try to update indexer on evm chains | By - AlexeyAdoniev | On - 2022-05-17T13:54:19Z
 38. [a69..4ac] event client socket send | By - AlexeyAdoniev | On - 2022-05-17T10:16:20Z
 39. [a30..fd6] elrond data log | By - AlexeyAdoniev | On - 2022-05-17T10:05:29Z
 40. [887..669] listeners refactor, allow multiple update events if hash === N/A | By - AlexeyAdoniev | On - 2022-05-17T07:54:20Z
 41. [2e8..7b4] add algorand listener | By - AlexeyAdoniev | On - 2022-05-16T16:37:35Z
 42. [3f1..83f] elrond bridge trx | By - AlexeyAdoniev | On - 2022-05-15T10:09:20Z
 43. [970..f93] elrond event | By - AlexeyAdoniev | On - 2022-05-12T12:29:31Z
 44. [191..6a7] daily data update method | By - AlexeyAdoniev | On - 2022-05-11T06:54:20Z
 45. [08b..404] delete json.lock | By - AlexeyAdoniev | On - 2022-05-10T10:54:44Z
 46. [5fb..b3c] add vechain | By - AlexeyAdoniev | On - 2022-05-10T10:50:48Z
 47. [339..c71] ds | By - AlexeyAdoniev | On - 2022-05-08T04:10:08Z
 48. [e60..3dc] algorant listener for departure trx | By - AlexeyAdoniev | On - 2022-04-27T11:06:19Z
 49. [f63..354] cleanup2 | By - AlexeyAdoniev | On - 2022-04-26T13:15:48Z
 50. [fdc..84d] cleanup | By - AlexeyAdoniev | On - 2022-04-26T12:07:45Z

# web3-contracts

## deployUpdate


 1. [46b..da1] update collection 1155 | By - AlexSafepress | On - 2023-02-07T14:36:28Z
 2. [cfa..6cf] update collection 1155 | By - AlexSafepress | On - 2023-02-07T14:33:42Z
 3. [8a6..6ba] update erc1155 collection contract | By - AlexSafepress | On - 2023-02-07T08:19:06Z
 4. [fcb..88d] added contracts for erc1155 auto deployment | By - AlexSafepress | On - 2023-02-06T12:25:04Z
 5. [db6..378] added contracts for erc1155 auto deployment | By - AlexSafepress | On - 2023-02-06T12:24:26Z
 6. [d8f..8e3] change name and revert back changes to collection creator smart contract | By - AlexSafepress | On - 2023-02-01T11:10:57Z
 7. [5b5..c1b] updated collection creator contract | By - AlexSafepress | On - 2023-01-31T12:53:02Z
 8. [e84..11e] updated collection creator to keep mapping of walletAddrss=>collections | By - AlexSafepress | On - 2023-01-29T07:02:19Z
 9. [eb3..374] updated contracts | By - AlexSafepress | On - 2023-01-24T13:37:52Z
 10. [413..2ab] updated contracts | By - AlexSafepress | On - 2023-01-24T13:31:51Z
 11. [130..b04] solidity v0813 to v0817 | By - Alex Moshinsky | On - 2023-01-19T15:52:38Z
 12. [2d2..3b6] add optimizer | By - Alex Moshinsky | On - 2023-01-19T15:51:54Z
 13. [ffe..778] fix size contract | By - Alex Moshinsky | On - 2023-01-19T15:34:21Z
 14. [aa4..be7] add contract number 6 | By - Alex Moshinsky | On - 2023-01-19T15:29:07Z
 15. [688..a02] add contract number 6 | By - Alex Moshinsky | On - 2023-01-19T15:27:24Z
 16. [3fc..e76] updated packages | By - AlexSafepress | On - 2023-01-19T13:09:22Z
 17. [cd9..e0b] added new data to logs | By - AlexSafepress | On - 2023-01-19T12:24:13Z
 18. [ff8..fa1] fix collection contract name in collectioncreator import | By - AlexSafepress | On - 2023-01-18T12:26:12Z
 19. [4ca..5d6] updated collection creation contracts to now allow usage of ownable | By - AlexSafepress | On - 2023-01-18T12:21:04Z
 20. [9ca..f41] updated collection creation contracts | By - AlexSafepress | On - 2023-01-18T07:10:02Z
 21. [c20..c16] update for collectionCreator deployment | By - AlexSafepress | On - 2023-01-16T14:58:27Z
 22. [b44..3db] update for collectionCreator deployment | By - AlexSafepress | On - 2023-01-16T14:57:41Z
 23. [f00..5d8] updated new collection creator contract | By - AlexSafepress | On - 2023-01-15T00:18:29Z
 24. [b55..913] added contracts and documentation for the new xpnft | By - AlexSafepress | On - 2023-01-03T12:40:45Z
 25. [943..a28] Hedera: Deployment Script | By - imsk17 | On - 2022-11-23T14:21:17Z
 26. [7b0..f91] Skale: Mainnet and Questions for ERC20 | By - imsk17 | On - 2022-11-23T14:20:54Z
 27. [2e0..47c] contracts: erc20-minter: adapt transferFees to erc20 token | By - imsk17 | On - 2022-11-01T12:12:18Z
 28. [0f3..8e9] contracts: erc20: add a payment token | By - imsk17 | On - 2022-11-01T11:56:09Z
 29. [e8b..124] contracts: scripts: add deployment for skale | By - imsk17 | On - 2022-11-01T11:27:28Z
 30. [393..39b] contracts: minter-erc20: add a minter with erc20 support | By - imsk17 | On - 2022-11-01T10:58:00Z
 31. [90e..326] deploy: vechain: fix deployment script | By - imsk17 | On - 2022-09-26T10:35:55Z
 32. [023..ac7] scripts: add a deployment script for vechain | By - imsk17 | On - 2022-04-06T14:56:26Z
 33. [985..8b7] Minter: make actionCnt public | By - rupansh | On - 2022-03-03T12:24:47Z
 34. [60d..709] Minter: add method for updating groupKey | By - rupansh | On - 2022-02-24T13:06:09Z
 35. [387..830] Dummy Erc1155: add batch mint funcs | By - rupansh | On - 2022-02-24T12:32:18Z
 36. [ebb..e05] scripts: frost_gen: start frost uuid from 1 | By - rupansh | On - 2022-02-24T12:00:19Z
 37. [c6c..59f] Minter: emit burner address with unfreeze event | By - rupansh | On - 2022-02-14T14:36:57Z
 38. [7d7..89b] test: Minter: properly test whitelist behaviour | By - rupansh | On - 2022-02-14T09:40:43Z
 39. [a36..354] Minter: fix whitelist derp | By - rupansh | On - 2022-02-14T09:40:43Z
 40. [62f..f5b] ci: adapt co for erc1155 branch | By - imsk17 | On - 2022-02-09T13:11:57Z
 41. [858..676] ci: setup github action for erc1155 branch | By - imsk17 | On - 2022-02-09T13:08:29Z
 42. [887..553] update deploy script | By - rupansh | On - 2022-02-04T15:18:14Z
 43. [db4..b0d] update package.contract.json | By - rupansh | On - 2022-02-03T10:01:15Z
 44. [f65..aae] Minter: use memory instead of calldata for large arrays | By - rupansh | On - 2022-02-02T09:05:32Z
 45. [32e..17b] Minter: mark nftWhitelist as public | By - rupansh | On - 2022-02-01T14:42:53Z
 46. [85a..7e3] bump ethers | By - rupansh | On - 2022-02-01T12:52:18Z
 47. [5cb..48f] hardhat.config.ts: use default network config for local node | By - rupansh | On - 2022-02-01T12:52:04Z
 48. [ce8..4c3] update tests | By - rupansh | On - 2022-02-01T12:51:46Z
 49. [cb6..b13] Minter: minor fixes | By - rupansh | On - 2022-02-01T12:51:13Z
 50. [619..e58] lint check | By - rupansh | On - 2022-02-01T11:08:36Z

## dist


 1. [29c..820] Build: (6998cdb) Update hardhat.config.js | By - dima-brook | On - 2022-03-15T07:27:29Z
 2. [df1..bb6] Build: (3ca8fbf) scripts: deloy: wait for transferOwnership | By - rupansh | On - 2022-02-01T09:00:41Z
 3. [473..668] Build: (1e82bf8) add erc1155 contract | By - rupansh | On - 2021-12-03T11:44:39Z
 4. [177..bc1] sync erc1155 support | By - rupansh | On - 2021-12-03T11:35:50Z
 5. [091..82e] Build: (6f28bc6) feat(xpnft): make xpnft enumerable | By - imsk17 | On - 2021-11-12T11:31:04Z
 6. [97e..904] Build: (820a233) scripts: delploy: auto verify contracts | By - rupansh | On - 2021-10-25T06:27:12Z
 7. [807..6c8] Build: (5a60e2e) add .env.example | By - rupansh | On - 2021-10-14T12:54:36Z

## dist-erc1155


 1. [356..899] Build: (943e4f4) Hedera: Deployment Script | By - imsk17 | On - 2022-11-23T14:22:57Z
 2. [d6d..b97] Build: (7b0280b) Skale: Mainnet and Questions for ERC20 | By - imsk17 | On - 2022-11-23T14:22:27Z
 3. [aa9..237] Build: (2e0e797) contracts: erc20-minter: adapt transferFees to erc20 token | By - imsk17 | On - 2022-11-01T12:13:29Z
 4. [b38..7fc] Build: (0f322b5) contracts: erc20: add a payment token | By - imsk17 | On - 2022-11-01T11:57:36Z
 5. [cff..16f] Build: (e8b6197) contracts: scripts: add deployment for skale | By - imsk17 | On - 2022-11-01T11:28:39Z
 6. [532..812] Build: (393e818) contracts: minter-erc20: add a minter with erc20 support | By - imsk17 | On - 2022-11-01T10:59:29Z
 7. [18d..a9f] Build: (90e6f8e) deploy: vechain: fix deployment script | By - imsk17 | On - 2022-09-26T10:37:19Z
 8. [42d..5b1] Build: (023e394) scripts: add a deployment script for vechain | By - imsk17 | On - 2022-04-06T14:57:57Z
 9. [65b..c6f] Build: (98525b0) Minter: make actionCnt public | By - rupansh | On - 2022-03-03T12:25:57Z
 10. [f62..9ba] Build: (60d52fe) Minter: add method for updating groupKey | By - rupansh | On - 2022-02-24T13:07:15Z
 11. [c0b..a65] Build: (ebbd701) scripts: frost_gen: start frost uuid from 1 | By - rupansh | On - 2022-02-24T12:01:47Z
 12. [af2..a5d] Build: (69cd0f5) scripts: frost_gen: start frost uuid from 1 | By - rupansh | On - 2022-02-24T12:01:16Z
 13. [079..b46] Build: (c6c3422) Minter: emit burner address with unfreeze event | By - rupansh | On - 2022-02-14T17:36:36Z
 14. [006..9c7] Build: (7d761d1) test: Minter: properly test whitelist behaviour | By - rupansh | On - 2022-02-14T09:41:51Z
 15. [19b..ad5] Build: (62f4005) ci: adapt co for erc1155 branch | By - imsk17 | On - 2022-02-09T13:13:18Z

## erc1155-velas


 1. [317..39f] Update hardhat.config.ts | By - Dima Brook | On - 2022-03-15T07:15:51Z
 2. [5d7..bbf] Merge branch 'erc1155' into erc1155-velas | By - rupansh | On - 2022-02-24T12:04:00Z
 3. [ebb..e05] scripts: frost_gen: start frost uuid from 1 | By - rupansh | On - 2022-02-24T12:00:19Z
 4. [b68..2fc] block.chainid hacks for velas | By - rupansh | On - 2022-02-15T16:29:23Z
 5. [c6c..59f] Minter: emit burner address with unfreeze event | By - rupansh | On - 2022-02-14T14:36:57Z
 6. [7d7..89b] test: Minter: properly test whitelist behaviour | By - rupansh | On - 2022-02-14T09:40:43Z
 7. [a36..354] Minter: fix whitelist derp | By - rupansh | On - 2022-02-14T09:40:43Z
 8. [62f..f5b] ci: adapt co for erc1155 branch | By - imsk17 | On - 2022-02-09T13:11:57Z
 9. [858..676] ci: setup github action for erc1155 branch | By - imsk17 | On - 2022-02-09T13:08:29Z
 10. [887..553] update deploy script | By - rupansh | On - 2022-02-04T15:18:14Z
 11. [db4..b0d] update package.contract.json | By - rupansh | On - 2022-02-03T10:01:15Z
 12. [f65..aae] Minter: use memory instead of calldata for large arrays | By - rupansh | On - 2022-02-02T09:05:32Z
 13. [32e..17b] Minter: mark nftWhitelist as public | By - rupansh | On - 2022-02-01T14:42:53Z
 14. [85a..7e3] bump ethers | By - rupansh | On - 2022-02-01T12:52:18Z
 15. [5cb..48f] hardhat.config.ts: use default network config for local node | By - rupansh | On - 2022-02-01T12:52:04Z
 16. [ce8..4c3] update tests | By - rupansh | On - 2022-02-01T12:51:46Z
 17. [cb6..b13] Minter: minor fixes | By - rupansh | On - 2022-02-01T12:51:13Z
 18. [619..e58] lint check | By - rupansh | On - 2022-02-01T11:08:36Z
 19. [8b8..73f] contracts: initial migration to off-chain multisig | By - rupansh | On - 2022-02-01T10:55:56Z
 20. [868..d77] minor code quality improvements | By - rupansh | On - 2022-01-14T13:10:41Z
 21. [60f..f5a] Create erc-1155-bridge.md | By - Dima Brook | On - 2022-01-12T09:01:00Z
 22. [b10..5fc] Update XPNft1155.sol | By - Dima Brook | On - 2022-01-11T09:33:13Z
 23. [664..3e4] scripts: deploy: wait before ownership is done | By - rupansh | On - 2022-01-07T09:53:12Z
 24. [908..969] update deploy script | By - rupansh | On - 2021-12-27T10:36:22Z
 25. [461..d23] minter: allow multiple mintWith for batch | By - rupansh | On - 2021-12-26T12:19:10Z
 26. [b2a..c66] Minter: improve batch unfreeze | By - rupansh | On - 2021-12-23T13:13:17Z
 27. [0bd..3ca] minter: allow arbitrary unfreeze | By - rupansh | On - 2021-12-22T13:33:42Z
 28. [d6f..4f1] minter: store action hash instead of full data | By - rupansh | On - 2021-12-22T13:23:21Z
 29. [adb..6f0] package.contract: update ethers | By - rupansh | On - 2021-12-21T12:14:52Z
 30. [7ee..1cf] add initial tests | By - rupansh | On - 2021-12-15T12:25:39Z
 31. [56e..376] minter: fix emition of QuorumFailure | By - rupansh | On - 2021-12-14T13:15:53Z
 32. [2e3..f6f] initial changes for batch transfer | By - rupansh | On - 2021-12-14T13:13:52Z
 33. [1e8..f83] add erc1155 contract | By - rupansh | On - 2021-12-03T11:29:12Z
 34. [0db..8e3] feat(xpnft): make xpnft enumerable | By - imsk17 | On - 2021-12-02T13:22:29Z
 35. [114..038] lint check | By - rupansh | On - 2021-12-02T13:13:55Z
 36. [2fe..21f] fix tests | By - rupansh | On - 2021-12-02T12:29:50Z
 37. [be9..fe1] Minter: initial erc1155 support | By - rupansh | On - 2021-12-02T12:00:55Z
 38. [155..a05] update deps | By - rupansh | On - 2021-12-02T12:00:36Z
 39. [ab4..0e8] add arguments.example.js | By - rupansh | On - 2021-10-25T06:29:16Z
 40. [820..50f] scripts: delploy: auto verify contracts | By - rupansh | On - 2021-10-25T06:23:18Z
 41. [5a6..40e] add .env.example | By - rupansh | On - 2021-10-14T12:53:12Z
 42. [bde..32b] add workflow for automatic typings build | By - rupansh | On - 2021-10-14T12:48:38Z
 43. [8e2..d7a] web3-mint-contract: move to root | By - rupansh | On - 2021-10-14T12:39:01Z
 44. [815..80d] submodule cleanup | By - rupansh | On - 2021-10-14T12:36:49Z
 45. [664..6f8] autogenerate types for contract | By - rupansh | On - 2021-10-14T12:34:09Z
 46. [1b5..ac8] lintcheck | By - rupansh | On - 2021-10-13T14:55:34Z
 47. [a97..431] Minter: minor contract improvements | By - rupansh | On - 2021-10-13T11:23:58Z
 48. [f3c..ae1] scripts: deploy use UserNftMinter | By - rupansh | On - 2021-10-06T13:28:53Z
 49. [9b1..88c] Minter: freeze: do not allow 0 value | By - rupansh | On - 2021-10-06T13:28:43Z
 50. [0bb..87d] feat(umt): remove redundant import | By - imsk17 | On - 2021-10-04T13:46:01Z

## erc1155


 1. [943..a28] Hedera: Deployment Script | By - imsk17 | On - 2022-11-23T14:21:17Z
 2. [7b0..f91] Skale: Mainnet and Questions for ERC20 | By - imsk17 | On - 2022-11-23T14:20:54Z
 3. [2e0..47c] contracts: erc20-minter: adapt transferFees to erc20 token | By - imsk17 | On - 2022-11-01T12:12:18Z
 4. [0f3..8e9] contracts: erc20: add a payment token | By - imsk17 | On - 2022-11-01T11:56:09Z
 5. [e8b..124] contracts: scripts: add deployment for skale | By - imsk17 | On - 2022-11-01T11:27:28Z
 6. [393..39b] contracts: minter-erc20: add a minter with erc20 support | By - imsk17 | On - 2022-11-01T10:58:00Z
 7. [90e..326] deploy: vechain: fix deployment script | By - imsk17 | On - 2022-09-26T10:35:55Z
 8. [023..ac7] scripts: add a deployment script for vechain | By - imsk17 | On - 2022-04-06T14:56:26Z
 9. [985..8b7] Minter: make actionCnt public | By - rupansh | On - 2022-03-03T12:24:47Z
 10. [60d..709] Minter: add method for updating groupKey | By - rupansh | On - 2022-02-24T13:06:09Z
 11. [387..830] Dummy Erc1155: add batch mint funcs | By - rupansh | On - 2022-02-24T12:32:18Z
 12. [ebb..e05] scripts: frost_gen: start frost uuid from 1 | By - rupansh | On - 2022-02-24T12:00:19Z
 13. [c6c..59f] Minter: emit burner address with unfreeze event | By - rupansh | On - 2022-02-14T14:36:57Z
 14. [7d7..89b] test: Minter: properly test whitelist behaviour | By - rupansh | On - 2022-02-14T09:40:43Z
 15. [a36..354] Minter: fix whitelist derp | By - rupansh | On - 2022-02-14T09:40:43Z
 16. [62f..f5b] ci: adapt co for erc1155 branch | By - imsk17 | On - 2022-02-09T13:11:57Z
 17. [858..676] ci: setup github action for erc1155 branch | By - imsk17 | On - 2022-02-09T13:08:29Z
 18. [887..553] update deploy script | By - rupansh | On - 2022-02-04T15:18:14Z
 19. [db4..b0d] update package.contract.json | By - rupansh | On - 2022-02-03T10:01:15Z
 20. [f65..aae] Minter: use memory instead of calldata for large arrays | By - rupansh | On - 2022-02-02T09:05:32Z
 21. [32e..17b] Minter: mark nftWhitelist as public | By - rupansh | On - 2022-02-01T14:42:53Z
 22. [85a..7e3] bump ethers | By - rupansh | On - 2022-02-01T12:52:18Z
 23. [5cb..48f] hardhat.config.ts: use default network config for local node | By - rupansh | On - 2022-02-01T12:52:04Z
 24. [ce8..4c3] update tests | By - rupansh | On - 2022-02-01T12:51:46Z
 25. [cb6..b13] Minter: minor fixes | By - rupansh | On - 2022-02-01T12:51:13Z
 26. [619..e58] lint check | By - rupansh | On - 2022-02-01T11:08:36Z
 27. [8b8..73f] contracts: initial migration to off-chain multisig | By - rupansh | On - 2022-02-01T10:55:56Z
 28. [868..d77] minor code quality improvements | By - rupansh | On - 2022-01-14T13:10:41Z
 29. [60f..f5a] Create erc-1155-bridge.md | By - Dima Brook | On - 2022-01-12T09:01:00Z
 30. [b10..5fc] Update XPNft1155.sol | By - Dima Brook | On - 2022-01-11T09:33:13Z
 31. [664..3e4] scripts: deploy: wait before ownership is done | By - rupansh | On - 2022-01-07T09:53:12Z
 32. [908..969] update deploy script | By - rupansh | On - 2021-12-27T10:36:22Z
 33. [461..d23] minter: allow multiple mintWith for batch | By - rupansh | On - 2021-12-26T12:19:10Z
 34. [b2a..c66] Minter: improve batch unfreeze | By - rupansh | On - 2021-12-23T13:13:17Z
 35. [0bd..3ca] minter: allow arbitrary unfreeze | By - rupansh | On - 2021-12-22T13:33:42Z
 36. [d6f..4f1] minter: store action hash instead of full data | By - rupansh | On - 2021-12-22T13:23:21Z
 37. [adb..6f0] package.contract: update ethers | By - rupansh | On - 2021-12-21T12:14:52Z
 38. [7ee..1cf] add initial tests | By - rupansh | On - 2021-12-15T12:25:39Z
 39. [56e..376] minter: fix emition of QuorumFailure | By - rupansh | On - 2021-12-14T13:15:53Z
 40. [2e3..f6f] initial changes for batch transfer | By - rupansh | On - 2021-12-14T13:13:52Z
 41. [1e8..f83] add erc1155 contract | By - rupansh | On - 2021-12-03T11:29:12Z
 42. [0db..8e3] feat(xpnft): make xpnft enumerable | By - imsk17 | On - 2021-12-02T13:22:29Z
 43. [114..038] lint check | By - rupansh | On - 2021-12-02T13:13:55Z
 44. [2fe..21f] fix tests | By - rupansh | On - 2021-12-02T12:29:50Z
 45. [be9..fe1] Minter: initial erc1155 support | By - rupansh | On - 2021-12-02T12:00:55Z
 46. [155..a05] update deps | By - rupansh | On - 2021-12-02T12:00:36Z
 47. [ab4..0e8] add arguments.example.js | By - rupansh | On - 2021-10-25T06:29:16Z
 48. [820..50f] scripts: delploy: auto verify contracts | By - rupansh | On - 2021-10-25T06:23:18Z
 49. [5a6..40e] add .env.example | By - rupansh | On - 2021-10-14T12:53:12Z
 50. [bde..32b] add workflow for automatic typings build | By - rupansh | On - 2021-10-14T12:48:38Z

## new


 1. [699..82a] Update hardhat.config.js | By - Dima Brook | On - 2022-03-15T07:25:46Z
 2. [3ca..c2b] scripts: deloy: wait for transferOwnership | By - rupansh | On - 2022-02-01T08:59:16Z
 3. [710..4d7] package.contract: bump ethers | By - rupansh | On - 2022-02-01T08:58:34Z
 4. [e43..965] bump hardhat | By - rupansh | On - 2022-02-01T08:58:11Z
 5. [56f..0f9] XPNET: change constructor | By - rupansh | On - 2022-02-01T08:57:49Z
 6. [025..aa6] workflows: gen-typechain: enable for erc1155 | By - rupansh | On - 2021-12-02T13:25:25Z
 7. [6f2..4bd] feat(xpnft): make xpnft enumerable | By - imsk17 | On - 2021-11-12T11:29:43Z
 8. [820..50f] scripts: delploy: auto verify contracts | By - rupansh | On - 2021-10-25T06:23:18Z
 9. [5a6..40e] add .env.example | By - rupansh | On - 2021-10-14T12:53:12Z
 10. [bde..32b] add workflow for automatic typings build | By - rupansh | On - 2021-10-14T12:48:38Z
 11. [8e2..d7a] web3-mint-contract: move to root | By - rupansh | On - 2021-10-14T12:39:01Z
 12. [815..80d] submodule cleanup | By - rupansh | On - 2021-10-14T12:36:49Z
 13. [664..6f8] autogenerate types for contract | By - rupansh | On - 2021-10-14T12:34:09Z
 14. [1b5..ac8] lintcheck | By - rupansh | On - 2021-10-13T14:55:34Z
 15. [a97..431] Minter: minor contract improvements | By - rupansh | On - 2021-10-13T11:23:58Z
 16. [f3c..ae1] scripts: deploy use UserNftMinter | By - rupansh | On - 2021-10-06T13:28:53Z
 17. [9b1..88c] Minter: freeze: do not allow 0 value | By - rupansh | On - 2021-10-06T13:28:43Z
 18. [0bb..87d] feat(umt): remove redundant import | By - imsk17 | On - 2021-10-04T13:46:01Z
 19. [8d7..ae0] feat(umt): handle tokenId inside the contract | By - imsk17 | On - 2021-10-04T12:59:40Z
 20. [b1b..cb4] feat(umt): add a counter to the contract | By - imsk17 | On - 2021-10-03T12:52:45Z
 21. [953..01c] Merge pull request #1 from xp-network/user | By - Sumit Kumar | On - 2021-10-02T09:00:44Z
 22. [99d..de3] chore(UserNftMinter): contract does not need to be Ownable | By - imsk17 | On - 2021-10-01T10:35:55Z
 23. [a14..e9d] feat(contracts): Add a UserMinter contract | By - imsk17 | On - 2021-09-30T10:17:13Z
 24. [b4c..4a2] update tests | By - rupansh | On - 2021-09-29T13:33:23Z
 25. [e87..52a] Minter: mark as ERC721Holder | By - rupansh | On - 2021-09-29T13:33:16Z
 26. [2b9..eeb] remove validator: allow validator to remove themselves | By - rupansh | On - 2021-09-29T12:14:33Z
 27. [966..e8a] initial transaction fees logic | By - rupansh | On - 2021-09-29T12:12:20Z
 28. [065..525] Minter: mark onERC721Received as whenNotPaused | By - rupansh | On - 2021-09-27T10:40:02Z
 29. [7b2..191] feat(chains): include harmony | By - imsk17 | On - 2021-09-27T09:38:19Z
 30. [795..6e6] Minter: ActionInfo: remove exec field | By - rupansh | On - 2021-09-26T13:36:02Z
 31. [58c..07c] QuorumFailed: only emit action id | By - rupansh | On - 2021-09-26T13:12:58Z
 32. [18c..3fd] minor fixes | By - rupansh | On - 2021-09-23T15:42:12Z
 33. [96f..bed] initial bridge tests | By - rupansh | On - 2021-09-23T14:58:48Z
 34. [dd4..d41] Minter: add set_threshold | By - rupansh | On - 2021-09-23T14:58:41Z
 35. [4db..dc7] scripts: deploy: fix mint_default | By - rupansh | On - 2021-09-23T09:44:33Z
 36. [f03..27a] Minter: mark withdraw_nft as whenNotPaused | By - rupansh | On - 2021-09-23T09:28:45Z
 37. [4e7..bd4] Minter: validate_action: account for quorum failure | By - rupansh | On - 2021-09-23T09:26:02Z
 38. [b1b..765] Minter: validate_action: verify action data | By - rupansh | On - 2021-09-23T09:20:12Z
 39. [ae6..cb6] fix indentation | By - rupansh | On - 2021-09-23T08:42:29Z
 40. [91d..4e2] Minter: add Pausing | By - rupansh | On - 2021-09-22T14:29:59Z
 41. [97c..e4d] Minter: whitelist: fix explictly convert ERC721 to address | By - rupansh | On - 2021-09-22T14:20:03Z
 42. [6e7..a7e] Minter: Multisig: removal and addition of validators | By - rupansh | On - 2021-09-22T14:18:38Z
 43. [f79..b1f] Minter: add nft whitelist | By - rupansh | On - 2021-09-22T14:17:14Z
 44. [0a4..456] switch nfts to erc721 | By - rupansh | On - 2021-09-22T13:37:45Z
 45. [097..f44] feat(chains): add celo | By - imsk17 | On - 2021-09-20T12:15:45Z
 46. [924..992] feat(chains): add ethereum classic | By - imsk17 | On - 2021-09-19T08:38:10Z
 47. [826..c85] feat(chains): add cronos | By - imsk17 | On - 2021-09-19T08:30:16Z
 48. [619..ee4] hardhat: config: add avalanche | By - rupansh | On - 2021-09-12T16:17:12Z
 49. [12d..db4] feat(chains): Add Fantom and Polygon Chains | By - imsk17 | On - 2021-09-12T09:23:53Z
 50. [441..d9e] minter-contract: fix contract caller | By - rupansh | On - 2021-09-08T10:15:43Z

## new-baseuri-1155


 1. [ee7..5b6] updated erc1155 collection contract | By - AlexSafepress | On - 2023-02-08T08:25:01Z
 2. [ca4..2af] initial commit for new base uri for erc1155 | By - AlexSafepress | On - 2023-02-08T06:59:36Z
 3. [46b..da1] update collection 1155 | By - AlexSafepress | On - 2023-02-07T14:36:28Z
 4. [cfa..6cf] update collection 1155 | By - AlexSafepress | On - 2023-02-07T14:33:42Z
 5. [8a6..6ba] update erc1155 collection contract | By - AlexSafepress | On - 2023-02-07T08:19:06Z
 6. [fcb..88d] added contracts for erc1155 auto deployment | By - AlexSafepress | On - 2023-02-06T12:25:04Z
 7. [db6..378] added contracts for erc1155 auto deployment | By - AlexSafepress | On - 2023-02-06T12:24:26Z
 8. [d8f..8e3] change name and revert back changes to collection creator smart contract | By - AlexSafepress | On - 2023-02-01T11:10:57Z
 9. [5b5..c1b] updated collection creator contract | By - AlexSafepress | On - 2023-01-31T12:53:02Z
 10. [e84..11e] updated collection creator to keep mapping of walletAddrss=>collections | By - AlexSafepress | On - 2023-01-29T07:02:19Z
 11. [eb3..374] updated contracts | By - AlexSafepress | On - 2023-01-24T13:37:52Z
 12. [413..2ab] updated contracts | By - AlexSafepress | On - 2023-01-24T13:31:51Z
 13. [130..b04] solidity v0813 to v0817 | By - Alex Moshinsky | On - 2023-01-19T15:52:38Z
 14. [2d2..3b6] add optimizer | By - Alex Moshinsky | On - 2023-01-19T15:51:54Z
 15. [ffe..778] fix size contract | By - Alex Moshinsky | On - 2023-01-19T15:34:21Z
 16. [aa4..be7] add contract number 6 | By - Alex Moshinsky | On - 2023-01-19T15:29:07Z
 17. [688..a02] add contract number 6 | By - Alex Moshinsky | On - 2023-01-19T15:27:24Z
 18. [3fc..e76] updated packages | By - AlexSafepress | On - 2023-01-19T13:09:22Z
 19. [cd9..e0b] added new data to logs | By - AlexSafepress | On - 2023-01-19T12:24:13Z
 20. [ff8..fa1] fix collection contract name in collectioncreator import | By - AlexSafepress | On - 2023-01-18T12:26:12Z
 21. [4ca..5d6] updated collection creation contracts to now allow usage of ownable | By - AlexSafepress | On - 2023-01-18T12:21:04Z
 22. [9ca..f41] updated collection creation contracts | By - AlexSafepress | On - 2023-01-18T07:10:02Z
 23. [c20..c16] update for collectionCreator deployment | By - AlexSafepress | On - 2023-01-16T14:58:27Z
 24. [b44..3db] update for collectionCreator deployment | By - AlexSafepress | On - 2023-01-16T14:57:41Z
 25. [f00..5d8] updated new collection creator contract | By - AlexSafepress | On - 2023-01-15T00:18:29Z
 26. [b55..913] added contracts and documentation for the new xpnft | By - AlexSafepress | On - 2023-01-03T12:40:45Z
 27. [943..a28] Hedera: Deployment Script | By - imsk17 | On - 2022-11-23T14:21:17Z
 28. [7b0..f91] Skale: Mainnet and Questions for ERC20 | By - imsk17 | On - 2022-11-23T14:20:54Z
 29. [2e0..47c] contracts: erc20-minter: adapt transferFees to erc20 token | By - imsk17 | On - 2022-11-01T12:12:18Z
 30. [0f3..8e9] contracts: erc20: add a payment token | By - imsk17 | On - 2022-11-01T11:56:09Z
 31. [e8b..124] contracts: scripts: add deployment for skale | By - imsk17 | On - 2022-11-01T11:27:28Z
 32. [393..39b] contracts: minter-erc20: add a minter with erc20 support | By - imsk17 | On - 2022-11-01T10:58:00Z
 33. [90e..326] deploy: vechain: fix deployment script | By - imsk17 | On - 2022-09-26T10:35:55Z
 34. [023..ac7] scripts: add a deployment script for vechain | By - imsk17 | On - 2022-04-06T14:56:26Z
 35. [985..8b7] Minter: make actionCnt public | By - rupansh | On - 2022-03-03T12:24:47Z
 36. [60d..709] Minter: add method for updating groupKey | By - rupansh | On - 2022-02-24T13:06:09Z
 37. [387..830] Dummy Erc1155: add batch mint funcs | By - rupansh | On - 2022-02-24T12:32:18Z
 38. [ebb..e05] scripts: frost_gen: start frost uuid from 1 | By - rupansh | On - 2022-02-24T12:00:19Z
 39. [c6c..59f] Minter: emit burner address with unfreeze event | By - rupansh | On - 2022-02-14T14:36:57Z
 40. [7d7..89b] test: Minter: properly test whitelist behaviour | By - rupansh | On - 2022-02-14T09:40:43Z
 41. [a36..354] Minter: fix whitelist derp | By - rupansh | On - 2022-02-14T09:40:43Z
 42. [62f..f5b] ci: adapt co for erc1155 branch | By - imsk17 | On - 2022-02-09T13:11:57Z
 43. [858..676] ci: setup github action for erc1155 branch | By - imsk17 | On - 2022-02-09T13:08:29Z
 44. [887..553] update deploy script | By - rupansh | On - 2022-02-04T15:18:14Z
 45. [db4..b0d] update package.contract.json | By - rupansh | On - 2022-02-03T10:01:15Z
 46. [f65..aae] Minter: use memory instead of calldata for large arrays | By - rupansh | On - 2022-02-02T09:05:32Z
 47. [32e..17b] Minter: mark nftWhitelist as public | By - rupansh | On - 2022-02-01T14:42:53Z
 48. [85a..7e3] bump ethers | By - rupansh | On - 2022-02-01T12:52:18Z
 49. [5cb..48f] hardhat.config.ts: use default network config for local node | By - rupansh | On - 2022-02-01T12:52:04Z
 50. [ce8..4c3] update tests | By - rupansh | On - 2022-02-01T12:51:46Z

## production


 1. [ea4..046] gitignore: ignore all frost groups | By - imsk17 | On - 2023-02-14T08:29:53Z
 2. [ee7..5b6] updated erc1155 collection contract | By - AlexSafepress | On - 2023-02-08T08:25:01Z
 3. [ca4..2af] initial commit for new base uri for erc1155 | By - AlexSafepress | On - 2023-02-08T06:59:36Z
 4. [46b..da1] update collection 1155 | By - AlexSafepress | On - 2023-02-07T14:36:28Z
 5. [cfa..6cf] update collection 1155 | By - AlexSafepress | On - 2023-02-07T14:33:42Z
 6. [8a6..6ba] update erc1155 collection contract | By - AlexSafepress | On - 2023-02-07T08:19:06Z
 7. [fcb..88d] added contracts for erc1155 auto deployment | By - AlexSafepress | On - 2023-02-06T12:25:04Z
 8. [db6..378] added contracts for erc1155 auto deployment | By - AlexSafepress | On - 2023-02-06T12:24:26Z
 9. [d8f..8e3] change name and revert back changes to collection creator smart contract | By - AlexSafepress | On - 2023-02-01T11:10:57Z
 10. [5b5..c1b] updated collection creator contract | By - AlexSafepress | On - 2023-01-31T12:53:02Z
 11. [e84..11e] updated collection creator to keep mapping of walletAddrss=>collections | By - AlexSafepress | On - 2023-01-29T07:02:19Z
 12. [eb3..374] updated contracts | By - AlexSafepress | On - 2023-01-24T13:37:52Z
 13. [413..2ab] updated contracts | By - AlexSafepress | On - 2023-01-24T13:31:51Z
 14. [130..b04] solidity v0813 to v0817 | By - Alex Moshinsky | On - 2023-01-19T15:52:38Z
 15. [2d2..3b6] add optimizer | By - Alex Moshinsky | On - 2023-01-19T15:51:54Z
 16. [ffe..778] fix size contract | By - Alex Moshinsky | On - 2023-01-19T15:34:21Z
 17. [aa4..be7] add contract number 6 | By - Alex Moshinsky | On - 2023-01-19T15:29:07Z
 18. [688..a02] add contract number 6 | By - Alex Moshinsky | On - 2023-01-19T15:27:24Z
 19. [3fc..e76] updated packages | By - AlexSafepress | On - 2023-01-19T13:09:22Z
 20. [cd9..e0b] added new data to logs | By - AlexSafepress | On - 2023-01-19T12:24:13Z
 21. [ff8..fa1] fix collection contract name in collectioncreator import | By - AlexSafepress | On - 2023-01-18T12:26:12Z
 22. [4ca..5d6] updated collection creation contracts to now allow usage of ownable | By - AlexSafepress | On - 2023-01-18T12:21:04Z
 23. [9ca..f41] updated collection creation contracts | By - AlexSafepress | On - 2023-01-18T07:10:02Z
 24. [c20..c16] update for collectionCreator deployment | By - AlexSafepress | On - 2023-01-16T14:58:27Z
 25. [b44..3db] update for collectionCreator deployment | By - AlexSafepress | On - 2023-01-16T14:57:41Z
 26. [f00..5d8] updated new collection creator contract | By - AlexSafepress | On - 2023-01-15T00:18:29Z
 27. [b55..913] added contracts and documentation for the new xpnft | By - AlexSafepress | On - 2023-01-03T12:40:45Z
 28. [943..a28] Hedera: Deployment Script | By - imsk17 | On - 2022-11-23T14:21:17Z
 29. [7b0..f91] Skale: Mainnet and Questions for ERC20 | By - imsk17 | On - 2022-11-23T14:20:54Z
 30. [2e0..47c] contracts: erc20-minter: adapt transferFees to erc20 token | By - imsk17 | On - 2022-11-01T12:12:18Z
 31. [0f3..8e9] contracts: erc20: add a payment token | By - imsk17 | On - 2022-11-01T11:56:09Z
 32. [e8b..124] contracts: scripts: add deployment for skale | By - imsk17 | On - 2022-11-01T11:27:28Z
 33. [393..39b] contracts: minter-erc20: add a minter with erc20 support | By - imsk17 | On - 2022-11-01T10:58:00Z
 34. [90e..326] deploy: vechain: fix deployment script | By - imsk17 | On - 2022-09-26T10:35:55Z
 35. [023..ac7] scripts: add a deployment script for vechain | By - imsk17 | On - 2022-04-06T14:56:26Z
 36. [985..8b7] Minter: make actionCnt public | By - rupansh | On - 2022-03-03T12:24:47Z
 37. [60d..709] Minter: add method for updating groupKey | By - rupansh | On - 2022-02-24T13:06:09Z
 38. [387..830] Dummy Erc1155: add batch mint funcs | By - rupansh | On - 2022-02-24T12:32:18Z
 39. [ebb..e05] scripts: frost_gen: start frost uuid from 1 | By - rupansh | On - 2022-02-24T12:00:19Z
 40. [c6c..59f] Minter: emit burner address with unfreeze event | By - rupansh | On - 2022-02-14T14:36:57Z
 41. [7d7..89b] test: Minter: properly test whitelist behaviour | By - rupansh | On - 2022-02-14T09:40:43Z
 42. [a36..354] Minter: fix whitelist derp | By - rupansh | On - 2022-02-14T09:40:43Z
 43. [62f..f5b] ci: adapt co for erc1155 branch | By - imsk17 | On - 2022-02-09T13:11:57Z
 44. [858..676] ci: setup github action for erc1155 branch | By - imsk17 | On - 2022-02-09T13:08:29Z
 45. [887..553] update deploy script | By - rupansh | On - 2022-02-04T15:18:14Z
 46. [db4..b0d] update package.contract.json | By - rupansh | On - 2022-02-03T10:01:15Z
 47. [f65..aae] Minter: use memory instead of calldata for large arrays | By - rupansh | On - 2022-02-02T09:05:32Z
 48. [32e..17b] Minter: mark nftWhitelist as public | By - rupansh | On - 2022-02-01T14:42:53Z
 49. [85a..7e3] bump ethers | By - rupansh | On - 2022-02-01T12:52:18Z
 50. [5cb..48f] hardhat.config.ts: use default network config for local node | By - rupansh | On - 2022-02-01T12:52:04Z

## testnet


 1. [c42..545] feat(scripts): add testnet deploy script | By - imsk17 | On - 2022-01-23T13:55:02Z
 2. [3f4..d5d] feat(minter): create seprate contract for testnet | By - imsk17 | On - 2021-12-13T11:36:46Z
 3. [025..aa6] workflows: gen-typechain: enable for erc1155 | By - rupansh | On - 2021-12-02T13:25:25Z
 4. [6f2..4bd] feat(xpnft): make xpnft enumerable | By - imsk17 | On - 2021-11-12T11:29:43Z
 5. [820..50f] scripts: delploy: auto verify contracts | By - rupansh | On - 2021-10-25T06:23:18Z
 6. [5a6..40e] add .env.example | By - rupansh | On - 2021-10-14T12:53:12Z
 7. [bde..32b] add workflow for automatic typings build | By - rupansh | On - 2021-10-14T12:48:38Z
 8. [8e2..d7a] web3-mint-contract: move to root | By - rupansh | On - 2021-10-14T12:39:01Z
 9. [815..80d] submodule cleanup | By - rupansh | On - 2021-10-14T12:36:49Z
 10. [664..6f8] autogenerate types for contract | By - rupansh | On - 2021-10-14T12:34:09Z
 11. [1b5..ac8] lintcheck | By - rupansh | On - 2021-10-13T14:55:34Z
 12. [a97..431] Minter: minor contract improvements | By - rupansh | On - 2021-10-13T11:23:58Z
 13. [f3c..ae1] scripts: deploy use UserNftMinter | By - rupansh | On - 2021-10-06T13:28:53Z
 14. [9b1..88c] Minter: freeze: do not allow 0 value | By - rupansh | On - 2021-10-06T13:28:43Z
 15. [0bb..87d] feat(umt): remove redundant import | By - imsk17 | On - 2021-10-04T13:46:01Z
 16. [8d7..ae0] feat(umt): handle tokenId inside the contract | By - imsk17 | On - 2021-10-04T12:59:40Z
 17. [b1b..cb4] feat(umt): add a counter to the contract | By - imsk17 | On - 2021-10-03T12:52:45Z
 18. [953..01c] Merge pull request #1 from xp-network/user | By - Sumit Kumar | On - 2021-10-02T09:00:44Z
 19. [99d..de3] chore(UserNftMinter): contract does not need to be Ownable | By - imsk17 | On - 2021-10-01T10:35:55Z
 20. [a14..e9d] feat(contracts): Add a UserMinter contract | By - imsk17 | On - 2021-09-30T10:17:13Z
 21. [b4c..4a2] update tests | By - rupansh | On - 2021-09-29T13:33:23Z
 22. [e87..52a] Minter: mark as ERC721Holder | By - rupansh | On - 2021-09-29T13:33:16Z
 23. [2b9..eeb] remove validator: allow validator to remove themselves | By - rupansh | On - 2021-09-29T12:14:33Z
 24. [966..e8a] initial transaction fees logic | By - rupansh | On - 2021-09-29T12:12:20Z
 25. [065..525] Minter: mark onERC721Received as whenNotPaused | By - rupansh | On - 2021-09-27T10:40:02Z
 26. [7b2..191] feat(chains): include harmony | By - imsk17 | On - 2021-09-27T09:38:19Z
 27. [795..6e6] Minter: ActionInfo: remove exec field | By - rupansh | On - 2021-09-26T13:36:02Z
 28. [58c..07c] QuorumFailed: only emit action id | By - rupansh | On - 2021-09-26T13:12:58Z
 29. [18c..3fd] minor fixes | By - rupansh | On - 2021-09-23T15:42:12Z
 30. [96f..bed] initial bridge tests | By - rupansh | On - 2021-09-23T14:58:48Z
 31. [dd4..d41] Minter: add set_threshold | By - rupansh | On - 2021-09-23T14:58:41Z
 32. [4db..dc7] scripts: deploy: fix mint_default | By - rupansh | On - 2021-09-23T09:44:33Z
 33. [f03..27a] Minter: mark withdraw_nft as whenNotPaused | By - rupansh | On - 2021-09-23T09:28:45Z
 34. [4e7..bd4] Minter: validate_action: account for quorum failure | By - rupansh | On - 2021-09-23T09:26:02Z
 35. [b1b..765] Minter: validate_action: verify action data | By - rupansh | On - 2021-09-23T09:20:12Z
 36. [ae6..cb6] fix indentation | By - rupansh | On - 2021-09-23T08:42:29Z
 37. [91d..4e2] Minter: add Pausing | By - rupansh | On - 2021-09-22T14:29:59Z
 38. [97c..e4d] Minter: whitelist: fix explictly convert ERC721 to address | By - rupansh | On - 2021-09-22T14:20:03Z
 39. [6e7..a7e] Minter: Multisig: removal and addition of validators | By - rupansh | On - 2021-09-22T14:18:38Z
 40. [f79..b1f] Minter: add nft whitelist | By - rupansh | On - 2021-09-22T14:17:14Z
 41. [0a4..456] switch nfts to erc721 | By - rupansh | On - 2021-09-22T13:37:45Z
 42. [097..f44] feat(chains): add celo | By - imsk17 | On - 2021-09-20T12:15:45Z
 43. [924..992] feat(chains): add ethereum classic | By - imsk17 | On - 2021-09-19T08:38:10Z
 44. [826..c85] feat(chains): add cronos | By - imsk17 | On - 2021-09-19T08:30:16Z
 45. [619..ee4] hardhat: config: add avalanche | By - rupansh | On - 2021-09-12T16:17:12Z
 46. [12d..db4] feat(chains): Add Fantom and Polygon Chains | By - imsk17 | On - 2021-09-12T09:23:53Z
 47. [441..d9e] minter-contract: fix contract caller | By - rupansh | On - 2021-09-08T10:15:43Z
 48. [1c1..76a] Minter: fix transfer_nft minting | By - VKint | On - 2021-08-15T16:49:49Z
 49. [a98..a39] add unfreeze_verify_nft | By - VKint | On - 2021-08-12T15:24:28Z
 50. [96e..2f1] initial nft support | By - VKint | On - 2021-08-12T13:07:26Z

## testnet-erc-1155


 1. [fa6..2a1] add tron_xpnft | By - Dima Brook | On - 2022-05-29T07:48:37Z
 2. [eca..884] save testnet | By - Dima Brook | On - 2022-05-29T07:47:48Z
 3. [637..6c8] Update hardhat.config.ts | By - Dima Brook | On - 2022-04-19T19:14:31Z
 4. [10c..c8c] Merge branch 'erc1155' into testnet-erc-1155 | By - Dima Brook | On - 2022-04-19T18:46:07Z
 5. [023..ac7] scripts: add a deployment script for vechain | By - imsk17 | On - 2022-04-06T14:56:26Z
 6. [b15..fc4] extend gitignore | By - Dima Brook | On - 2022-03-15T07:27:42Z
 7. [581..633] Delete frost_group.txt | By - Dima Brook | On - 2022-03-15T07:13:20Z
 8. [4f2..92c] update setup | By - Dima Brook | On - 2022-03-15T07:06:57Z
 9. [985..8b7] Minter: make actionCnt public | By - rupansh | On - 2022-03-03T12:24:47Z
 10. [60d..709] Minter: add method for updating groupKey | By - rupansh | On - 2022-02-24T13:06:09Z
 11. [387..830] Dummy Erc1155: add batch mint funcs | By - rupansh | On - 2022-02-24T12:32:18Z
 12. [ebb..e05] scripts: frost_gen: start frost uuid from 1 | By - rupansh | On - 2022-02-24T12:00:19Z
 13. [c6c..59f] Minter: emit burner address with unfreeze event | By - rupansh | On - 2022-02-14T14:36:57Z
 14. [a36..6e8] create testnet branch | By - Dima Brook | On - 2022-02-14T14:13:04Z
 15. [7d7..89b] test: Minter: properly test whitelist behaviour | By - rupansh | On - 2022-02-14T09:40:43Z
 16. [a36..354] Minter: fix whitelist derp | By - rupansh | On - 2022-02-14T09:40:43Z
 17. [62f..f5b] ci: adapt co for erc1155 branch | By - imsk17 | On - 2022-02-09T13:11:57Z
 18. [858..676] ci: setup github action for erc1155 branch | By - imsk17 | On - 2022-02-09T13:08:29Z
 19. [887..553] update deploy script | By - rupansh | On - 2022-02-04T15:18:14Z
 20. [db4..b0d] update package.contract.json | By - rupansh | On - 2022-02-03T10:01:15Z
 21. [f65..aae] Minter: use memory instead of calldata for large arrays | By - rupansh | On - 2022-02-02T09:05:32Z
 22. [32e..17b] Minter: mark nftWhitelist as public | By - rupansh | On - 2022-02-01T14:42:53Z
 23. [85a..7e3] bump ethers | By - rupansh | On - 2022-02-01T12:52:18Z
 24. [5cb..48f] hardhat.config.ts: use default network config for local node | By - rupansh | On - 2022-02-01T12:52:04Z
 25. [ce8..4c3] update tests | By - rupansh | On - 2022-02-01T12:51:46Z
 26. [cb6..b13] Minter: minor fixes | By - rupansh | On - 2022-02-01T12:51:13Z
 27. [619..e58] lint check | By - rupansh | On - 2022-02-01T11:08:36Z
 28. [8b8..73f] contracts: initial migration to off-chain multisig | By - rupansh | On - 2022-02-01T10:55:56Z
 29. [868..d77] minor code quality improvements | By - rupansh | On - 2022-01-14T13:10:41Z
 30. [60f..f5a] Create erc-1155-bridge.md | By - Dima Brook | On - 2022-01-12T09:01:00Z
 31. [b10..5fc] Update XPNft1155.sol | By - Dima Brook | On - 2022-01-11T09:33:13Z
 32. [664..3e4] scripts: deploy: wait before ownership is done | By - rupansh | On - 2022-01-07T09:53:12Z
 33. [908..969] update deploy script | By - rupansh | On - 2021-12-27T10:36:22Z
 34. [461..d23] minter: allow multiple mintWith for batch | By - rupansh | On - 2021-12-26T12:19:10Z
 35. [b2a..c66] Minter: improve batch unfreeze | By - rupansh | On - 2021-12-23T13:13:17Z
 36. [0bd..3ca] minter: allow arbitrary unfreeze | By - rupansh | On - 2021-12-22T13:33:42Z
 37. [d6f..4f1] minter: store action hash instead of full data | By - rupansh | On - 2021-12-22T13:23:21Z
 38. [adb..6f0] package.contract: update ethers | By - rupansh | On - 2021-12-21T12:14:52Z
 39. [7ee..1cf] add initial tests | By - rupansh | On - 2021-12-15T12:25:39Z
 40. [56e..376] minter: fix emition of QuorumFailure | By - rupansh | On - 2021-12-14T13:15:53Z
 41. [2e3..f6f] initial changes for batch transfer | By - rupansh | On - 2021-12-14T13:13:52Z
 42. [1e8..f83] add erc1155 contract | By - rupansh | On - 2021-12-03T11:29:12Z
 43. [0db..8e3] feat(xpnft): make xpnft enumerable | By - imsk17 | On - 2021-12-02T13:22:29Z
 44. [114..038] lint check | By - rupansh | On - 2021-12-02T13:13:55Z
 45. [2fe..21f] fix tests | By - rupansh | On - 2021-12-02T12:29:50Z
 46. [be9..fe1] Minter: initial erc1155 support | By - rupansh | On - 2021-12-02T12:00:55Z
 47. [155..a05] update deps | By - rupansh | On - 2021-12-02T12:00:36Z
 48. [ab4..0e8] add arguments.example.js | By - rupansh | On - 2021-10-25T06:29:16Z
 49. [820..50f] scripts: delploy: auto verify contracts | By - rupansh | On - 2021-10-25T06:23:18Z
 50. [5a6..40e] add .env.example | By - rupansh | On - 2021-10-14T12:53:12Z

# new-xp-website

## main


 1. [376..4e2] site updates | By - AlexeyAdoniev | On - 2023-02-13T16:44:55Z
 2. [5d5..969] moon cs2 | By - AlexeyAdoniev | On - 2023-02-13T16:23:46Z
 3. [d8e..41e] moon cs | By - AlexeyAdoniev | On - 2023-02-12T15:21:18Z
 4. [8d3..69b] worldofv | By - AlexeyAdoniev | On - 2023-02-12T13:56:12Z
 5. [762..8bf] new case study | By - AlexeyAdoniev | On - 2023-02-06T15:54:16Z
 6. [59d..ba9] style fix | By - AlexeyAdoniev | On - 2023-02-02T09:10:01Z
 7. [acb..81c] news update | By - AlexeyAdoniev | On - 2023-01-30T13:54:03Z
 8. [0fb..d67] dcp page | By - AlexeyAdoniev | On - 2023-01-29T14:31:25Z
 9. [ca1..63b] dcp cs | By - AlexeyAdoniev | On - 2023-01-29T10:58:53Z
 10. [84d..8de] dec pictures case study | By - AlexeyAdoniev | On - 2023-01-29T09:05:45Z
 11. [5a0..2f0] remove team page | By - AlexeyAdoniev | On - 2023-01-22T14:09:43Z
 12. [e8c..a19] remove team | By - AlexeyAdoniev | On - 2023-01-22T13:55:27Z
 13. [930..638] eot case study | By - AlexeyAdoniev | On - 2023-01-22T13:07:51Z
 14. [92e..b25] site updates | By - AlexeyAdoniev | On - 2023-01-16T17:00:01Z
 15. [d35..f15] inka empire | By - AlexeyAdoniev | On - 2023-01-15T16:32:10Z
 16. [6a4..7b0] add header | By - Alex Moshinsky | On - 2023-01-15T15:24:20Z
 17. [064..1ed] inka caseStudy | By - AlexeyAdoniev | On - 2023-01-15T12:36:14Z
 18. [91b..2e3] a | By - Alex Moshinsky | On - 2023-01-15T08:30:20Z
 19. [0d2..79a] fix top news add new tab | By - Alex Moshinsky | On - 2023-01-10T14:57:55Z
 20. [983..359] fixes | By - Alex Moshinsky | On - 2023-01-10T14:55:50Z
 21. [27f..77f] update website | By - Alex Moshinsky | On - 2023-01-09T19:15:27Z
 22. [781..db8] navigation text fix | By - Rodion Green | On - 2023-01-09T12:21:32Z
 23. [eb3..2c1] a | By - Alex Moshinsky | On - 2023-01-08T16:48:23Z
 24. [92a..98e] fix text | By - Alex Moshinsky | On - 2023-01-08T15:32:27Z
 25. [5c8..334] links fixed, typos fixed | By - Rodion Green | On - 2023-01-08T13:51:26Z
 26. [be9..455] bnb cs | By - AlexeyAdoniev | On - 2023-01-08T10:37:35Z
 27. [8a1..de8] picture margine fix on desktop, missing links added | By - Rodion Green | On - 2023-01-03T12:58:36Z
 28. [425..5d2] update og:description | By - Alex Moshinsky | On - 2023-01-02T19:54:14Z
 29. [310..92e] update meta image for solana and footer text | By - Alex Moshinsky | On - 2023-01-02T19:43:51Z
 30. [3ff..76c] fix solana | By - Alex Moshinsky | On - 2023-01-02T19:12:56Z
 31. [1db..65f] add solana case study | By - AlexeyAdoniev | On - 2023-01-01T20:41:10Z
 32. [052..556] XP.network typos, hyperlinks fixes, unneccesary labels | By - Rodion Green | On - 2022-12-28T12:47:38Z
 33. [04f..530] aptos typos | By - Rodion Green | On - 2022-12-28T09:05:41Z
 34. [54c..bd7] typos | By - Rodion Green | On - 2022-12-28T08:36:56Z
 35. [2c2..cc7] change hero text | By - Alex Moshinsky | On - 2022-12-27T12:55:43Z
 36. [e96..387] fix padding | By - Alex Moshinsky | On - 2022-12-27T11:26:17Z
 37. [76f..f40] add chains | By - Alex Moshinsky | On - 2022-12-27T11:16:22Z
 38. [036..352] fix aptos meta | By - AlexeyAdoniev | On - 2022-12-25T15:56:28Z
 39. [3aa..a19] aptos button text change | By - Alex Moshinsky | On - 2022-12-25T15:29:57Z
 40. [9b1..5cf] aptos case study | By - AlexeyAdoniev | On - 2022-12-25T14:21:26Z
 41. [7a9..064] typos fixes | By - Rodion Green | On - 2022-12-25T11:54:49Z
 42. [ea1..3b7] meta data fix | By - Rodion Green | On - 2022-12-25T09:14:06Z
 43. [0e0..21c] a | By - Alex Moshinsky | On - 2022-12-21T08:48:39Z
 44. [3a8..f50] add metatag | By - AlexeyAdoniev | On - 2022-12-21T08:11:11Z
 45. [84b..0f4] case stydies ui fix | By - YuraDXPNetwork | On - 2022-12-20T20:31:28Z
 46. [64d..281] cadusius header fix | By - YuraDXPNetwork | On - 2022-12-20T14:17:29Z
 47. [bf4..0e7] caduceus page + main page case study | By - Rodion Green | On - 2022-12-20T08:46:14Z
 48. [c46..dba] fixes caduceus | By - AlexeyAdoniev | On - 2022-12-19T14:27:48Z
 49. [5c6..8c2] caduceus case study | By - AlexeyAdoniev | On - 2022-12-19T08:13:59Z
 50. [28a..527] bugs fixes, data updates | By - AlexeyAdoniev | On - 2022-12-14T08:51:33Z

# deploying_tezos

## main


 1. [22f..dc5] Readme: Update | By - imsk17 | On - 2023-02-13T13:52:27Z
 2. [099..a57] Scripts: Add XpBridge Depl script | By - imsk17 | On - 2023-02-13T13:51:57Z
 3. [8a8..2a9] Contracts: add amt as a parameter | By - imsk17 | On - 2023-02-13T13:51:14Z
 4. [bf3..bcc] Contract: Add Amt as a Parameter for SFTs | By - imsk17 | On - 2023-02-06T13:12:27Z
 5. [04c..587] add tzip16 metadata uri | By - imsk17 | On - 2022-12-25T11:35:39Z
 6. [4fa..77c] Add A Readme | By - imsk17 | On - 2022-12-15T12:40:02Z
 7. [2da..5fb] fixes for xpnft depl | By - imsk17 | On - 2022-12-15T12:31:09Z
 8. [0bf..6d8] add a deployment script for xpnft | By - imsk17 | On - 2022-12-15T09:43:57Z
 9. [463..c01] Update xpbridge.py | By - Dima Brook | On - 2022-08-08T12:19:02Z
 10. [6ab..d25] Update xpnft.py | By - Dima Brook | On - 2022-08-08T12:17:58Z
 11. [159..da3] Update README.md | By - Dima Brook | On - 2022-03-17T12:37:31Z
 12. [db8..3a1] fix | By - Dima Brook | On - 2022-03-16T18:07:11Z
 13. [186..8d1] add setup | By - Dima Brook | On - 2022-03-14T19:53:56Z
 14. [aef..100] add setup | By - Dima Brook | On - 2022-03-14T19:53:06Z
 15. [85e..4af] second commit | By - Dima Brook | On - 2022-03-14T19:48:13Z
 16. [316..b46] first commit | By - Dima Brook | On - 2022-03-14T12:51:44Z

# w-nft-api

## cron


 1. [201..086] getNftUri method | By - AlexeyAdoniev | On - 2022-10-12T06:53:07Z
 2. [445..2b9] getTokenURI | By - AlexeyAdoniev | On - 2022-10-11T05:49:04Z
 3. [2a7..d81] cron job for refetching metaData of nfts with name of  XP.Network Wrapped NFT | By - AlexeyAdoniev | On - 2022-10-06T12:57:09Z
 4. [b72..13b] wrapper: fix typo in storeIpfs | By - rupansh | On - 2022-09-25T10:31:48Z
 5. [d02..748] removed infinite loop | By - Ruby Edelstein | On - 2022-09-25T10:18:48Z
 6. [13c..822] added getwnft logs | By - Ruby Edelstein | On - 2022-09-25T10:15:08Z
 7. [f38..ecf] fixed anti ddos derp | By - Ruby Edelstein | On - 2022-09-25T10:12:43Z
 8. [bf4..786] anti ddos | By - Ruby Edelstein | On - 2022-09-25T10:12:12Z
 9. [258..00d] routes: wrapperRoutes: add origin token id support for elrond | By - rupansh | On - 2022-09-13T18:03:49Z
 10. [e27..f65] add dependency graph | By - Dima Brook | On - 2022-09-12T12:35:32Z
 11. [f7c..58e] add call diagram | By - Dima Brook | On - 2022-09-12T11:33:17Z
 12. [d52..bc0] add Readme.md & refactor string utils | By - Dima Brook | On - 2022-09-12T11:09:29Z
 13. [cc8..a89] routes: wrapperRoutes: origin token id: add endpoint for decimal tokenId | By - rupansh | On - 2022-09-07T15:58:05Z
 14. [06a..d63] Metadata URI: Move to Env Variable instead of Hardcode | By - imsk17 | On - 2022-08-31T10:00:20Z
 15. [aca..727] check nft api if not in db | By - imsk17 | On - 2022-08-16T10:54:30Z
 16. [d1b..fd4] Update .env.example | By - Dima Brook | On - 2022-08-08T09:35:56Z
 17. [02b..b74] add route for getting nft by origin details | By - rupansh | On - 2022-08-05T17:29:51Z
 18. [13b..d48] wrapper: handle ratelimit for web3.storage | By - rupansh | On - 2022-07-19T12:32:29Z
 19. [96d..535] Merge pull request #5 from XP-NETWORK/ors_task-query_cron | By - VKint | On - 2022-05-26T14:54:22Z
 20. [af0..5f9] added logs with id to every error in cron class | By - Or Kilim | On - 2022-05-26T14:22:10Z
 21. [ec5..758] reverted from localhost config | By - Or Kilim | On - 2022-05-26T14:04:21Z
 22. [e84..7c6] removed console.logs | By - Or Kilim | On - 2022-05-26T14:00:46Z
 23. [107..09c] tried locally with local connection string | By - Or Kilim | On - 2022-05-26T13:59:17Z
 24. [098..b78] changed path in package.json in start script | By - Or Kilim | On - 2022-05-26T13:40:16Z
 25. [b55..c07] changed importing of cron, now imported everything | By - Or Kilim | On - 2022-05-26T13:35:14Z
 26. [658..ec7] Merge pull request #4 from XP-NETWORK/ors_task-query_cron | By - VKint | On - 2022-05-26T13:13:51Z
 27. [8bc..d20] updated package.json | By - Or Kilim | On - 2022-05-26T13:00:24Z
 28. [c41..70e] added the cron to src/index.ts at callback when we connect to mongo | By - Or Kilim | On - 2022-05-26T12:59:14Z
 29. [09b..4e5] Merge pull request #3 from XP-NETWORK/ors_task-query_cron | By - VKint | On - 2022-05-26T12:52:08Z
 30. [964..1b6] put correct connection string | By - Or Kilim | On - 2022-05-26T12:49:04Z
 31. [2c7..fbf] deleted localhost connection string | By - Or Kilim | On - 2022-05-26T12:48:28Z
 32. [a29..9d8] refactored code, added two statics function to wnfts model and interface | By - Or Kilim | On - 2022-05-26T12:43:11Z
 33. [0a5..a5a] Merge pull request #2 from XP-NETWORK/ors_task-query_cron | By - VKint | On - 2022-05-26T08:07:27Z
 34. [518..f29] delete package-lock.json and changed 'start' script to js instead of ts | By - Or Kilim | On - 2022-05-23T14:06:23Z
 35. [ef7..472] function for cron now more stable | By - Or Kilim | On - 2022-05-23T13:55:00Z
 36. [adc..cab] added a log message if name retrieved from axios call is undefined and changed error logs if there is a problem with axios call | By - Or Kilim | On - 2022-05-19T08:47:46Z
 37. [7da..153] added cron to 'services' folder inside 'cron' folder inside index.ts | By - Or Kilim | On - 2022-05-19T08:40:51Z
 38. [711..bb7] no lock | By - Or Kilim | On - 2022-05-19T08:22:12Z
 39. [234..79e] added cron for handling NFTs with generic 'XP.Network Wrapped NFT' name | By - Or Kilim | On - 2022-05-18T16:04:15Z
 40. [d2b..8b4] updated uri | By - Ruby Edelstein | On - 2022-03-04T15:31:19Z
 41. [51e..bff] wrapper: use findOneAndUpdate | By - rupansh | On - 2022-03-04T15:27:08Z
 42. [4ac..821] wrapper: change exists usage | By - rupansh | On - 2022-03-04T15:12:08Z
 43. [cb8..e42] wrapper: fix compilation | By - rupansh | On - 2022-03-04T14:59:14Z
 44. [06d..e9b] wrapper: fix derp | By - rupansh | On - 2022-03-04T14:54:54Z
 45. [39d..023] wrapper: use exists to find existence | By - rupansh | On - 2022-03-04T14:52:45Z
 46. [149..34b] wrapper: add metaHash to search | By - rupansh | On - 2022-03-04T14:47:10Z
 47. [3c3..0ed] fix ipfs wrapping | By - rupansh | On - 2022-03-03T18:09:57Z
 48. [857..ac8] routes: wrapperRoutes: use sane header for ipfs | By - rupansh | On - 2022-03-03T17:25:14Z
 49. [629..5ac] add ipfs wrapping | By - rupansh | On - 2022-03-03T15:19:09Z
 50. [f54..eeb] routes: wrapper: remove unecssary log | By - rupansh | On - 2022-02-10T10:32:37Z

## deployUpdate


 1. [3c4..05d] added new route ton collection info addition and getting | By - Debian | On - 2023-01-18T15:41:01Z
 2. [861..435] added description to metadata for ton nft collection data | By - Debian | On - 2023-01-17T15:51:47Z
 3. [0a8..e34] return expale | By - Alex Moshinsky | On - 2022-11-23T18:58:48Z
 4. [d7f..8ab] erc1155 custom token id fix | By - Alex Moshinsky | On - 2022-11-23T18:57:32Z
 5. [2a7..d81] cron job for refetching metaData of nfts with name of  XP.Network Wrapped NFT | By - AlexeyAdoniev | On - 2022-10-06T12:57:09Z
 6. [b72..13b] wrapper: fix typo in storeIpfs | By - rupansh | On - 2022-09-25T10:31:48Z
 7. [d02..748] removed infinite loop | By - Ruby Edelstein | On - 2022-09-25T10:18:48Z
 8. [13c..822] added getwnft logs | By - Ruby Edelstein | On - 2022-09-25T10:15:08Z
 9. [f38..ecf] fixed anti ddos derp | By - Ruby Edelstein | On - 2022-09-25T10:12:43Z
 10. [bf4..786] anti ddos | By - Ruby Edelstein | On - 2022-09-25T10:12:12Z
 11. [258..00d] routes: wrapperRoutes: add origin token id support for elrond | By - rupansh | On - 2022-09-13T18:03:49Z
 12. [e27..f65] add dependency graph | By - Dima Brook | On - 2022-09-12T12:35:32Z
 13. [f7c..58e] add call diagram | By - Dima Brook | On - 2022-09-12T11:33:17Z
 14. [d52..bc0] add Readme.md & refactor string utils | By - Dima Brook | On - 2022-09-12T11:09:29Z
 15. [cc8..a89] routes: wrapperRoutes: origin token id: add endpoint for decimal tokenId | By - rupansh | On - 2022-09-07T15:58:05Z
 16. [06a..d63] Metadata URI: Move to Env Variable instead of Hardcode | By - imsk17 | On - 2022-08-31T10:00:20Z
 17. [aca..727] check nft api if not in db | By - imsk17 | On - 2022-08-16T10:54:30Z
 18. [d1b..fd4] Update .env.example | By - Dima Brook | On - 2022-08-08T09:35:56Z
 19. [02b..b74] add route for getting nft by origin details | By - rupansh | On - 2022-08-05T17:29:51Z
 20. [13b..d48] wrapper: handle ratelimit for web3.storage | By - rupansh | On - 2022-07-19T12:32:29Z
 21. [96d..535] Merge pull request #5 from XP-NETWORK/ors_task-query_cron | By - VKint | On - 2022-05-26T14:54:22Z
 22. [af0..5f9] added logs with id to every error in cron class | By - Or Kilim | On - 2022-05-26T14:22:10Z
 23. [ec5..758] reverted from localhost config | By - Or Kilim | On - 2022-05-26T14:04:21Z
 24. [e84..7c6] removed console.logs | By - Or Kilim | On - 2022-05-26T14:00:46Z
 25. [107..09c] tried locally with local connection string | By - Or Kilim | On - 2022-05-26T13:59:17Z
 26. [098..b78] changed path in package.json in start script | By - Or Kilim | On - 2022-05-26T13:40:16Z
 27. [b55..c07] changed importing of cron, now imported everything | By - Or Kilim | On - 2022-05-26T13:35:14Z
 28. [658..ec7] Merge pull request #4 from XP-NETWORK/ors_task-query_cron | By - VKint | On - 2022-05-26T13:13:51Z
 29. [8bc..d20] updated package.json | By - Or Kilim | On - 2022-05-26T13:00:24Z
 30. [c41..70e] added the cron to src/index.ts at callback when we connect to mongo | By - Or Kilim | On - 2022-05-26T12:59:14Z
 31. [09b..4e5] Merge pull request #3 from XP-NETWORK/ors_task-query_cron | By - VKint | On - 2022-05-26T12:52:08Z
 32. [964..1b6] put correct connection string | By - Or Kilim | On - 2022-05-26T12:49:04Z
 33. [2c7..fbf] deleted localhost connection string | By - Or Kilim | On - 2022-05-26T12:48:28Z
 34. [a29..9d8] refactored code, added two statics function to wnfts model and interface | By - Or Kilim | On - 2022-05-26T12:43:11Z
 35. [0a5..a5a] Merge pull request #2 from XP-NETWORK/ors_task-query_cron | By - VKint | On - 2022-05-26T08:07:27Z
 36. [518..f29] delete package-lock.json and changed 'start' script to js instead of ts | By - Or Kilim | On - 2022-05-23T14:06:23Z
 37. [ef7..472] function for cron now more stable | By - Or Kilim | On - 2022-05-23T13:55:00Z
 38. [adc..cab] added a log message if name retrieved from axios call is undefined and changed error logs if there is a problem with axios call | By - Or Kilim | On - 2022-05-19T08:47:46Z
 39. [7da..153] added cron to 'services' folder inside 'cron' folder inside index.ts | By - Or Kilim | On - 2022-05-19T08:40:51Z
 40. [711..bb7] no lock | By - Or Kilim | On - 2022-05-19T08:22:12Z
 41. [234..79e] added cron for handling NFTs with generic 'XP.Network Wrapped NFT' name | By - Or Kilim | On - 2022-05-18T16:04:15Z
 42. [d2b..8b4] updated uri | By - Ruby Edelstein | On - 2022-03-04T15:31:19Z
 43. [51e..bff] wrapper: use findOneAndUpdate | By - rupansh | On - 2022-03-04T15:27:08Z
 44. [4ac..821] wrapper: change exists usage | By - rupansh | On - 2022-03-04T15:12:08Z
 45. [cb8..e42] wrapper: fix compilation | By - rupansh | On - 2022-03-04T14:59:14Z
 46. [06d..e9b] wrapper: fix derp | By - rupansh | On - 2022-03-04T14:54:54Z
 47. [39d..023] wrapper: use exists to find existence | By - rupansh | On - 2022-03-04T14:52:45Z
 48. [149..34b] wrapper: add metaHash to search | By - rupansh | On - 2022-03-04T14:47:10Z
 49. [3c3..0ed] fix ipfs wrapping | By - rupansh | On - 2022-03-03T18:09:57Z
 50. [857..ac8] routes: wrapperRoutes: use sane header for ipfs | By - rupansh | On - 2022-03-03T17:25:14Z

## master


 1. [87c..fb1] Production (#6) | By - Alex Moshinsky | On - 2023-02-08T16:44:25Z
 2. [aa4..b8e] remove cron | By - AlexeyAdoniev | On - 2023-01-16T14:43:04Z
 3. [688..d57] disable wnft cron | By - AlexeyAdoniev | On - 2023-01-16T14:41:22Z
 4. [912..893] add error 404 | By - Alex Moshinsky | On - 2023-01-10T10:36:52Z
 5. [d51..422] fix base16 | By - Alex Moshinsky | On - 2022-12-06T10:45:50Z
 6. [0a8..e34] return expale | By - Alex Moshinsky | On - 2022-11-23T18:58:48Z
 7. [d7f..8ab] erc1155 custom token id fix | By - Alex Moshinsky | On - 2022-11-23T18:57:32Z
 8. [2a7..d81] cron job for refetching metaData of nfts with name of  XP.Network Wrapped NFT | By - AlexeyAdoniev | On - 2022-10-06T12:57:09Z
 9. [b72..13b] wrapper: fix typo in storeIpfs | By - rupansh | On - 2022-09-25T10:31:48Z
 10. [d02..748] removed infinite loop | By - Ruby Edelstein | On - 2022-09-25T10:18:48Z
 11. [13c..822] added getwnft logs | By - Ruby Edelstein | On - 2022-09-25T10:15:08Z
 12. [f38..ecf] fixed anti ddos derp | By - Ruby Edelstein | On - 2022-09-25T10:12:43Z
 13. [bf4..786] anti ddos | By - Ruby Edelstein | On - 2022-09-25T10:12:12Z
 14. [258..00d] routes: wrapperRoutes: add origin token id support for elrond | By - rupansh | On - 2022-09-13T18:03:49Z
 15. [e27..f65] add dependency graph | By - Dima Brook | On - 2022-09-12T12:35:32Z
 16. [f7c..58e] add call diagram | By - Dima Brook | On - 2022-09-12T11:33:17Z
 17. [d52..bc0] add Readme.md & refactor string utils | By - Dima Brook | On - 2022-09-12T11:09:29Z
 18. [cc8..a89] routes: wrapperRoutes: origin token id: add endpoint for decimal tokenId | By - rupansh | On - 2022-09-07T15:58:05Z
 19. [06a..d63] Metadata URI: Move to Env Variable instead of Hardcode | By - imsk17 | On - 2022-08-31T10:00:20Z
 20. [aca..727] check nft api if not in db | By - imsk17 | On - 2022-08-16T10:54:30Z
 21. [d1b..fd4] Update .env.example | By - Dima Brook | On - 2022-08-08T09:35:56Z
 22. [02b..b74] add route for getting nft by origin details | By - rupansh | On - 2022-08-05T17:29:51Z
 23. [13b..d48] wrapper: handle ratelimit for web3.storage | By - rupansh | On - 2022-07-19T12:32:29Z
 24. [96d..535] Merge pull request #5 from XP-NETWORK/ors_task-query_cron | By - VKint | On - 2022-05-26T14:54:22Z
 25. [af0..5f9] added logs with id to every error in cron class | By - Or Kilim | On - 2022-05-26T14:22:10Z
 26. [ec5..758] reverted from localhost config | By - Or Kilim | On - 2022-05-26T14:04:21Z
 27. [e84..7c6] removed console.logs | By - Or Kilim | On - 2022-05-26T14:00:46Z
 28. [107..09c] tried locally with local connection string | By - Or Kilim | On - 2022-05-26T13:59:17Z
 29. [098..b78] changed path in package.json in start script | By - Or Kilim | On - 2022-05-26T13:40:16Z
 30. [b55..c07] changed importing of cron, now imported everything | By - Or Kilim | On - 2022-05-26T13:35:14Z
 31. [658..ec7] Merge pull request #4 from XP-NETWORK/ors_task-query_cron | By - VKint | On - 2022-05-26T13:13:51Z
 32. [8bc..d20] updated package.json | By - Or Kilim | On - 2022-05-26T13:00:24Z
 33. [c41..70e] added the cron to src/index.ts at callback when we connect to mongo | By - Or Kilim | On - 2022-05-26T12:59:14Z
 34. [09b..4e5] Merge pull request #3 from XP-NETWORK/ors_task-query_cron | By - VKint | On - 2022-05-26T12:52:08Z
 35. [964..1b6] put correct connection string | By - Or Kilim | On - 2022-05-26T12:49:04Z
 36. [2c7..fbf] deleted localhost connection string | By - Or Kilim | On - 2022-05-26T12:48:28Z
 37. [a29..9d8] refactored code, added two statics function to wnfts model and interface | By - Or Kilim | On - 2022-05-26T12:43:11Z
 38. [0a5..a5a] Merge pull request #2 from XP-NETWORK/ors_task-query_cron | By - VKint | On - 2022-05-26T08:07:27Z
 39. [518..f29] delete package-lock.json and changed 'start' script to js instead of ts | By - Or Kilim | On - 2022-05-23T14:06:23Z
 40. [ef7..472] function for cron now more stable | By - Or Kilim | On - 2022-05-23T13:55:00Z
 41. [adc..cab] added a log message if name retrieved from axios call is undefined and changed error logs if there is a problem with axios call | By - Or Kilim | On - 2022-05-19T08:47:46Z
 42. [7da..153] added cron to 'services' folder inside 'cron' folder inside index.ts | By - Or Kilim | On - 2022-05-19T08:40:51Z
 43. [711..bb7] no lock | By - Or Kilim | On - 2022-05-19T08:22:12Z
 44. [234..79e] added cron for handling NFTs with generic 'XP.Network Wrapped NFT' name | By - Or Kilim | On - 2022-05-18T16:04:15Z
 45. [d2b..8b4] updated uri | By - Ruby Edelstein | On - 2022-03-04T15:31:19Z
 46. [51e..bff] wrapper: use findOneAndUpdate | By - rupansh | On - 2022-03-04T15:27:08Z
 47. [4ac..821] wrapper: change exists usage | By - rupansh | On - 2022-03-04T15:12:08Z
 48. [cb8..e42] wrapper: fix compilation | By - rupansh | On - 2022-03-04T14:59:14Z
 49. [06d..e9b] wrapper: fix derp | By - rupansh | On - 2022-03-04T14:54:54Z
 50. [39d..023] wrapper: use exists to find existence | By - rupansh | On - 2022-03-04T14:52:45Z

## ors_task-query_cron


 1. [af0..5f9] added logs with id to every error in cron class | By - Or Kilim | On - 2022-05-26T14:22:10Z
 2. [ec5..758] reverted from localhost config | By - Or Kilim | On - 2022-05-26T14:04:21Z
 3. [e84..7c6] removed console.logs | By - Or Kilim | On - 2022-05-26T14:00:46Z
 4. [107..09c] tried locally with local connection string | By - Or Kilim | On - 2022-05-26T13:59:17Z
 5. [098..b78] changed path in package.json in start script | By - Or Kilim | On - 2022-05-26T13:40:16Z
 6. [b55..c07] changed importing of cron, now imported everything | By - Or Kilim | On - 2022-05-26T13:35:14Z
 7. [8bc..d20] updated package.json | By - Or Kilim | On - 2022-05-26T13:00:24Z
 8. [c41..70e] added the cron to src/index.ts at callback when we connect to mongo | By - Or Kilim | On - 2022-05-26T12:59:14Z
 9. [964..1b6] put correct connection string | By - Or Kilim | On - 2022-05-26T12:49:04Z
 10. [2c7..fbf] deleted localhost connection string | By - Or Kilim | On - 2022-05-26T12:48:28Z
 11. [a29..9d8] refactored code, added two statics function to wnfts model and interface | By - Or Kilim | On - 2022-05-26T12:43:11Z
 12. [518..f29] delete package-lock.json and changed 'start' script to js instead of ts | By - Or Kilim | On - 2022-05-23T14:06:23Z
 13. [ef7..472] function for cron now more stable | By - Or Kilim | On - 2022-05-23T13:55:00Z
 14. [adc..cab] added a log message if name retrieved from axios call is undefined and changed error logs if there is a problem with axios call | By - Or Kilim | On - 2022-05-19T08:47:46Z
 15. [7da..153] added cron to 'services' folder inside 'cron' folder inside index.ts | By - Or Kilim | On - 2022-05-19T08:40:51Z
 16. [711..bb7] no lock | By - Or Kilim | On - 2022-05-19T08:22:12Z
 17. [234..79e] added cron for handling NFTs with generic 'XP.Network Wrapped NFT' name | By - Or Kilim | On - 2022-05-18T16:04:15Z
 18. [d2b..8b4] updated uri | By - Ruby Edelstein | On - 2022-03-04T15:31:19Z
 19. [51e..bff] wrapper: use findOneAndUpdate | By - rupansh | On - 2022-03-04T15:27:08Z
 20. [4ac..821] wrapper: change exists usage | By - rupansh | On - 2022-03-04T15:12:08Z
 21. [cb8..e42] wrapper: fix compilation | By - rupansh | On - 2022-03-04T14:59:14Z
 22. [06d..e9b] wrapper: fix derp | By - rupansh | On - 2022-03-04T14:54:54Z
 23. [39d..023] wrapper: use exists to find existence | By - rupansh | On - 2022-03-04T14:52:45Z
 24. [149..34b] wrapper: add metaHash to search | By - rupansh | On - 2022-03-04T14:47:10Z
 25. [3c3..0ed] fix ipfs wrapping | By - rupansh | On - 2022-03-03T18:09:57Z
 26. [857..ac8] routes: wrapperRoutes: use sane header for ipfs | By - rupansh | On - 2022-03-03T17:25:14Z
 27. [629..5ac] add ipfs wrapping | By - rupansh | On - 2022-03-03T15:19:09Z
 28. [f54..eeb] routes: wrapper: remove unecssary log | By - rupansh | On - 2022-02-10T10:32:37Z
 29. [471..1e3] update wrapper to support multiple types of ids | By - rupansh | On - 2022-02-10T10:12:01Z
 30. [c94..12d] ignore lib | By - Dima Brook | On - 2022-02-08T12:59:39Z
 31. [b19..36d] make NFT collection variable | By - Dima Brook | On - 2022-02-08T12:57:35Z
 32. [1f1..aca] fix env vars with dotenv | By - Dima Brook | On - 2022-02-08T12:50:21Z
 33. [b33..e4e] initial commit | By - Dima Brook | On - 2022-02-08T11:24:25Z

## production


 1. [3c4..05d] added new route ton collection info addition and getting | By - Debian | On - 2023-01-18T15:41:01Z
 2. [861..435] added description to metadata for ton nft collection data | By - Debian | On - 2023-01-17T15:51:47Z
 3. [0a8..e34] return expale | By - Alex Moshinsky | On - 2022-11-23T18:58:48Z
 4. [d7f..8ab] erc1155 custom token id fix | By - Alex Moshinsky | On - 2022-11-23T18:57:32Z
 5. [2a7..d81] cron job for refetching metaData of nfts with name of  XP.Network Wrapped NFT | By - AlexeyAdoniev | On - 2022-10-06T12:57:09Z
 6. [b72..13b] wrapper: fix typo in storeIpfs | By - rupansh | On - 2022-09-25T10:31:48Z
 7. [d02..748] removed infinite loop | By - Ruby Edelstein | On - 2022-09-25T10:18:48Z
 8. [13c..822] added getwnft logs | By - Ruby Edelstein | On - 2022-09-25T10:15:08Z
 9. [f38..ecf] fixed anti ddos derp | By - Ruby Edelstein | On - 2022-09-25T10:12:43Z
 10. [bf4..786] anti ddos | By - Ruby Edelstein | On - 2022-09-25T10:12:12Z
 11. [258..00d] routes: wrapperRoutes: add origin token id support for elrond | By - rupansh | On - 2022-09-13T18:03:49Z
 12. [e27..f65] add dependency graph | By - Dima Brook | On - 2022-09-12T12:35:32Z
 13. [f7c..58e] add call diagram | By - Dima Brook | On - 2022-09-12T11:33:17Z
 14. [d52..bc0] add Readme.md & refactor string utils | By - Dima Brook | On - 2022-09-12T11:09:29Z
 15. [cc8..a89] routes: wrapperRoutes: origin token id: add endpoint for decimal tokenId | By - rupansh | On - 2022-09-07T15:58:05Z
 16. [06a..d63] Metadata URI: Move to Env Variable instead of Hardcode | By - imsk17 | On - 2022-08-31T10:00:20Z
 17. [aca..727] check nft api if not in db | By - imsk17 | On - 2022-08-16T10:54:30Z
 18. [d1b..fd4] Update .env.example | By - Dima Brook | On - 2022-08-08T09:35:56Z
 19. [02b..b74] add route for getting nft by origin details | By - rupansh | On - 2022-08-05T17:29:51Z
 20. [13b..d48] wrapper: handle ratelimit for web3.storage | By - rupansh | On - 2022-07-19T12:32:29Z
 21. [96d..535] Merge pull request #5 from XP-NETWORK/ors_task-query_cron | By - VKint | On - 2022-05-26T14:54:22Z
 22. [af0..5f9] added logs with id to every error in cron class | By - Or Kilim | On - 2022-05-26T14:22:10Z
 23. [ec5..758] reverted from localhost config | By - Or Kilim | On - 2022-05-26T14:04:21Z
 24. [e84..7c6] removed console.logs | By - Or Kilim | On - 2022-05-26T14:00:46Z
 25. [107..09c] tried locally with local connection string | By - Or Kilim | On - 2022-05-26T13:59:17Z
 26. [098..b78] changed path in package.json in start script | By - Or Kilim | On - 2022-05-26T13:40:16Z
 27. [b55..c07] changed importing of cron, now imported everything | By - Or Kilim | On - 2022-05-26T13:35:14Z
 28. [658..ec7] Merge pull request #4 from XP-NETWORK/ors_task-query_cron | By - VKint | On - 2022-05-26T13:13:51Z
 29. [8bc..d20] updated package.json | By - Or Kilim | On - 2022-05-26T13:00:24Z
 30. [c41..70e] added the cron to src/index.ts at callback when we connect to mongo | By - Or Kilim | On - 2022-05-26T12:59:14Z
 31. [09b..4e5] Merge pull request #3 from XP-NETWORK/ors_task-query_cron | By - VKint | On - 2022-05-26T12:52:08Z
 32. [964..1b6] put correct connection string | By - Or Kilim | On - 2022-05-26T12:49:04Z
 33. [2c7..fbf] deleted localhost connection string | By - Or Kilim | On - 2022-05-26T12:48:28Z
 34. [a29..9d8] refactored code, added two statics function to wnfts model and interface | By - Or Kilim | On - 2022-05-26T12:43:11Z
 35. [0a5..a5a] Merge pull request #2 from XP-NETWORK/ors_task-query_cron | By - VKint | On - 2022-05-26T08:07:27Z
 36. [518..f29] delete package-lock.json and changed 'start' script to js instead of ts | By - Or Kilim | On - 2022-05-23T14:06:23Z
 37. [ef7..472] function for cron now more stable | By - Or Kilim | On - 2022-05-23T13:55:00Z
 38. [adc..cab] added a log message if name retrieved from axios call is undefined and changed error logs if there is a problem with axios call | By - Or Kilim | On - 2022-05-19T08:47:46Z
 39. [7da..153] added cron to 'services' folder inside 'cron' folder inside index.ts | By - Or Kilim | On - 2022-05-19T08:40:51Z
 40. [711..bb7] no lock | By - Or Kilim | On - 2022-05-19T08:22:12Z
 41. [234..79e] added cron for handling NFTs with generic 'XP.Network Wrapped NFT' name | By - Or Kilim | On - 2022-05-18T16:04:15Z
 42. [d2b..8b4] updated uri | By - Ruby Edelstein | On - 2022-03-04T15:31:19Z
 43. [51e..bff] wrapper: use findOneAndUpdate | By - rupansh | On - 2022-03-04T15:27:08Z
 44. [4ac..821] wrapper: change exists usage | By - rupansh | On - 2022-03-04T15:12:08Z
 45. [cb8..e42] wrapper: fix compilation | By - rupansh | On - 2022-03-04T14:59:14Z
 46. [06d..e9b] wrapper: fix derp | By - rupansh | On - 2022-03-04T14:54:54Z
 47. [39d..023] wrapper: use exists to find existence | By - rupansh | On - 2022-03-04T14:52:45Z
 48. [149..34b] wrapper: add metaHash to search | By - rupansh | On - 2022-03-04T14:47:10Z
 49. [3c3..0ed] fix ipfs wrapping | By - rupansh | On - 2022-03-03T18:09:57Z
 50. [857..ac8] routes: wrapperRoutes: use sane header for ipfs | By - rupansh | On - 2022-03-03T17:25:14Z

## w-nft-api-tests


 1. [e05..c2b] add tests | By - Alex Moshinsky | On - 2022-09-05T17:11:38Z
 2. [4e1..7e1] init test | By - Alex Moshinsky | On - 2022-09-05T08:38:19Z
 3. [06a..d63] Metadata URI: Move to Env Variable instead of Hardcode | By - imsk17 | On - 2022-08-31T10:00:20Z
 4. [aca..727] check nft api if not in db | By - imsk17 | On - 2022-08-16T10:54:30Z
 5. [d1b..fd4] Update .env.example | By - Dima Brook | On - 2022-08-08T09:35:56Z
 6. [02b..b74] add route for getting nft by origin details | By - rupansh | On - 2022-08-05T17:29:51Z
 7. [13b..d48] wrapper: handle ratelimit for web3.storage | By - rupansh | On - 2022-07-19T12:32:29Z
 8. [96d..535] Merge pull request #5 from XP-NETWORK/ors_task-query_cron | By - VKint | On - 2022-05-26T14:54:22Z
 9. [af0..5f9] added logs with id to every error in cron class | By - Or Kilim | On - 2022-05-26T14:22:10Z
 10. [ec5..758] reverted from localhost config | By - Or Kilim | On - 2022-05-26T14:04:21Z
 11. [e84..7c6] removed console.logs | By - Or Kilim | On - 2022-05-26T14:00:46Z
 12. [107..09c] tried locally with local connection string | By - Or Kilim | On - 2022-05-26T13:59:17Z
 13. [098..b78] changed path in package.json in start script | By - Or Kilim | On - 2022-05-26T13:40:16Z
 14. [b55..c07] changed importing of cron, now imported everything | By - Or Kilim | On - 2022-05-26T13:35:14Z
 15. [658..ec7] Merge pull request #4 from XP-NETWORK/ors_task-query_cron | By - VKint | On - 2022-05-26T13:13:51Z
 16. [8bc..d20] updated package.json | By - Or Kilim | On - 2022-05-26T13:00:24Z
 17. [c41..70e] added the cron to src/index.ts at callback when we connect to mongo | By - Or Kilim | On - 2022-05-26T12:59:14Z
 18. [09b..4e5] Merge pull request #3 from XP-NETWORK/ors_task-query_cron | By - VKint | On - 2022-05-26T12:52:08Z
 19. [964..1b6] put correct connection string | By - Or Kilim | On - 2022-05-26T12:49:04Z
 20. [2c7..fbf] deleted localhost connection string | By - Or Kilim | On - 2022-05-26T12:48:28Z
 21. [a29..9d8] refactored code, added two statics function to wnfts model and interface | By - Or Kilim | On - 2022-05-26T12:43:11Z
 22. [0a5..a5a] Merge pull request #2 from XP-NETWORK/ors_task-query_cron | By - VKint | On - 2022-05-26T08:07:27Z
 23. [518..f29] delete package-lock.json and changed 'start' script to js instead of ts | By - Or Kilim | On - 2022-05-23T14:06:23Z
 24. [ef7..472] function for cron now more stable | By - Or Kilim | On - 2022-05-23T13:55:00Z
 25. [adc..cab] added a log message if name retrieved from axios call is undefined and changed error logs if there is a problem with axios call | By - Or Kilim | On - 2022-05-19T08:47:46Z
 26. [7da..153] added cron to 'services' folder inside 'cron' folder inside index.ts | By - Or Kilim | On - 2022-05-19T08:40:51Z
 27. [711..bb7] no lock | By - Or Kilim | On - 2022-05-19T08:22:12Z
 28. [234..79e] added cron for handling NFTs with generic 'XP.Network Wrapped NFT' name | By - Or Kilim | On - 2022-05-18T16:04:15Z
 29. [d2b..8b4] updated uri | By - Ruby Edelstein | On - 2022-03-04T15:31:19Z
 30. [51e..bff] wrapper: use findOneAndUpdate | By - rupansh | On - 2022-03-04T15:27:08Z
 31. [4ac..821] wrapper: change exists usage | By - rupansh | On - 2022-03-04T15:12:08Z
 32. [cb8..e42] wrapper: fix compilation | By - rupansh | On - 2022-03-04T14:59:14Z
 33. [06d..e9b] wrapper: fix derp | By - rupansh | On - 2022-03-04T14:54:54Z
 34. [39d..023] wrapper: use exists to find existence | By - rupansh | On - 2022-03-04T14:52:45Z
 35. [149..34b] wrapper: add metaHash to search | By - rupansh | On - 2022-03-04T14:47:10Z
 36. [3c3..0ed] fix ipfs wrapping | By - rupansh | On - 2022-03-03T18:09:57Z
 37. [857..ac8] routes: wrapperRoutes: use sane header for ipfs | By - rupansh | On - 2022-03-03T17:25:14Z
 38. [629..5ac] add ipfs wrapping | By - rupansh | On - 2022-03-03T15:19:09Z
 39. [f54..eeb] routes: wrapper: remove unecssary log | By - rupansh | On - 2022-02-10T10:32:37Z
 40. [471..1e3] update wrapper to support multiple types of ids | By - rupansh | On - 2022-02-10T10:12:01Z
 41. [c94..12d] ignore lib | By - Dima Brook | On - 2022-02-08T12:59:39Z
 42. [b19..36d] make NFT collection variable | By - Dima Brook | On - 2022-02-08T12:57:35Z
 43. [1f1..aca] fix env vars with dotenv | By - Dima Brook | On - 2022-02-08T12:50:21Z
 44. [b33..e4e] initial commit | By - Dima Brook | On - 2022-02-08T11:24:25Z

# deploying-tron

## main


 1. [c92..2fa] add: Readme | By - Dima Brook | On - 2023-02-08T10:13:25Z
 2. [7a7..dd6] xpnft1155opensea: update abi anc bc | By - imsk17 | On - 2023-02-08T09:30:35Z
 3. [fa3..a75] xpnft1155: update abi anc bc | By - imsk17 | On - 2023-02-08T09:27:43Z
 4. [6c0..232] xpnftopensea: update abi anc bc | By - imsk17 | On - 2023-02-08T09:22:30Z
 5. [8c9..2ef] script: update all the parameters to use eth addresses | By - imsk17 | On - 2023-02-08T09:15:00Z
 6. [6d5..de5] xpnft: update bytecode and make deployments work | By - imsk17 | On - 2023-02-08T09:12:02Z
 7. [775..2f3] Merge branch 'main' of https://github.com/XP-NETWORK/deploying-tron | By - Dima Brook | On - 2023-02-08T08:45:11Z
 8. [1d6..774] add: Contracts' Source Code | By - Dima Brook | On - 2023-02-08T08:43:56Z
 9. [8b5..259] project: fix typescript errors | By - imsk17 | On - 2023-02-08T08:38:45Z
 10. [0ff..0de] first commit | By - Dima Brook | On - 2023-02-08T07:44:19Z

# vechainScript

## master


 1. [b98..e52] name | By - rony derra | On - 2023-02-07T17:25:07Z
 2. [c6b..da4] cryptoPunks | By - rony derra | On - 2023-02-07T10:16:02Z
 3. [0f7..62e] rocketMonster | By - rony derra | On - 2023-01-30T08:54:35Z
 4. [d07..823] concat | By - rony derra | On - 2023-01-30T08:53:17Z
 5. [f7c..f69] rocketMonster | By - rony derra | On - 2023-01-30T08:42:20Z
 6. [f49..0ed] exoworldImages | By - rony derra | On - 2022-11-30T10:52:43Z
 7. [9e4..149] exoworldImages | By - rony derra | On - 2022-11-30T10:36:20Z
 8. [cb5..daa] image format change | By - rony derra | On - 2022-11-29T16:31:01Z
 9. [edb..81c] fantase | By - rony derra | On - 2022-11-27T16:35:27Z
 10. [c19..464] fantase | By - rony derra | On - 2022-11-27T16:34:49Z
 11. [e66..ae0] attr | By - rony derra | On - 2022-11-16T17:19:22Z
 12. [74e..a58] if exist | By - rony derra | On - 2022-11-16T16:27:10Z
 13. [5b7..67b] formatting | By - rony derra | On - 2022-11-16T16:22:45Z
 14. [b5a..ad9] metadata | By - rony derra | On - 2022-11-16T16:20:46Z
 15. [c46..f6b] deleted | By - rony derra | On - 2022-11-16T12:59:49Z
 16. [a2e..97b] vechain | By - rony derra | On - 2022-11-16T12:50:51Z
 17. [e6b..170] abi | By - rony derra | On - 2022-11-15T13:14:19Z
 18. [d36..68c] uri | By - rony derra | On - 2022-11-15T12:31:27Z
 19. [74e..4ca] first commit | By - rony derra | On - 2022-11-14T09:41:57Z

## vechainUri


 1. [d1d..a86] vechain | By - rony derra | On - 2022-11-15T12:54:50Z
 2. [d36..68c] uri | By - rony derra | On - 2022-11-15T12:31:27Z
 3. [74e..4ca] first commit | By - rony derra | On - 2022-11-14T09:41:57Z

# fee-oracle

## master


 1. [420..351] Setup Queues for decimal and txFees | By - imsk17 | On - 2023-02-04T13:07:55Z
 2. [128..f8d] Helpers: Web3: Configure as a read only chain for now | By - imsk17 | On - 2023-02-02T12:15:46Z
 3. [a76..1f9] Handlers: Near: Setup Near To Work | By - imsk17 | On - 2023-01-31T14:30:37Z
 4. [bad..ffc] Type-Utils: Write more type utils | By - imsk17 | On - 2023-01-31T14:30:03Z
 5. [419..bce] Packages: Add Bull for scheduling | By - imsk17 | On - 2023-01-31T14:29:01Z
 6. [2be..87d] Deps: Configure Near Setup | By - imsk17 | On - 2023-01-30T13:18:41Z
 7. [a53..8a1] Deps: Update Deps and setup conversion data | By - imsk17 | On - 2023-01-30T09:55:00Z
 8. [8fd..20a] Packages: Pin frost deps | By - imsk17 | On - 2023-01-30T09:47:53Z
 9. [521..9f0] Chains: Implement for Near | By - imsk17 | On - 2023-01-27T10:59:57Z
 10. [afa..502] Interfaces: Chain: Update Methods | By - imsk17 | On - 2023-01-27T10:59:43Z
 11. [992..70a] Chain: Interfaces: Add methods for serializing, and sending update txns | By - imsk17 | On - 2023-01-25T12:12:33Z
 12. [e65..250] Deps: Configure FROST and Validator Network | By - imsk17 | On - 2023-01-24T13:11:35Z
 13. [156..13c] Rename Package | By - imsk17 | On - 2023-01-20T13:41:08Z
 14. [c1a..3c0] Helpers: Interface: Add abstract traits to be implemented by Chains | By - imsk17 | On - 2023-01-20T13:07:02Z
 15. [159..74b] Signature: Setup Frost and Signing | By - imsk17 | On - 2022-12-30T18:24:12Z
 16. [fd6..b6d] Config: Setup Configuration | By - imsk17 | On - 2022-12-30T17:41:52Z
 17. [0d7..a7d] Initial Import | By - imsk17 | On - 2022-12-30T12:49:11Z

# near-price-oracle-client

## master


 1. [0b5..709] Client: Add Methods for updating tx fees and other fees | By - imsk17 | On - 2023-01-27T10:28:20Z
 2. [0ac..64f] Tests: Fix | By - imsk17 | On - 2023-01-27T10:21:35Z
 3. [066..2bb] Client: Rename as per contract | By - imsk17 | On - 2023-01-27T10:21:09Z
 4. [e64..7ee] Tests: Adapt to new client | By - imsk17 | On - 2023-01-27T09:46:34Z
 5. [b30..3cd] Client: Update decimal addition | By - imsk17 | On - 2023-01-27T09:46:17Z
 6. [814..6c9] Update CI to build dist | By - imsk17 | On - 2023-01-25T13:16:53Z
 7. [dd7..1c2] TSConfig: Ignore Rootdirs | By - imsk17 | On - 2022-12-30T12:38:30Z
 8. [105..863] Scripts: Get rid of eslint for test files | By - imsk17 | On - 2022-12-30T12:32:58Z
 9. [961..208] Contract: Get rid of wasm file | By - imsk17 | On - 2022-12-30T12:32:08Z
 10. [396..e41] Docs: Add a Documentation Script | By - imsk17 | On - 2022-12-30T12:30:59Z
 11. [c96..fb3] Docs: Document all the methods | By - imsk17 | On - 2022-12-30T12:23:48Z
 12. [5ac..d4d] Packages: Get rid of redundant packages | By - imsk17 | On - 2022-12-28T15:23:38Z
 13. [e47..97c] Eslint: Configure with Prettier | By - imsk17 | On - 2022-12-28T15:22:30Z
 14. [c20..a0c] TreeWide: Use Eslint | By - imsk17 | On - 2022-12-28T15:11:20Z
 15. [01d..6b4] Tests: Update Tests to encorporate for changes | By - imsk17 | On - 2022-12-28T11:54:17Z
 16. [5fa..9ef] Client: Update methods as per contract | By - imsk17 | On - 2022-12-28T11:53:48Z
 17. [dc5..942] Wasm: Update File | By - imsk17 | On - 2022-12-28T11:53:23Z
 18. [932..6e6] Lint: Apply Fix | By - imsk17 | On - 2022-12-26T12:29:36Z
 19. [0ec..c09] tests: test get_currency_data | By - imsk17 | On - 2022-12-26T12:29:14Z
 20. [ae1..4bf] client: add method to get currency data | By - imsk17 | On - 2022-12-26T12:28:19Z
 21. [0ca..b9b] tests: test remaining methods | By - imsk17 | On - 2022-12-26T12:21:51Z
 22. [844..79b] client: update methods as per contract | By - imsk17 | On - 2022-12-26T12:21:31Z
 23. [c37..31f] contracts: wasm: update file | By - imsk17 | On - 2022-12-26T12:19:36Z
 24. [104..cfd] Client: Add Remaining Methods | By - imsk17 | On - 2022-12-26T11:33:49Z
 25. [0d2..e31] Update Contract Wasm File | By - imsk17 | On - 2022-12-26T11:23:15Z
 26. [280..faa] Lint: Apply Fix | By - imsk17 | On - 2022-12-25T14:00:21Z
 27. [ce9..ffa] Update Tests for State Updating Methods | By - imsk17 | On - 2022-12-25T13:58:26Z
 28. [a1e..d70] Add Tests for the Client | By - imsk17 | On - 2022-12-25T13:23:22Z
 29. [78e..5ad] ESLint: Weird Ignore Required | By - imsk17 | On - 2022-12-25T13:13:34Z
 30. [ffe..3bb] Lint: Apply Fix | By - imsk17 | On - 2022-12-25T13:03:10Z
 31. [d09..f60] CI: Update Supported NodeJS Versions in CI | By - imsk17 | On - 2022-12-25T13:01:27Z
 32. [6b6..65d] Rename Package | By - imsk17 | On - 2022-12-25T12:57:48Z
 33. [a65..62c] Remove Testing from CI | By - imsk17 | On - 2022-12-25T12:54:55Z
 34. [226..b70] Import Wasm File | By - imsk17 | On - 2022-12-25T12:53:25Z
 35. [63e..978] Initial Import | By - imsk17 | On - 2022-12-25T12:53:06Z

## master-dist


 1. [5d0..a73] Build: (0b586ce) Client: Add Methods for updating tx fees and other fees | By - imsk17 | On - 2023-01-27T10:29:10Z
 2. [a21..979] Build: (0ac8c63) Tests: Fix | By - imsk17 | On - 2023-01-27T10:22:26Z
 3. [76c..c6b] Build: (066b3b6) Client: Rename as per contract | By - imsk17 | On - 2023-01-27T10:22:05Z
 4. [719..4cd] Build: (e644b95) Tests: Adapt to new client | By - imsk17 | On - 2023-01-27T09:47:27Z
 5. [dee..198] Build: (81481ec) Update CI to build dist | By - imsk17 | On - 2023-01-25T13:17:41Z

# xp.net.token

## dependabot/npm_and_yarn/apollo-server-2.26.0


 1. [8d9..588] Bump apollo-server from 2.25.2 to 2.26.0 | By - dependabot[bot] | On - 2022-10-12T19:17:49Z
 2. [dcb..520] fix dependabot vulnerabilities | By - Dima Brook | On - 2021-10-13T08:33:49Z
 3. [12e..b0c] ammend | By - Dmitry Brook | On - 2021-05-26T18:46:40Z
 4. [f1d..fbc] update | By - Dima Brook | On - 2021-05-26T18:46:40Z
 5. [a66..999] initial commit | By - Dmitry Brook | On - 2021-05-23T13:17:19Z

## dependabot/npm_and_yarn/cookiejar-2.1.4


 1. [460..941] Bump cookiejar from 2.1.3 to 2.1.4 | By - dependabot[bot] | On - 2023-01-24T05:47:15Z
 2. [dcb..520] fix dependabot vulnerabilities | By - Dima Brook | On - 2021-10-13T08:33:49Z
 3. [12e..b0c] ammend | By - Dmitry Brook | On - 2021-05-26T18:46:40Z
 4. [f1d..fbc] update | By - Dima Brook | On - 2021-05-26T18:46:40Z
 5. [a66..999] initial commit | By - Dmitry Brook | On - 2021-05-23T13:17:19Z

## dependabot/npm_and_yarn/decode-uri-component-0.2.2


 1. [92e..536] Bump decode-uri-component from 0.2.0 to 0.2.2 | By - dependabot[bot] | On - 2022-12-07T19:21:57Z
 2. [dcb..520] fix dependabot vulnerabilities | By - Dima Brook | On - 2021-10-13T08:33:49Z
 3. [12e..b0c] ammend | By - Dmitry Brook | On - 2021-05-26T18:46:40Z
 4. [f1d..fbc] update | By - Dima Brook | On - 2021-05-26T18:46:40Z
 5. [a66..999] initial commit | By - Dmitry Brook | On - 2021-05-23T13:17:19Z

## dependabot/npm_and_yarn/express-4.18.2


 1. [2ee..de9] Bump express from 4.17.1 to 4.18.2 | By - dependabot[bot] | On - 2022-12-14T09:25:28Z
 2. [dcb..520] fix dependabot vulnerabilities | By - Dima Brook | On - 2021-10-13T08:33:49Z
 3. [12e..b0c] ammend | By - Dmitry Brook | On - 2021-05-26T18:46:40Z
 4. [f1d..fbc] update | By - Dima Brook | On - 2021-05-26T18:46:40Z
 5. [a66..999] initial commit | By - Dmitry Brook | On - 2021-05-23T13:17:19Z

## dependabot/npm_and_yarn/follow-redirects-1.14.8


 1. [2d0..a82] Bump follow-redirects from 1.14.4 to 1.14.8 | By - dependabot[bot] | On - 2022-02-14T13:40:09Z
 2. [dcb..520] fix dependabot vulnerabilities | By - Dima Brook | On - 2021-10-13T08:33:49Z
 3. [12e..b0c] ammend | By - Dmitry Brook | On - 2021-05-26T18:46:40Z
 4. [f1d..fbc] update | By - Dima Brook | On - 2021-05-26T18:46:40Z
 5. [a66..999] initial commit | By - Dmitry Brook | On - 2021-05-23T13:17:19Z

## dependabot/npm_and_yarn/json-pointer-0.6.2


 1. [cc1..4e9] Bump json-pointer from 0.6.1 to 0.6.2 | By - dependabot[bot] | On - 2022-12-30T17:29:26Z
 2. [dcb..520] fix dependabot vulnerabilities | By - Dima Brook | On - 2021-10-13T08:33:49Z
 3. [12e..b0c] ammend | By - Dmitry Brook | On - 2021-05-26T18:46:40Z
 4. [f1d..fbc] update | By - Dima Brook | On - 2021-05-26T18:46:40Z
 5. [a66..999] initial commit | By - Dmitry Brook | On - 2021-05-23T13:17:19Z

## dependabot/npm_and_yarn/keypair-1.0.4


 1. [414..0f7] Bump keypair from 1.0.3 to 1.0.4 | By - dependabot[bot] | On - 2021-10-13T08:29:51Z
 2. [12e..b0c] ammend | By - Dmitry Brook | On - 2021-05-26T18:46:40Z
 3. [f1d..fbc] update | By - Dima Brook | On - 2021-05-26T18:46:40Z
 4. [a66..999] initial commit | By - Dmitry Brook | On - 2021-05-23T13:17:19Z

## dependabot/npm_and_yarn/openzeppelin/contracts-4.7.3


 1. [dce..8dd] Bump @openzeppelin/contracts from 4.3.2 to 4.7.3 | By - dependabot[bot] | On - 2022-08-18T19:15:23Z
 2. [dcb..520] fix dependabot vulnerabilities | By - Dima Brook | On - 2021-10-13T08:33:49Z
 3. [12e..b0c] ammend | By - Dmitry Brook | On - 2021-05-26T18:46:40Z
 4. [f1d..fbc] update | By - Dima Brook | On - 2021-05-26T18:46:40Z
 5. [a66..999] initial commit | By - Dmitry Brook | On - 2021-05-23T13:17:19Z

## dependabot/npm_and_yarn/protobufjs-6.11.3


 1. [01f..85f] Bump protobufjs from 6.11.2 to 6.11.3 | By - dependabot[bot] | On - 2022-06-02T23:17:12Z
 2. [dcb..520] fix dependabot vulnerabilities | By - Dima Brook | On - 2021-10-13T08:33:49Z
 3. [12e..b0c] ammend | By - Dmitry Brook | On - 2021-05-26T18:46:40Z
 4. [f1d..fbc] update | By - Dima Brook | On - 2021-05-26T18:46:40Z
 5. [a66..999] initial commit | By - Dmitry Brook | On - 2021-05-23T13:17:19Z

## dependabot/npm_and_yarn/qs-6.5.3


 1. [d77..a37] Bump qs from 6.5.2 to 6.5.3 | By - dependabot[bot] | On - 2022-12-12T09:19:52Z
 2. [dcb..520] fix dependabot vulnerabilities | By - Dima Brook | On - 2021-10-13T08:33:49Z
 3. [12e..b0c] ammend | By - Dmitry Brook | On - 2021-05-26T18:46:40Z
 4. [f1d..fbc] update | By - Dima Brook | On - 2021-05-26T18:46:40Z
 5. [a66..999] initial commit | By - Dmitry Brook | On - 2021-05-23T13:17:19Z

## dependabot/npm_and_yarn/ua-parser-js-0.7.33


 1. [8a8..17c] Bump ua-parser-js from 0.7.28 to 0.7.33 | By - dependabot[bot] | On - 2023-01-27T05:46:40Z
 2. [dcb..520] fix dependabot vulnerabilities | By - Dima Brook | On - 2021-10-13T08:33:49Z
 3. [12e..b0c] ammend | By - Dmitry Brook | On - 2021-05-26T18:46:40Z
 4. [f1d..fbc] update | By - Dima Brook | On - 2021-05-26T18:46:40Z
 5. [a66..999] initial commit | By - Dmitry Brook | On - 2021-05-23T13:17:19Z

## master


 1. [dcb..520] fix dependabot vulnerabilities | By - Dima Brook | On - 2021-10-13T08:33:49Z
 2. [12e..b0c] ammend | By - Dmitry Brook | On - 2021-05-26T18:46:40Z
 3. [f1d..fbc] update | By - Dima Brook | On - 2021-05-26T18:46:40Z
 4. [a66..999] initial commit | By - Dmitry Brook | On - 2021-05-23T13:17:19Z

# dima-u-bot

## main


 1. [a26..a9b] Initial commit | By - Dima Brook | On - 2023-01-08T10:13:57Z

## master


 1. [599..85e] message | By - rony derra | On - 2023-01-24T15:14:19Z
 2. [d27..8f0] action | By - rony derra | On - 2023-01-24T15:12:37Z
 3. [714..8a8] messsage | By - rony derra | On - 2023-01-24T15:10:18Z
 4. [7bb..af9] ctx.reply | By - rony derra | On - 2023-01-24T15:08:39Z
 5. [cd9..a51] message | By - rony derra | On - 2023-01-24T15:07:18Z
 6. [1d0..00a] message | By - rony derra | On - 2023-01-24T15:05:20Z
 7. [97e..a0c] sendToAll | By - rony derra | On - 2023-01-23T15:17:49Z
 8. [28c..c15] sheet | By - rony derra | On - 2023-01-23T15:07:09Z
 9. [a8a..5ff] sendToAll | By - rony derra | On - 2023-01-23T15:00:44Z
 10. [3a2..19f] sendMessagev | By - rony derra | On - 2023-01-23T14:55:58Z
 11. [632..1cd] sendToAll | By - rony derra | On - 2023-01-23T14:55:25Z
 12. [76a..47b] sendToAll | By - rony derra | On - 2023-01-23T14:54:28Z
 13. [2a1..53c] log | By - rony derra | On - 2023-01-23T14:36:10Z
 14. [5de..261] log | By - rony derra | On - 2023-01-23T14:32:44Z
 15. [b9a..9bd] sendToAll | By - rony derra | On - 2023-01-23T14:32:25Z
 16. [489..f21] telegramBot | By - rony derra | On - 2023-01-23T12:48:12Z
 17. [2a9..36d] telegramBot | By - rony derra | On - 2023-01-23T11:14:22Z
 18. [2bb..ec5] log | By - rony derra | On - 2023-01-23T11:12:16Z
 19. [05b..869] sendMessage | By - rony derra | On - 2023-01-17T17:12:40Z
 20. [876..c47] sendPhoto | By - rony derra | On - 2023-01-17T17:06:11Z
 21. [5a7..f1c] message | By - rony derra | On - 2023-01-17T17:01:27Z
 22. [43d..1d8] sendToAll | By - rony derra | On - 2023-01-17T16:58:24Z
 23. [528..ea2] message | By - rony derra | On - 2023-01-17T16:30:08Z
 24. [831..b60] DONE | By - rony derra | On - 2023-01-15T15:37:39Z
 25. [abe..042] data2 | By - rony derra | On - 2023-01-15T14:32:45Z
 26. [7d2..2d4] MASTER | By - rony derra | On - 2023-01-15T14:15:04Z
 27. [153..7f9] bot | By - rony derra | On - 2023-01-15T14:12:11Z
 28. [da6..f00] bot | By - rony derra | On - 2023-01-15T14:11:22Z
 29. [4f5..fed] telegramBot | By - rony derra | On - 2023-01-15T14:06:42Z
 30. [fd1..25c] rmv | By - rony derra | On - 2023-01-15T09:30:30Z
 31. [e80..b3e] telegramBot | By - rony derra | On - 2023-01-15T09:28:41Z
 32. [1de..340] formatting | By - rony derra | On - 2023-01-15T09:23:51Z
 33. [b1d..144] bot | By - rony derra | On - 2023-01-15T08:15:43Z
 34. [724..f9b] telegramBot | By - rony derra | On - 2023-01-15T08:15:13Z
 35. [97a..ddd] a | By - rony derra | On - 2023-01-08T12:16:26Z
 36. [cab..ff2] a | By - rony derra | On - 2023-01-08T12:11:42Z
 37. [125..a15] a | By - rony derra | On - 2023-01-08T12:09:01Z
 38. [f1d..a1f] a | By - rony derra | On - 2023-01-08T12:01:51Z
 39. [f98..861] a | By - rony derra | On - 2023-01-08T11:59:50Z
 40. [435..3e7] a | By - rony derra | On - 2023-01-08T11:59:03Z
 41. [dab..773] A | By - rony derra | On - 2023-01-08T11:58:21Z
 42. [d0c..1f7] a | By - rony derra | On - 2023-01-08T11:55:56Z
 43. [6da..d5f] A | By - rony derra | On - 2023-01-08T11:52:52Z
 44. [c89..3c1] a | By - rony derra | On - 2023-01-08T11:50:23Z
 45. [ece..534] telegramBot | By - rony derra | On - 2023-01-08T11:32:58Z
 46. [7e2..a0e] telegramBot | By - rony derra | On - 2023-01-08T11:28:44Z
 47. [850..1b8] google | By - rony derra | On - 2023-01-08T11:21:09Z
 48. [f85..07f] google | By - rony derra | On - 2023-01-08T11:20:21Z
 49. [0d6..97f] keyFile | By - rony derra | On - 2023-01-08T11:19:48Z
 50. [fd9..160] MASTER | By - rony derra | On - 2023-01-08T11:14:57Z

# sftAmountUpdate

## main


 1. [4b9..6f0] Initial commit | By - Dima Brook | On - 2022-12-12T13:45:01Z

## master


 1. [ad4..4f0] listen | By - rony derra | On - 2023-01-24T09:41:23Z
 2. [22c..ad4] aSD | By - rony derra | On - 2022-12-15T10:06:55Z
 3. [195..6ca] aSD | By - rony derra | On - 2022-12-15T10:02:53Z
 4. [9fd..caa] asdf | By - rony derra | On - 2022-12-15T09:56:35Z
 5. [a33..755] listen | By - rony derra | On - 2022-12-15T09:48:13Z
 6. [253..50c] 0 | By - rony derra | On - 2022-12-13T17:18:29Z
 7. [87c..a18] Add existing project files to Git | By - rony derra | On - 2022-12-12T13:49:59Z

# secret-target-nft-contract

## main


 1. [535..782] Initial commit | By - Dima Brook | On - 2022-12-15T07:08:32Z

## master


 1. [ba7..cc7] add royalties | By - imsk17 | On - 2023-01-23T14:23:26Z
 2. [78d..99e] Add a readme on how to deploy | By - imsk17 | On - 2022-12-15T12:53:21Z
 3. [663..efd] print code hash as well | By - imsk17 | On - 2022-12-15T09:28:09Z
 4. [9ce..ed0] initial import | By - imsk17 | On - 2022-12-15T09:00:03Z

# wrapped-nft-contract

## main


 1. [710..f9c] Create NftWrapper.sol | By - Dima Brook | On - 2023-01-21T16:04:21Z
 2. [05c..45a] Initial commit | By - Dima Brook | On - 2023-01-21T16:03:42Z

# xp-solana-integration

## dependabot/npm_and_yarn/prettier-2.8.3


 1. [1ff..0d9] Bump prettier from 2.3.2 to 2.8.3 | By - dependabot[bot] | On - 2023-01-16T09:07:22Z
 2. [bb3..bd2] Initial Commit | By - imsk17 | On - 2021-09-14T16:08:47Z
 3. [035..137] Bump @solana/web3.js from 1.24.2 to 1.25.0 | By - dependabot[bot] | On - 2021-09-08T08:19:20Z
 4. [439..bb3] Bump @typescript-eslint/eslint-plugin from 4.30.0 to 4.31.0 | By - dependabot[bot] | On - 2021-09-07T08:32:24Z
 5. [9c8..f9c] Bump @typescript-eslint/parser from 4.30.0 to 4.31.0 | By - dependabot[bot] | On - 2021-09-07T08:19:39Z
 6. [cf6..044] Bump @solana/web3.js from 1.24.1 to 1.24.2 | By - dependabot[bot] | On - 2021-09-06T08:21:18Z
 7. [a43..304] Bump start-server-and-test from 1.13.1 to 1.14.0 | By - dependabot[bot] | On - 2021-09-03T08:21:45Z
 8. [247..13a] Bump @typescript-eslint/parser from 4.29.3 to 4.30.0 | By - dependabot[bot] | On - 2021-08-31T08:41:07Z
 9. [e70..d86] Bump eslint-plugin-prettier from 3.4.1 to 4.0.0 | By - dependabot[bot] | On - 2021-08-31T08:30:34Z
 10. [fca..ba2] Bump @typescript-eslint/eslint-plugin from 4.29.3 to 4.30.0 | By - dependabot[bot] | On - 2021-08-31T08:19:55Z
 11. [e5f..2d5] Bump typescript from 4.3.5 to 4.4.2 | By - dependabot[bot] | On - 2021-08-27T08:20:14Z
 12. [a94..9de] Bump @typescript-eslint/parser from 4.29.2 to 4.29.3 | By - dependabot[bot] | On - 2021-08-24T08:28:36Z
 13. [1c5..dde] Bump @typescript-eslint/eslint-plugin from 4.29.2 to 4.29.3 | By - dependabot[bot] | On - 2021-08-24T08:19:08Z
 14. [443..31c] Bump eslint-plugin-prettier from 3.4.0 to 3.4.1 | By - dependabot[bot] | On - 2021-08-23T08:21:47Z
 15. [b6c..c97] Bump @solana/web3.js from 1.24.0 to 1.24.1 | By - dependabot[bot] | On - 2021-08-20T08:19:18Z
 16. [75a..ee8] Bump ts-node from 10.2.0 to 10.2.1 | By - dependabot[bot] | On - 2021-08-19T08:30:55Z
 17. [66e..9d3] Bump borsh from 0.5.0 to 0.6.0 | By - dependabot[bot] | On - 2021-08-19T08:19:26Z
 18. [4e3..302] Bump @typescript-eslint/parser from 4.29.1 to 4.29.2 | By - dependabot[bot] | On - 2021-08-17T08:34:25Z
 19. [f7f..e6d] Bump @typescript-eslint/eslint-plugin from 4.29.0 to 4.29.2 | By - dependabot[bot] | On - 2021-08-17T08:20:04Z
 20. [dd5..489] Bump @solana/web3.js from 1.23.0 to 1.24.0 | By - dependabot[bot] | On - 2021-08-13T08:20:54Z
 21. [df9..b63] Bump @solana/web3.js from 1.22.0 to 1.23.0 | By - dependabot[bot] | On - 2021-08-11T08:19:47Z
 22. [52b..834] Bump @typescript-eslint/parser from 4.29.0 to 4.29.1 | By - dependabot[bot] | On - 2021-08-10T08:22:49Z
 23. [6d5..8ea] Bump ts-node from 10.1.0 to 10.2.0 | By - dependabot[bot] | On - 2021-08-09T08:25:56Z
 24. [807..245] Bump eslint from 7.27.0 to 7.32.0 | By - dependabot[bot] | On - 2021-08-07T23:53:45Z
 25. [8b8..644] Bump @types/eslint from 7.2.14 to 7.28.0 | By - dependabot[bot] | On - 2021-08-07T23:43:50Z
 26. [b4d..efb] Bump start-server-and-test from 1.12.6 to 1.13.1 (#271) | By - dependabot[bot] | On - 2021-08-07T23:35:08Z
 27. [b29..de5] Bump @solana/web3.js from 1.20.2 to 1.22.0 (#273) | By - dependabot[bot] | On - 2021-08-07T23:17:48Z
 28. [119..0a8] Bump borsh from 0.4.0 to 0.5.0 (#274) | By - dependabot[bot] | On - 2021-08-07T23:17:43Z
 29. [a94..925] npm audit fix | By - Justin Starry | On - 2021-08-07T23:17:11Z
 30. [afa..bb8] Remove os name from action name | By - Justin Starry | On - 2021-08-07T23:16:39Z
 31. [1d0..8db] Bump @typescript-eslint/eslint-plugin from 4.28.2 to 4.29.0 (#270) | By - dependabot[bot] | On - 2021-08-07T23:07:58Z
 32. [fc2..2fc] Bump @types/mz from 2.7.3 to 2.7.4 (#249) | By - dependabot[bot] | On - 2021-08-07T23:07:48Z
 33. [376..9fd] add/clean up notes for Windows (#256) | By - Mark Jackson | On - 2021-08-07T23:07:34Z
 34. [8c1..88d] Add automerge rule and cargo dependabot rule (#272) | By - Justin Starry | On - 2021-08-07T23:02:12Z
 35. [725..0f6] Bump solana-program to 1.7.9 (#269) | By - Justin Starry | On - 2021-08-07T22:57:39Z
 36. [3d1..862] Bump @types/prettier from 2.2.3 to 2.3.2 (#252) | By - dependabot[bot] | On - 2021-08-07T22:23:52Z
 37. [0ef..472] Bump prettier from 2.3.0 to 2.3.2 (#267) | By - dependabot[bot] | On - 2021-08-07T22:23:46Z
 38. [0f4..0ac] Bump @typescript-eslint/parser from 4.28.2 to 4.29.0 (#263) | By - dependabot[bot] | On - 2021-08-06T20:42:18Z
 39. [0d6..850] Don't overwrite Cargo.lock when installing (#260) | By - Tyera Eulberg | On - 2021-07-27T01:50:10Z
 40. [414..436] Bump @typescript-eslint/eslint-plugin from 4.26.0 to 4.28.2 (#251) | By - dependabot[bot] | On - 2021-07-12T23:14:21Z
 41. [234..48f] Bump ts-node from 10.0.0 to 10.1.0 (#250) | By - dependabot[bot] | On - 2021-07-12T23:14:08Z
 42. [97d..6fd] Bump typescript from 4.2.4 to 4.3.5 (#248) | By - dependabot[bot] | On - 2021-07-09T15:56:00Z
 43. [ac7..907] Bump start-server-and-test from 1.12.2 to 1.12.6 (#247) | By - dependabot[bot] | On - 2021-07-09T15:55:55Z
 44. [cff..aa1] Update solana deps to 1.7.1 (for tests on M1) (#238) | By - Kirill Fomichev | On - 2021-07-09T15:55:31Z
 45. [784..4fa] Bump @typescript-eslint/parser from 4.24.0 to 4.28.2 (#244) | By - dependabot[bot] | On - 2021-07-09T15:29:45Z
 46. [1da..b12] Bump @types/eslint from 7.2.11 to 7.2.14 (#245) | By - dependabot[bot] | On - 2021-07-09T15:29:36Z
 47. [f17..ddf] Bump @solana/web3.js from 1.12.0 to 1.20.2 (#246) | By - dependabot[bot] | On - 2021-07-09T15:29:11Z
 48. [2e5..2bc] Update to keypair (#243) | By - zurgl | On - 2021-07-06T03:07:26Z
 49. [a41..4e8] hello worlds mistype fix for Account (#235) | By - olexandr13 | On - 2021-06-11T22:03:29Z
 50. [cc5..a42] Update main.yml | By - joeaba | On - 2021-06-04T04:30:43Z

## dependabot/npm_and_yarn/typescript-4.9.4


 1. [433..deb] Bump typescript from 4.4.2 to 4.9.4 | By - dependabot[bot] | On - 2022-12-08T09:07:24Z
 2. [bb3..bd2] Initial Commit | By - imsk17 | On - 2021-09-14T16:08:47Z
 3. [035..137] Bump @solana/web3.js from 1.24.2 to 1.25.0 | By - dependabot[bot] | On - 2021-09-08T08:19:20Z
 4. [439..bb3] Bump @typescript-eslint/eslint-plugin from 4.30.0 to 4.31.0 | By - dependabot[bot] | On - 2021-09-07T08:32:24Z
 5. [9c8..f9c] Bump @typescript-eslint/parser from 4.30.0 to 4.31.0 | By - dependabot[bot] | On - 2021-09-07T08:19:39Z
 6. [cf6..044] Bump @solana/web3.js from 1.24.1 to 1.24.2 | By - dependabot[bot] | On - 2021-09-06T08:21:18Z
 7. [a43..304] Bump start-server-and-test from 1.13.1 to 1.14.0 | By - dependabot[bot] | On - 2021-09-03T08:21:45Z
 8. [247..13a] Bump @typescript-eslint/parser from 4.29.3 to 4.30.0 | By - dependabot[bot] | On - 2021-08-31T08:41:07Z
 9. [e70..d86] Bump eslint-plugin-prettier from 3.4.1 to 4.0.0 | By - dependabot[bot] | On - 2021-08-31T08:30:34Z
 10. [fca..ba2] Bump @typescript-eslint/eslint-plugin from 4.29.3 to 4.30.0 | By - dependabot[bot] | On - 2021-08-31T08:19:55Z
 11. [e5f..2d5] Bump typescript from 4.3.5 to 4.4.2 | By - dependabot[bot] | On - 2021-08-27T08:20:14Z
 12. [a94..9de] Bump @typescript-eslint/parser from 4.29.2 to 4.29.3 | By - dependabot[bot] | On - 2021-08-24T08:28:36Z
 13. [1c5..dde] Bump @typescript-eslint/eslint-plugin from 4.29.2 to 4.29.3 | By - dependabot[bot] | On - 2021-08-24T08:19:08Z
 14. [443..31c] Bump eslint-plugin-prettier from 3.4.0 to 3.4.1 | By - dependabot[bot] | On - 2021-08-23T08:21:47Z
 15. [b6c..c97] Bump @solana/web3.js from 1.24.0 to 1.24.1 | By - dependabot[bot] | On - 2021-08-20T08:19:18Z
 16. [75a..ee8] Bump ts-node from 10.2.0 to 10.2.1 | By - dependabot[bot] | On - 2021-08-19T08:30:55Z
 17. [66e..9d3] Bump borsh from 0.5.0 to 0.6.0 | By - dependabot[bot] | On - 2021-08-19T08:19:26Z
 18. [4e3..302] Bump @typescript-eslint/parser from 4.29.1 to 4.29.2 | By - dependabot[bot] | On - 2021-08-17T08:34:25Z
 19. [f7f..e6d] Bump @typescript-eslint/eslint-plugin from 4.29.0 to 4.29.2 | By - dependabot[bot] | On - 2021-08-17T08:20:04Z
 20. [dd5..489] Bump @solana/web3.js from 1.23.0 to 1.24.0 | By - dependabot[bot] | On - 2021-08-13T08:20:54Z
 21. [df9..b63] Bump @solana/web3.js from 1.22.0 to 1.23.0 | By - dependabot[bot] | On - 2021-08-11T08:19:47Z
 22. [52b..834] Bump @typescript-eslint/parser from 4.29.0 to 4.29.1 | By - dependabot[bot] | On - 2021-08-10T08:22:49Z
 23. [6d5..8ea] Bump ts-node from 10.1.0 to 10.2.0 | By - dependabot[bot] | On - 2021-08-09T08:25:56Z
 24. [807..245] Bump eslint from 7.27.0 to 7.32.0 | By - dependabot[bot] | On - 2021-08-07T23:53:45Z
 25. [8b8..644] Bump @types/eslint from 7.2.14 to 7.28.0 | By - dependabot[bot] | On - 2021-08-07T23:43:50Z
 26. [b4d..efb] Bump start-server-and-test from 1.12.6 to 1.13.1 (#271) | By - dependabot[bot] | On - 2021-08-07T23:35:08Z
 27. [b29..de5] Bump @solana/web3.js from 1.20.2 to 1.22.0 (#273) | By - dependabot[bot] | On - 2021-08-07T23:17:48Z
 28. [119..0a8] Bump borsh from 0.4.0 to 0.5.0 (#274) | By - dependabot[bot] | On - 2021-08-07T23:17:43Z
 29. [a94..925] npm audit fix | By - Justin Starry | On - 2021-08-07T23:17:11Z
 30. [afa..bb8] Remove os name from action name | By - Justin Starry | On - 2021-08-07T23:16:39Z
 31. [1d0..8db] Bump @typescript-eslint/eslint-plugin from 4.28.2 to 4.29.0 (#270) | By - dependabot[bot] | On - 2021-08-07T23:07:58Z
 32. [fc2..2fc] Bump @types/mz from 2.7.3 to 2.7.4 (#249) | By - dependabot[bot] | On - 2021-08-07T23:07:48Z
 33. [376..9fd] add/clean up notes for Windows (#256) | By - Mark Jackson | On - 2021-08-07T23:07:34Z
 34. [8c1..88d] Add automerge rule and cargo dependabot rule (#272) | By - Justin Starry | On - 2021-08-07T23:02:12Z
 35. [725..0f6] Bump solana-program to 1.7.9 (#269) | By - Justin Starry | On - 2021-08-07T22:57:39Z
 36. [3d1..862] Bump @types/prettier from 2.2.3 to 2.3.2 (#252) | By - dependabot[bot] | On - 2021-08-07T22:23:52Z
 37. [0ef..472] Bump prettier from 2.3.0 to 2.3.2 (#267) | By - dependabot[bot] | On - 2021-08-07T22:23:46Z
 38. [0f4..0ac] Bump @typescript-eslint/parser from 4.28.2 to 4.29.0 (#263) | By - dependabot[bot] | On - 2021-08-06T20:42:18Z
 39. [0d6..850] Don't overwrite Cargo.lock when installing (#260) | By - Tyera Eulberg | On - 2021-07-27T01:50:10Z
 40. [414..436] Bump @typescript-eslint/eslint-plugin from 4.26.0 to 4.28.2 (#251) | By - dependabot[bot] | On - 2021-07-12T23:14:21Z
 41. [234..48f] Bump ts-node from 10.0.0 to 10.1.0 (#250) | By - dependabot[bot] | On - 2021-07-12T23:14:08Z
 42. [97d..6fd] Bump typescript from 4.2.4 to 4.3.5 (#248) | By - dependabot[bot] | On - 2021-07-09T15:56:00Z
 43. [ac7..907] Bump start-server-and-test from 1.12.2 to 1.12.6 (#247) | By - dependabot[bot] | On - 2021-07-09T15:55:55Z
 44. [cff..aa1] Update solana deps to 1.7.1 (for tests on M1) (#238) | By - Kirill Fomichev | On - 2021-07-09T15:55:31Z
 45. [784..4fa] Bump @typescript-eslint/parser from 4.24.0 to 4.28.2 (#244) | By - dependabot[bot] | On - 2021-07-09T15:29:45Z
 46. [1da..b12] Bump @types/eslint from 7.2.11 to 7.2.14 (#245) | By - dependabot[bot] | On - 2021-07-09T15:29:36Z
 47. [f17..ddf] Bump @solana/web3.js from 1.12.0 to 1.20.2 (#246) | By - dependabot[bot] | On - 2021-07-09T15:29:11Z
 48. [2e5..2bc] Update to keypair (#243) | By - zurgl | On - 2021-07-06T03:07:26Z
 49. [a41..4e8] hello worlds mistype fix for Account (#235) | By - olexandr13 | On - 2021-06-11T22:03:29Z
 50. [cc5..a42] Update main.yml | By - joeaba | On - 2021-06-04T04:30:43Z

## dependabot/npm_and_yarn/typescript-eslint/eslint-plugin-4.33.0


 1. [713..cb7] Bump @typescript-eslint/eslint-plugin from 4.31.0 to 4.33.0 | By - dependabot[bot] | On - 2021-10-05T08:22:55Z
 2. [bb3..bd2] Initial Commit | By - imsk17 | On - 2021-09-14T16:08:47Z
 3. [035..137] Bump @solana/web3.js from 1.24.2 to 1.25.0 | By - dependabot[bot] | On - 2021-09-08T08:19:20Z
 4. [439..bb3] Bump @typescript-eslint/eslint-plugin from 4.30.0 to 4.31.0 | By - dependabot[bot] | On - 2021-09-07T08:32:24Z
 5. [9c8..f9c] Bump @typescript-eslint/parser from 4.30.0 to 4.31.0 | By - dependabot[bot] | On - 2021-09-07T08:19:39Z
 6. [cf6..044] Bump @solana/web3.js from 1.24.1 to 1.24.2 | By - dependabot[bot] | On - 2021-09-06T08:21:18Z
 7. [a43..304] Bump start-server-and-test from 1.13.1 to 1.14.0 | By - dependabot[bot] | On - 2021-09-03T08:21:45Z
 8. [247..13a] Bump @typescript-eslint/parser from 4.29.3 to 4.30.0 | By - dependabot[bot] | On - 2021-08-31T08:41:07Z
 9. [e70..d86] Bump eslint-plugin-prettier from 3.4.1 to 4.0.0 | By - dependabot[bot] | On - 2021-08-31T08:30:34Z
 10. [fca..ba2] Bump @typescript-eslint/eslint-plugin from 4.29.3 to 4.30.0 | By - dependabot[bot] | On - 2021-08-31T08:19:55Z
 11. [e5f..2d5] Bump typescript from 4.3.5 to 4.4.2 | By - dependabot[bot] | On - 2021-08-27T08:20:14Z
 12. [a94..9de] Bump @typescript-eslint/parser from 4.29.2 to 4.29.3 | By - dependabot[bot] | On - 2021-08-24T08:28:36Z
 13. [1c5..dde] Bump @typescript-eslint/eslint-plugin from 4.29.2 to 4.29.3 | By - dependabot[bot] | On - 2021-08-24T08:19:08Z
 14. [443..31c] Bump eslint-plugin-prettier from 3.4.0 to 3.4.1 | By - dependabot[bot] | On - 2021-08-23T08:21:47Z
 15. [b6c..c97] Bump @solana/web3.js from 1.24.0 to 1.24.1 | By - dependabot[bot] | On - 2021-08-20T08:19:18Z
 16. [75a..ee8] Bump ts-node from 10.2.0 to 10.2.1 | By - dependabot[bot] | On - 2021-08-19T08:30:55Z
 17. [66e..9d3] Bump borsh from 0.5.0 to 0.6.0 | By - dependabot[bot] | On - 2021-08-19T08:19:26Z
 18. [4e3..302] Bump @typescript-eslint/parser from 4.29.1 to 4.29.2 | By - dependabot[bot] | On - 2021-08-17T08:34:25Z
 19. [f7f..e6d] Bump @typescript-eslint/eslint-plugin from 4.29.0 to 4.29.2 | By - dependabot[bot] | On - 2021-08-17T08:20:04Z
 20. [dd5..489] Bump @solana/web3.js from 1.23.0 to 1.24.0 | By - dependabot[bot] | On - 2021-08-13T08:20:54Z
 21. [df9..b63] Bump @solana/web3.js from 1.22.0 to 1.23.0 | By - dependabot[bot] | On - 2021-08-11T08:19:47Z
 22. [52b..834] Bump @typescript-eslint/parser from 4.29.0 to 4.29.1 | By - dependabot[bot] | On - 2021-08-10T08:22:49Z
 23. [6d5..8ea] Bump ts-node from 10.1.0 to 10.2.0 | By - dependabot[bot] | On - 2021-08-09T08:25:56Z
 24. [807..245] Bump eslint from 7.27.0 to 7.32.0 | By - dependabot[bot] | On - 2021-08-07T23:53:45Z
 25. [8b8..644] Bump @types/eslint from 7.2.14 to 7.28.0 | By - dependabot[bot] | On - 2021-08-07T23:43:50Z
 26. [b4d..efb] Bump start-server-and-test from 1.12.6 to 1.13.1 (#271) | By - dependabot[bot] | On - 2021-08-07T23:35:08Z
 27. [b29..de5] Bump @solana/web3.js from 1.20.2 to 1.22.0 (#273) | By - dependabot[bot] | On - 2021-08-07T23:17:48Z
 28. [119..0a8] Bump borsh from 0.4.0 to 0.5.0 (#274) | By - dependabot[bot] | On - 2021-08-07T23:17:43Z
 29. [a94..925] npm audit fix | By - Justin Starry | On - 2021-08-07T23:17:11Z
 30. [afa..bb8] Remove os name from action name | By - Justin Starry | On - 2021-08-07T23:16:39Z
 31. [1d0..8db] Bump @typescript-eslint/eslint-plugin from 4.28.2 to 4.29.0 (#270) | By - dependabot[bot] | On - 2021-08-07T23:07:58Z
 32. [fc2..2fc] Bump @types/mz from 2.7.3 to 2.7.4 (#249) | By - dependabot[bot] | On - 2021-08-07T23:07:48Z
 33. [376..9fd] add/clean up notes for Windows (#256) | By - Mark Jackson | On - 2021-08-07T23:07:34Z
 34. [8c1..88d] Add automerge rule and cargo dependabot rule (#272) | By - Justin Starry | On - 2021-08-07T23:02:12Z
 35. [725..0f6] Bump solana-program to 1.7.9 (#269) | By - Justin Starry | On - 2021-08-07T22:57:39Z
 36. [3d1..862] Bump @types/prettier from 2.2.3 to 2.3.2 (#252) | By - dependabot[bot] | On - 2021-08-07T22:23:52Z
 37. [0ef..472] Bump prettier from 2.3.0 to 2.3.2 (#267) | By - dependabot[bot] | On - 2021-08-07T22:23:46Z
 38. [0f4..0ac] Bump @typescript-eslint/parser from 4.28.2 to 4.29.0 (#263) | By - dependabot[bot] | On - 2021-08-06T20:42:18Z
 39. [0d6..850] Don't overwrite Cargo.lock when installing (#260) | By - Tyera Eulberg | On - 2021-07-27T01:50:10Z
 40. [414..436] Bump @typescript-eslint/eslint-plugin from 4.26.0 to 4.28.2 (#251) | By - dependabot[bot] | On - 2021-07-12T23:14:21Z
 41. [234..48f] Bump ts-node from 10.0.0 to 10.1.0 (#250) | By - dependabot[bot] | On - 2021-07-12T23:14:08Z
 42. [97d..6fd] Bump typescript from 4.2.4 to 4.3.5 (#248) | By - dependabot[bot] | On - 2021-07-09T15:56:00Z
 43. [ac7..907] Bump start-server-and-test from 1.12.2 to 1.12.6 (#247) | By - dependabot[bot] | On - 2021-07-09T15:55:55Z
 44. [cff..aa1] Update solana deps to 1.7.1 (for tests on M1) (#238) | By - Kirill Fomichev | On - 2021-07-09T15:55:31Z
 45. [784..4fa] Bump @typescript-eslint/parser from 4.24.0 to 4.28.2 (#244) | By - dependabot[bot] | On - 2021-07-09T15:29:45Z
 46. [1da..b12] Bump @types/eslint from 7.2.11 to 7.2.14 (#245) | By - dependabot[bot] | On - 2021-07-09T15:29:36Z
 47. [f17..ddf] Bump @solana/web3.js from 1.12.0 to 1.20.2 (#246) | By - dependabot[bot] | On - 2021-07-09T15:29:11Z
 48. [2e5..2bc] Update to keypair (#243) | By - zurgl | On - 2021-07-06T03:07:26Z
 49. [a41..4e8] hello worlds mistype fix for Account (#235) | By - olexandr13 | On - 2021-06-11T22:03:29Z
 50. [cc5..a42] Update main.yml | By - joeaba | On - 2021-06-04T04:30:43Z

## master


 1. [bb3..bd2] Initial Commit | By - imsk17 | On - 2021-09-14T16:08:47Z
 2. [035..137] Bump @solana/web3.js from 1.24.2 to 1.25.0 | By - dependabot[bot] | On - 2021-09-08T08:19:20Z
 3. [439..bb3] Bump @typescript-eslint/eslint-plugin from 4.30.0 to 4.31.0 | By - dependabot[bot] | On - 2021-09-07T08:32:24Z
 4. [9c8..f9c] Bump @typescript-eslint/parser from 4.30.0 to 4.31.0 | By - dependabot[bot] | On - 2021-09-07T08:19:39Z
 5. [cf6..044] Bump @solana/web3.js from 1.24.1 to 1.24.2 | By - dependabot[bot] | On - 2021-09-06T08:21:18Z
 6. [a43..304] Bump start-server-and-test from 1.13.1 to 1.14.0 | By - dependabot[bot] | On - 2021-09-03T08:21:45Z
 7. [247..13a] Bump @typescript-eslint/parser from 4.29.3 to 4.30.0 | By - dependabot[bot] | On - 2021-08-31T08:41:07Z
 8. [e70..d86] Bump eslint-plugin-prettier from 3.4.1 to 4.0.0 | By - dependabot[bot] | On - 2021-08-31T08:30:34Z
 9. [fca..ba2] Bump @typescript-eslint/eslint-plugin from 4.29.3 to 4.30.0 | By - dependabot[bot] | On - 2021-08-31T08:19:55Z
 10. [e5f..2d5] Bump typescript from 4.3.5 to 4.4.2 | By - dependabot[bot] | On - 2021-08-27T08:20:14Z
 11. [a94..9de] Bump @typescript-eslint/parser from 4.29.2 to 4.29.3 | By - dependabot[bot] | On - 2021-08-24T08:28:36Z
 12. [1c5..dde] Bump @typescript-eslint/eslint-plugin from 4.29.2 to 4.29.3 | By - dependabot[bot] | On - 2021-08-24T08:19:08Z
 13. [443..31c] Bump eslint-plugin-prettier from 3.4.0 to 3.4.1 | By - dependabot[bot] | On - 2021-08-23T08:21:47Z
 14. [b6c..c97] Bump @solana/web3.js from 1.24.0 to 1.24.1 | By - dependabot[bot] | On - 2021-08-20T08:19:18Z
 15. [75a..ee8] Bump ts-node from 10.2.0 to 10.2.1 | By - dependabot[bot] | On - 2021-08-19T08:30:55Z
 16. [66e..9d3] Bump borsh from 0.5.0 to 0.6.0 | By - dependabot[bot] | On - 2021-08-19T08:19:26Z
 17. [4e3..302] Bump @typescript-eslint/parser from 4.29.1 to 4.29.2 | By - dependabot[bot] | On - 2021-08-17T08:34:25Z
 18. [f7f..e6d] Bump @typescript-eslint/eslint-plugin from 4.29.0 to 4.29.2 | By - dependabot[bot] | On - 2021-08-17T08:20:04Z
 19. [dd5..489] Bump @solana/web3.js from 1.23.0 to 1.24.0 | By - dependabot[bot] | On - 2021-08-13T08:20:54Z
 20. [df9..b63] Bump @solana/web3.js from 1.22.0 to 1.23.0 | By - dependabot[bot] | On - 2021-08-11T08:19:47Z
 21. [52b..834] Bump @typescript-eslint/parser from 4.29.0 to 4.29.1 | By - dependabot[bot] | On - 2021-08-10T08:22:49Z
 22. [6d5..8ea] Bump ts-node from 10.1.0 to 10.2.0 | By - dependabot[bot] | On - 2021-08-09T08:25:56Z
 23. [807..245] Bump eslint from 7.27.0 to 7.32.0 | By - dependabot[bot] | On - 2021-08-07T23:53:45Z
 24. [8b8..644] Bump @types/eslint from 7.2.14 to 7.28.0 | By - dependabot[bot] | On - 2021-08-07T23:43:50Z
 25. [b4d..efb] Bump start-server-and-test from 1.12.6 to 1.13.1 (#271) | By - dependabot[bot] | On - 2021-08-07T23:35:08Z
 26. [b29..de5] Bump @solana/web3.js from 1.20.2 to 1.22.0 (#273) | By - dependabot[bot] | On - 2021-08-07T23:17:48Z
 27. [119..0a8] Bump borsh from 0.4.0 to 0.5.0 (#274) | By - dependabot[bot] | On - 2021-08-07T23:17:43Z
 28. [a94..925] npm audit fix | By - Justin Starry | On - 2021-08-07T23:17:11Z
 29. [afa..bb8] Remove os name from action name | By - Justin Starry | On - 2021-08-07T23:16:39Z
 30. [1d0..8db] Bump @typescript-eslint/eslint-plugin from 4.28.2 to 4.29.0 (#270) | By - dependabot[bot] | On - 2021-08-07T23:07:58Z
 31. [fc2..2fc] Bump @types/mz from 2.7.3 to 2.7.4 (#249) | By - dependabot[bot] | On - 2021-08-07T23:07:48Z
 32. [376..9fd] add/clean up notes for Windows (#256) | By - Mark Jackson | On - 2021-08-07T23:07:34Z
 33. [8c1..88d] Add automerge rule and cargo dependabot rule (#272) | By - Justin Starry | On - 2021-08-07T23:02:12Z
 34. [725..0f6] Bump solana-program to 1.7.9 (#269) | By - Justin Starry | On - 2021-08-07T22:57:39Z
 35. [3d1..862] Bump @types/prettier from 2.2.3 to 2.3.2 (#252) | By - dependabot[bot] | On - 2021-08-07T22:23:52Z
 36. [0ef..472] Bump prettier from 2.3.0 to 2.3.2 (#267) | By - dependabot[bot] | On - 2021-08-07T22:23:46Z
 37. [0f4..0ac] Bump @typescript-eslint/parser from 4.28.2 to 4.29.0 (#263) | By - dependabot[bot] | On - 2021-08-06T20:42:18Z
 38. [0d6..850] Don't overwrite Cargo.lock when installing (#260) | By - Tyera Eulberg | On - 2021-07-27T01:50:10Z
 39. [414..436] Bump @typescript-eslint/eslint-plugin from 4.26.0 to 4.28.2 (#251) | By - dependabot[bot] | On - 2021-07-12T23:14:21Z
 40. [234..48f] Bump ts-node from 10.0.0 to 10.1.0 (#250) | By - dependabot[bot] | On - 2021-07-12T23:14:08Z
 41. [97d..6fd] Bump typescript from 4.2.4 to 4.3.5 (#248) | By - dependabot[bot] | On - 2021-07-09T15:56:00Z
 42. [ac7..907] Bump start-server-and-test from 1.12.2 to 1.12.6 (#247) | By - dependabot[bot] | On - 2021-07-09T15:55:55Z
 43. [cff..aa1] Update solana deps to 1.7.1 (for tests on M1) (#238) | By - Kirill Fomichev | On - 2021-07-09T15:55:31Z
 44. [784..4fa] Bump @typescript-eslint/parser from 4.24.0 to 4.28.2 (#244) | By - dependabot[bot] | On - 2021-07-09T15:29:45Z
 45. [1da..b12] Bump @types/eslint from 7.2.11 to 7.2.14 (#245) | By - dependabot[bot] | On - 2021-07-09T15:29:36Z
 46. [f17..ddf] Bump @solana/web3.js from 1.12.0 to 1.20.2 (#246) | By - dependabot[bot] | On - 2021-07-09T15:29:11Z
 47. [2e5..2bc] Update to keypair (#243) | By - zurgl | On - 2021-07-06T03:07:26Z
 48. [a41..4e8] hello worlds mistype fix for Account (#235) | By - olexandr13 | On - 2021-06-11T22:03:29Z
 49. [cc5..a42] Update main.yml | By - joeaba | On - 2021-06-04T04:30:43Z
 50. [498..e29] Update main.yml | By - joeaba | On - 2021-06-04T04:19:31Z

# lightpaper-l2-gaming

## master


 1. [a8c..9c7] update Problem content links | By - Dima Brook | On - 2023-01-10T15:24:21Z
 2. [a40..9c2] update 1.Problem.md | By - Dima Brook | On - 2023-01-10T14:46:43Z
 3. [5ec..e31] describe the Problem | By - Dima Brook | On - 2023-01-09T18:39:27Z
 4. [38a..9ef] describe the Problem | By - Dima Brook | On - 2023-01-09T18:36:16Z
 5. [fc0..52c] describe the Problem | By - Dima Brook | On - 2023-01-09T18:33:52Z
 6. [8a0..42f] describe the Problem | By - Dima Brook | On - 2023-01-09T18:30:28Z
 7. [7ef..039] describe the Problem | By - Dima Brook | On - 2023-01-09T18:29:39Z
 8. [00f..9d6] add pages | By - Dima Brook | On - 2023-01-09T16:00:28Z

# tx-socket

## master


 1. [6d8..b5f] add error 404 | By - Alex Moshinsky | On - 2023-01-10T11:08:11Z
 2. [a52..5d9] algorand_event: DELETE: ignore if errors with lookupAccount | By - rupansh | On - 2022-05-11T14:59:17Z
 3. [cf3..077] minor cleanup | By - rupansh | On - 2022-04-05T12:33:43Z
 4. [854..762] update .env.example | By - rupansh | On - 2022-04-05T12:30:46Z
 5. [969..fe4] algorand fixes | By - rupansh | On - 2022-04-05T12:29:48Z
 6. [b90..524] cors: fix | By - imsk17 | On - 2022-03-28T11:07:25Z
 7. [2e4..9cd] deploy(heroku): add a procfile | By - imsk17 | On - 2022-03-06T11:01:40Z
 8. [f03..d6c] add from_chain to tx_event | By - rupansh | On - 2022-02-20T08:55:14Z
 9. [1d5..19b] add start script | By - Dima Brook | On - 2022-02-17T10:10:51Z
 10. [e05..420] minor fixes | By - rupansh | On - 2021-12-14T09:49:57Z
 11. [00d..bfd] algorand: return early if no nfts are available in db | By - rupansh | On - 2021-12-14T09:33:16Z
 12. [5d7..f95] algorand: add delete query | By - rupansh | On - 2021-12-14T09:31:38Z
 13. [471..f26] algorand: add getter for all claim info by owner | By - rupansh | On - 2021-12-09T10:20:40Z
 14. [b67..1aa] algorand: minor change to claim nft getter | By - rupansh | On - 2021-12-09T10:05:40Z
 15. [7b4..33e] algorand: search for events by owner and actionId | By - rupansh | On - 2021-12-09T09:49:01Z
 16. [de4..022] fix(mongo): create index on receiver | By - imsk17 | On - 2021-12-08T14:01:28Z
 17. [328..edf] feat(algorand): add getter for events | By - imsk17 | On - 2021-12-08T13:56:56Z
 18. [119..61f] feat(algorand): persist txn to mongo | By - imsk17 | On - 2021-12-08T13:11:10Z
 19. [29f..2cf] feat(algorand): add owner for txn persistence | By - imsk17 | On - 2021-12-08T11:24:46Z
 20. [9c1..5c3] add event for algorand minting | By - rupansh | On - 2021-11-21T11:55:26Z
 21. [7eb..685] fix minor derps | By - rupansh | On - 2021-11-20T14:17:22Z
 22. [767..5a5] use hash for event secret | By - rupansh | On - 2021-11-20T14:00:36Z
 23. [c3c..8c9] initial import | By - rupansh | On - 2021-11-20T13:20:39Z

# l2-whitepaper

## main


 1. [6e0..433] add: TCP&UDP protocols, Side Chains | By - Dima Brook | On - 2023-01-05T15:45:05Z
 2. [2b1..36e] update | By - Dima Brook | On - 2023-01-03T10:59:37Z
 3. [507..bd4] add: Preface update | By - Dima Brook | On - 2022-12-06T10:01:08Z
 4. [2f5..7c4] add: Preface | By - Dima Brook | On - 2022-12-06T09:22:26Z
 5. [85d..4e6] fix: Latex displays | By - Dima Brook | On - 2022-12-06T07:51:15Z
 6. [7c6..1aa] fix: Latex displays | By - Dima Brook | On - 2022-12-06T07:50:17Z
 7. [396..29f] fix: Latex displays | By - Dima Brook | On - 2022-12-06T07:44:58Z
 8. [da6..d76] fix: Latex displays | By - Dima Brook | On - 2022-12-06T07:43:22Z
 9. [f68..3f7] fix: Latex displays | By - Dima Brook | On - 2022-12-06T07:42:33Z
 10. [113..16f] add: Bitcoin - Problem - speed & storage | By - Dima Brook | On - 2022-12-05T09:15:38Z
 11. [acb..dd5] plan draft | By - Dima Brook | On - 2022-12-04T17:30:58Z
 12. [e4a..e97] initial | By - Dima Brook | On - 2022-12-04T16:43:22Z

# internal-docs

## main


 1. [186..c5c] How to Generate ED25519 keys | By - Dima Brook | On - 2023-01-05T10:06:51Z
 2. [ea6..8ef] Update bridge_deployment.md | By - Dima Brook | On - 2022-10-09T08:22:40Z
 3. [5c2..f15] Update bridge_deployment.md | By - Dima Brook | On - 2022-10-09T08:18:13Z
 4. [41f..73a] Update tezos-backer-restart.md | By - Dima Brook | On - 2022-06-23T08:35:11Z
 5. [485..1a1] Create Hetzner_raid1_to_raid0.md | By - Dima Brook | On - 2022-06-23T08:34:16Z
 6. [5ac..981] Create Hedera.md | By - Dima Brook | On - 2022-04-03T13:14:08Z
 7. [907..81a] Create D_CENT.md | By - Dima Brook | On - 2022-04-03T13:13:18Z
 8. [29d..dd5] Create Clover.md | By - Dima Brook | On - 2022-04-03T13:12:41Z
 9. [f62..a24] Create tezos-backer-restart.md | By - Dima Brook | On - 2022-04-03T13:12:04Z
 10. [ad5..98e] Create bridge_architecture.md | By - Dima Brook | On - 2022-02-28T19:24:43Z
 11. [b12..32d] Create docker.md | By - Dima Brook | On - 2022-02-22T10:31:25Z
 12. [3d4..2a2] Create heco.md | By - Dima Brook | On - 2022-02-16T09:50:37Z
 13. [145..6b8] Create moonbeam.md | By - Dima Brook | On - 2022-02-14T14:07:32Z
 14. [2c1..ccd] Create ve-chain.md | By - Dima Brook | On - 2022-02-14T10:15:57Z
 15. [92d..b42] Create secret-network.md | By - Dima Brook | On - 2022-02-14T10:15:22Z
 16. [ad4..5e6] Create nervos.md | By - Dima Brook | On - 2022-02-14T10:14:48Z
 17. [223..376] Create .gitkeep | By - Dima Brook | On - 2022-02-14T10:14:20Z
 18. [5a4..f07] Create nervos.md | By - Dima Brook | On - 2022-02-14T10:13:26Z
 19. [6dd..72f] Create thinkium.md | By - Dima Brook | On - 2022-02-14T10:12:24Z
 20. [ce6..6fd] Create .gitkeep | By - Dima Brook | On - 2022-02-14T10:11:46Z
 21. [86d..f5c] Create tezos_backer.md | By - Dima Brook | On - 2022-02-14T09:53:36Z
 22. [711..208] Create bridge_deployment.md | By - Dima Brook | On - 2022-02-13T11:34:22Z
 23. [823..62f] Create algorand-deployment.md | By - Dima Brook | On - 2021-12-06T18:11:40Z
 24. [633..645] Create heroku-nft-index.md | By - Dima Brook | On - 2021-12-01T19:06:03Z

# sc-deployer-ui

## mainnet


 1. [856..de7] checkAddress | By - rony derra | On - 2023-01-04T10:25:30Z
 2. [2b5..d4c] gas fee | By - rony derra | On - 2023-01-04T10:13:05Z
 3. [bfb..846] deployer | By - rony derra | On - 2022-11-27T14:00:21Z
 4. [31d..dce] setIsDevMode | By - rony derra | On - 2022-11-27T13:34:47Z
 5. [97c..abf] mainnet rout | By - rony derra | On - 2022-11-27T12:29:39Z
 6. [202..f20] testnet => mainnet | By - rony derra | On - 2022-11-27T11:45:43Z
 7. [8d5..980] deployContract | By - rony derra | On - 2022-11-27T11:05:36Z
 8. [e4d..220] When FT is chosen the royalties element shouldnt appear at all | By - rony derra | On - 2022-11-27T10:15:26Z
 9. [784..b21] placeHolder | By - rony derra | On - 2022-11-27T10:05:41Z
 10. [047..188] formatting | By - rony derra | On - 2022-11-27T09:44:13Z
 11. [52f..21a] formatting | By - rony derra | On - 2022-11-27T09:43:35Z
 12. [253..ec0] warning confi | By - rony derra | On - 2022-11-27T09:42:52Z
 13. [b70..48d] deploy args switch case fix | By - rony derra | On - 2022-11-27T09:37:42Z
 14. [a45..994] get contract function fix - cases | By - rony derra | On - 2022-11-27T09:31:18Z
 15. [6ce..ae7] export oppensea royalties contracts and setup get contract function | By - rony derra | On - 2022-11-27T09:30:41Z
 16. [ab6..bd5] oppensea royalties | By - rony derra | On - 2022-11-27T09:26:20Z
 17. [8de..a0a] regex to elrond | By - rony derra | On - 2022-11-21T07:56:01Z
 18. [442..cd8] elrond | By - rony derra | On - 2022-11-20T23:37:06Z
 19. [255..7e9] meta devnet | By - rony derra | On - 2022-11-20T23:06:12Z
 20. [c90..bda] devmode | By - rony derra | On - 2022-11-20T21:47:51Z
 21. [2ab..7b4] formatting | By - rony derra | On - 2022-11-20T20:48:02Z
 22. [30c..285] new meta connection - testing | By - rony derra | On - 2022-11-20T20:42:12Z
 23. [45c..8c5] handle error | By - rony derra | On - 2022-11-20T17:06:19Z
 24. [ad0..9c7] dev | By - rony derra | On - 2022-11-20T16:00:45Z
 25. [300..97d] evm chains | By - rony derra | On - 2022-11-20T15:54:15Z
 26. [d59..6d1] onbeforeunload | By - rony derra | On - 2022-11-20T15:31:39Z
 27. [19a..615] dev | By - rony derra | On - 2022-11-20T15:29:36Z
 28. [8c4..72c] elrond | By - rony derra | On - 2022-11-20T15:28:26Z
 29. [6d5..125] elrond | By - rony derra | On - 2022-11-20T15:25:29Z
 30. [c4c..05d] formating | By - rony derra | On - 2022-11-20T15:20:47Z
 31. [431..ec2] trim | By - rony derra | On - 2022-11-20T14:35:19Z
 32. [e72..8cd] elrond | By - rony derra | On - 2022-11-20T14:16:43Z
 33. [246..ed7] to | By - rony derra | On - 2022-11-20T13:56:49Z
 34. [e6f..359] SelectChains | By - rony derra | On - 2022-11-20T12:30:31Z
 35. [110..bf8] nofies | By - rony derra | On - 2022-11-20T12:19:27Z
 36. [278..d46] transfer ownership | By - rony derra | On - 2022-11-20T12:17:03Z
 37. [39a..ea6] devmode | By - rony derra | On - 2022-11-20T12:14:38Z
 38. [249..151] relode | By - rony derra | On - 2022-11-20T11:48:37Z
 39. [b80..b65] disconnect dev mode | By - rony derra | On - 2022-11-20T10:52:03Z
 40. [1d8..f6d] devmode | By - rony derra | On - 2022-11-20T10:49:25Z
 41. [37d..abb] testnet | By - rony derra | On - 2022-11-20T10:22:54Z
 42. [1f9..76b] formatting | By - rony derra | On - 2022-11-20T09:33:08Z
 43. [e60..067] setIsDevMode | By - rony derra | On - 2022-11-20T09:32:17Z
 44. [327..c17] name cahinging | By - rony derra | On - 2022-11-20T09:09:26Z
 45. [eb6..c6f] typo | By - rony derra | On - 2022-11-20T08:53:18Z
 46. [ab8..470] dis roles | By - rony derra | On - 2022-11-18T18:19:24Z
 47. [bee..de9] notifySuccess | By - rony derra | On - 2022-11-18T18:15:09Z
 48. [172..c99] deployer | By - rony derra | On - 2022-11-18T18:10:47Z
 49. [ab0..173] logs | By - rony derra | On - 2022-11-18T17:36:27Z
 50. [96f..61b] collectionName | By - rony derra | On - 2022-11-18T17:35:03Z

## master


 1. [bfb..846] deployer | By - rony derra | On - 2022-11-27T14:00:21Z
 2. [31d..dce] setIsDevMode | By - rony derra | On - 2022-11-27T13:34:47Z
 3. [8d5..980] deployContract | By - rony derra | On - 2022-11-27T11:05:36Z
 4. [e4d..220] When FT is chosen the royalties element shouldnt appear at all | By - rony derra | On - 2022-11-27T10:15:26Z
 5. [784..b21] placeHolder | By - rony derra | On - 2022-11-27T10:05:41Z
 6. [047..188] formatting | By - rony derra | On - 2022-11-27T09:44:13Z
 7. [52f..21a] formatting | By - rony derra | On - 2022-11-27T09:43:35Z
 8. [253..ec0] warning confi | By - rony derra | On - 2022-11-27T09:42:52Z
 9. [b70..48d] deploy args switch case fix | By - rony derra | On - 2022-11-27T09:37:42Z
 10. [a45..994] get contract function fix - cases | By - rony derra | On - 2022-11-27T09:31:18Z
 11. [6ce..ae7] export oppensea royalties contracts and setup get contract function | By - rony derra | On - 2022-11-27T09:30:41Z
 12. [ab6..bd5] oppensea royalties | By - rony derra | On - 2022-11-27T09:26:20Z
 13. [8de..a0a] regex to elrond | By - rony derra | On - 2022-11-21T07:56:01Z
 14. [442..cd8] elrond | By - rony derra | On - 2022-11-20T23:37:06Z
 15. [255..7e9] meta devnet | By - rony derra | On - 2022-11-20T23:06:12Z
 16. [c90..bda] devmode | By - rony derra | On - 2022-11-20T21:47:51Z
 17. [2ab..7b4] formatting | By - rony derra | On - 2022-11-20T20:48:02Z
 18. [30c..285] new meta connection - testing | By - rony derra | On - 2022-11-20T20:42:12Z
 19. [45c..8c5] handle error | By - rony derra | On - 2022-11-20T17:06:19Z
 20. [ad0..9c7] dev | By - rony derra | On - 2022-11-20T16:00:45Z
 21. [300..97d] evm chains | By - rony derra | On - 2022-11-20T15:54:15Z
 22. [d59..6d1] onbeforeunload | By - rony derra | On - 2022-11-20T15:31:39Z
 23. [19a..615] dev | By - rony derra | On - 2022-11-20T15:29:36Z
 24. [8c4..72c] elrond | By - rony derra | On - 2022-11-20T15:28:26Z
 25. [6d5..125] elrond | By - rony derra | On - 2022-11-20T15:25:29Z
 26. [c4c..05d] formating | By - rony derra | On - 2022-11-20T15:20:47Z
 27. [431..ec2] trim | By - rony derra | On - 2022-11-20T14:35:19Z
 28. [e72..8cd] elrond | By - rony derra | On - 2022-11-20T14:16:43Z
 29. [246..ed7] to | By - rony derra | On - 2022-11-20T13:56:49Z
 30. [e6f..359] SelectChains | By - rony derra | On - 2022-11-20T12:30:31Z
 31. [110..bf8] nofies | By - rony derra | On - 2022-11-20T12:19:27Z
 32. [278..d46] transfer ownership | By - rony derra | On - 2022-11-20T12:17:03Z
 33. [39a..ea6] devmode | By - rony derra | On - 2022-11-20T12:14:38Z
 34. [249..151] relode | By - rony derra | On - 2022-11-20T11:48:37Z
 35. [b80..b65] disconnect dev mode | By - rony derra | On - 2022-11-20T10:52:03Z
 36. [1d8..f6d] devmode | By - rony derra | On - 2022-11-20T10:49:25Z
 37. [37d..abb] testnet | By - rony derra | On - 2022-11-20T10:22:54Z
 38. [1f9..76b] formatting | By - rony derra | On - 2022-11-20T09:33:08Z
 39. [e60..067] setIsDevMode | By - rony derra | On - 2022-11-20T09:32:17Z
 40. [327..c17] name cahinging | By - rony derra | On - 2022-11-20T09:09:26Z
 41. [eb6..c6f] typo | By - rony derra | On - 2022-11-20T08:53:18Z
 42. [ab8..470] dis roles | By - rony derra | On - 2022-11-18T18:19:24Z
 43. [bee..de9] notifySuccess | By - rony derra | On - 2022-11-18T18:15:09Z
 44. [172..c99] deployer | By - rony derra | On - 2022-11-18T18:10:47Z
 45. [ab0..173] logs | By - rony derra | On - 2022-11-18T17:36:27Z
 46. [96f..61b] collectionName | By - rony derra | On - 2022-11-18T17:35:03Z
 47. [2d6..755] formatting | By - rony derra | On - 2022-11-18T17:33:29Z
 48. [b73..b2e] hexToString | By - rony derra | On - 2022-11-18T17:32:29Z
 49. [165..44c] navigation bug fix | By - rony derra | On - 2022-11-17T16:40:55Z
 50. [2d8..d6e] updates | By - rony derra | On - 2022-11-17T15:54:36Z

# xp-game-backend

## main


 1. [114..e67] Updated | By - tabisharaza@gmail.com | On - 2023-01-02T05:12:29Z
 2. [b53..58e] added .gitignore | By - tabisharaza@gmail.com | On - 2022-12-23T14:23:20Z
 3. [60d..e2d] added package.json | By - tabisharaza@gmail.com | On - 2022-12-23T13:50:30Z

# xp-game-front

## main


 1. [e33..103] Connect MetaMask,Get Characters, Get Equipments | By - tabisharaza@gmail.com | On - 2023-01-02T05:11:57Z
 2. [ce2..4c7] folderstructure | By - tabisharaza@gmail.com | On - 2022-12-26T06:45:05Z
 3. [eb6..523] npx create react app | By - tabisharaza@gmail.com | On - 2022-12-24T07:50:04Z
 4. [faf..c3a] added package.json | By - tabisharaza@gmail.com | On - 2022-12-23T13:56:37Z

# bridge-contract-erc20-fee

## main


 1. [a15..b2d] initial | By - Dima Brook | On - 2022-12-12T10:56:27Z

# demo-repository

## add-auto-assign-workflow


 1. [a92..eec] Enable Actions Workflow | By - Dima Brook | On - 2022-12-07T15:22:34Z
 2. [dbc..1f6] Initial commit | By - Dima Brook | On - 2022-12-07T15:22:34Z

## main


 1. [dbc..1f6] Initial commit | By - Dima Brook | On - 2022-12-07T15:22:34Z

# hedera-contracts

## main


 1. [477..224] add OpenZeppelin contracts | By - Dima Brook | On - 2022-12-07T15:11:17Z
 2. [304..bbb] rename contract file | By - Dima Brook | On - 2022-12-07T15:03:26Z
 3. [6bf..b1c] add submodule | By - Dima Brook | On - 2022-12-07T15:01:20Z
 4. [fb9..15d] first commit | By - Dima Brook | On - 2022-12-07T14:44:10Z

# giveAway

## master


 1. [d10..bd4] . | By - rony derra | On - 2022-12-01T14:13:08Z
 2. [338..481] controller | By - rony derra | On - 2022-12-01T14:12:34Z
 3. [f47..851] 0 | By - rony derra | On - 2022-12-01T14:11:56Z
 4. [40e..2db] getLotteryUsers | By - rony derra | On - 2022-12-01T13:41:13Z
 5. [8e4..f58] getLotteryUsers | By - rony derra | On - 2022-12-01T13:31:40Z
 6. [22e..7d5] getLotteryUsers | By - rony derra | On - 2022-12-01T13:15:06Z
 7. [0cc..8bf] getLotteryExcel | By - rony derra | On - 2022-12-01T12:59:56Z
 8. [081..7fe] LotteryExcel | By - rony derra | On - 2022-12-01T12:49:06Z
 9. [ff7..535] g | By - rony derra | On - 2022-12-01T11:14:19Z
 10. [7a2..57f] 0 | By - rony derra | On - 2022-12-01T11:05:49Z
 11. [b28..a64] do | By - rony derra | On - 2022-12-01T11:04:41Z
 12. [151..36d] d | By - rony derra | On - 2022-11-30T16:47:42Z
 13. [fed..34d] createdAt | By - rony derra | On - 2022-11-30T12:06:34Z
 14. [1be..574] 0 | By - rony derra | On - 2022-11-30T11:39:11Z
 15. [f42..3d4] tweetDescription | By - rony derra | On - 2022-11-30T11:21:36Z
 16. [bee..af6] s | By - rony derra | On - 2022-11-30T11:09:21Z
 17. [7fa..ff2] s | By - rony derra | On - 2022-11-30T10:56:02Z
 18. [2fc..c81] 0 | By - rony derra | On - 2022-11-30T10:55:23Z
 19. [409..65a] d | By - rony derra | On - 2022-11-30T10:17:22Z
 20. [346..a69] UserSchema | By - rony derra | On - 2022-11-30T09:52:49Z
 21. [dd0..7e8] . | By - rony derra | On - 2022-11-30T09:24:14Z
 22. [0a3..4cf] scrapeFollowers | By - rony derra | On - 2022-11-30T08:58:46Z
 23. [0cf..a7e] addFollowerstoDb | By - rony derra | On - 2022-11-30T08:56:00Z
 24. [d10..01e] x | By - rony derra | On - 2022-11-29T17:17:50Z
 25. [9ff..8c0] . | By - rony derra | On - 2022-11-29T17:03:40Z
 26. [935..6b6] build | By - rony derra | On - 2022-11-29T16:41:55Z
 27. [131..e49] getLastPost | By - rony derra | On - 2022-11-29T15:36:15Z
 28. [aa5..4ef] . | By - rony derra | On - 2022-11-29T15:22:33Z
 29. [2b1..e76] addFollowerstoDb | By - rony derra | On - 2022-11-29T14:58:51Z
 30. [eed..b08] first commit | By - rony derra | On - 2022-11-29T11:32:34Z

# xpnft

## master


 1. [461..ec5] Add tokenId to the uri(uint256 _tokenID) | By - Dima Brook | On - 2022-11-30T14:54:11Z
 2. [7dd..e34] add OpenSea contracts | By - Dima Brook | On - 2022-11-15T10:33:12Z
 3. [cf1..85c] fix issues, set examples | By - Dima Brook | On - 2022-11-14T09:41:07Z
 4. [742..6db] update README | By - rupansh | On - 2022-11-13T14:35:22Z
 5. [b56..47c] opensea royalties changes | By - rupansh | On - 2022-11-13T14:32:51Z
 6. [abe..a83] contracts: hedera: proxy: more fixes | By - imsk17 | On - 2022-11-03T09:42:06Z
 7. [6eb..224] hedera: proxy: update safeTransferFrom to allow any token transfer | By - imsk17 | On - 2022-11-02T07:42:14Z
 8. [826..174] hedera: proxy: implement safeTransferFrom | By - imsk17 | On - 2022-10-31T11:38:02Z
 9. [c21..d97] hedera: switch to 0.2 release | By - rupansh | On - 2022-10-27T15:47:27Z
 10. [995..6c0] XpNftHts: use EnumerableSet for claimables | By - rupansh | On - 2022-10-27T14:22:47Z
 11. [fe5..436] update hedera submodule | By - rupansh | On - 2022-10-27T14:22:06Z
 12. [acf..dd2] Update XPNFT-HTS | By - imsk17 | On - 2022-10-27T11:35:13Z
 13. [a6c..752] XPNftHts: improve token associated check | By - rupansh | On - 2022-10-27T11:28:29Z
 14. [1b9..550] XPNftHts: add claim nfts for unassociated accounts | By - rupansh | On - 2022-10-27T11:07:00Z
 15. [5ab..c9d] Update XPNFT-HTS | By - imsk17 | On - 2022-10-27T09:12:39Z
 16. [649..9f7] XPNFT: HTS: Make Initialize Payable | By - imsk17 | On - 2022-09-05T12:34:22Z
 17. [837..e00] XPNftHts: move constructor to initializer | By - rupansh | On - 2022-08-21T11:16:27Z
 18. [1bc..f36] add XPNft for HTS Tokens | By - rupansh | On - 2022-08-17T16:13:43Z
 19. [d1c..458] add hedera prebuilt as submodule | By - rupansh | On - 2022-08-17T16:13:21Z
 20. [698..0a5] royalties: ignore rawInfo if empty | By - rupansh | On - 2022-05-08T15:26:39Z
 21. [5a3..6dc] package: update name, version | By - rupansh | On - 2022-05-07T21:50:30Z
 22. [9ef..4e9] initial royalties impl | By - rupansh | On - 2022-05-07T21:46:03Z
 23. [e9e..365] initial import | By - rupansh | On - 2022-05-07T21:11:21Z

# batch_vechain

## main


 1. [7c8..24e] add: minting | By - Dima Brook | On - 2022-11-27T17:21:44Z
 2. [863..ec6] update | By - Dima Brook | On - 2022-11-24T18:52:07Z
 3. [03e..061] update | By - Dima Brook | On - 2022-11-24T14:19:34Z
 4. [c49..692] inital commit | By - Dima Brook | On - 2022-11-24T12:34:25Z

# bridgeDiscount-server

## master


 1. [c2c..1e8] env example | By - rony derra | On - 2022-11-24T16:41:01Z
 2. [4bb..a20] telegramchatid | By - rony derra | On - 2022-11-24T16:38:00Z
 3. [aed..ee3] discount | By - rony derra | On - 2022-11-24T15:58:26Z
 4. [5c6..1fc] . | By - rony derra | On - 2022-10-24T15:27:00Z
 5. [dd3..6f7] same | By - rony derra | On - 2022-10-24T11:59:20Z
 6. [c2d..781] get xp currency | By - rony derra | On - 2022-10-24T11:58:30Z
 7. [811..6bb] . | By - rony derra | On - 2022-10-24T11:41:50Z
 8. [390..a8e] new deposit | By - rony derra | On - 2022-10-12T10:17:07Z
 9. [e9f..924] discountLeftTrx | By - rony derra | On - 2022-10-12T08:44:06Z
 10. [7c7..d03] discountLeftTrx | By - rony derra | On - 2022-10-12T08:44:03Z
 11. [b98..569] discountLeftTrx | By - rony derra | On - 2022-10-12T08:44:00Z
 12. [6e0..860] coingecko bug | By - rony derra | On - 2022-10-12T08:05:10Z
 13. [e2b..d32] deposit bug | By - rony derra | On - 2022-10-12T08:04:58Z
 14. [49b..521] if chain query exist | By - rony derra | On - 2022-10-12T07:52:12Z
 15. [bf4..23c] relization route - added chain query | By - rony derra | On - 2022-10-12T07:51:28Z
 16. [624..a87] coingeko ids | By - rony derra | On - 2022-10-12T07:50:57Z
 17. [6cc..62b] cors | By - rony derra | On - 2022-10-11T12:10:59Z
 18. [145..cde] Update README.md | By - rony derra | On - 2022-10-11T07:56:23Z
 19. [e6e..4b4] Create README.md | By - rony derra | On - 2022-10-11T07:55:01Z
 20. [eb1..cd1] readme image | By - rony derra | On - 2022-10-11T07:38:37Z
 21. [f5d..c95] if user exist | By - ronyderra | On - 2022-08-23T09:41:41Z
 22. [def..f31] . | By - ronyderra | On - 2022-08-23T09:36:25Z
 23. [f85..869] . | By - ronyderra | On - 2022-08-23T09:35:51Z
 24. [c43..3eb] to mainnet contract | By - ronyderra | On - 2022-08-23T09:28:52Z
 25. [62d..f94] . | By - ronyderra | On - 2022-08-23T07:49:38Z
 26. [780..b40] . | By - ronyderra | On - 2022-08-22T19:43:39Z
 27. [542..deb] . | By - ronyderra | On - 2022-08-22T19:41:28Z
 28. [c2f..357] . | By - ronyderra | On - 2022-08-22T19:30:39Z
 29. [7aa..94c] . | By - ronyderra | On - 2022-08-22T19:25:50Z
 30. [e6c..16a] . | By - ronyderra | On - 2022-08-22T19:23:37Z
 31. [693..71b] . | By - ronyderra | On - 2022-08-22T19:23:17Z
 32. [99e..de3] . | By - ronyderra | On - 2022-08-22T18:53:02Z
 33. [eb2..576] . | By - ronyderra | On - 2022-08-22T18:52:33Z
 34. [41c..1b9] ץ | By - ronyderra | On - 2022-08-22T18:44:50Z
 35. [60f..440] realizedInXp | By - ronyderra | On - 2022-08-22T18:14:07Z
 36. [f39..bfc] . | By - ronyderra | On - 2022-08-22T16:06:43Z
 37. [98e..1fe] contract listener | By - ronyderra | On - 2022-08-22T15:21:56Z
 38. [afa..4a0] rpc to mainnet | By - ronyXnes | On - 2022-08-22T06:42:04Z
 39. [e31..841] Update package.json | By - rony derra | On - 2022-08-17T09:19:16Z
 40. [f10..d2f] pj | By - ronyXnes | On - 2022-08-17T09:08:49Z
 41. [f61..1ed] main chainge | By - ronyXnes | On - 2022-08-17T09:05:19Z
 42. [eea..12d] router | By - ronyXnes | On - 2022-08-17T08:38:05Z
 43. [518..c3f] currency to schema | By - ronyXnes | On - 2022-08-17T07:59:09Z
 44. [75e..842] coingecko file | By - ronyXnes | On - 2022-08-17T07:58:52Z
 45. [2de..f7c] try catch | By - ronyXnes | On - 2022-08-17T07:58:33Z
 46. [47e..506] contract script | By - ronyXnes | On - 2022-08-16T07:47:02Z
 47. [4dd..0b5] init | By - ronyXnes | On - 2022-08-15T15:35:53Z

# solana-bridge

## main


 1. [b74..641] XpNft: Deployment Script | By - imsk17 | On - 2022-11-21T19:46:52Z
 2. [2e1..9aa] Contract: Introduce a Setup Script | By - imsk17 | On - 2022-11-21T18:40:24Z
 3. [a7d..b05] update metaplex deps | By - rocalex | On - 2022-11-21T13:07:20Z
 4. [9ec..15e] Encoding: Setup Constructors | By - imsk17 | On - 2022-11-21T12:53:45Z
 5. [a50..0db] pubkey instead of [u8; 32] | By - rocalex | On - 2022-09-21T12:15:49Z
 6. [8e8..14b] custom serialization for creators | By - rocalex | On - 2022-09-21T11:50:37Z
 7. [2f3..110] unit tests with borsh error | By - rocalex | On - 2022-09-21T11:27:28Z
 8. [efb..b35] remove looping over data.creators | By - rocalex | On - 2022-09-21T10:19:17Z
 9. [a59..024] calculate bump off chain | By - rocalex | On - 2022-09-21T08:50:37Z
 10. [583..8fc] calculate bump off chain | By - rocalex | On - 2022-09-20T08:40:45Z
 11. [880..d6f] check amount | By - rocalex | On - 2022-09-20T08:12:11Z
 12. [89f..d6b] Update lib.rs | By - Xueming Zheng | On - 2022-09-19T14:24:02Z
 13. [c1e..9d8] change program id | By - rocalex | On - 2022-09-16T12:57:00Z
 14. [058..0a3] constrains | By - rocalex | On - 2022-09-15T18:27:24Z
 15. [b2b..ab1] require unpause to constraint | By - rocalex | On - 2022-09-15T18:14:15Z
 16. [517..8dd] fix TODOs | By - rocalex | On - 2022-09-15T17:51:00Z
 17. [5e4..6f5] remove create action | By - rocalex | On - 2022-09-15T17:23:36Z
 18. [1b5..2cd] remove metaplex js | By - rocalex | On - 2022-09-14T18:12:17Z
 19. [69e..008] constraints for instruction_acc | By - rocalex | On - 2022-09-14T18:00:35Z
 20. [d4d..af6] rename royalties | By - rocalex | On - 2022-08-08T02:41:48Z
 21. [2cc..59a] add royalties | By - rocalex | On - 2022-08-07T21:29:14Z
 22. [aee..92f] fix inline doc | By - rocalex | On - 2022-07-04T13:47:20Z
 23. [3ab..976] emit lamports | By - rocalex | On - 2022-06-20T18:55:50Z
 24. [a92..545] emit mintWith | By - rocalex | On - 2022-06-19T19:00:19Z
 25. [587..354] emit action id | By - rocalex | On - 2022-06-19T18:52:00Z
 26. [e18..8ac] add mint to unfreeze data | By - rocalex | On - 2022-06-17T17:04:36Z
 27. [43d..adb] add transfer_service_fee_lamports function | By - rocalex | On - 2022-06-14T04:08:17Z
 28. [f30..846] add withdraw fees | By - rocalex | On - 2022-06-14T03:57:55Z
 29. [188..c0d] transfer service fee to bridge PDA when freeze/withdraw | By - rocalex | On - 2022-06-14T03:37:56Z
 30. [a39..e19] remove treasury | By - rocalex | On - 2022-06-14T03:10:57Z
 31. [270..782] update mpl-token-metadata version | By - rocalex | On - 2022-06-14T03:05:13Z
 32. [91c..617] use PDA as bridge account | By - rocalex | On - 2022-06-13T20:56:10Z
 33. [f2f..e83] remove unused imports | By - rocalex | On - 2022-06-13T19:32:44Z
 34. [4d5..9bd] emit mint when freeze | By - rocalex | On - 2022-06-13T19:30:50Z
 35. [e19..43d] check if receiver is correct | By - rocalex | On - 2022-06-13T19:24:49Z
 36. [f35..5f4] change bridge PDA to normal account | By - rocalex | On - 2022-06-13T03:39:07Z
 37. [b8b..edd] fix burn | By - rocalex | On - 2022-06-12T19:47:19Z
 38. [388..2ec] fix withdraw | By - rocalex | On - 2022-06-12T19:15:10Z
 39. [2d4..ab6] change authority | By - rocalex | On - 2022-06-12T15:12:18Z
 40. [ce1..75c] remove anchor.web. | By - rocalex | On - 2022-06-12T14:47:17Z
 41. [610..592] bridge account as PDA | By - rocalex | On - 2022-06-12T10:12:35Z
 42. [848..16e] config the client | By - rocalex | On - 2022-06-12T09:05:54Z
 43. [a16..c5f] refactor duplicated methods | By - rocalex | On - 2022-06-10T12:13:01Z
 44. [f00..649] Update README.md | By - Dima Brook | On - 2022-06-09T13:37:11Z
 45. [116..906] Update README.md | By - Dima Brook | On - 2022-06-09T13:30:41Z
 46. [c02..7ff] Update README.md | By - Dima Brook | On - 2022-06-09T13:17:05Z
 47. [f9c..49c] Update README.md | By - Dima Brook | On - 2022-06-09T13:05:32Z
 48. [823..6f4] Update README.md | By - Dima Brook | On - 2022-06-09T09:17:48Z
 49. [cee..78e] Update README.md | By - Dima Brook | On - 2022-06-09T09:05:26Z
 50. [7f6..717] Update README.md | By - Dima Brook | On - 2022-06-09T08:58:22Z

# algorand-staking

## main


 1. [da3..92b] add some scripts | By - rocalex | On - 2022-11-16T16:31:17Z
 2. [247..806] add token params | By - rocalex | On - 2022-11-16T12:54:10Z
 3. [b15..2a9] first commit | By - Dima Brook | On - 2022-11-13T09:28:12Z

# algorand-staking-client

## master


 1. [197..1bc] Fix Package.json | By - imsk17 | On - 2022-11-13T19:30:36Z
 2. [8e2..73f] Add Build CI | By - imsk17 | On - 2022-11-13T19:27:48Z
 3. [84a..1da] Initial Import | By - imsk17 | On - 2022-11-13T19:27:02Z

## master-dist


 1. [0ff..373] Build: (1977e59) Fix Package.json | By - imsk17 | On - 2022-11-13T19:31:00Z
 2. [cba..200] Build: (8e2fe3d) Add Build CI | By - imsk17 | On - 2022-11-13T19:28:16Z

# frost-hacks

## secret


 1. [154..dc5] ton: common: fix minor derp | By - rupansh | On - 2022-11-07T14:16:47Z
 2. [deb..1fa] ton: add whitelist script | By - rupansh | On - 2022-11-07T14:10:05Z
 3. [c9f..db7] aptos: fix minor derp | By - rupansh | On - 2022-10-31T12:53:32Z
 4. [b94..8d9] aptos: add whitelist script | By - rupansh | On - 2022-10-30T20:20:21Z
 5. [2af..51d] add ton script for confirming public key | By - rupansh | On - 2022-10-25T11:30:16Z
 6. [70e..b21] tron: actually send the txn | By - imsk17 | On - 2022-10-25T11:30:16Z
 7. [1ce..362] tron: print whole txn | By - imsk17 | On - 2022-10-25T11:30:16Z
 8. [a90..9df] fix address conversion | By - imsk17 | On - 2022-10-25T11:30:16Z
 9. [daf..9c2] feat: tron: add whitelist script | By - imsk17 | On - 2022-10-25T11:30:16Z
 10. [de1..283] secret: use tuple for wrapper struct | By - rupansh | On - 2022-08-21T13:09:39Z
 11. [72b..a3f] secret: fix minor derps | By - rupansh | On - 2022-08-21T12:55:48Z
 12. [3c2..5f7] add evm withdraw script | By - rupansh | On - 2022-07-21T13:06:57Z
 13. [a14..33b] elrond: fix txgen | By - rupansh | On - 2022-07-10T19:53:51Z
 14. [2b9..608] secret changes | By - rupansh | On - 2022-06-07T14:40:09Z
 15. [ce8..473] kek | By - rupansh | On - 2022-06-07T11:34:26Z

# bridgeSearchService

## master


 1. [4ba..c15] d | By - rony derra | On - 2022-11-03T11:52:44Z
 2. [ff3..748] string | By - rony derra | On - 2022-11-03T11:40:37Z
 3. [422..7f2] req res | By - rony derra | On - 2022-10-12T16:14:53Z
 4. [469..835] if nft is empty | By - rony derra | On - 2022-10-12T15:08:19Z
 5. [8cc..93b] ? param | By - rony derra | On - 2022-10-12T14:45:55Z
 6. [f87..a4c] filter | By - ronyderra | On - 2022-09-29T14:14:59Z
 7. [468..aba] Create README.md | By - rony derra | On - 2022-09-29T13:38:03Z
 8. [98b..9a9] update client data | By - ronyderra | On - 2022-09-28T09:18:21Z
 9. [bdd..406] . | By - ronyderra | On - 2022-09-28T08:01:16Z
 10. [e43..44a] . | By - ronyderra | On - 2022-09-28T08:00:02Z
 11. [448..0e5] log | By - ronyderra | On - 2022-09-28T07:46:49Z
 12. [3ee..cf2] evm handler | By - ronyderra | On - 2022-09-25T13:00:46Z
 13. [cb8..eaf] . | By - ronyderra | On - 2022-09-25T10:45:29Z
 14. [0e0..5ba] return address | By - ronyderra | On - 2022-09-25T08:09:29Z
 15. [201..4fe] handler | By - ronyderra | On - 2022-09-25T06:31:41Z
 16. [735..ef6] . | By - ronyderra | On - 2022-09-22T14:47:28Z
 17. [d87..5e8] . | By - ronyderra | On - 2022-09-22T14:47:23Z
 18. [c7e..966] . | By - ronyderra | On - 2022-09-22T14:47:14Z
 19. [c68..386] . | By - ronyderra | On - 2022-09-22T13:22:33Z
 20. [07d..8de] d | By - ronyderra | On - 2022-09-22T12:12:45Z
 21. [b90..524] d | By - ronyderra | On - 2022-09-22T12:12:22Z
 22. [c7f..eb2] formatting | By - ronyderra | On - 2022-09-22T12:07:30Z
 23. [bde..6b0] . | By - ronyderra | On - 2022-09-22T12:06:01Z
 24. [5a3..9e3]  | By - ronyderra | On - 2022-09-22T11:59:22Z
 25. [819..4c8] . | By - ronyderra | On - 2022-09-22T11:55:51Z
 26. [965..f02] body parser | By - ronyderra | On - 2022-09-22T11:47:51Z
 27. [c4e..3e8] cors | By - ronyderra | On - 2022-09-22T11:36:44Z
 28. [8b9..1d5] try catch | By - ronyderra | On - 2022-09-22T11:29:38Z
 29. [3f0..8ee] tezos | By - ronyderra | On - 2022-09-22T10:56:14Z
 30. [6d2..cb6] start | By - ronyderra | On - 2022-09-22T10:00:39Z
 31. [920..df0] first commit | By - ronyderra | On - 2022-09-22T09:26:02Z

# elrond-api

## master


 1. [365..357] newbot | By - rony derra | On - 2022-10-23T09:04:42Z
 2. [6de..2b5] . | By - ronyderra | On - 2022-08-29T09:15:51Z
 3. [551..d58] . | By - ronyderra | On - 2022-08-29T08:50:12Z
 4. [3a1..925] . | By - ronyderra | On - 2022-08-29T06:21:07Z
 5. [ae9..b41] . | By - ronyderra | On - 2022-08-28T13:47:43Z
 6. [2a3..50e] s | By - ronyderra | On - 2022-08-28T12:58:45Z
 7. [226..8da] . | By - ronyXnes | On - 2022-07-20T12:02:49Z
 8. [48a..783] jul 20 | By - ronyXnes | On - 2022-07-20T12:00:29Z
 9. [366..799] do | By - ronyXnes | On - 2022-07-18T18:22:41Z
 10. [c15..291] elrond | By - ronyXnes | On - 2022-07-18T18:16:30Z
 11. [15a..e1a] telegram | By - ronyXnes | On - 2022-07-18T16:37:54Z
 12. [5ef..b32] elrond api | By - ronyXnes | On - 2022-07-18T13:35:39Z
 13. [237..059] elrond api | By - ronyXnes | On - 2022-07-13T15:50:40Z
 14. [0c1..0b6] . | By - ronyXnes | On - 2022-07-13T14:33:50Z
 15. [eed..8ee] elrond api | By - ronyXnes | On - 2022-07-13T07:05:00Z
 16. [6e9..a46] elrond good transactions | By - ronyXnes | On - 2022-07-06T06:13:17Z
 17. [ac6..35f] formatting | By - ronyXnes | On - 2022-07-04T08:09:17Z
 18. [4dd..0a5] formatting | By - ronyXnes | On - 2022-07-04T08:06:50Z
 19. [aeb..0f9] excel | By - ronyXnes | On - 2022-07-04T08:03:24Z
 20. [746..5e7] first commit | By - ronyXnes | On - 2022-07-04T07:27:28Z

# deploying-secret-contracts

## master


 1. [1bd..51e] fix deployment | By - imsk17 | On - 2022-10-06T12:20:30Z
 2. [dfa..2f1] add getting code hash | By - Dima Brook | On - 2022-08-15T07:05:16Z
 3. [fea..c58] add Readme.md | By - Dima Brook | On - 2022-08-14T07:02:29Z
 4. [516..108] remove .DS_Store | By - Dima Brook | On - 2022-08-14T06:44:59Z
 5. [89c..af4] update after mainnet deployment | By - Dima Brook | On - 2022-08-14T06:40:40Z
 6. [19d..528] Initial Import | By - imsk17 | On - 2022-08-11T11:31:30Z

# algorand-nft-bridge

## main


 1. [0f7..03a] deploy script | By - rocalex | On - 2022-10-04T11:09:54Z
 2. [2eb..929] unit tests fo consuming actions | By - rocalex | On - 2022-10-04T11:05:46Z
 3. [bd5..562] consume actions | By - rocalex | On - 2022-10-04T10:57:35Z
 4. [74f..843] action id verification | By - rocalex | On - 2022-10-04T10:52:00Z
 5. [b3b..14b] initial action id verification | By - rocalex | On - 2022-10-04T03:51:28Z
 6. [503..f26] store consumed actions template into bridge app | By - rocalex | On - 2022-10-03T17:54:56Z
 7. [b37..096] logic sig teal | By - rocalex | On - 2022-10-03T10:17:32Z
 8. [553..161] unit tests for ed25519 verification | By - rocalex | On - 2022-09-29T13:28:58Z
 9. [1f8..c01] ed25519 verification | By - rocalex | On - 2022-09-29T03:42:47Z
 10. [aca..541] pause/unpause, withdraw fees | By - rocalex | On - 2022-09-29T02:51:53Z
 11. [04d..9b5] log others | By - rocalex | On - 2022-09-28T15:32:05Z
 12. [343..ee4] freeze and deploy | By - rocalex | On - 2022-09-28T14:36:28Z
 13. [32f..6c5] optin nft to app | By - rocalex | On - 2022-09-28T14:02:22Z
 14. [34f..df9] check if bridge paused | By - rocalex | On - 2022-09-28T12:58:07Z
 15. [67c..1ab] fix claim | By - rocalex | On - 2022-09-28T12:54:08Z
 16. [08c..73f] initial | By - rocalex | On - 2022-09-28T02:45:56Z

# bridge-error-loggs

## main


 1. [60c..f8a] no c | By - YuraDXPNetwork | On - 2022-10-03T09:03:44Z
 2. [24e..c9b] cors | By - YuraDXPNetwork | On - 2022-10-03T09:02:11Z
 3. [4c1..668] time route finished | By - YuraDXPNetwork | On - 2022-10-03T08:37:39Z
 4. [53d..657] time route finished | By - YuraDXPNetwork | On - 2022-10-03T08:24:02Z
 5. [8a0..5e9] get by time | By - YuraDXPNetwork | On - 2022-10-02T14:30:35Z
 6. [f9d..73a] get by time | By - YuraDXPNetwork | On - 2022-10-02T14:29:37Z
 7. [a78..f1b] get by time | By - YuraDXPNetwork | On - 2022-10-02T14:12:47Z
 8. [533..05b] get by time | By - YuraDXPNetwork | On - 2022-10-02T14:05:39Z
 9. [bb2..911] get by time | By - YuraDXPNetwork | On - 2022-10-02T13:50:39Z
 10. [5e3..73b] date type to date | By - YuraDXPNetwork | On - 2022-10-02T12:54:09Z
 11. [abf..cfa] type error | By - YuraDXPNetwork | On - 2022-10-02T12:26:15Z
 12. [0c4..7cb] type error | By - YuraDXPNetwork | On - 2022-10-02T12:20:49Z
 13. [c05..3c6] type error | By - YuraDXPNetwork | On - 2022-10-02T12:16:31Z
 14. [2e1..8de] type error | By - YuraDXPNetwork | On - 2022-10-02T12:10:07Z
 15. [19d..628] type error | By - YuraDXPNetwork | On - 2022-10-02T11:58:25Z
 16. [29c..834] type error | By - YuraDXPNetwork | On - 2022-10-02T11:48:45Z
 17. [06c..b2b] type error | By - YuraDXPNetwork | On - 2022-10-02T11:45:23Z
 18. [d7e..9f9] type error | By - YuraDXPNetwork | On - 2022-10-02T11:40:59Z
 19. [89f..9e9] type error | By - YuraDXPNetwork | On - 2022-10-02T11:38:46Z
 20. [cde..85f] type error | By - YuraDXPNetwork | On - 2022-10-02T11:37:42Z
 21. [1a1..280] type error | By - YuraDXPNetwork | On - 2022-10-02T11:36:48Z
 22. [ab6..168] no next | By - YuraDXPNetwork | On - 2022-10-02T11:21:45Z
 23. [c6c..32d] next added | By - YuraDXPNetwork | On - 2022-10-02T11:15:39Z
 24. [28b..483] error changed to error modal | By - YuraDXPNetwork | On - 2022-10-02T11:03:49Z
 25. [a1b..891] import error as errormodal | By - YuraDXPNetwork | On - 2022-10-02T11:00:37Z
 26. [bd2..993] log | By - YuraDXPNetwork | On - 2022-10-02T10:45:19Z
 27. [883..4e9] log address | By - YuraDXPNetwork | On - 2022-10-02T10:38:09Z
 28. [636..69b] readme added | By - YuraDXPNetwork | On - 2022-10-02T10:33:03Z
 29. [485..728] readme added | By - YuraDXPNetwork | On - 2022-10-02T10:31:12Z
 30. [dfc..c67] Error model nft fuild added | By - YuraDXPNetwork | On - 2022-10-02T10:08:47Z
 31. [eb8..8b9] address req fix | By - YuraDXPNetwork | On - 2022-10-02T10:05:21Z
 32. [c09..cfe] router fix | By - YuraDXPNetwork | On - 2022-10-02T10:01:21Z
 33. [f89..93d] type with log | By - YuraDXPNetwork | On - 2022-10-02T09:48:34Z
 34. [546..825] values chaged | By - YuraDXPNetwork | On - 2022-10-02T08:06:45Z
 35. [1d9..b24] Controler query by type fixed | By - YuraDXPNetwork | On - 2022-10-02T08:01:46Z
 36. [62d..791] find by wallet address chaged query | By - YuraDXPNetwork | On - 2022-10-02T07:51:04Z
 37. [d74..7ed] change tome log | By - YuraDXPNetwork | On - 2022-09-29T13:46:26Z
 38. [b81..1db] changed cors | By - YuraDXPNetwork | On - 2022-09-29T11:52:46Z
 39. [671..807] changed cors | By - YuraDXPNetwork | On - 2022-09-29T11:43:34Z
 40. [251..bbb] cors config | By - YuraDXPNetwork | On - 2022-09-29T10:19:37Z
 41. [718..a11] service error log | By - YuraDXPNetwork | On - 2022-09-29T09:53:07Z
 42. [eee..88f] add start script | By - YuraDXPNetwork | On - 2022-09-29T09:48:43Z
 43. [79a..067] add start script | By - YuraDXPNetwork | On - 2022-09-29T09:14:31Z
 44. [387..b53] corse added | By - YuraDXPNetwork | On - 2022-09-29T08:50:40Z
 45. [ea6..465] commit message | By - YuraDXPNetwork | On - 2022-09-29T08:39:29Z

# erc20-validator

## algo-nonce


 1. [a07..fab] algorand: fix position of nonce in serialization | By - rupansh | On - 2022-08-23T17:53:09Z
 2. [adf..273] algorand: persist actionId | By - rupansh | On - 2022-08-23T17:51:17Z
 3. [a83..c72] algorand: update for nonce changes | By - rupansh | On - 2022-08-23T17:15:59Z
 4. [401..cd6] algo: lookupTransaction: do multiple retries | By - rupansh | On - 2022-08-16T15:10:44Z
 5. [e53..261] deps: algo: use different token for purestake | By - rupansh | On - 2022-08-16T14:42:14Z
 6. [4eb..5e4] handlers: algo: wait for txn confirmation before lookup in indexer | By - rupansh | On - 2022-08-12T14:07:13Z
 7. [549..aa8] update FROST | By - rupansh | On - 2022-08-08T11:56:46Z
 8. [c48..88e] .env.example: add FROST_ED25519_UUID | By - rupansh | On - 2022-08-01T17:50:28Z
 9. [c18..89c] tree-wide: fixes for algorand transfers | By - rupansh | On - 2022-08-01T17:47:50Z
 10. [675..f39] .env.example: minor typo fixes | By - rupansh | On - 2022-08-01T17:47:40Z
 11. [85e..ea3] algo: minor fixes | By - rupansh | On - 2022-07-30T16:49:02Z
 12. [335..37d] bridge: handle decimals | By - rupansh | On - 2022-07-30T16:06:24Z
 13. [5af..d0d] enable algorand | By - rupansh | On - 2022-07-30T15:52:42Z
 14. [039..bd1] handlers: use locks for sending txn | By - rupansh | On - 2022-07-28T14:30:55Z
 15. [957..418] web3: use NonceManager signer | By - rupansh | On - 2022-07-28T14:19:19Z
 16. [b6e..8eb] algo: implement unfreeze event handling | By - rupansh | On - 2022-07-28T14:01:47Z
 17. [f3a..6b5] algo: add decoder for transfer event | By - rupansh | On - 2022-07-28T13:05:40Z
 18. [12f..228] partial algorand bringup | By - rupansh | On - 2022-07-26T15:38:29Z
 19. [7ee..56f] re-organize handlers | By - rupansh | On - 2022-07-26T13:48:10Z
 20. [7da..ff5] add separate chains for testnet | By - rupansh | On - 2022-07-20T14:46:06Z
 21. [012..be2] deps: fix minor derp | By - rupansh | On - 2022-07-20T14:23:55Z
 22. [ae9..ea9] update .env.example | By - rupansh | On - 2022-07-18T18:40:19Z
 23. [5ec..19f] events: switch to builder pattern and handle edge case | By - rupansh | On - 2022-07-18T18:35:36Z
 24. [e4b..843] improve frost handling | By - rupansh | On - 2022-07-18T17:52:47Z
 25. [6f0..c3c] use frost lib from git | By - rupansh | On - 2022-07-18T17:23:07Z
 26. [96d..7af] initial import | By - rupansh | On - 2022-07-18T17:18:58Z

## master


 1. [6e8..b38] Add actionId Offset | By - rupansh | On - 2022-09-06T13:42:25Z
 2. [800..db5] algorand: action_id updates | By - rupansh | On - 2022-08-27T18:25:10Z
 3. [401..cd6] algo: lookupTransaction: do multiple retries | By - rupansh | On - 2022-08-16T15:10:44Z
 4. [e53..261] deps: algo: use different token for purestake | By - rupansh | On - 2022-08-16T14:42:14Z
 5. [4eb..5e4] handlers: algo: wait for txn confirmation before lookup in indexer | By - rupansh | On - 2022-08-12T14:07:13Z
 6. [549..aa8] update FROST | By - rupansh | On - 2022-08-08T11:56:46Z
 7. [c48..88e] .env.example: add FROST_ED25519_UUID | By - rupansh | On - 2022-08-01T17:50:28Z
 8. [c18..89c] tree-wide: fixes for algorand transfers | By - rupansh | On - 2022-08-01T17:47:50Z
 9. [675..f39] .env.example: minor typo fixes | By - rupansh | On - 2022-08-01T17:47:40Z
 10. [85e..ea3] algo: minor fixes | By - rupansh | On - 2022-07-30T16:49:02Z
 11. [335..37d] bridge: handle decimals | By - rupansh | On - 2022-07-30T16:06:24Z
 12. [5af..d0d] enable algorand | By - rupansh | On - 2022-07-30T15:52:42Z
 13. [039..bd1] handlers: use locks for sending txn | By - rupansh | On - 2022-07-28T14:30:55Z
 14. [957..418] web3: use NonceManager signer | By - rupansh | On - 2022-07-28T14:19:19Z
 15. [b6e..8eb] algo: implement unfreeze event handling | By - rupansh | On - 2022-07-28T14:01:47Z
 16. [f3a..6b5] algo: add decoder for transfer event | By - rupansh | On - 2022-07-28T13:05:40Z
 17. [12f..228] partial algorand bringup | By - rupansh | On - 2022-07-26T15:38:29Z
 18. [7ee..56f] re-organize handlers | By - rupansh | On - 2022-07-26T13:48:10Z
 19. [7da..ff5] add separate chains for testnet | By - rupansh | On - 2022-07-20T14:46:06Z
 20. [012..be2] deps: fix minor derp | By - rupansh | On - 2022-07-20T14:23:55Z
 21. [ae9..ea9] update .env.example | By - rupansh | On - 2022-07-18T18:40:19Z
 22. [5ec..19f] events: switch to builder pattern and handle edge case | By - rupansh | On - 2022-07-18T18:35:36Z
 23. [e4b..843] improve frost handling | By - rupansh | On - 2022-07-18T17:52:47Z
 24. [6f0..c3c] use frost lib from git | By - rupansh | On - 2022-07-18T17:23:07Z
 25. [96d..7af] initial import | By - rupansh | On - 2022-07-18T17:18:58Z

# widget

## master


 1. [768..db6] update trx | By - ronyderra | On - 2022-08-31T14:34:58Z
 2. [5dc..768] same | By - ronyXnes | On - 2022-08-09T12:28:32Z
 3. [20e..ee0] body to query | By - ronyXnes | On - 2022-08-09T11:50:41Z
 4. [1c9..552] fixing bug | By - ronyXnes | On - 2022-08-08T14:47:33Z
 5. [845..5a8] affiliation wallet | By - ronyXnes | On - 2022-08-08T11:25:16Z
 6. [2f0..372] to cahin var fix | By - ronyXnes | On - 2022-08-08T11:05:41Z
 7. [7b9..2e3] to chain var fix | By - ronyXnes | On - 2022-08-08T08:22:45Z
 8. [1de..fc8]   isActive: { type: String } | By - ronyXnes | On - 2022-08-08T07:11:44Z
 9. [793..3f9] update widget | By - ronyXnes | On - 2022-08-07T15:58:44Z
 10. [7cc..676] update widget | By - ronyXnes | On - 2022-08-07T15:34:04Z
 11. [134..2a7] widget name | By - ronyXnes | On - 2022-08-07T15:07:20Z
 12. [df2..ec8] update widget - name | By - ronyXnes | On - 2022-08-07T15:04:52Z
 13. [07f..978] formatting | By - ronyXnes | On - 2022-08-07T14:38:10Z
 14. [27a..5d7] get card data | By - ronyXnes | On - 2022-08-07T14:37:21Z
 15. [fcd..39c] update without cookies | By - ronyXnes | On - 2022-08-07T12:32:30Z
 16. [9b5..9ea] isActive to getUserWidgetData | By - ronyXnes | On - 2022-08-07T11:47:51Z
 17. [79b..f4b] widget id list insted of only first in dashbord data | By - ronyXnes | On - 2022-08-07T11:19:16Z
 18. [fed..0db] suspend rout | By - ronyXnes | On - 2022-08-07T10:45:11Z
 19. [084..fdc] isActive: {type: Boolean , default: true} | By - ronyXnes | On - 2022-08-07T10:02:53Z
 20. [c39..888] transaction structure | By - ronyXnes | On - 2022-08-07T09:55:12Z
 21. [86b..0ec] route dashbord | By - ronyXnes | On - 2022-08-07T08:44:57Z
 22. [72d..ecb] route dashboard | By - ronyXnes | On - 2022-08-07T08:41:37Z
 23. [a57..4f5] dashboard rout | By - ronyXnes | On - 2022-08-07T08:40:01Z
 24. [c65..671] formating | By - ronyXnes | On - 2022-08-04T19:27:51Z
 25. [407..fe9] add trx - date as type date and fees as type string | By - ronyXnes | On - 2022-08-02T16:31:16Z
 26. [bc2..523] add trx - more info | By - ronyXnes | On - 2022-08-02T16:11:00Z
 27. [d2c..b97] delete widget - response widget that remain with client | By - ronyXnes | On - 2022-08-02T15:42:07Z
 28. [a04..ed4] formatting | By - ronyXnes | On - 2022-08-02T15:18:24Z
 29. [ceb..206] validate widget is not deleted | By - ronyXnes | On - 2022-08-02T15:18:14Z
 30. [ab8..dcc] validate if widget is deleted | By - ronyXnes | On - 2022-08-02T15:07:58Z
 31. [27b..aaa] widgetname fix | By - ronyXnes | On - 2022-08-02T14:08:51Z
 32. [acb..dec] dsad | By - AlexeyAdoniev | On - 2022-08-02T13:43:46Z
 33. [222..91c] megre, add cors | By - AlexeyAdoniev | On - 2022-08-02T12:37:27Z
 34. [bb8..fe3] index cors comment | By - ronyXnes | On - 2022-08-02T12:10:59Z
 35. [70a..e1d] a | By - Alex Moshinsky | On - 2022-08-02T10:47:04Z
 36. [23a..d1b] add to widget is active field | By - Alex Moshinsky | On - 2022-08-02T10:16:37Z
 37. [6f2..feb] add txs details | By - Alex Moshinsky | On - 2022-08-01T10:16:24Z
 38. [a13..589] fix | By - Alex Moshinsky | On - 2022-08-01T07:34:13Z
 39. [783..02f] add widgetName to request | By - Alex Moshinsky | On - 2022-08-01T07:25:18Z
 40. [761..3b5] add core check | By - Alex Moshinsky | On - 2022-07-31T16:18:04Z
 41. [504..fd7] fix | By - Alex Moshinsky | On - 2022-07-31T16:17:40Z
 42. [86e..863] disable cors | By - Alex Moshinsky | On - 2022-07-31T12:57:37Z
 43. [1e2..54d] return credentials | By - Alex Moshinsky | On - 2022-07-31T12:46:36Z
 44. [bfc..09d] add all user widget data route and widget name | By - Alex Moshinsky | On - 2022-07-31T12:34:01Z
 45. [a5c..fe5] cors port wildcard | By - AlexeyAdoniev | On - 2022-07-31T09:49:22Z
 46. [d99..1e0] dsdsa | By - AlexeyAdoniev | On - 2022-07-31T09:18:22Z
 47. [eed..67e] cors | By - AlexeyAdoniev | On - 2022-07-31T09:11:59Z
 48. [859..c26] dsad | By - AlexeyAdoniev | On - 2022-07-31T08:58:41Z
 49. [832..2ec] remove cookie | By - AlexeyAdoniev | On - 2022-07-19T09:34:50Z
 50. [2ba..b25] add cookie | By - AlexeyAdoniev | On - 2022-07-18T11:23:40Z

# algorand-asa-bridge

## action-id-varifications


 1. [e5c..6d3] added tests for setup & few tests for on_recieve_foreign | By - zothix | On - 2022-08-29T08:20:29Z
 2. [df6..68c] added more tests for update contract | By - zothix | On - 2022-08-28T11:00:10Z
 3. [31d..977] added tests for update contract | By - zothix | On - 2022-08-28T10:49:54Z
 4. [fed..5b9] added update option in contract | By - zothix | On - 2022-08-28T08:12:12Z
 5. [fe8..5d2] removed console statements | By - zothix | On - 2022-08-25T07:57:26Z
 6. [bde..f17] added functionality to remaining functions | By - zothix | On - 2022-08-25T07:31:15Z
 7. [fad..b8a] added uvarient function | By - zothix | On - 2022-08-24T20:04:48Z
 8. [238..a29] Initial | By - zothix | On - 2022-08-24T16:54:34Z
 9. [09a..954] add opcode budget constant | By - rocalex | On - 2022-08-20T00:55:04Z
 10. [37d..3dd] use opup instead of idle transaction | By - rocalex | On - 2022-08-19T10:43:51Z
 11. [24b..f2f] remove 300_000 | By - rocalex | On - 2022-08-18T07:11:50Z
 12. [a97..10d] update withdraw_fees | By - rocalex | On - 2022-08-17T12:51:35Z
 13. [138..6ea] Merge branch 'main' of https://github.com/XP-NETWORK/algorand-asa-bridge | By - Dima Brook | On - 2022-08-15T12:49:24Z
 14. [4d8..87a] add utils inline docs | By - Dima Brook | On - 2022-08-15T12:44:16Z
 15. [775..b66] add commets | By - rocalex | On - 2022-08-15T09:39:38Z
 16. [402..b0d] add script for issuing wrapper tokens | By - rupansh | On - 2022-08-08T12:07:10Z
 17. [254..79f] add setup script | By - rupansh | On - 2022-08-01T17:21:18Z
 18. [6e1..27c] log token id | By - rocalex | On - 2022-08-01T16:03:19Z
 19. [a88..b6a] fix receive_foreign | By - rocalex | On - 2022-08-01T13:44:26Z
 20. [e9a..cc0] update on_receive_native | By - rocalex | On - 2022-07-31T10:11:10Z
 21. [475..640] add target address | By - rocalex | On - 2022-07-29T02:41:53Z
 22. [7bb..5c5] add target address | By - rocalex | On - 2022-07-29T02:13:36Z
 23. [987..bd9] support multiple tokens | By - rocalex | On - 2022-07-27T14:09:06Z
 24. [c88..7bf] check group transactions | By - rocalex | On - 2022-07-10T10:24:38Z
 25. [c08..7b3] update README.md after testing | By - Dima Brook | On - 2022-06-29T13:15:53Z
 26. [697..6de] update unit tests | By - rocalex | On - 2022-06-29T12:11:21Z
 27. [9bd..92c] Update index.spec.ts | By - Xueming Zheng | On - 2022-06-28T10:47:04Z
 28. [246..ecf] remove xpnet key | By - rocalex | On - 2022-06-22T09:04:41Z
 29. [5f9..712] remove send_native & receive_native | By - rocalex | On - 2022-06-21T12:57:39Z
 30. [488..e8f] fix update_gk | By - rocalex | On - 2022-06-21T04:15:56Z
 31. [8da..db2] add consuming actions | By - rocalex | On - 2022-06-21T04:15:09Z
 32. [31d..eea] pause/unpause, withdraw fees | By - rocalex | On - 2022-06-20T16:00:51Z
 33. [065..9fa] change wrapped token name as XPNET | By - rocalex | On - 2022-06-16T08:53:22Z
 34. [8c6..5fb] add readme | By - rocalex | On - 2022-06-15T20:25:25Z
 35. [d6f..bea] add paused | By - rocalex | On - 2022-06-15T20:17:41Z
 36. [0fc..012] lint fix | By - rocalex | On - 2022-06-15T20:08:29Z
 37. [f6a..df4] receive native | By - rocalex | On - 2022-06-15T20:06:46Z
 38. [aa1..769] send native | By - rocalex | On - 2022-06-15T19:54:47Z
 39. [29e..39b] send wrapped | By - rocalex | On - 2022-06-15T19:37:19Z
 40. [dd0..bf1] receive foreign | By - rocalex | On - 2022-06-15T18:35:22Z
 41. [ee6..373] create wVPAD when bootstrap | By - rocalex | On - 2022-06-15T17:57:39Z
 42. [b08..5d2] update group key | By - rocalex | On - 2022-06-15T17:20:59Z
 43. [3cc..fc9] update group key | By - rocalex | On - 2022-06-15T17:08:37Z
 44. [d42..410] add deploy script | By - rocalex | On - 2022-06-15T15:48:53Z
 45. [eff..25d] initial unit tests | By - rocalex | On - 2022-06-15T14:49:50Z
 46. [b69..51f] initial | By - rocalex | On - 2022-06-14T11:25:53Z

## main


 1. [83a..107] add signature to current nonce | By - rocalex | On - 2022-08-23T17:14:12Z
 2. [fda..e4d] use nonce instead of action id | By - rocalex | On - 2022-08-23T11:03:42Z
 3. [09a..954] add opcode budget constant | By - rocalex | On - 2022-08-20T00:55:04Z
 4. [37d..3dd] use opup instead of idle transaction | By - rocalex | On - 2022-08-19T10:43:51Z
 5. [24b..f2f] remove 300_000 | By - rocalex | On - 2022-08-18T07:11:50Z
 6. [a97..10d] update withdraw_fees | By - rocalex | On - 2022-08-17T12:51:35Z
 7. [138..6ea] Merge branch 'main' of https://github.com/XP-NETWORK/algorand-asa-bridge | By - Dima Brook | On - 2022-08-15T12:49:24Z
 8. [4d8..87a] add utils inline docs | By - Dima Brook | On - 2022-08-15T12:44:16Z
 9. [775..b66] add commets | By - rocalex | On - 2022-08-15T09:39:38Z
 10. [402..b0d] add script for issuing wrapper tokens | By - rupansh | On - 2022-08-08T12:07:10Z
 11. [254..79f] add setup script | By - rupansh | On - 2022-08-01T17:21:18Z
 12. [6e1..27c] log token id | By - rocalex | On - 2022-08-01T16:03:19Z
 13. [a88..b6a] fix receive_foreign | By - rocalex | On - 2022-08-01T13:44:26Z
 14. [e9a..cc0] update on_receive_native | By - rocalex | On - 2022-07-31T10:11:10Z
 15. [475..640] add target address | By - rocalex | On - 2022-07-29T02:41:53Z
 16. [7bb..5c5] add target address | By - rocalex | On - 2022-07-29T02:13:36Z
 17. [987..bd9] support multiple tokens | By - rocalex | On - 2022-07-27T14:09:06Z
 18. [c88..7bf] check group transactions | By - rocalex | On - 2022-07-10T10:24:38Z
 19. [c08..7b3] update README.md after testing | By - Dima Brook | On - 2022-06-29T13:15:53Z
 20. [697..6de] update unit tests | By - rocalex | On - 2022-06-29T12:11:21Z
 21. [9bd..92c] Update index.spec.ts | By - Xueming Zheng | On - 2022-06-28T10:47:04Z
 22. [246..ecf] remove xpnet key | By - rocalex | On - 2022-06-22T09:04:41Z
 23. [5f9..712] remove send_native & receive_native | By - rocalex | On - 2022-06-21T12:57:39Z
 24. [488..e8f] fix update_gk | By - rocalex | On - 2022-06-21T04:15:56Z
 25. [8da..db2] add consuming actions | By - rocalex | On - 2022-06-21T04:15:09Z
 26. [31d..eea] pause/unpause, withdraw fees | By - rocalex | On - 2022-06-20T16:00:51Z
 27. [065..9fa] change wrapped token name as XPNET | By - rocalex | On - 2022-06-16T08:53:22Z
 28. [8c6..5fb] add readme | By - rocalex | On - 2022-06-15T20:25:25Z
 29. [d6f..bea] add paused | By - rocalex | On - 2022-06-15T20:17:41Z
 30. [0fc..012] lint fix | By - rocalex | On - 2022-06-15T20:08:29Z
 31. [f6a..df4] receive native | By - rocalex | On - 2022-06-15T20:06:46Z
 32. [aa1..769] send native | By - rocalex | On - 2022-06-15T19:54:47Z
 33. [29e..39b] send wrapped | By - rocalex | On - 2022-06-15T19:37:19Z
 34. [dd0..bf1] receive foreign | By - rocalex | On - 2022-06-15T18:35:22Z
 35. [ee6..373] create wVPAD when bootstrap | By - rocalex | On - 2022-06-15T17:57:39Z
 36. [b08..5d2] update group key | By - rocalex | On - 2022-06-15T17:20:59Z
 37. [3cc..fc9] update group key | By - rocalex | On - 2022-06-15T17:08:37Z
 38. [d42..410] add deploy script | By - rocalex | On - 2022-06-15T15:48:53Z
 39. [eff..25d] initial unit tests | By - rocalex | On - 2022-06-15T14:49:50Z
 40. [b69..51f] initial | By - rocalex | On - 2022-06-14T11:25:53Z

# erc20-sc-verify

## master


 1. [9bf..ea9] routes: by-native: fix minor derp | By - rupansh | On - 2022-08-28T08:52:58Z
 2. [1e1..b22] initial import | By - rupansh | On - 2022-07-20T14:25:44Z

# tezos-royalties

# secret-bridge

## master


 1. [d15..2b7] Use HumanAddr in InitMsg | By - imsk17 | On - 2022-08-11T11:19:47Z
 2. [889..7ee] gitignore: remove Cargo.lock | By - rupansh | On - 2022-06-13T17:46:22Z
 3. [b9d..360] workflows: bump rustc version | By - rupansh | On - 2022-06-13T17:41:53Z
 4. [2ff..e76] add documentation | By - rupansh | On - 2022-06-13T17:39:56Z
 5. [28b..c40] lint check | By - rupansh | On - 2022-06-13T16:57:42Z
 6. [5b5..30b] Revert "add inline comments" | By - rupansh | On - 2022-06-13T16:54:34Z
 7. [bf3..f1f] add inline comments | By - Dima Brook | On - 2022-06-13T15:57:17Z
 8. [d3c..b20] contract: generate schema | By - imsk17 | On - 2022-06-03T09:11:42Z
 9. [d0c..0ca] contract: fix multiple issues | By - imsk17 | On - 2022-06-03T09:11:11Z
 10. [78b..846] add batch functions | By - rupansh | On - 2022-04-20T18:38:55Z
 11. [967..b04] BridgeAction: use human addr instead of canonical | By - rupansh | On - 2022-04-15T17:10:36Z
 12. [8a7..45e] remove benign comment | By - rupansh | On - 2022-04-14T12:19:48Z
 13. [fd8..d01] improve events | By - rupansh | On - 2022-04-14T12:18:24Z
 14. [8e8..4d5] use borsh/json instead of bincode | By - rupansh | On - 2022-04-14T11:10:03Z
 15. [5ae..4a0] minor fixes and tests | By - rupansh | On - 2022-04-04T13:15:31Z
 16. [b11..2ac] initial nft operations | By - rupansh | On - 2022-03-19T16:13:10Z
 17. [58d..aad] initial implementation | By - rupansh | On - 2022-03-18T12:32:46Z

# widget-dashboard

## master


 1. [f22..079] my widgets is ready | By - Lihi Sherm | On - 2022-08-08T08:11:00Z
 2. [4a3..7b2] update | By - Lihi Sherm | On - 2022-08-07T14:01:51Z
 3. [110..1a1] before loader | By - Lihi Sherm | On - 2022-08-07T09:06:32Z
 4. [ea8..b4d]  graph | By - Lihi Sherm | On - 2022-08-04T14:53:28Z
 5. [934..701] before doing graph | By - Lihi Sherm | On - 2022-08-04T10:36:34Z
 6. [e1f..05d] before doing graph | By - Lihi Sherm | On - 2022-08-04T09:10:11Z
 7. [f57..209] updates | By - Lihi Sherm | On - 2022-08-03T14:36:14Z
 8. [1c0..472] updates | By - Lihi Sherm | On - 2022-08-02T15:05:01Z
 9. [d32..4c8] widget dashboard | By - Lihi Sherm | On - 2022-08-02T12:41:52Z
 10. [3ea..199] widget dashboard | By - Lihi Sherm | On - 2022-08-02T09:57:38Z
 11. [8c9..120] widget dashboard | By - Lihi Sherm | On - 2022-08-02T09:56:44Z
 12. [69a..046] qa | By - Lihi Sherm | On - 2022-08-02T09:21:36Z
 13. [0c9..e39] WIDGET pages are ready | By - Lihi Sherm | On - 2022-08-01T12:08:24Z
 14. [0c6..3b7] WIDGET pages are ready | By - Lihi Sherm | On - 2022-08-01T10:44:14Z
 15. [de0..39a] updates ui and api requests | By - Lihi Sherm | On - 2022-07-31T15:58:37Z
 16. [b31..d63] updates ui and api requests | By - Lihi Sherm | On - 2022-07-31T15:52:56Z
 17. [a04..440] updates ui and api requests | By - Lihi Sherm | On - 2022-07-31T13:52:07Z
 18. [d59..e4a] remove cookies | By - Lihi Sherm | On - 2022-07-24T07:58:32Z
 19. [8f9..ba1] updates api calls | By - Lihi Sherm | On - 2022-07-24T07:06:51Z
 20. [b67..917] first commit | By - Lihi Sherm | On - 2022-07-12T12:01:53Z

# tezos-integration-smartpy

## feature/validators


 1. [721..a38] change validators list to set | By - rocalex | On - 2022-01-20T14:48:11Z
 2. [8ba..4fa] fix action_validators | By - rocalex | On - 2022-01-20T10:33:17Z
 3. [ede..c38] fix validate_unfreeze_nft | By - rocalex | On - 2022-01-18T13:26:34Z
 4. [a1c..0b6] add layout to freeze_fa2 | By - rocalex | On - 2022-01-18T11:16:34Z
 5. [be1..bef] remove deposit fee | By - rocalex | On - 2022-01-17T16:02:39Z
 6. [e33..1f9] add deposit fee | By - rocalex | On - 2022-01-17T14:16:46Z
 7. [e41..f81] add some test script | By - rocalex | On - 2022-01-16T18:02:54Z
 8. [0ff..9be] Merge branch 'main' of https://github.com/xp-network/tezos-integration-smartpy into main | By - rocalex | On - 2022-01-16T10:06:57Z
 9. [1a6..fd9] fix withdraw_nft | By - rocalex | On - 2022-01-16T10:06:52Z
 10. [35c..732] Update bridge.py | By - Dima Brook | On - 2022-01-07T14:21:15Z
 11. [c8d..543] setup only once | By - rocalex | On - 2022-01-06T13:03:10Z
 12. [92b..ad4] check if paid > 0 | By - rocalex | On - 2022-01-04T14:42:35Z
 13. [0bf..7c0] check new threshold | By - rocalex | On - 2022-01-03T18:41:53Z
 14. [c59..e3f] prevent deleting actions | By - rocalex | On - 2022-01-03T11:48:12Z
 15. [ed2..3e5] Update tezos-contract.md | By - Dima Brook | On - 2021-12-14T18:00:59Z
 16. [bae..40c] change env.example | By - Xueming Zheng | On - 2021-12-14T06:53:51Z
 17. [ca1..144] fix type of metadata | By - Xueming Zheng | On - 2021-12-14T06:38:02Z
 18. [4d5..140] add burn to xpnet | By - Xueming Zheng | On - 2021-12-13T13:19:11Z
 19. [81d..97a] add withdraw nft | By - Xueming Zheng | On - 2021-12-13T06:06:35Z
 20. [a92..288] Merge branch 'main' of https://github.com/xp-network/tezos-integration-smartpy | By - Xueming Zheng | On - 2021-12-13T05:31:30Z
 21. [b62..e0e] withdraw fees | By - Xueming Zheng | On - 2021-12-13T05:31:26Z
 22. [684..329] Update tezos-contract.md | By - Dima Brook | On - 2021-12-12T19:41:06Z
 23. [6ff..125] Update tezos-contract.md | By - Dima Brook | On - 2021-12-12T19:35:29Z
 24. [182..332] xpnft for only NFT | By - Xueming Zheng | On - 2021-12-12T18:05:14Z
 25. [5f1..70d] change key of frozen_nfts | By - Xueming Zheng | On - 2021-12-12T14:33:28Z
 26. [ee4..e02] add setup script | By - Xueming Zheng | On - 2021-12-12T09:26:37Z
 27. [42e..624] add unfreeze nft | By - Xueming Zheng | On - 2021-12-12T07:36:49Z
 28. [2ec..d04] map (TAddress => map(nft_id => TRecord)) | By - Xueming Zheng | On - 2021-12-07T18:45:13Z
 29. [35f..6dd] add docs to off-chain views | By - rocalex | On - 2021-12-06T08:04:42Z
 30. [4e9..3ae] add initial backend and whitelist | By - rocalex | On - 2021-12-06T08:01:41Z
 31. [507..01e] Create tezos-contract.md | By - Dima Brook | On - 2021-12-05T20:19:39Z
 32. [c4e..33a] erase validators when setup | By - rocalex | On - 2021-12-05T15:52:50Z
 33. [634..44b] add set threshold | By - rocalex | On - 2021-12-02T10:19:41Z
 34. [4c5..52d] add/remove validator | By - rocalex | On - 2021-12-02T09:56:10Z
 35. [8fb..d98] add enums | By - rocalex | On - 2021-12-01T12:35:25Z
 36. [780..ab3] Pause/Unpause bridge | By - rocalex | On - 2021-12-01T08:44:48Z
 37. [8e1..18a] add inline docs | By - rocalex | On - 2021-11-30T12:24:04Z
 38. [939..7c3] add admin | By - rocalex | On - 2021-11-29T10:04:35Z
 39. [427..347] add validate_action | By - rocalex | On - 2021-11-29T08:26:41Z
 40. [ab0..76a] add bridge | By - rocalex | On - 2021-11-29T07:47:09Z
 41. [b12..f86] add simple typescript client | By - rocalex | On - 2021-11-28T10:30:29Z
 42. [878..a1c] add simple typescript client | By - rocalex | On - 2021-11-28T06:22:01Z
 43. [dc3..21d] add user_nft_minter.py | By - rocalex | On - 2021-11-22T14:31:07Z
 44. [32d..098] add user_nft_minter.py | By - rocalex | On - 2021-11-22T13:42:15Z
 45. [067..da9] update readme | By - rocalex | On - 2021-11-22T12:04:07Z
 46. [844..dd6] remove unnecessary files | By - rocalex | On - 2021-11-22T12:00:37Z
 47. [cb3..c88] initial entry points | By - rocalex | On - 2021-11-08T05:49:00Z
 48. [227..70f] initial entry points | By - rocalex | On - 2021-11-08T04:19:37Z
 49. [8e3..572] add validate_action | By - rocalex | On - 2021-11-08T03:09:34Z
 50. [c5f..da9] add FA2 example | By - rocalex | On - 2021-11-03T12:32:16Z

## main


 1. [362..501] add test case for setting contract metadata | By - rocalex | On - 2022-08-03T15:45:33Z
 2. [9a1..942] fix nft_cnt to bigmap | By - rocalex | On - 2022-03-16T13:26:22Z
 3. [fbd..731] fix freeze_fa2 and withdraw_nft | By - rocalex | On - 2022-03-13T13:38:52Z
 4. [19c..cef] fix freeze_fa2 for rarible | By - rocalex | On - 2022-01-26T17:20:58Z
 5. [d41..fba] change map to big map | By - rocalex | On - 2022-01-25T22:51:33Z
 6. [5c9..831] change map to big map | By - rocalex | On - 2022-01-25T12:39:30Z
 7. [8f4..468] fix validate_whitelist_nft | By - rocalex | On - 2022-01-23T00:43:22Z
 8. [0ad..ed8] fix return value of validate_action | By - rocalex | On - 2022-01-21T14:18:44Z
 9. [bc6..5e4] change map to big map for actions and nft_whitelist | By - rocalex | On - 2022-01-21T10:47:43Z
 10. [d5c..7bb] Merge pull request #1 from XP-NETWORK/feature/validators | By - Xueming Zheng | On - 2022-01-20T14:49:59Z
 11. [721..a38] change validators list to set | By - rocalex | On - 2022-01-20T14:48:11Z
 12. [8ba..4fa] fix action_validators | By - rocalex | On - 2022-01-20T10:33:17Z
 13. [ede..c38] fix validate_unfreeze_nft | By - rocalex | On - 2022-01-18T13:26:34Z
 14. [a1c..0b6] add layout to freeze_fa2 | By - rocalex | On - 2022-01-18T11:16:34Z
 15. [be1..bef] remove deposit fee | By - rocalex | On - 2022-01-17T16:02:39Z
 16. [e33..1f9] add deposit fee | By - rocalex | On - 2022-01-17T14:16:46Z
 17. [e41..f81] add some test script | By - rocalex | On - 2022-01-16T18:02:54Z
 18. [0ff..9be] Merge branch 'main' of https://github.com/xp-network/tezos-integration-smartpy into main | By - rocalex | On - 2022-01-16T10:06:57Z
 19. [1a6..fd9] fix withdraw_nft | By - rocalex | On - 2022-01-16T10:06:52Z
 20. [35c..732] Update bridge.py | By - Dima Brook | On - 2022-01-07T14:21:15Z
 21. [c8d..543] setup only once | By - rocalex | On - 2022-01-06T13:03:10Z
 22. [92b..ad4] check if paid > 0 | By - rocalex | On - 2022-01-04T14:42:35Z
 23. [0bf..7c0] check new threshold | By - rocalex | On - 2022-01-03T18:41:53Z
 24. [c59..e3f] prevent deleting actions | By - rocalex | On - 2022-01-03T11:48:12Z
 25. [ed2..3e5] Update tezos-contract.md | By - Dima Brook | On - 2021-12-14T18:00:59Z
 26. [bae..40c] change env.example | By - Xueming Zheng | On - 2021-12-14T06:53:51Z
 27. [ca1..144] fix type of metadata | By - Xueming Zheng | On - 2021-12-14T06:38:02Z
 28. [4d5..140] add burn to xpnet | By - Xueming Zheng | On - 2021-12-13T13:19:11Z
 29. [81d..97a] add withdraw nft | By - Xueming Zheng | On - 2021-12-13T06:06:35Z
 30. [a92..288] Merge branch 'main' of https://github.com/xp-network/tezos-integration-smartpy | By - Xueming Zheng | On - 2021-12-13T05:31:30Z
 31. [b62..e0e] withdraw fees | By - Xueming Zheng | On - 2021-12-13T05:31:26Z
 32. [684..329] Update tezos-contract.md | By - Dima Brook | On - 2021-12-12T19:41:06Z
 33. [6ff..125] Update tezos-contract.md | By - Dima Brook | On - 2021-12-12T19:35:29Z
 34. [182..332] xpnft for only NFT | By - Xueming Zheng | On - 2021-12-12T18:05:14Z
 35. [5f1..70d] change key of frozen_nfts | By - Xueming Zheng | On - 2021-12-12T14:33:28Z
 36. [ee4..e02] add setup script | By - Xueming Zheng | On - 2021-12-12T09:26:37Z
 37. [42e..624] add unfreeze nft | By - Xueming Zheng | On - 2021-12-12T07:36:49Z
 38. [2ec..d04] map (TAddress => map(nft_id => TRecord)) | By - Xueming Zheng | On - 2021-12-07T18:45:13Z
 39. [35f..6dd] add docs to off-chain views | By - rocalex | On - 2021-12-06T08:04:42Z
 40. [4e9..3ae] add initial backend and whitelist | By - rocalex | On - 2021-12-06T08:01:41Z
 41. [507..01e] Create tezos-contract.md | By - Dima Brook | On - 2021-12-05T20:19:39Z
 42. [c4e..33a] erase validators when setup | By - rocalex | On - 2021-12-05T15:52:50Z
 43. [634..44b] add set threshold | By - rocalex | On - 2021-12-02T10:19:41Z
 44. [4c5..52d] add/remove validator | By - rocalex | On - 2021-12-02T09:56:10Z
 45. [8fb..d98] add enums | By - rocalex | On - 2021-12-01T12:35:25Z
 46. [780..ab3] Pause/Unpause bridge | By - rocalex | On - 2021-12-01T08:44:48Z
 47. [8e1..18a] add inline docs | By - rocalex | On - 2021-11-30T12:24:04Z
 48. [939..7c3] add admin | By - rocalex | On - 2021-11-29T10:04:35Z
 49. [427..347] add validate_action | By - rocalex | On - 2021-11-29T08:26:41Z
 50. [ab0..76a] add bridge | By - rocalex | On - 2021-11-29T07:47:09Z

# white_list_nft

## main


 1. [666..265] Added server and front end for white listing nft | By - awkwardman.dev | On - 2022-08-01T14:42:29Z

# web3-erc20-contracts

## master


 1. [6ad..02e] package.contract: bump ethers | By - rupansh | On - 2022-07-28T14:13:35Z
 2. [b07..ece] Bridge: take target address from user | By - rupansh | On - 2022-07-26T15:33:15Z
 3. [365..665] gitignore: add .deps | By - rupansh | On - 2022-07-26T15:33:02Z
 4. [8b0..983] update deploy script | By - rupansh | On - 2022-07-20T13:56:28Z
 5. [6c4..81b] initial changes for multi-token | By - rupansh | On - 2022-07-18T16:12:03Z
 6. [88f..f35] workflows: gen-typechain: fix repo url | By - rupansh | On - 2022-06-20T17:02:58Z
 7. [bca..f08] initial import | By - rupansh | On - 2022-06-20T16:42:34Z

# XP.network-Elrond-Migration

## elrond-event


 1. [8e2..e36] validate_action: do cleanup before performing action | By - rupansh | On - 2021-08-30T17:20:06Z
 2. [653..577] return action id from deposit fns | By - rupansh | On - 2021-08-30T10:39:31Z
 3. [4f1..b65] add action_id for events | By - rupansh | On - 2021-08-26T14:06:41Z
 4. [c3a..3a9] use proper events | By - rupansh | On - 2021-08-26T14:06:34Z
 5. [8e4..84b] elrond-event-middleware: emit tx hash instead of event id | By - rupansh | On - 2021-08-24T11:56:26Z
 6. [55e..561] elrond-mint: sft fixes | By - rupansh | On - 2021-08-11T15:45:34Z
 7. [816..8c7] elrond-mint: keep atleast 1 token for existential requirements | By - rupansh | On - 2021-08-10T15:15:43Z
 8. [beb..14d] use SFT instead of normal esdt for wrapped tokens | By - rupansh | On - 2021-08-10T13:13:33Z
 9. [08c..fce] initial multi chain changes | By - rupansh | On - 2021-08-09T12:03:29Z
 10. [829..694] update to elrond_wasm 18 | By - rupansh | On - 2021-08-09T11:43:36Z
 11. [080..a2f] elrond-mint: use uri field instead of name for nfts | By - rupansh | On - 2021-08-05T15:35:13Z
 12. [515..28c] elrond-event-middleware: fix cors | By - rupansh | On - 2021-07-29T10:06:41Z
 13. [9e8..fa2] validator: sync with migration library | By - rupansh | On - 2021-07-14T16:07:26Z
 14. [198..063] elrond-event: add cors | By - rupansh | On - 2021-07-14T16:06:06Z
 15. [f9c..4b9] mint-contract: add nft sending | By - rupansh | On - 2021-07-13T13:33:43Z
 16. [2fc..d06] mint-contract: nft: minor fixes | By - rupansh | On - 2021-07-13T10:35:30Z
 17. [33e..699] elrond-mint: initial nft support | By - rupansh | On - 2021-07-13T10:35:30Z
 18. [c39..b1a] wrap_token repo update sync | By - VKint | On - 2021-07-06T12:50:02Z
 19. [9f8..6cb] elrond-mint: remove action executed check | By - VKint | On - 2021-07-05T08:43:55Z
 20. [8be..de1] docs: update TESTING.md | By - VKint | On - 2021-07-02T10:48:54Z
 21. [929..86d] contracts: update auhtors | By - VKint | On - 2021-07-02T09:57:45Z
 22. [8c6..06d] update README | By - VKint | On - 2021-07-02T09:23:17Z
 23. [c7c..0b4] testsuite: sync | By - VKint | On - 2021-06-28T11:55:56Z
 24. [6ff..365] testsuite: sync | By - VKint | On - 2021-06-24T13:33:40Z
 25. [f59..56e] testsuite: sync | By - VKint | On - 2021-06-23T14:40:11Z
 26. [02f..59c] elrond-event: change port to 6644 | By - VKint | On - 2021-06-23T14:40:03Z
 27. [001..5c8] lib: add doc comments | By - VKint | On - 2021-06-22T13:24:53Z
 28. [21d..af2] Dockerfile: better caching | By - VKint | On - 2021-06-21T11:00:07Z
 29. [21e..3d6] testsuite: add as submodule | By - VKint | On - 2021-06-21T10:59:52Z
 30. [4e9..991] remove testsuite | By - VKint | On - 2021-06-21T10:59:38Z
 31. [546..f0e] wrap_token: add as submodule | By - VKint | On - 2021-06-20T13:17:18Z
 32. [9cc..64d] remove wrap_token | By - VKint | On - 2021-06-20T13:15:42Z
 33. [1cf..23d] ink_egld: rename to wrap_token | By - VKint | On - 2021-06-20T13:09:24Z
 34. [198..4bb] testsuite: conts: increase endowment | By - VKint | On - 2021-06-17T12:36:32Z
 35. [128..3d3] Revert "testsuite: allow retry on faliure" | By - VKint | On - 2021-06-16T14:25:38Z
 36. [462..2bd] testsuite: allow retry on faliure | By - VKint | On - 2021-06-16T12:46:51Z
 37. [b7d..eb3] consts: update esdt issuance fees | By - VKint | On - 2021-06-16T10:22:18Z
 38. [2d2..449] testsuite: docker_run: start an observer node | By - VKint | On - 2021-06-15T14:13:12Z
 39. [331..f79] docker_run: minor update | By - VKint | On - 2021-06-15T14:02:35Z
 40. [1f8..6c4] testsuite: fix typo | By - VKint | On - 2021-06-15T13:49:05Z
 41. [95f..a58] testsuite: bug fixes | By - VKint | On - 2021-06-15T13:05:58Z
 42. [122..9e3] freezer: sync | By - VKint | On - 2021-06-15T13:05:50Z
 43. [04a..e18] ink_egld: panic instead of result | By - VKint | On - 2021-06-15T13:04:39Z
 44. [9f2..eb6] validator: update metadata | By - VKint | On - 2021-06-15T13:04:22Z
 45. [bb0..1e0] testsuite: main: add egld test | By - VKint | On - 2021-06-14T15:26:32Z
 46. [72e..aaf] testsuite: add egold tests | By - VKint | On - 2021-06-14T15:19:54Z
 47. [f5c..d39] restore config | By - VKint | On - 2021-06-14T15:19:33Z
 48. [d38..41e] ink_egld: minor changes | By - VKint | On - 2021-06-14T14:49:06Z
 49. [5dd..809] validator: sync with freezer | By - VKint | On - 2021-06-14T14:48:56Z
 50. [461..cef] testsuite: rename token | By - VKint | On - 2021-06-14T12:14:17Z

## master


 1. [91d..4f5] bump testsuite | By - rupansh | On - 2022-07-17T16:02:46Z
 2. [128..a83] bump egld-esdt-swap | By - rupansh | On - 2022-07-17T15:35:01Z
 3. [635..99e] testsuite: update | By - rupansh | On - 2022-07-17T15:00:06Z
 4. [ad1..bc6] bump testsuite | By - rupansh | On - 2022-07-17T14:53:52Z
 5. [117..d83] bump testsuite | By - rupansh | On - 2022-05-18T14:48:03Z
 6. [c93..a05] initial royalties | By - rupansh | On - 2022-03-13T19:29:33Z
 7. [c7a..392] use stack instead of vm for fixed sized arrays | By - rupansh | On - 2022-03-06T15:06:54Z
 8. [6ab..f25] use keccak256_legacy_managed for hashing | By - rupansh | On - 2022-03-06T09:38:01Z
 9. [059..378] update tx fees logic | By - rupansh | On - 2022-03-06T09:34:39Z
 10. [f1b..edd] update elrond-wasm to 0.29 | By - rupansh | On - 2022-03-04T13:45:22Z
 11. [e02..468] use single url for attributes | By - rupansh | On - 2022-03-03T18:10:55Z
 12. [e73..0e9] bump testsuite | By - rupansh | On - 2022-02-14T17:36:16Z
 13. [315..44e] elrond-mint-contract: various fixes | By - rupansh | On - 2022-02-14T17:36:09Z
 14. [842..22f] sendNftBatch: allow array of mintWith | By - rupansh | On - 2022-02-14T11:22:51Z
 15. [b5a..286] bump testsuite | By - rupansh | On - 2022-02-14T10:33:51Z
 16. [557..4b0] elrond-mint-contract: add mint_with field for SendNft actions | By - rupansh | On - 2022-02-14T10:31:02Z
 17. [746..a22] bump testsuite | By - rupansh | On - 2022-02-05T14:05:41Z
 18. [447..e74] bump frost-secp256k1 | By - rupansh | On - 2022-02-04T15:06:29Z
 19. [05b..df1] bump testsuite | By - rupansh | On - 2022-02-04T15:06:14Z
 20. [477..89b] elrond-mint-contract: initial rewrite for off chain multisig | By - rupansh | On - 2022-02-02T13:16:40Z
 21. [4d9..e14] unfreeze nft: allow arbitrary chain nonce | By - rupansh | On - 2021-12-22T15:01:45Z
 22. [e28..b30] store data hash instead of full data | By - rupansh | On - 2021-12-22T14:53:14Z
 23. [023..c82] transferNft: add "mintWith" param | By - rupansh | On - 2021-12-21T14:46:52Z
 24. [583..b16] elrond-mint: add unfreeze nft batched | By - rupansh | On - 2021-12-16T16:21:02Z
 25. [800..d23] add withdrawBatchNft | By - rupansh | On - 2021-12-16T16:13:00Z
 26. [640..c2f] add freezeSendBatchNft | By - rupansh | On - 2021-12-16T16:07:47Z
 27. [9dc..341] elrond-mint: add SendNftBatch | By - rupansh | On - 2021-12-16T14:58:58Z
 28. [6ad..49b] mint-contract: action: SendNft: remove chain nonce | By - rupansh | On - 2021-11-10T09:24:19Z
 29. [b40..072] elrond-mint: validate_send_nft: change call signature | By - rupansh | On - 2021-11-10T08:53:47Z
 30. [5dc..ab7] initial changes for wrapped nft storage | By - rupansh | On - 2021-11-09T15:25:55Z
 31. [5e3..feb] testsuite: update | By - rupansh | On - 2021-10-30T09:20:42Z
 32. [388..eb9] emit events on approval/rejection | By - rupansh | On - 2021-10-29T07:09:08Z
 33. [090..76d] fix: redundant comparison | By - Dima Brook | On - 2021-10-25T13:15:44Z
 34. [9ca..c2c] elrond-mint-contract: use ManagedBuffer | By - rupansh | On - 2021-10-11T20:57:31Z
 35. [742..06c] egld-esdt-swap: sync | By - rupansh | On - 2021-10-11T20:35:21Z
 36. [9fb..409] sync egld esdt swap | By - rupansh | On - 2021-10-11T11:39:02Z
 37. [41e..a75] sync testsuite | By - rupansh | On - 2021-10-10T15:49:41Z
 38. [c24..548] rustfmt | By - rupansh | On - 2021-10-07T09:36:02Z
 39. [f3f..370] testsuite: sync | By - rupansh | On - 2021-10-07T09:33:51Z
 40. [dad..c8a] add egld esdt swap as submodule | By - rupansh | On - 2021-10-07T08:57:44Z
 41. [a33..2f6] remove Docker | By - rupansh | On - 2021-10-07T08:25:11Z
 42. [65a..828] cleanup gitmodules | By - rupansh | On - 2021-10-07T08:24:44Z
 43. [ef9..305] cleanup erdpy | By - rupansh | On - 2021-10-07T08:24:18Z
 44. [d0f..eb6] cleanup validator | By - rupansh | On - 2021-10-07T08:24:07Z
 45. [8a8..fc4] add functionality for withdrawing tx fees | By - rupansh | On - 2021-10-06T13:38:35Z
 46. [8c1..738] initial tx fees support | By - rupansh | On - 2021-10-06T13:21:17Z
 47. [b07..bea] upgrade to elrond-wasm 0.20 | By - rupansh | On - 2021-10-06T10:54:12Z
 48. [5b6..a8f] mint-contract: fix action id collision | By - rupansh | On - 2021-09-26T13:35:44Z
 49. [c81..d48] add bridge pausing | By - rupansh | On - 2021-09-26T13:14:51Z
 50. [5c0..5a4] mint-contract: verify action data before executing | By - rupansh | On - 2021-09-26T13:00:49Z

## royalties


 1. [c93..a05] initial royalties | By - rupansh | On - 2022-03-13T19:29:33Z
 2. [c7a..392] use stack instead of vm for fixed sized arrays | By - rupansh | On - 2022-03-06T15:06:54Z
 3. [6ab..f25] use keccak256_legacy_managed for hashing | By - rupansh | On - 2022-03-06T09:38:01Z
 4. [059..378] update tx fees logic | By - rupansh | On - 2022-03-06T09:34:39Z
 5. [f1b..edd] update elrond-wasm to 0.29 | By - rupansh | On - 2022-03-04T13:45:22Z
 6. [e02..468] use single url for attributes | By - rupansh | On - 2022-03-03T18:10:55Z
 7. [e73..0e9] bump testsuite | By - rupansh | On - 2022-02-14T17:36:16Z
 8. [315..44e] elrond-mint-contract: various fixes | By - rupansh | On - 2022-02-14T17:36:09Z
 9. [842..22f] sendNftBatch: allow array of mintWith | By - rupansh | On - 2022-02-14T11:22:51Z
 10. [b5a..286] bump testsuite | By - rupansh | On - 2022-02-14T10:33:51Z
 11. [557..4b0] elrond-mint-contract: add mint_with field for SendNft actions | By - rupansh | On - 2022-02-14T10:31:02Z
 12. [746..a22] bump testsuite | By - rupansh | On - 2022-02-05T14:05:41Z
 13. [447..e74] bump frost-secp256k1 | By - rupansh | On - 2022-02-04T15:06:29Z
 14. [05b..df1] bump testsuite | By - rupansh | On - 2022-02-04T15:06:14Z
 15. [477..89b] elrond-mint-contract: initial rewrite for off chain multisig | By - rupansh | On - 2022-02-02T13:16:40Z
 16. [4d9..e14] unfreeze nft: allow arbitrary chain nonce | By - rupansh | On - 2021-12-22T15:01:45Z
 17. [e28..b30] store data hash instead of full data | By - rupansh | On - 2021-12-22T14:53:14Z
 18. [023..c82] transferNft: add "mintWith" param | By - rupansh | On - 2021-12-21T14:46:52Z
 19. [583..b16] elrond-mint: add unfreeze nft batched | By - rupansh | On - 2021-12-16T16:21:02Z
 20. [800..d23] add withdrawBatchNft | By - rupansh | On - 2021-12-16T16:13:00Z
 21. [640..c2f] add freezeSendBatchNft | By - rupansh | On - 2021-12-16T16:07:47Z
 22. [9dc..341] elrond-mint: add SendNftBatch | By - rupansh | On - 2021-12-16T14:58:58Z
 23. [6ad..49b] mint-contract: action: SendNft: remove chain nonce | By - rupansh | On - 2021-11-10T09:24:19Z
 24. [b40..072] elrond-mint: validate_send_nft: change call signature | By - rupansh | On - 2021-11-10T08:53:47Z
 25. [5dc..ab7] initial changes for wrapped nft storage | By - rupansh | On - 2021-11-09T15:25:55Z
 26. [5e3..feb] testsuite: update | By - rupansh | On - 2021-10-30T09:20:42Z
 27. [388..eb9] emit events on approval/rejection | By - rupansh | On - 2021-10-29T07:09:08Z
 28. [090..76d] fix: redundant comparison | By - Dima Brook | On - 2021-10-25T13:15:44Z
 29. [9ca..c2c] elrond-mint-contract: use ManagedBuffer | By - rupansh | On - 2021-10-11T20:57:31Z
 30. [742..06c] egld-esdt-swap: sync | By - rupansh | On - 2021-10-11T20:35:21Z
 31. [9fb..409] sync egld esdt swap | By - rupansh | On - 2021-10-11T11:39:02Z
 32. [41e..a75] sync testsuite | By - rupansh | On - 2021-10-10T15:49:41Z
 33. [c24..548] rustfmt | By - rupansh | On - 2021-10-07T09:36:02Z
 34. [f3f..370] testsuite: sync | By - rupansh | On - 2021-10-07T09:33:51Z
 35. [dad..c8a] add egld esdt swap as submodule | By - rupansh | On - 2021-10-07T08:57:44Z
 36. [a33..2f6] remove Docker | By - rupansh | On - 2021-10-07T08:25:11Z
 37. [65a..828] cleanup gitmodules | By - rupansh | On - 2021-10-07T08:24:44Z
 38. [ef9..305] cleanup erdpy | By - rupansh | On - 2021-10-07T08:24:18Z
 39. [d0f..eb6] cleanup validator | By - rupansh | On - 2021-10-07T08:24:07Z
 40. [8a8..fc4] add functionality for withdrawing tx fees | By - rupansh | On - 2021-10-06T13:38:35Z
 41. [8c1..738] initial tx fees support | By - rupansh | On - 2021-10-06T13:21:17Z
 42. [b07..bea] upgrade to elrond-wasm 0.20 | By - rupansh | On - 2021-10-06T10:54:12Z
 43. [5b6..a8f] mint-contract: fix action id collision | By - rupansh | On - 2021-09-26T13:35:44Z
 44. [c81..d48] add bridge pausing | By - rupansh | On - 2021-09-26T13:14:51Z
 45. [5c0..5a4] mint-contract: verify action data before executing | By - rupansh | On - 2021-09-26T13:00:49Z
 46. [197..9d6] minor validate action changes | By - rupansh | On - 2021-09-26T12:24:18Z
 47. [2e7..ee6] Merge branch 'elrond-event' | By - rupansh | On - 2021-09-26T08:56:11Z
 48. [84c..f0c] move event-middleware to seperate repo | By - rupansh | On - 2021-09-26T08:53:20Z
 49. [961..8dd] validate_action: do cleanup before performing action | By - rupansh | On - 2021-08-30T17:25:42Z
 50. [8e2..e36] validate_action: do cleanup before performing action | By - rupansh | On - 2021-08-30T17:20:06Z

## rpc


 1. [339..8cd] freezer: scCallVerify workaround | By - VKint | On - 2021-06-03T12:56:57Z
 2. [caf..e74] freezer: argument workaround | By - VKint | On - 2021-06-03T12:16:39Z
 3. [d77..2df] freezer: initial rpc support | By - VKint | On - 2021-06-02T16:13:54Z
 4. [202..d5c] elrond-mint: add ScCall event | By - VKint | On - 2021-06-02T15:04:04Z
 5. [27d..ca7] validator: use validator library | By - VKint | On - 2021-06-02T15:03:42Z
 6. [433..aaf] gitignore: add dist | By - VKint | On - 2021-06-02T08:18:55Z
 7. [5f4..f8c] validator: initial refactor | By - Dima Brook | On - 2021-06-02T08:17:12Z
 8. [69c..639] elrond-event: minor api changes | By - VKint | On - 2021-05-31T13:37:08Z
 9. [096..ca4] validator: add rpc support | By - VKint | On - 2021-05-31T13:37:08Z
 10. [c96..1f9] freezer: add rpc support | By - VKint | On - 2021-05-31T13:37:08Z
 11. [118..3e2] validator: add rpc support | By - VKint | On - 2021-05-31T13:37:08Z
 12. [9fa..c01] elrond-mint: update to 0.17.0 | By - VKint | On - 2021-05-31T13:37:08Z
 13. [e09..c38] validator: polkadot: fix pop | By - Dima Brook | On - 2021-05-28T16:24:24Z
 14. [a7b..baf] add me.txt | By - Dima Brook | On - 2021-05-29T19:03:33Z
 15. [f0b..2be] switch to test acc mnemonic | By - Dima Brook | On - 2021-05-28T14:20:09Z
 16. [01f..401] validator: minor debug lines | By - Dima Brook | On - 2021-05-28T14:13:18Z
 17. [aa6..6df] ammend validator compilation | By - Dima Brook | On - 2021-05-28T12:59:54Z
 18. [73f..9d0] validator: fix action_id deserialization | By - Dima Brook | On - 2021-05-28T12:56:58Z
 19. [87a..12a] validator: print action_id | By - Dima Brook | On - 2021-05-28T12:44:29Z
 20. [59e..2a8] fix contract_roles.sh | By - Dima Brook | On - 2021-05-28T11:26:35Z
 21. [2e2..af7] validator: minor polkadot fixes | By - Dima Brook | On - 2021-05-28T09:25:12Z
 22. [7e7..187] validator: initial withdraw support | By - Dima Brook | On - 2021-05-27T14:51:21Z
 23. [733..c0c] freezer: fix validator cnt check | By - Dima Brook | On - 2021-05-27T14:51:08Z
 24. [25f..518] elrond-mint: initial withdraw support | By - Dima Brook | On - 2021-05-27T14:50:55Z
 25. [4c0..428] elrond-event-middleware: minor fixes | By - Dima Brook | On - 2021-05-27T14:50:37Z
 26. [a63..bf6] add elrond-event workaround | By - Dima Brook | On - 2021-05-27T12:46:23Z
 27. [e44..3b4] elrond-mint: add contract-roles.sh | By - Dima Brook | On - 2021-05-27T10:26:25Z
 28. [b8d..655] elrond-mint: return PerformActionResult | By - Dima Brook | On - 2021-05-27T10:20:51Z
 29. [06f..9b2] validator: fix private key | By - Dima Brook | On - 2021-05-27T10:17:15Z
 30. [284..8d0] minor updates | By - Dima Brook | On - 2021-05-27T09:08:12Z
 31. [5fb..698] elrond-mint: update scripts | By - Dima Brook | On - 2021-05-27T08:48:37Z
 32. [e12..9b0] wasm: update wasm-output version | By - Dima Brook | On - 2021-05-27T07:55:47Z
 33. [204..049] add erdpy-up.py | By - Dima Brook | On - 2021-05-26T15:58:01Z
 34. [841..768] freezer: remove uuid dependency | By - Dima Brook | On - 2021-05-26T14:20:13Z
 35. [51c..f8d] validator: move polkadot listener to separate function | By - Dima Brook | On - 2021-05-26T14:05:16Z
 36. [22c..f6c] freezer: implement popping actions | By - Dima Brook | On - 2021-05-26T13:56:21Z
 37. [c19..f50] elrond-mint: update deploy snippets | By - Dima Brook | On - 2021-05-26T13:36:29Z
 38. [544..35d] validator: use mac private key | By - Dima Brook | On - 2021-05-26T10:44:31Z
 39. [596..ff0] validator: take action_id | By - Dima Brook | On - 2021-05-26T08:48:36Z
 40. [5e1..7ab] freezer: make freezer pub | By - Dima Brook | On - 2021-05-25T14:31:19Z
 41. [283..534] elrond-mint: initial rustdoc | By - Dima Brook | On - 2021-05-25T14:07:54Z
 42. [4b5..c65] elrond-mint: fix transfer event | By - Dima Brook | On - 2021-05-25T14:03:54Z
 43. [bd2..3c4] elrond-mint: event emitting workaround | By - Dima Brook | On - 2021-05-25T13:59:26Z
 44. [013..d5c] freezer: emit actionId along with action | By - Dima Brook | On - 2021-05-25T11:24:11Z
 45. [c59..f72] README: add test instructions | By - Dima Brook | On - 2021-05-21T15:10:03Z
 46. [dba..5a3] elrond-mint: update tests | By - Dima Brook | On - 2021-05-21T15:09:50Z
 47. [c40..a57] freezer: take elrond address as a string | By - Dima Brook | On - 2021-05-21T15:08:37Z
 48. [ad2..cfe] validator: use config | By - Dima Brook | On - 2021-05-21T14:26:22Z
 49. [446..0e7] validator: fix decoding | By - Dima Brook | On - 2021-05-21T13:40:43Z
 50. [426..301] elrond-mint: allow token to be set during deployement | By - Dima Brook | On - 2021-05-21T11:05:47Z

# xpnft-deployer

## master


 1. [f3a..cbe] deleted switch button and popup as per Ruby's request | By - Or Kilim | On - 2022-07-12T14:03:28Z
 2. [ba7..9e0] disconnect div now also closes on click outside the div | By - Or Kilim | On - 2022-07-12T13:46:54Z
 3. [152..a19] fixed 'switch to minter' functionality and still need to clarify some stuff with ruby and rudy | By - Or Kilim | On - 2022-07-11T17:27:22Z
 4. [a53..723] changed some more QA stuff and fixed some visuals and functionality | By - Or Kilim | On - 2022-07-11T14:44:03Z
 5. [e00..817] fixed almost everything- Rudy needs to ask Ruby about metamask button | By - Or Kilim | On - 2022-07-10T17:40:47Z
 6. [f2f..54f] fixed bugs from Monday | By - Or Kilim | On - 2022-07-10T14:22:59Z
 7. [183..3ba] done some changes QA asked | By - Or Kilim | On - 2022-07-06T17:12:34Z
 8. [4a0..98c] changed notification (toast) in switchToMinter function | By - Or Kilim | On - 2022-07-06T12:37:02Z
 9. [f27..613] done the 'switch to minter' button and functionality | By - Or Kilim | On - 2022-07-06T12:31:11Z
 10. [c30..b2f] added button to switch ownership to minter and changed some visuals | By - Or Kilim | On - 2022-07-05T17:00:18Z
 11. [972..044] added minter addresses | By - Or Kilim | On - 2022-07-05T15:52:05Z
 12. [7e1..2f1] changed deployer visuals | By - Or Kilim | On - 2022-07-05T14:36:01Z
 13. [04a..d10] made some visual changes and added a closing button to 'select chain modal' | By - Or Kilim | On - 2022-07-04T16:52:49Z
 14. [64b..4c6] just needed to move toast contaienr to the bottom of the app to make the build work | By - Or Kilim | On - 2022-07-03T10:42:11Z
 15. [418..087] initial commit to xpnetwork github repo | By - Or Kilim | On - 2022-06-30T19:37:40Z
 16. [92d..9ae] added 3 more contract types and their needed fields | By - Or Kilim | On - 2022-06-30T13:31:34Z
 17. [060..724] solved jazzicon-keeps-changing problem | By - Or Kilim | On - 2022-06-30T07:37:30Z
 18. [4eb..7b5] changed the interface to show deployer only when connected, show currently connected chain in selector and modal closes on chain selection | By - Or Kilim | On - 2022-06-29T14:48:33Z
 19. [cd6..f8b] changed the code to create popup and now it closes with button press | By - Or Kilim | On - 2022-06-29T13:43:27Z
 20. [b97..dcf] added jazzicon to connect button (when connected) and fixed connection issue with button | By - Or Kilim | On - 2022-06-29T10:41:07Z
 21. [00a..65e] working on wallet connection | By - Or Kilim | On - 2022-06-28T11:24:27Z
 22. [62b..7eb] worked on 'select chain' popup | By - Or Kilim | On - 2022-06-28T10:24:19Z
 23. [6dc..88c] deleted some imports from index.tsx | By - Or Kilim | On - 2022-06-27T14:45:54Z
 24. [41a..57f] changed visual of 'add network' message and changed some functionalities | By - Or Kilim | On - 2022-06-27T14:44:13Z
 25. [433..fc7] finished autocomplete | By - Or Kilim | On - 2022-06-26T17:35:04Z
 26. [8f5..eba] developing the select chain window | By - Or Kilim | On - 2022-06-26T07:47:40Z
 27. [f81..8ec] added a font | By - Or Kilim | On - 2022-06-23T14:12:30Z
 28. [b71..5dd] changes some functionality and added visuals | By - Or Kilim | On - 2022-06-22T15:04:53Z
 29. [fa0..6d5] some more visuals added | By - Or Kilim | On - 2022-06-22T13:34:32Z
 30. [a2c..4af] visual changes and about to change functionality | By - Or Kilim | On - 2022-06-22T12:57:22Z
 31. [c2b..fbc] Initialize project using Create React App | By - Or Kilim | On - 2022-06-21T14:44:25Z

# xp-nft-deployer

## master


 1. [636..820] changed USER model and interface | By - Or Kilim | On - 2022-07-04T10:04:03Z
 2. [e4f..d49] initial commit to xp-nft-deployer | By - Or Kilim | On - 2022-07-03T16:22:29Z

# nft-fetch

# xp-cardano-integration

# widget-editor-backend

# secret-umt

## umt


 1. [f8a..c59] miting: allow anyone to mint | By - imsk17 | On - 2022-06-06T13:29:00Z
 2. [632..d46] add ImplementsTokenSubtype query and update README with ToC and description of SNIP-722 additions (SNIP-723 README updates still to come) | By - William Wincer | On - 2022-05-28T00:24:29Z
 3. [e9a..a19] clean up clippy warnings | By - William Wincer | On - 2022-05-13T07:51:06Z
 4. [119..a41] Merge pull request #11 from reuvenpo/master | By - baedrik | On - 2022-05-12T15:23:17Z
 5. [bf1..2c6] bumped rust version used in CI to 1.59 | By - Reuven Podmazo | On - 2022-05-12T14:37:19Z
 6. [fd0..c92] cargo update following release of secret-toolkit-permit v0.3.1 | By - Reuven Podmazo | On - 2022-05-12T12:07:00Z
 7. [5d3..fb6] Merge pull request #10 from reuvenpo/master | By - baedrik | On - 2022-05-11T13:30:46Z
 8. [df2..3cb] updated to tookit v0.3 | By - Reuven Podmazo | On - 2022-05-11T08:33:52Z
 9. [f69..9b6] add comment that stashh is using "badge" as the token_subtype to specify an NFT is a badge | By - William Wincer | On - 2022-04-14T00:12:38Z
 10. [901..cc4] Merge pull request #6 from assafmo/patch-1 | By - baedrik | On - 2022-03-03T08:01:18Z
 11. [4b5..e73] Update secret-contract-optimizer | By - Assaf Morami | On - 2022-03-03T07:38:53Z
 12. [75c..b29] caching owner information during a BatchNftDossier query and unit-test for BatchNftDossier | By - William Wincer | On - 2022-02-23T20:30:02Z
 13. [5a0..ed0] unit tests for NumTokensOfOwner | By - William Wincer | On - 2022-02-19T13:36:56Z
 14. [463..fa6] forgot to fmt | By - William Wincer | On - 2022-02-18T08:42:01Z
 15. [826..85d] badges, POAPs, non-transferable tokens, BatchNftDossier, NumTokensOfOwner...see NOTE in README | By - William Wincer | On - 2022-02-18T08:34:57Z
 16. [8e7..043] removed a couple dependencies | By - baedrik | On - 2021-11-04T19:07:16Z
 17. [150..109] throw error if attempting to transfer/send to a recipient address that already owns the token | By - baedrik | On - 2021-10-29T21:54:49Z
 18. [731..f0c] clippy changes for rust 1.56 | By - baedrik | On - 2021-10-25T19:34:07Z
 19. [25c..9a9] change wasm-opt level from 0s to 0z | By - baedrik | On - 2021-10-22T18:59:27Z
 20. [1cf..3b5] permit toolkit update | By - baedrik | On - 2021-10-22T17:25:27Z
 21. [e29..7a2] permit queries:  added, but not tested yet, but pushing early for those in a hurry | By - baedrik | On - 2021-10-21T08:09:37Z
 22. [bb3..b41] README update for new metadata examples and private royalty recipient addresses | By - baedrik | On - 2021-10-10T21:14:16Z
 23. [5e7..e12] private royalty addresses and disallow having both token_uri and extension in the same Meatdata | By - baedrik | On - 2021-10-08T20:48:24Z
 24. [a89..84d] fmt tweak | By - baedrik | On - 2021-10-04T23:39:59Z
 25. [fee..3a4] README tweak | By - baedrik | On - 2021-10-04T23:10:01Z
 26. [17b..7f3] update README with new metadata standard | By - baedrik | On - 2021-10-04T23:02:51Z
 27. [b5c..941] spelling | By - baedrik | On - 2021-10-01T23:16:49Z
 28. [272..d42] mediafile type description | By - baedrik | On - 2021-10-01T23:15:57Z
 29. [810..18c] implement new cw721 metadata standards and include Stashh metadata standard.  I have not updated the README yet, but you can see token.rs for the new format | By - baedrik | On - 2021-10-01T22:53:19Z
 30. [702..20f] allow specifying recipient contract's code hash and BatchReceiveNft implementation status in the (Batch)SendNft msg | By - baedrik | On - 2021-09-25T00:00:07Z
 31. [af6..c51] move set meta auth check | By - baedrik | On - 2021-09-18T00:50:12Z
 32. [a62..d36] additional unit-test | By - baedrik | On - 2021-09-16T04:00:48Z
 33. [58a..9c7] optimize for lower gas consumption when updating large (10k) inventories and remove sorting requirement for Tokens and AllTokens queries | By - baedrik | On - 2021-09-15T19:08:18Z
 34. [b20..36d] clarification of mint_run | By - baedrik | On - 2021-08-20T20:27:41Z
 35. [cf6..de2] Merge pull request #2 from baedrik/royalty-mint-run | By - baedrik | On - 2021-08-20T05:01:00Z
 36. [22b..5f3] README spacing | By - baedrik | On - 2021-08-20T04:38:56Z
 37. [6f8..280] query a token's or the default RoyaltyInfo and update README for RoyaltyInfo and MintRunInfo use | By - baedrik | On - 2021-08-20T04:16:34Z
 38. [935..f97] add MintNftClones and unit tests for MintRunInfo | By - baedrik | On - 2021-08-17T20:46:20Z
 39. [f6d..e09] add default royalties and royalty unit testing | By - baedrik | On - 2021-08-16T21:18:41Z
 40. [6f1..06f] allow SetRoyaltyInfo to delete existing royalties | By - baedrik | On - 2021-07-14T03:12:21Z
 41. [efb..2a0] royalties and mint run info | By - baedrik | On - 2021-07-12T18:00:37Z
 42. [d0d..bcf] add tx history total, blocktime, and merge setmetadata functions | By - baedrik | On - 2021-06-12T04:12:13Z
 43. [e06..e68] change id block size | By - baedrik | On - 2021-05-10T04:50:37Z
 44. [94f..b08] new id block size | By - baedrik | On - 2021-05-10T01:15:34Z
 45. [79c..463] optimize gas cost of id list | By - baedrik | On - 2021-05-09T22:55:00Z
 46. [15f..ee8] tx storage update | By - baedrik | On - 2021-04-11T04:51:22Z
 47. [205..1d5] mint log update | By - baedrik | On - 2021-04-06T11:58:53Z
 48. [f8c..bcb] update verifytransferapproval field name | By - baedrik | On - 2021-04-05T17:37:12Z
 49. [ed2..09a] readme update | By - baedrik | On - 2021-04-03T21:11:16Z
 50. [894..1e5] readme update | By - baedrik | On - 2021-04-03T20:56:05Z

# vesting-claim

## claimer


 1. [b0a..0da] fixing | By - ronyXnes | On - 2022-05-31T14:17:32Z
 2. [ff3..f4c] to ether | By - ronyXnes | On - 2022-05-31T13:32:10Z
 3. [530..5a1] mainet config | By - ronyXnes | On - 2022-05-31T13:23:21Z
 4. [584..13d] after claim html | By - ronyXnes | On - 2022-05-30T15:43:14Z
 5. [090..483] new contract | By - ronyXnes | On - 2022-05-30T15:03:23Z
 6. [a26..a25] display deposit | By - ronyXnes | On - 2022-05-30T14:59:25Z
 7. [1eb..7ce] claim deposit back | By - ronyXnes | On - 2022-05-30T14:58:44Z
 8. [936..639] testnet chain id | By - ronyXnes | On - 2022-05-30T14:57:35Z
 9. [7dd..5fe] contract address new | By - ronyXnes | On - 2022-05-30T14:57:17Z
 10. [d03..988] prettier | By - ronyXnes | On - 2022-05-30T11:46:37Z
 11. [df6..3d3] initaite claimer contract | By - ronyXnes | On - 2022-05-30T11:45:56Z
 12. [0df..350] discard claimer json | By - ronyXnes | On - 2022-05-30T11:43:59Z
 13. [e20..c84] claimer abi | By - ronyXnes | On - 2022-05-30T11:43:41Z
 14. [cc1..96b] laomer abi | By - ronyXnes | On - 2022-05-30T11:43:23Z
 15. [aec..fe7] added title and address | By - ronyXnes | On - 2022-05-30T10:12:50Z
 16. [d8d..d0b] claimer abi | By - ronyXnes | On - 2022-05-30T10:11:49Z
 17. [8cb..a57] a | By - Ruby Edelstein | On - 2022-05-30T07:04:26Z

## main


 1. [81f..64e] Merge pull request #2 from XP-NETWORK/claimer | By - rony derra | On - 2022-05-31T14:25:15Z
 2. [b0a..0da] fixing | By - ronyXnes | On - 2022-05-31T14:17:32Z
 3. [ac7..863] Merge pull request #1 from XP-NETWORK/claimer | By - rony derra | On - 2022-05-31T13:34:01Z
 4. [ff3..f4c] to ether | By - ronyXnes | On - 2022-05-31T13:32:10Z
 5. [530..5a1] mainet config | By - ronyXnes | On - 2022-05-31T13:23:21Z
 6. [584..13d] after claim html | By - ronyXnes | On - 2022-05-30T15:43:14Z
 7. [090..483] new contract | By - ronyXnes | On - 2022-05-30T15:03:23Z
 8. [a26..a25] display deposit | By - ronyXnes | On - 2022-05-30T14:59:25Z
 9. [1eb..7ce] claim deposit back | By - ronyXnes | On - 2022-05-30T14:58:44Z
 10. [936..639] testnet chain id | By - ronyXnes | On - 2022-05-30T14:57:35Z
 11. [7dd..5fe] contract address new | By - ronyXnes | On - 2022-05-30T14:57:17Z
 12. [d03..988] prettier | By - ronyXnes | On - 2022-05-30T11:46:37Z
 13. [df6..3d3] initaite claimer contract | By - ronyXnes | On - 2022-05-30T11:45:56Z
 14. [0df..350] discard claimer json | By - ronyXnes | On - 2022-05-30T11:43:59Z
 15. [e20..c84] claimer abi | By - ronyXnes | On - 2022-05-30T11:43:41Z
 16. [cc1..96b] laomer abi | By - ronyXnes | On - 2022-05-30T11:43:23Z
 17. [aec..fe7] added title and address | By - ronyXnes | On - 2022-05-30T10:12:50Z
 18. [d8d..d0b] claimer abi | By - ronyXnes | On - 2022-05-30T10:11:49Z
 19. [8cb..a57] a | By - Ruby Edelstein | On - 2022-05-30T07:04:26Z

# xpnft_auto_deployer

## master


 1. [b17..af2] added gas amount and price to telegram message | By - Or Kilim | On - 2022-05-17T15:42:14Z
 2. [263..58c] added ownership transfer functionality and a bot message with it, changed the original deployer message so the opensea won't show a huge picture in telegram near the link | By - Or Kilim | On - 2022-05-17T13:47:39Z
 3. [f85..05b] changed the telegram bot message | By - Or Kilim | On - 2022-05-17T13:02:14Z
 4. [e93..726] added a line in the readme file | By - Or Kilim | On - 2022-05-17T12:40:18Z
 5. [de3..cb2] added telegram bot | By - Or Kilim | On - 2022-05-17T11:22:14Z
 6. [0c5..1ca] pushing to xp_network private repo, added instructions | By - Or Kilim | On - 2022-05-17T09:08:20Z
 7. [dfa..0e0] able to switch networks after choosing from autocomplete, and able to add networks with manually added rpc url | By - Or Kilim | On - 2022-05-17T08:52:43Z
 8. [6af..107] initial commit | By - Or Kilim | On - 2022-05-16T13:25:24Z
 9. [bd3..a03] Initialize project using Create React App | By - Or Kilim | On - 2022-05-16T08:18:16Z

# advancedSolutions

## main


 1. [c36..909] change pics | By - AlexeyAdoniev | On - 2022-05-09T13:37:10Z
 2. [94a..5f9] meta text | By - AlexeyAdoniev | On - 2022-05-08T21:08:32Z
 3. [f44..349] bugs fix and phone number | By - AlexeyAdoniev | On - 2022-05-08T18:07:17Z
 4. [b96..e9f] fix forms | By - Alex Moshinsky | On - 2022-05-08T16:58:48Z
 5. [392..2a1] remove gitignore files | By - AlexeyAdoniev | On - 2022-05-08T15:51:06Z
 6. [122..36d] initial | By - AlexeyAdoniev | On - 2022-05-08T15:40:22Z

# deploying-vechain

## main


 1. [b88..a7d] initial commit | By - Dima Brook | On - 2022-05-03T10:43:36Z

# token-sc-observer

## dev


 1. [6c7..9f9] multi delete for contacts and notifs | By - AlexeyAdoniev | On - 2022-02-19T22:45:42Z
 2. [6f8..af2] test commit | By - AlexeyAdoniev | On - 2022-02-15T07:50:32Z
 3. [be3..463] testy | By - AlexeyAdoniev | On - 2022-02-13T06:18:48Z
 4. [8cd..915] unknown token | By - AlexeyAdoniev | On - 2022-02-10T07:45:33Z
 5. [b4f..274] Contact service update fix | By - AlexeyAdoniev | On - 2022-02-09T08:03:32Z
 6. [3dd..b74] new Route getIndex | By - AlexeyAdoniev | On - 2022-02-07T18:53:25Z
 7. [eae..1c7] contacts save validation | By - AlexeyAdoniev | On - 2022-02-06T21:58:53Z
 8. [38c..6f9] qcount query for transactions | By - AlexeyAdoniev | On - 2022-02-02T19:00:19Z
 9. [6cc..cfc] pagination skip | By - AlexeyAdoniev | On - 2022-01-29T22:19:25Z
 10. [9d4..c27] request flib changed to Request, tests for user flow | By - AlexeyAdoniev | On - 2022-01-23T17:51:45Z
 11. [a6d..e74] refactor to get table data with request | By - AlexeyAdoniev | On - 2022-01-23T06:26:47Z
 12. [072..0bd] limit or contact notif condition | By - AlexeyAdoniev | On - 2022-01-20T12:01:03Z
 13. [1df..217] stop conditions on younger date transaction | By - AlexeyAdoniev | On - 2022-01-20T10:42:32Z
 14. [5a2..801] file rename | By - yura | On - 2022-01-20T07:26:18Z
 15. [707..f54] added age check | By - AlexeyAdoniev | On - 2022-01-19T18:11:12Z
 16. [9e2..63c] timeDiff check before notification, check if scrapped Hash null or scrappedData.length > 100 | By - AlexeyAdoniev | On - 2022-01-19T13:57:31Z
 17. [93c..cd4] notifier buisness logic change, seperate token price request | By - AlexeyAdoniev | On - 2022-01-18T09:49:27Z
 18. [327..60b] transaction filters and serach | By - AlexeyAdoniev | On - 2022-01-16T14:10:48Z
 19. [bfc..c1f] a | By - AlexeyAdoniev | On - 2022-01-10T19:17:16Z
 20. [7a4..7d0] fix tsc bugs | By - AlexeyAdoniev | On - 2022-01-09T15:52:46Z
 21. [9ed..ddb] user settings added to backoffice | By - AlexeyAdoniev | On - 2022-01-09T15:37:38Z
 22. [312..12c] transactions filters and sort api, change notifications get query | By - AlexeyAdoniev | On - 2022-01-08T23:48:44Z
 23. [95e..92c] filtering querying in Transaction Service | By - AlexeyAdoniev | On - 2022-01-06T18:26:42Z
 24. [143..fe2] notifications fire logic | By - AlexeyAdoniev | On - 2022-01-02T15:00:34Z
 25. [064..7f5] Services refactor | By - AlexeyAdoniev | On - 2022-01-01T23:01:21Z
 26. [4de..36b] contact CRUD logic(unique, required fields), bug fixes, import from csv change to insertMany | By - AlexeyAdoniev | On - 2021-12-30T17:59:54Z
 27. [da5..227] export/import from csv file | By - AlexeyAdoniev | On - 2021-12-29T18:42:44Z
 28. [379..d42] added contacts field to Notifications schema | By - AlexeyAdoniev | On - 2021-12-28T17:58:09Z
 29. [d55..bd1] Translaion description added | By - AlexeyAdoniev | On - 2021-12-28T12:19:22Z
 30. [2a1..78c] token actication in backOffice | By - AlexeyAdoniev | On - 2021-12-27T18:37:40Z
 31. [7e2..7e8] bug with adding same token to one org | By - AlexeyAdoniev | On - 2021-12-27T11:58:20Z
 32. [826..389] backoffice add molda window, org removal, components code refactor | By - AlexeyAdoniev | On - 2021-12-27T09:36:01Z
 33. [2b7..732] backOffice bug fix with same username, Method scenario model | By - AlexeyAdoniev | On - 2021-12-26T18:33:04Z
 34. [6dc..71d] fix bug with Notifer Contact name | By - AlexeyAdoniev | On - 2021-12-26T12:45:25Z
 35. [3c3..11b] bug fix with lower case address | By - AlexeyAdoniev | On - 2021-12-26T12:41:28Z
 36. [afe..d62] Data mapper deletion | By - AlexeyAdoniev | On - 2021-12-25T23:14:46Z
 37. [d36..38b] main function, scraper - added error handling, fixed bug with repeated scraping | By - AlexeyAdoniev | On - 2021-12-25T23:07:18Z
 38. [cb3..224] data build scraper | By - AlexeyAdoniev | On - 2021-12-23T14:18:05Z
 39. [51f..e98] proxy anonymizeProxy | By - AlexeyAdoniev | On - 2021-12-23T10:11:00Z
 40. [8a8..0a1] puppeteer config | By - AlexeyAdoniev | On - 2021-12-23T09:45:58Z
 41. [8fe..2ed] node env | By - AlexeyAdoniev | On - 2021-12-23T09:12:52Z
 42. [4ad..f28] proxy ENV credentials | By - AlexeyAdoniev | On - 2021-12-23T08:37:02Z
 43. [abd..058] puppeteer proxy added + Token active field | By - AlexeyAdoniev | On - 2021-12-23T07:51:06Z
 44. [649..27e] bug with url fixed | By - AlexeyAdoniev | On - 2021-12-22T17:28:30Z
 45. [1b8..214] statuc route for backoffice | By - AlexeyAdoniev | On - 2021-12-22T17:22:01Z
 46. [b51..5d5] track build | By - AlexeyAdoniev | On - 2021-12-22T15:33:08Z
 47. [a6b..4e3] delete nested repo | By - AlexeyAdoniev | On - 2021-12-22T15:22:11Z
 48. [4db..9f1] update backoffice | By - AlexeyAdoniev | On - 2021-12-22T15:01:12Z
 49. [cf9..fcc] build script fix | By - AlexeyAdoniev | On - 2021-12-22T14:03:43Z
 50. [0b4..f5e] deploy fix | By - AlexeyAdoniev | On - 2021-12-22T13:52:31Z

## lostTrx


 1. [19d..b9b] scap velas | By - AlexeyAdoniev | On - 2022-05-03T10:08:03Z
 2. [6d7..1b5] error reject | By - AlexeyAdoniev | On - 2022-02-15T14:12:48Z
 3. [7a8..f75] Root type cheerio | By - AlexeyAdoniev | On - 2022-02-15T13:29:50Z
 4. [3bc..be7] update bot settings | By - AlexeyAdoniev | On - 2022-02-15T08:59:45Z
 5. [c30..352] scrap settings | By - AlexeyAdoniev | On - 2022-02-13T09:54:37Z
 6. [26a..226] puppeteer to request | By - AlexeyAdoniev | On - 2022-02-13T09:42:06Z
 7. [b09..049] merge with main | By - AlexeyAdoniev | On - 2022-02-13T08:08:36Z
 8. [367..f9f] Etherscan scrap add age prop | By - yura | On - 2022-02-12T19:41:20Z
 9. [ce9..b1b] package.json | By - AlexeyAdoniev | On - 2022-02-01T17:51:25Z
 10. [691..f6c] ts bug fix | By - AlexeyAdoniev | On - 2022-02-01T17:49:52Z
 11. [e57..078] console.log() remove | By - AlexeyAdoniev | On - 2022-02-01T17:46:43Z
 12. [2b3..2e6] new page -> new lastHash bug fixed | By - AlexeyAdoniev | On - 2022-02-01T17:44:47Z
 13. [339..4e2] fix bug with dublicated disperse token | By - AlexeyAdoniev | On - 2022-02-01T17:07:40Z
 14. [2d8..b23] fix bug with undefined lastRow | By - AlexeyAdoniev | On - 2022-02-01T17:04:36Z
 15. [63b..adc] dublicates check before notif | By - AlexeyAdoniev | On - 2022-02-01T16:29:38Z
 16. [a6d..e74] refactor to get table data with request | By - AlexeyAdoniev | On - 2022-01-23T06:26:47Z
 17. [072..0bd] limit or contact notif condition | By - AlexeyAdoniev | On - 2022-01-20T12:01:03Z
 18. [1df..217] stop conditions on younger date transaction | By - AlexeyAdoniev | On - 2022-01-20T10:42:32Z
 19. [5a2..801] file rename | By - yura | On - 2022-01-20T07:26:18Z
 20. [707..f54] added age check | By - AlexeyAdoniev | On - 2022-01-19T18:11:12Z
 21. [9e2..63c] timeDiff check before notification, check if scrapped Hash null or scrappedData.length > 100 | By - AlexeyAdoniev | On - 2022-01-19T13:57:31Z
 22. [93c..cd4] notifier buisness logic change, seperate token price request | By - AlexeyAdoniev | On - 2022-01-18T09:49:27Z
 23. [327..60b] transaction filters and serach | By - AlexeyAdoniev | On - 2022-01-16T14:10:48Z
 24. [bfc..c1f] a | By - AlexeyAdoniev | On - 2022-01-10T19:17:16Z
 25. [7a4..7d0] fix tsc bugs | By - AlexeyAdoniev | On - 2022-01-09T15:52:46Z
 26. [9ed..ddb] user settings added to backoffice | By - AlexeyAdoniev | On - 2022-01-09T15:37:38Z
 27. [312..12c] transactions filters and sort api, change notifications get query | By - AlexeyAdoniev | On - 2022-01-08T23:48:44Z
 28. [95e..92c] filtering querying in Transaction Service | By - AlexeyAdoniev | On - 2022-01-06T18:26:42Z
 29. [143..fe2] notifications fire logic | By - AlexeyAdoniev | On - 2022-01-02T15:00:34Z
 30. [064..7f5] Services refactor | By - AlexeyAdoniev | On - 2022-01-01T23:01:21Z
 31. [4de..36b] contact CRUD logic(unique, required fields), bug fixes, import from csv change to insertMany | By - AlexeyAdoniev | On - 2021-12-30T17:59:54Z
 32. [da5..227] export/import from csv file | By - AlexeyAdoniev | On - 2021-12-29T18:42:44Z
 33. [379..d42] added contacts field to Notifications schema | By - AlexeyAdoniev | On - 2021-12-28T17:58:09Z
 34. [d55..bd1] Translaion description added | By - AlexeyAdoniev | On - 2021-12-28T12:19:22Z
 35. [2a1..78c] token actication in backOffice | By - AlexeyAdoniev | On - 2021-12-27T18:37:40Z
 36. [7e2..7e8] bug with adding same token to one org | By - AlexeyAdoniev | On - 2021-12-27T11:58:20Z
 37. [826..389] backoffice add molda window, org removal, components code refactor | By - AlexeyAdoniev | On - 2021-12-27T09:36:01Z
 38. [2b7..732] backOffice bug fix with same username, Method scenario model | By - AlexeyAdoniev | On - 2021-12-26T18:33:04Z
 39. [6dc..71d] fix bug with Notifer Contact name | By - AlexeyAdoniev | On - 2021-12-26T12:45:25Z
 40. [3c3..11b] bug fix with lower case address | By - AlexeyAdoniev | On - 2021-12-26T12:41:28Z
 41. [afe..d62] Data mapper deletion | By - AlexeyAdoniev | On - 2021-12-25T23:14:46Z
 42. [d36..38b] main function, scraper - added error handling, fixed bug with repeated scraping | By - AlexeyAdoniev | On - 2021-12-25T23:07:18Z
 43. [cb3..224] data build scraper | By - AlexeyAdoniev | On - 2021-12-23T14:18:05Z
 44. [51f..e98] proxy anonymizeProxy | By - AlexeyAdoniev | On - 2021-12-23T10:11:00Z
 45. [8a8..0a1] puppeteer config | By - AlexeyAdoniev | On - 2021-12-23T09:45:58Z
 46. [8fe..2ed] node env | By - AlexeyAdoniev | On - 2021-12-23T09:12:52Z
 47. [4ad..f28] proxy ENV credentials | By - AlexeyAdoniev | On - 2021-12-23T08:37:02Z
 48. [abd..058] puppeteer proxy added + Token active field | By - AlexeyAdoniev | On - 2021-12-23T07:51:06Z
 49. [649..27e] bug with url fixed | By - AlexeyAdoniev | On - 2021-12-22T17:28:30Z
 50. [1b8..214] statuc route for backoffice | By - AlexeyAdoniev | On - 2021-12-22T17:22:01Z

## main


 1. [6d7..1b5] error reject | By - AlexeyAdoniev | On - 2022-02-15T14:12:48Z
 2. [7a8..f75] Root type cheerio | By - AlexeyAdoniev | On - 2022-02-15T13:29:50Z
 3. [3bc..be7] update bot settings | By - AlexeyAdoniev | On - 2022-02-15T08:59:45Z
 4. [c30..352] scrap settings | By - AlexeyAdoniev | On - 2022-02-13T09:54:37Z
 5. [26a..226] puppeteer to request | By - AlexeyAdoniev | On - 2022-02-13T09:42:06Z
 6. [b09..049] merge with main | By - AlexeyAdoniev | On - 2022-02-13T08:08:36Z
 7. [367..f9f] Etherscan scrap add age prop | By - yura | On - 2022-02-12T19:41:20Z
 8. [ce9..b1b] package.json | By - AlexeyAdoniev | On - 2022-02-01T17:51:25Z
 9. [691..f6c] ts bug fix | By - AlexeyAdoniev | On - 2022-02-01T17:49:52Z
 10. [e57..078] console.log() remove | By - AlexeyAdoniev | On - 2022-02-01T17:46:43Z
 11. [2b3..2e6] new page -> new lastHash bug fixed | By - AlexeyAdoniev | On - 2022-02-01T17:44:47Z
 12. [339..4e2] fix bug with dublicated disperse token | By - AlexeyAdoniev | On - 2022-02-01T17:07:40Z
 13. [2d8..b23] fix bug with undefined lastRow | By - AlexeyAdoniev | On - 2022-02-01T17:04:36Z
 14. [63b..adc] dublicates check before notif | By - AlexeyAdoniev | On - 2022-02-01T16:29:38Z
 15. [a6d..e74] refactor to get table data with request | By - AlexeyAdoniev | On - 2022-01-23T06:26:47Z
 16. [072..0bd] limit or contact notif condition | By - AlexeyAdoniev | On - 2022-01-20T12:01:03Z
 17. [1df..217] stop conditions on younger date transaction | By - AlexeyAdoniev | On - 2022-01-20T10:42:32Z
 18. [5a2..801] file rename | By - yura | On - 2022-01-20T07:26:18Z
 19. [707..f54] added age check | By - AlexeyAdoniev | On - 2022-01-19T18:11:12Z
 20. [9e2..63c] timeDiff check before notification, check if scrapped Hash null or scrappedData.length > 100 | By - AlexeyAdoniev | On - 2022-01-19T13:57:31Z
 21. [93c..cd4] notifier buisness logic change, seperate token price request | By - AlexeyAdoniev | On - 2022-01-18T09:49:27Z
 22. [327..60b] transaction filters and serach | By - AlexeyAdoniev | On - 2022-01-16T14:10:48Z
 23. [bfc..c1f] a | By - AlexeyAdoniev | On - 2022-01-10T19:17:16Z
 24. [7a4..7d0] fix tsc bugs | By - AlexeyAdoniev | On - 2022-01-09T15:52:46Z
 25. [9ed..ddb] user settings added to backoffice | By - AlexeyAdoniev | On - 2022-01-09T15:37:38Z
 26. [312..12c] transactions filters and sort api, change notifications get query | By - AlexeyAdoniev | On - 2022-01-08T23:48:44Z
 27. [95e..92c] filtering querying in Transaction Service | By - AlexeyAdoniev | On - 2022-01-06T18:26:42Z
 28. [143..fe2] notifications fire logic | By - AlexeyAdoniev | On - 2022-01-02T15:00:34Z
 29. [064..7f5] Services refactor | By - AlexeyAdoniev | On - 2022-01-01T23:01:21Z
 30. [4de..36b] contact CRUD logic(unique, required fields), bug fixes, import from csv change to insertMany | By - AlexeyAdoniev | On - 2021-12-30T17:59:54Z
 31. [da5..227] export/import from csv file | By - AlexeyAdoniev | On - 2021-12-29T18:42:44Z
 32. [379..d42] added contacts field to Notifications schema | By - AlexeyAdoniev | On - 2021-12-28T17:58:09Z
 33. [d55..bd1] Translaion description added | By - AlexeyAdoniev | On - 2021-12-28T12:19:22Z
 34. [2a1..78c] token actication in backOffice | By - AlexeyAdoniev | On - 2021-12-27T18:37:40Z
 35. [7e2..7e8] bug with adding same token to one org | By - AlexeyAdoniev | On - 2021-12-27T11:58:20Z
 36. [826..389] backoffice add molda window, org removal, components code refactor | By - AlexeyAdoniev | On - 2021-12-27T09:36:01Z
 37. [2b7..732] backOffice bug fix with same username, Method scenario model | By - AlexeyAdoniev | On - 2021-12-26T18:33:04Z
 38. [6dc..71d] fix bug with Notifer Contact name | By - AlexeyAdoniev | On - 2021-12-26T12:45:25Z
 39. [3c3..11b] bug fix with lower case address | By - AlexeyAdoniev | On - 2021-12-26T12:41:28Z
 40. [afe..d62] Data mapper deletion | By - AlexeyAdoniev | On - 2021-12-25T23:14:46Z
 41. [d36..38b] main function, scraper - added error handling, fixed bug with repeated scraping | By - AlexeyAdoniev | On - 2021-12-25T23:07:18Z
 42. [cb3..224] data build scraper | By - AlexeyAdoniev | On - 2021-12-23T14:18:05Z
 43. [51f..e98] proxy anonymizeProxy | By - AlexeyAdoniev | On - 2021-12-23T10:11:00Z
 44. [8a8..0a1] puppeteer config | By - AlexeyAdoniev | On - 2021-12-23T09:45:58Z
 45. [8fe..2ed] node env | By - AlexeyAdoniev | On - 2021-12-23T09:12:52Z
 46. [4ad..f28] proxy ENV credentials | By - AlexeyAdoniev | On - 2021-12-23T08:37:02Z
 47. [abd..058] puppeteer proxy added + Token active field | By - AlexeyAdoniev | On - 2021-12-23T07:51:06Z
 48. [649..27e] bug with url fixed | By - AlexeyAdoniev | On - 2021-12-22T17:28:30Z
 49. [1b8..214] statuc route for backoffice | By - AlexeyAdoniev | On - 2021-12-22T17:22:01Z
 50. [b51..5d5] track build | By - AlexeyAdoniev | On - 2021-12-22T15:33:08Z

## stable


 1. [367..f9f] Etherscan scrap add age prop | By - yura | On - 2022-02-12T19:41:20Z
 2. [ce9..b1b] package.json | By - AlexeyAdoniev | On - 2022-02-01T17:51:25Z
 3. [691..f6c] ts bug fix | By - AlexeyAdoniev | On - 2022-02-01T17:49:52Z
 4. [e57..078] console.log() remove | By - AlexeyAdoniev | On - 2022-02-01T17:46:43Z
 5. [2b3..2e6] new page -> new lastHash bug fixed | By - AlexeyAdoniev | On - 2022-02-01T17:44:47Z
 6. [339..4e2] fix bug with dublicated disperse token | By - AlexeyAdoniev | On - 2022-02-01T17:07:40Z
 7. [2d8..b23] fix bug with undefined lastRow | By - AlexeyAdoniev | On - 2022-02-01T17:04:36Z
 8. [63b..adc] dublicates check before notif | By - AlexeyAdoniev | On - 2022-02-01T16:29:38Z
 9. [072..0bd] limit or contact notif condition | By - AlexeyAdoniev | On - 2022-01-20T12:01:03Z
 10. [1df..217] stop conditions on younger date transaction | By - AlexeyAdoniev | On - 2022-01-20T10:42:32Z
 11. [5a2..801] file rename | By - yura | On - 2022-01-20T07:26:18Z
 12. [707..f54] added age check | By - AlexeyAdoniev | On - 2022-01-19T18:11:12Z
 13. [9e2..63c] timeDiff check before notification, check if scrapped Hash null or scrappedData.length > 100 | By - AlexeyAdoniev | On - 2022-01-19T13:57:31Z
 14. [93c..cd4] notifier buisness logic change, seperate token price request | By - AlexeyAdoniev | On - 2022-01-18T09:49:27Z
 15. [327..60b] transaction filters and serach | By - AlexeyAdoniev | On - 2022-01-16T14:10:48Z
 16. [bfc..c1f] a | By - AlexeyAdoniev | On - 2022-01-10T19:17:16Z
 17. [7a4..7d0] fix tsc bugs | By - AlexeyAdoniev | On - 2022-01-09T15:52:46Z
 18. [9ed..ddb] user settings added to backoffice | By - AlexeyAdoniev | On - 2022-01-09T15:37:38Z
 19. [312..12c] transactions filters and sort api, change notifications get query | By - AlexeyAdoniev | On - 2022-01-08T23:48:44Z
 20. [95e..92c] filtering querying in Transaction Service | By - AlexeyAdoniev | On - 2022-01-06T18:26:42Z
 21. [143..fe2] notifications fire logic | By - AlexeyAdoniev | On - 2022-01-02T15:00:34Z
 22. [064..7f5] Services refactor | By - AlexeyAdoniev | On - 2022-01-01T23:01:21Z
 23. [4de..36b] contact CRUD logic(unique, required fields), bug fixes, import from csv change to insertMany | By - AlexeyAdoniev | On - 2021-12-30T17:59:54Z
 24. [da5..227] export/import from csv file | By - AlexeyAdoniev | On - 2021-12-29T18:42:44Z
 25. [379..d42] added contacts field to Notifications schema | By - AlexeyAdoniev | On - 2021-12-28T17:58:09Z
 26. [d55..bd1] Translaion description added | By - AlexeyAdoniev | On - 2021-12-28T12:19:22Z
 27. [2a1..78c] token actication in backOffice | By - AlexeyAdoniev | On - 2021-12-27T18:37:40Z
 28. [7e2..7e8] bug with adding same token to one org | By - AlexeyAdoniev | On - 2021-12-27T11:58:20Z
 29. [826..389] backoffice add molda window, org removal, components code refactor | By - AlexeyAdoniev | On - 2021-12-27T09:36:01Z
 30. [2b7..732] backOffice bug fix with same username, Method scenario model | By - AlexeyAdoniev | On - 2021-12-26T18:33:04Z
 31. [6dc..71d] fix bug with Notifer Contact name | By - AlexeyAdoniev | On - 2021-12-26T12:45:25Z
 32. [3c3..11b] bug fix with lower case address | By - AlexeyAdoniev | On - 2021-12-26T12:41:28Z
 33. [afe..d62] Data mapper deletion | By - AlexeyAdoniev | On - 2021-12-25T23:14:46Z
 34. [d36..38b] main function, scraper - added error handling, fixed bug with repeated scraping | By - AlexeyAdoniev | On - 2021-12-25T23:07:18Z
 35. [cb3..224] data build scraper | By - AlexeyAdoniev | On - 2021-12-23T14:18:05Z
 36. [51f..e98] proxy anonymizeProxy | By - AlexeyAdoniev | On - 2021-12-23T10:11:00Z
 37. [8a8..0a1] puppeteer config | By - AlexeyAdoniev | On - 2021-12-23T09:45:58Z
 38. [8fe..2ed] node env | By - AlexeyAdoniev | On - 2021-12-23T09:12:52Z
 39. [4ad..f28] proxy ENV credentials | By - AlexeyAdoniev | On - 2021-12-23T08:37:02Z
 40. [abd..058] puppeteer proxy added + Token active field | By - AlexeyAdoniev | On - 2021-12-23T07:51:06Z
 41. [649..27e] bug with url fixed | By - AlexeyAdoniev | On - 2021-12-22T17:28:30Z
 42. [1b8..214] statuc route for backoffice | By - AlexeyAdoniev | On - 2021-12-22T17:22:01Z
 43. [b51..5d5] track build | By - AlexeyAdoniev | On - 2021-12-22T15:33:08Z
 44. [a6b..4e3] delete nested repo | By - AlexeyAdoniev | On - 2021-12-22T15:22:11Z
 45. [4db..9f1] update backoffice | By - AlexeyAdoniev | On - 2021-12-22T15:01:12Z
 46. [cf9..fcc] build script fix | By - AlexeyAdoniev | On - 2021-12-22T14:03:43Z
 47. [0b4..f5e] deploy fix | By - AlexeyAdoniev | On - 2021-12-22T13:52:31Z
 48. [d85..848] deplot bug fix | By - AlexeyAdoniev | On - 2021-12-22T13:50:17Z
 49. [ac6..463] fdf | By - AlexeyAdoniev | On - 2021-12-22T13:28:43Z
 50. [6aa..e91] backOffice Route | By - AlexeyAdoniev | On - 2021-12-22T13:21:43Z

## staging


 1. [49d..e99] Merge branch 'dev' of https://github.com/xp-network/token-sc-observer into staging | By - AlexeyAdoniev | On - 2022-02-20T09:19:16Z
 2. [6c7..9f9] multi delete for contacts and notifs | By - AlexeyAdoniev | On - 2022-02-19T22:45:42Z
 3. [6f8..af2] test commit | By - AlexeyAdoniev | On - 2022-02-15T07:50:32Z
 4. [be3..463] testy | By - AlexeyAdoniev | On - 2022-02-13T06:18:48Z
 5. [466..209] Merge branch 'dev' into staging | By - AlexeyAdoniev | On - 2022-02-10T07:45:48Z
 6. [8cd..915] unknown token | By - AlexeyAdoniev | On - 2022-02-10T07:45:33Z
 7. [0d1..8b0] Merge branch 'dev' into staging | By - AlexeyAdoniev | On - 2022-02-09T08:03:56Z
 8. [b4f..274] Contact service update fix | By - AlexeyAdoniev | On - 2022-02-09T08:03:32Z
 9. [3dd..b74] new Route getIndex | By - AlexeyAdoniev | On - 2022-02-07T18:53:25Z
 10. [35f..a82] merge with dev branch | By - AlexeyAdoniev | On - 2022-02-06T22:13:23Z
 11. [20c..57b] Merge branch 'dev' into staging | By - AlexeyAdoniev | On - 2022-02-06T22:05:18Z
 12. [eae..1c7] contacts save validation | By - AlexeyAdoniev | On - 2022-02-06T21:58:53Z
 13. [38c..6f9] qcount query for transactions | By - AlexeyAdoniev | On - 2022-02-02T19:00:19Z
 14. [6cc..cfc] pagination skip | By - AlexeyAdoniev | On - 2022-01-29T22:19:25Z
 15. [9d4..c27] request flib changed to Request, tests for user flow | By - AlexeyAdoniev | On - 2022-01-23T17:51:45Z
 16. [a6d..e74] refactor to get table data with request | By - AlexeyAdoniev | On - 2022-01-23T06:26:47Z
 17. [072..0bd] limit or contact notif condition | By - AlexeyAdoniev | On - 2022-01-20T12:01:03Z
 18. [1df..217] stop conditions on younger date transaction | By - AlexeyAdoniev | On - 2022-01-20T10:42:32Z
 19. [5a2..801] file rename | By - yura | On - 2022-01-20T07:26:18Z
 20. [707..f54] added age check | By - AlexeyAdoniev | On - 2022-01-19T18:11:12Z
 21. [9e2..63c] timeDiff check before notification, check if scrapped Hash null or scrappedData.length > 100 | By - AlexeyAdoniev | On - 2022-01-19T13:57:31Z
 22. [93c..cd4] notifier buisness logic change, seperate token price request | By - AlexeyAdoniev | On - 2022-01-18T09:49:27Z
 23. [0e5..b2a] transaction filters and serach | By - AlexeyAdoniev | On - 2022-01-16T14:11:38Z
 24. [327..60b] transaction filters and serach | By - AlexeyAdoniev | On - 2022-01-16T14:10:48Z
 25. [bfc..c1f] a | By - AlexeyAdoniev | On - 2022-01-10T19:17:16Z
 26. [7a4..7d0] fix tsc bugs | By - AlexeyAdoniev | On - 2022-01-09T15:52:46Z
 27. [9ed..ddb] user settings added to backoffice | By - AlexeyAdoniev | On - 2022-01-09T15:37:38Z
 28. [312..12c] transactions filters and sort api, change notifications get query | By - AlexeyAdoniev | On - 2022-01-08T23:48:44Z
 29. [95e..92c] filtering querying in Transaction Service | By - AlexeyAdoniev | On - 2022-01-06T18:26:42Z
 30. [143..fe2] notifications fire logic | By - AlexeyAdoniev | On - 2022-01-02T15:00:34Z
 31. [064..7f5] Services refactor | By - AlexeyAdoniev | On - 2022-01-01T23:01:21Z
 32. [4de..36b] contact CRUD logic(unique, required fields), bug fixes, import from csv change to insertMany | By - AlexeyAdoniev | On - 2021-12-30T17:59:54Z
 33. [da5..227] export/import from csv file | By - AlexeyAdoniev | On - 2021-12-29T18:42:44Z
 34. [379..d42] added contacts field to Notifications schema | By - AlexeyAdoniev | On - 2021-12-28T17:58:09Z
 35. [d55..bd1] Translaion description added | By - AlexeyAdoniev | On - 2021-12-28T12:19:22Z
 36. [2a1..78c] token actication in backOffice | By - AlexeyAdoniev | On - 2021-12-27T18:37:40Z
 37. [7e2..7e8] bug with adding same token to one org | By - AlexeyAdoniev | On - 2021-12-27T11:58:20Z
 38. [826..389] backoffice add molda window, org removal, components code refactor | By - AlexeyAdoniev | On - 2021-12-27T09:36:01Z
 39. [2b7..732] backOffice bug fix with same username, Method scenario model | By - AlexeyAdoniev | On - 2021-12-26T18:33:04Z
 40. [6dc..71d] fix bug with Notifer Contact name | By - AlexeyAdoniev | On - 2021-12-26T12:45:25Z
 41. [3c3..11b] bug fix with lower case address | By - AlexeyAdoniev | On - 2021-12-26T12:41:28Z
 42. [afe..d62] Data mapper deletion | By - AlexeyAdoniev | On - 2021-12-25T23:14:46Z
 43. [d36..38b] main function, scraper - added error handling, fixed bug with repeated scraping | By - AlexeyAdoniev | On - 2021-12-25T23:07:18Z
 44. [cb3..224] data build scraper | By - AlexeyAdoniev | On - 2021-12-23T14:18:05Z
 45. [76e..220] proxy anonymizeProxy | By - AlexeyAdoniev | On - 2021-12-23T10:12:30Z
 46. [51f..e98] proxy anonymizeProxy | By - AlexeyAdoniev | On - 2021-12-23T10:11:00Z
 47. [ea4..310] config puppeteer | By - AlexeyAdoniev | On - 2021-12-23T09:47:30Z
 48. [8a8..0a1] puppeteer config | By - AlexeyAdoniev | On - 2021-12-23T09:45:58Z
 49. [b96..d48] username and pass node env | By - AlexeyAdoniev | On - 2021-12-23T09:14:29Z
 50. [8fe..2ed] node env | By - AlexeyAdoniev | On - 2021-12-23T09:12:52Z

# XP.network-algorand-migration

## main


 1. [447..961] fix freeze_nft | By - rocalex | On - 2022-04-10T12:14:29Z
 2. [ef7..b4f] fix freeze_nft | By - rocalex | On - 2022-04-10T12:13:32Z
 3. [6d6..665] fix withdraw nft and add tests | By - rocalex | On - 2022-04-10T09:16:56Z
 4. [08a..bce] add payment txn when freeze | By - rocalex | On - 2022-04-08T15:29:32Z
 5. [0d0..4a5] remove tx_fee | By - rocalex | On - 2022-04-08T12:39:00Z
 6. [6a2..4d0] add tx_fee | By - rocalex | On - 2022-04-06T17:44:59Z
 7. [57f..565] recover on_validate | By - rocalex | On - 2022-04-06T14:30:19Z
 8. [e36..f18] changed action_cnt log | By - rocalex | On - 2022-04-06T01:52:03Z
 9. [8d1..f52] fix freeze_nft | By - rocalex | On - 2022-04-05T16:41:33Z
 10. [b3e..bfa] fix on_update, on_delete | By - rocalex | On - 2022-04-05T11:28:28Z
 11. [79e..9e5] change .env.example | By - rocalex | On - 2022-04-04T15:39:50Z
 12. [223..ec8] change asset_close_to to receiver | By - rocalex | On - 2022-04-04T15:35:25Z
 13. [b35..a65] add validator | By - rocalex | On - 2022-04-04T02:18:48Z
 14. [786..886] checking correct transactions | By - rocalex | On - 2022-04-03T16:40:23Z
 15. [b2d..c8d] fix freeze_nft/withdraw_nft | By - rocalex | On - 2022-03-31T10:09:28Z
 16. [e29..6e3] add tests | By - rocalex | On - 2022-03-28T06:56:59Z
 17. [6f1..07c] add multisig | By - rocalex | On - 2022-03-27T12:32:50Z
 18. [c40..549] add multisig | By - rocalex | On - 2022-03-27T12:29:26Z
 19. [474..903] fix on_freeze | By - rocalex | On - 2022-03-21T10:52:21Z
 20. [8e8..d86] fix contract | By - rocalex | On - 2022-02-27T02:59:49Z
 21. [8c1..2c1] add ed25519 | By - rocalex | On - 2022-02-23T12:54:43Z
 22. [b8c..d09] rename files | By - rocalex | On - 2022-02-22T08:06:30Z
 23. [e71..4da] destroy nft | By - rocalex | On - 2022-02-22T08:05:47Z
 24. [c23..b3c] transfer nft | By - rocalex | On - 2022-02-22T07:37:29Z
 25. [88f..c17] fix freeze/unfreeze | By - rocalex | On - 2022-02-22T06:10:06Z
 26. [378..ddc] withdraw fees | By - rocalex | On - 2022-02-22T03:10:43Z
 27. [e6b..6c7] change file names | By - rocalex | On - 2022-02-22T02:36:23Z
 28. [dd7..3ec] remove multisign when create/delete/upgrade | By - rocalex | On - 2022-02-22T02:16:26Z
 29. [2ae..abb] add pausing/unpausing & setting validator tests | By - Dima Brook | On - 2022-02-03T17:43:21Z
 30. [844..d13] Merge branch 'main' of https://github.com/XP-NETWORK/nft-bridge-algorand | By - rocalex | On - 2022-02-03T17:11:33Z
 31. [812..f72] add pause/unpause, set validator | By - rocalex | On - 2022-02-03T17:11:27Z
 32. [683..245] add testing SCs | By - Dima Brook | On - 2022-02-03T15:07:35Z
 33. [865..881] add: deployment output | By - Dima Brook | On - 2022-02-03T12:05:34Z
 34. [575..6f7] add .env.example | By - Dima Brook | On - 2022-02-03T11:04:52Z
 35. [0ab..374] add Readme | By - Dima Brook | On - 2022-02-03T10:18:58Z
 36. [ef4..8d9] transfer nft | By - rocalex | On - 2022-02-03T07:13:16Z
 37. [d96..8ef] freeze nft | By - rocalex | On - 2022-01-30T07:06:39Z
 38. [63a..3e1] algo -> evm | By - rocalex | On - 2022-01-26T13:45:39Z
 39. [413..c76] freeze_nft | By - rocalex | On - 2022-01-26T05:57:55Z
 40. [f26..d7a] add nft functions | By - rocalex | On - 2022-01-25T05:38:04Z
 41. [2da..4d8] add withdraw fees | By - rocalex | On - 2022-01-25T05:20:19Z
 42. [e79..2b7] first commit | By - rocalex | On - 2022-01-25T05:11:32Z

# validator-pinger

## master


 1. [226..505] chains: add support for gatechain | By - imsk17 | On - 2022-04-06T14:38:59Z
 2. [129..84e] fix yarn script | By - imsk17 | On - 2022-03-30T13:52:24Z
 3. [8de..f42] chains: add support for godwoken | By - imsk17 | On - 2022-03-30T13:43:27Z
 4. [76e..62c] cachedMassBalance: fetch balance during construction | By - rupansh | On - 2022-02-24T21:47:30Z
 5. [233..2de] fix: xda -> xdai | By - imsk17 | On - 2022-02-17T13:06:42Z
 6. [28d..047] feat: chains: web3: add aurora chain | By - imsk17 | On - 2022-02-06T13:20:12Z
 7. [a50..72f] feat(chains): add support for iotex and velas | By - imsk17 | On - 2022-01-23T14:50:56Z
 8. [747..053] initial tezos support | By - rupansh | On - 2022-01-18T16:23:35Z
 9. [4c4..1f2] cache status for 5000ms | By - rupansh | On - 2022-01-10T12:25:55Z
 10. [e1b..62f] fetch balances eagerly | By - rupansh | On - 2022-01-10T12:25:55Z
 11. [b63..f4a] deploy(heroku): add a procfile | By - imsk17 | On - 2022-01-02T08:37:19Z
 12. [312..677] feat(chains): add unique | By - imsk17 | On - 2021-12-21T13:59:21Z
 13. [26d..3ab] initial fuse support | By - rupansh | On - 2021-12-20T13:06:31Z
 14. [0e1..167] fix algorand derp | By - rupansh | On - 2021-12-08T09:43:28Z
 15. [074..154] config: fix env variables for balance | By - rupansh | On - 2021-12-08T09:29:10Z
 16. [b5c..7fe] .env.example: improve comments for algorand balances | By - rupansh | On - 2021-12-08T09:16:14Z
 17. [70b..780] initial algorand support | By - rupansh | On - 2021-12-08T09:15:29Z
 18. [30f..d5d] use minimum balance instead of 0 for balance checks | By - rupansh | On - 2021-12-08T08:50:18Z
 19. [5d9..60f] balance: cachedMassBalance: simplify | By - rupansh | On - 2021-12-04T20:18:22Z
 20. [fec..74f] balance: timeout after 10 seconds if node fails to respond | By - rupansh | On - 2021-12-04T20:16:31Z
 21. [390..489] fix node uri leakage in case of node error | By - rupansh | On - 2021-11-25T08:36:32Z
 22. [fc5..7f3] add mock mailer | By - rupansh | On - 2021-11-16T12:08:12Z
 23. [12e..e3b] config: add xDAI | By - rupansh | On - 2021-11-16T11:37:37Z
 24. [687..f30] .env.example: update | By - rupansh | On - 2021-11-14T16:15:02Z
 25. [ee9..65b] add nodemailer | By - rupansh | On - 2021-11-14T16:13:40Z
 26. [997..5a1] heartbeat: connect socket while instantiating | By - rupansh | On - 2021-11-14T14:30:03Z
 27. [08c..c76] minor fixes | By - rupansh | On - 2021-11-14T14:21:32Z
 28. [0e9..6e0] status: properly return json response | By - rupansh | On - 2021-11-14T13:19:01Z
 29. [822..e3b] gitignore: add .env | By - rupansh | On - 2021-11-14T13:12:52Z
 30. [fdc..dde] initial status route | By - rupansh | On - 2021-11-14T13:00:44Z
 31. [39f..d8c] initial import | By - rupansh | On - 2021-11-07T15:51:08Z

# web-endpoints

## master


 1. [f06..a9e] fix | By - Rishabh Kumar | On - 2022-04-05T10:06:52Z
 2. [4c1..cd1] Merge branch 'master' of github.com:XP-NETWORK/web-endpoints | By - Rishabh Kumar | On - 2022-04-03T13:57:51Z
 3. [254..84c] build: change end point | By - Rishabh Kumar | On - 2022-04-03T13:57:45Z
 4. [173..95f] change endpoint | By - Rishabh Kumar | On - 2022-04-03T13:53:24Z
 5. [156..016] Create Procfile | By - Dima Brook | On - 2022-04-03T13:47:05Z
 6. [00c..8e8] update lib | By - Rishabh Kumar | On - 2022-04-03T13:44:43Z
 7. [e38..496] undo last commit | By - Rishabh Kumar | On - 2022-04-03T13:12:50Z
 8. [fa7..1c4] redis: comment out connection url | By - Rishabh Kumar | On - 2022-04-03T12:16:58Z
 9. [837..9ca] redis: use uri from env | By - rsbkme | On - 2022-01-31T07:30:37Z
 10. [ca6..0e8] refactor | By - Rishabh Kumar | On - 2022-01-30T16:07:22Z
 11. [593..0aa] add nodemon and cacheing | By - Rishabh Kumar | On - 2022-01-30T10:36:16Z
 12. [238..285] add cache | By - Rishabh Kumar | On - 2022-01-25T14:39:16Z
 13. [a81..431] fixed err | By - Ruby Edelstein | On - 2022-01-18T16:36:37Z
 14. [862..470] fixed small error | By - Ruby Edelstein | On - 2022-01-18T16:32:31Z
 15. [d66..17b] a | By - Ruby Edelstein | On - 2022-01-18T16:31:03Z
 16. [091..3c7] addded cors | By - Ruby Edelstein | On - 2022-01-18T16:30:10Z
 17. [2bf..928] a | By - Ruby Edelstein | On - 2022-01-18T12:48:33Z
 18. [f9f..51d] removed package lock | By - Ruby Edelstein | On - 2022-01-18T12:47:37Z
 19. [abc..a02] returns latest commit from github | By - Ruby Edelstein | On - 2022-01-18T12:46:14Z
 20. [251..aa8] returns latest commit | By - Ruby Edelstein | On - 2022-01-18T12:45:39Z
 21. [7f1..2a5] 🔥 Removing unused deps | By - Rishabh Kumar | On - 2022-01-18T11:36:38Z
 22. [2e3..e9f] 🚀 Fixed | By - Rishabh Kumar | On - 2022-01-18T11:34:41Z
 23. [10f..881] 🐛 Fix | By - Rishabh Kumar | On - 2022-01-18T08:12:28Z
 24. [55b..e74] 🎉 init | By - Rishabh Kumar | On - 2022-01-17T11:21:17Z

# signal-server

## master


 1. [993..e48] shifted to docker | By - zoth | On - 2022-02-21T13:52:55Z
 2. [c77..b81] initial commit | By - Dima Brook | On - 2022-02-08T20:39:45Z

## socket-io


 1. [e79..7d7] socket-io | By - xmzsafepress | On - 2022-02-24T18:58:36Z

# token-notifier-frontend

## Dev


 1. [ebe..3fe] redirects file | By - AlexeyAdoniev | On - 2021-12-23T11:24:58Z
 2. [b09..2ad] bug fix | By - AlexeyAdoniev | On - 2021-12-23T08:27:38Z
 3. [e37..f60] bug fix | By - AlexeyAdoniev | On - 2021-12-23T08:18:52Z
 4. [078..016] new build script | By - AlexeyAdoniev | On - 2021-12-22T13:00:31Z
 5. [3e9..7cf] staging | By - AlexeyAdoniev | On - 2021-12-22T12:42:49Z
 6. [e7d..d25] Notification redner fix | By - AlexeyAdoniev | On - 2021-12-22T12:27:39Z
 7. [d99..693] first commit | By - AlexeyAdoniev | On - 2021-12-22T11:13:23Z

## dev


 1. [38d..493] multi delete contacts and noitfs | By - AlexeyAdoniev | On - 2022-02-19T22:44:32Z
 2. [f12..7f9] multi deletion | By - AlexeyAdoniev | On - 2022-02-17T18:57:41Z
 3. [b18..301] RowControl | By - AlexeyAdoniev | On - 2022-02-14T17:34:19Z
 4. [901..550] token symbol and price reveal | By - AlexeyAdoniev | On - 2022-02-10T07:44:19Z
 5. [598..ca8] Contacts Page and Uploader | By - AlexeyAdoniev | On - 2022-02-09T08:19:22Z
 6. [d83..131] notification form, customSelectDropdown, contactForm, validation , pagination for contacts table | By - AlexeyAdoniev | On - 2022-02-06T21:57:46Z
 7. [cb2..06e] notif Form refactor and redesign | By - AlexeyAdoniev | On - 2022-02-05T22:33:52Z
 8. [652..e57] logo, transaction table filter logic | By - AlexeyAdoniev | On - 2022-02-02T18:58:06Z
 9. [2e6..baa] Amount filter design | By - AlexeyAdoniev | On - 2022-02-01T22:03:41Z
 10. [9c1..76d] address input | By - AlexeyAdoniev | On - 2022-01-30T20:02:59Z
 11. [4a3..c82] style changes to table | By - AlexeyAdoniev | On - 2022-01-30T07:32:01Z
 12. [d98..650] paginations and Adress Input Select | By - AlexeyAdoniev | On - 2022-01-29T22:18:45Z
 13. [2dc..9a7] talbe redesign | By - AlexeyAdoniev | On - 2022-01-20T19:33:53Z
 14. [735..e59] Filters bug fix | By - AlexeyAdoniev | On - 2022-01-16T14:08:51Z
 15. [834..660] a | By - AlexeyAdoniev | On - 2022-01-10T19:18:30Z
 16. [947..07e] added error catch ecomponent, transaction table filtering and sorting | By - AlexeyAdoniev | On - 2022-01-09T15:55:25Z
 17. [aa1..977] changed bug with table rerender on scroll, change getTransactions method, fixed buf with TokenList, fixed methods descriptions | By - AlexeyAdoniev | On - 2022-01-08T23:50:25Z
 18. [7e6..828] filters for Transaction Table | By - AlexeyAdoniev | On - 2022-01-06T18:27:18Z
 19. [a9f..a98] dropzone, styles | By - AlexeyAdoniev | On - 2022-01-02T15:26:38Z
 20. [3e6..d3f] nav style change | By - AlexeyAdoniev | On - 2022-01-01T23:02:09Z
 21. [c46..9de] import/export from csv file menu, dropzone, fixed bug with notification's specific contacts | By - AlexeyAdoniev | On - 2021-12-30T18:01:53Z
 22. [3bb..77b] import/export from csv file, specific contacts list in form | By - AlexeyAdoniev | On - 2021-12-29T18:43:50Z
 23. [622..be2] Specific Contacts component | By - AlexeyAdoniev | On - 2021-12-28T17:58:51Z
 24. [eff..92f] tokenList bug fix, style change | By - AlexeyAdoniev | On - 2021-12-28T12:24:08Z
 25. [c44..afe] fixed bug with navigation, chenged token list view | By - AlexeyAdoniev | On - 2021-12-27T12:06:05Z
 26. [c74..439] emails validation, table styling, other bugs | By - AlexeyAdoniev | On - 2021-12-26T18:27:17Z
 27. [42b..8bc] infinite scroll + bugs fix | By - AlexeyAdoniev | On - 2021-12-26T14:21:28Z
 28. [103..cdf] infinite scroll update function and scrollTarget | By - AlexeyAdoniev | On - 2021-12-23T18:12:29Z
 29. [73b..9da] fixed talbe height, fixed login bugs + added show password Icon | By - AlexeyAdoniev | On - 2021-12-23T16:09:14Z
 30. [5d2..678] redirects | By - AlexeyAdoniev | On - 2021-12-23T11:29:34Z
 31. [e37..f60] bug fix | By - AlexeyAdoniev | On - 2021-12-23T08:18:52Z
 32. [078..016] new build script | By - AlexeyAdoniev | On - 2021-12-22T13:00:31Z
 33. [d99..693] first commit | By - AlexeyAdoniev | On - 2021-12-22T11:13:23Z

## main


 1. [ebe..3fe] redirects file | By - AlexeyAdoniev | On - 2021-12-23T11:24:58Z
 2. [b09..2ad] bug fix | By - AlexeyAdoniev | On - 2021-12-23T08:27:38Z
 3. [e37..f60] bug fix | By - AlexeyAdoniev | On - 2021-12-23T08:18:52Z
 4. [078..016] new build script | By - AlexeyAdoniev | On - 2021-12-22T13:00:31Z
 5. [3e9..7cf] staging | By - AlexeyAdoniev | On - 2021-12-22T12:42:49Z
 6. [e7d..d25] Notification redner fix | By - AlexeyAdoniev | On - 2021-12-22T12:27:39Z
 7. [d99..693] first commit | By - AlexeyAdoniev | On - 2021-12-22T11:13:23Z

## staging


 1. [6bc..546] Merge branch 'dev' of https://github.com/QuigonNetwork/token-notifier-frontend into staging | By - AlexeyAdoniev | On - 2022-02-20T09:22:32Z
 2. [38d..493] multi delete contacts and noitfs | By - AlexeyAdoniev | On - 2022-02-19T22:44:32Z
 3. [f12..7f9] multi deletion | By - AlexeyAdoniev | On - 2022-02-17T18:57:41Z
 4. [b18..301] RowControl | By - AlexeyAdoniev | On - 2022-02-14T17:34:19Z
 5. [c5a..08b] Merge branch 'dev' into staging | By - AlexeyAdoniev | On - 2022-02-10T07:44:45Z
 6. [901..550] token symbol and price reveal | By - AlexeyAdoniev | On - 2022-02-10T07:44:19Z
 7. [2a9..a4c] Merge branch 'dev' into staging | By - AlexeyAdoniev | On - 2022-02-09T08:19:52Z
 8. [598..ca8] Contacts Page and Uploader | By - AlexeyAdoniev | On - 2022-02-09T08:19:22Z
 9. [77e..5bf] Merge branch 'dev' into staging | By - AlexeyAdoniev | On - 2022-02-06T22:17:43Z
 10. [d83..131] notification form, customSelectDropdown, contactForm, validation , pagination for contacts table | By - AlexeyAdoniev | On - 2022-02-06T21:57:46Z
 11. [cb2..06e] notif Form refactor and redesign | By - AlexeyAdoniev | On - 2022-02-05T22:33:52Z
 12. [652..e57] logo, transaction table filter logic | By - AlexeyAdoniev | On - 2022-02-02T18:58:06Z
 13. [a43..f83] Merge branch 'dev' into staging | By - AlexeyAdoniev | On - 2022-02-01T22:04:17Z
 14. [2e6..baa] Amount filter design | By - AlexeyAdoniev | On - 2022-02-01T22:03:41Z
 15. [9c1..76d] address input | By - AlexeyAdoniev | On - 2022-01-30T20:02:59Z
 16. [4a3..c82] style changes to table | By - AlexeyAdoniev | On - 2022-01-30T07:32:01Z
 17. [d98..650] paginations and Adress Input Select | By - AlexeyAdoniev | On - 2022-01-29T22:18:45Z
 18. [2dc..9a7] talbe redesign | By - AlexeyAdoniev | On - 2022-01-20T19:33:53Z
 19. [735..e59] Filters bug fix | By - AlexeyAdoniev | On - 2022-01-16T14:08:51Z
 20. [834..660] a | By - AlexeyAdoniev | On - 2022-01-10T19:18:30Z
 21. [947..07e] added error catch ecomponent, transaction table filtering and sorting | By - AlexeyAdoniev | On - 2022-01-09T15:55:25Z
 22. [aa1..977] changed bug with table rerender on scroll, change getTransactions method, fixed buf with TokenList, fixed methods descriptions | By - AlexeyAdoniev | On - 2022-01-08T23:50:25Z
 23. [7e6..828] filters for Transaction Table | By - AlexeyAdoniev | On - 2022-01-06T18:27:18Z
 24. [a9f..a98] dropzone, styles | By - AlexeyAdoniev | On - 2022-01-02T15:26:38Z
 25. [3e6..d3f] nav style change | By - AlexeyAdoniev | On - 2022-01-01T23:02:09Z
 26. [c46..9de] import/export from csv file menu, dropzone, fixed bug with notification's specific contacts | By - AlexeyAdoniev | On - 2021-12-30T18:01:53Z
 27. [3bb..77b] import/export from csv file, specific contacts list in form | By - AlexeyAdoniev | On - 2021-12-29T18:43:50Z
 28. [622..be2] Specific Contacts component | By - AlexeyAdoniev | On - 2021-12-28T17:58:51Z
 29. [0d4..519] tokenList bug fix, style change | By - AlexeyAdoniev | On - 2021-12-28T12:28:56Z
 30. [eff..92f] tokenList bug fix, style change | By - AlexeyAdoniev | On - 2021-12-28T12:24:08Z
 31. [e60..df5]  Token list changed | By - AlexeyAdoniev | On - 2021-12-27T15:49:51Z
 32. [c44..afe] fixed bug with navigation, chenged token list view | By - AlexeyAdoniev | On - 2021-12-27T12:06:05Z
 33. [91f..6ba] table styling, email validation + other bug fix | By - AlexeyAdoniev | On - 2021-12-26T18:30:14Z
 34. [c74..439] emails validation, table styling, other bugs | By - AlexeyAdoniev | On - 2021-12-26T18:27:17Z
 35. [44e..d66] buf fix route | By - AlexeyAdoniev | On - 2021-12-26T14:40:08Z
 36. [226..5b3] route slash fix | By - AlexeyAdoniev | On - 2021-12-26T14:31:09Z
 37. [7d5..9e6] infinite scroll + bugs fix | By - AlexeyAdoniev | On - 2021-12-26T14:29:24Z
 38. [8c6..111] infinite scroll + bugs fix | By - AlexeyAdoniev | On - 2021-12-26T14:23:03Z
 39. [42b..8bc] infinite scroll + bugs fix | By - AlexeyAdoniev | On - 2021-12-26T14:21:28Z
 40. [103..cdf] infinite scroll update function and scrollTarget | By - AlexeyAdoniev | On - 2021-12-23T18:12:29Z
 41. [73b..9da] fixed talbe height, fixed login bugs + added show password Icon | By - AlexeyAdoniev | On - 2021-12-23T16:09:14Z
 42. [5d2..678] redirects | By - AlexeyAdoniev | On - 2021-12-23T11:29:34Z
 43. [e37..f60] bug fix | By - AlexeyAdoniev | On - 2021-12-23T08:18:52Z
 44. [078..016] new build script | By - AlexeyAdoniev | On - 2021-12-22T13:00:31Z
 45. [d99..693] first commit | By - AlexeyAdoniev | On - 2021-12-22T11:13:23Z

# xpn.eos.brdg

## main


 1. [f9b..2a6] 15.02.2022 | By - Andrey Marchenko | On - 2022-02-15T10:34:34Z
 2. [f80..500] 09.02.2022 | By - Andrey Marchenko | On - 2022-02-09T21:56:24Z
 3. [4d1..7eb] 09.02.2022 | By - Andrey Marchenko | On - 2022-02-09T18:41:51Z
 4. [513..fc5] 07.02.2022 | By - Andrey Marchenko | On - 2022-02-07T17:53:59Z
 5. [f88..278] 06.02.2022 | By - Andrey Marchenko | On - 2022-02-06T14:10:45Z
 6. [c26..3da] 03.02.2022 | By - Andrey Marchenko | On - 2022-02-03T17:41:27Z
 7. [0c1..06d] 01.02.2022_1 | By - Andrey Marchenko | On - 2022-02-01T16:36:06Z
 8. [dca..dc8] 01.02.2022 | By - Andrey Marchenko | On - 2022-02-01T07:13:14Z
 9. [6a7..57e] 31.01.2022 commit | By - Andrey Marchenko | On - 2022-01-31T09:18:04Z
 10. [b5a..c18] 27.01.2022 commit | By - Andrey Marchenko | On - 2022-01-27T13:56:13Z
 11. [434..ecb] 25.01.2021_2 | By - Andrey Marchenko | On - 2022-01-25T18:24:18Z
 12. [d15..0fe] 25.02.2021 commit | By - Andrey Marchenko | On - 2022-01-25T08:03:20Z
 13. [c8d..38a] seocnd commit | By - Andrey Marchenko | On - 2022-01-23T18:34:12Z
 14. [5cc..36a] 23/01/2021 commit | By - Andrey Marchenko | On - 2022-01-23T09:46:44Z
 15. [647..8ac] 19/01/2021 commit | By - Andrey Marchenko | On - 2022-01-19T17:34:33Z
 16. [399..947] seocnd commit | By - Andrey Marchenko | On - 2022-01-18T13:30:06Z
 17. [3f8..00b] seocnd commit | By - Andrey Marchenko | On - 2022-01-18T12:42:55Z
 18. [fcf..faf] first commit | By - Andrey Marchenko | On - 2022-01-18T12:16:30Z

# UnStake

## main


 1. [23d..618] Update App.js | By - VKint | On - 2022-01-28T23:59:38Z
 2. [7df..be3] remove build | By - AlexeyAdoniev | On - 2022-01-16T20:32:42Z
 3. [2b3..55e] conformation popup added | By - AlexeyAdoniev | On - 2022-01-16T20:29:25Z
 4. [8d5..126] new design | By - AlexeyAdoniev | On - 2022-01-16T08:07:16Z
 5. [b37..c25] events on disconnect | By - AlexeyAdoniev | On - 2022-01-06T08:41:03Z
 6. [c0d..ae4] walletconect + backend integration | By - AlexeyAdoniev | On - 2022-01-05T18:42:53Z
 7. [da2..cb6] style changes | By - AlexeyAdoniev | On - 2022-01-04T19:11:39Z
 8. [757..358] build script change | By - AlexeyAdoniev | On - 2022-01-04T15:13:15Z
 9. [bd1..07f] metamask, walletconnetc + mobile media | By - AlexeyAdoniev | On - 2022-01-04T14:58:36Z
 10. [bae..07d] main page design, mobile first screen desing, metaMaskConnect | By - AlexeyAdoniev | On - 2022-01-03T19:19:43Z
 11. [a79..d62] Initialize project using Create React App | By - AlexeyAdoniev | On - 2022-01-03T13:51:16Z

## staging


 1. [757..358] build script change | By - AlexeyAdoniev | On - 2022-01-04T15:13:15Z
 2. [bd1..07f] metamask, walletconnetc + mobile media | By - AlexeyAdoniev | On - 2022-01-04T14:58:36Z
 3. [bae..07d] main page design, mobile first screen desing, metaMaskConnect | By - AlexeyAdoniev | On - 2022-01-03T19:19:43Z
 4. [a79..d62] Initialize project using Create React App | By - AlexeyAdoniev | On - 2022-01-03T13:51:16Z

# validator-utils

## master


 1. [20a..d38] containerize | By - rupansh | On - 2022-01-10T17:03:01Z
 2. [8c1..867] crypto-ex-backend: properly log when ready | By - rupansh | On - 2022-01-10T17:00:43Z
 3. [aaf..829] update .env.example | By - rupansh | On - 2022-01-10T17:00:26Z
 4. [659..2de] commonize .env | By - rupansh | On - 2022-01-10T14:51:21Z
 5. [a98..e93] add socket util apps | By - rupansh | On - 2022-01-10T14:04:01Z
 6. [a12..580] add validator-pinger | By - rupansh | On - 2022-01-10T13:57:19Z
 7. [fa2..e97] add exchange-rate | By - rupansh | On - 2022-01-10T13:10:46Z
 8. [505..ca4] initial commit | By - rupansh | On - 2022-01-10T12:33:46Z

# LaunchpadContracts

## dist


 1. [ff3..e43] Build: (993c8ab) feat(deploy): add a script | By - imsk17 | On - 2022-01-05T14:02:03Z
 2. [2ea..63d] Build: (7a1af7b) chore(contract): add config files | By - imsk17 | On - 2022-01-03T09:27:50Z

## main


 1. [962..618] feat(tokens): add services, repo, routes for CRUD on tokens table | By - imsk17 | On - 2022-01-10T09:41:49Z
 2. [847..bf7] fix(mw): return instead of going through flow | By - imsk17 | On - 2022-01-09T16:59:06Z
 3. [cff..fc3] feat(app): protect project routes and new migrations | By - imsk17 | On - 2022-01-09T16:44:47Z
 4. [35e..9ba] feat(server): allow all origins for CORS | By - imsk17 | On - 2022-01-09T13:50:54Z
 5. [1f0..352] chore(packages): move dev deps to deps | By - imsk17 | On - 2022-01-09T13:15:30Z
 6. [d0c..316] fix(deploy): do not pass network from body to constructor | By - imsk17 | On - 2022-01-09T13:01:08Z
 7. [853..09f] fix(deploy): reply with correct scan uri | By - imsk17 | On - 2022-01-09T11:57:19Z
 8. [e48..e4c] config(hardhat): set correct rpc uris | By - imsk17 | On - 2022-01-09T11:52:20Z
 9. [668..303] feat(service): allow dynamic network | By - imsk17 | On - 2022-01-09T11:48:01Z
 10. [00e..1c4] deploy(heroku): add a procfile | By - imsk17 | On - 2022-01-09T11:22:03Z
 11. [1d6..d48] config(env): rename DB URI to ClearDB | By - imsk17 | On - 2022-01-09T11:13:51Z
 12. [1c6..be4] projects(projects): add route for all projects | By - imsk17 | On - 2022-01-09T10:44:32Z
 13. [997..281] feat(projects): add repo, router for crud of projects | By - imsk17 | On - 2022-01-06T14:07:51Z
 14. [6df..684] feat(auth): create user auth service and routes | By - imsk17 | On - 2022-01-06T11:29:35Z
 15. [bfb..10c] chore(packages): import mikro orm for db | By - imsk17 | On - 2022-01-06T09:59:26Z
 16. [6fd..347] chore(config): network is not required | By - imsk17 | On - 2022-01-06T09:53:58Z
 17. [f1a..801] feat(scripts): add a script to start the server | By - imsk17 | On - 2022-01-06T09:53:15Z
 18. [698..dca] feat(http): add express server to deploy | By - imsk17 | On - 2022-01-06T09:52:15Z
 19. [080..a15] feat(deploy): add a script | By - imsk17 | On - 2022-01-05T14:00:23Z
 20. [289..4b6] chore(contract): add config files | By - imsk17 | On - 2022-01-03T09:26:28Z
 21. [291..fef] chore(script): make typegen script executable | By - imsk17 | On - 2022-01-03T09:21:32Z
 22. [e9c..dab] chore(package.json): add a license | By - imsk17 | On - 2022-01-03T09:19:17Z
 23. [f08..6b7] Initial Import | By - imsk17 | On - 2022-01-03T09:17:07Z

## master


 1. [b74..93d] feat(app): protect project routes and new migrations | By - imsk17 | On - 2022-01-09T16:44:47Z
 2. [c23..1bc] feat(server): allow all origins for CORS | By - imsk17 | On - 2022-01-09T13:50:54Z
 3. [68c..21e] chore(packages): move dev deps to deps | By - imsk17 | On - 2022-01-09T13:15:30Z
 4. [785..2ea] fix(deploy): do not pass network from body to constructor | By - imsk17 | On - 2022-01-09T13:01:08Z
 5. [6e8..cb8] fix(deploy): reply with correct scan uri | By - imsk17 | On - 2022-01-09T11:57:19Z
 6. [806..77b] config(hardhat): set correct rpc uris | By - imsk17 | On - 2022-01-09T11:52:20Z
 7. [2b3..eae] feat(service): allow dynamic network | By - imsk17 | On - 2022-01-09T11:48:01Z
 8. [fa5..453] deploy(heroku): add a procfile | By - imsk17 | On - 2022-01-09T11:22:03Z
 9. [69a..5cc] config(env): rename DB URI to ClearDB | By - imsk17 | On - 2022-01-09T11:13:51Z
 10. [4e3..e66] projects(projects): add route for all projects | By - imsk17 | On - 2022-01-09T10:44:32Z
 11. [95a..807] feat(projects): add repo, router for crud of projects | By - imsk17 | On - 2022-01-06T14:07:51Z
 12. [e35..160] feat(auth): create user auth service and routes | By - imsk17 | On - 2022-01-06T11:29:35Z
 13. [5a5..a63] chore(packages): import mikro orm for db | By - imsk17 | On - 2022-01-06T09:59:26Z
 14. [6d5..72e] chore(config): network is not required | By - imsk17 | On - 2022-01-06T09:53:58Z
 15. [d99..2bc] feat(scripts): add a script to start the server | By - imsk17 | On - 2022-01-06T09:53:15Z
 16. [912..429] feat(http): add express server to deploy | By - imsk17 | On - 2022-01-06T09:52:15Z
 17. [993..96c] feat(deploy): add a script | By - imsk17 | On - 2022-01-05T14:00:23Z
 18. [7a1..c09] chore(contract): add config files | By - imsk17 | On - 2022-01-03T09:26:28Z
 19. [fe1..581] chore(script): make typegen script executable | By - imsk17 | On - 2022-01-03T09:21:32Z
 20. [ec6..ace] chore(package.json): add a license | By - imsk17 | On - 2022-01-03T09:19:17Z
 21. [60a..604] Initial Import | By - imsk17 | On - 2022-01-03T09:17:07Z

# erc-20-vulnerabilities

## main


 1. [590..ef6] Update ERC-20-vulns.md | By - Dima Brook | On - 2022-01-09T16:01:50Z
 2. [4ad..a90] Add images | By - Dima Brook | On - 2022-01-09T15:49:57Z
 3. [a46..60d] Create .gitkeep | By - Dima Brook | On - 2022-01-09T15:49:17Z
 4. [34c..983] ERC-20 Vulnerabilities Doc - Initial | By - Dima Brook | On - 2022-01-09T15:47:55Z

# algorand-ethereum-bridge

## main


 1. [c09..d08] add unfreeze_nft | By - rocalex | On - 2022-01-06T13:23:41Z
 2. [963..85c] fix for ipfs | By - rocalex | On - 2022-01-06T10:24:53Z
 3. [a8c..4cf] fix for ipfs | By - rocalex | On - 2022-01-06T10:24:15Z
 4. [f49..b4c] collect locked algos | By - rocalex | On - 2021-12-30T07:12:19Z
 5. [d3a..290] fix backend for metadata | By - Xueming Zheng | On - 2021-12-07T14:28:36Z
 6. [ecb..091] change the unit name | By - Xueming Zheng | On - 2021-12-07T12:45:55Z
 7. [84d..564] Merge branch 'main' of https://github.com/xp-network/algorand-ethereum-bridge | By - Xueming Zheng | On - 2021-12-07T12:16:16Z
 8. [d7d..580] change asset name | By - Xueming Zheng | On - 2021-12-07T12:16:11Z
 9. [f83..753] add docker-compose | By - rupansh | On - 2021-12-06T12:27:08Z
 10. [c85..72b] Dockerfile: fix redis installation | By - rupansh | On - 2021-12-06T12:18:36Z
 11. [ab5..1f8] Dockerfile: add redis | By - rupansh | On - 2021-12-06T12:16:28Z
 12. [683..161] backend: docker-run: don't exit | By - rupansh | On - 2021-12-06T12:05:28Z
 13. [965..655] backend: docker-run: fix perms | By - rupansh | On - 2021-12-06T11:46:03Z
 14. [21e..64e] initial docker setup for backend | By - rupansh | On - 2021-12-06T11:40:28Z
 15. [5fb..206] Update algorand-contract.md | By - Dima Brook | On - 2021-11-29T18:30:37Z
 16. [953..e20] check if nft_id is equal to received_nft_id | By - rocalex | On - 2021-11-29T14:33:43Z
 17. [0c9..699] add nft_frozen | By - rocalex | On - 2021-11-29T13:54:08Z
 18. [207..8ba] Create algorand-contract.md | By - Dima Brook | On - 2021-11-24T14:01:41Z
 19. [bad..72b] Remove unused variables | By - Dima Brook | On - 2021-11-24T09:46:14Z
 20. [526..05b] Add logging | By - rocalex | On - 2021-11-24T09:29:11Z
 21. [189..7be] remove redundant | By - rocalex | On - 2021-11-23T19:45:51Z
 22. [a0a..f55] remove redundant | By - rocalex | On - 2021-11-23T19:37:46Z
 23. [d1f..139] store tx_fees | By - rocalex | On - 2021-11-22T15:31:21Z
 24. [484..979] store tx_fees | By - rocalex | On - 2021-11-22T15:27:33Z
 25. [80b..13e] main.py: minor fixes | By - rupansh | On - 2021-11-22T15:15:44Z
 26. [d49..a77] fix contract | By - rocalex | On - 2021-11-22T11:26:44Z
 27. [92c..9e6] fix index | By - rocalex | On - 2021-11-22T11:25:30Z
 28. [7fe..644] use requests instead of urllib | By - rocalex | On - 2021-11-22T11:14:55Z
 29. [025..9f8] check valid address | By - rocalex | On - 2021-11-21T14:41:30Z
 30. [e70..d8f] validator -> algorand | By - rocalex | On - 2021-11-21T14:28:32Z
 31. [506..b0d] validator -> algorand | By - rocalex | On - 2021-11-21T14:18:15Z
 32. [b37..4af] validator -> algorand | By - rocalex | On - 2021-11-21T14:17:30Z
 33. [788..117] algorand -> validator | By - rocalex | On - 2021-11-21T13:48:52Z
 34. [842..3c8] algorand -> validator | By - rocalex | On - 2021-11-21T13:48:40Z
 35. [af6..d41] Merge remote-tracking branch 'origin/main' | By - rocalex | On - 2021-11-21T13:10:52Z
 36. [e90..8f7] remove erc721 address from .env | By - rocalex | On - 2021-11-21T13:07:10Z
 37. [c82..b92] add chain nonce | By - rocalex | On - 2021-11-21T12:18:46Z
 38. [906..d00] fix: from_mnemonic return type | By - Dima Brook | On - 2021-11-21T08:58:39Z
 39. [dfc..50f] remove erc721address checking | By - rocalex | On - 2021-11-19T17:05:02Z
 40. [db3..499] fix socket url | By - rocalex | On - 2021-11-19T12:03:22Z
 41. [a16..b0d] update doc | By - rocalex | On - 2021-11-19T08:30:45Z
 42. [e74..86c] update front-end | By - rocalex | On - 2021-11-19T08:24:13Z
 43. [8c7..3a9] algorand -> EVM | By - rocalex | On - 2021-11-19T06:45:26Z
 44. [4c3..5aa] update doc | By - rocalex | On - 2021-11-18T13:23:23Z
 45. [40a..a69] store send to global state | By - rocalex | On - 2021-11-18T13:20:02Z
 46. [a9c..029] get NFT from application | By - rocalex | On - 2021-11-18T13:13:38Z
 47. [5f9..b26] get NFT from application | By - rocalex | On - 2021-11-18T13:11:38Z
 48. [d18..de1] integration algosigner | By - rocalex | On - 2021-11-18T12:01:19Z
 49. [bb9..3d6] store app id to redis | By - rocalex | On - 2021-11-18T09:00:35Z
 50. [31e..df1] call validateTransferNft from back-end | By - rocalex | On - 2021-11-18T08:56:23Z

# LaunchpadBackend

## master


 1. [1f3..62e] feat(service): pass variables dynamically | By - imsk17 | On - 2022-01-05T13:58:36Z
 2. [73b..6f5] feat(service): use hardhat for deployProxy | By - imsk17 | On - 2022-01-05T12:24:16Z
 3. [359..52f] feat(config): can only use one chain at a time | By - imsk17 | On - 2022-01-05T10:41:30Z
 4. [28a..09e] feat(server): add route to deploy smart contract | By - imsk17 | On - 2022-01-03T12:23:16Z
 5. [6c9..72b] feat(services): add contract deploy service | By - imsk17 | On - 2022-01-03T10:51:16Z
 6. [961..829] Initial Import | By - imsk17 | On - 2022-01-03T10:08:58Z

# FT-bridge-web3-contracts

## main


 1. [3e9..547] initial | By - rocalex | On - 2022-01-05T08:07:15Z

# nft-meta

## master


 1. [7ac..6a8] initial commit | By - Dima Brook | On - 2021-12-30T13:50:39Z

# influencer-be

## master


 1. [cde..adb] init | By - AlexSkyline2 | On - 2021-12-27T07:45:59Z

## staging


 1. [3b5..3ea] update user tweets | By - AlexSkyline2 | On - 2021-12-29T10:54:50Z
 2. [f31..f03] load first comment page fix | By - AlexSkyline2 | On - 2021-12-28T17:57:06Z
 3. [9b4..254] retweet table | By - AlexSkyline2 | On - 2021-12-28T15:05:56Z
 4. [ab6..32f] update country list | By - AlexSkyline2 | On - 2021-12-28T06:49:32Z
 5. [1e8..43c] add filter dates | By - AlexSkyline2 | On - 2021-12-27T13:59:57Z
 6. [8fe..914] fix dates | By - AlexSkyline2 | On - 2021-12-27T10:56:42Z
 7. [cde..adb] init | By - AlexSkyline2 | On - 2021-12-27T07:45:59Z

# influencer-fe

## master


 1. [0ec..08a] init | By - AlexSkyline2 | On - 2021-12-27T07:32:06Z
 2. [31d..e9d] init | By - AlexSkyline2 | On - 2021-12-27T07:29:35Z
 3. [968..98f] init | By - AlexSkyline2 | On - 2021-12-27T07:28:50Z

## staging


 1. [ee5..c0f] add table | By - AlexSkyline2 | On - 2021-12-28T15:06:21Z
 2. [1cf..021] date filter work | By - AlexSkyline2 | On - 2021-12-27T14:00:13Z
 3. [a4a..f0e] build script | By - AlexSkyline2 | On - 2021-12-27T07:44:03Z
 4. [722..e4b] staging init | By - AlexSkyline2 | On - 2021-12-27T07:40:30Z
 5. [0ec..08a] init | By - AlexSkyline2 | On - 2021-12-27T07:32:06Z
 6. [31d..e9d] init | By - AlexSkyline2 | On - 2021-12-27T07:29:35Z
 7. [968..98f] init | By - AlexSkyline2 | On - 2021-12-27T07:28:50Z

# launchpad-aggregator

## master


 1. [ea1..2ad] feat(auth): setup endpoints for auth | By - imsk17 | On - 2021-12-19T09:43:23Z
 2. [efd..3cc] feat(auth): setup repo and services for auth | By - imsk17 | On - 2021-12-17T13:26:19Z
 3. [5ee..109] chore(gamefi): add support for pagination | By - imsk17 | On - 2021-12-17T12:21:56Z
 4. [d4d..42e] chore(index): bring everything inside async fn | By - imsk17 | On - 2021-12-17T10:55:13Z
 5. [7be..248] chore(config): add REDIS_URI to .env.example | By - imsk17 | On - 2021-12-17T10:51:21Z
 6. [21b..372] chore(naming): use consistent file names | By - imsk17 | On - 2021-12-17T10:50:59Z
 7. [bcf..95a] chore(persistence): add mongodb and redis for caching and persistence | By - imsk17 | On - 2021-12-17T10:49:01Z
 8. [dc5..8fa] feat(sites): add getters for multiple websites | By - imsk17 | On - 2021-12-15T14:29:55Z
 9. [ac6..e1e] chore(packages): use mongoose instead of typegoose | By - imsk17 | On - 2021-12-15T11:10:32Z
 10. [9a5..0d6] chore(config): add .env example for config of the server | By - imsk17 | On - 2021-12-15T10:59:52Z
 11. [ffc..ebe] initial commit | By - imsk17 | On - 2021-12-15T10:54:03Z

# bot

## master


 1. [ba8..3e2] k | By - Jenkins | On - 2021-11-29T17:37:06Z
 2. [3fc..9c8] first commit | By - Jenkins | On - 2021-11-29T17:06:59Z

# multisig-rs

## anchor


 1. [ff1..171] feat(minter): add minting functionality | By - imsk17 | On - 2021-11-20T11:36:57Z
 2. [2c5..e18] chore(packages): import solana token crate | By - imsk17 | On - 2021-11-14T07:47:12Z
 3. [b25..da2] feat(methods): add all the methods from minter sc | By - imsk17 | On - 2021-11-14T07:20:54Z
 4. [7b2..a8f] fix(methods): seprate out contexts | By - imsk17 | On - 2021-11-14T06:19:57Z
 5. [a44..a34] feat(actions): introduce add/remove validator methods | By - imsk17 | On - 2021-11-14T06:09:32Z
 6. [aac..296] initial pausing support | By - rupansh-arch | On - 2021-09-28T13:42:00Z
 7. [4b8..1e6] validate_action: fix revert condition | By - rupansh-arch | On - 2021-09-26T12:55:03Z
 8. [1b6..5bb] initial impl | By - rupansh-arch | On - 2021-09-21T15:19:37Z

## master


 1. [2e1..14e] perf: use BtreeMaps instead of HashMaps | By - imsk17 | On - 2021-09-15T10:10:31Z
 2. [073..b90] feat: setup validation | By - imsk17 | On - 2021-09-14T11:37:15Z
 3. [2cc..02c] feat: setup initialization | By - imsk17 | On - 2021-09-14T10:52:23Z
 4. [658..a2c] feat: create a state for the program | By - imsk17 | On - 2021-09-14T10:45:34Z
 5. [19b..9ff] initial import | By - imsk17 | On - 2021-09-14T10:21:32Z
 6. [0ab..04a] feat: setup instructions and errors | By - imsk17 | On - 2021-09-14T10:20:14Z
 7. [afc..afc] initial import | By - imsk17 | On - 2021-09-14T09:16:03Z

# xp-algorand

## main


 1. [c18..53b] bridge back-end | By - Xueming Zheng | On - 2021-11-07T10:49:02Z
 2. [493..051] Merge pull request #1 from xp-network/three-validators | By - Xueming Zheng | On - 2021-11-07T07:11:49Z
 3. [440..7e2] finish smart contracts | By - Xueming Zheng | On - 2021-11-03T14:32:13Z
 4. [0db..4d1] finish smart contracts | By - Xueming Zheng | On - 2021-10-29T02:33:07Z
 5. [a46..fd3] finish validate_action | By - Xueming Zheng | On - 2021-10-29T01:20:39Z
 6. [fc1..411] finish validate_action | By - Xueming Zheng | On - 2021-10-29T01:12:57Z
 7. [e52..a41] finish validate_action | By - Xueming Zheng | On - 2021-10-28T20:35:37Z
 8. [85c..864] finish validate_action | By - Xueming Zheng | On - 2021-10-28T19:34:21Z
 9. [8ca..a3a] check if validators includes sender | By - Xueming Zheng | On - 2021-10-28T18:15:11Z
 10. [a48..b3b] example transfer NFT | By - Xueming Zheng | On - 2021-10-28T16:50:50Z
 11. [abb..ec3] example transfer NFT | By - Xueming Zheng | On - 2021-10-28T14:03:34Z
 12. [18c..205] store three validators when creating application | By - Xueming Zheng | On - 2021-10-28T12:06:25Z
 13. [5d3..9a6] transfer NFT | By - Xueming Zheng | On - 2021-10-27T17:54:28Z
 14. [767..1df] transfer NFT | By - Xueming Zheng | On - 2021-10-27T17:32:16Z
 15. [d1b..af3] transfer Token | By - Xueming Zheng | On - 2021-10-27T17:27:30Z
 16. [f8e..b7b] transfer token to Algorand | By - Xueming Zheng | On - 2021-10-27T14:09:55Z
 17. [053..a39] transfer NFT to Algorand | By - Xueming Zheng | On - 2021-10-27T08:51:27Z
 18. [457..c2f] transfer NFT to Algorand | By - Xueming Zheng | On - 2021-10-27T08:50:29Z
 19. [6c0..6ff] add deploy script | By - Xueming Zheng | On - 2021-10-27T07:04:07Z
 20. [fa5..91f] add initial back-end | By - Xueming Zheng | On - 2021-10-26T12:25:04Z
 21. [733..7c4] add initial back-end | By - Xueming Zheng | On - 2021-10-26T12:24:59Z
 22. [15a..963] add utils for typescript backend | By - Xueming Zheng | On - 2021-10-26T08:18:06Z
 23. [d29..7e5] remove validators param from operations.py | By - Xueming Zheng | On - 2021-10-25T09:15:42Z
 24. [b29..3a3] initial validateAction | By - Xueming Zheng | On - 2021-10-25T08:58:36Z
 25. [da2..d89] store actions to local storage | By - Xueming Zheng | On - 2021-10-25T06:33:42Z
 26. [674..682] store validators into local state | By - Xueming Zheng | On - 2021-10-24T18:56:51Z
 27. [487..323] opt-in application | By - Xueming Zheng | On - 2021-10-24T15:56:13Z
 28. [47b..959] add setValidators | By - Xueming Zheng | On - 2021-10-24T13:58:46Z
 29. [729..c8b] add setValidators | By - Xueming Zheng | On - 2021-10-24T13:44:47Z
 30. [fd9..c25] remove validators param from createXpApp | By - Xueming Zheng | On - 2021-10-24T13:09:27Z
 31. [e38..75e] add group param in mapping | By - Xueming Zheng | On - 2021-10-24T08:55:46Z
 32. [470..f02] load validators from json | By - Xueming Zheng | On - 2021-10-24T08:11:08Z
 33. [600..47b] fix testing for deploying | By - Xueming Zheng | On - 2021-10-21T09:11:25Z
 34. [c86..1ab] add dotenv | By - Xueming Zheng | On - 2021-10-21T07:39:27Z
 35. [acd..666] fix validateTransferNFT | By - Xueming Zheng | On - 2021-10-20T16:11:18Z
 36. [8dc..708] remove msg_sender | By - Xueming Zheng | On - 2021-10-20T15:49:17Z
 37. [99b..2dd] fix unit64 expectation | By - Xueming Zheng | On - 2021-10-20T14:53:25Z
 38. [37b..7ff] add subroutine to check if validators contains msg.sender | By - Xueming Zheng | On - 2021-10-19T12:49:10Z
 39. [65a..373] add validate_withdraw_frees | By - Xueming Zheng | On - 2021-10-19T07:56:07Z
 40. [51d..2df] add withdraw token | By - Xueming Zheng | On - 2021-10-19T06:06:00Z
 41. [044..e88] fix withdraw_nft | By - Xueming Zheng | On - 2021-10-19T05:57:20Z
 42. [742..5c2] add freeze and fix freeze_nft | By - Xueming Zheng | On - 2021-10-19T05:51:26Z
 43. [8fa..745] update some of contracts | By - Xueming Zheng | On - 2021-10-19T05:23:44Z
 44. [ec8..2c6] update on_withdraw | By - Xueming Zheng | On - 2021-10-19T03:48:08Z
 45. [031..658] update on_freeze_nft | By - Xueming Zheng | On - 2021-10-19T03:42:57Z
 46. [2b7..dbe] add on_freeze | By - Xueming Zheng | On - 2021-10-19T02:44:45Z
 47. [121..e83] add whenNotPaused assert | By - Xueming Zheng | On - 2021-10-18T16:17:38Z
 48. [174..0e1] add whenNotPaused assert | By - Xueming Zheng | On - 2021-10-18T15:39:40Z
 49. [5f0..81b] add validate_set_threshold | By - Xueming Zheng | On - 2021-10-18T14:52:51Z
 50. [d2e..cd3] add validate_set_threshold | By - Xueming Zheng | On - 2021-10-18T13:51:19Z

# demo-algorand

## main


 1. [2f4..29b] initial | By - rocalex | On - 2021-11-04T13:13:53Z

# pyteal-array

## main


 1. [77d..ffe] initial | By - webdev0101 | On - 2021-10-21T08:19:10Z
 2. [ec5..d23] initial | By - webdev0101 | On - 2021-10-21T06:00:55Z
 3. [2ae..7d9] initial | By - webdev0101 | On - 2021-10-21T05:09:38Z

# staker-backend

## master


 1. [a72..9bf] routes: add an image route | By - imsk17 | On - 2021-10-18T09:28:56Z
 2. [ba2..3ad] nfts: dont set image if already exists | By - imsk17 | On - 2021-10-18T08:56:50Z
 3. [e46..34e] nfts: use random image and persist | By - imsk17 | On - 2021-10-18T08:30:44Z
 4. [134..61e] Revert "images: use nft id as image id" | By - imsk17 | On - 2021-10-18T08:23:05Z
 5. [f99..4e0] config: change image.max to 506 | By - imsk17 | On - 2021-10-18T07:55:31Z
 6. [07a..b27] images: use nft id as image id | By - imsk17 | On - 2021-10-18T07:54:56Z
 7. [b5f..3be] Merge remote-tracking branch 'origin/n' | By - Dima Brook | On - 2021-10-18T06:37:33Z
 8. [ada..219] a | By - xp-network | On - 2021-10-18T06:20:04Z
 9. [5e4..cfd] add: TODOs | By - Dima Brook | On - 2021-10-17T18:08:41Z
 10. [37b..e5b] .env | By - Dima Brook | On - 2021-10-17T17:53:34Z
 11. [9b8..4b0] slight modifications | By - Dima Brook | On - 2021-10-17T17:50:34Z
 12. [bfc..a6c] a | By - xp-network | On - 2021-10-17T17:13:23Z
 13. [a63..4fa] a | By - xp-network | On - 2021-10-17T17:09:44Z
 14. [e84..6b4] a | By - xp-network | On - 2021-10-17T16:59:29Z
 15. [5a1..0e4] a | By - xp-network | On - 2021-10-17T16:44:42Z
 16. [535..5da] a | By - xp-network | On - 2021-10-17T16:42:09Z
 17. [bb6..f68] a | By - xp-network | On - 2021-10-17T16:41:11Z
 18. [2a0..9b6] a | By - xp-network | On - 2021-10-17T16:38:26Z
 19. [ff2..355] a | By - xp-network | On - 2021-10-17T16:37:06Z
 20. [1f2..9d4] a | By - xp-network | On - 2021-10-17T16:35:06Z
 21. [ceb..cd8] initial changes for nft data | By - rupansh-arch | On - 2021-10-17T15:46:12Z
 22. [2d6..827] refactor decimals | By - Dima Brook | On - 2021-10-12T11:34:43Z
 23. [157..b3e] normalize BigNumbers | By - Dima Brook | On - 2021-10-12T11:12:22Z
 24. [ae0..3f2] add reward | By - Dima Brook | On - 2021-10-12T10:33:48Z
 25. [8bf..999] fix(bignumber): use strings to avoid overflows | By - imsk17 | On - 2021-10-12T10:05:10Z
 26. [f34..51c] chore(cleanup): get rid of rest file | By - imsk17 | On - 2021-10-01T10:15:48Z
 27. [177..883] initial commit | By - imsk17 | On - 2021-10-01T10:14:33Z

## n


 1. [ada..219] a | By - xp-network | On - 2021-10-18T06:20:04Z
 2. [bfc..a6c] a | By - xp-network | On - 2021-10-17T17:13:23Z
 3. [a63..4fa] a | By - xp-network | On - 2021-10-17T17:09:44Z
 4. [e84..6b4] a | By - xp-network | On - 2021-10-17T16:59:29Z
 5. [5a1..0e4] a | By - xp-network | On - 2021-10-17T16:44:42Z
 6. [535..5da] a | By - xp-network | On - 2021-10-17T16:42:09Z
 7. [bb6..f68] a | By - xp-network | On - 2021-10-17T16:41:11Z
 8. [2a0..9b6] a | By - xp-network | On - 2021-10-17T16:38:26Z
 9. [ff2..355] a | By - xp-network | On - 2021-10-17T16:37:06Z
 10. [1f2..9d4] a | By - xp-network | On - 2021-10-17T16:35:06Z
 11. [ceb..cd8] initial changes for nft data | By - rupansh-arch | On - 2021-10-17T15:46:12Z
 12. [2d6..827] refactor decimals | By - Dima Brook | On - 2021-10-12T11:34:43Z
 13. [157..b3e] normalize BigNumbers | By - Dima Brook | On - 2021-10-12T11:12:22Z
 14. [ae0..3f2] add reward | By - Dima Brook | On - 2021-10-12T10:33:48Z
 15. [8bf..999] fix(bignumber): use strings to avoid overflows | By - imsk17 | On - 2021-10-12T10:05:10Z
 16. [f34..51c] chore(cleanup): get rid of rest file | By - imsk17 | On - 2021-10-01T10:15:48Z
 17. [177..883] initial commit | By - imsk17 | On - 2021-10-01T10:14:33Z

# cmc-bot

## master


 1. [88d..f4e] a | By - xp-network | On - 2021-10-12T08:02:35Z
 2. [79c..eee] a | By - xp-network | On - 2021-10-12T07:57:11Z
 3. [c24..4ff] file updated | By - Yohai Shimon | On - 2021-10-11T10:58:27Z
 4. [157..a4c] file updated | By - Yohai Shimon | On - 2021-10-10T17:00:40Z
 5. [f48..dbb] add: .env trend_change_checker.js | By - Yohai Shimon | On - 2021-10-10T16:52:43Z
 6. [81e..b7a] Update index.js | By - Yohai | On - 2021-10-07T16:15:58Z
 7. [75e..079] Update index.js | By - Yohai | On - 2021-10-07T16:12:29Z
 8. [efa..8a3] Update index.js | By - Yohai | On - 2021-10-07T11:35:59Z
 9. [fb1..133] Update index.js | By - Yohai | On - 2021-10-07T07:07:03Z
 10. [60d..af4] Basic working script | By - Yohai Shimon | On - 2021-10-05T16:40:42Z
 11. [9b7..138] initial commit | By - Yohai Shimon | On - 2021-10-05T16:28:51Z

# xp-solana

## master


 1. [25c..0a9] implement serialize/deserialize | By - faizalshaik | On - 2021-10-08T14:21:14Z
 2. [c75..cc5] structuring | By - faizalshaik | On - 2021-10-08T04:32:09Z
 3. [a34..727] optimize validate actions | By - faizalshaik | On - 2021-10-07T20:17:51Z
 4. [93b..95f] optimize actions | By - faizalshaik | On - 2021-10-07T19:38:48Z
 5. [425..0eb] initialize | By - faizalshaik | On - 2021-10-07T04:37:40Z
 6. [c45..0b2] close/freeze | By - faizalshaik | On - 2021-10-07T04:36:33Z
 7. [4b2..c19] burn/burn_checked | By - faizalshaik | On - 2021-10-07T04:27:42Z
 8. [b21..a24] starting to impl XPNet(SPL token wrapper) | By - faizalshaik | On - 2021-10-06T16:22:52Z
 9. [05c..a04] impl functions | By - faizalshaik | On - 2021-10-05T08:08:46Z
 10. [678..0b6] impl functions and add sub modules | By - faizalshaik | On - 2021-10-04T20:17:32Z
 11. [91f..b5b] impl functions | By - faizalshaik | On - 2021-10-04T18:21:39Z
 12. [5d0..5ef] impl functions | By - faizalshaik | On - 2021-10-04T08:18:20Z
 13. [cbc..0e0] extend error | By - faizalshaik | On - 2021-10-04T06:34:42Z
 14. [9a0..d30] implement functions | By - faizalshaik | On - 2021-10-04T06:34:15Z
 15. [6b7..7d2] implement validate_transfer_nft | By - faizalshaik | On - 2021-10-01T19:41:12Z
 16. [29c..acb] implement process_transfer function | By - faizalshaik | On - 2021-10-01T19:08:02Z
 17. [834..815] init | By - faizalshaik | On - 2021-10-01T08:46:57Z

# nft-backend

## master


 1. [74a..c76] feat(tokenid): setup logic for token ids | By - imsk17 | On - 2021-10-03T11:17:41Z
 2. [f75..7d8] add: REST API | By - Dima | On - 2021-08-17T08:55:35Z
 3. [02d..c9c] add findByNFTHash | By - Dima | On - 2021-08-16T15:28:49Z
 4. [981..12f] refactor NFT entities | By - Dima | On - 2021-08-16T14:30:15Z
 5. [605..a19] add trycatch | By - Dima | On - 2021-08-16T12:50:29Z
 6. [2b8..5a6] initial commit | By - Dima | On - 2021-08-16T12:46:58Z

## web3-testing


 1. [7ed..ef8] change mongo server | By - rupansh-arch | On - 2021-08-23T12:03:40Z
 2. [f75..7d8] add: REST API | By - Dima | On - 2021-08-17T08:55:35Z
 3. [02d..c9c] add findByNFTHash | By - Dima | On - 2021-08-16T15:28:49Z
 4. [981..12f] refactor NFT entities | By - Dima | On - 2021-08-16T14:30:15Z
 5. [605..a19] add trycatch | By - Dima | On - 2021-08-16T12:50:29Z
 6. [2b8..5a6] initial commit | By - Dima | On - 2021-08-16T12:46:58Z
