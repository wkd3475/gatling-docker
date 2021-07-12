var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1375",
        "ok": "1375",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "41609",
        "ok": "41609",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "23832",
        "ok": "23832",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "15010",
        "ok": "15010",
        "ko": "-"
    },
    "percentiles1": {
        "total": "31525",
        "ok": "31525",
        "ko": "-"
    },
    "percentiles2": {
        "total": "35880",
        "ok": "35880",
        "ko": "-"
    },
    "percentiles3": {
        "total": "37538",
        "ok": "37538",
        "ko": "-"
    },
    "percentiles4": {
        "total": "37697",
        "ok": "37697",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 284,
    "percentage": 21
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1081,
    "percentage": 79
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "17.405",
        "ok": "17.405",
        "ko": "-"
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
        "total": "1375",
        "ok": "1375",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "41609",
        "ok": "41609",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "23832",
        "ok": "23832",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "15010",
        "ok": "15010",
        "ko": "-"
    },
    "percentiles1": {
        "total": "31525",
        "ok": "31525",
        "ko": "-"
    },
    "percentiles2": {
        "total": "35880",
        "ok": "35880",
        "ko": "-"
    },
    "percentiles3": {
        "total": "37538",
        "ok": "37538",
        "ko": "-"
    },
    "percentiles4": {
        "total": "37697",
        "ok": "37697",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 284,
    "percentage": 21
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1081,
    "percentage": 79
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "17.405",
        "ok": "17.405",
        "ko": "-"
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
