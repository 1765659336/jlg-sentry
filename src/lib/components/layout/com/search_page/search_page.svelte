<script>
  import Search from "carbon-icons-svelte/lib/Search.svelte";
  import * as Dialog from "$lib/components/ui/dialog/index";
  import * as Command from "$lib/components/ui/command/index";
  import SettingsCheck from "carbon-icons-svelte/lib/SettingsCheck.svelte";
</script>

<Dialog.Root>
  <Dialog.Trigger>
    <Search class="mx-2 cursor-pointer"></Search>
  </Dialog.Trigger>
  <Dialog.Content class="sm:max-w-[425px]">
    <Dialog.Header>
      <Dialog.Title>Search Page</Dialog.Title>
      <Dialog.Description>
        Please enter the page you want to go to the keyword
      </Dialog.Description>
    </Dialog.Header>
    <Command.Root class="max-w-[450px] rounded-lg border shadow-md">
      <Command.Input placeholder="Type a command or search..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Suggestions">
          <Command.Item>
            <SettingsCheck class="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </Command.Item>
          <Command.Item>
            <SettingsCheck class="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </Command.Item>
          <Command.Item>
            <SettingsCheck class="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </Command.Item>
        </Command.Group>
        <Command.Separator />
        <Command.Group heading="Settings">
          <Command.Item>
            <SettingsCheck class="mr-2 h-4 w-4" />
            <span>Profile</span>
            <Command.Shortcut>⌘P</Command.Shortcut>
          </Command.Item>
          <Command.Item>
            <SettingsCheck class="mr-2 h-4 w-4" />
            <span>Billing</span>
            <Command.Shortcut>⌘B</Command.Shortcut>
          </Command.Item>
          <Command.Item>
            <SettingsCheck class="mr-2 h-4 w-4" />
            <span>Settings</span>
            <Command.Shortcut>⌘S</Command.Shortcut>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Root>
    <Dialog.Footer></Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
