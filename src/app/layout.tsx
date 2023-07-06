'use client';
import { StyledComponentsRegistry } from '@/lib';
import { M_PLUS_Rounded_1c } from 'next/font/google';
import {
  ContentContainer,
  GlobalStyles,
  GridLayout,
  HeaderContainer,
  StyledCanvas,
} from './styles';
import { Header } from '@/components';
import { AnimatePresence } from 'framer-motion';
import { VoxelWorld } from '@/components/Common';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { MotionCanvas } from 'framer-motion-3d';

const mplus = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const metadata = {
  title: "Sean O'Neill Portfolio",
  description: "Portfolio for Sean O'Neill",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={mplus.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <GridLayout>
            <HeaderContainer>
              <Header />
            </HeaderContainer>
            <ContentContainer>
              <StyledCanvas resize={{ offsetSize: true }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 50]} />
                <VoxelWorld />
                <PerspectiveCamera position={[0, 0, 20]} />
                <OrbitControls />
              </StyledCanvas>
              <AnimatePresence mode='wait'>
                <div style={{ zIndex: 1 }}>{children}</div>
              </AnimatePresence>
            </ContentContainer>
          </GridLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
