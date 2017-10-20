<?php 
	include('model/db_index.php');
	class C_tintuc{
		public function index(){
			$m_tintuc = new M_tintuc();
			$menu = $m_tintuc->getMenu();
			$tinnoibat= $m_tintuc->getTinNoiBat();
			$tinnoibat1= $m_tintuc->getTinNoiBat1();
			return array('menu'=>$menu, 'tinnoibat'=>$tinnoibat, 'tinnoibat1'=>$tinnoibat1);
			
		}
		
	}
	
 ?>