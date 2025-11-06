import { Button } from "@/ui/button";
import { FormField } from "@/ui/form/form-field";
import * as InputFile from "@/ui/form/input-file";
import * as Select from "@/ui/form/select";
import { TextArea } from "@/ui/form/text-area";
import * as Input from "@/ui/input";
import { SettingsTabs } from "@/ui/settings-tabs";
import {
  BoldIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  ListOrderedIcon,
  MailIcon,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col ">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex flex-col gap-5 w-full divide-y divide-zinc-300"
        >
          <FormField>
            <label
              htmlFor="first-name"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 ">
              <Input.Root>
                <Input.Control
                  id="first-name"
                  name="first-name"
                  defaultValue="Igo"
                />
              </Input.Root>

              <div className="flex flex-col gap-3">
                <label
                  htmlFor="last-name"
                  className="text-sm font-medium text-zinc-700 lg:sr-only"
                >
                  Last name
                </label>

                <Input.Root>
                  <Input.Control id="last-name" defaultValue="Carvalho" />
                </Input.Root>
              </div>
            </div>
          </FormField>

          <FormField>
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <MailIcon className="size-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="igocarvalho@me.com"
              />
            </Input.Root>
          </FormField>

          <FormField>
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <InputFile.Root className="flex flex-col lg:flex-row lg:items-start gap-5">
              <InputFile.ImagePreview />
              <InputFile.Trigger />
              <InputFile.Control />
            </InputFile.Root>
          </FormField>

          <FormField>
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="Frontend Developer" />
            </Input.Root>
          </FormField>

          <FormField>
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>

            <Select.Root placeholder="Select a country..." defaultValue="br">
              <Select.Item value="br">Brazil</Select.Item>
              <Select.Item value="us">United States</Select.Item>
            </Select.Root>
          </FormField>

          <FormField>
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Select.Root placeholder="Select a timezone..." defaultValue="sp">
              <Select.Item value="pst">
                Pacific Standard Time (UTC-08:00)
              </Select.Item>
              <Select.Item value="sp">
                America São Paulo (UTC-03:00)
              </Select.Item>
            </Select.Root>
          </FormField>

          <FormField>
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="grid lg:grid-cols-2 gap-3">
                <Select.Root defaultValue="normal">
                  <Select.Item value="normal">Normal Text</Select.Item>
                  <Select.Item value="md">Markdown</Select.Item>
                </Select.Root>

                <div className="flex items-center gap-1">
                  <Button variant="icon">
                    <BoldIcon className="size-4 text-zinc-500" />
                  </Button>

                  <Button variant="icon">
                    <ItalicIcon className="size-4 text-zinc-500" />
                  </Button>

                  <Button variant="icon">
                    <LinkIcon className="size-4 text-zinc-500" />
                  </Button>

                  <Button variant="icon">
                    <ListIcon className="size-4 text-zinc-500" />
                  </Button>

                  <Button variant="icon">
                    <ListOrderedIcon className="size-4 text-zinc-500" />
                  </Button>
                </div>
              </div>

              <TextArea id="bio" defaultValue="I'm a Frontend Developer" />
            </div>
          </FormField>

          <FormField>
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <InputFile.Root>
              <InputFile.Trigger />
              <InputFile.FileList />
              <InputFile.Control multiple />
            </InputFile.Root>
          </FormField>

          <div className="flex items-center justify-end gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
