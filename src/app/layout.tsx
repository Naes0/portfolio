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
import { Header, Footer } from '@/components';
import { AnimatePresence } from 'framer-motion';
import { JapaneseCherry } from '@/components/Common';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

const mplus = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: '400',
});

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
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 50]} />
                <JapaneseCherry />
                <PerspectiveCamera makeDefault position={[130, 20, 20]} />
                <OrbitControls />
              </StyledCanvas>
              <AnimatePresence mode='wait'>
                <div style={{ zIndex: 1 }}>{children}</div>
              </AnimatePresence>
            </ContentContainer>
            <Footer />
          </GridLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
