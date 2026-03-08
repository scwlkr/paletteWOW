// core-js/modules/@3.48.0 downloaded from https://cdn.jsdelivr.net/npm/core-js@3.48.0/modules/

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="description" content="core-js CDN by jsDelivr - A free, fast, and reliable Open Source CDN for npm and GitHub">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>core-js CDN by jsDelivr - A free, fast, and reliable Open Source CDN</title>
		<style>
			body {
				font: 15px/1.4em Arial, "Helvetica Neue", Helvetica, sans-serif;
				margin: 0;
				padding: 20px 20px 30px;
				background-color: #ffffff;
			}

			.container {
				max-width: 960px;
				margin: 0 auto;
				padding: 10px 0;
				background-color: #fff;
			}

			.header {
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
				-webkit-box-pack: justify;
				-ms-flex-pack: justify;
				justify-content: space-between;
				flex-wrap: wrap;
			}

			h1 {
				font-size: 28px;
				line-height: 38px;
				margin: 0 0 15px;
			}

			h2 {
				font-size: 18px;
				font-weight: 400;
				margin: 0;
			}

			.versions {
				max-width: 400px;
				padding: 2px 12px 2px 6px;
			}

			.description {
				margin: 10px 0;
				font-size: 16px;
				color: #666;
			}

			.path {
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
				-webkit-box-pack: justify;
				-ms-flex-pack: justify;
				justify-content: space-between;
				flex-wrap: wrap;
				margin: 15px 0 0;
				padding: 15px 0 30px;
				border-top: 1px solid #e5e5e5;
			}

			.path .versions,
			.path ol {
				margin: 15px 0 0;
			}

			.path ol {
				padding: 0;
				list-style: none;
				font-size: 18px;
				font-weight: 400;
			}

			.path ol li {
				display: inline;
			}

			.listing {
				border: 1px solid #dfe3e7;
				border-radius: 6px;
				-webkit-box-shadow: 0 5px 10px -5px #dfe3e7;
				box-shadow: 0 5px 10px -5px #dfe3e7;
			}

			table {
				width: 100%;
				border-spacing: 0;
			}

			th, td {
				padding: 8px 20px;
				border-bottom: 1px solid #dfe3e7;
			}

			tr:last-child td {
				border-bottom: 0;
			}

			.name.level-up {
				border-bottom: 1px solid #dfe3e7;
			}

			.name.level-up a {
				padding-left: 0;
			}

			.name {
				width: auto;
				text-align: left;
				padding-right: 20px;
			}

			.name a {
				color: #17233b;
				padding-left: 5px;
				position: relative;
			}

			.name svg {
				display: inline-block;
				margin-bottom: -4px;
			}

			.size {
				max-width: 80px;
				text-align: right;
				color: #444;
			}

			th.name, th.size {
				color: #999;
				text-transform: uppercase;
				font-size: 12px;
				letter-spacing: 1px;
			}

			a {
				color: #ff5627;
				text-decoration: none;
			}

			a:hover, a:focus {
				color: #ff5627;
				text-decoration: underline;
			}

			.landing {
				margin-top: 30px;
				text-align: center;
			}

			.landing p {
				margin: 0 0 15px;
			}

			.landing a {
				display: block;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			footer {
				max-width: 960px;
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-orient: vertical;
				-webkit-box-direction: normal;
				-ms-flex-direction: column;
				flex-direction: column;
				-webkit-box-pack: justify;
				-ms-flex-pack: justify;
				justify-content: space-between;
				margin: 0 auto;
				padding: 20px 0 0 0;
				text-align: center;
				font-size: 14px;
				color: #666;
				border-top: 1px solid #edf0f2;
			}

			.footer-left, .footer-right {
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-orient: vertical;
				-webkit-box-direction: normal;
				-ms-flex-direction: column;
				flex-direction: column;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
				margin-bottom: 20px;
			}

			.logo {
				width: 115px;
			}

			.copyright {
				color: #79849a;
				margin: 0;
			}

			@media (min-width: 576px) {
				.footer-left, .footer-right {
					-ms-flex-pack: distribute;
					justify-content: space-around;
					-webkit-box-orient: horizontal;
					-webkit-box-direction: normal;
					-ms-flex-direction: row;
					flex-direction: row;
				}
			}

			@media (min-width: 768px) {
				body {
					padding-top: 40px;
				}

				footer {
					-webkit-box-orient: horizontal;
					-webkit-box-direction: normal;
					-ms-flex-direction: row;
					flex-direction: row;
					padding-top: 30px;
				}

				.container {
					padding-bottom: 20px;
				}

				.footer-right a:first-child, .logo {
					margin-right: 20px;
				}

				.landing {
					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
					-webkit-box-align: start;
					-ms-flex-align: start;
					align-items: flex-start;
					-webkit-box-pack: justify;
					-ms-flex-pack: justify;
					justify-content: space-between;
					margin-top: 40px;
				}

				.landing .right {
					text-align: right;
				}
			}

			.select-css {
				display: block;
				padding: 8px 20px 8px 12px;
				box-sizing: border-box;
				margin: 0;
				border: 1px solid #aaa;
				border-radius: .5em;
				-moz-appearance: none;
				-webkit-appearance: none;
				appearance: none;
				background-color: #fff;
				background-image: url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/icons/caret-down-fill.svg');
				background-repeat: no-repeat, repeat;
				background-position: right 8px top 50%, 0 0;
				background-size: 10px auto, 100%;
				outline: none;
			}

			.select-css::-ms-expand {
				display: none;
			}

			.select-css:hover {
				border-color: #888;
			}

			.select-css option {
				font-weight: normal;
			}
		</style>
	</head>

	<body>
		<div class="container">
			<div class="header">
				<h1>core-js CDN files</h1>

				<a class="badge" href="https://www.jsdelivr.com/package/npm/core-js" title="jsDelivr monthly hits">
					<img alt="jsDelivr monthly hits badge" src="https://data.jsdelivr.com/v1/package/npm/core-js/badge">
				</a>
			</div>


			<div class="path">
				<ol itemscope itemtype="https://schema.org/BreadcrumbList">
					<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
						<a itemscope itemtype="https://schema.org/WebPage" itemprop="item"
						   itemid="/npm/core-js@3.48.0/"
						   href="/npm/core-js@3.48.0/" rel="nofollow">
							<span itemprop="name">core-js@3.48.0</span></a> /
						<meta itemprop="position" content="0">
					</li>
					<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
						<span itemprop="name">modules</span>
						<meta itemprop="position" content="1">
					</li>
				</ol>

				<select class="versions select-css">
					<option value="core-js@4.0.0-alpha.0">core-js@4.0.0-alpha.0</option>
					<option value="core-js@3.48.0">core-js@3.48.0</option>
					<option value="core-js@3.47.0">core-js@3.47.0</option>
					<option value="core-js@3.46.0">core-js@3.46.0</option>
					<option value="core-js@3.45.1">core-js@3.45.1</option>
					<option value="core-js@3.45.0">core-js@3.45.0</option>
					<option value="core-js@3.44.0">core-js@3.44.0</option>
					<option value="core-js@3.43.0">core-js@3.43.0</option>
					<option value="core-js@3.42.0">core-js@3.42.0</option>
					<option value="core-js@3.41.0">core-js@3.41.0</option>
					<option value="core-js@3.40.0">core-js@3.40.0</option>
					<option value="core-js@3.39.0">core-js@3.39.0</option>
					<option value="core-js@3.38.1">core-js@3.38.1</option>
					<option value="core-js@3.38.0">core-js@3.38.0</option>
					<option value="core-js@3.37.1">core-js@3.37.1</option>
					<option value="core-js@3.37.0">core-js@3.37.0</option>
					<option value="core-js@3.36.1">core-js@3.36.1</option>
					<option value="core-js@3.36.0">core-js@3.36.0</option>
					<option value="core-js@3.35.1">core-js@3.35.1</option>
					<option value="core-js@3.35.0">core-js@3.35.0</option>
					<option value="core-js@3.34.0">core-js@3.34.0</option>
					<option value="core-js@3.33.3">core-js@3.33.3</option>
					<option value="core-js@3.33.2">core-js@3.33.2</option>
					<option value="core-js@3.33.1">core-js@3.33.1</option>
					<option value="core-js@3.33.0">core-js@3.33.0</option>
					<option value="core-js@3.32.2">core-js@3.32.2</option>
					<option value="core-js@3.32.1">core-js@3.32.1</option>
					<option value="core-js@3.32.0">core-js@3.32.0</option>
					<option value="core-js@3.31.1">core-js@3.31.1</option>
					<option value="core-js@3.31.0">core-js@3.31.0</option>
					<option value="core-js@3.30.2">core-js@3.30.2</option>
					<option value="core-js@3.30.1">core-js@3.30.1</option>
					<option value="core-js@3.30.0">core-js@3.30.0</option>
					<option value="core-js@3.29.1">core-js@3.29.1</option>
					<option value="core-js@3.29.0">core-js@3.29.0</option>
					<option value="core-js@3.28.0">core-js@3.28.0</option>
					<option value="core-js@3.27.2">core-js@3.27.2</option>
					<option value="core-js@3.27.1">core-js@3.27.1</option>
					<option value="core-js@3.27.0">core-js@3.27.0</option>
					<option value="core-js@3.26.1">core-js@3.26.1</option>
					<option value="core-js@3.26.0">core-js@3.26.0</option>
					<option value="core-js@3.25.5">core-js@3.25.5</option>
					<option value="core-js@3.25.4">core-js@3.25.4</option>
					<option value="core-js@3.25.3">core-js@3.25.3</option>
					<option value="core-js@3.25.2">core-js@3.25.2</option>
					<option value="core-js@3.25.1">core-js@3.25.1</option>
					<option value="core-js@3.25.0">core-js@3.25.0</option>
					<option value="core-js@3.24.1">core-js@3.24.1</option>
					<option value="core-js@3.24.0">core-js@3.24.0</option>
					<option value="core-js@3.23.5">core-js@3.23.5</option>
					<option value="core-js@3.23.4">core-js@3.23.4</option>
					<option value="core-js@3.23.3">core-js@3.23.3</option>
					<option value="core-js@3.23.2">core-js@3.23.2</option>
					<option value="core-js@3.23.1">core-js@3.23.1</option>
					<option value="core-js@3.23.0">core-js@3.23.0</option>
					<option value="core-js@3.22.8">core-js@3.22.8</option>
					<option value="core-js@3.22.7">core-js@3.22.7</option>
					<option value="core-js@3.22.6">core-js@3.22.6</option>
					<option value="core-js@3.22.5">core-js@3.22.5</option>
					<option value="core-js@3.22.4">core-js@3.22.4</option>
					<option value="core-js@3.22.3">core-js@3.22.3</option>
					<option value="core-js@3.22.2">core-js@3.22.2</option>
					<option value="core-js@3.22.1">core-js@3.22.1</option>
					<option value="core-js@3.22.0">core-js@3.22.0</option>
					<option value="core-js@3.21.1">core-js@3.21.1</option>
					<option value="core-js@3.21.0">core-js@3.21.0</option>
					<option value="core-js@3.20.3">core-js@3.20.3</option>
					<option value="core-js@3.20.2">core-js@3.20.2</option>
					<option value="core-js@3.20.1">core-js@3.20.1</option>
					<option value="core-js@3.20.0">core-js@3.20.0</option>
					<option value="core-js@3.19.3">core-js@3.19.3</option>
					<option value="core-js@3.19.2">core-js@3.19.2</option>
					<option value="core-js@3.19.1">core-js@3.19.1</option>
					<option value="core-js@3.19.0">core-js@3.19.0</option>
					<option value="core-js@3.18.3">core-js@3.18.3</option>
					<option value="core-js@3.18.2">core-js@3.18.2</option>
					<option value="core-js@3.18.1">core-js@3.18.1</option>
					<option value="core-js@3.18.0">core-js@3.18.0</option>
					<option value="core-js@3.17.3">core-js@3.17.3</option>
					<option value="core-js@3.17.2">core-js@3.17.2</option>
					<option value="core-js@3.17.1">core-js@3.17.1</option>
					<option value="core-js@3.17.0">core-js@3.17.0</option>
					<option value="core-js@3.16.4">core-js@3.16.4</option>
					<option value="core-js@3.16.3">core-js@3.16.3</option>
					<option value="core-js@3.16.2">core-js@3.16.2</option>
					<option value="core-js@3.16.1">core-js@3.16.1</option>
					<option value="core-js@3.16.0">core-js@3.16.0</option>
					<option value="core-js@3.15.2">core-js@3.15.2</option>
					<option value="core-js@3.15.1">core-js@3.15.1</option>
					<option value="core-js@3.15.0">core-js@3.15.0</option>
					<option value="core-js@3.14.0">core-js@3.14.0</option>
					<option value="core-js@3.13.1">core-js@3.13.1</option>
					<option value="core-js@3.13.0">core-js@3.13.0</option>
					<option value="core-js@3.12.1">core-js@3.12.1</option>
					<option value="core-js@3.12.0">core-js@3.12.0</option>
					<option value="core-js@3.11.3">core-js@3.11.3</option>
					<option value="core-js@3.11.2">core-js@3.11.2</option>
					<option value="core-js@3.11.1">core-js@3.11.1</option>
					<option value="core-js@3.11.0">core-js@3.11.0</option>
					<option value="core-js@3.10.2">core-js@3.10.2</option>
					<option value="core-js@3.10.1">core-js@3.10.1</option>
					<option value="core-js@3.10.0">core-js@3.10.0</option>
					<option value="core-js@3.9.1">core-js@3.9.1</option>
					<option value="core-js@3.9.0">core-js@3.9.0</option>
					<option value="core-js@3.8.3">core-js@3.8.3</option>
					<option value="core-js@3.8.2">core-js@3.8.2</option>
					<option value="core-js@3.8.1">core-js@3.8.1</option>
					<option value="core-js@3.8.0">core-js@3.8.0</option>
					<option value="core-js@3.7.0">core-js@3.7.0</option>
					<option value="core-js@3.6.5">core-js@3.6.5</option>
					<option value="core-js@3.6.4">core-js@3.6.4</option>
					<option value="core-js@3.6.3">core-js@3.6.3</option>
					<option value="core-js@3.6.2">core-js@3.6.2</option>
					<option value="core-js@3.6.1">core-js@3.6.1</option>
					<option value="core-js@3.6.0">core-js@3.6.0</option>
					<option value="core-js@3.5.0">core-js@3.5.0</option>
					<option value="core-js@3.4.8">core-js@3.4.8</option>
					<option value="core-js@3.4.7">core-js@3.4.7</option>
					<option value="core-js@3.4.6">core-js@3.4.6</option>
					<option value="core-js@3.4.5">core-js@3.4.5</option>
					<option value="core-js@3.4.4">core-js@3.4.4</option>
					<option value="core-js@3.4.3">core-js@3.4.3</option>
					<option value="core-js@3.4.2">core-js@3.4.2</option>
					<option value="core-js@3.4.1">core-js@3.4.1</option>
					<option value="core-js@3.4.0">core-js@3.4.0</option>
					<option value="core-js@3.3.6">core-js@3.3.6</option>
					<option value="core-js@3.3.5">core-js@3.3.5</option>
					<option value="core-js@3.3.4">core-js@3.3.4</option>
					<option value="core-js@3.3.3">core-js@3.3.3</option>
					<option value="core-js@3.3.2">core-js@3.3.2</option>
					<option value="core-js@3.3.1">core-js@3.3.1</option>
					<option value="core-js@3.3.0">core-js@3.3.0</option>
					<option value="core-js@3.2.1">core-js@3.2.1</option>
					<option value="core-js@3.2.0">core-js@3.2.0</option>
					<option value="core-js@3.1.4">core-js@3.1.4</option>
					<option value="core-js@3.1.3">core-js@3.1.3</option>
					<option value="core-js@3.1.2">core-js@3.1.2</option>
					<option value="core-js@3.1.1">core-js@3.1.1</option>
					<option value="core-js@3.1.0">core-js@3.1.0</option>
					<option value="core-js@3.0.1">core-js@3.0.1</option>
					<option value="core-js@3.0.0">core-js@3.0.0</option>
					<option value="core-js@3.0.0-beta.20">core-js@3.0.0-beta.20</option>
					<option value="core-js@3.0.0-beta.19">core-js@3.0.0-beta.19</option>
					<option value="core-js@3.0.0-beta.18">core-js@3.0.0-beta.18</option>
					<option value="core-js@3.0.0-beta.17">core-js@3.0.0-beta.17</option>
					<option value="core-js@3.0.0-beta.16">core-js@3.0.0-beta.16</option>
					<option value="core-js@3.0.0-beta.15">core-js@3.0.0-beta.15</option>
					<option value="core-js@3.0.0-beta.14">core-js@3.0.0-beta.14</option>
					<option value="core-js@3.0.0-beta.13">core-js@3.0.0-beta.13</option>
					<option value="core-js@3.0.0-beta.12">core-js@3.0.0-beta.12</option>
					<option value="core-js@3.0.0-beta.11">core-js@3.0.0-beta.11</option>
					<option value="core-js@3.0.0-beta.10">core-js@3.0.0-beta.10</option>
					<option value="core-js@3.0.0-beta.9">core-js@3.0.0-beta.9</option>
					<option value="core-js@3.0.0-beta.8">core-js@3.0.0-beta.8</option>
					<option value="core-js@3.0.0-beta.7">core-js@3.0.0-beta.7</option>
					<option value="core-js@3.0.0-beta.6">core-js@3.0.0-beta.6</option>
					<option value="core-js@3.0.0-beta.5">core-js@3.0.0-beta.5</option>
					<option value="core-js@3.0.0-beta.4">core-js@3.0.0-beta.4</option>
					<option value="core-js@3.0.0-beta.3">core-js@3.0.0-beta.3</option>
					<option value="core-js@3.0.0-beta.2">core-js@3.0.0-beta.2</option>
					<option value="core-js@3.0.0-beta.1">core-js@3.0.0-beta.1</option>
					<option value="core-js@3.0.0-alpha.4">core-js@3.0.0-alpha.4</option>
					<option value="core-js@3.0.0-alpha.3">core-js@3.0.0-alpha.3</option>
					<option value="core-js@3.0.0-alpha.2">core-js@3.0.0-alpha.2</option>
					<option value="core-js@3.0.0-alpha.1">core-js@3.0.0-alpha.1</option>
					<option value="core-js@2.6.12">core-js@2.6.12</option>
					<option value="core-js@2.6.11">core-js@2.6.11</option>
					<option value="core-js@2.6.10">core-js@2.6.10</option>
					<option value="core-js@2.6.9">core-js@2.6.9</option>
					<option value="core-js@2.6.8">core-js@2.6.8</option>
					<option value="core-js@2.6.7">core-js@2.6.7</option>
					<option value="core-js@2.6.6">core-js@2.6.6</option>
					<option value="core-js@2.6.5">core-js@2.6.5</option>
					<option value="core-js@2.6.4">core-js@2.6.4</option>
					<option value="core-js@2.6.3">core-js@2.6.3</option>
					<option value="core-js@2.6.2">core-js@2.6.2</option>
					<option value="core-js@2.6.1">core-js@2.6.1</option>
					<option value="core-js@2.6.0">core-js@2.6.0</option>
					<option value="core-js@2.5.7">core-js@2.5.7</option>
					<option value="core-js@2.5.6">core-js@2.5.6</option>
					<option value="core-js@2.5.5">core-js@2.5.5</option>
					<option value="core-js@2.5.4">core-js@2.5.4</option>
					<option value="core-js@2.5.3">core-js@2.5.3</option>
					<option value="core-js@2.5.2">core-js@2.5.2</option>
					<option value="core-js@2.5.1">core-js@2.5.1</option>
					<option value="core-js@2.5.0">core-js@2.5.0</option>
					<option value="core-js@2.4.1">core-js@2.4.1</option>
					<option value="core-js@2.4.0">core-js@2.4.0</option>
					<option value="core-js@2.3.0">core-js@2.3.0</option>
					<option value="core-js@2.2.2">core-js@2.2.2</option>
					<option value="core-js@2.2.1">core-js@2.2.1</option>
					<option value="core-js@2.2.0">core-js@2.2.0</option>
					<option value="core-js@2.1.5">core-js@2.1.5</option>
					<option value="core-js@2.1.4">core-js@2.1.4</option>
					<option value="core-js@2.1.3">core-js@2.1.3</option>
					<option value="core-js@2.1.2">core-js@2.1.2</option>
					<option value="core-js@2.1.1">core-js@2.1.1</option>
					<option value="core-js@2.1.0">core-js@2.1.0</option>
					<option value="core-js@2.0.3">core-js@2.0.3</option>
					<option value="core-js@2.0.2">core-js@2.0.2</option>
					<option value="core-js@2.0.1">core-js@2.0.1</option>
					<option value="core-js@2.0.0">core-js@2.0.0</option>
					<option value="core-js@2.0.0-beta.2">core-js@2.0.0-beta.2</option>
					<option value="core-js@2.0.0-beta">core-js@2.0.0-beta</option>
					<option value="core-js@2.0.0-alpha">core-js@2.0.0-alpha</option>
					<option value="core-js@1.2.7">core-js@1.2.7</option>
					<option value="core-js@1.2.6">core-js@1.2.6</option>
					<option value="core-js@1.2.5">core-js@1.2.5</option>
					<option value="core-js@1.2.4">core-js@1.2.4</option>
					<option value="core-js@1.2.3">core-js@1.2.3</option>
					<option value="core-js@1.2.2">core-js@1.2.2</option>
					<option value="core-js@1.2.1">core-js@1.2.1</option>
					<option value="core-js@1.2.0">core-js@1.2.0</option>
					<option value="core-js@1.1.4">core-js@1.1.4</option>
					<option value="core-js@1.1.3">core-js@1.1.3</option>
					<option value="core-js@1.1.2">core-js@1.1.2</option>
					<option value="core-js@1.1.1">core-js@1.1.1</option>
					<option value="core-js@1.1.0">core-js@1.1.0</option>
					<option value="core-js@1.0.1">core-js@1.0.1</option>
					<option value="core-js@1.0.0">core-js@1.0.0</option>
					<option value="core-js@0.9.18">core-js@0.9.18</option>
					<option value="core-js@0.9.17">core-js@0.9.17</option>
					<option value="core-js@0.9.16">core-js@0.9.16</option>
					<option value="core-js@0.9.15">core-js@0.9.15</option>
					<option value="core-js@0.9.14">core-js@0.9.14</option>
					<option value="core-js@0.9.13">core-js@0.9.13</option>
					<option value="core-js@0.9.12">core-js@0.9.12</option>
					<option value="core-js@0.9.11">core-js@0.9.11</option>
					<option value="core-js@0.9.10">core-js@0.9.10</option>
					<option value="core-js@0.9.9">core-js@0.9.9</option>
					<option value="core-js@0.9.8">core-js@0.9.8</option>
					<option value="core-js@0.9.7">core-js@0.9.7</option>
					<option value="core-js@0.9.6">core-js@0.9.6</option>
					<option value="core-js@0.9.5">core-js@0.9.5</option>
					<option value="core-js@0.9.4">core-js@0.9.4</option>
					<option value="core-js@0.9.3">core-js@0.9.3</option>
					<option value="core-js@0.9.2">core-js@0.9.2</option>
					<option value="core-js@0.9.1">core-js@0.9.1</option>
					<option value="core-js@0.9.0">core-js@0.9.0</option>
					<option value="core-js@0.8.4">core-js@0.8.4</option>
					<option value="core-js@0.8.3">core-js@0.8.3</option>
					<option value="core-js@0.8.2">core-js@0.8.2</option>
					<option value="core-js@0.8.1">core-js@0.8.1</option>
					<option value="core-js@0.8.0">core-js@0.8.0</option>
					<option value="core-js@0.7.2">core-js@0.7.2</option>
					<option value="core-js@0.7.1">core-js@0.7.1</option>
					<option value="core-js@0.7.0">core-js@0.7.0</option>
					<option value="core-js@0.6.1">core-js@0.6.1</option>
					<option value="core-js@0.6.0">core-js@0.6.0</option>
					<option value="core-js@0.5.4">core-js@0.5.4</option>
					<option value="core-js@0.5.3">core-js@0.5.3</option>
					<option value="core-js@0.5.2">core-js@0.5.2</option>
					<option value="core-js@0.5.1">core-js@0.5.1</option>
					<option value="core-js@0.5.0">core-js@0.5.0</option>
					<option value="core-js@0.4.10">core-js@0.4.10</option>
					<option value="core-js@0.4.9">core-js@0.4.9</option>
					<option value="core-js@0.4.8">core-js@0.4.8</option>
					<option value="core-js@0.4.7">core-js@0.4.7</option>
					<option value="core-js@0.4.6">core-js@0.4.6</option>
					<option value="core-js@0.4.5">core-js@0.4.5</option>
					<option value="core-js@0.4.4">core-js@0.4.4</option>
					<option value="core-js@0.4.3">core-js@0.4.3</option>
					<option value="core-js@0.4.2">core-js@0.4.2</option>
					<option value="core-js@0.4.1">core-js@0.4.1</option>
					<option value="core-js@0.4.0">core-js@0.4.0</option>
					<option value="core-js@0.3.3">core-js@0.3.3</option>
					<option value="core-js@0.3.2">core-js@0.3.2</option>
					<option value="core-js@0.3.1">core-js@0.3.1</option>
					<option value="core-js@0.3.0">core-js@0.3.0</option>
					<option value="core-js@0.2.5">core-js@0.2.5</option>
					<option value="core-js@0.2.4">core-js@0.2.4</option>
					<option value="core-js@0.2.3">core-js@0.2.3</option>
					<option value="core-js@0.2.2">core-js@0.2.2</option>
					<option value="core-js@0.2.1">core-js@0.2.1</option>
					<option value="core-js@0.2.0">core-js@0.2.0</option>
					<option value="core-js@0.1.5">core-js@0.1.5</option>
					<option value="core-js@0.1.4">core-js@0.1.4</option>
					<option value="core-js@0.1.3">core-js@0.1.3</option>
					<option value="core-js@0.1.2">core-js@0.1.2</option>
					<option value="core-js@0.1.1">core-js@0.1.1</option>
					<option value="core-js@0.0.9">core-js@0.0.9</option>
					<option value="core-js@0.0.8">core-js@0.0.8</option>
					<option value="core-js@0.0.7">core-js@0.0.7</option>
					<option value="core-js@0.0.5">core-js@0.0.5</option>
					<option value="core-js@0.0.4">core-js@0.0.4</option>
					<option value="core-js@0.0.3">core-js@0.0.3</option>
				</select>
			</div>

			<div class="listing">
				<table>
					<tbody>
					<tr>
						<td class="name level-up" colspan="2"><a href="../">...</a></td>
					</tr>

					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.aggregate-error.cause.js">es.aggregate-error.cause.js</a>
						</td>
						<td class="size">976 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.aggregate-error.constructor.js">es.aggregate-error.constructor.js</a>
						</td>
						<td class="size">2.32 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.aggregate-error.js">es.aggregate-error.js</a>
						</td>
						<td class="size">149 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.at.js">es.array.at.js</a>
						</td>
						<td class="size">733 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.concat.js">es.array.concat.js</a>
						</td>
						<td class="size">2.32 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.copy-within.js">es.array.copy-within.js</a>
						</td>
						<td class="size">442 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.every.js">es.array.every.js</a>
						</td>
						<td class="size">538 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.fill.js">es.array.fill.js</a>
						</td>
						<td class="size">399 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.filter.js">es.array.filter.js</a>
						</td>
						<td class="size">622 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.find.js">es.array.find.js</a>
						</td>
						<td class="size">771 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.find-index.js">es.array.find-index.js</a>
						</td>
						<td class="size">840 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.find-last.js">es.array.find-last.js</a>
						</td>
						<td class="size">527 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.find-last-index.js">es.array.find-last-index.js</a>
						</td>
						<td class="size">567 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.flat.js">es.array.flat.js</a>
						</td>
						<td class="size">854 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.flat-map.js">es.array.flat-map.js</a>
						</td>
						<td class="size">826 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.for-each.js">es.array.for-each.js</a>
						</td>
						<td class="size">360 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.from.js">es.array.from.js</a>
						</td>
						<td class="size">518 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.from-async.js">es.array.from-async.js</a>
						</td>
						<td class="size">689 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.includes.js">es.array.includes.js</a>
						</td>
						<td class="size">794 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.index-of.js">es.array.index-of.js</a>
						</td>
						<td class="size">973 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.is-array.js">es.array.is-array.js</a>
						</td>
						<td class="size">235 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.iterator.js">es.array.iterator.js</a>
						</td>
						<td class="size">2.55 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.join.js">es.array.join.js</a>
						</td>
						<td class="size">739 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.last-index-of.js">es.array.last-index-of.js</a>
						</td>
						<td class="size">413 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.map.js">es.array.map.js</a>
						</td>
						<td class="size">598 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.of.js">es.array.of.js</a>
						</td>
						<td class="size">964 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.push.js">es.array.push.js</a>
						</td>
						<td class="size">1.44 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.reduce.js">es.array.reduce.js</a>
						</td>
						<td class="size">880 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.reduce-right.js">es.array.reduce-right.js</a>
						</td>
						<td class="size">901 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.reverse.js">es.array.reverse.js</a>
						</td>
						<td class="size">672 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.slice.js">es.array.slice.js</a>
						</td>
						<td class="size">2.13 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.some.js">es.array.some.js</a>
						</td>
						<td class="size">530 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.sort.js">es.array.sort.js</a>
						</td>
						<td class="size">3.22 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.species.js">es.array.species.js</a>
						</td>
						<td class="size">171 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.splice.js">es.array.splice.js</a>
						</td>
						<td class="size">2.74 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.to-reversed.js">es.array.to-reversed.js</a>
						</td>
						<td class="size">747 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.to-sorted.js">es.array.to-sorted.js</a>
						</td>
						<td class="size">958 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.to-spliced.js">es.array.to-spliced.js</a>
						</td>
						<td class="size">1.75 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.unscopables.flat.js">es.array.unscopables.flat.js</a>
						</td>
						<td class="size">289 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.unscopables.flat-map.js">es.array.unscopables.flat-map.js</a>
						</td>
						<td class="size">292 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.unshift.js">es.array.unshift.js</a>
						</td>
						<td class="size">1.54 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array.with.js">es.array.with.js</a>
						</td>
						<td class="size">1.29 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array-buffer.constructor.js">es.array-buffer.constructor.js</a>
						</td>
						<td class="size">588 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array-buffer.detached.js">es.array-buffer.detached.js</a>
						</td>
						<td class="size">596 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array-buffer.is-view.js">es.array-buffer.is-view.js</a>
						</td>
						<td class="size">411 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array-buffer.slice.js">es.array-buffer.slice.js</a>
						</td>
						<td class="size">1.59 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array-buffer.transfer.js">es.array-buffer.transfer.js</a>
						</td>
						<td class="size">404 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.array-buffer.transfer-to-fixed-length.js">es.array-buffer.transfer-to-fixed-length.js</a>
						</td>
						<td class="size">457 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.async-disposable-stack.constructor.js">es.async-disposable-stack.constructor.js</a>
						</td>
						<td class="size">4.89 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.async-iterator.async-dispose.js">es.async-iterator.async-dispose.js</a>
						</td>
						<td class="size">1012 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.data-view.constructor.js">es.data-view.constructor.js</a>
						</td>
						<td class="size">390 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.data-view.get-float16.js">es.data-view.get-float16.js</a>
						</td>
						<td class="size">1.23 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.data-view.js">es.data-view.js</a>
						</td>
						<td class="size">143 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.data-view.set-float16.js">es.data-view.set-float16.js</a>
						</td>
						<td class="size">2.23 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.date.get-year.js">es.date.get-year.js</a>
						</td>
						<td class="size">631 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.date.now.js">es.date.now.js</a>
						</td>
						<td class="size">399 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.date.set-year.js">es.date.set-year.js</a>
						</td>
						<td class="size">686 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.date.to-gmt-string.js">es.date.to-gmt-string.js</a>
						</td>
						<td class="size">236 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.date.to-iso-string.js">es.date.to-iso-string.js</a>
						</td>
						<td class="size">390 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.date.to-json.js">es.date.to-json.js</a>
						</td>
						<td class="size">774 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.date.to-primitive.js">es.date.to-primitive.js</a>
						</td>
						<td class="size">561 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.date.to-string.js">es.date.to-string.js</a>
						</td>
						<td class="size">772 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.disposable-stack.constructor.js">es.disposable-stack.constructor.js</a>
						</td>
						<td class="size">3.92 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.error.cause.js">es.error.cause.js</a>
						</td>
						<td class="size">2.73 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.error.is-error.js">es.error.is-error.js</a>
						</td>
						<td class="size">1.49 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.error.to-string.js">es.error.to-string.js</a>
						</td>
						<td class="size">385 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.escape.js">es.escape.js</a>
						</td>
						<td class="size">1.13 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.function.bind.js">es.function.bind.js</a>
						</td>
						<td class="size">391 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.function.has-instance.js">es.function.has-instance.js</a>
						</td>
						<td class="size">905 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.function.name.js">es.function.name.js</a>
						</td>
						<td class="size">914 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.global-this.js">es.global-this.js</a>
						</td>
						<td class="size">272 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.iterator.concat.js">es.iterator.concat.js</a>
						</td>
						<td class="size">1.61 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.iterator.constructor.js">es.iterator.constructor.js</a>
						</td>
						<td class="size">2.47 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.iterator.dispose.js">es.iterator.dispose.js</a>
						</td>
						<td class="size">680 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.iterator.drop.js">es.iterator.drop.js</a>
						</td>
						<td class="size">2.05 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.iterator.every.js">es.iterator.every.js</a>
						</td>
						<td class="size">1.27 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.iterator.filter.js">es.iterator.filter.js</a>
						</td>
						<td class="size">2.11 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.iterator.find.js">es.iterator.find.js</a>
						</td>
						<td class="size">1.26 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.iterator.flat-map.js">es.iterator.flat-map.js</a>
						</td>
						<td class="size">2.85 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.iterator.for-each.js">es.iterator.for-each.js</a>
						</td>
						<td class="size">1.2 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.iterator.from.js">es.iterator.from.js</a>
						</td>
						<td class="size">1.32 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.iterator.map.js">es.iterator.map.js</a>
						</td>
						<td class="size">1.93 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.iterator.reduce.js">es.iterator.reduce.js</a>
						</td>
						<td class="size">2.07 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.iterator.some.js">es.iterator.some.js</a>
						</td>
						<td class="size">1.26 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.iterator.take.js">es.iterator.take.js</a>
						</td>
						<td class="size">1.64 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.iterator.to-array.js">es.iterator.to-array.js</a>
						</td>
						<td class="size">678 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.json.is-raw-json.js">es.json.is-raw-json.js</a>
						</td>
						<td class="size">417 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.json.parse.js">es.json.parse.js</a>
						</td>
						<td class="size">8.26 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.json.raw-json.js">es.json.raw-json.js</a>
						</td>
						<td class="size">1.54 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.json.stringify.js">es.json.stringify.js</a>
						</td>
						<td class="size">4.99 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.json.to-string-tag.js">es.json.to-string-tag.js</a>
						</td>
						<td class="size">263 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.map.constructor.js">es.map.constructor.js</a>
						</td>
						<td class="size">350 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.map.get-or-insert.js">es.map.get-or-insert.js</a>
						</td>
						<td class="size">579 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.map.get-or-insert-computed.js">es.map.get-or-insert-computed.js</a>
						</td>
						<td class="size">821 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.map.group-by.js">es.map.group-by.js</a>
						</td>
						<td class="size">1.26 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.map.js">es.map.js</a>
						</td>
						<td class="size">137 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.math.acosh.js">es.math.acosh.js</a>
						</td>
						<td class="size">771 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.math.asinh.js">es.math.asinh.js</a>
						</td>
						<td class="size">538 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.math.atanh.js">es.math.atanh.js</a>
						</td>
						<td class="size">481 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.math.cbrt.js">es.math.cbrt.js</a>
						</td>
						<td class="size">334 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.math.clz32.js">es.math.clz32.js</a>
						</td>
						<td class="size">338 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.math.cosh.js">es.math.cosh.js</a>
						</td>
						<td class="size">510 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.math.expm1.js">es.math.expm1.js</a>
						</td>
						<td class="size">321 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.math.f16round.js">es.math.f16round.js</a>
						</td>
						<td class="size">455 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.math.fround.js">es.math.fround.js</a>
						</td>
						<td class="size">228 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.math.hypot.js">es.math.hypot.js</a>
						</td>
						<td class="size">1009 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.math.imul.js">es.math.imul.js</a>
						</td>
						<td class="size">716 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.math.log1p.js">es.math.log1p.js</a>
						</td>
						<td class="size">222 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.math.log2.js">es.math.log2.js</a>
						</td>
						<td class="size">218 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.math.log10.js">es.math.log10.js</a>
						</td>
						<td class="size">224 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.math.sign.js">es.math.sign.js</a>
						</td>
						<td class="size">218 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.math.sinh.js">es.math.sinh.js</a>
						</td>
						<td class="size">669 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.math.sum-precise.js">es.math.sum-precise.js</a>
						</td>
						<td class="size">4.59 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.math.tanh.js">es.math.tanh.js</a>
						</td>
						<td class="size">404 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.math.to-string-tag.js">es.math.to-string-tag.js</a>
						</td>
						<td class="size">198 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.math.trunc.js">es.math.trunc.js</a>
						</td>
						<td class="size">224 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.number.constructor.js">es.number.constructor.js</a>
						</td>
						<td class="size">4.52 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.number.epsilon.js">es.number.epsilon.js</a>
						</td>
						<td class="size">243 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.number.is-finite.js">es.number.is-finite.js</a>
						</td>
						<td class="size">261 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.number.is-integer.js">es.number.is-integer.js</a>
						</td>
						<td class="size">272 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.number.is-nan.js">es.number.is-nan.js</a>
						</td>
						<td class="size">296 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.number.is-safe-integer.js">es.number.is-safe-integer.js</a>
						</td>
						<td class="size">397 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.number.max-safe-integer.js">es.number.max-safe-integer.js</a>
						</td>
						<td class="size">270 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.number.min-safe-integer.js">es.number.min-safe-integer.js</a>
						</td>
						<td class="size">271 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.number.parse-float.js">es.number.parse-float.js</a>
						</td>
						<td class="size">381 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.number.parse-int.js">es.number.parse-int.js</a>
						</td>
						<td class="size">363 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.number.to-exponential.js">es.number.to-exponential.js</a>
						</td>
						<td class="size">2.93 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.number.to-fixed.js">es.number.to-fixed.js</a>
						</td>
						<td class="size">3.63 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.number.to-precision.js">es.number.to-precision.js</a>
						</td>
						<td class="size">815 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.assign.js">es.object.assign.js</a>
						</td>
						<td class="size">354 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.create.js">es.object.create.js</a>
						</td>
						<td class="size">346 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.define-getter.js">es.object.define-getter.js</a>
						</td>
						<td class="size">737 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.define-properties.js">es.object.define-properties.js</a>
						</td>
						<td class="size">496 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.define-property.js">es.object.define-property.js</a>
						</td>
						<td class="size">478 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.define-setter.js">es.object.define-setter.js</a>
						</td>
						<td class="size">737 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.entries.js">es.object.entries.js</a>
						</td>
						<td class="size">296 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.freeze.js">es.object.freeze.js</a>
						</td>
						<td class="size">673 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.from-entries.js">es.object.from-entries.js</a>
						</td>
						<td class="size">477 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.get-own-property-descriptor.js">es.object.get-own-property-descriptor.js</a>
						</td>
						<td class="size">738 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.get-own-property-descriptors.js">es.object.get-own-property-descriptors.js</a>
						</td>
						<td class="size">1.01 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.get-own-property-names.js">es.object.get-own-property-names.js</a>
						</td>
						<td class="size">577 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.get-own-property-symbols.js">es.object.get-own-property-symbols.js</a>
						</td>
						<td class="size">904 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.get-prototype-of.js">es.object.get-prototype-of.js</a>
						</td>
						<td class="size">673 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.group-by.js">es.object.group-by.js</a>
						</td>
						<td class="size">1.55 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.has-own.js">es.object.has-own.js</a>
						</td>
						<td class="size">241 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.is.js">es.object.is.js</a>
						</td>
						<td class="size">215 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.is-extensible.js">es.object.is-extensible.js</a>
						</td>
						<td class="size">386 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.is-frozen.js">es.object.is-frozen.js</a>
						</td>
						<td class="size">800 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.is-sealed.js">es.object.is-sealed.js</a>
						</td>
						<td class="size">800 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.keys.js">es.object.keys.js</a>
						</td>
						<td class="size">476 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.lookup-getter.js">es.object.lookup-getter.js</a>
						</td>
						<td class="size">911 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.lookup-setter.js">es.object.lookup-setter.js</a>
						</td>
						<td class="size">911 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.prevent-extensions.js">es.object.prevent-extensions.js</a>
						</td>
						<td class="size">783 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.proto.js">es.object.proto.js</a>
						</td>
						<td class="size">1.22 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.seal.js">es.object.seal.js</a>
						</td>
						<td class="size">653 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.set-prototype-of.js">es.object.set-prototype-of.js</a>
						</td>
						<td class="size">288 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.to-string.js">es.object.to-string.js</a>
						</td>
						<td class="size">411 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.object.values.js">es.object.values.js</a>
						</td>
						<td class="size">289 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.parse-float.js">es.parse-float.js</a>
						</td>
						<td class="size">278 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.parse-int.js">es.parse-int.js</a>
						</td>
						<td class="size">268 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.promise.all.js">es.promise.all.js</a>
						</td>
						<td class="size">1.39 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.promise.all-settled.js">es.promise.all-settled.js</a>
						</td>
						<td class="size">1.64 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.promise.any.js">es.promise.any.js</a>
						</td>
						<td class="size">1.82 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.promise.catch.js">es.promise.catch.js</a>
						</td>
						<td class="size">1.14 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.promise.constructor.js">es.promise.constructor.js</a>
						</td>
						<td class="size">9.73 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.promise.finally.js">es.promise.finally.js</a>
						</td>
						<td class="size">1.87 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.promise.js">es.promise.js</a>
						</td>
						<td class="size">346 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.promise.race.js">es.promise.race.js</a>
						</td>
						<td class="size">1.02 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.promise.reject.js">es.promise.reject.js</a>
						</td>
						<td class="size">583 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.promise.resolve.js">es.promise.resolve.js</a>
						</td>
						<td class="size">838 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.promise.try.js">es.promise.try.js</a>
						</td>
						<td class="size">1.28 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.promise.with-resolvers.js">es.promise.with-resolvers.js</a>
						</td>
						<td class="size">522 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.reflect.apply.js">es.reflect.apply.js</a>
						</td>
						<td class="size">775 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.reflect.construct.js">es.reflect.construct.js</a>
						</td>
						<td class="size">2.25 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.reflect.define-property.js">es.reflect.define-property.js</a>
						</td>
						<td class="size">1.09 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.reflect.delete-property.js">es.reflect.delete-property.js</a>
						</td>
						<td class="size">566 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.reflect.get.js">es.reflect.get.js</a>
						</td>
						<td class="size">1.07 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.reflect.get-own-property-descriptor.js">es.reflect.get-own-property-descriptor.js</a>
						</td>
						<td class="size">595 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.reflect.get-prototype-of.js">es.reflect.get-prototype-of.js</a>
						</td>
						<td class="size">535 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.reflect.has.js">es.reflect.has.js</a>
						</td>
						<td class="size">247 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.reflect.is-extensible.js">es.reflect.is-extensible.js</a>
						</td>
						<td class="size">408 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.reflect.own-keys.js">es.reflect.own-keys.js</a>
						</td>
						<td class="size">241 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.reflect.prevent-extensions.js">es.reflect.prevent-extensions.js</a>
						</td>
						<td class="size">673 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.reflect.set.js">es.reflect.set.js</a>
						</td>
						<td class="size">2.27 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.reflect.set-prototype-of.js">es.reflect.set-prototype-of.js</a>
						</td>
						<td class="size">647 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.reflect.to-string-tag.js">es.reflect.to-string-tag.js</a>
						</td>
						<td class="size">354 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.regexp.constructor.js">es.regexp.constructor.js</a>
						</td>
						<td class="size">6.69 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.regexp.dot-all.js">es.regexp.dot-all.js</a>
						</td>
						<td class="size">1006 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.regexp.escape.js">es.regexp.escape.js</a>
						</td>
						<td class="size">2.29 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.regexp.exec.js">es.regexp.exec.js</a>
						</td>
						<td class="size">274 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.regexp.flags.js">es.regexp.flags.js</a>
						</td>
						<td class="size">611 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.regexp.sticky.js">es.regexp.sticky.js</a>
						</td>
						<td class="size">1003 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.regexp.test.js">es.regexp.test.js</a>
						</td>
						<td class="size">1.05 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.regexp.to-string.js">es.regexp.to-string.js</a>
						</td>
						<td class="size">1.06 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.set.constructor.js">es.set.constructor.js</a>
						</td>
						<td class="size">350 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.set.difference.v2.js">es.set.difference.v2.js</a>
						</td>
						<td class="size">1.16 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.set.intersection.v2.js">es.set.intersection.v2.js</a>
						</td>
						<td class="size">799 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.set.is-disjoint-from.v2.js">es.set.is-disjoint-from.v2.js</a>
						</td>
						<td class="size">510 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.set.is-subset-of.v2.js">es.set.is-subset-of.v2.js</a>
						</td>
						<td class="size">481 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.set.is-superset-of.v2.js">es.set.is-superset-of.v2.js</a>
						</td>
						<td class="size">496 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.set.js">es.set.js</a>
						</td>
						<td class="size">137 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.set.symmetric-difference.v2.js">es.set.symmetric-difference.v2.js</a>
						</td>
						<td class="size">660 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.set.union.v2.js">es.set.union.v2.js</a>
						</td>
						<td class="size">547 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.anchor.js">es.string.anchor.js</a>
						</td>
						<td class="size">445 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.at-alternative.js">es.string.at-alternative.js</a>
						</td>
						<td class="size">974 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.big.js">es.string.big.js</a>
						</td>
						<td class="size">422 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.blink.js">es.string.blink.js</a>
						</td>
						<td class="size">434 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.bold.js">es.string.bold.js</a>
						</td>
						<td class="size">425 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.code-point-at.js">es.string.code-point-at.js</a>
						</td>
						<td class="size">339 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.ends-with.js">es.string.ends-with.js</a>
						</td>
						<td class="size">1.55 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.fixed.js">es.string.fixed.js</a>
						</td>
						<td class="size">431 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.fontcolor.js">es.string.fontcolor.js</a>
						</td>
						<td class="size">466 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.fontsize.js">es.string.fontsize.js</a>
						</td>
						<td class="size">458 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.from-code-point.js">es.string.from-code-point.js</a>
						</td>
						<td class="size">1.21 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.includes.js">es.string.includes.js</a>
						</td>
						<td class="size">857 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.is-well-formed.js">es.string.is-well-formed.js</a>
						</td>
						<td class="size">880 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.italics.js">es.string.italics.js</a>
						</td>
						<td class="size">440 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.iterator.js">es.string.iterator.js</a>
						</td>
						<td class="size">1.16 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.link.js">es.string.link.js</a>
						</td>
						<td class="size">433 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.match.js">es.string.match.js</a>
						</td>
						<td class="size">2.05 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.match-all.js">es.string.match-all.js</a>
						</td>
						<td class="size">4.27 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.pad-end.js">es.string.pad-end.js</a>
						</td>
						<td class="size">482 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.pad-start.js">es.string.pad-start.js</a>
						</td>
						<td class="size">496 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.raw.js">es.string.raw.js</a>
						</td>
						<td class="size">1012 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.repeat.js">es.string.repeat.js</a>
						</td>
						<td class="size">259 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.replace.js">es.string.replace.js</a>
						</td>
						<td class="size">5.66 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.replace-all.js">es.string.replace-all.js</a>
						</td>
						<td class="size">2.72 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.search.js">es.string.search.js</a>
						</td>
						<td class="size">1.58 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.small.js">es.string.small.js</a>
						</td>
						<td class="size">434 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.split.js">es.string.split.js</a>
						</td>
						<td class="size">4.51 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.starts-with.js">es.string.starts-with.js</a>
						</td>
						<td class="size">1.49 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.strike.js">es.string.strike.js</a>
						</td>
						<td class="size">440 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.sub.js">es.string.sub.js</a>
						</td>
						<td class="size">422 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.substr.js">es.string.substr.js</a>
						</td>
						<td class="size">1.22 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.sup.js">es.string.sup.js</a>
						</td>
						<td class="size">422 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.to-well-formed.js">es.string.to-well-formed.js</a>
						</td>
						<td class="size">1.61 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.trim.js">es.string.trim.js</a>
						</td>
						<td class="size">407 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.trim-end.js">es.string.trim-end.js</a>
						</td>
						<td class="size">479 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.trim-left.js">es.string.trim-left.js</a>
						</td>
						<td class="size">407 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.trim-right.js">es.string.trim-right.js</a>
						</td>
						<td class="size">399 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.string.trim-start.js">es.string.trim-start.js</a>
						</td>
						<td class="size">496 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.suppressed-error.constructor.js">es.suppressed-error.constructor.js</a>
						</td>
						<td class="size">2.93 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.symbol.async-dispose.js">es.symbol.async-dispose.js</a>
						</td>
						<td class="size">955 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.symbol.async-iterator.js">es.symbol.async-iterator.js</a>
						</td>
						<td class="size">230 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.symbol.constructor.js">es.symbol.constructor.js</a>
						</td>
						<td class="size">10.78 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.symbol.description.js">es.symbol.description.js</a>
						</td>
						<td class="size">2.63 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.symbol.dispose.js">es.symbol.dispose.js</a>
						</td>
						<td class="size">929 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.symbol.for.js">es.symbol.for.js</a>
						</td>
						<td class="size">919 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.symbol.has-instance.js">es.symbol.has-instance.js</a>
						</td>
						<td class="size">224 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.symbol.is-concat-spreadable.js">es.symbol.is-concat-spreadable.js</a>
						</td>
						<td class="size">245 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.symbol.iterator.js">es.symbol.iterator.js</a>
						</td>
						<td class="size">215 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.symbol.js">es.symbol.js</a>
						</td>
						<td class="size">322 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.symbol.key-for.js">es.symbol.key-for.js</a>
						</td>
						<td class="size">758 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.symbol.match.js">es.symbol.match.js</a>
						</td>
						<td class="size">206 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.symbol.match-all.js">es.symbol.match-all.js</a>
						</td>
						<td class="size">215 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.symbol.replace.js">es.symbol.replace.js</a>
						</td>
						<td class="size">212 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.symbol.search.js">es.symbol.search.js</a>
						</td>
						<td class="size">209 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.symbol.species.js">es.symbol.species.js</a>
						</td>
						<td class="size">212 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.symbol.split.js">es.symbol.split.js</a>
						</td>
						<td class="size">206 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.symbol.to-primitive.js">es.symbol.to-primitive.js</a>
						</td>
						<td class="size">441 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.symbol.to-string-tag.js">es.symbol.to-string-tag.js</a>
						</td>
						<td class="size">501 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.symbol.unscopables.js">es.symbol.unscopables.js</a>
						</td>
						<td class="size">224 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.at.js">es.typed-array.at.js</a>
						</td>
						<td class="size">738 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.copy-within.js">es.typed-array.copy-within.js</a>
						</td>
						<td class="size">713 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.every.js">es.typed-array.every.js</a>
						</td>
						<td class="size">554 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.fill.js">es.typed-array.fill.js</a>
						</td>
						<td class="size">1.24 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.filter.js">es.typed-array.filter.js</a>
						</td>
						<td class="size">694 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.find.js">es.typed-array.find.js</a>
						</td>
						<td class="size">545 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.find-index.js">es.typed-array.find-index.js</a>
						</td>
						<td class="size">580 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.find-last.js">es.typed-array.find-last.js</a>
						</td>
						<td class="size">583 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.find-last-index.js">es.typed-array.find-last-index.js</a>
						</td>
						<td class="size">618 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.float32-array.js">es.typed-array.float32-array.js</a>
						</td>
						<td class="size">353 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.float64-array.js">es.typed-array.float64-array.js</a>
						</td>
						<td class="size">353 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.for-each.js">es.typed-array.for-each.js</a>
						</td>
						<td class="size">561 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.from.js">es.typed-array.from.js</a>
						</td>
						<td class="size">486 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.includes.js">es.typed-array.includes.js</a>
						</td>
						<td class="size">582 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.index-of.js">es.typed-array.index-of.js</a>
						</td>
						<td class="size">575 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.int8-array.js">es.typed-array.int8-array.js</a>
						</td>
						<td class="size">344 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.int16-array.js">es.typed-array.int16-array.js</a>
						</td>
						<td class="size">347 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.int32-array.js">es.typed-array.int32-array.js</a>
						</td>
						<td class="size">347 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.iterator.js">es.typed-array.iterator.js</a>
						</td>
						<td class="size">1.97 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.join.js">es.typed-array.join.js</a>
						</td>
						<td class="size">521 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.last-index-of.js">es.typed-array.last-index-of.js</a>
						</td>
						<td class="size">686 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.map.js">es.typed-array.map.js</a>
						</td>
						<td class="size">663 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.of.js">es.typed-array.of.js</a>
						</td>
						<td class="size">742 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.reduce.js">es.typed-array.reduce.js</a>
						</td>
						<td class="size">592 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.reduce-right.js">es.typed-array.reduce-right.js</a>
						</td>
						<td class="size">623 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.reverse.js">es.typed-array.reverse.js</a>
						</td>
						<td class="size">658 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.set.js">es.typed-array.set.js</a>
						</td>
						<td class="size">1.95 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.slice.js">es.typed-array.slice.js</a>
						</td>
						<td class="size">948 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.some.js">es.typed-array.some.js</a>
						</td>
						<td class="size">547 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.sort.js">es.typed-array.sort.js</a>
						</td>
						<td class="size">2.43 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.subarray.js">es.typed-array.subarray.js</a>
						</td>
						<td class="size">904 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.to-locale-string.js">es.typed-array.to-locale-string.js</a>
						</td>
						<td class="size">1.15 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.to-reversed.js">es.typed-array.to-reversed.js</a>
						</td>
						<td class="size">722 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.to-sorted.js">es.typed-array.to-sorted.js</a>
						</td>
						<td class="size">929 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.to-string.js">es.typed-array.to-string.js</a>
						</td>
						<td class="size">832 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.uint8-array.js">es.typed-array.uint8-array.js</a>
						</td>
						<td class="size">347 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.uint8-clamped-array.js">es.typed-array.uint8-clamped-array.js</a>
						</td>
						<td class="size">367 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.uint16-array.js">es.typed-array.uint16-array.js</a>
						</td>
						<td class="size">350 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.uint32-array.js">es.typed-array.uint32-array.js</a>
						</td>
						<td class="size">350 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.typed-array.with.js">es.typed-array.with.js</a>
						</td>
						<td class="size">2.06 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.uint8-array.from-base64.js">es.uint8-array.from-base64.js</a>
						</td>
						<td class="size">1.04 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.uint8-array.from-hex.js">es.uint8-array.from-hex.js</a>
						</td>
						<td class="size">457 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.uint8-array.set-from-base64.js">es.uint8-array.set-from-base64.js</a>
						</td>
						<td class="size">1.29 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.uint8-array.set-from-hex.js">es.uint8-array.set-from-hex.js</a>
						</td>
						<td class="size">1.27 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.uint8-array.to-base64.js">es.uint8-array.to-base64.js</a>
						</td>
						<td class="size">2.04 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.uint8-array.to-hex.js">es.uint8-array.to-hex.js</a>
						</td>
						<td class="size">1.14 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.unescape.js">es.unescape.js</a>
						</td>
						<td class="size">1.22 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.weak-map.constructor.js">es.weak-map.constructor.js</a>
						</td>
						<td class="size">4.12 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.weak-map.get-or-insert.js">es.weak-map.get-or-insert.js</a>
						</td>
						<td class="size">621 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.weak-map.get-or-insert-computed.js">es.weak-map.get-or-insert-computed.js</a>
						</td>
						<td class="size">1.21 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.weak-map.js">es.weak-map.js</a>
						</td>
						<td class="size">142 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.weak-set.constructor.js">es.weak-set.constructor.js</a>
						</td>
						<td class="size">364 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/es.weak-set.js">es.weak-set.js</a>
						</td>
						<td class="size">142 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.aggregate-error.js">esnext.aggregate-error.js</a>
						</td>
						<td class="size">89 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.array.at.js">esnext.array.at.js</a>
						</td>
						<td class="size">82 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.array.filter-out.js">esnext.array.filter-out.js</a>
						</td>
						<td class="size">566 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.array.filter-reject.js">esnext.array.filter-reject.js</a>
						</td>
						<td class="size">545 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.array.find-last.js">esnext.array.find-last.js</a>
						</td>
						<td class="size">89 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.array.find-last-index.js">esnext.array.find-last-index.js</a>
						</td>
						<td class="size">95 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.array.from-async.js">esnext.array.from-async.js</a>
						</td>
						<td class="size">90 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.array.group.js">esnext.array.group.js</a>
						</td>
						<td class="size">498 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.array.group-by.js">esnext.array.group-by.js</a>
						</td>
						<td class="size">704 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.array.group-by-to-map.js">esnext.array.group-by-to-map.js</a>
						</td>
						<td class="size">662 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.array.group-to-map.js">esnext.array.group-to-map.js</a>
						</td>
						<td class="size">439 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.array.is-template-object.js">esnext.array.is-template-object.js</a>
						</td>
						<td class="size">963 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.array.last-index.js">esnext.array.last-index.js</a>
						</td>
						<td class="size">738 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.array.last-item.js">esnext.array.last-item.js</a>
						</td>
						<td class="size">908 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.array.to-reversed.js">esnext.array.to-reversed.js</a>
						</td>
						<td class="size">91 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.array.to-sorted.js">esnext.array.to-sorted.js</a>
						</td>
						<td class="size">89 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.array.to-spliced.js">esnext.array.to-spliced.js</a>
						</td>
						<td class="size">90 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.array.unique-by.js">esnext.array.unique-by.js</a>
						</td>
						<td class="size">372 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.array.with.js">esnext.array.with.js</a>
						</td>
						<td class="size">84 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.array-buffer.detached.js">esnext.array-buffer.detached.js</a>
						</td>
						<td class="size">95 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.array-buffer.transfer.js">esnext.array-buffer.transfer.js</a>
						</td>
						<td class="size">95 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.array-buffer.transfer-to-fixed-length.js">esnext.array-buffer.transfer-to-fixed-length.js</a>
						</td>
						<td class="size">111 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.async-disposable-stack.constructor.js">esnext.async-disposable-stack.constructor.js</a>
						</td>
						<td class="size">108 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.async-iterator.as-indexed-pairs.js">esnext.async-iterator.as-indexed-pairs.js</a>
						</td>
						<td class="size">373 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.async-iterator.async-dispose.js">esnext.async-iterator.async-dispose.js</a>
						</td>
						<td class="size">102 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.async-iterator.constructor.js">esnext.async-iterator.constructor.js</a>
						</td>
						<td class="size">1.42 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.async-iterator.drop.js">esnext.async-iterator.drop.js</a>
						</td>
						<td class="size">1.69 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.async-iterator.every.js">esnext.async-iterator.every.js</a>
						</td>
						<td class="size">378 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.async-iterator.filter.js">esnext.async-iterator.filter.js</a>
						</td>
						<td class="size">2.28 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.async-iterator.find.js">esnext.async-iterator.find.js</a>
						</td>
						<td class="size">372 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.async-iterator.flat-map.js">esnext.async-iterator.flat-map.js</a>
						</td>
						<td class="size">3.08 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.async-iterator.for-each.js">esnext.async-iterator.for-each.js</a>
						</td>
						<td class="size">376 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.async-iterator.from.js">esnext.async-iterator.from.js</a>
						</td>
						<td class="size">842 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.async-iterator.indexed.js">esnext.async-iterator.indexed.js</a>
						</td>
						<td class="size">342 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.async-iterator.map.js">esnext.async-iterator.map.js</a>
						</td>
						<td class="size">296 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.async-iterator.reduce.js">esnext.async-iterator.reduce.js</a>
						</td>
						<td class="size">2.32 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.async-iterator.some.js">esnext.async-iterator.some.js</a>
						</td>
						<td class="size">372 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.async-iterator.take.js">esnext.async-iterator.take.js</a>
						</td>
						<td class="size">1.67 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.async-iterator.to-array.js">esnext.async-iterator.to-array.js</a>
						</td>
						<td class="size">385 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.bigint.range.js">esnext.bigint.range.js</a>
						</td>
						<td class="size">521 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.composite-key.js">esnext.composite-key.js</a>
						</td>
						<td class="size">685 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.composite-symbol.js">esnext.composite-symbol.js</a>
						</td>
						<td class="size">601 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.data-view.get-float16.js">esnext.data-view.get-float16.js</a>
						</td>
						<td class="size">95 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.data-view.get-uint8-clamped.js">esnext.data-view.get-uint8-clamped.js</a>
						</td>
						<td class="size">506 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.data-view.set-float16.js">esnext.data-view.set-float16.js</a>
						</td>
						<td class="size">95 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.data-view.set-uint8-clamped.js">esnext.data-view.set-uint8-clamped.js</a>
						</td>
						<td class="size">737 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.disposable-stack.constructor.js">esnext.disposable-stack.constructor.js</a>
						</td>
						<td class="size">102 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.error.is-error.js">esnext.error.is-error.js</a>
						</td>
						<td class="size">88 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.function.demethodize.js">esnext.function.demethodize.js</a>
						</td>
						<td class="size">308 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.function.is-callable.js">esnext.function.is-callable.js</a>
						</td>
						<td class="size">1.3 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.function.is-constructor.js">esnext.function.is-constructor.js</a>
						</td>
						<td class="size">334 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.function.metadata.js">esnext.function.metadata.js</a>
						</td>
						<td class="size">450 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.function.un-this.js">esnext.function.un-this.js</a>
						</td>
						<td class="size">352 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.global-this.js">esnext.global-this.js</a>
						</td>
						<td class="size">85 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.as-indexed-pairs.js">esnext.iterator.as-indexed-pairs.js</a>
						</td>
						<td class="size">357 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.chunks.js">esnext.iterator.chunks.js</a>
						</td>
						<td class="size">1.43 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.concat.js">esnext.iterator.concat.js</a>
						</td>
						<td class="size">89 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.constructor.js">esnext.iterator.constructor.js</a>
						</td>
						<td class="size">94 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.dispose.js">esnext.iterator.dispose.js</a>
						</td>
						<td class="size">90 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.drop.js">esnext.iterator.drop.js</a>
						</td>
						<td class="size">87 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.every.js">esnext.iterator.every.js</a>
						</td>
						<td class="size">88 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.filter.js">esnext.iterator.filter.js</a>
						</td>
						<td class="size">89 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.find.js">esnext.iterator.find.js</a>
						</td>
						<td class="size">87 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.flat-map.js">esnext.iterator.flat-map.js</a>
						</td>
						<td class="size">91 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.for-each.js">esnext.iterator.for-each.js</a>
						</td>
						<td class="size">91 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.from.js">esnext.iterator.from.js</a>
						</td>
						<td class="size">87 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.indexed.js">esnext.iterator.indexed.js</a>
						</td>
						<td class="size">326 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.map.js">esnext.iterator.map.js</a>
						</td>
						<td class="size">86 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.range.js">esnext.iterator.range.js</a>
						</td>
						<td class="size">671 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.reduce.js">esnext.iterator.reduce.js</a>
						</td>
						<td class="size">89 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.sliding.js">esnext.iterator.sliding.js</a>
						</td>
						<td class="size">389 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.some.js">esnext.iterator.some.js</a>
						</td>
						<td class="size">87 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.take.js">esnext.iterator.take.js</a>
						</td>
						<td class="size">87 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.to-array.js">esnext.iterator.to-array.js</a>
						</td>
						<td class="size">91 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.to-async.js">esnext.iterator.to-async.js</a>
						</td>
						<td class="size">641 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.windows.js">esnext.iterator.windows.js</a>
						</td>
						<td class="size">440 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.zip.js">esnext.iterator.zip.js</a>
						</td>
						<td class="size">2.98 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.iterator.zip-keyed.js">esnext.iterator.zip-keyed.js</a>
						</td>
						<td class="size">2.52 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.json.is-raw-json.js">esnext.json.is-raw-json.js</a>
						</td>
						<td class="size">90 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.json.parse.js">esnext.json.parse.js</a>
						</td>
						<td class="size">84 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.json.raw-json.js">esnext.json.raw-json.js</a>
						</td>
						<td class="size">87 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.delete-all.js">esnext.map.delete-all.js</a>
						</td>
						<td class="size">633 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.emplace.js">esnext.map.emplace.js</a>
						</td>
						<td class="size">757 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.every.js">esnext.map.every.js</a>
						</td>
						<td class="size">663 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.filter.js">esnext.map.filter.js</a>
						</td>
						<td class="size">807 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.find.js">esnext.map.find.js</a>
						</td>
						<td class="size">701 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.find-key.js">esnext.map.find-key.js</a>
						</td>
						<td class="size">704 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.from.js">esnext.map.from.js</a>
						</td>
						<td class="size">381 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.get-or-insert.js">esnext.map.get-or-insert.js</a>
						</td>
						<td class="size">91 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.get-or-insert-computed.js">esnext.map.get-or-insert-computed.js</a>
						</td>
						<td class="size">100 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.group-by.js">esnext.map.group-by.js</a>
						</td>
						<td class="size">86 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.includes.js">esnext.map.includes.js</a>
						</td>
						<td class="size">549 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.key-by.js">esnext.map.key-by.js</a>
						</td>
						<td class="size">764 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.key-of.js">esnext.map.key-of.js</a>
						</td>
						<td class="size">510 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.map-keys.js">esnext.map.map-keys.js</a>
						</td>
						<td class="size">801 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.map-values.js">esnext.map.map-values.js</a>
						</td>
						<td class="size">805 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.merge.js">esnext.map.merge.js</a>
						</td>
						<td class="size">745 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.of.js">esnext.map.of.js</a>
						</td>
						<td class="size">369 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.reduce.js">esnext.map.reduce.js</a>
						</td>
						<td class="size">928 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.some.js">esnext.map.some.js</a>
						</td>
						<td class="size">657 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.update.js">esnext.map.update.js</a>
						</td>
						<td class="size">922 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.update-or-insert.js">esnext.map.update-or-insert.js</a>
						</td>
						<td class="size">372 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.map.upsert.js">esnext.map.upsert.js</a>
						</td>
						<td class="size">340 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.math.clamp.js">esnext.math.clamp.js</a>
						</td>
						<td class="size">275 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.math.deg-per-rad.js">esnext.math.deg-per-rad.js</a>
						</td>
						<td class="size">253 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.math.degrees.js">esnext.math.degrees.js</a>
						</td>
						<td class="size">301 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.math.f16round.js">esnext.math.f16round.js</a>
						</td>
						<td class="size">87 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.math.fscale.js">esnext.math.fscale.js</a>
						</td>
						<td class="size">416 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.math.iaddh.js">esnext.math.iaddh.js</a>
						</td>
						<td class="size">434 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.math.imulh.js">esnext.math.imulh.js</a>
						</td>
						<td class="size">539 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.math.isubh.js">esnext.math.isubh.js</a>
						</td>
						<td class="size">433 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.math.rad-per-deg.js">esnext.math.rad-per-deg.js</a>
						</td>
						<td class="size">253 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.math.radians.js">esnext.math.radians.js</a>
						</td>
						<td class="size">301 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.math.scale.js">esnext.math.scale.js</a>
						</td>
						<td class="size">251 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.math.seeded-prng.js">esnext.math.seeded-prng.js</a>
						</td>
						<td class="size">1.57 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.math.signbit.js">esnext.math.signbit.js</a>
						</td>
						<td class="size">358 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.math.sum-precise.js">esnext.math.sum-precise.js</a>
						</td>
						<td class="size">90 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.math.umulh.js">esnext.math.umulh.js</a>
						</td>
						<td class="size">543 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.number.clamp.js">esnext.number.clamp.js</a>
						</td>
						<td class="size">400 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.number.from-string.js">esnext.number.from-string.js</a>
						</td>
						<td class="size">1.7 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.number.range.js">esnext.number.range.js</a>
						</td>
						<td class="size">416 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.object.group-by.js">esnext.object.group-by.js</a>
						</td>
						<td class="size">89 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.object.has-own.js">esnext.object.has-own.js</a>
						</td>
						<td class="size">88 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.object.iterate-entries.js">esnext.object.iterate-entries.js</a>
						</td>
						<td class="size">399 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.object.iterate-keys.js">esnext.object.iterate-keys.js</a>
						</td>
						<td class="size">387 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.object.iterate-values.js">esnext.object.iterate-values.js</a>
						</td>
						<td class="size">395 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.observable.constructor.js">esnext.observable.constructor.js</a>
						</td>
						<td class="size">6.2 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.observable.from.js">esnext.observable.from.js</a>
						</td>
						<td class="size">1.32 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.observable.js">esnext.observable.js</a>
						</td>
						<td class="size">243 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.observable.of.js">esnext.observable.of.js</a>
						</td>
						<td class="size">764 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.promise.all-settled.js">esnext.promise.all-settled.js</a>
						</td>
						<td class="size">96 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.promise.any.js">esnext.promise.any.js</a>
						</td>
						<td class="size">85 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.promise.try.js">esnext.promise.try.js</a>
						</td>
						<td class="size">88 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.promise.with-resolvers.js">esnext.promise.with-resolvers.js</a>
						</td>
						<td class="size">96 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.reflect.define-metadata.js">esnext.reflect.define-metadata.js</a>
						</td>
						<td class="size">717 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.reflect.delete-metadata.js">esnext.reflect.delete-metadata.js</a>
						</td>
						<td class="size">977 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.reflect.get-metadata.js">esnext.reflect.get-metadata.js</a>
						</td>
						<td class="size">1.08 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.reflect.get-metadata-keys.js">esnext.reflect.get-metadata-keys.js</a>
						</td>
						<td class="size">1.22 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.reflect.get-own-metadata.js">esnext.reflect.get-own-metadata.js</a>
						</td>
						<td class="size">688 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.reflect.get-own-metadata-keys.js">esnext.reflect.get-own-metadata-keys.js</a>
						</td>
						<td class="size">677 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.reflect.has-metadata.js">esnext.reflect.has-metadata.js</a>
						</td>
						<td class="size">1006 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.reflect.has-own-metadata.js">esnext.reflect.has-own-metadata.js</a>
						</td>
						<td class="size">688 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.reflect.metadata.js">esnext.reflect.metadata.js</a>
						</td>
						<td class="size">619 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.regexp.escape.js">esnext.regexp.escape.js</a>
						</td>
						<td class="size">90 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.add-all.js">esnext.set.add-all.js</a>
						</td>
						<td class="size">487 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.delete-all.js">esnext.set.delete-all.js</a>
						</td>
						<td class="size">633 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.difference.js">esnext.set.difference.js</a>
						</td>
						<td class="size">519 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.difference.v2.js">esnext.set.difference.v2.js</a>
						</td>
						<td class="size">91 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.every.js">esnext.set.every.js</a>
						</td>
						<td class="size">660 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.filter.js">esnext.set.filter.js</a>
						</td>
						<td class="size">799 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.find.js">esnext.set.find.js</a>
						</td>
						<td class="size">698 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.from.js">esnext.set.from.js</a>
						</td>
						<td class="size">382 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.intersection.js">esnext.set.intersection.js</a>
						</td>
						<td class="size">531 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.intersection.v2.js">esnext.set.intersection.v2.js</a>
						</td>
						<td class="size">93 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.is-disjoint-from.js">esnext.set.is-disjoint-from.js</a>
						</td>
						<td class="size">545 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.is-disjoint-from.v2.js">esnext.set.is-disjoint-from.v2.js</a>
						</td>
						<td class="size">97 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.is-subset-of.js">esnext.set.is-subset-of.js</a>
						</td>
						<td class="size">521 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.is-subset-of.v2.js">esnext.set.is-subset-of.v2.js</a>
						</td>
						<td class="size">93 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.is-superset-of.js">esnext.set.is-superset-of.js</a>
						</td>
						<td class="size">533 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.is-superset-of.v2.js">esnext.set.is-superset-of.v2.js</a>
						</td>
						<td class="size">95 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.join.js">esnext.set.join.js</a>
						</td>
						<td class="size">743 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.map.js">esnext.set.map.js</a>
						</td>
						<td class="size">779 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.of.js">esnext.set.of.js</a>
						</td>
						<td class="size">370 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.reduce.js">esnext.set.reduce.js</a>
						</td>
						<td class="size">925 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.some.js">esnext.set.some.js</a>
						</td>
						<td class="size">654 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.symmetric-difference.js">esnext.set.symmetric-difference.js</a>
						</td>
						<td class="size">574 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.symmetric-difference.v2.js">esnext.set.symmetric-difference.v2.js</a>
						</td>
						<td class="size">101 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.union.js">esnext.set.union.js</a>
						</td>
						<td class="size">489 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.set.union.v2.js">esnext.set.union.v2.js</a>
						</td>
						<td class="size">86 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.string.at.js">esnext.string.at.js</a>
						</td>
						<td class="size">786 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.string.at-alternative.js">esnext.string.at-alternative.js</a>
						</td>
						<td class="size">95 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.string.code-points.js">esnext.string.code-points.js</a>
						</td>
						<td class="size">1.56 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.string.cooked.js">esnext.string.cooked.js</a>
						</td>
						<td class="size">256 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.string.dedent.js">esnext.string.dedent.js</a>
						</td>
						<td class="size">5.02 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.string.is-well-formed.js">esnext.string.is-well-formed.js</a>
						</td>
						<td class="size">95 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.string.match-all.js">esnext.string.match-all.js</a>
						</td>
						<td class="size">90 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.string.replace-all.js">esnext.string.replace-all.js</a>
						</td>
						<td class="size">92 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.string.to-well-formed.js">esnext.string.to-well-formed.js</a>
						</td>
						<td class="size">95 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.suppressed-error.constructor.js">esnext.suppressed-error.constructor.js</a>
						</td>
						<td class="size">102 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.symbol.async-dispose.js">esnext.symbol.async-dispose.js</a>
						</td>
						<td class="size">94 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.symbol.custom-matcher.js">esnext.symbol.custom-matcher.js</a>
						</td>
						<td class="size">230 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.symbol.dispose.js">esnext.symbol.dispose.js</a>
						</td>
						<td class="size">88 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.symbol.is-registered.js">esnext.symbol.is-registered.js</a>
						</td>
						<td class="size">360 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.symbol.is-registered-symbol.js">esnext.symbol.is-registered-symbol.js</a>
						</td>
						<td class="size">324 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.symbol.is-well-known.js">esnext.symbol.is-well-known.js</a>
						</td>
						<td class="size">486 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.symbol.is-well-known-symbol.js">esnext.symbol.is-well-known-symbol.js</a>
						</td>
						<td class="size">451 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.symbol.matcher.js">esnext.symbol.matcher.js</a>
						</td>
						<td class="size">218 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.symbol.metadata.js">esnext.symbol.metadata.js</a>
						</td>
						<td class="size">214 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.symbol.metadata-key.js">esnext.symbol.metadata-key.js</a>
						</td>
						<td class="size">261 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.symbol.observable.js">esnext.symbol.observable.js</a>
						</td>
						<td class="size">218 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.symbol.pattern-match.js">esnext.symbol.pattern-match.js</a>
						</td>
						<td class="size">261 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.symbol.replace-all.js">esnext.symbol.replace-all.js</a>
						</td>
						<td class="size">163 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.typed-array.at.js">esnext.typed-array.at.js</a>
						</td>
						<td class="size">88 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.typed-array.filter-out.js">esnext.typed-array.filter-out.js</a>
						</td>
						<td class="size">750 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.typed-array.filter-reject.js">esnext.typed-array.filter-reject.js</a>
						</td>
						<td class="size">726 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.typed-array.find-last.js">esnext.typed-array.find-last.js</a>
						</td>
						<td class="size">95 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.typed-array.find-last-index.js">esnext.typed-array.find-last-index.js</a>
						</td>
						<td class="size">101 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.typed-array.from-async.js">esnext.typed-array.from-async.js</a>
						</td>
						<td class="size">1.17 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.typed-array.group-by.js">esnext.typed-array.group-by.js</a>
						</td>
						<td class="size">707 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.typed-array.to-reversed.js">esnext.typed-array.to-reversed.js</a>
						</td>
						<td class="size">97 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.typed-array.to-sorted.js">esnext.typed-array.to-sorted.js</a>
						</td>
						<td class="size">95 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.typed-array.to-spliced.js">esnext.typed-array.to-spliced.js</a>
						</td>
						<td class="size">2.15 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.typed-array.unique-by.js">esnext.typed-array.unique-by.js</a>
						</td>
						<td class="size">848 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.typed-array.with.js">esnext.typed-array.with.js</a>
						</td>
						<td class="size">90 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.uint8-array.from-base64.js">esnext.uint8-array.from-base64.js</a>
						</td>
						<td class="size">97 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.uint8-array.from-hex.js">esnext.uint8-array.from-hex.js</a>
						</td>
						<td class="size">94 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.uint8-array.set-from-base64.js">esnext.uint8-array.set-from-base64.js</a>
						</td>
						<td class="size">101 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.uint8-array.set-from-hex.js">esnext.uint8-array.set-from-hex.js</a>
						</td>
						<td class="size">98 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.uint8-array.to-base64.js">esnext.uint8-array.to-base64.js</a>
						</td>
						<td class="size">95 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.uint8-array.to-hex.js">esnext.uint8-array.to-hex.js</a>
						</td>
						<td class="size">92 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.weak-map.delete-all.js">esnext.weak-map.delete-all.js</a>
						</td>
						<td class="size">659 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.weak-map.emplace.js">esnext.weak-map.emplace.js</a>
						</td>
						<td class="size">799 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.weak-map.from.js">esnext.weak-map.from.js</a>
						</td>
						<td class="size">414 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.weak-map.get-or-insert.js">esnext.weak-map.get-or-insert.js</a>
						</td>
						<td class="size">96 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.weak-map.get-or-insert-computed.js">esnext.weak-map.get-or-insert-computed.js</a>
						</td>
						<td class="size">105 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.weak-map.of.js">esnext.weak-map.of.js</a>
						</td>
						<td class="size">402 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.weak-map.upsert.js">esnext.weak-map.upsert.js</a>
						</td>
						<td class="size">346 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.weak-set.add-all.js">esnext.weak-set.add-all.js</a>
						</td>
						<td class="size">513 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.weak-set.delete-all.js">esnext.weak-set.delete-all.js</a>
						</td>
						<td class="size">659 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.weak-set.from.js">esnext.weak-set.from.js</a>
						</td>
						<td class="size">415 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/esnext.weak-set.of.js">esnext.weak-set.of.js</a>
						</td>
						<td class="size">403 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/README.md">README.md</a>
						</td>
						<td class="size">164 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.atob.js">web.atob.js</a>
						</td>
						<td class="size">2.26 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.btoa.js">web.btoa.js</a>
						</td>
						<td class="size">1.86 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.clear-immediate.js">web.clear-immediate.js</a>
						</td>
						<td class="size">392 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.dom-collections.for-each.js">web.dom-collections.for-each.js</a>
						</td>
						<td class="size">918 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.dom-collections.iterator.js">web.dom-collections.iterator.js</a>
						</td>
						<td class="size">1.69 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.dom-exception.constructor.js">web.dom-exception.constructor.js</a>
						</td>
						<td class="size">5.95 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.dom-exception.stack.js">web.dom-exception.stack.js</a>
						</td>
						<td class="size">3.18 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.dom-exception.to-string-tag.js">web.dom-exception.to-string-tag.js</a>
						</td>
						<td class="size">281 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.immediate.js">web.immediate.js</a>
						</td>
						<td class="size">184 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.queue-microtask.js">web.queue-microtask.js</a>
						</td>
						<td class="size">1.07 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.self.js">web.self.js</a>
						</td>
						<td class="size">1.49 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.set-immediate.js">web.set-immediate.js</a>
						</td>
						<td class="size">564 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.set-interval.js">web.set-interval.js</a>
						</td>
						<td class="size">485 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.set-timeout.js">web.set-timeout.js</a>
						</td>
						<td class="size">477 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.structured-clone.js">web.structured-clone.js</a>
						</td>
						<td class="size">18.9 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.timers.js">web.timers.js</a>
						</td>
						<td class="size">179 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.url.can-parse.js">web.url.can-parse.js</a>
						</td>
						<td class="size">1.19 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.url.constructor.js">web.url.constructor.js</a>
						</td>
						<td class="size">35.13 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.url.js">web.url.js</a>
						</td>
						<td class="size">138 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.url.parse.js">web.url.parse.js</a>
						</td>
						<td class="size">801 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.url.to-json.js">web.url.to-json.js</a>
						</td>
						<td class="size">324 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.url-search-params.constructor.js">web.url-search-params.constructor.js</a>
						</td>
						<td class="size">16.75 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.url-search-params.delete.js">web.url-search-params.delete.js</a>
						</td>
						<td class="size">1.79 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.url-search-params.has.js">web.url-search-params.has.js</a>
						</td>
						<td class="size">1.2 KB</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.url-search-params.js">web.url-search-params.js</a>
						</td>
						<td class="size">152 B</td>
					</tr>
					<tr>
						<td class="name">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4C4 2.89543 4.89543 2 6 2H11L16 7V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="#5C667A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
							<a rel="nofollow" href="/npm/core-js@3.48.0/modules/web.url-search-params.size.js">web.url-search-params.size.js</a>
						</td>
						<td class="size">713 B</td>
					</tr>
					</tbody>
				</table>
			</div>

			<div class="landing">
				<p class="left">Free Open Source CDN for <strong>core-js</strong></p>

				<p class="right">
					Looking for a nice landing page for your package?
					<a href="https://www.jsdelivr.com/package/npm/core-js">https://www.jsdelivr.com/package/npm/core-js</a>
				</p>
			</div>
		</div>

		<footer>
			<div class="footer-left">
				<svg class="logo" viewBox="0 0 140 34" xmlns="http://www.w3.org/2000/svg">
					<g fill="#1e3b45">
						<path
							d="m43.616 19.576c0 4.005-1.389 6.008-4.168 6.008-.432 0-.853-.059-1.261-.174v-1.112c.455.154.883.232 1.285.232 1.065 0 1.833-.404 2.304-1.209.471-.807.706-2.063.706-3.769v-10.859h1.134z"/>
						<path
							d="m47.065 24.705v-1.309c1.188.756 2.393 1.135 3.612 1.135 1.296 0 2.28-.268 2.952-.805.671-.537 1.007-1.288 1.007-2.251 0-.85-.226-1.528-.678-2.032-.451-.506-1.429-1.194-2.935-2.067-1.682-.979-2.747-1.799-3.195-2.46-.447-.66-.671-1.422-.671-2.286 0-1.172.455-2.169 1.366-2.988.911-.817 2.126-1.227 3.647-1.227.988 0 1.975.166 2.963.498v1.204c-.972-.44-2.011-.66-3.113-.66-1.127 0-2.02.287-2.681.858-.659.571-.99 1.297-.99 2.177 0 .848.226 1.524.677 2.026.452.5 1.426 1.184 2.923 2.048 1.551.881 2.584 1.663 3.097 2.345.514.684.77 1.469.77 2.356 0 1.274-.442 2.311-1.325 3.114-.884.803-2.133 1.204-3.746 1.204-.572 0-1.229-.09-1.973-.266-.745-.178-1.313-.383-1.707-.614z"/>
						<path
							d="m59.104 25.295v-16.602h5.881c5.895 0 8.844 2.698 8.844 8.093 0 2.585-.805 4.65-2.413 6.194-1.61 1.543-3.753 2.315-6.431 2.315zm3.74-13.556v10.522h1.852c1.621 0 2.892-.485 3.814-1.458s1.383-2.296 1.383-3.97c0-1.583-.457-2.827-1.372-3.734-.914-.907-2.199-1.36-3.85-1.36z"/>
						<path
							d="m86.841 25.295h-9.957v-16.602h9.574v3.046h-5.834v3.693h5.43v3.032h-5.43v3.796h6.217z"/>
						<path d="m99.893 25.295h-9.887v-16.602h3.74v13.568h6.147z"/>
						<path d="m105.989 8.693v16.602h-3.74v-16.602z"/>
						<path
							d="m123.834 8.693-5.719 16.602h-4.236l-5.651-16.602h4.029l3.462 11.553c.186.625.297 1.178.336 1.657h.068c.055-.518.174-1.084.36-1.702l3.439-11.508z"/>
						<path
							d="m140 25.295h-4.295l-2.581-4.273c-.193-.322-.379-.613-.555-.868-.178-.254-.358-.473-.539-.654-.182-.18-.369-.321-.567-.416-.197-.096-.41-.145-.643-.145h-1.006v6.356h-3.74v-16.602h5.926c4.029 0 6.043 1.506 6.043 4.515 0 .578-.088 1.114-.266 1.604s-.428.932-.752 1.325c-.324.395-.717.733-1.176 1.02-.459.285-.969.508-1.534.67v.047c.248.076.486.203.719.375.231.174.455.377.67.61.217.231.424.479.619.746.197.266.377.526.539.782zm-10.185-13.8v4.619h1.62c.803 0 1.448-.231 1.932-.694.494-.471.742-1.053.742-1.749 0-1.45-.87-2.177-2.605-2.177h-1.689z"/>
					</g>
					<path d="m15.386.338-3.106 11.038v.104 11.039l3.106 11.143 3.194-11.143v-11.039-.104z"
						  fill="#bd483b"/>
					<path d="m15.386.338-15.386 5.542 2.186 20.492 13.2 7.29" fill="#e64e3d"/>
					<path d="m15.386 33.662 13.268-7.365 2.483-20.49-15.751-5.469" fill="#bd483b"/>
					<path
						d="m12.594 25.088c-1.514-.473-2.864-1.317-3.94-2.431l-.003-.002c-.131-.137-.257-.274-.381-.418-.838-.979-1.478-2.13-1.857-3.396.251.233.518.447.796.647.003.008.008.016.011.027-.003-.012-.008-.02-.011-.027.398.279.822.526 1.269.737.141.064.282.125.427.186.177.07.36.135.542.195.011.006.024.006.035.01.032.012.065.023.097.033.074.756.649 1.372 1.39 1.504.287 1.157.833 2.146 1.625 2.935z"
						fill="#fec82f"/>
					<path
						d="m13.174 11.794c0 .324.088.627.243.883-1.25 1.753-2.108 3.656-2.479 5.539-.041.209-.077.416-.105.619-.429.113-.79.393-1.016.762-.013 0-.024-.004-.035-.01-.023-.006-.04-.014-.061-.021-.142-.045-.281-.098-.417-.152-.204-.08-.403-.174-.598-.272-.663-.338-1.26-.772-1.781-1.291-.11-.111-.213-.219-.311-.332l-.041-.049c-.038-.045-.078-.092-.115-.137-.017-.021-.032-.039-.047-.059-.014-.018-.024-.031-.037-.045-.005-.01-.013-.016-.017-.023-.02-.022-.037-.047-.053-.068-.008-.012-.017-.022-.023-.029-.001-.004-.002-.004-.004-.008-.013-.014-.024-.033-.037-.049-.055-.072-.107-.149-.157-.225-.009-.012-.019-.024-.025-.039-.006-.006-.015-.018-.02-.027-.014-.203-.02-.408-.02-.617 0-1.882.557-3.636 1.512-5.105.113-.176.235-.348.361-.514.12-.16.245-.319.374-.467 1.126-1.317 2.61-2.315 4.299-2.847.026.182.059.367.095.553.192.967.513 1.942.949 2.898-.271.3-.434.698-.434 1.132z"
						fill="#fec82f"/>
					<path
						d="m12.176 20.479c0 .221-.079.424-.212.58-.029.037-.061.068-.096.1-.161.141-.368.225-.596.225-.173 0-.335-.049-.472-.135-.147-.09-.265-.219-.342-.375-.058-.121-.089-.252-.089-.395 0-.26.11-.494.286-.658.029-.027.06-.051.091-.074.148-.107.331-.17.526-.17.206 0 .395.068.546.186.085.063.155.139.213.229.094.137.145.307.145.487z"
						fill="#fec82f"/>
					<path
						d="m15.777 11.794c0 .147-.032.281-.094.403-.148.299-.456.502-.808.502-.044 0-.087-.002-.128-.006-.008-.004-.016-.004-.025-.006-.383-.066-.684-.369-.741-.756-.007-.043-.01-.09-.01-.137 0-.102.017-.201.05-.295.123-.354.46-.606.854-.606h.002.036c.392.018.72.285.827.645.025.082.037.168.037.256z"
						fill="#fec82f"/>
					<path
						d="m24.752 16.143c0 .907-.129 1.782-.368 2.61-.799-.211-1.606-.52-2.4-.914.022-.109.033-.221.033-.336 0-.225-.044-.442-.125-.639.031-.029.064-.061.095-.094.957-.977 1.763-2.055 2.404-3.212.234.821.361 1.69.361 2.585z"
						fill="#df9c26"/>
					<path
						d="m23.881 12.196c-.063.139-.131.277-.201.416-.627 1.235-1.455 2.382-2.459 3.407-.009.01-.02.02-.028.027-.255-.156-.557-.244-.879-.244-.375 0-.722.123-1.004.328-.514-.404-1.011-.848-1.49-1.327-.608-.604-1.157-1.247-1.647-1.909.252-.297.405-.68.405-1.102 0-.313-.087-.61-.237-.862 1.21-1.163 2.547-2.106 3.917-2.788 1.572.961 2.841 2.372 3.623 4.054z"
						fill="#df9c26"/>
					<path
						d="m21.217 17.503c0 .379-.23.701-.556.836-.108.045-.225.07-.348.07-.063 0-.125-.008-.185-.02-.385-.082-.681-.408-.715-.805.011-.01.021-.016.028-.022-.01-.008-.021-.014-.03-.023-.001-.012-.001-.022-.001-.037 0-.389.25-.723.601-.85.095-.033.196-.053.302-.053.09 0 .179.014.262.039.346.105.606.412.64.785.002.027.002.055.002.08z"
						fill="#df9c26"/>
					<path
						d="m21.452 18.767c-.301.274-.7.44-1.139.44-.351 0-.677-.107-.949-.289-.039.025-.078.051-.115.072-1.233.781-2.538 1.352-3.864 1.698v4.824c3.887 0 7.222-2.37 8.64-5.744-.859-.237-1.723-.573-2.573-1.001z"
						fill="#df9c26"/>
					<path
						d="m15.386 20.688c-.793.205-1.591.33-2.385.367-.042.002-.086.006-.128.008-.151.41-.454.744-.839.94.245.909.688 1.698 1.319 2.327.524.524 1.162.92 1.891 1.18.046 0 .093.002.142.002z"
						fill="#fec82f"/>
					<path
						d="m18.612 17.503c0-.172.026-.34.074-.498-.562-.44-1.106-.92-1.625-1.442-.614-.614-1.172-1.262-1.675-1.934v5.946c1.124-.324 2.235-.823 3.291-1.489.009-.006.02-.014.03-.022-.061-.174-.095-.364-.095-.561z"
						fill="#df9c26"/>
					<path
						d="m15.386 13.629c-.045-.059-.091-.113-.132-.174-.123.029-.249.043-.378.043-.227 0-.441-.045-.637-.123-1.134 1.606-1.912 3.341-2.25 5.049-.032.162-.059.32-.083.475.477.195.848.596.996 1.092.016-.004.029-.004.046-.004.809-.039 1.627-.18 2.438-.412z"
						fill="#fec82f"/>
					<path
						d="m15.386 6.778v3.394c.048.016.098.033.145.055 1.106-1.073 2.316-1.979 3.573-2.681-1.14-.496-2.399-.768-3.718-.768z"
						fill="#df9c26"/>
					<path
						d="m15.386 6.778c-.608 0-1.201.055-1.773.168.025.197.06.404.101.606.168.86.449 1.725.829 2.575.106-.02.219-.033.333-.033.178 0 .347.027.51.078z"
						fill="#fec82f"/>
				</svg>

				<p class="copyright">&copy; jsdelivr.com, 2012 - 2026</p>
			</div>

			<div class="footer-right">
				<a href="https://github.com/jsdelivr/jsdelivr">
					<span class="gh-icon">
						<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12" viewBox="0 0 16 16" xml:space="preserve">
						<path id="XMLID_1_" fill="#ff5627" d="M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4
							C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8
							c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8
							c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1
							c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6
							C16,3.8,12.4,0.2,8,0.2z"/>
						</svg>
					</span>
					Documentation
				</a>

				<a href="https://www.jsdelivr.com/features">Learn more about jsDelivr</a>
			</div>
		</footer>

		<script>
			var versions = document.querySelector('.versions');

			[].slice.call(versions.querySelectorAll('option')).forEach(function(option) {
				if (option.value === 'core-js@3.48.0') {
					option.selected = true;
				}
			});

			versions.addEventListener('change', function() {
				location.pathname = '/npm/' + this.value + '/modules/';
			});
		</script>
	</body>
</html>