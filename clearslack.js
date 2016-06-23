(function(){
	var delete_all = document.createElement('a')
	$(delete_all).addClass('btn jack_execute_delete')
	$(delete_all).css('background', 'red')
	$(delete_all).text("Delete Selected Files")
	$('div.col.span_1_of_3').append(delete_all)

	var payload = []

	$('.file_list_item').each(function(){
		$(this).css({
			'background-color': '#fff',
    	'border-color': 'rgba(0,0,0,.1)'
		})
		$(this).find('.actions').css({
			opacity: 1
		})

		var btn = document.createElement('button')
		$(btn).addClass('btn_icon btn_outline jack_delete')
		$(btn).text('Delete File Below')
		$(btn).css({
			'border': '1px solid',
   	 	'border-color': 'red',
    	'border-radius': '4px',
    	'color': 'red !important',
    	'width': '100px'
		})

		$(btn).insertBefore(this)

	})
	$(document).on('click', '.jack_delete', function(e){
		e.preventDefault()
		$(this).addClass('jack_to_delete')
		$(this).css({
			'background': 'red',
			'color': 'white !important'
		})
	})
	$(document).on('click', '.jack_to_delete', function(e){
		e.preventDefault()
		$(this).removeClass('jack_to_delete')
		$(this).css({
			'background': 'white',
			'color': 'red !important'
		})
	})

	$(document).on('click', '.jack_execute_delete', function(e){
		e.preventDefault()
		$('.jack_to_delete').each(function(){
			var file = $(this).next()
			var fileId = $(file).attr('data-file-id')
			window.TS.files.deleteFile(fileId)
			$(file).hide()
			$(this).hide()
		})
	})
	
})()