var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "249510",
        "ok": "10370",
        "ko": "239140"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "4"
    },
    "maxResponseTime": {
        "total": "138433",
        "ok": "127636",
        "ko": "138433"
    },
    "meanResponseTime": {
        "total": "24206",
        "ok": "18214",
        "ko": "24466"
    },
    "standardDeviation": {
        "total": "27239",
        "ok": "28186",
        "ko": "27167"
    },
    "percentiles1": {
        "total": "10006",
        "ok": "129",
        "ko": "10014"
    },
    "percentiles2": {
        "total": "44972",
        "ok": "39589",
        "ko": "45092"
    },
    "percentiles3": {
        "total": "75875",
        "ok": "75460",
        "ko": "75891"
    },
    "percentiles4": {
        "total": "93627",
        "ok": "93722",
        "ko": "93624"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6203,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 600,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3567,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 239140,
    "percentage": 96
},
    "meanNumberOfRequestsPerSecond": {
        "total": "251.016",
        "ok": "10.433",
        "ko": "240.584"
    }
},
contents: {
"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "249510",
        "ok": "10370",
        "ko": "239140"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "4"
    },
    "maxResponseTime": {
        "total": "138433",
        "ok": "127636",
        "ko": "138433"
    },
    "meanResponseTime": {
        "total": "24206",
        "ok": "18214",
        "ko": "24466"
    },
    "standardDeviation": {
        "total": "27239",
        "ok": "28186",
        "ko": "27167"
    },
    "percentiles1": {
        "total": "10007",
        "ok": "129",
        "ko": "10015"
    },
    "percentiles2": {
        "total": "44969",
        "ok": "39589",
        "ko": "45092"
    },
    "percentiles3": {
        "total": "75874",
        "ok": "75460",
        "ko": "75891"
    },
    "percentiles4": {
        "total": "93627",
        "ok": "93722",
        "ko": "93624"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6203,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 600,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3567,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 239140,
    "percentage": 96
},
    "meanNumberOfRequestsPerSecond": {
        "total": "251.016",
        "ok": "10.433",
        "ko": "240.584"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
