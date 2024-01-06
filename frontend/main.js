window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApiUrl = 'https://getresumecounterrrr.azurewebsites.net/api/GetResumeCounters?code=RMoRir1I6GxLgV-WWLnS04NS6Y4umZ4jyRTZSXDDtBWDAzFu_p5m1Q==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounters';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.")
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}