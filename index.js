function superbowlWin(records){
    2015 ;"W",
    2014 ; "N/A",
    2013 ; "L"
    const winningYear = records.find(record => record.result ==="W");
    return winningYear ? winningYear.year : undefined;
    
}
