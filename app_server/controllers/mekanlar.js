const anaSayfa = function(req,res){
	res.render('mekanlar-liste',{'title':'Anasayfa'});
}

const mekanBilgisi = function(req,res){
	res.render('mekan-detay',{'title':'Mekan Bilgisi'});
	//mekan-detay
}

const yorumEkle = function(req,res){
	res.render('yorum-ekle',{'title':'Yorum Ekle'});
	//yorum-ekle
}

module.exports = {
	anaSayfa,
	mekanBilgisi,
	yorumEkle
};

module.exports.anaSayfa = function(req,res){
	res.render('mekanlar-liste',{title:'Anasayfa'});
}

module.exports.mekanBilgisi = function(req,res){
	res.render('mekan-detay',{title:'Mekan Bilgisi'});
}

module.exports.yorumEkle = function(req,res){
	res.render('yorum-ekle',{title:'Yorum Ekle'});
}
