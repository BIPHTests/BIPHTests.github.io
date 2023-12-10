window.addEventListener('DOMContentLoaded', (event) => {
        const inputText = document.getElementById('inputText');
        const outputText = document.getElementById('outputText');
        const resultText = document.getElementById('resultText');
      
        inputText.addEventListener('keyup', (event) => {
          if (event.key === 'Enter') {
            const inputValue = inputText.value.toUpperCase();
            const table = {
              'JAMES1724': `Gentle Winds 

              Pitch:  
              
              Tone:  
              
              Rhythm:  
              
              Dynamics:  
              
              Sum: 0.0 
              
              Performance: 0.0% 
              
                 
              
              Windsong 
              
              Pitch: 4.0 
              
              Tone: 3.5 
              
              Rhythm: 4.5 
              
              Dynamics: 4.0 
              
              Sum: 16.0 
              
              Performance: 80.0% 
              
                 
              
              The Tempest 
              
              Pitch:  
              
              Tone:  
              
              Rhythm:  
              
              Dynamics:  
              
              Sum: 0.0 
              
              Performance: 0.0% 
              
                 
              
              Jupiter 
              
              Pitch:  
              
              Tone:  
              
              Rhythm:  
              
              Dynamics:  
              
              Sum: 0.0 
              
              Performance: 0.0% 
              
                 
              
              Instant Xmas 
              
              Pitch:  
              
              Tone:  
              
              Rhythm:  
              
              Dynamics:  
              
              Sum: 0.0 
              
              Performance: 0.0%`,





  'SOFIE74639': `Gentle Winds 

  Pitch:  
  
  Tone:  
  
  Rhythm:  
  
  Dynamics:  
  
  Sum: 0.0 
  
  Performance: 0.0% 
  
     
  
  Windsong 
  
  Pitch: 4.0 
  
  Tone: 4.5 
  
  Rhythm: 4.5 
  
  Dynamics: 4.5 
  
  Sum: 17.5 
  
  Performance: 87.5% 
  
     
  
  The Tempest 
  
  Pitch:  
  
  Tone:  
  
  Rhythm:  
  
  Dynamics:  
  
  Sum: 0.0 
  
  Performance: 0.0% 
  
     
  
  Jupiter 
  
  Pitch:  
  
  Tone:  
  
  Rhythm:  
  
  Dynamics:  
  
  Sum: 0.0 
  
  Performance: 0.0% 
  
     
  
  Instant Xmas 
  
  Pitch:  
  
  Tone:  
  
  Rhythm:  
  
  Dynamics:  
  
  Sum: 0.0 
  
  Performance: 0.0%`,






  
  'JERRY55635': `Gentle Winds 

  Pitch: 3.0 
  
  Tone: 3.5 
  
  Rhythm: 5.0 
  
  Dynamics: 4.0 
  
  Sum: 15.5 
  
  Performance: 77.5% 
  
     
  
  Windsong 
  
  Pitch: 4.6 
  
  Tone: 3.8 
  
  Rhythm: 4.7 
  
  Dynamics: 4.5 
  
  Sum: 17.6 
  
  Performance: 88.0% 
  
     
  
  The Tempest 
  
  Pitch:  
  
  Tone:  
  
  Rhythm:  
  
  Dynamics:  
  
  Sum: 0.0 
  
  Performance: 0.0% 
  
     
  
  Jupiter 
  
  Pitch:  
  
  Tone:  
  
  Rhythm:  
  
  Dynamics:  
  
  Sum: 0.0 
  
  Performance: 0.0% 
  
     
  
  Instant Xmas 
  
  Pitch:  
  
  Tone:  
  
  Rhythm:  
  
  Dynamics:  
  
  Sum: 0.0 
  
  Performance: 0.0%`,







'ANNE31290': `Gentle Winds 

Pitch: 4.8 

Tone: 4.8 

Rhythm: 4.5 

Dynamics: 4.6 

Sum: 18.7 

Performance: 93.5% 

   

Windsong 

Pitch: 4.0 

Tone: 4.0 

Rhythm: 4.6 

Dynamics: 4.0 

Sum: 16.6 

Performance: 83.0% 

   

The Tempest 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0% 

   

Jupiter 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0% 

   

Instant Xmas 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0%`,







  'STUART91802': `Gentle Winds 

  Pitch: 5.0 
  
  Tone: 5.0 
  
  Rhythm: 5.0 
  
  Dynamics: 5.0 
  
  Sum: 20.0 
  
  Performance: 100.0% 
  
     
  
  Windsong 
  
  Pitch: 4.8 
  
  Tone: 5.0 
  
  Rhythm: 5.0 
  
  Dynamics: 5.0 
  
  Sum: 19.8 
  
  Performance: 99.0% 
  
     
  
  The Tempest 
  
  Pitch: 5.0 
  
  Tone: 5.0 
  
  Rhythm: 5.0 
  
  Dynamics: 4.8 
  
  Sum: 19.8 
  
  Performance: 99.0% 
  
     
  
  Jupiter 
  
  Pitch: 4.9 
  
  Tone: 5.0 
  
  Rhythm: 5.0 
  
  Dynamics: 4.9 
  
  Sum: 19.8 
  
  Performance: 99.0% 
  
     
  
  Instant Xmas 
  
  Pitch: 4.7 
  
  Tone: 5.0 
  
  Rhythm: 4.8 
  
  Dynamics: 5.0 
  
  Sum: 19.5 
  
  Performance: 97.5%`,







  'JOJO77157': `Gentle Winds 

  Pitch: 4.8 
  
  Tone: 4.5 
  
  Rhythm: 4.6 
  
  Dynamics: 4.5 
  
  Sum: 18.4 
  
  Performance: 92.0% 
  
     
  
  Windsong 
  
  Pitch: 4.9 
  
  Tone: 4.9 
  
  Rhythm: 4.8 
  
  Dynamics: 4.8 
  
  Sum: 19.4 
  
  Performance: 97.0% 
  
     
  
  The Tempest 
  
  Pitch: 4.6 
  
  Tone: 4.7 
  
  Rhythm: 4.6 
  
  Dynamics: 4.9 
  
  Sum: 18.8 
  
  Performance: 94.0% 
  
     
  
  Jupiter 
  
  Pitch: 4.3 
  
  Tone: 4.6 
  
  Rhythm: 4.6 
  
  Dynamics: 4.7 
  
  Sum: 18.2 
  
  Performance: 91.0% 
  
     
  
  Instant Xmas 
  
  Pitch: 4.0 
  
  Tone: 4.5 
  
  Rhythm: 4.5 
  
  Dynamics: 4.5 
  
  Sum: 17.5 
  
  Performance: 87.5%`,











'IVY99690': `Gentle Winds 

Pitch: 5.0 

Tone: 5.0 

Rhythm: 4.9 

Dynamics: 5.0 

Sum: 19.9 

Performance: 99.5% 

   

Windsong 

Pitch: 5.0 

Tone: 5.0 

Rhythm: 4.8 

Dynamics: 4.9 

Sum: 19.7 

Performance: 98.5% 

   

The Tempest 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0% 

   

Jupiter 

Pitch: 5.0 

Tone: 4.9 

Rhythm: 5.0 

Dynamics: 5.0 

Sum: 19.9 

Performance: 99.5% 

   

Instant Xmas 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0%`,











  'LEO99932': `Gentle Winds 

  Pitch: 4.7 
  
  Tone: 4.8 
  
  Rhythm: 4.8 
  
  Dynamics: 4.5 
  
  Sum: 18.8 
  
  Performance: 94.0% 
  
     
  
  Windsong 
  
  Pitch: 5.0 
  
  Tone: 5.0 
  
  Rhythm: 5.0 
  
  Dynamics: 5.0 
  
  Sum: 20.0 
  
  Performance: 100.0% 
  
     
  
  The Tempest 
  
  Pitch: 4.7 
  
  Tone: 4.8 
  
  Rhythm: 4.7 
  
  Dynamics: 4.8 
  
  Sum: 19.0 
  
  Performance: 95.0% 
  
     
  
  Jupiter 
  
  Pitch: 4.8 
  
  Tone: 4.5 
  
  Rhythm: 4.7 
  
  Dynamics: 4.8 
  
  Sum: 18.8 
  
  Performance: 94.0% 
  
     
  
  Instant Xmas 
  
  Pitch:  
  
  Tone:  
  
  Rhythm:  
  
  Dynamics:  
  
  Sum: 0.0 
  
  Performance: 0.0%`,












'TONY79004': `Gentle Winds 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0% 

   

Windsong 

Pitch: 5.0 

Tone: 5.0 

Rhythm: 5.0 

Dynamics: 5.0 

Sum: 20.0 

Performance: 100.0% 

   

The Tempest 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0% 

   

Jupiter 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0% 

   

Instant Xmas 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0%`,












'JENNIFER84061': `Gentle Winds 

Pitch: 4.9 

Tone: 5.0 

Rhythm: 5.0 

Dynamics: 5.0 

Sum: 19.9 

Performance: 99.5% 

   

Windsong 

Pitch: 5.0 

Tone: 5.0 

Rhythm: 5.0 

Dynamics: 5.0 

Sum: 20.0 

Performance: 100.0% 

   

The Tempest 

Pitch: 4.8 

Tone: 5.0 

Rhythm: 5.0 

Dynamics: 4.7 

Sum: 19.5 

Performance: 97.5% 

   

Jupiter 

Pitch: 4.8 

Tone: 5.0 

Rhythm: 4.7 

Dynamics: 5.0 

Sum: 19.5 

Performance: 97.5% 

   

Instant Xmas 

Pitch: 4.9 

Tone: 5.0 

Rhythm: 5.0 

Dynamics: 5.0 

Sum: 19.9 

Performance: 99.5%`,










'JINER20628': `Gentle Winds 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0% 

   

Windsong 

Pitch: 4.5 

Tone: 5.0 

Rhythm: 4.5 

Dynamics: 4.5 

Sum: 18.5 

Performance: 92.5% 

   

The Tempest 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0% 

   

Jupiter 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0% 

   

Instant Xmas 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0%`,










'ANDY39059': `Gentle Winds 

Pitch: 4.8 

Tone: 4.8 

Rhythm: 4.7 

Dynamics: 4.7 

Sum: 19.0 

Performance: 95.0% 

   

Windsong 

Pitch: 4.8 

Tone: 5.0 

Rhythm: 5.0 

Dynamics: 5.0 

Sum: 19.8 

Performance: 99.0% 

   

The Tempest 

Pitch: 4.7 

Tone: 4.7 

Rhythm: 4.8 

Dynamics: 5.0 

Sum: 19.2 

Performance: 96.0% 

   

Jupiter 

Pitch: 4.7 

Tone: 4.8 

Rhythm: 4.8 

Dynamics: 4.8 

Sum: 19.1 

Performance: 95.5% 

   

Instant Xmas 

Pitch: 4.6 

Tone: 4.8 

Rhythm: 4.8 

Dynamics: 5.0 

Sum: 19.2 

Performance: 96.0%`,











'CANDY85093': `Gentle Winds 

Pitch: 4.5 

Tone: 4.9 

Rhythm: 3.8 

Dynamics: 4.7 

Sum: 17.9 

Performance: 89.5% 

   

Windsong 

Pitch: 5.0 

Tone: 4.5 

Rhythm: 4.0 

Dynamics: 4.8 

Sum: 18.3 

Performance: 91.5% 

   

The Tempest 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0% 

   

Jupiter 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0% 

   

Instant Xmas 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0%`,










'JACK93062': `Gentle Winds 

Pitch: 3.5 

Tone: 4.0 

Rhythm: 4.0 

Dynamics: 4.0 

Sum: 15.5 

Performance: 77.5% 

   

Windsong 

Pitch: 4.7 

Tone: 4.0 

Rhythm: 4.7 

Dynamics: 4.6 

Sum: 18.0 

Performance: 90.0% 

   

The Tempest 

Pitch: 4.8 

Tone: 4.5 

Rhythm: 4.8 

Dynamics: 4.5 

Sum: 18.6 

Performance: 93.0% 

   

Jupiter 

Pitch: 4.6 

Tone: 4.7 

Rhythm: 4.8 

Dynamics: 4.5 

Sum: 18.6 

Performance: 93.0% 

   

Instant Xmas 

Pitch: 2.5 

Tone: 4.5 

Rhythm: 4.0 

Dynamics: 4.5 

Sum: 15.5 

Performance: 77.5%`,











'CATHERINE69118': `Gentle Winds 

Pitch: 5.0 

Tone: 4.9 

Rhythm: 4.9 

Dynamics: 5.0 

Sum: 19.8 

Performance: 99.0% 

   

Windsong 

Pitch: 5.0 

Tone: 5.0 

Rhythm: 5.0 

Dynamics: 5.0 

Sum: 20.0 

Performance: 100.0% 

   

The Tempest 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0% 

   

Jupiter 

Pitch: 5.0 

Tone: 4.8 

Rhythm: 5.0 

Dynamics: 5.0 

Sum: 19.8 

Performance: 99.0% 

   

Instant Xmas 

Pitch: 4.8 

Tone: 5.0 

Rhythm: 4.8 

Dynamics: 4.9 

Sum: 19.5 

Performance: 97.5%`,







'TIGER34064': `Gentle Winds 

Pitch: 5.0 

Tone: 4.8 

Rhythm: 4.9 

Dynamics: 4.9 

Sum: 19.6 

Performance: 98.0% 

   

Windsong 

Pitch: 5.0 

Tone: 5.0 

Rhythm: 4.8 

Dynamics: 4.9 

Sum: 19.7 

Performance: 98.5% 

   

The Tempest 

Pitch: 5.0 

Tone: 5.0 

Rhythm: 4.8 

Dynamics: 4.9 

Sum: 19.7 

Performance: 98.5% 

   

Jupiter 

Pitch: 4.9 

Tone: 5.0 

Rhythm: 5.0 

Dynamics: 5.0 

Sum: 19.9 

Performance: 99.5% 

   

Instant Xmas 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0%`,










'MICHAEL37394': `Gentle Winds 

Pitch: 4.8 

Tone: 4.9 

Rhythm: 3.8 

Dynamics: 4.0 

Sum: 17.5 

Performance: 87.5% 

   

Windsong 

Pitch: 4.7 

Tone: 4.7 

Rhythm: 4.6 

Dynamics: 4.5 

Sum: 18.5 

Performance: 92.5% 

   

The Tempest 

Pitch: 3.0 

Tone: 4.7 

Rhythm: 4.3 

Dynamics: 4.5 

Sum: 16.5 

Performance: 82.5% 

   

Jupiter 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0% 

   

Instant Xmas 

Pitch: 4.6 

Tone: 4.5 

Rhythm: 4.0 

Dynamics: 4.5 

Sum: 17.6 

Performance: 88.0%`,







'TERRY39618': `Gentle Winds 

Pitch: 4.7 

Tone: 4.6 

Rhythm: 4.9 

Dynamics: 4.5 

Sum: 18.7 

Performance: 93.5% 

   

Windsong 

Pitch: 4.7 

Tone: 4.8 

Rhythm: 4.5 

Dynamics: 5.0 

Sum: 19.0 

Performance: 95.0% 

   

The Tempest 

Pitch: 4.8 

Tone: 4.8 

Rhythm: 4.5 

Dynamics: 4.6 

Sum: 18.7 

Performance: 93.5% 

   

Jupiter 

Pitch: 4.8 

Tone: 4.7 

Rhythm: 4.8 

Dynamics: 4.7 

Sum: 19.0 

Performance: 95.0% 

   

Instant Xmas 

Pitch: 4.6 

Tone: 4.6 

Rhythm: 4.9 

Dynamics: 4.7 

Sum: 18.8 

Performance: 94.0%`,











'ETHAN96781': `Gentle Winds 

Pitch: 5.0 

Tone: 4.8 

Rhythm: 5.0 

Dynamics: 5.0 

Sum: 19.8 

Performance: 99.0% 

   

Windsong 

Pitch: 4.8 

Tone: 5.0 

Rhythm: 4.9 

Dynamics: 5.0 

Sum: 19.7 

Performance: 98.5% 

   

The Tempest 

Pitch: 4.9 

Tone: 4.9 

Rhythm: 4.7 

Dynamics: 4.5 

Sum: 19.0 

Performance: 95.0% 

   

Jupiter 

Pitch: 5.0 

Tone: 4.8 

Rhythm: 5.0 

Dynamics: 5.0 

Sum: 19.8 

Performance: 99.0% 

   

Instant Xmas 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0%`,













'AGU38815': `Gentle Winds 

Pitch: 5.0 

Tone: 4.7 

Rhythm: 4.2 

Dynamics: 4.0 

Sum: 17.9 

Performance: 89.5% 

   

Windsong 

Pitch: 4.8 

Tone: 4.7 

Rhythm: 4.8 

Dynamics: 4.8 

Sum: 19.1 

Performance: 95.5% 

   

The Tempest 

Pitch: 4.5 

Tone: 4.8 

Rhythm: 3.8 

Dynamics: 4.7 

Sum: 17.8 

Performance: 89.0% 

   

Jupiter 

Pitch: 4.8 

Tone: 4.6 

Rhythm: 2.0 

Dynamics: 4.0 

Sum: 15.4 

Performance: 77.0% 

   

Instant Xmas 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0%`

,








'CALVIN56559': `Gentle Winds 

Pitch: 4.5 

Tone: 4.5 

Rhythm: 4.0 

Dynamics: 4.0 

Sum: 17.0 

Performance: 85.0% 

   

Windsong 

Pitch: 4.6 

Tone: 4.5 

Rhythm: 4.8 

Dynamics: 4.8 

Sum: 18.7 

Performance: 93.5% 

   

The Tempest 

Pitch: 4.3 

Tone: 4.5 

Rhythm: 4.8 

Dynamics: 4.7 

Sum: 18.3 

Performance: 91.5% 

   

Jupiter 

Pitch: 4.4 

Tone: 4.5 

Rhythm: 4.7 

Dynamics: 4.6 

Sum: 18.2 

Performance: 91.0% 

   

Instant Xmas 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0%`,








'DANIEL65347': `Gentle Winds 

Pitch: 5.0 

Tone: 5.0 

Rhythm: 5.0 

Dynamics: 5.0 

Sum: 20.0 

Performance: 100.0% 

   

Windsong 

Pitch: 5.0 

Tone: 5.0 

Rhythm: 5.0 

Dynamics: 5.0 

Sum: 20.0 

Performance: 100.0% 

   

The Tempest 

Pitch: 5.0 

Tone: 4.8 

Rhythm: 5.0 

Dynamics: 4.7 

Sum: 19.5 

Performance: 97.5% 

   

Jupiter 

Pitch: 4.7 

Tone: 4.8 

Rhythm: 5.0 

Dynamics: 4.8 

Sum: 19.3 

Performance: 96.5% 

   

Instant Xmas 

Pitch: 4.9 

Tone: 4.8 

Rhythm: 4.9 

Dynamics: 4.8 

Sum: 19.4 

Performance: 97.0%`,












'EMILY84825': `Gentle Winds 

Pitch: 5.0 

Tone: 5.0 

Rhythm: 4.9 

Dynamics: 4.9 

Sum: 19.8 

Performance: 99.0% 

   

Windsong 

Pitch: 5.0 

Tone: 5.0 

Rhythm: 5.0 

Dynamics: 5.0 

Sum: 20.0 

Performance: 100.0% 

   

The Tempest 

Pitch: 5.0 

Tone: 5.0 

Rhythm: 4.6 

Dynamics: 4.8 

Sum: 19.4 

Performance: 97.0% 

   

Jupiter 

Pitch: 4.8 

Tone: 5.0 

Rhythm: 4.9 

Dynamics: 5.0 

Sum: 19.7 

Performance: 98.5% 

   

Instant Xmas 

Pitch: 5.0 

Tone: 5.0 

Rhythm: 4.9 

Dynamics: 5.0 

Sum: 19.9 

Performance: 99.5%`,











'FRANKIE10338': `Gentle Winds 

Pitch: 5.0 

Tone: 5.0 

Rhythm: 5.0 

Dynamics: 5.0 

Sum: 20.0 

Performance: 100.0% 

   

Windsong 

Pitch: 5.0 

Tone: 5.0 

Rhythm: 4.9 

Dynamics: 5.0 

Sum: 19.9 

Performance: 99.5% 

   

The Tempest 

Pitch: 5.0 

Tone: 4.8 

Rhythm: 4.9 

Dynamics: 4.0 

Sum: 18.7 

Performance: 93.5% 

   

Jupiter 

Pitch: 4.5 

Tone: 4.7 

Rhythm: 4.3 

Dynamics: 5.0 

Sum: 18.5 

Performance: 92.5% 

   

Instant Xmas 

Pitch: 5.0 

Tone: 5.0 

Rhythm: 4.7 

Dynamics: 4.8 

Sum: 19.5 

Performance: 97.5%`,












'JACKY68203': `Gentle Winds 

Pitch: 3.5 

Tone: 5.0 

Rhythm: 4.0 

Dynamics: 4.5 

Sum: 17.0 

Performance: 85.0% 

   

Windsong 

Pitch: 4.2 

Tone: 5.0 

Rhythm: 4.0 

Dynamics: 5.0 

Sum: 18.2 

Performance: 91.0% 

   

The Tempest 

Pitch: 4.3 

Tone: 4.8 

Rhythm: 4.5 

Dynamics: 4.0 

Sum: 17.6 

Performance: 88.0% 

   

Jupiter 

Pitch: 5.0 

Tone: 5.0 

Rhythm: 4.0 

Dynamics: 5.0 

Sum: 19.0 

Performance: 95.0% 

   

Instant Xmas 

Pitch:  

Tone:  

Rhythm:  

Dynamics:  

Sum: 0.0 

Performance: 0.0%`









            };
      
            if (table.hasOwnProperty(inputValue)) {
              const result = table[inputValue];
              resultText.textContent = result;
            } else {
              resultText.textContent = '';
            }
          }
        });


      
        inputText.addEventListener('keydown', (event) => {
          if (event.ctrlKey || event.metaKey) {
            switch (event.key) {
              case 'a':
                inputText.select();
                break;
              case 'c':
                document.execCommand('copy');
                break;
              case 'v':
                document.execCommand('paste');
                break;
            }
          }
        });
      });