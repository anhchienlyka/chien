<?php 
	include('database.php');
	class M_tintuc extends database{
		function getMenu(){
			// Distinct: chống lặp
			$sql = "
			SELECT tl.*, GROUP_CONCAT(Distinct lt.id,':',lt.Ten,':', lt.TenKhongDau) AS LoaiTin, tt.id as idTin, tt.TieuDe as TieuDeTin, tt.Hinh as HinhTin, tt.TomTat as TomTatTin, tt.TieuDeKhongDau as TieuDeKhongDauTin 
			FROM theloai tl 
			INNER JOIN loaitin lt 
			ON lt.idTheLoai = tl.id 
			INNER JOIN tintuc tt
			ON tt.idLoaiTin = lt.id
			GROUP BY tl.id

			";
			$this->setQuery($sql);
			 return $this->loadAllRows();
			// hàm GROUP : để lấy dữ liệu của bảng loại tin
		} // lấy dữ liệu menu
		function getTinNoiBat()
		{
		    $sql= "SELECT *
		    FROM tintuc 
		    ORDER BY id DESC
		    limit 1,3";
		    $this->setQuery($sql);
		    return $this->loadAllRows();

		}
		function getTinNoiBat1()
		{
		    $sql= "SELECT *
		    FROM tintuc 
		    ORDER BY id DESC
		    limit 4,3";
		    $this->setQuery($sql);
		    return $this->loadAllRows();

		}
	}
	
 ?>