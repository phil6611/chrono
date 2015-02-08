/**
 * @author Poisse Philippe
 */

/*
 * Liste des variables.
 */
			var h_1=0;
			var m_1=0;
			var s_1=0;
				
			var h_2=0;
			var m_2=0;
			var s_2=0;
				
			var h_3=0;
			var m_3=0;
			var s_3=0;
			
			var h_4=0;
			var m_4=0;
			var s_4=0;
			
			var h_5=0;
			var m_5=0;
			var s_5=0;
				
			var h_6=0;
			var m_6=0;
			var s_6=0;
			
			var h_7=0;
			var m_7=0;
			var s_7=0;
				
			var h_8=0;
			var m_8=0;
			var s_8=0;
			
			var h_9=0;
			var m_9=0;
			var s_9=0;
				
			var h_10=0;
			var m_10=0;
			var s_10=0;
			
			var h_11=0;
			var m_11=0;
			var s_11=0;
				
			var h_12=0;
			var m_12=0;
			var s_12=0;
				
			var h_13=0;
			var m_13=0;
			var s_13=0;
			
			var h_14=0;
			var m_14=0;
			var s_14=0;
			
			var h_15=0;
			var m_15=0;
			var s_15=0;
				
			var h_16=0;
			var m_16=0;
			var s_16=0;
			
			var h_17=0;
			var m_17=0;
			var s_17=0;
				
			var h_18=0;
			var m_18=0;
			var s_18=0;
			
			var h_19=0;
			var m_19=0;
			var s_19=0;
				
			var h_20=0;
			var m_20=0;
			var s_20=0;
			
			
