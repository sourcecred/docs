---
title: 🌾 Distributing Grain
description: Information on how grain is distributed and converted
---

## Grain Distribution Policy

Grain distribution is a two-step process in which the Cred is recomputed (so
scores are as fresh as possible), and Grain is then distributed based on those
Cred scores.

SourceCred currently has two policies for how a project distributes Grain:

- `IMMEDIATE` splits Grain evenly based on how much Cred each participant earned
  in the last week. (This policy ignores all Cred from previous weeks, and is
  intended to give fast rewards to active participants).
- `BALANCED` splits Grain based both on lifetime Cred and on lifetime Grain
  earnings. `Balanced` tries to ensure that everyone in the project receives a
  total Grain payment which is consistent with their total Cred score. For
  example, suppose that a contributor used to have a low Cred score, and as such
  received a small amount of Grain. However, the community recently changed its
  weights, or added a new plugin, such that the contributor now has a larger
  amount of Cred. The balanced policy sees that this contributor is underpaid,
  so it will pay them extra to "catch them up" to others in the project.
  Conversely, contributors might be "overpaid" and they'll receive less Grain
  until the payouts have been equalized.
- `RECENT` splits Grain based on recent Cred using an exponential decay to
  prioritize more recent cred. The `recentWeeklyDecayRate` parameter determines
  to what degree you want to focus on recent contributions. If
  `recentWeeklyDecayRate` is set to 0.5 (i.e. 50% discount), as in the above
  example, the policy will count 100% of the Cred generated in the last week,
  50% of the Cred generated in the week before, 25% from the week before that,
  12.5% from the week before that, and so on.

The above is except is pulled from [How Grain Works](https://sourcecred.io/docs/beta/grain#grain-distribution-policies). Please visit the page for more information on Grain Distribution and FAQs.

## Converting Grain 

### How it Works (the basics)
1. You open a CoinbasePro account.

2. You send our Treasurer a Grain Sale Request Form[^2] and the treasurer will send USDC from the SourceCred hardware wallet from the SourceCred account to your wallet on CoinbasePro. The treasurer will then create a Pull Request on Github telling the SourceCred code that this transaction took place, so your Grain balance on the Grain Ledger[^3] will show the adjusted amount.

3. You go on CoinbasePro and sell your USDC for USD (or any other currency).

The above excerpt is pulled from [Guide to Converting Grain](https://discourse.sourcecred.io/t/guide-to-converting-grain/905). Please visit the page for more detailed steps for converting.

## References
- [How Grain Works](https://sourcecred.io/docs/beta/grain#grain-distribution-policies)
- [Guide to Converting Grain](https://discourse.sourcecred.io/t/guide-to-converting-grain/905)

[^1]: https://sourcecred.io/docs/beta/grain#grain-distribution-policies
[^2]: https://docs.google.com/forms/d/e/1FAIpQLScE2orIAyY-N7Qc4P4XFgv-Es1UwH3gJ2U_40TVTYMEZ-gDBA/viewform 
[^3]: http://cred.sourcecred.io/#/accounts

