alert("je word ontvoerd door 2 mannen. ze nemen je mee naar het bos er zijn twee paden naar het huis van de ontvoerders en je komt van rechts als je van het huis naar de padden kijkt. je ziet een voor deur en een kelder je word mee naar binnen genomen ze brengen je naar zolder. ze binden je handen en voeten vast dus je kan niks doen je kan allen weg komen zonder dood te gaan door de vragen goed te beandwoorden.");
alert("tip let goed op de teksten die je krijgt daar staat info voor later in het spel in om weg te komen");
alert("je zit al even vast op zolder je begint te roepen dat je honger hebt een van de twee mannen komt eten brengen met een mes en vork je eet snel je eten op en begint je zelf los te snijden en dat lukt maar e komt ineens een man naar boven wat ga je doen");
var vraag1 = prompt("wat ga je doen vul 1 in als je gaat doen dat je nog vast zit of vul 2 in als je gaat hem aanvallen met het mes");
if (vraag1 == "1"){
	alert("hij denkt dat je nog vast zit dus pakt het als en gaat weer naar beneden nu maak je je benen los en ga je kijken of je de deur kan openmaken");
	var vraag2 = prompt("ga je de deur openbreken met een stukje hout?");
	if (vraag2 == "ja"){
		alert("ze hebben je niet gehoord dus je bent nu vrij om een uitgang te zoeken");
		var vraag3 = prompt("ga je naar beneden?");
		if (vraag3 == "ja"){
			alert("je ziet sleutels hangen aan een kapstok bij de dicht gebouwde achter deur")
			var vraag4 = prompt("ga je de sleutels pakken?");
			if (vraag4 == "ja"){
				alert("aan de sleutel boos hangen twee sleutels maar je weet niet van welke van wat je denk de voordeur maar daar kan je niet zo makkelijk komen want hun zitten daar vlak bij of ga je naar de kelder");
				var vraag5 = prompt("ga je naar de voordeur of kelder?");
				if (vraag5 == "kelder"){
					alert("je ziet onderweg een briefje op de koelkast hangen er staat op vul de tank van de auto met een jerrycan en daarna ga je de kelder in je komt daar de jerrycan tegen en je kijkt uit het raampje naar buiten je ziet een fiets en een auto dus je denk zou ik de jerrycan leeg gooien of niet");
					var vraag6 = prompt("ga je de jarrycan leeg gooien?");
					if (vraag6 == "ja"){
						alert("je ziet de uitgang naar buiten maar er zit een slot op maar gelukkig heb je de sleutels en het slot gaat er af maar de deur klemt dus je moet hem in trappen maar dan  horen ze je wel");
						var vraag7 = prompt("ga je de deur open trappen?");
						if (vraag7 == "ja"){
							alert("je bent nu buiten pak je de fiets of de auto");
							var vraag8 = prompt("pak je de fiets of auto?");
							if (vraag8 == "fiets"){
								alert("je komt weg maar ze komen achter je aan maar ze kunnen niet ver komen met de auto en je ziet het pad voor je om weg te komen moest je links of rechts");
								var vraag9 = prompt("ga je links of rechts?");
								if (vraag9 == "rechts"){
									document.write("je hebt het gehaald je bent weg gekomen goed gedaan je hebt gewonnen!");
								}else if (vraag9 == "links"){
									document.write("het pad loopt dood en ze pakken je en maken je dood!");

								}
								
							}else if (vraag8 == "auto"){
								document.write("je tank is leeg ze pakken je en ze maken je dood!");
							}
							
						}else if (vraag7 == "nee"){
							document.write("je zoek naar een anderen weg naar buiten in de kleder maar een van hun gaat de auto tank vullen en hij ziet je en maakt je dood!");
						}
					}else if (vraag6 == "nee"){
						alert("je pak de jerrycan en je trapt de deur open maar ga je met de auto of fiets");
					var vraag10 = prompt(" ga je met de auto of fiets?")
					if (vraag10 == "ja"){
						document.write("je gaat de tank van de auto vol gooien maar door het geluid die je hbt gemaakt met de deur open trappen komen ze naar buiten en pakken ze je en vermoorden ze je!");
					}else if (vraag10 == "fiets"){
						document.write("je pak de fiets maar hun tanken de auto en komen achter je aan en rijden je dood!");
					}
					}
					
				}else if (vraag5 == "voordeur"){
					document.write("je gaat naar de voordeur maar ze horen je en je word gepakt en vermoord!");
				}
				
			}else if (vraag4 == "nee"){
				alert("aan de sleutel boos hangen twee sleutels maar je weet niet van welke van wat je denk de voordeur maar daar kan je niet zo makkelijk komen want hun zitten daar vlak bij of ga je naar de kelder");
			var vraag11 = prompt("ga je naar de voordeur of kelder?");
			if (vraag11 == "voordeur"){
				document.write("je gaat naar de voordeur maar ze horen je en je word gepakt en vermoord!");
			}else if (vraag11 == "kelder"){
				document.write("je gaat naar de kleder maar je hebt de sleutels nodig om weg te komen dus gaat terug maar je betn gezien en je word vermoord!");
			}
			}
		}else if (vraag3 == "nee"){
			document.write("je gaat boven rond kijken maat je stoot een vaas van een tafel af en dat hebben ze gehoord ze komen naar boven en vermoorden je!");
		}

	}else if (vraag2 == "nee"){
		document.write("je blijft op zolder en gaat niet weg maar een van de twee mannen komt naar boven en hoord je lopen hij komt naar zolder en vermoord je!");
	}
}else if (vraag1 == "2"){
	document.write("je vermoord de een man maar hij heeft geschreewd dus komt die anderen naar boven en vermoord jou!");
}