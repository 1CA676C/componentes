var ac_guitSample_loaded=!1;const ac_guit_sampler=new Tone.Sampler({urls:{E2:"E2.mp3",F2:"F2.mp3","C#3":"C#3.mp3",D3:"D3.mp3",A3:"A3.mp3",B3:"B3.mp3","C#4":"C#4.mp3",E4:"E4.mp3",B4:"B4.mp3",D5:"D5.mp3"},release:1,onload(){ac_guitSample_loaded=!0,console.log("ac_guitSample_loaded ="+ac_guitSample_loaded)},baseUrl:"https://cdn.jsdelivr.net/gh/1CA676C/media/som/ac_guit/"}).toDestination();function playGuit(a,e){ac_guit_sampler.triggerAttackRelease(a,e)}