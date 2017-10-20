<?php
	include('controller/c_tintuc.php');
	$c_tintuc = new C_tintuc();
	$noidung = $c_tintuc->index();
	$menu = $noidung['menu'];
	$tinnoibat= $noidung['tinnoibat'];
	$tinnoibat1= $noidung['tinnoibat1'];
?>

<!DOCTYPE HTML>
<!-- BEGIN html -->
<html lang = "en">
	<!-- BEGIN head -->

<head>
		<title>Trương Lan</title>

		<!-- Meta Tags -->
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="description" content="" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

		<!-- Favicon -->
		<link rel="shortcut icon" href="public/images/favicon.png" type="image/x-icon" />

		<!-- Stylesheets -->
		<link type="text/css" rel="stylesheet" href="public/css/reset.css" />
		<link type="text/css" rel="stylesheet" href="public/css/font-awesome.min.css" />
		<link type="text/css" rel="stylesheet" href="public/css/weather-icons.min.css" />
		<link href='http://fonts.googleapis.com/css?family=Noto+Sans:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Arvo:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
		<link type="text/css" rel="stylesheet" href="public/css/bootstrap.min.css" />
		<link type="text/css" rel="stylesheet" href="public/css/dat-menu.css" />
		<link type="text/css" rel="stylesheet" href="public/css/main-stylesheet.css" />
		<link type="text/css" rel="stylesheet" href="public/css/ot-lightbox.css" />
		<link type="text/css" rel="stylesheet" href="public/css/shortcodes.css" />
		<link type="text/css" rel="stylesheet" href="public/css/responsive.css" />

		<style>
			
			body {
				font-size: 16px;
				font-family: 'Noto Sans', sans-serif;
				color: #5e5e5e;
			}

			h1, h2, h3, h4, h5, h6 {
				font-family: 'Arvo', serif;
				color: #3f3f3f;
			}
		</style>

	
	<!-- END head -->
	</head>

	<!-- BEGIN body -->
	<!-- <body> -->
	<body class="ot-menu-will-follow">

		<!-- BEGIN .boxed -->
		<div class="boxed">
			<!-- BEGIN .header -->
			<header class="header">
				<!-- BEGIN .top-menu -->
				<div class="top-menu">
				
					<!-- BEGIN .wrapper -->
					<div class="wrapper">
						<nav class="top-menu-soc right">
							<ul>
								<li><a href="#" target="_blank" class="hover-color-login"><i class=""></i>Đăng ký</a></li>
								<li><a href="#" target="_blank" class="hover-color-login"><i class=""></i>Đăng nhập</a></li>
								<li><a href="#" target="_blank" class="hover-color-login"><i class=""></i>Đăng xuất</a></li>
								
							</ul>
						</nav>

						<nav class="top-menu-list">
							<ul class="load-responsive" rel="Top Menu">
								<li><a href="index.html"><i class="fa fa-home"></i></a></li>
								<li><a href="#"><i class="fa fa-phone"></i> 04.21092016</a></li>
								<li><a href="#"><i class="fa fa-envelope"></i> chuotchat1996@gmail.com</a></li>
							</ul>
						</nav>

					<!-- END .wrapper -->
					</div>

				<!-- END .top-menu -->
				</div>
				
				<!-- BEGIN .wrapper -->
				<div class="wrapper">

					<!-- BEGIN .header-main -->
					<div class="header-main">

						<div class="header-main-logo">
							<!-- <h1><a href="index.html">Sendigo</a></h1> -->
							<a href="index-2.html"><img src="public/images/coollogo_com-246231119.png "  /></a>
						</div>

						

						<div class="header-main-search">
							<div class="search-block">
								<form action="http://sendigo.orange-themes.com/html/loaitin.html">
									<input type="text" placeholder="Search" value="" />
								</form>
							</div>
						</div>

					<!-- END .header-main -->
					</div>
					

					<nav class="main-menu">
						<a href="#dat-menu" class="dat-menu-button"><i class="fa fa-bars"></i>Show Menu</a>
						<div class="main-menu-placeholder">
							<div class="main-menu-wrapper">
								
								<ul class="top-main-menu load-responsive" rel="Main Menu">
									<li><a href="index-2.html">Homepage</a></li>
									<?php 
										foreach($menu as $mn){
									?>
									<li><a href="loaitin.html"><span><?= $mn->Ten?></span></a>
										<ul class="sub-menu">
											<?php 
												$loaitin = explode(',',$mn->LoaiTin) ;
												foreach ($loaitin as $loai) {
													list($id, $ten, $tenkhongdau) = explode(':', $loai);
												?>
												<li><a href="chitiettin.html"><?= $ten?></a></li>
												<?php
												}
											?>
											
										</ul>
									</li>
									<?php
										}
									 ?>
									
									
								</ul>

								
							</div>
						</div>
					</nav>
					
				<!-- END .wrapper -->
				</div>
				
			<!-- END .header -->
			</header>
			
			<!-- BEGIN .content -->
			<section class="content">
				
				<!-- BEGIN .wrapper -->
				<div class="wrapper">

					

					<!-- BEGIN .top-slider-body -->
					<div class="top-slider-body" data-top-slider-timeout="6000" data-top-slider-autostart="true">
						<div class="top-slider-controls">
							<button class="left" data-top-slider-dir="left"><i class="fa fa-caret-left"></i> Trước</button>
							<button class="right" data-top-slider-dir="right"> Tiếp <i class="fa fa-caret-right"></i></button>
						</div>
						<div class="top-slider-content">

							<!-- BEGIN .top-slider-content-wrap -->
							<div class="top-slider-content-wrap active">
								<?php 
									foreach($tinnoibat as $tnb){
								 ?>
								<!-- BEGIN .item -->
								<div class="item" data-color-top-slider="#867eef">
									<div class="item-header">
										<a href="post.html">
											<span class="comment-tag"><i class="fa fa-comment-o"></i>10<i></i></span>
											<span class="read-more-wrapper"><span class="read-more">Xem chi tiết<i></i></span></span>
											<style>
												.item-header img{ height: 250px; }
											</style>
											<img src="public/image/tintuc/<?=$tnb->Hinh?>" alt="" />
										</a>
									</div>
									<div class="item-content">
										<strong class="category-link"><a href="category.html"><?=$tnb->TieuDe?></a></strong>
										<p><?=$tnb->TomTat?></p>
									</div>
								<!-- END .item -->
								</div>
								<?php 
								}
								 ?>
								

							<!-- END .top-slider-content-wrap -->
							</div>

							<!-- BEGIN .top-slider-content-wrap -->
							<div class="top-slider-content-wrap">

								<?php 
									foreach($tinnoibat1 as $tnb1){
								 ?>
								<!-- BEGIN .item -->
								<div class="item" data-color-top-slider="#867eef">
									<div class="item-header">
										<a href="post.html">
											<span class="comment-tag"><i class="fa fa-comment-o"></i>132<i></i></span>
											<span class="read-more-wrapper"><span class="read-more">Read full article<i></i></span></span>
											<img src="public/image/tintuc/<?=$tnb1->Hinh?>" alt="" />
										</a>
									</div>
									<div class="item-content">
										<strong class="category-link"><a href="category.html"><?=$tnb1->TieuDe?></a></strong>
										<p><?=$tnb1->TomTat?></p>
									</div>
								<!-- END .item -->
								</div>
								<?php 
								}
								 ?>
								

							<!-- END .top-slider-content-wrap -->
							</div>

						</div>
					<!-- END .top-slider-body -->
					</div>
					

					<div class="content-block has-sidebar">

						<!-- BEGIN .content-block-single -->
						<div class="content-block-single">
							
							<!-- BEGIN .content-panel -->
							<div class="content-panel">
								<div class="content-panel-title">
									<h2>Tin tức</h2>
								</div>
								<div class="content-panel-body article-list">
								<?php 
									foreach ($menu as $mn) {
									?>

									<div>
										<h4><b><span style="font-size: 20px; font-family: Arial; color: #DF3A01;"><?=$mn->Ten?></span></b></h4>
									</div>
									<div class="item">
										<div class="item-header">
											<a href="chitiettin.html">
												<span class="comment-tag"><i class="fa fa-heart"></i><i></i></span>
												<span class="read-more-wrapper"><span class="read-more">read more<i></i></span></span>
												<img src="public/image/tintuc/<?=$mn->HinhTin?>" alt="" />
											</a>
										</div>
										<div class="item-content">
											<strong class="category-link"><a href="category.html"><?=$mn->TieuDeTin?></a></strong>
											
											<span class="item-meta">
												<a href="chitiettin.html#comments"><i class="fa fa-comment-o"></i>82 comments</a>
												<a href="loaitin.html"><i class="fa fa-clock-o"></i>March 30, 2015</a>
											</span>
											<p><?=$mn->TomTatTin?></p>
											<a href="chitiettin.html" class="read-more-button">read more<i class="fa fa-mail-forward"></i></a>
										</div>
									</div>
								<?php
									}
								 ?>
								</div>
								
							<!-- END .content-panel -->
							</div>

							<!-- BEGIN .content-panel -->
							<div class="content-panel">
                                
							</div>

						<!-- END .content-block-single -->
						</div>

						<!-- BEGIN .sidebar -->
						<aside class="sidebar">

							<div class="widget">
								<h3>Tin được xem nhiều</h3>
								<div class="widget-article-list">

									<div class="item">
										<div class="item-header">
											<a href="post-2.html"><img src="public/public/images/photos/image-7.jpg" alt="" /></a>
										</div>
										<div class="item-content">
											<h4><a href="chitiettin.html">Watch the first 30 minutes of Mortal Kombat X</a></h4>
											<span class="item-meta">
												<a href="chitiettin.html#comments"><i class="fa fa-comment-o"></i>82 comments</a>
												<a href="loaitin.html"><i class="fa fa-clock-o"></i>March 30, 2015</a>
											</span>
										</div>
									</div>

									<div class="item">
										<div class="item-header">
											<a href="chitiettin.html"><img src="public/public/images/photos/image-8.jpg" alt="" /></a>
										</div>
										<div class="item-content">
											<h4><a href="chitiettin.html">How The Walking Dead became irresistible to advertisers</a></h4>
											<span class="item-meta">
												<a href="chitiettin.html#comments"><i class="fa fa-comment-o"></i>139 comments</a>
												<a href="loaitin.html"><i class="fa fa-clock-o"></i>March 30, 2015</a>
											</span>
										</div>
									</div>

									<div class="item">
										<div class="item-header">
											<a href="chitiettin.html"><img src="public/public/images/photos/image-9.jpg" alt="" /></a>
										</div>
										<div class="item-content">
											<h4><a href="chitiettin.html">Hugh Jackman's time as Wolverine appears to be an end</a></h4>
											<span class="item-meta">
												<a href="chitiettin.html#comments"><i class="fa fa-comment-o"></i>65 comments</a>
												<a href="loaitin.html"><i class="fa fa-clock-o"></i>March 30, 2015</a>
											</span>
										</div>
									</div>

									

								</div>
							</div>
							

							<div class="widget">
								<h3>Tin mới nhất</h3>
								<div class="widget-photo-gallery">

									<div class="item">
										<div class="item-header">
											<a href="photo-gallery-single.html"><img src="public/public/images/photos/image-10.jpg" alt="" /></a>
											<a href="photo-gallery-single.html"><img src="public/public/images/photos/image-11.jpg" alt="" /></a>
											<a href="photo-gallery-single.html"><img src="public/public/images/photos/image-12.jpg" alt="" /></a>
											<a href="photo-gallery-single.html" class="no-image"><strong>+13</strong></a>
										</div>
										<div class="item-content">
											<h4><a href="photo-gallery-single.html">Watch the first 30 minutes of Mortal Kombat X</a></h4>
											<span class="item-meta">
												<a href="photo-gallery-single.html"><i class="fa fa-camera"></i>16 photos</a>
												<a href="photo-gallery-single.html"><i class="fa fa-reply"></i>View all photos</a>
											</span>
										</div>
									</div>

									<div class="item">
										<div class="item-header">
											<a href="photo-gallery-single.html"><img src="public/public/images/photos/image-10.jpg" alt="" /></a>
											<a href="photo-gallery-single.html"><img src="public/public/images/photos/image-11.jpg" alt="" /></a>
											<a href="photo-gallery-single.html"><img src="public/public/images/photos/image-12.jpg" alt="" /></a>
											<a href="photo-gallery-single.html" class="no-image"><strong>+13</strong></a>
										</div>
										<div class="item-content">
											<h4><a href="photo-gallery-single.html">Watch the first 30 minutes of Mortal Kombat X</a></h4>
											<span class="item-meta">
												<a href="photo-gallery-single.html"><i class="fa fa-camera"></i>16 photos</a>
												<a href="photo-gallery-single.html"><i class="fa fa-reply"></i>View all photos</a>
											</span>
										</div>
									</div>

								</div>
							</div>

							
						<!-- END .sidebar -->
						</aside>

					</div>
					

				<!-- END .wrapper -->
				</div>
				
			<!-- BEGIN .content -->
			</section>
			
			<!-- BEGIN .footer -->
			<footer class="footer">
				
				
				<!-- BEGIN .wrapper -->
				<div class="wrapper">
					
					<div class="footer-widgets">

						<div class="widget-split">
							<div class="widget">
								<h3>Tin nổi bật</h3>
								<div>
									<ul class="widget-contact-info">
										<li><a href="">Cách làm lồng đèn giấy con heo cực dễ cho bé chơi Trung thu</a></li>
										<li><a href="">Siêu đội hình nửa tỷ euro lỗi hẹn World Cup: Bale "bắt cặp" SAO MU</a></li>
										<li><a href="">Phi Thanh Vân công khai bạn trai doanh nhân, dự định kết hôn lần ba</a></li>
										
									</ul>
								</div>
							</div>
						</div>

						<div class="widget-split">
							<div class="widget">
								<h3>Tin mới</h3>
								<div>
									<ul class="widget-contact-info">
										<li><a href="">Cách làm lồng đèn giấy con heo cực dễ cho bé chơi Trung thu</a></li>
										<li><a href="">Siêu đội hình nửa tỷ euro lỗi hẹn World Cup: Bale "bắt cặp" SAO MU</a></li>
										<li><a href="">Phi Thanh Vân công khai bạn trai doanh nhân, dự định kết hôn lần ba</a></li>
										
									</ul>
								</div>
							</div>
						</div>

						<div class="widget-split">
							<div class="widget">
								<h3>Kết nối với chúng tôi</h3>
								<div>
									<ul class="widget-contact-info">
										<li><a href="https://www.facebook.com/lish.hatech"><img src="public/images/footer-social-fb.png" width="30" height="30">  Facobook</a> </li>
					                    <li><a href=""><img src="public/images/footer-social-zingme.png" width="30" height="30">  Zingme</a> </li>
					                    <li><a href=""><img src="public/images/footer-social-twitter.png" width="30" height="30">  Twitter</a> </li>
					                    <li><a href=""><img src="public/images/footer-social-youtube.png" width="30" height="30">  Youtobe</a> </li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<!-- END .wrapper -->
				</div>
				
				<!-- BEGIN .footer-copyright -->
				<div class="footer-copyright">
					<!-- BEGIN .wrapper -->
					<div class="wrapper">

						<ul class="load-responsive" rel="Footer">
							<li><a href="index.html">Homepage</a></li>
							<li><a href="loaitin.html">Blog page</a></li>
							<li><a href="photo-gallery.html">Photo Gallery</a></li>
							<li><a href="archive.html">Archive</a></li>
							<li><a href="contact-us.html">Contact us</a></li>
						</ul>
					
						<p>Design by <strong style="color: red;">Hoa Xương Rồng</strong>-University of Transport and Communications.</p>
					
					<!-- END .wrapper -->
					</div>
				<!-- END .footer-copyright -->
				</div>
				
			<!-- END .footer -->
			</footer>
			
		<!-- END .boxed -->
		</div>

		<!-- Scripts -->
		<script type="text/javascript" src="public/jscript/jquery-latest.min.js"></script>
		<script type="text/javascript" src="public/jscript/bootstrap.min.js"></script>
		<script type="text/javascript" src="public/jscript/modernizr.custom.50878.js"></script>
		<script type="text/javascript" src="public/jscript/iscroll.js"></script>
		<script type="text/javascript" src="public/jscript/dat-menu.js"></script>
		<script type="text/javascript" src="public/jscript/theme-scripts.js"></script>
		<script type="text/javascript" src="public/jscript/ot-lightbox.js"></script>
		<!-- Demo Only -->
		
	<!-- END body -->
	</body>
<!-- END html -->


</html>