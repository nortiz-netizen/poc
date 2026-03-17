'use client'

import Script from 'next/script'

declare global {
  interface Window {
    embeddedservice_bootstrap?: {
      settings: {
        language?: string
      }
      init: (
        orgId: string,
        deploymentName: string,
        siteUrl: string,
        config: { scrt2URL: string }
      ) => void
    }
  }
}

export default function EmbeddedMessaging() {
  const initEmbeddedMessaging = () => {
    try {
      if (!window.embeddedservice_bootstrap) {
        console.error('embeddedservice_bootstrap no está disponible')
        return
      }

      window.embeddedservice_bootstrap.settings.language = 'en_US'
      window.embeddedservice_bootstrap.init(
        '00DKd00000F3dY8',
        'Bot_Quintum',
        'https://enterprise-java-8562.my.site.com/ESWTestChatquintum1747948694127',
        {
          scrt2URL: 'https://enterprise-java-8562.my.salesforce-scrt.com',
        }
      )
    } catch (err) {
      console.error('Error loading Embedded Messaging:', err)
    }
  }

  return (
    <Script
      id="embedded-messaging-bootstrap"
      src="https://enterprise-java-8562.my.site.com/ESWTestChatquintum1747948694127/assets/js/bootstrap.min.js"
      strategy="afterInteractive"
      onLoad={initEmbeddedMessaging}
    />
  )
}