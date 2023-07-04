'use client';
import { StyledComponentsRegistry } from '@/lib';
import { M_PLUS_Rounded_1c } from 'next/font/google';
import {
  ContentContainer,
  GlobalStyles,
  GridLayout,
  HeaderContainer,
} from './styles';
import { Header } from '@/components';
import { AnimatePresence, motion } from 'framer-motion';

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
              <AnimatePresence mode='wait'>{children}</AnimatePresence>
            </ContentContainer>
          </GridLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
