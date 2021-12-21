import { MetaFunction } from 'remix'
import SiteLayout from '~/components/SiteLayout'
import MastHead from '~/components/MastHead'

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: 'Sunlo - Confirm Your Account',
    description: 'Welcome to Sunlo, the Social Language Learning app',
  }
}

export default function Welcome() {
  return (
    <SiteLayout>
      <div className="min-h-screen flex flex-col justify-center items-center relative">
        <main className="">
          <MastHead />
          <p>
            You're signed-up now. Please check your email for the activation
            email.
          </p>
        </main>
        <aside className="text-center mt-4">(You can close this tab)</aside>
      </div>
    </SiteLayout>
  )
}
