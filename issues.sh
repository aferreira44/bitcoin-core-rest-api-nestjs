#!/bin/bash

# Bitcoin Core methods grouped by category
# control=(
#     "getrpcinfo"
#     "help"
#     "logging"
#     "stop"
#     "uptime"
# )

# mining=(
#     "getblocktemplate"
#     "getmininginfo"
#     "getnetworkhashps"
#     "prioritisetransaction"
#     "submitblock"
#     "submitheader"
# )

network=(
#     "addnode"
#     "clearbanned"
#     "disconnectnode"
#     "getaddednodeinfo"
#     "getconnectioncount"
#     "getnettotals"
#     "getnetworkinfo"
#     "getnodeaddresses"
#     "getpeerinfo"
    "listbanned"
    "ping"
    "setban"
    "setnetworkactive"
)

rawtransactions=(
    "analyzepsbt"
    "combinepsbt"
    "combinerawtransaction"
    "converttopsbt"
    "createpsbt"
    "createrawtransaction"
    "decodepsbt"
    "decoderawtransaction"
    "decodescript"
    "finalizepsbt"
    "fundrawtransaction"
    "getrawtransaction"
    "joinpsbts"
    "sendrawtransaction"
    "signrawtransactionwithkey"
    "testmempoolaccept"
    "utxoupdatepsbt"
)

signer=(
    "enumeratesigners"
)

util=(
    "createmultisig"
    "deriveaddresses"
    "estimatesmartfee"
    "getdescriptorinfo"
    "getindexinfo"
    "signmessagewithprivkey"
    "validateaddress"
    "verifymessage"
)

wallet=(
    "abandontransaction"
    "abortrescan"
    "addmultisigaddress"
    "backupwallet"
    "bumpfee"
    "createwallet"
    "dumpprivkey"
    "dumpwallet"
    "encryptwallet"
    "getaddressesbylabel"
    "getaddressinfo"
    "getbalance"
    "getbalances"
    "getnewaddress"
    "getrawchangeaddress"
    "getreceivedbyaddress"
    "getreceivedbylabel"
    "gettransaction"
    "getunconfirmedbalance"
    "getwalletinfo"
    "importaddress"
    "importdescriptors"
    "importmulti"
    "importprivkey"
    "importprunedfunds"
    "importpubkey"
#     "importwallet"
#     "keypoolrefill"
#     "listaddressgroupings"
#     "listdescriptors"
#     "listlabels"
#     "listlockunspent"
#     "listreceivedbyaddress"
#     "listreceivedbylabel"
#     "listsinceblock"
#     "listtransactions"
#     "listunspent"
#     "listwalletdir"
#     "listwallets"
#     "loadwallet"
#     "lockunspent"
#     "newkeypool"
#     "psbtbumpfee"
#     "removeprunedfunds"
#     "rescanblockchain"
#     "restorewallet"
    "send"
    "sendmany"
    "sendtoaddress"
    "sethdseed"
    "setlabel"
    "settxfee"
    "setwalletflag"
    "signmessage"
    "signrawtransactionwithwallet"
    "unloadwallet"
    "upgradewallet"
    "walletcreatefundedpsbt"
    "walletdisplayaddress"
    "walletlock"
    "walletpassphrase"
    "walletpassphrasechange"
    "walletprocesspsbt"
)

zmq=(
    "getzmqnotifications"
)

# GitHub repository information
repo_owner="aferreira44"
repo_name="bitcoin-core-rest-api-nestjs"
issue_title="Implement REST API endpoint for Bitcoin Core method"

# Create an issue for each method within each category
create_issues() {
    local category_name="$1"
    shift
    local methods=("$@")

    # gh label create "$category_name" --repo "$repo_owner/$repo_name" --color "0e8a16" --description "Methods in the \`$category_name\` category of the Bitcoin Core API."

    for method in "${methods[@]}"
    do
        issue_body="Implement a REST API endpoint for the \`$category_name\`: \`$method\` method of the $category_name category in Bitcoin Core."

        # Create the issue using gh tool
        gh issue create \
            --repo "$repo_owner/$repo_name" \
            --title "$category_name: $method - $issue_title" \
            --body "$issue_body" \
            --label "good first issue" \
            --label "help wanted" \
            --label "bitcoin" \
            --label "api" \
            --label "$category_name" \

        sleep 2

        echo "Created issue for method: $first_name"
    done
    echo "All issues created for $category_name category."
}

# Call create_issues function for each category
# create_issues "Control" "${control[@]}"
# create_issues "Mining" "${mining[@]}"
create_issues "Network" "${network[@]}"
create_issues "Rawtransactions" "${rawtransactions[@]}"
create_issues "Signer" "${signer[@]}"
create_issues "Util" "${util[@]}"
create_issues "Wallet" "${wallet[@]}"
create_issues "Zmq" "${zmq[@]}"

echo "All issues created successfully."
