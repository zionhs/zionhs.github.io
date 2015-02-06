function loadRepoData(){
//Json 파일 읽기
$.getJSON( "https://api.github.com/users/zionhs/repos?callback=json", function( data ) {
    var DataArray = data.data;
    for(var i=0; i<DataArray; i++){
        var url = DataArray[i].url;
        var title = "<h1>"+DataArray[i].name+"</h1>";
        var description = "<h2>"+DataArray[i].description+"</h2>";
        var last_update = '<p><i class="fa fa-calendar"></i>'+DataArray[i].updated_at+'</p>';
        var stars = '<p><i class="fa fa-star"></i>'+DataArray[i].stargazers_count+'</p>';
        var forks = '<p><i class="fa fa-code-fork"></i>'+DataArray[i].forks+'</p>';
        var issues = '<p><i class="fa fa-info-circle"></i>'+DataArray[i].open_issues+'</p>';
        
        var item = title + "<br>" + description + "<br>" + last_update + "<br>" + stars + " | " + forks + " | " + issues;
        console.log(item);
        $('#repo_list').append(item);
    }

 
});
}