var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "14850",
        "ok": "5520",
        "ko": "9330"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "5",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "7562",
        "ok": "3545",
        "ko": "7562"
    },
    "meanResponseTime": {
        "total": "283",
        "ok": "112",
        "ko": "385"
    },
    "standardDeviation": {
        "total": "301",
        "ok": "217",
        "ko": "298"
    },
    "percentiles1": {
        "total": "231",
        "ok": "18",
        "ko": "506"
    },
    "percentiles2": {
        "total": "507",
        "ok": "116",
        "ko": "508"
    },
    "percentiles3": {
        "total": "510",
        "ok": "449",
        "ko": "510"
    },
    "percentiles4": {
        "total": "1511",
        "ok": "1076",
        "ko": "1523"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5344,
    "percentage": 36
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 144,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 32,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 9330,
    "percentage": 63
},
    "meanNumberOfRequestsPerSecond": {
        "total": "110",
        "ok": "40.889",
        "ko": "69.111"
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
        "total": "14850",
        "ok": "5520",
        "ko": "9330"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "5",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "7562",
        "ok": "3545",
        "ko": "7562"
    },
    "meanResponseTime": {
        "total": "283",
        "ok": "112",
        "ko": "385"
    },
    "standardDeviation": {
        "total": "301",
        "ok": "217",
        "ko": "298"
    },
    "percentiles1": {
        "total": "231",
        "ok": "18",
        "ko": "506"
    },
    "percentiles2": {
        "total": "507",
        "ok": "116",
        "ko": "508"
    },
    "percentiles3": {
        "total": "510",
        "ok": "449",
        "ko": "510"
    },
    "percentiles4": {
        "total": "1511",
        "ok": "1076",
        "ko": "1523"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5344,
    "percentage": 36
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 144,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 32,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 9330,
    "percentage": 63
},
    "meanNumberOfRequestsPerSecond": {
        "total": "110",
        "ok": "40.889",
        "ko": "69.111"
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
