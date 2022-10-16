const env = "goerli";

const profile = {
    "prod": {
        "chain": "0x38",
        "chainName": "Binance Smart Chain Mainnet",
        "rpc": "https://bsc-dataseed1.binance.org",
        "scan": "https://bscscan.com/address/{address}",
        "contract": "0x0000000000000000000000000000000000000000",
        "token": {
            "symbol": "USDT",
            "decimals": 18,
            "image": "https://pancakeswap.finance/images/tokens/0x55d398326f99059fF775485246999027B3197955.png",
            "address": "0x55d398326f99059fF775485246999027B3197955"
        }

    },
    "test": {
        "chain": "0x61",
        "chainName": "BNB Smart Chain Testnet",
        "rpc": "https://data-seed-prebsc-1-s1.binance.org:8545/",
        "scan": "https://testnet.bscscan.com/address/{address}",
        "contract": "0x63f989f879A9883A08b962de0d25BB47EED224AA",
        "token": {
            "symbol": "LUCKYC",
            "decimals": 18,
            "image": "",
            "address": "0x9d5F930A7E3CBa1b3C1e26B4942fB85036856BfD"
        }
    },
    "goerli": {
        "chain": "0x5",
        "chainName": "Goerli Testnet",
        "rpc": "https://goerli.infura.io/v3/",
        "scan": "https://goerli.etherscan.io/address/{address}",
        "contract": "0xaBf48ce840F8D56ec2B38D84f44D3C78a281E042",
        "token": {
            "symbol": "LUCKYC",
            "decimals": 18,
            "image": "",
            "address": "0x9d5F930A7E3CBa1b3C1e26B4942fB85036856BfD"
        }
    }
}
const banCountrys = ["CN"]

let CONTRACT = profile[env].contract;
let TOKEN = profile[env].token.address;
let DECIMALS = profile[env].token.decimals;
let CHAIN_ID = profile[env].chain;
let CHAIN_NAME = profile[env].chainName;
let CHAIN_RPC_URL = profile[env].rpc;
let SYMBOL = profile[env].token.symbol;

console.debug(`config:  env: ${env} contract: ${CONTRACT}, token: ${TOKEN}`);

const LUCKY_TOKEN_ABI = [{ "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "uint256", "name": "totalSupply_", "type": "uint256" }, { "internalType": "uint8", "name": "decimals_", "type": "uint8" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }];
const LUCKY_CONTRACT_ABI = [{ "inputs": [{ "internalType": "address", "name": "_admin", "type": "address" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint256", "name": "_tokenDecimals", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "round", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "winner", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "winAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "feeRate", "type": "uint256" }], "name": "winner", "type": "event" }, { "inputs": [], "name": "LuckyToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "admin", "outputs": [{ "internalType": "contract IAdmin", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "bet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_len", "type": "uint256" }, { "internalType": "uint256", "name": "_feeRate", "type": "uint256" }], "name": "clacWinner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_round", "type": "uint256" }], "name": "participationCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_round", "type": "uint256" }, { "internalType": "address", "name": "_address", "type": "address" }], "name": "personTotal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_round", "type": "uint256" }, { "internalType": "uint256", "name": "_participationIndex", "type": "uint256" }], "name": "queryAddressByIndex", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "round", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_round", "type": "uint256" }], "name": "roundLuckNumber", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_round", "type": "uint256" }], "name": "roundWinner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tokenWei", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_round", "type": "uint256" }], "name": "totalPool", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];

const isOpenClass = 'modal-is-open';
const openingClass = 'modal-is-opening';
const closingClass = 'modal-is-closing';
const animationDuration = 400; // ms
const stroageKey = "lucky-contract-address";