/*
 * Fonctions pour les chronomètres.
 */			
			
			function chrono_1() {
				
				s_1++;
				if (s_1>59) {
					s_1=0;m_1++;
				}
				if (m_1>59) {
					m_1=0;h++;
				}
				
				document.getElementById("temps_1").value = h_1+":"+m_1+":"+s_1;

				compte_1=setTimeout('chrono_1()',1000);
			}
			
			function chrono_2() {
				
				s_2++;
				if (s_2>59) {
					s_2=0;m_2++;
				}
				if (m_2>59) {
					m_2=0;h_2++;
				}
				
				document.getElementById("temps_2").value = h_2+":"+m_2+":"+s_2;

				compte_2=setTimeout('chrono_2()',1000);
			}

			function chrono_3() {
				
				s_3++;
				if (s_3>59) {
					s_3=0;m_3++;
				}
				if (m_3>59) {
					m_3=0;h_3++;
				}
				
				document.getElementById("temps_3").value = h_3+":"+m_3+":"+s_3;

				compte_3=setTimeout('chrono_3()',1000);
			}
			
			function chrono_4() {
				
				s_4++;
				if (s_4>59) {
					s_4=0;m_4++;
				}
				if (m_4>59) {
					m_4=0;h_4++;
				}
				
				document.getElementById("temps_4").value = h_4+":"+m_4+":"+s_4;

				compte_4=setTimeout('chrono_4()',1000);
			}
			
			function chrono_5() {
				
				s_5++;
				if (s_5>59) {
					s_5=0;m_5++;
				}
				if (m_5>59) {
					m_5=0;h_5++;
				}
				
				document.getElementById("temps_5").value = h_5+":"+m_5+":"+s_5;

				compte_5=setTimeout('chrono_5()',1000);
			}

			function chrono_6() {
				
				s_6++;
				if (s_6>59) {
					s_6=0;m_6++;
				}
				if (m_6>59) {
					m_6=0;h_6++;
				}
				
				document.getElementById("temps_6").value = h_6+":"+m_6+":"+s_6;

				compte_6=setTimeout('chrono_6()',1000);
			}
			
			function chrono_7() {
				
				s_7++;
				if (s_7>59) {
					s_7=0;m_7++;
				}
				if (m_7>59) {
					m_7=0;h_7++;
				}
				
				document.getElementById("temps_7").value = h_7+":"+m_7+":"+s_7;

				compte_7=setTimeout('chrono_7()',1000);
			}
			
			function chrono_8() {
				
				s_8++;
				if (s_8>59) {
					s_8=0;m_1++;
				}
				if (m_8>59) {
					m_8=0;h++;
				}
				
				document.getElementById("temps_8").value = h_8+":"+m_8+":"+s_8;

				compte_8=setTimeout('chrono_8()',1000);
			}
			
			function chrono_9() {
				
				s_9++;
				if (s_9>59) {
					s_9=0;m_9++;
				}
				if (m_9>59) {
					m_9=0;h_9++;
				}
				
				document.getElementById("temps_9").value = h_9+":"+m_9+":"+s_9;

				compte_9=setTimeout('chrono_9()',1000);
			}

			function chrono_10() {
				
				s_10++;
				if (s_10>59) {
					s_10=0;m_10++;
				}
				if (m_10>59) {
					m_10=0;h_10++;
				}
				
				document.getElementById("temps_10").value = h_10+":"+m_10+":"+s_10;

				compte_10=setTimeout('chrono_10()',1000);
			}
			
			function chrono_11() {
				
				s_11++;
				if (s_11>59) {
					s_11=0;m_11++;
				}
				if (m_11>59) {
					m_11=0;h++;
				}
				
				document.getElementById("temps_11").value = h_11+":"+m_11+":"+s_11;

				compte_11=setTimeout('chrono_11()',1000);
			}
			
			function chrono_12() {
				
				s_12++;
				if (s_12>59) {
					s_12=0;m_12++;
				}
				if (m_12>59) {
					m_12=0;h_12++;
				}
				
				document.getElementById("temps_12").value = h_12+":"+m_12+":"+s_12;

				compte_12=setTimeout('chrono_12()',1000);
			}

			function chrono_13() {
				
				s_13++;
				if (s_13>59) {
					s_13=0;m_13++;
				}
				if (m_13>59) {
					m_13=0;h_13++;
				}
				
				document.getElementById("temps_13").value = h_13+":"+m_13+":"+s_13;

				compte_13=setTimeout('chrono_13()',1000);
			}
			
			function chrono_14() {
				
				s_14++;
				if (s_14>59) {
					s_14=0;m_14++;
				}
				if (m_14>59) {
					m_14=0;h_14++;
				}
				
				document.getElementById("temps_14").value = h_14+":"+m_14+":"+s_14;

				compte_14=setTimeout('chrono_14()',1000);
			}
			
			function chrono_15() {
				
				s_15++;
				if (s_15>59) {
					s_15=0;m_15++;
				}
				if (m_15>59) {
					m_15=0;h_15++;
				}
				
				document.getElementById("temps_15").value = h_15+":"+m_15+":"+s_15;

				compte_15=setTimeout('chrono_15()',1000);
			}

			function chrono_16() {
				
				s_16++;
				if (s_16>59) {
					s_16=0;m_16++;
				}
				if (m_16>59) {
					m_16=0;h_16++;
				}
				
				document.getElementById("temps_16").value = h_16+":"+m_16+":"+s_16;

				compte_16=setTimeout('chrono_16()',1000);
			}
			
			function chrono_17() {
				
				s_17++;
				if (s_17>59) {
					s_17=0;m_17++;
				}
				if (m_17>59) {
					m_17=0;h_17++;
				}
				
				document.getElementById("temps_17").value = h_17+":"+m_17+":"+s_17;

				compte_17=setTimeout('chrono_17()',1000);
			}
			
			function chrono_18() {
				
				s_18++;
				if (s_18>59) {
					s_18=0;m_18++;
				}
				if (m_18>59) {
					m_18=0;h_18++;
				}
				
				document.getElementById("temps_18").value = h_18+":"+m_18+":"+s_18;

				compte_18=setTimeout('chrono_18()',1000);
			}
			
			function chrono_19() {
				
				s_19++;
				if (s_19>59) {
					s_19=0;m_19++;
				}
				if (m_19>59) {
					m_19=0;h_19++;
				}
				
				document.getElementById("temps_19").value = h_19+":"+m_19+":"+s_19;

				compte_19=setTimeout('chrono_19()',1000);
			}

			function chrono_20() {
				
				s_20++;
				if (s_20>59) {
					s_20=0;m_20++;
				}
				if (m_20>59) {
					m_20=0;h_20++;
				}
				
				document.getElementById("temps_20").value = h_20+":"+m_20+":"+s_20;

				compte_20=setTimeout('chrono_20()',1000);
			}
			
/*
 * Fonction pour remettre un compteur à zéro.
 */
			function zero (nom, temps) {
				
				clearInterval(nom);
				s=0;
				m=0;
				h=0;
				document.getElementById(temps).value = h+":"+m+":"+s;
			}
			
