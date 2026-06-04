(function(){
  var files=[
    './assets/v3-policy-data-part-01.txt',
    './assets/v3-policy-data-part-02.txt'
  ];
  var code='';
  for(var i=0;i<files.length;i++){
    var xhr=new XMLHttpRequest();
    xhr.open('GET',files[i],false);
    xhr.send(null);
    if(xhr.status<200||xhr.status>=300){
      throw new Error('加载模型数据失败: '+files[i]+' status='+xhr.status);
    }
    code+=xhr.responseText;
  }
  (0,eval)(code);
})();
