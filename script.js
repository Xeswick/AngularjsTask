(function(){

	var app = angular.module('appName', []);


	app.controller('NewsController', function(){
		this.content = pages;
	});

	app.controller('MenuController', function(){
		this.selectedTab = 1;
		this.isTabSelected = function(tab){
			return (this.selectedTab === tab);
		};
		this.tabSelected = function(tab){
			console.log(tab);
			this.selectedTab = tab;
		};
	});

	app.controller('FilterController', function(){
		this.articles = pages[0];
		this.match = "";
		this.containsSubstring = function(title){
			console.log(title);
			return (title.indexOf(this.match) !== -1);
		};
	});


	var pages = [
		{	
			articles: [	
				{
					title: "Title 1",
					description: "Maecenas vel hendrerit sem, eu egestas ante. Sed posuere orci justo, molestie volutpat ex tristique non. Duis in nibh lorem. Sed iaculis a mauris eu dictum."
				},
				{
					title: "Title 2",
					description: "Maecenas quis convallis elit. Maecenas feugiat quis ante ac gravida. Fusce posuere ligula at risus condimentum, ut tempor dui mollis. Quisque mollis elit at neque porttitor, ac mattis tellus fermentum. Maecenas quis nulla vel nisi dapibus placerat at nec tellus. Proin efficitur urna ut posuere luctus. Nam maximus rutrum massa. Maecenas ipsum justo, viverra quis venenatis in, vulputate et tortor. Sed lacinia vitae tellus ac pharetra."
				},
				{
					title: "Title 3",
					description: "Ut tincidunt magna id lacinia dapibus. In bibendum neque ac arcu interdum, sit amet vehicula nibh bibendum. Proin tempor malesuada viverra. Proin dictum tellus a sapien sollicitudin, et rhoncus mi interdum. Suspendisse tristique nisl vel imperdiet eleifend. Morbi rutrum in mauris quis scelerisque. Maecenas et ligula et nibh placerat commodo id non mi. Cras fringilla accumsan auctor. Nam pellentesque tellus ac efficitur egestas. Aliquam purus nisi, pellentesque id felis a, laoreet iaculis sem. Aenean non arcu ex. Ut tempor ac enim sit amet placerat. Pellentesque at lorem vel metus semper gravida. Praesent sollicitudin, quam eget sagittis lobortis, elit lectus ullamcorper risus, quis mollis justo eros et nisi. Cras id vestibulum est, euismod consequat lacus. Ut id metus in ipsum accumsan lobortis."
				},
				{
					title: "Test 4",
					description: "Vivamus ornare porta pulvinar. Integer nec quam eu dolor vestibulum eleifend. Cras faucibus tincidunt pulvinar. Pellentesque nisi lacus, lacinia non nisi vitae, fringilla bibendum dolor. Mauris nec aliquam metus. Sed pulvinar congue auctor. Sed sit amet gravida mauris, in tristique nisl."
				}
			]
		}, 
		{
			title: "TITLE",
			body: [
				"Maecenas vel hendrerit sem, eu egestas ante. Sed posuere orci justo, molestie volutpat ex tristique non. Duis in nibh lorem. Sed iaculis a mauris eu dictum.",
				"Maecenas quis convallis elit. Maecenas feugiat quis ante ac gravida. Fusce posuere ligula at risus condimentum, ut tempor dui mollis. Quisque mollis elit at neque porttitor, ac mattis tellus fermentum. Maecenas quis nulla vel nisi dapibus placerat at nec tellus. Proin efficitur urna ut posuere luctus. Nam maximus rutrum massa. Maecenas ipsum justo, viverra quis venenatis in, vulputate et tortor. Sed lacinia vitae tellus ac pharetra.",
				"Ut tincidunt magna id lacinia dapibus. In bibendum neque ac arcu interdum, sit amet vehicula nibh bibendum. Proin tempor malesuada viverra. Proin dictum tellus a sapien sollicitudin, et rhoncus mi interdum. Suspendisse tristique nisl vel imperdiet eleifend. Morbi rutrum in mauris quis scelerisque. Maecenas et ligula et nibh placerat commodo id non mi. Cras fringilla accumsan auctor. Nam pellentesque tellus ac efficitur egestas. Aliquam purus nisi, pellentesque id felis a, laoreet iaculis sem. Aenean non arcu ex. Ut tempor ac enim sit amet placerat. Pellentesque at lorem vel metus semper gravida. Praesent sollicitudin, quam eget sagittis lobortis, elit lectus ullamcorper risus, quis mollis justo eros et nisi. Cras id vestibulum est, euismod consequat lacus. Ut id metus in ipsum accumsan lobortis.",
				"Vivamus ornare porta pulvinar. Integer nec quam eu dolor vestibulum eleifend. Cras faucibus tincidunt pulvinar. Pellentesque nisi lacus, lacinia non nisi vitae, fringilla bibendum dolor. Mauris nec aliquam metus. Sed pulvinar congue auctor. Sed sit amet gravida mauris, in tristique nisl.",
				"Maecenas arcu orci, molestie nec porta non, facilisis at orci. Quisque ultricies, lorem sit amet varius malesuada, dui quam maximus ante, id vehicula urna orci sed velit. Donec quis vehicula mauris. Mauris id convallis enim. Aenean in porta eros. Fusce fringilla enim id tortor malesuada pharetra. Maecenas vestibulum et sem non hendrerit. Suspendisse a mollis dolor. Morbi malesuada a mauris vitae mollis. Proin finibus nisl eget interdum varius. Sed arcu ligula, faucibus et dolor sit amet, commodo viverra nunc. Donec mi erat, faucibus et dictum sed, mollis in lorem.",
				"Integer maximus consequat eleifend. Duis in nulla quam. Quisque fermentum aliquam elit, nec tincidunt neque elementum ac. Nullam turpis tortor, mollis sit amet semper eget, tempus pharetra ex. Aenean sed vulputate ante. Proin mattis est at turpis interdum finibus. Suspendisse sollicitudin est vel molestie convallis. Aliquam finibus lorem at orci tempus semper. Phasellus aliquet sed dolor et vestibulum. Proin nec hendrerit dolor, quis tincidunt nisl. Proin consequat enim at ante pulvinar placerat. Donec a mauris quis dui condi"
			]

		}
	]
	
})();