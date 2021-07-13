var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "56700",
        "ok": "42166",
        "ko": "14534"
    },
    "minResponseTime": {
        "total": "24",
        "ok": "24",
        "ko": "3025"
    },
    "maxResponseTime": {
        "total": "60005",
        "ok": "45833",
        "ko": "60005"
    },
    "meanResponseTime": {
        "total": "1832",
        "ok": "972",
        "ko": "4325"
    },
    "standardDeviation": {
        "total": "2022",
        "ok": "1251",
        "ko": "1748"
    },
    "percentiles1": {
        "total": "798",
        "ok": "576",
        "ko": "3507"
    },
    "percentiles2": {
        "total": "3355",
        "ok": "1112",
        "ko": "4443"
    },
    "percentiles3": {
        "total": "5142",
        "ok": "3521",
        "ko": "7976"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7695",
        "ko": "10637"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 28380,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3538,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10248,
    "percentage": 18
},
    "group4": {
    "name": "failed",
    "count": 14534,
    "percentage": 26
},
    "meanNumberOfRequestsPerSecond": {
        "total": "284.925",
        "ok": "211.889",
        "ko": "73.035"
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
        "total": "56700",
        "ok": "42166",
        "ko": "14534"
    },
    "minResponseTime": {
        "total": "24",
        "ok": "24",
        "ko": "3025"
    },
    "maxResponseTime": {
        "total": "60005",
        "ok": "45833",
        "ko": "60005"
    },
    "meanResponseTime": {
        "total": "1832",
        "ok": "972",
        "ko": "4325"
    },
    "standardDeviation": {
        "total": "2022",
        "ok": "1251",
        "ko": "1748"
    },
    "percentiles1": {
        "total": "798",
        "ok": "576",
        "ko": "3507"
    },
    "percentiles2": {
        "total": "3355",
        "ok": "1112",
        "ko": "4443"
    },
    "percentiles3": {
        "total": "5142",
        "ok": "3521",
        "ko": "7976"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7695",
        "ko": "10637"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 28380,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3538,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10248,
    "percentage": 18
},
    "group4": {
    "name": "failed",
    "count": 14534,
    "percentage": 26
},
    "meanNumberOfRequestsPerSecond": {
        "total": "284.925",
        "ok": "211.889",
        "ko": "73.035"
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
