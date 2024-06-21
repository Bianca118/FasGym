<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Subscription;
use Carbon\Carbon;

class UpdateExpiredSubscriptions extends Command
{
    protected $signature = 'subscriptions:update-expired';
    protected $description = 'Update la status abonament';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $currentDate = Carbon::now();

        $expiredSubscriptions = Subscription::where('status', '1')
            ->where('end_date', '<', $currentDate)
            ->get();

        foreach ($expiredSubscriptions as $subscription) {
            $subscription->status = '0';
            $subscription->save();
        }

        $this->info('updated.');
    }
}
