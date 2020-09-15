exports.getAgeFromDate = function(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    let age = age_dt.getUTCFullYear() - 1970;

    if (age < 0) {
        throw new Error('Date cannot be in the future');
    } else {
        return age;
    }
}