var execSync = require('child_process').execSync;

module.exports = checkFork

function checkFork(){
  // for zcashd - check in PATH
  // if there's executable zcash-cli in current directory...
  // output into a logfile? distributed through ansible playbook? Ansible var, so running ansible will substitute with actual path to zcash cli
   var result = execSync('~/Zcash/zcash/src/zcash-cli getchaintips')
   var chaintips = JSON.parse(result.toString());
   console.log(chaintips)

   var forkStatus = "No";
   for( var i in chaintips){
     var status = chaintips[i];
     var branchlen = status["branchlen"];
     // For testing
    //  if (branchlen > 0){
     if (branchlen > 6 && branchlen < 11){
       forkStatus = "Maybe";
     } else if (branchlen > 11 ) {
       forkStatus = "Yes";
     }
   }
   return forkStatus
 };
