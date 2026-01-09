'use client'

// Force dynamic rendering to avoid static generation issues with Clerk
export const dynamic = 'force-dynamic'

import { useUser } from '@clerk/nextjs'
import { User, Mail, Shield, Bell } from 'lucide-react'

export default function SettingsPage() {
  const { user, isLoaded } = useUser()

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 mt-1">
          Manage your account preferences
        </p>
      </div>

      {/* Profile Section */}
      <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary-500/10 p-2 rounded-lg">
            <User className="h-5 w-5 text-primary-400" />
          </div>
          <h2 className="text-xl font-semibold text-white">Profile</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Full Name
            </label>
            <div className="bg-[#242b3d] rounded-lg px-4 py-3 text-white">
              {user?.fullName || 'Not set'}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email Address
            </label>
            <div className="bg-[#242b3d] rounded-lg px-4 py-3 text-white flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-500" />
              {user?.primaryEmailAddress?.emailAddress || 'Not set'}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800">
          <p className="text-sm text-gray-500 mb-4">
            To update your profile information, click the button below to access your account settings.
          </p>
          <button
            onClick={() => {
              // Open Clerk's user profile modal
              const userButton = document.querySelector('[data-clerk-user-button-trigger]')
              if (userButton) (userButton as HTMLElement).click()
            }}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-500 transition-colors"
          >
            Manage Profile
          </button>
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-green-500/10 p-2 rounded-lg">
            <Shield className="h-5 w-5 text-green-400" />
          </div>
          <h2 className="text-xl font-semibold text-white">Security</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-[#242b3d] rounded-lg">
            <div>
              <div className="text-white font-medium">Two-Factor Authentication</div>
              <div className="text-sm text-gray-500">
                Add an extra layer of security to your account
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              user?.twoFactorEnabled 
                ? 'bg-green-500/20 text-green-400' 
                : 'bg-gray-700 text-gray-400'
            }`}>
              {user?.twoFactorEnabled ? 'Enabled' : 'Disabled'}
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#242b3d] rounded-lg">
            <div>
              <div className="text-white font-medium">Password</div>
              <div className="text-sm text-gray-500">
                Last changed: Never
              </div>
            </div>
            <button className="text-primary-400 hover:text-primary-300 text-sm font-medium">
              Change Password
            </button>
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-purple-500/10 p-2 rounded-lg">
            <Bell className="h-5 w-5 text-purple-400" />
          </div>
          <h2 className="text-xl font-semibold text-white">Notifications</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-[#242b3d] rounded-lg">
            <div>
              <div className="text-white font-medium">Usage Alerts</div>
              <div className="text-sm text-gray-500">
                Get notified when approaching usage limits
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#242b3d] rounded-lg">
            <div>
              <div className="text-white font-medium">Security Alerts</div>
              <div className="text-sm text-gray-500">
                Get notified about suspicious activity
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#242b3d] rounded-lg">
            <div>
              <div className="text-white font-medium">Product Updates</div>
              <div className="text-sm text-gray-500">
                Receive news about new features and improvements
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-[#1a1f2e] rounded-xl border border-red-900/50 p-6">
        <h2 className="text-xl font-semibold text-red-400 mb-4">Danger Zone</h2>
        <p className="text-gray-400 mb-4">
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <button className="border border-red-700 text-red-400 px-4 py-2 rounded-lg font-medium hover:bg-red-900/30 transition-colors">
          Delete Account
        </button>
      </div>
    </div>
  )
}

