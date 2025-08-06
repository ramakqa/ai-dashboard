import { IconPlus, IconUserPlus, IconHammer, IconMessage } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <IconPlus className="h-5 w-5" />
          Quick Actions
        </CardTitle>
        <CardDescription>
          Common tasks and shortcuts for faster workflow
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
            <IconPlus className="h-5 w-5" />
            <div className="text-center">
              <div className="font-medium">New Request</div>
              <div className="text-xs text-muted-foreground">Create service request</div>
            </div>
          </Button>
          
          <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
            <IconHammer className="h-5 w-5" />
            <div className="text-center">
              <div className="font-medium">Assign Technician</div>
              <div className="text-xs text-muted-foreground">Assign maintenance tasks</div>
            </div>
          </Button>
          
          <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
            <IconMessage className="h-5 w-5" />
            <div className="text-center">
              <div className="font-medium">Send Notice</div>
              <div className="text-xs text-muted-foreground">Broadcast to residents</div>
            </div>
          </Button>
          
          <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
            <IconUserPlus className="h-5 w-5" />
            <div className="text-center">
              <div className="font-medium">Add User</div>
              <div className="text-xs text-muted-foreground">Register new resident</div>
            </div>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 