var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "21000",
        "ok": "14396",
        "ko": "6604"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "3002"
    },
    "maxResponseTime": {
        "total": "4054",
        "ok": "3761",
        "ko": "4054"
    },
    "meanResponseTime": {
        "total": "1283",
        "ok": "485",
        "ko": "3023"
    },
    "standardDeviation": {
        "total": "1367",
        "ok": "835",
        "ko": "85"
    },
    "percentiles1": {
        "total": "258",
        "ok": "55",
        "ko": "3007"
    },
    "percentiles2": {
        "total": "3006",
        "ok": "380",
        "ko": "3009"
    },
    "percentiles3": {
        "total": "3012",
        "ok": "2539",
        "ko": "3088"
    },
    "percentiles4": {
        "total": "3168",
        "ok": "2933",
        "ko": "3309"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11310,
    "percentage": 54
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 516,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2570,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 6604,
    "percentage": 31
},
    "meanNumberOfRequestsPerSecond": {
        "total": "194.444",
        "ok": "133.296",
        "ko": "61.148"
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
        "total": "21000",
        "ok": "14396",
        "ko": "6604"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "3002"
    },
    "maxResponseTime": {
        "total": "4054",
        "ok": "3761",
        "ko": "4054"
    },
    "meanResponseTime": {
        "total": "1283",
        "ok": "485",
        "ko": "3023"
    },
    "standardDeviation": {
        "total": "1367",
        "ok": "835",
        "ko": "85"
    },
    "percentiles1": {
        "total": "258",
        "ok": "55",
        "ko": "3007"
    },
    "percentiles2": {
        "total": "3006",
        "ok": "380",
        "ko": "3009"
    },
    "percentiles3": {
        "total": "3012",
        "ok": "2540",
        "ko": "3088"
    },
    "percentiles4": {
        "total": "3168",
        "ok": "2933",
        "ko": "3309"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11310,
    "percentage": 54
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 516,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2570,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 6604,
    "percentage": 31
},
    "meanNumberOfRequestsPerSecond": {
        "total": "194.444",
        "ok": "133.296",
        "ko": "61.148"
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
