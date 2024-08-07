import { DarkThemeToggle, useThemeMode } from 'flowbite-react';
import NiceAvatar, { genConfig, AvatarFullConfig } from 'react-nice-avatar';

const config: AvatarFullConfig = {
  sex: "woman",
  faceColor: "#AC6651",
  earSize: "big",
  eyeStyle: "smile",
  noseStyle: "long",
  mouthStyle: "laugh",
  shirtStyle: "polo",
  glassesStyle: "none",
  hairColor: "#000",
  hairStyle: "womanLong",
  hatStyle: "none",
  hatColor: "#fff",
  eyeBrowStyle: "up", 
  shirtColor: "#9287FF",
  bgColor: "linear-gradient(45deg, #3e1ccd 0%, #ff6871 100%)"
};

const myConfig = genConfig(config);

export function Header() {
  const { mode } = useThemeMode();

  return (
    <header className="flex items-center justify-between p-4">
      <div className="text-lg font-semibold">
        <p>Bem-Vinda</p>
      </div>
      <div className="flex items-center space-x-4">
        <DarkThemeToggle />
        <div className={`inline-block ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
          <NiceAvatar className="w-10 h-10" {...myConfig} />
        </div>
      </div>
    </header>
  );
}
