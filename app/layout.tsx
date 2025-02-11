import type { Metadata, Viewport } from 'next'
import './globals.css'  
import Footer from './components/Footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'MBTI 테스트 - 나의 성격유형은?',
  description: '재미있고 정확한 MBTI 성격유형 테스트를 통해 나의 진정한 성격을 알아보세요. 16가지 성격유형 중 나는 어떤 유형일까요?',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: ['MBTI', '성격유형', '심리테스트', '성격테스트', 'MBTI 테스트'],
  openGraph: {
    title: 'MBTI 테스트 - 나의 성격유형은?',
    description: '재미있고 정확한 MBTI 성격유형 테스트로 나를 알아보세요',
    type: 'website',
    locale: 'ko_KR',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
