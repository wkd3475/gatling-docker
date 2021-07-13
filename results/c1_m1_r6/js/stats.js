var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "24150",
        "ok": "23540",
        "ko": "610"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "3004"
    },
    "maxResponseTime": {
        "total": "4117",
        "ok": "3967",
        "ko": "4117"
    },
    "meanResponseTime": {
        "total": "480",
        "ok": "414",
        "ko": "3059"
    },
    "standardDeviation": {
        "total": "784",
        "ok": "674",
        "ko": "157"
    },
    "percentiles1": {
        "total": "90",
        "ok": "87",
        "ko": "3013"
    },
    "percentiles2": {
        "total": "495",
        "ok": "410",
        "ko": "3023"
    },
    "percentiles3": {
        "total": "2585",
        "ok": "2073",
        "ko": "3310"
    },
    "percentiles4": {
        "total": "3015",
        "ok": "2841",
        "ko": "4018"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19440,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1127,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2973,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 610,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "221.56",
        "ok": "215.963",
        "ko": "5.596"
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
        "total": "24150",
        "ok": "23540",
        "ko": "610"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "3004"
    },
    "maxResponseTime": {
        "total": "4117",
        "ok": "3967",
        "ko": "4117"
    },
    "meanResponseTime": {
        "total": "480",
        "ok": "414",
        "ko": "3059"
    },
    "standardDeviation": {
        "total": "784",
        "ok": "674",
        "ko": "157"
    },
    "percentiles1": {
        "total": "90",
        "ok": "87",
        "ko": "3013"
    },
    "percentiles2": {
        "total": "495",
        "ok": "410",
        "ko": "3023"
    },
    "percentiles3": {
        "total": "2585",
        "ok": "2073",
        "ko": "3310"
    },
    "percentiles4": {
        "total": "3015",
        "ok": "2841",
        "ko": "4018"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19440,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1127,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2973,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 610,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "221.56",
        "ok": "215.963",
        "ko": "5.596"
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
