var req = {};

	req.getServiceList = function(callback){
		$.ajax({
			type:"get",
			url:"./js/serviceList.json",
			dataType: "json",
			async:true,
			success: function(res){
				typeof callback == 'function' && callback(res.datas);
			}
		});
	}
	
	req.getComment = function(callback){
		$.ajax({
			type:"get",
			url:"./js/comment.json",
			dataType: "json",
			async:true,
			success: function(res){
				typeof callback == 'function' && callback(res.datas);
			}
		});
	}