const initialize = async () => {
    let betButton = Id('bet-button');
    let walletConnectNav = Id("wallet-connect-nav");
    let viewContractCode = Id("view-contract-code");
    let addToWallet = Id("add-to-wallet");
    let totalPool = Id("total-pool");
    let totalPoolLable = Id('total-pool-lable');
    let youBet = Id("you-bet");
    let banDialog = Id("ban-dialog");

    // ban IP
    if ("prod" == env) {
        geoip2.country(function (resp) {
            if (banCountrys.indexOf(resp.country.iso_code) != -1) {
                openDialog(banDialog);
            }
        })
    } else {
        console.log("banIP: disabled");
    }


    // init data
    let sacnUrl = profile[env].scan.replace("{address}", CONTRACT);
    //load data
    viewContractCode.setAttribute("href", sacnUrl);
    addToWallet.innerText = SYMBOL;
    Id('total-pool-symbol').innerText = SYMBOL;
    Id('you-bet-symbol').innerText = SYMBOL;

    const {ethereum} = window;
    if (!Boolean(ethereum && ethereum.isMetaMask)) {
        walletConnectNav.innerText = 'Please install MetaMask';
        walletConnectNav.setAttribute('href', 'https://metamask.io');
    } else {
        walletConnectNav.removeAttribute('href');
        try {
            ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{chainId: CHAIN_ID}],
            });
        } catch (switchError) {
            if (switchError.code === 4902) {
                try {
                    ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainId: CHAIN_ID,
                                chainName: CHAIN_NAME,
                                rpcUrls: [CHAIN_RPC_URL],
                            },
                        ],
                    });
                } catch (addError) {
                    // handle "add" error
                }
            }
            // handle other "switch" errors
        }

        ethereum.request({method: 'eth_accounts'}).then((result) => {
            if (result.length > 0) {
                console.log(result[0]);
                walletConnectNav.innerText = minAccount(result[0])
                let signer = provider.getSigner(result[0]);
                let deployedContract = new ethers.Contract(CONTRACT, LUCKY_CONTRACT_ABI, provider).connect(signer);
                deployedContract.round().then((round) => {
                    let roundsIndex = round.toNumber();
                    totalPoolLable.innerText = `Round ${roundsIndex} Total Pool:`
                    deployedContract.totalPool(roundsIndex).then((pool) => {
                        totalPool.innerText = ethers.utils.formatUnits(pool.toBigInt(), 18);
                    }).catch((error) => {
                        console.error(error);
                    });
                    deployedContract.personTotal(roundsIndex, result[0]).then((total) => {
                        youBet.innerText = ethers.utils.formatUnits(total.toBigInt(), 18);
                    }).catch((error) => {
                        console.error(error);
                    });
                });
            }

        }).catch((error) => {
            console.error(error);
        });


        let provider = new ethers.providers.Web3Provider(window.ethereum);
        let deployedContract = new ethers.Contract(CONTRACT, LUCKY_CONTRACT_ABI, provider);
        // init Contract data
        deployedContract.round().then((result) => {
            let roundsIndex = result.toNumber();
            totalPoolLable.innerText = `Round ${roundsIndex} Total Pool:`
            deployedContract.totalPool(roundsIndex).then((result) => {
                totalPool.innerText = ethers.utils.formatUnits(result.toBigInt(), 18);
            }).catch((error) => {
                console.error(error);
            });
        });

        deployedContract.tokenWei().then((result) => {
            let min = ethers.utils.formatUnits(result.toBigInt(), 18)
            betButton.innerText = `Bet ${min} ${SYMBOL}`;
        }).catch((error) => {
            console.error(error);
        });

        async function loadHistory() {
            let provider = new ethers.providers.Web3Provider(window.ethereum);
            let deployedContract = new ethers.Contract(CONTRACT, LUCKY_CONTRACT_ABI, provider);
            let round = await deployedContract.round();
            let template = ''
            for (let i = 1; i < round; i++) {
                let poolValue = ethers.utils.formatUnits(await deployedContract.totalPool(i), 18);
                let winner = await deployedContract.roundWinner(i);
                let luckyNumber = await deployedContract.roundLuckNumber(i);
                template += `<tr><th scope="row">${i}</th><td>${poolValue}</td><td>${luckyNumber}</td><td>${winner}</td></tr>`
            }
            Id('history').innerHTML = template;
        }

        loadHistory()
        // auto reload
        setInterval(() => {
            deployedContract.round().then((result) => {
                let roundsIndex = result.toNumber();
                totalPoolLable.innerText = `Round ${roundsIndex} Total Pool:`
                deployedContract.totalPool(roundsIndex).then((result) => {
                    totalPool.innerText = ethers.utils.formatUnits(result.toBigInt(), 18);
                }).catch((error) => {
                    console.error(error);
                });
                ethereum.request({method: 'eth_accounts'}).then((accounts) => {
                    if (accounts.length > 0) {
                        deployedContract.personTotal(roundsIndex, accounts[0]).then((result) => {
                            youBet.innerText = ethers.utils.formatUnits(result.toBigInt(), 18);
                        }).catch((error) => {
                            console.error(error);
                        });
                    }
                }).catch((error) => {
                    console.error(error);
                });
            });
        }, 3000);


        walletConnectNav.setAttribute("data-tooltip", CHAIN_NAME);

        // nav Connect Wallet(MetaMask)
        walletConnectNav.onclick = async () => {
            ethereum.request({method: 'eth_accounts'}).then((result) => {
                if (!result.length > 0) {
                    ethereum.request({method: 'eth_requestAccounts'}).then(test).catch((error) => {
                        console.error(error);
                    });
                }
            }).catch((error) => {
                console.error(error);
            });

        }

        function test(accounts) {
            walletConnectNav.innerText = minAccount(accounts[0])
            let signer = provider.getSigner(accounts[0]);
            let deployedContract = new ethers.Contract(CONTRACT, LUCKY_CONTRACT_ABI, provider).connect(signer);
            deployedContract.round().then((result) => {
                let roundsIndex = result.toNumber();
                totalPoolLable.innerText = `Round ${roundsIndex} Total Pool:`
                deployedContract.totalPool(roundsIndex).then((result) => {
                    totalPool.innerText = ethers.utils.formatUnits(result.toBigInt(), 18);
                }).catch((error) => {
                    console.error(error);
                });
                deployedContract.personTotal(roundsIndex, accounts[0]).then((result) => {
                    youBet.innerText = ethers.utils.formatUnits(result.toBigInt(), 18);
                }).catch((error) => {
                    console.error(error);
                });
            });
        }


        // bet
        betButton.onclick = async () => {
            let signer = provider.getSigner(ethereum.selectedAddress);
            const erc20Contarct = new ethers.Contract(TOKEN, LUCKY_TOKEN_ABI, provider).connect(signer);
            let deployedContract = new ethers.Contract(CONTRACT, LUCKY_CONTRACT_ABI, provider).connect(signer);
            let etherWei = await deployedContract.tokenWei();
            erc20Contarct.allowance(ethereum.selectedAddress, CONTRACT).then((result) => {
                let allowance = ethers.utils.formatUnits(result.toBigInt(), 18);
                console.log(`allowance: ${allowance}`);
                if (allowance >= ethers.utils.formatUnits(etherWei)) {
                    deployedContract.bet(etherWei).then((result) => {
                        console.log(result);
                    }).catch((error) => {
                        if (error.error) {
                            notify(error.error.message)
                        } else {
                            notify(error.message)
                        }
                    })
                } else {
                    erc20Contarct.approve(CONTRACT, etherWei.mul(10)).then((result) => {
                        notify('Try touch `bet` again after approve success')
                    }).catch((error) => {
                        if (error.error) {
                            notify(error.error.message)
                        } else {
                            notify(error.message)
                        }
                    })
                }
            })
        }

        // add Token to wallet
        addToWallet.onclick = async () => {
            ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: profile[env].token,
                },
            }).then((success) => {
                if (success) {
                    console.log(`${SYMBOL} successfully added to wallet!`);
                } else {
                    throw new Error('Something went wrong.');
                }
            }).catch(console.error);
        }


        ethereum.on('accountsChanged', (accounts) => {
            walletConnectNav.innerText = minAccount(accounts[0])
            let signer = provider.getSigner(accounts[0]);
            let deployedContract = new ethers.Contract(CONTRACT, LUCKY_CONTRACT_ABI, provider).connect(signer);
            deployedContract.round().then((result) => {
                let roundsIndex = result.toNumber();
                totalPoolLable.innerText = `Round ${roundsIndex} Total Pool:`
                deployedContract.totalPool(roundsIndex).then((result) => {
                    totalPool.innerText = ethers.utils.formatUnits(result.toBigInt(), 18);
                }).catch((error) => {
                    console.error(error);
                });
                deployedContract.personTotal(roundsIndex, accounts[0]).then((result) => {
                    youBet.innerText = ethers.utils.formatUnits(result.toBigInt(), 18);
                }).catch((error) => {
                    console.error(error);
                });
            });
        });
    }

}

window.addEventListener('DOMContentLoaded', initialize);


function minAccount(account) {
    return account.substr(0, 5) + "..." + account.substr(38);
}

function notify(message, func) {
    if (window.Notification && window.Notification.permission != "denied") {
        Notification.requestPermission(function (status) {
            let n = new Notification('Warning', {body: `${message}!`, icon: '/icon.png', tag: new Date().getTime()});
            n.onclick = func;
        })
    }
}

function Id(id) {
    return document.getElementById(id);
}

function closeDialog(button, func) {
    document.documentElement.classList.add(closingClass);
    setTimeout(() => {
        document.documentElement.classList.remove(closingClass, isOpenClass);
        func && func(button);
        button.removeAttribute('open');
    }, animationDuration);
}

function openDialog(button, func) {
    document.documentElement.classList.add(isOpenClass, openingClass);
    setTimeout(() => {
        document.documentElement.classList.remove(openingClass);
        func && func(button);
    }, animationDuration);
    button.setAttribute('open', true);
}

