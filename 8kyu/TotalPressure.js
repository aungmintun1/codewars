solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    const R = 0.082; // Gas constant in dm³·atm/(K·mol)
     const T_Kelvin = temp + 273.15; // Convert temperature to Kelvin
   
     const n1 = givenMass1 / molarMass1; // Moles of gas 1
     const n2 = givenMass2 / molarMass2; // Moles of gas 2
   
     const P = (n1 * molarMass1 + n2 * molarMass2) * R * T_Kelvin / volume; // Total pressure
   
     return P;
   }
   
   